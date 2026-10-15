import type { Metadata } from "next"
import { getTranslations } from "next-intl/server"

import { HeroSection } from "@/components/shared/hero-section"
import { Section } from "@/components/shared/section"
import { TeamMemberCard } from "@/components/shared/team-member-card"
import { getPageMetadata } from "@/i18n/metadata"
import { getPageLocale, type LocaleParams } from "@/i18n/page-locale"
import { gyms } from "@/lib/data/gyms"
import { teamMembers } from "@/lib/data/team-members"
import type { TeamGroupSlug } from "@/lib/types/team-member"
import { localize } from "@/lib/utils"

const branchGroups = gyms
	.filter(gym => gym.status !== "hidden")
	.sort((a, b) => a.displayOrder - b.displayOrder)
	.map(gym => ({ slug: gym.slug, label: gym.name }))

export async function generateMetadata({
	params,
}: LocaleParams): Promise<Metadata> {
	const locale = await getPageLocale(params)
	const t = await getTranslations({ locale, namespace: "TeamPage" })
	return getPageMetadata({ locale, href: "/about/team", title: t("title") })
}

export default async function TeamPage({ params }: LocaleParams) {
	const locale = await getPageLocale(params)
	const t = await getTranslations("TeamPage")
	const groups: { slug: TeamGroupSlug; label: string }[] = [
		{ slug: "core", label: t("coreGroup") },
		...branchGroups,
	]

	return (
		<>
			<HeroSection title={t("title")} subtitle={t("subtitle")} />

			{groups.map((group, index) => {
				const members = localize(teamMembers, locale)
					.filter(member => member.groupSlug === group.slug)
					.sort((a, b) => a.displayOrder - b.displayOrder)

				if (members.length === 0) {
					return null
				}

				return (
					<Section
						key={group.slug}
						tone={index % 2 === 1 ? "muted" : "default"}
					>
						<h2 className="mb-6 text-2xl font-bold">{group.label}</h2>
						<ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
							{members.map(member => (
								<li key={member.name}>
									<TeamMemberCard member={member} groupLabel={group.label} />
								</li>
							))}
						</ul>
					</Section>
				)
			})}
		</>
	)
}
