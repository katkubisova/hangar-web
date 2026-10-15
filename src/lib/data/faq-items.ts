import type { FaqItemData } from "@/lib/types/faq-item"

// From the first-visit FAQs on hangarbrno.cz/poprve-na-hangaru/ and
// hangarostrava.cz/nejcastejsi-otazky/ (identical apart from parking and
// public transport, which live on each branch's Contact section instead).
export const faqItems: FaqItemData[] = [
	{
		question: {
			cs: "Proč se musím registrovat?",
			en: "Why do I need to register?",
		},
		answer: {
			cs: "Registrací potvrzuješ, že znáš návštěvní řád, a bezpečnost je pro nás na prvním místě. Registruješ se jen jednou a vznikne ti zákaznický účet, přes který můžeš vložit depozit, koupit permanentku nebo členství. Online registrace ti ušetří čas na baru.",
			en: "By registering you confirm you know the visitor rules, and safety comes first. You only register once, and you get a customer account you can use to add credit or buy a pass or membership. Registering online saves you time at the bar.",
		},
		displayOrder: 1,
	},
	{
		question: {
			cs: "Platí moje registrace na obou pobočkách?",
			en: "Does my registration work at both branches?",
		},
		answer: {
			cs: "Bohužel ne. Každé centrum potřebuje z oficiálních důvodů vlastní registraci, takže se registruješ zvlášť v Brně a zvlášť v Ostravě. Hangar čip ale můžeš používat na obou pobočkách.",
			en: "Unfortunately not. For official reasons each centre needs its own registration, so you register separately in Brno and in Ostrava. Your Hangar chip works at both branches, though.",
		},
		displayOrder: 2,
	},
	{
		question: {
			cs: "K čemu je Hangar čip?",
			en: "What is the Hangar chip for?",
		},
		answer: {
			cs: "Čip zrychlí každou další návštěvu: ukážeš ho na baru, obsluha ho naskenuje a hned vidí tvůj účet. Nechce se ti ho nosit? Stačí si vyfotit čárový kód do mobilu.",
			en: "The chip speeds up every visit: show it at the bar, staff scan it and see your account straight away. Don't want to carry it? Just take a photo of the barcode on your phone.",
		},
		displayOrder: 3,
	},
	{
		question: {
			cs: "Co potřebuju na první návštěvu?",
			en: "What do I need for my first visit?",
		},
		answer: {
			cs: "Pohodlné sportovní oblečení, lezečky a magnézium. Lezečky ti půjčíme, magnézium koupíš na baru za pár korun. A vezmi si ručník, budeš se potit!",
			en: "Comfortable sportswear, climbing shoes and chalk. We'll lend you shoes, and you can buy chalk at the bar for a few crowns. Bring a towel too, you'll sweat!",
		},
		displayOrder: 4,
	},
	{
		question: {
			cs: "Nemám lezečky. Můžu lézt v teniskách?",
			en: "I don't have climbing shoes. Can I climb in trainers?",
		},
		answer: {
			cs: "Lezečky ti rádi půjčíme, máme spoustu velikostí a po každém použití je dezinfikujeme. V jiných botách se ti nebude dobře lézt a můžeš poškodit chyty. Na boso se lézt nesmí.",
			en: "We'll happily lend you climbing shoes; we have plenty of sizes and disinfect them after every use. Other shoes won't climb well and can damage the holds. Barefoot climbing isn't allowed.",
		},
		displayOrder: 5,
	},
	{
		question: {
			cs: "Můžou lézt i děti?",
			en: "Can kids climb?",
		},
		answer: {
			cs: "Určitě, děti jsou obdivuhodní lezci! Dítě do 13 let ale musí být ve všech prostorách Hangaru pod neustálým dohledem rodiče nebo jiné dospělé osoby. Mladiství od 13 do 18 let potřebují pro samostatné lezení písemný souhlas zákonného zástupce.",
			en: "Absolutely, kids are amazing climbers! Children under 13 must be supervised by a parent or another adult in all areas of Hangar at all times. Teens aged 13 to 18 need written consent from a legal guardian to climb on their own.",
		},
		displayOrder: 6,
	},
	{
		question: {
			cs: "Je vstupné celodenní?",
			en: "Is the entry valid all day?",
		},
		answer: {
			cs: "Ano. I když přijdeš dopoledne, můžeš zůstat celý den.",
			en: "Yes. Even if you come in the morning, you can stay all day.",
		},
		displayOrder: 7,
	},
	{
		question: {
			cs: "Máte otevřeno i o víkendech a svátcích?",
			en: "Are you open on weekends and holidays?",
		},
		answer: {
			cs: "Ano, jsme tu každý den, o víkendech i svátcích. Jedinou výjimkou je Štědrý den.",
			en: "Yes, we're open every day, weekends and holidays included. The only exception is Christmas Eve.",
		},
		displayOrder: 8,
	},
]
