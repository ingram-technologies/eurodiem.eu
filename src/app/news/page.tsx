import Image from "next/image";
import Link from "next/link";
import { NewsArticle, type ArticleVersion } from "@/components/NewsArticle";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
	title: "News",
	description:
		"EuroDIEM in the media, on stage, and on the policymaking and regulatory agenda — press interviews, speaking engagements, and European policy milestones.",
	path: "/news",
});

const assuraliaVersions: ArticleVersion[] = [
	{
		lang: "fr",
		label: "Français",
		title: `EuroDIEM : comment réduire le "protection gap" et doubler la taille du marché assurable privé ?`,
		blocks: [
			{
				type: "p",
				text: `Assurinfo est allé à la rencontre d'Amélie Breitburd, qui nous a parlé d'EuroDIEM, une initiative ambitieuse visant à transformer le marché de l'assurance en Europe pour les risques non encore couverts. Ce projet, qui repose sur la coopétition et la mutualisation des risques, entend réduire le protection gap et doubler la taille du marché assurable privé.`,
			},
			{
				type: "q",
				text: `Pouvez-vous nous expliquer en quoi consiste le projet EuroDIEM et ce qui l'a inspiré ?`,
			},
			{
				type: "p",
				text: `EuroDIEM, ou Digital Insurance Exchange Market, est une initiative visant à créer une plateforme de syndication et de partenariats public-privé au niveau européen. Inspiré par la nécessité de mutualiser les risques et de coopérer entre concurrents.`,
			},
			{
				type: "q",
				text: `Quels sont les principaux objectifs de votre initiative et comment vise-t-elle à combler l'écart de protection et à doubler la taille du marché assurable privé en Europe ? Comment la mutualisation des risques pourrait-elle aider ?`,
			},
			{
				type: "p",
				text: `Les principaux objectifs d'EuroDIEM visent - via la syndication des risques - à réduire le coût du capital, augmenter l'assurabilité et l'abordabilité, et ainsi stimuler la demande. L'existence d'un partage des données notamment liées aux sinistres, agrégées et anonymisées, accentuera la baisse des prix, également favorisée par une meilleure prévention impulsée par l'extension des couvertures. En mutualisant les risques et en créant une plateforme dédiée, l'intention est de doubler la taille du marché assurable privé en Europe et réduire significativement le « protection gap ». Cet accès fléché par la création de la place de marché sera lui-même facteur d'augmentation de la demande.`,
			},
			{
				type: "p",
				text: `Ce « protection gap » représente l'ensemble des risques que les entreprises et les citoyens subissent sans couverture adéquate. Il est généré par de multiples facteurs. EuroDIEM propose une solution lorsqu'aucune offre n'existe, ou qu'elle est trop coûteuse, enclenchant ainsi un cercle vertueux ouvrant les portes d'un nouveau marché. C'est particulièrement vrai pour des risques systémiques ou émergents comme les catastrophes naturelles, les cyberattaques ou la dépendance liée au vieillissement.`,
			},
			{
				type: "q",
				text: `Quels sont les avantages d'une plateforme digitale pour la gestion des risques ?`,
			},
			{
				type: "p",
				text: `Une plateforme digitale permettrait de structurer les données des risques, de faciliter le matching entre assurés et assureurs prêts à se syndiquer, la syndication et de sécuriser les échanges d'informations. En structurant les données via l'IA même sur les risques peu standardisés, les assureurs et les courtiers peuvent mieux comprendre les risques et offrir des couvertures plus adaptées.`,
			},
			{
				type: "q",
				text: `Comment le concept de "coopetition" est-il intégré dans votre approche et quelle est son importance pour le secteur de l'assurance en Europe ?`,
			},
			{
				type: "p",
				text: `Le concept de coopétition, qui combine coopération et compétition, repose sur une idée simple mais puissante : dans certains contextes, collaborer avec ses concurrents peut créer plus de valeur que de rivaliser systématiquement.`,
			},
			{
				type: "p",
				text: `Ce principe s'enracine dans la théorie des jeux, une branche de l'économie qui modélise les interactions stratégiques entre acteurs rationnels. Dans le cas du marché de l'assurance, chaque compagnie cherche à optimiser sa performance, mais se heurte à des défis communs (= les risques systémiques) qui dépassent les capacités individuelles. Entrer en coopétition via la syndication permet de réduire le coût du capital, mutualiser les risques, et répondre à une demande aujourd'hui insatisfaite.`,
			},
			{
				type: "p",
				text: `Ce type de coopération conduit à ce que l'on appelle un équilibre de Nash, une situation où aucun acteur n'a intérêt à changer seul de stratégie, car la solution collective est plus avantageuse pour tous. Au lieu de poursuivre chacun une stratégie individuelle sous-optimale, les assureurs peuvent stabiliser le marché et accroître l'assurabilité globale en agissant ensemble sur certaines couches de risques. Dans le cas d'EuroDIEM, il s'agit également de faire venir sur ce marché de nouveaux acteurs comme les mutuelles locales ou les bancassureurs européens qui pourront prendre des portions de risques réduites, limitant leurs expositions tout en permettant de débloquer ce nouveau marché pour tous.`,
			},
			{
				type: "q",
				text: `Quel est l'impact attendu de l'extension du marché de l'assurance ?`,
			},
			{
				type: "p",
				text: `L'extension du marché de l'assurance pourrait doubler la taille du marché, ajoutant environ 200 milliards de primes supplémentaires, et renforcer la capacité d'investissement en Europe.`,
			},
			{
				type: "q",
				text: `Quels sont les principaux défis liés à ce projet et comment comptez-vous les surmonter ?`,
			},
			{
				type: "p",
				text: `Les principaux défis à relever sont multiples et structurants. Comme dans toute création de place de marché, le premier est de susciter l'étincelle pour fédérer les participants autour des bienfaits de la collaboration. Le second vient du manque d'harmonisation au niveau européen. Cependant, ce sera l'opportunité de profiter du concept de 28e régime pour créer un nouvel espace homogène.`,
			},
			{
				type: "q",
				text: `Pouvez-vous nous parler des partenariats publics et privés (PPP) que vous proposez, et comment ces PPP pourraient transformer le paysage assurantiel européen ?`,
			},
			{
				type: "p",
				text: `Les PPP sont essentiels pour ce projet. En combinant les ressources et l'expertise des secteurs public et privé, nous pouvons créer une infrastructure robuste pour la gestion des risques. Ces partenariats permettront de diversifier et de renforcer la capacité de souscription, tout en augmentant la stabilité financière en Europe, comme proposé par l'ECB et l'EIOPA dans leur papier commun de décembre 2024 dans lequel les bénéfices de la mutualisation sur les risques climatiques au niveau européen sont estimés à 40%. Les deux piliers suggérés qui supposeront une infrastructure européenne pourront être complétés d'un module de syndication des risques, optimisant l'efficacité opérationnelle de l'ensemble.`,
			},
			{
				type: "p",
				text: `La réussite d'un tel projet dépend autant de l'innovation technologique que de la capacité à créer un écosystème de confiance, au service d'un objectif partagé : réduire le protection gap et renforcer la résilience de l'Europe face aux grands risques du XXIe siècle.`,
			},
			{
				type: "q",
				text: `Comment voyez-vous l'avenir d'EuroDIEM et quelles étapes suivantes envisagez-vous pour sa mise en œuvre et son adoption à l'échelle européenne ?`,
			},
			{
				type: "p",
				text: `EuroDIEM est aligné avec l'Union de l'Épargne et de l'Investissement (SIU) en augmentant non seulement la protection financière mais aussi l'investissement grâce aux institutionnels que sont les assureurs, comme l'assurance Vie. L'objectif est de se greffer sur les discussions autour de SIU, d'un PPP européen et de l'essor des ILS pour continuer de susciter l'engagement des parties prenantes.`,
			},
			{
				type: "q",
				text: `Enfin, quel message aimeriez-vous transmettre aux acteurs de l'industrie de l'assurance en Europe quant à l'importance de l'innovation collaborative et des partenariats pour l'avenir du secteur ?`,
			},
			{
				type: "p",
				text: `Le secteur de l'assurance fait aujourd'hui face à des risques d'une ampleur inédite — qu'ils soient climatiques, technologiques ou sociaux — qui dépassent largement les capacités d'un seul acteur, voire d'un seul pays. Pour continuer à remplir notre mission de protection, nous devons sortir d'une logique de silo et embrasser pleinement l'innovation collaborative.`,
			},
		],
	},
	{
		lang: "nl",
		label: "Nederlands",
		title: `EuroDIEM : hoe de "protection gap" verkleinen en de omvang van de particuliere markt verdubbelen?`,
		blocks: [
			{
				type: "p",
				text: `Assurinfo zocht Amélie Breitburd op, die meer uitleg gaf over EuroDIEM: een ambitieus initiatief om de verzekeringsmarkt in Europa met betrekking tot de nog niet gedekte risico's te transformeren. Dit project, dat berust op coöpetitie en de mutualisering van risico's, moet de 'protection gap' verkleinen en de omvang van de particuliere verzekerbare markt verdubbelen.`,
			},
			{
				type: "q",
				text: `Kunt u ons uitleggen wat het EuroDIEM-project precies inhoudt en waar de inspiratie ervoor gehaald werd?`,
			},
			{
				type: "p",
				text: `EuroDIEM, of Digital Insurance Exchange Market, is een initiatief dat de creatie beoogt van een platform voor syndicatie en publiek-private partnerschappen op Europees niveau. De inspiratie ervoor is de noodzaak om risico's te mutualiseren en concurrenten te laten samenwerken.`,
			},
			{
				type: "q",
				text: `Wat zijn de belangrijkste doelstellingen van uw initiatief en hoe zal het de "protection gap" verkleinen en de omvang van de particuliere verzekerbare markt in Europa doen verdubbelen? Hoe kan risicomutualisering hiertoe bijdragen?`,
			},
			{
				type: "p",
				text: `De belangrijkste doelstellingen van EuroDIEM zijn erop gericht om – via risicosyndicatie – de kapitaalkosten te verlagen, de verzekerbaarheid en betaalbaarheid te verhogen en zo de vraag aan te wakkeren. Het delen van geaggregeerde en geanonimiseerde gegevens, met name over schadegevallen, zal zorgen voor een verdere prijsdaling, die ook in de hand gewerkt wordt door betere preventie als gevolg van de uitbreiding van de dekkingen. Het is de bedoeling om, door risico's te mutualiseren en een specifiek platform te creëren, de omvang van de particuliere verzekerbare markt in Europa te verdubbelen en de 'protection gap' aanzienlijk te verkleinen. Deze marktplaatscreatie zal op zich al een factor zijn die de vraag doet toenemen.`,
			},
			{
				type: "p",
				text: `De 'protection gap' slaat op het geheel van risico's waaraan ondernemingen en burgers blootstaan zonder passende dekking. Het is een kloof die wordt teweeggebracht door verschillende factoren. EuroDIEM stelt een oplossing voor wanneer er geen aanbod voorhanden is of wanneer het aanbod te duur is, om zo een positieve spiraal op gang te brengen die deuren naar een nieuwe markt opent. Dat is bij uitstek het geval voor systemische en opkomende risico's als natuurrampen, cyberaanvallen en de zorgnoden van ouderen.`,
			},
			{
				type: "q",
				text: `Wat zijn de voordelen van een digitaal platform voor risicobeheer?`,
			},
			{
				type: "p",
				text: `Met een digitaal platform wordt het mogelijk de risicogegevens te structureren en de 'matching' tussen tot syndicatie bereide verzekerden en verzekeraars te faciliteren, naast het voordeel van de syndicatie zelf en het beveiligen van de gegevensstromen. Door met behulp van AI de gegevens over zelfs weinig gestandaardiseerde risico's te structureren, kunnen verzekeraars de risico's beter begrijpen en dekkingen aanbieden die er beter op afgestemd zijn.`,
			},
			{
				type: "q",
				text: `Hoe is het concept "coöpetitie" in jullie aanpak geïntegreerd en wat is het belang ervan voor de verzekeringssector in Europa?`,
			},
			{
				type: "p",
				text: `Het concept coöpetitie, een samentrekking van coöperatie en competitie, berust op het eenvoudige maar krachtige idee dat samenwerken met concurrenten in bepaalde omstandigheden meer waarde kan creëren dan systematische rivaliteit. Dit beginsel is geworteld in de speltheorie, een tak van de economie die de strategische interacties tussen rationele actoren modelleert.`,
			},
			{
				type: "p",
				text: `In de context van de verzekeringsmarkt wil elke maatschappij haar performantie optimaliseren, maar stoot ze op gemeenschappelijke uitdagingen (= de systemische risico's) die de individuele capaciteiten van een maatschappij te boven gaan. Via syndicatie voor coöpetitie gaan, maakt het mogelijk de kapitaalkosten te verlagen, de risico's te mutualiseren en te beantwoorden aan een vraag waaraan vandaag nog niet wordt voldaan.`,
			},
			{
				type: "p",
				text: `Deze vorm van samenwerking leidt tot wat we een Nash-evenwicht noemen: een situatie waarin geen enkele betrokken partij er belang bij heeft eenzijdig van strategie te veranderen omdat de collectieve oplossing voor iedereen voordeliger is. In plaats van elk een suboptimale individuele strategie te volgen, kunnen de verzekeraars de markt stabiliseren en de globale verzekerbaarheid doen toenemen door samen bepaalde risicolagen aan te pakken. Bij EuroDIEM gaat het er ook om nieuwe spelers naar deze markt te leiden, zoals lokale onderlinge verzekeraars of Europese bank-verzekeraars die beperkte aandelen in de risico's voor hun rekening zouden kunnen nemen, hun blootstelling te beperken en tegelijkertijd deze nieuwe markt voor iedereen te ontsluiten.`,
			},
			{
				type: "q",
				text: `Wat is de verwachte impact van de uitbreiding van de verzekeringsmarkt?`,
			},
			{
				type: "p",
				text: `De uitbreiding van de verzekeringsmarkt zou haar in omvang kunnen doen verdubbelen en voor pakweg 200 miljard aan extra premie-inkomsten zorgen. Ook kan zij de investeringscapaciteit in Europa versterken.`,
			},
			{
				type: "q",
				text: `Wat zijn de grootste uitdagingen bij dit project en hoe wilt u die overwinnen?`,
			},
			{
				type: "p",
				text: `De grootste uitdagingen zijn meervoudig en zijn uitdagingen die tot structurering nopen. Zoals steeds het geval is bij marktplaatscreatie, is de eerste uitdaging een vonk doen ontstaan om de deelnemers te verenigen rond de voordelen van samenwerking. De tweede uitdaging vloeit voort uit het gebrek aan harmonisatie op Europees niveau. Dit is evenwel een gelegenheid om het concept van het 28e stelsel te benutten om een nieuwe homogene ruimte te creëren.`,
			},
			{
				type: "q",
				text: `Kunt u wat dieper ingaan op de voorgestelde publiek-private partnerschappen (PPP's), en hoe die het Europese verzekeringslandschap zouden kunnen transformeren?`,
			},
			{
				type: "p",
				text: `PPP's zijn essentieel voor dit project. Door de middelen en expertise van de publieke en de private sector te combineren, kunnen we een robuuste infrastructuur voor risicobeheer creëren. Dergelijke partnerschappen zullen zorgen voor diversificatie en een versterking van de capaciteit om contracten te sluiten terwijl ze de financiële stabiliteit in Europa doen toenemen, zoals voorgesteld door de ECB en EIOPA in hun gezamenlijke paper van december 2024 waarin wordt geschat dat de mutualisering van klimaatrisico's op Europees niveau het aandeel ongedekte risico's met 40% zou kunnen terugdringen. De twee gesuggereerde pijlers, die een Europese infrastructuur veronderstellen, zouden kunnen worden aangevuld met een risicosyndicatiemodule met het oog op een optimalisering van de operationele doeltreffendheid van het geheel.`,
			},
			{
				type: "p",
				text: `Het welslagen van een dergelijk project hangt zowel af van technologische innovatie als van de capaciteit om een ecosysteem van vertrouwen te creëren ten dienste van een gedeelde doelstelling: het verkleinen van de protection gap en het versterken van de weerbaarheid van Europa ten aanzien van de grote risico's van de 21e eeuw.`,
			},
			{
				type: "q",
				text: `Hoe ziet u de toekomst van EuroDIEM en wat zijn de volgende stappen voor de implementatie en gedragen invoering ervan op Europese schaal?`,
			},
			{
				type: "p",
				text: `EuroDIEM is afgestemd op de Spaar- en investeringsunie (SIU) door niet alleen de financiële bescherming te verhogen, maar ook de investeringen een boost te geven dankzij de institutionele beleggers die de verzekeraars zijn – denk bijvoorbeeld aan de levensverzekering. Het is de bedoeling aan te knopen bij de gesprekken over de SIU, een Europees PPP en de toenemende interesse in Insurance Linked Securities om het engagement van de stakeholders levend te houden.`,
			},
			{
				type: "q",
				text: `Welke boodschap wilt u ten slotte nog tot de actoren in de verzekeringssector in Europa richten over het belang van collaboratieve innovatie en partnerschappen voor de toekomst van de sector?`,
			},
			{
				type: "p",
				text: `De verzekeringssector kampt vandaag met risico's van ongeziene omvang, of die nu klimaatgerelateerd, technologisch of sociaal zijn: risico's die de capaciteiten van individuele actoren of zelfs van een land ruim te boven gaan. Om onze beschermende opdracht te kunnen blijven vervullen, moeten we uit het silodenken stappen en voluit voor collaboratieve innovatie kiezen.`,
			},
		],
	},
];

const agefiVersions: ArticleVersion[] = [
	{
		lang: "fr",
		label: "Français",
		title: `L'Europe cherche les moyens de se couvrir contre les risques climatiques`,
		blocks: [
			{
				type: "p",
				text: `Face à la montée des sinistres climatiques, les régulateurs poussent au déploiement d'un système de couverture spécifique à l'échelle européenne. L'objectif est de réduire le déficit de protection des pays de l'UE. Mais un régime de catastrophes naturelles à l'européenne est-il seulement possible ?`,
			},
			{
				type: "p",
				text: `Alors que l'Europe se réchauffe deux fois plus vite que le reste du monde et fait face à des sinistres climatiques toujours plus importants, l'idée d'un mécanisme de couverture climatique commun fait son chemin au sein de l'Union européenne. Mais la problématique reste complexe.`,
			},
			{
				type: "p",
				text: `Partant du postulat que les risques climatiques en Europe ne sont pas homogènes et ne se produisent pas tous en même temps, les régulateurs y voient une opportunité de mutualiser la couverture climatique à l'échelle européenne. Début avril, l'Eiopa, le régulateur européen de l'assurance, et la Fisma, la direction générale de la stabilité financière de la Commission européenne, ont ainsi appelé, dans un rapport commun, à la création d'un mécanisme de partage des risques climatiques à l'échelle de l'Europe.`,
			},
			{ type: "h", text: `Créer un fonds d'assurance européen` },
			{
				type: "p",
				text: `Le système s'appuierait sur un fonds commun européen d'assurance contre les catastrophes naturelles qui permettrait de diversifier les risques entre pays et les types de périls. Celui-ci serait financé par des primes ajustées au risque afin de maintenir une incitation à la prévention, et participerait à la diversification des expositions et à la réduction de la volatilité des pertes des assureurs comme des Etats membres. La mécanique fonctionnerait par tranches avec l'assurance privée en base, suivie de la réassurance et des marchés financiers, puis des régimes nationaux, et enfin une couche supérieure européenne pour les pertes extrêmes.`,
			},
			{
				type: "p",
				text: `Si les capacités du fonds se trouvent épuisées par des sinistres extrêmes, une garantie par emprunt complèterait le dispositif et agirait comme filet de sécurité supplémentaire (backstop facility). Les prêts seraient souscrits sur les marchés obligataires notamment pour éviter de recourir à des financements publics.`,
			},
			{
				type: "p",
				text: `A lire aussi : Le dossier des risques naturels extrêmes agite le marché de l'assurance`,
			},
			{
				type: "p",
				text: `Les responsabilités publiques et privées seraient définies clairement ex ante afin de réduire l'aléa moral. L'idée n'étant pas de se substituer au marché mais de le renforcer. Le montant du financement nécessaire au mécanisme est estimé par les régulateurs entre 10 et 65 milliards d'euros en fonction de la dynamique du changement climatique et de l'appétit au risque.`,
			},
			{ type: "h", text: `Miser sur la syndication comme au Lloyd's` },
			{
				type: "p",
				text: `A cette proposition, Amélie Breitburd, ancienne dirigeante du Lloyd's Europe et actuelle administratrice de CNP Assurances et de Visa, avance une approche sensiblement différente avec la création d'une place de marché européenne dédiée aux grands risques.`,
			},
			{
				type: "p",
				text: `Celle-ci, fondée sur le principe de co-assurance via la syndication et la titrisation comme les cat bonds entre autres, permettrait de doubler les capacités assurantielles du marché privé quand seules 25% des pertes économiques liées au climat en Europe sont aujourd'hui couvertes par l'assurance. « Raisonner à l'échelle européenne permettrait de réduire le coût du capital de 40% et d'élargir le périmètre couvert par l'assurance privée. On parle d'un nouveau marché estimé à 200 milliards de primes à l'échelle européenne », pointe Amélie Breitburd.`,
			},
			{
				type: "p",
				text: `L'idée ici est d'industrialiser la co-assurance et la titrisation via une plateforme de mise en relation rapprochant les besoins de couverture des capacités offertes par le marché. Les assureurs et réassureurs cédant eux-mêmes leurs risques en fonction de leur appétit.`,
			},
			{
				type: "p",
				text: `« Il s'agirait d'une plateforme de marché fonctionnant avec des prix de marché, comportant différents étages afin d'avoir une multitude de capitaux pour assurer ensemble ce qui n'est pas assurable. Une telle solution peut être envisagée sans aucun changement législatif », précise Amélie Breitburd.`,
			},
			{
				type: "p",
				text: `En parallèle, un fonds central, comme il en existe sur le marché du Lloyd's, serait créé et alimenté selon un fonctionnement similaire aux fonds d'investissement classiques.`,
			},
			{
				type: "p",
				text: `A lire aussi : L'assurance en France pâtit d'un début d'année climatique très coûteux`,
			},
			{ type: "h", text: `Des défis opérationnels de taille` },
			{
				type: "p",
				text: `Si ces deux propositions visent à réduire le déficit de protection de l'UE, des questions demeurent. La définition des périls couverts, notamment, sera un sujet. Les expositions aux risques climatiques (vent, inondation, séisme, submersion, sécheresse) sont très différentes d'une géographie à l'autre, car certains pays ne sont pas du tout soumis au risque de submersion marine, par exemple.`,
			},
			{
				type: "p",
				text: `La couverture assurantielle est un autre sujet. Rien qu'en matière d'assurance habitation, les disparités sont importantes. La France et la Belgique bénéficient de taux de pénétration très élevés, c'est moins le cas en Espagne et en Allemagne où le taux varie en fonction des périls, et en Italie, où le taux de couverture est très faible. « Or, un système de réassurance public-privé, comme celui du régime CatNat français, ne peut structurellement fonctionner sans assurance primaire », rappelle Edouard Viellefond, directeur général de la CCR.`,
			},
			{
				type: "p",
				text: `De même, utiliser toujours plus de capacités financières pour couvrir toujours plus de sinistres climatiques revient à remplir le tonneau des Danaïdes si la démarche n'est pas liée à un plan d'adaptation et de prévention climatique, lui aussi harmonisé à l'échelle européenne. Les conditions d'accès par les assureurs et réassureurs au mécanisme choisi seront donc à définir et à lier à des engagements concrets dans la prévention et la transition pour un effet réel.`,
			},
			{ type: "p", text: `Camille George` },
		],
	},
	{
		lang: "en",
		label: "English",
		title: `Europe seeks the means to insure itself against climate risks`,
		blocks: [
			{
				type: "p",
				text: `Faced with rising climate-related claims, regulators are pushing for the deployment of a dedicated coverage system at European scale. The aim is to reduce the protection gap in EU countries. But is a European-style natural catastrophe regime even possible?`,
			},
			{
				type: "p",
				text: `As Europe warms twice as fast as the rest of the world and faces ever-larger climate-related losses, the idea of a common climate coverage mechanism is gaining ground within the European Union. But the problem remains a complex one.`,
			},
			{
				type: "p",
				text: `Starting from the premise that climate risks in Europe are not homogeneous and do not all occur at the same time, regulators see an opportunity to mutualise climate coverage at European scale. In early April, EIOPA, the European insurance regulator, and FISMA, the European Commission's Directorate-General for Financial Stability, Financial Services and Capital Markets Union, jointly called in a report for the creation of a climate risk-sharing mechanism on a Europe-wide basis.`,
			},
			{ type: "h", text: `Creating a European insurance fund` },
			{
				type: "p",
				text: `The system would rest on a common European insurance fund against natural catastrophes, enabling risks to be diversified across countries and types of peril. It would be financed through risk-adjusted premiums so as to preserve the incentive to prevent losses, and would contribute to diversifying exposures and reducing the volatility of losses both for insurers and for Member States. The mechanism would work in tranches, with private insurance at the base, followed by reinsurance and the financial markets, then national regimes, and finally a European upper layer for extreme losses.`,
			},
			{
				type: "p",
				text: `Should the fund's capacity be exhausted by extreme events, a loan-based guarantee would complete the arrangement and act as an additional safety net (backstop facility). Borrowings would be raised on the bond markets, notably in order to avoid resorting to public financing.`,
			},
			{
				type: "p",
				text: `See also: Extreme natural risks stir the insurance market`,
			},
			{
				type: "p",
				text: `Public and private responsibilities would be clearly defined ex ante in order to reduce moral hazard. The idea is not to substitute for the market but to reinforce it. The financing required for the mechanism is estimated by regulators at between €10 billion and €65 billion, depending on the pace of climate change and on risk appetite.`,
			},
			{ type: "h", text: `Betting on syndication, Lloyd's-style` },
			{
				type: "p",
				text: `In response to this proposal, Amélie Breitburd — former Chief Executive of Lloyd's Europe and currently a board director of CNP Assurances and of Visa — puts forward a materially different approach: the creation of a European marketplace dedicated to large risks.`,
			},
			{
				type: "p",
				text: `This marketplace, founded on the principle of co-insurance via syndication and securitisation (cat bonds among other instruments), would make it possible to double the underwriting capacity of the private market at a time when only 25% of climate-related economic losses in Europe are currently insured. "Thinking at European scale would reduce the cost of capital by 40% and broaden the perimeter covered by private insurance. We are talking about a new market estimated at €200 billion of premium at European scale," notes Amélie Breitburd.`,
			},
			{
				type: "p",
				text: `The idea here is to industrialise co-insurance and securitisation via a matching platform that brings coverage needs into contact with the capacity offered by the market. Insurers and reinsurers themselves cede their risks in line with their own appetite.`,
			},
			{
				type: "p",
				text: `"It would be a market platform operating at market prices, with several tiers so as to marshal a multiplicity of capital sources to jointly insure what is otherwise uninsurable. Such a solution can be envisaged without any legislative change," Amélie Breitburd specifies.`,
			},
			{
				type: "p",
				text: `Alongside this, a central fund — of the kind that exists in the Lloyd's market — would be created and funded along lines similar to conventional investment funds.`,
			},
			{
				type: "p",
				text: `See also: Insurance in France hit by a very costly start to the climate year`,
			},
			{ type: "h", text: `Significant operational challenges` },
			{
				type: "p",
				text: `While both proposals are aimed at reducing the EU's protection gap, questions remain. The definition of covered perils will in particular be a live issue. Exposures to climate risks (wind, flood, earthquake, marine submersion, drought) differ very widely from one geography to another — some countries are not exposed to the risk of marine submersion at all, for example.`,
			},
			{
				type: "p",
				text: `Insurance coverage is another issue. In home insurance alone, the disparities are striking. France and Belgium enjoy very high penetration rates; this is less the case in Spain and Germany, where the rate varies by peril, and in Italy, where the coverage rate is very low. "Yet a public-private reinsurance system such as France's CatNat regime cannot structurally function in the absence of primary insurance," recalls Edouard Vieillefond, Chief Executive of CCR.`,
			},
			{
				type: "p",
				text: `By the same token, deploying ever more financial capacity to cover ever more climate losses amounts to filling the cask of the Danaids unless the exercise is tied to a climate adaptation and prevention plan, itself also harmonised at European level. The conditions under which insurers and reinsurers access the chosen mechanism will therefore need to be defined and linked to concrete commitments on prevention and transition if the effect is to be real.`,
			},
			{ type: "p", text: `Camille George` },
		],
	},
];

const instechVersions: ArticleVersion[] = [
	{
		lang: "en",
		label: "English",
		blocks: [
			{
				type: "p",
				text: `Most insurers are using AI to improve existing processes. What if that's the wrong starting point?`,
			},
			{
				type: "p",
				text: `Ahead of "The Age of Agentic AI: From Strategy to Commercial Value", hosted by InsTech in collaboration with AI Risk on 7 July, InsTech spoke with Amélie Breitburd, Founder of EuroDIEM (Digital Insurance Exchange Market), about why the biggest opportunity in agentic AI may not be optimisation at all. It may be reinvention.`,
			},
			{
				type: "p",
				text: `As insurers explore agentic AI, much of the conversation still centres on automating today's workflows — the same processes, the same operating models, the same assumptions, just faster. According to Amélie, that's precisely where many organisations get stuck. Meanwhile, the real opportunity sits elsewhere: what becomes possible when work is redesigned from scratch, what products can be created that couldn't exist before, and what markets become accessible.`,
			},
			{
				type: "p",
				text: `On stage, Amélie shares perspectives on how insurers move beyond pilots into production deployment, how to build the business case for agentic AI, and what the insurance industry could look like by 2030 — illustrated through three agentic AI case studies of what leading insurers are actually building.`,
			},
			{
				type: "p",
				text: `The event brings together 350 insurance professionals at Cavendish Venues, London, on 7 July 2026, focusing on the commercial, operational and strategic realities of agentic AI — beyond the hype and beyond the pilot stage.`,
			},
		],
	},
];

function ArticleCard({
	tag,
	title,
	subtitle,
	versions,
	badges,
	link,
	image,
}: {
	tag: string;
	title: string;
	subtitle?: string;
	versions: ArticleVersion[];
	badges?: string[];
	link?: { href: string; label: string };
	image?: { src: string; alt: string };
}) {
	// When each language version carries its own headline, NewsArticle renders the
	// localized title (so it switches with the language tab); skip the static one.
	const versionsHaveTitles = versions.some((version) => version.title);

	return (
		<article className={`news-card${image ? "" : " news-card--text"}`}>
			{image ? (
				<div className="news-card__media">
					<figure className="news-card__figure">
						<Image
							src={image.src}
							alt={image.alt}
							width={1000}
							height={800}
							sizes="(min-width: 900px) 40vw, 90vw"
						/>
					</figure>
				</div>
			) : null}

			<div className="news-card__body">
				<p className="news-card__tag">{tag}</p>
				{versionsHaveTitles ? null : (
					<h3 className="news-card__title">{title}</h3>
				)}
				{subtitle ? <p className="news-card__subtitle">{subtitle}</p> : null}

				<NewsArticle versions={versions} />

				{badges?.length || link ? (
					<div className="news-card__meta">
						{badges?.length ? (
							<div className="news-card__badges">
								{badges.map((badge) => (
									<span key={badge} className="news-badge">
										{badge}
									</span>
								))}
							</div>
						) : null}
						{link ? (
							<a
								href={link.href}
								className="text-link"
								target="_blank"
								rel="noopener noreferrer"
							>
								{link.label}
							</a>
						) : null}
					</div>
				) : null}
			</div>
		</article>
	);
}

export default function NewsPage() {
	return (
		<>
			{/* In the media */}
			<section className="section">
				<div className="container">
					<p className="section__eyebrow">In the media</p>
					<h2 className="section__title">Press & interviews</h2>
					<p className="section__lead">
						Coverage of EuroDIEM and its mission to reduce the protection
						gap and double the size of the private insurance market.
					</p>

					<div className="news-list">
						<ArticleCard
							tag="Assuralia — Assurinfo"
							title="Reducing the protection gap and doubling the private insurance market"
							versions={assuraliaVersions}
						/>
						<ArticleCard
							tag="L'Agefi — 21 April 2026"
							title="Europe seeks the means to insure itself against climate risks"
							versions={agefiVersions}
						/>
					</div>
				</div>
			</section>

			{/* On stage */}
			<section className="section section--pale">
				<div className="container">
					<p className="section__eyebrow">On stage</p>
					<h2 className="section__title">Panels & speaking</h2>
					<p className="section__lead">
						Where EuroDIEM is contributing to the industry conversation on
						syndication, public-private partnerships, and agentic AI.
					</p>

					<div className="news-list">
						<article className="news-card">
							<div className="news-card__media">
								<figure className="news-card__figure">
									<Image
										src="/images/news/insurtech-insight.jpg"
										alt="EuroDIEM on the Public-Private Partnerships panel at Insurtech Insight Europe, London 2025"
										width={1400}
										height={933}
										sizes="(min-width: 900px) 40vw, 90vw"
									/>
								</figure>
							</div>
							<div className="news-card__body">
								<p className="news-card__tag">
									Insurtech Insight — London, 2025
								</p>
								<h3 className="news-card__title">
									Public-Private Partnerships: Collaboration on Large
									Risks
								</h3>
								<div className="news-article__body">
									<p>
										EuroDIEM joined the Insurtech Insight Europe
										panel in London on public-private partnerships
										and collaboration on large risks — exploring how
										the public and private sectors can share
										capacity for the systemic and emerging risks
										that neither can carry alone.
									</p>
								</div>
							</div>
						</article>

						<ArticleCard
							tag="InsTech × AI Risk — London, 7 July 2026"
							title="The Age of Agentic AI: From Strategy to Commercial Value"
							subtitle="What leading insurers are actually building: three agentic AI case studies."
							versions={instechVersions}
							image={{
								src: "/images/news/instech-speaker.jpg",
								alt: "InsTech — Amélie Breitburd, speaker at The Age of Agentic AI, 7 July 2026, London",
							}}
						/>
					</div>
				</div>
			</section>

			{/* Policymaking & regulatory */}
			<section className="section">
				<div className="container">
					<p className="section__eyebrow">Policymaking & regulatory</p>
					<h2 className="section__title">On the European agenda</h2>
					<p className="section__lead">
						The consultations and regulatory proposals shaping the case for
						a European marketplace for large and unconventional risks.
					</p>

					<div className="news-list">
						<article className="news-card news-card--text">
							<div className="news-card__body">
								<p className="news-card__tag">
									European Commission — DG CLIMA
								</p>
								<h3 className="news-card__title">
									EU consultation on future climate resilience
								</h3>
								<div className="news-article__body">
									<p>
										Launched in December 2025, DG CLIMA&rsquo;s
										&ldquo;Future Resilience&rdquo; consultation
										asks how market-based mechanisms can address the
										growing insurance gap and improve access to
										affordable insurance. Among its questions:
									</p>
									<ul className="news-question-list">
										<li>
											What risk-pooling and transfer mechanisms
											would best increase cover for secondary
											perils in the EU?
										</li>
										<li>
											How can insurers access new capital to back
											climate-related policies, and how can
											private investor interest in
											insurance-linked vehicles be mobilised?
										</li>
										<li>
											Is there a need for a European marketplace
											where climate-related risk can be pooled
											among insurance companies and non-insurance
											investors?
										</li>
									</ul>
									<p>
										DG CLIMA&rsquo;s Reflection Group on Mobilising
										Climate Resilience Financing points directly to
										capital-market platforms that bring together
										capital providers, underwriters and insurance
										seekers — the model at the heart of EuroDIEM.
									</p>
								</div>
								<div className="news-card__meta">
									<a
										href="/docs/Consultation%20and%20report.pdf"
										className="text-link"
										target="_blank"
										rel="noopener noreferrer"
									>
										Read the consultation extract (PDF)
									</a>
								</div>
							</div>
						</article>

						<article className="news-card news-card--wide">
							<div className="news-card__body">
								<p className="news-card__tag">EIOPA · ECB · ESM</p>
								<h3 className="news-card__title">
									Towards a European system for natural catastrophe
									risk management
								</h3>
								<div className="news-article__body">
									<p>
										Proposals from EIOPA, the ECB and the ESM call
										for a European approach to sharing
										natural-catastrophe risk — pooling private risks
										and perils across the EU to exploit economies of
										scale and the benefits of diversification across
										sectors and regions. The joint work estimates
										the benefit of mutualising climate risk at
										European level at around 40%.
									</p>
									<p>
										EuroDIEM&rsquo;s schemes are consistent with
										these proposals, extending them beyond nat-cat
										property risks to the wider universe of large
										and unconventional risks, and adding a
										syndication module that optimises the
										operational efficiency of the whole.
									</p>
								</div>
							</div>
							<div className="news-card__media">
								<figure className="news-card__figure">
									<Image
										src="/images/news/eiopa-esm-report.jpg"
										alt="EIOPA & ESM — Sharing the risk: a European approach to natural catastrophe risk management"
										width={1000}
										height={404}
										sizes="(min-width: 900px) 45vw, 90vw"
									/>
								</figure>
								<figure className="news-card__figure">
									<Image
										src="/images/news/ecb-eiopa-report.jpg"
										alt="ECB & EIOPA — Towards a European system for natural catastrophe risk management"
										width={1000}
										height={703}
										sizes="(min-width: 900px) 45vw, 90vw"
									/>
								</figure>
							</div>
						</article>
					</div>
				</div>
			</section>

			<section className="cta-band">
				<div className="container">
					<h2 className="cta-band__title">
						Stay <em>informed</em>
					</h2>
					<p className="cta-band__lead">
						Follow EuroDIEM&rsquo;s progress across media, industry stages,
						and European policymaking.
					</p>
					<div className="cta-band__actions">
						<Link href="/#newsletter" className="btn btn--solid-light">
							Join our newsletter →
						</Link>
						<Link href="/contact" className="btn btn--ghost-light">
							Contact Us
						</Link>
					</div>
				</div>
			</section>
		</>
	);
}
