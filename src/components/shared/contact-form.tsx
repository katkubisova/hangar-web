"use client"

import { type FormEvent, useId, useState } from "react"

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { cn } from "@/lib/utils"

const ACCEPTED_CV_EXTENSIONS = [".pdf", ".doc", ".docx"]
const MAX_CV_SIZE_BYTES = 5 * 1024 * 1024 // 5 MB
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

interface ContactFormProps {
	/** "careers" adds a CV file upload field. */
	variant?: "default" | "careers"
	className?: string
}

interface FormErrors {
	name?: string
	email?: string
	phone?: string
	message?: string
	cv?: string
	consent?: string
}

export function ContactForm({
	variant = "default",
	className,
}: ContactFormProps) {
	const formId = useId()
	const [errors, setErrors] = useState<FormErrors>({})
	const [submitted, setSubmitted] = useState(false)

	function validateCvFile(file: File | undefined): string | undefined {
		if (!file) return undefined
		const hasAcceptedExtension = ACCEPTED_CV_EXTENSIONS.some(ext =>
			file.name.toLowerCase().endsWith(ext)
		)
		if (!hasAcceptedExtension) {
			return "File must be a PDF, DOC, or DOCX."
		}
		if (file.size > MAX_CV_SIZE_BYTES) {
			return "File must be 5 MB or smaller."
		}
		return undefined
	}

	function handleSubmit(event: FormEvent<HTMLFormElement>) {
		event.preventDefault()

		const formData = new FormData(event.currentTarget)
		const name = String(formData.get("name") ?? "").trim()
		const email = String(formData.get("email") ?? "").trim()
		const phone = String(formData.get("phone") ?? "").trim()
		const message = String(formData.get("message") ?? "").trim()
		const consent = formData.get("consent") === "on"
		const cvFile =
			variant === "careers"
				? ((formData.get("cv") as File) ?? undefined)
				: undefined

		const nextErrors: FormErrors = {}
		if (!name) nextErrors.name = "Name is required."
		if (!email) {
			nextErrors.email = "Email is required."
		} else if (!EMAIL_PATTERN.test(email)) {
			nextErrors.email = "Enter a valid email address."
		}
		if (!phone) nextErrors.phone = "Phone number is required."
		if (!message) nextErrors.message = "Message is required."
		if (variant === "careers") {
			const cvError = validateCvFile(
				cvFile && cvFile.size > 0 ? cvFile : undefined
			)
			if (cvError) nextErrors.cv = cvError
		}
		if (!consent) {
			nextErrors.consent = "You must agree before submitting."
		}

		setErrors(nextErrors)

		if (Object.keys(nextErrors).length === 0) {
			// TODO: wire up real submission once a backend endpoint exists
			// (see CLAUDE.md Phase 5 — submission handling is not decided yet).
			setSubmitted(true)
		}
	}

	if (submitted) {
		return (
			<Alert className={className}>
				<AlertTitle>Message received</AlertTitle>
				<AlertDescription>
					This is a wireframe prototype — no message was actually sent.
					<div className="mt-3">
						<Button
							type="button"
							variant="outline"
							size="sm"
							onClick={() => setSubmitted(false)}
						>
							Send another message
						</Button>
					</div>
				</AlertDescription>
			</Alert>
		)
	}

	return (
		<form
			noValidate
			onSubmit={handleSubmit}
			className={cn("flex flex-col gap-4", className)}
		>
			<div className="flex flex-col gap-1.5">
				<Label htmlFor={`${formId}-name`}>Name</Label>
				<Input
					id={`${formId}-name`}
					name="name"
					aria-invalid={Boolean(errors.name)}
					aria-describedby={errors.name ? `${formId}-name-error` : undefined}
				/>
				{errors.name && (
					<p id={`${formId}-name-error`} className="text-sm text-destructive">
						{errors.name}
					</p>
				)}
			</div>

			<div className="flex flex-col gap-1.5">
				<Label htmlFor={`${formId}-email`}>Email</Label>
				<Input
					id={`${formId}-email`}
					name="email"
					type="email"
					aria-invalid={Boolean(errors.email)}
					aria-describedby={errors.email ? `${formId}-email-error` : undefined}
				/>
				{errors.email && (
					<p id={`${formId}-email-error`} className="text-sm text-destructive">
						{errors.email}
					</p>
				)}
			</div>

			<div className="flex flex-col gap-1.5">
				<Label htmlFor={`${formId}-phone`}>Phone</Label>
				<Input
					id={`${formId}-phone`}
					name="phone"
					type="tel"
					aria-invalid={Boolean(errors.phone)}
					aria-describedby={errors.phone ? `${formId}-phone-error` : undefined}
				/>
				{errors.phone && (
					<p id={`${formId}-phone-error`} className="text-sm text-destructive">
						{errors.phone}
					</p>
				)}
			</div>

			<div className="flex flex-col gap-1.5">
				<Label htmlFor={`${formId}-message`}>Message</Label>
				<Textarea
					id={`${formId}-message`}
					name="message"
					rows={4}
					aria-invalid={Boolean(errors.message)}
					aria-describedby={
						errors.message ? `${formId}-message-error` : undefined
					}
				/>
				{errors.message && (
					<p
						id={`${formId}-message-error`}
						className="text-sm text-destructive"
					>
						{errors.message}
					</p>
				)}
			</div>

			{variant === "careers" && (
				<div className="flex flex-col gap-1.5">
					<Label htmlFor={`${formId}-cv`}>
						CV (PDF, DOC, or DOCX, max 5 MB)
					</Label>
					<Input
						id={`${formId}-cv`}
						name="cv"
						type="file"
						accept={ACCEPTED_CV_EXTENSIONS.join(",")}
						aria-invalid={Boolean(errors.cv)}
						aria-describedby={errors.cv ? `${formId}-cv-error` : undefined}
					/>
					{errors.cv && (
						<p id={`${formId}-cv-error`} className="text-sm text-destructive">
							{errors.cv}
						</p>
					)}
				</div>
			)}

			<div className="flex flex-col gap-1.5">
				<div className="group flex items-center gap-2">
					<Checkbox
						id={`${formId}-consent`}
						name="consent"
						aria-invalid={Boolean(errors.consent)}
						aria-describedby={
							errors.consent ? `${formId}-consent-error` : undefined
						}
					/>
					<Label htmlFor={`${formId}-consent`} className="font-normal">
						I agree to have my data processed in accordance with the{" "}
						<a href="/privacy-policy" className="underline">
							Privacy Policy
						</a>
						.
					</Label>
				</div>
				{errors.consent && (
					<p
						id={`${formId}-consent-error`}
						className="text-sm text-destructive"
					>
						{errors.consent}
					</p>
				)}
			</div>

			<Button type="submit" className="w-fit">
				Submit
			</Button>
		</form>
	)
}
