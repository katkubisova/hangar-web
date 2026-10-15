"use client"

import { useTranslations } from "next-intl"
import { type FormEvent, useId, useState } from "react"

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Link } from "@/i18n/navigation"
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
	const t = useTranslations("ContactForm")
	const formId = useId()
	const [errors, setErrors] = useState<FormErrors>({})
	const [submitted, setSubmitted] = useState(false)

	function validateCvFile(file: File | undefined): string | undefined {
		if (!file) return undefined
		const hasAcceptedExtension = ACCEPTED_CV_EXTENSIONS.some(ext =>
			file.name.toLowerCase().endsWith(ext)
		)
		if (!hasAcceptedExtension) {
			return t("errors.cvType")
		}
		if (file.size > MAX_CV_SIZE_BYTES) {
			return t("errors.cvSize")
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
		if (!name) nextErrors.name = t("errors.nameRequired")
		if (!email) {
			nextErrors.email = t("errors.emailRequired")
		} else if (!EMAIL_PATTERN.test(email)) {
			nextErrors.email = t("errors.emailInvalid")
		}
		if (!phone) nextErrors.phone = t("errors.phoneRequired")
		if (!message) nextErrors.message = t("errors.messageRequired")
		if (variant === "careers") {
			const cvError = validateCvFile(
				cvFile && cvFile.size > 0 ? cvFile : undefined
			)
			if (cvError) nextErrors.cv = cvError
		}
		if (!consent) {
			nextErrors.consent = t("errors.consentRequired")
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
				<AlertTitle>{t("success.title")}</AlertTitle>
				<AlertDescription>
					{t("success.description")}
					<div className="mt-3">
						<Button
							type="button"
							variant="outline"
							size="sm"
							onClick={() => setSubmitted(false)}
						>
							{t("success.sendAnother")}
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
				<Label htmlFor={`${formId}-name`}>{t("name")}</Label>
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
				<Label htmlFor={`${formId}-email`}>{t("email")}</Label>
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
				<Label htmlFor={`${formId}-phone`}>{t("phone")}</Label>
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
				<Label htmlFor={`${formId}-message`}>{t("message")}</Label>
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
					<Label htmlFor={`${formId}-cv`}>{t("cv")}</Label>
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
						{t.rich("consent", {
							link: chunks => (
								<Link href="/privacy-policy" className="underline">
									{chunks}
								</Link>
							),
						})}
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
				{t("submit")}
			</Button>
		</form>
	)
}
