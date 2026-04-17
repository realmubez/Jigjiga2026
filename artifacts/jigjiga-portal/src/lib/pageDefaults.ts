import { PageContent, ContentGroup, ContentSection } from "./contentStore";

export type PageType = "article" | "hub";

export interface PageMeta {
  id: string;
  label: string;
  group: string;
  type: PageType;
  defaults: PageContent;
}

export const PAGE_REGISTRY: PageMeta[] = [
  // ── History & Culture ────────────────────────────────────────────────────
  {
    id: "history-culture",
    label: "History & Culture Hub",
    group: "History & Culture",
    type: "hub",
    defaults: {
      heroImageUrl: "https://picsum.photos/seed/history-hero/1600/900",
      groups: [
        {
          id: "legendary",
          label: "Legendary Figures",
          items: [
            { id: "l1", name: "Sayid Mohamed Abdullah Hassan", subtitle: "The Visionary Warrior", description: "Known as the \"Father of Somali Nationalism,\" the Sayid led the Dervish resistance for over 20 years. He was a master of both the sword and the pen, using his famous poetry to unite the people against colonial rule.", image: "/sayid-hassan-statue-2.jpg", tag: "Dervish Era", href: "/history-culture/sayid-hassan" },
            { id: "l2", name: "Garad Wiil-Waal", subtitle: "The Wise Sultan", description: "A legendary 16th-century ruler of the Jigjiga plains, famous for his intelligence and his use of riddles to test the wisdom of his people. He represents the ideal of a leader who rules through wit, justice, and bravery.", image: "/garad-wiil-waal-portrait.jpg", tag: "16th Century", href: "/history-culture/garad-wiil-waal" },
          ],
        },
        {
          id: "empires",
          label: "Kingdoms & Empires",
          items: [
            { id: "e1", name: "The Adal Sultanate", subtitle: "The Golden Age of the Horn", description: "One of the most powerful Islamic empires in African history. Stretching from the shores of Zeila to the highlands of Ethiopia, Adal shaped the faith, language, and culture of Jigjiga for centuries.", image: "https://picsum.photos/seed/adal-empire/800/500", tag: "13th–16th Century", href: "/history-culture/adal-sultanate" },
          ],
        },
        {
          id: "governance",
          label: "Governance & Law",
          items: [
            { id: "g1", name: "The Xeer System", subtitle: "Customary Law", description: "Long before modern legal systems, the Somali people governed themselves through Xeer — a traditional constitution where elders gather to settle disputes through consensus and shared values.", image: "https://picsum.photos/seed/xeer-elders/600/400", icon: "⚖️", href: "/history-culture/xeer-system" },
            { id: "g2", name: "Traditional Leadership", subtitle: "The Ugaas & Garad", description: "The social fabric of Jigjiga is held together by traditional leaders. Through the sacred \"Caleemo-Saar\" ceremony, these leaders are appointed to protect the culture and serve as the ultimate guardians of the community.", image: "https://picsum.photos/seed/ugaas-leader/600/400", icon: "👑", href: "/history-culture/traditional-leadership" },
          ],
        },
        {
          id: "arts",
          label: "Arts & Culture",
          items: [
            { id: "a1", name: "Dhaanto", subtitle: "The Pulse of the People", description: "Dhaanto is the iconic folk dance of the Somali Region. With its rhythmic clapping and synchronized footwork, it tells the story of nomadic life and celebration.", image: "https://picsum.photos/seed/dhaanto-dance/600/400", icon: "🎶", href: "/history-culture/dhaanto" },
            { id: "a2", name: "Somali Aqal", subtitle: "The Portable Palace", description: "The Aqal is the traditional Somali portable home — a dome-shaped shelter woven by women from saplings and mats. A masterpiece of design that can be assembled in hours and carried by camel.", image: "https://picsum.photos/seed/somali-aqal/600/400", icon: "🏠", href: "/history-culture/somali-aqal" },
            { id: "a3", name: "Somali Poetry (Maanso)", subtitle: "The Nation of Poets", description: "In Jigjiga, poetry is not just art — it is history, law, and news. From the supreme Gabay to the lively Heello, Somali poetry has shaped every era of the city's story.", image: "https://picsum.photos/seed/somali-poetry-maanso/600/400", icon: "📜", href: "/history-culture/somali-poetry" },
            { id: "a4", name: "Uunsi — The Scent of Somali Hospitality", subtitle: "Fooh, Myrrh & the Dabqaad", description: "In Jigjiga, a home isn't ready until the scent of Uunsi fills the air. This handcrafted incense blend of frankincense, myrrh, attars, and musk is the signature of Somali welcome.", image: "https://picsum.photos/seed/uunsi-incense-dabqaad/600/400", icon: "🌿", href: "/history-culture/uunsi" },
            { id: "a5", name: "The Ultimate Guide to Festivals in Jigjiga", subtitle: "Eid · Flag Day · Qaaci Nights · Wedding Season", description: "From the massive Eid prayers at Jijiga Stadium to the intimate Qaaci Nights at the Sky Hotel — the insider's guide to every major celebration in Jigjiga.", image: "https://picsum.photos/seed/jigjiga-festivals-eid/600/400", icon: "🎉", href: "/history-culture/festivals" },
            { id: "a6", name: "The Soul of Jigjiga Nights", subtitle: "Qaaci · Singer Shows · The Aroos", description: "From intimate Kaban evenings at the Sky Hotel to stadium concerts with Suldaan Seeraar — the definitive guide to Jigjiga's music scene and wedding season.", image: "https://picsum.photos/seed/jigjiga-qaaci-nightlife/600/400", icon: "🎵", href: "/history-culture/qaaci-nightlife" },
            { id: "a7", name: "Flag Day — Maalinta Calanka", subtitle: "A Blue Sky Over Jigjiga", description: "Every October 12th, Jigjiga turns into a sea of blue and white. The parade, the Bulsho spirit, and the poetry of the cultural night at Jigjiga Cultural Center.", image: "https://picsum.photos/seed/jigjiga-flag-day-calanka/600/400", icon: "🏳️", href: "/history-culture/flag-day" },
            { id: "a8", name: "The Graduation Festival — JJU", subtitle: "Hambalyo Season · July", description: "In Jigjiga, a university graduation is a city-wide festival. Dhaanto on campus, the Mashxarad ringing out, and families traveling from across the world.", image: "https://picsum.photos/seed/jju-graduation-jigjiga/600/400", icon: "🎓", href: "/history-culture/jju-graduation" },
            { id: "a9", name: "International Mother Language Day", subtitle: "February 21st — Guardian of Af-Soomaali", description: "Jigjiga is the intellectual capital of the Somali language in Ethiopia. The Literacy Fair, the Maahmaah proverb contest, and the living future of Af-Soomaali.", image: "https://picsum.photos/seed/mother-language-day-somali/600/400", icon: "📖", href: "/history-culture/mother-language-day" },
          ],
        },
      ],
    },
  },
  {
    id: "history-culture/sayid-hassan",
    label: "Sayid Mohamed Abdullah Hassan",
    group: "History & Culture",
    type: "article",
    defaults: {
      heroImageUrl: "/sayid-hassan-statue-1.jpg",
      pullQuote: "He was a warrior and a poet. The sword was his weapon on the battlefield; the poem was his weapon in the hearts of his people.",
      sections: [
        { id: "s1", title: "The Early Years: A Scholar in the Making", body: "Born in 1856 in the valley of Sa'adeed, Sayid Mohamed was a brilliant student of Islam long before he was a warrior. By the age of 19, he had earned the title of \"Sheikh\" for his mastery of the Quran and Islamic law. His travels to Mecca and the coastal ports like Berbera opened his eyes to the growing influence of foreign colonial powers in the Horn of Africa, sparking his mission to protect his people's faith and land.", imageUrl: "/sayid-hassan-statue-2.jpg" },
        { id: "s2", title: "The Birth of the Dervish Movement", body: "Upon returning to his homeland, he was disturbed by the cultural and religious changes brought by British, Italian, and Ethiopian expansion. He founded the Dervish Movement, a resistance force dedicated to the independence of the Somali people. He moved his base to the interior regions, specifically the area around Jigjiga, to recruit followers and build a unified front against the invaders.", imageUrl: "/sayid-hassan-statue-1.jpg" },
        { id: "s3", title: "The Legend of the \"Mad Mullah\"", body: "The British colonial forces, frustrated by his tactical brilliance and his ability to evade capture, nicknamed him the \"Mad Mullah.\" However, to his people, he was the Sayid (Lord) — a visionary leader who refused to bow to foreign rule. For over 20 years, he led one of the longest and bloodiest anti-colonial wars in African history.", imageUrl: "/sayid-hassan-statue-2.jpg" },
        { id: "s4", title: "The Master of the Somali Language", body: "While he was a general on the battlefield, he was a \"King\" of poetry in the streets. In Somali culture, poetry is more powerful than a sword. The Sayid used his poems (Gabay) to inspire his soldiers, mock his enemies, and record the history of his struggle. Even today, his poems are studied as the highest form of Somali literature.", imageUrl: "/sayid-hassan-statue-1.jpg" },
        { id: "s5", title: "The Battle of Jigjiga and the Karamara Defense", body: "The Sayid's history is permanently tied to the landscape of Jigjiga. He launched major campaigns from the surrounding mountains, using the rugged terrain of the Karamara Range as a natural fortress. His presence in this region forced the imperial powers of the time to build massive stone forts just to defend against his swift cavalry attacks.", imageUrl: "/sayid-hassan-statue-2.jpg" },
        { id: "s6", title: "The Final Stand and Immortality", body: "In 1920, the British used airplanes for the first time in Africa to bomb his stone fortresses in Taleex. Despite the massive technological disadvantage, the Sayid refused to surrender. He retreated toward the Imi region, where he passed away in 1921. Today, his massive golden statue stands proudly in the center of Jigjiga, reminding every visitor of the city's defiant and proud history.", imageUrl: "/sayid-hassan-statue-1.jpg" },
      ],
    },
  },
  {
    id: "history-culture/garad-wiil-waal",
    label: "Garad Wiil-Waal",
    group: "History & Culture",
    type: "article",
    defaults: {
      heroImageUrl: "/garad-wiil-waal-portrait.jpg",
      pullQuote: "A good leader does not shout the loudest — he listens the deepest.",
      sections: [
        { id: "s1", title: "The Origins of a Legend", body: "Garad Wiil-Waal ruled the Jigjiga plains during the 16th century. The name \"Wiil-Waal\" roughly translates to \"The Brave Youth\" or \"The Spirited One.\" He remains a symbol of the ideal leader: someone who is courageous in battle but uses his mind and heart to solve the problems of his people.", imageUrl: "/garad-wiil-waal-portrait.jpg" },
        { id: "s2", title: "The Power of the Riddle", body: "Garad Wiil-Waal was famous for governing through wisdom and riddles. According to oral tradition, he would test potential advisors and challengers with complex puzzles. Those who could solve them earned his respect; those who could not were sent away to study. This philosophy of governance through wisdom rather than brute force set him apart.", imageUrl: "/garad-wiil-waal-portrait.jpg" },
        { id: "s3", title: "Justice for the Common People", body: "His greatest legacy was his fierce commitment to justice for ordinary people. He is said to have intervened personally when nomadic herdsmen were unfairly treated, settling disputes impartially regardless of clan status. This commitment made him beloved across the region and his judgments were sought from communities far beyond his immediate territory.", imageUrl: "/garad-wiil-waal-portrait.jpg" },
        { id: "s4", title: "Living Legacy in Jigjiga", body: "Today, the stories of Garad Wiil-Waal are taught to children across the Somali Region as parables of leadership, justice, and intellectual courage. His name lives on most visibly in the Jigjiga Gerad Wilwal Airport — welcoming every traveler who arrives in the city he once protected. The \"Garad\" title itself remains one of the most respected traditional leadership titles in the region.", imageUrl: "/jigjiga-gerad-wilwal-airport.jpg" },
      ],
    },
  },
  {
    id: "history-culture/adal-sultanate",
    label: "The Adal Sultanate",
    group: "History & Culture",
    type: "article",
    defaults: {
      heroImageUrl: "",
      pullQuote: "The armies of Adal did not conquer only with the sword — they conquered with knowledge, faith, and the power of a shared identity.",
      sections: [],
    },
  },
  {
    id: "history-culture/flag-day",
    label: "Flag Day — Maalinta Calanka",
    group: "History & Culture",
    type: "article",
    defaults: {
      heroImageUrl: "",
      pullQuote: "When the blue rises over Jigjiga on October 12th, it is not just a flag — it is every generation of the Somali people speaking at once.",
      sections: [],
    },
  },
  {
    id: "history-culture/jju-graduation",
    label: "The Jigjiga University Graduation Festival",
    group: "History & Culture",
    type: "article",
    defaults: {
      heroImageUrl: "",
      pullQuote: "Hambalyo — congratulations — is not just a word in Jigjiga. In July, it is the sound of an entire city believing in its future.",
      sections: [],
    },
  },
  {
    id: "history-culture/mother-language-day",
    label: "International Mother Language Day",
    group: "History & Culture",
    type: "article",
    defaults: {
      heroImageUrl: "",
      pullQuote: "Aqoon la'aani waa iftiin la'aan. — Lack of knowledge is lack of light. This is what Jigjiga fights against every February 21st.",
      sections: [],
    },
  },
  {
    id: "history-culture/qaaci-nightlife",
    label: "The Soul of Jigjiga Nights",
    group: "History & Culture",
    type: "article",
    defaults: {
      heroImageUrl: "",
      pullQuote: "In Jigjiga, the night has its own language — and it speaks in the voice of the Kaban.",
      sections: [],
    },
  },
  {
    id: "history-culture/festivals",
    label: "The Ultimate Guide to Festivals in Jigjiga",
    group: "History & Culture",
    type: "article",
    defaults: {
      heroImageUrl: "",
      pullQuote: "In Jigjiga, every festival is not just a celebration — it is a conversation between who we are and who we are becoming.",
      sections: [],
    },
  },
  {
    id: "history-culture/uunsi",
    label: "Uunsi — The Scent of Somali Hospitality",
    group: "History & Culture",
    type: "article",
    defaults: {
      heroImageUrl: "",
      pullQuote: "Guri aan Uunsi lahayn, guri aan martida u diyaarsanayn. — A home without Uunsi is a home not prepared for its guest.",
      sections: [],
    },
  },
  {
    id: "history-culture/somali-poetry",
    label: "Somali Poetry (Maanso)",
    group: "History & Culture",
    type: "article",
    defaults: {
      heroImageUrl: "",
      pullQuote: "Haddaad dhimasho ka cabsato, ha ku dhimin gabaygaaga. — If you fear death, do not let your poetry die.",
      sections: [],
    },
  },
  {
    id: "history-culture/xeer-system",
    label: "The Xeer System",
    group: "History & Culture",
    type: "article",
    defaults: {
      heroImageUrl: "https://picsum.photos/seed/xeer-hero/1600/900",
      pullQuote: "Under the shade of a single tree, elders have resolved what armies could not.",
      sections: [
        { id: "s1", title: "What is Xeer?", body: "Xeer is the traditional customary law of the Somali people — a sophisticated, unwritten legal system that has governed pastoral and nomadic communities for centuries. It is not a single code, but a living body of agreements between clans that covers everything from marriage and inheritance to crime and conflict resolution.", imageUrl: "https://picsum.photos/seed/xeer-tree/800/500" },
        { id: "s2", title: "The Council of Elders", body: "At the heart of the Xeer system is the Shir — a council of elders who gather, often under the shade of a tree or in an open gathering space, to hear disputes and deliver judgments. These elders are respected community leaders, chosen for their wisdom, neutrality, and knowledge of Somali oral history and precedent.", imageUrl: "https://picsum.photos/seed/xeer-council/800/500" },
        { id: "s3", title: "Collective Responsibility", body: "One of the most powerful aspects of Xeer is the principle of collective responsibility (Diya-paying). When a crime is committed, the payment of compensation is not borne by the individual alone but by their entire clan group. This creates a powerful social incentive for families and communities to prevent wrongdoing by their members.", imageUrl: "https://picsum.photos/seed/xeer-community/800/500" },
        { id: "s4", title: "Xeer in Modern Jigjiga", body: "Even today, with formal courts and state law in place, Xeer continues to function as a parallel and often preferred system for resolving disputes in Jigjiga and across the Somali Region. Many families choose Xeer mediation over courts because it is faster, less expensive, and preserves community relationships rather than destroying them.", imageUrl: "https://picsum.photos/seed/xeer-modern/800/500" },
      ],
    },
  },
  {
    id: "history-culture/traditional-leadership",
    label: "Traditional Leadership",
    group: "History & Culture",
    type: "article",
    defaults: {
      heroImageUrl: "https://picsum.photos/seed/leadership-hero/1600/900",
      pullQuote: "The Ugaas does not command — he serves. The weight of the title is the weight of responsibility.",
      sections: [
        { id: "s1", title: "The Ugaas: Spiritual and Community Leader", body: "The Ugaas is one of the highest traditional leadership titles in the Somali Region. Unlike political leaders, the Ugaas holds both spiritual and community authority, serving as the ultimate arbiter of disputes and the guardian of clan traditions and values.", imageUrl: "https://picsum.photos/seed/ugaas-ceremony/800/500" },
        { id: "s2", title: "The Caleemo-Saar Ceremony", body: "The installation of a traditional leader is marked by the sacred Caleemo-Saar ceremony. In this ritual, a sacred leaf (Caleemo) is placed on the head of the new leader, symbolizing the weight of responsibility being transferred. The ceremony is attended by clan elders, religious scholars, and community members from across the region.", imageUrl: "https://picsum.photos/seed/caleemo-ceremony/800/500" },
        { id: "s3", title: "The Role of Elders (Odayaasha)", body: "Below the Ugaas and Garad sit the community elders — the Odayaasha. These men are respected for their age, knowledge, and clan connections. They serve as advisors, mediators, and representatives of their sub-clans. In Jigjiga, it is common to see elder councils gathered in the mornings to resolve local disputes before they escalate.", imageUrl: "https://picsum.photos/seed/odayaasha-elders/800/500" },
        { id: "s4", title: "Relevance in Today's Jigjiga", body: "Far from being relics of the past, traditional leaders in Jigjiga still wield enormous social influence. Regional government officials regularly consult with Ugaas councils before implementing major policies. During elections and community conflicts, the word of a respected Ugaas can determine outcomes more effectively than any state authority.", imageUrl: "https://picsum.photos/seed/leadership-modern/800/500" },
      ],
    },
  },
  {
    id: "history-culture/dhaanto",
    label: "Dhaanto — Folk Dance",
    group: "History & Culture",
    type: "article",
    defaults: {
      heroImageUrl: "https://picsum.photos/seed/dhaanto-hero/1600/900",
      pullQuote: "When the drum speaks in Jigjiga, the feet have no choice but to answer.",
      sections: [
        { id: "s1", title: "The Origins of Dhaanto", body: "Dhaanto is believed to have originated among the nomadic communities of the Somali Region as a way to celebrate key life events — weddings, the birth of a child, the return of a successful camel raid, or the end of drought. The dance evolved over centuries into a highly structured art form with specific rhythms, lyrics, and footwork patterns.", imageUrl: "https://picsum.photos/seed/dhaanto-origin/800/500" },
        { id: "s2", title: "The Music and the Beat", body: "The defining rhythm of Dhaanto comes from the Nasar drum — a large, deep-toned drum beaten with a curved stick. The beat is fast and hypnotic, building in intensity as the dance progresses. Traditionally, a lead singer (Odka) leads the crowd in a call-and-response, with the chorus repeating powerful verses about love, bravery, and the beauty of the Somali landscape.", imageUrl: "https://picsum.photos/seed/dhaanto-drums/800/500" },
        { id: "s3", title: "The Dance Itself", body: "Dhaanto is performed in a large circle. Dancers — both men and women, though often in separate circles — move with synchronized footwork, clapping, and shoulder movements. The key signature move is a powerful forward stomp, followed by a shoulder shimmy. Advanced dancers incorporate jumps and spins, displaying athleticism that draws loud appreciation from the crowd.", imageUrl: "https://picsum.photos/seed/dhaanto-dancing/800/500" },
        { id: "s4", title: "Dhaanto Today in Jigjiga", body: "Today, Dhaanto is performed at every major celebration in Jigjiga — from weddings and graduation parties to national holidays and cultural festivals. The city hosts an annual Dhaanto Festival that draws performers from across the Somali Region and beyond. Schools have also incorporated Dhaanto into their cultural education programs.", imageUrl: "https://picsum.photos/seed/dhaanto-festival/800/500" },
      ],
    },
  },
  {
    id: "history-culture/somali-aqal",
    label: "Somali Aqal",
    group: "History & Culture",
    type: "article",
    defaults: {
      heroImageUrl: "https://picsum.photos/seed/aqal-hero/1600/900",
      pullQuote: "The Aqal is not just a shelter — it is a universe, built by the hands of a woman, designed for a people in motion.",
      sections: [
        { id: "s1", title: "What is a Somali Aqal?", body: "The Aqal (also spelled Aqal Soomaali) is the traditional portable dwelling of Somali nomadic people. It is a dome-shaped structure made from a wooden frame of flexible saplings (Jirrid) covered with woven mats (Dermo), animal hides, and fabric. It is lightweight, aerodynamic, and perfectly suited to the semi-arid environment of the Somali Region.", imageUrl: "https://picsum.photos/seed/aqal-structure/800/500" },
        { id: "s2", title: "Built by Women", body: "One of the most important aspects of the Aqal tradition is that it is entirely built and owned by women. A newly married woman receives the materials for her Aqal as a gift, and she alone is responsible for its construction, maintenance, and disassembly. The Aqal is considered her domain — a symbol of her skill, creativity, and authority within the family unit.", imageUrl: "https://picsum.photos/seed/aqal-women/800/500" },
        { id: "s3", title: "Architecture of the Aqal", body: "The construction begins with a circle of holes dug in the ground. Long flexible sticks (Jirrid) are inserted and bent into arches, lashed together at the top to form the dome. This frame is then covered with layers of woven mats, starting from the bottom and working up like shingles, creating excellent insulation against both heat and cold. A hole at the top allows smoke to escape and light to enter.", imageUrl: "https://picsum.photos/seed/aqal-construction/800/500" },
        { id: "s4", title: "The Aqal in Modern Jigjiga", body: "While most residents of Jigjiga now live in permanent houses, the Aqal remains a powerful cultural symbol. It is displayed prominently at cultural events, festivals, and government buildings as an emblem of Somali identity. Many families keep a ceremonial Aqal on their property, and it is always constructed at traditional weddings and Eid celebrations as a symbol of heritage and continuity.", imageUrl: "https://picsum.photos/seed/aqal-modern/800/500" },
      ],
    },
  },

  // ── Eat & Drink ─────────────────────────────────────────────────────────
  {
    id: "eat-drink",
    label: "Eat & Drink Hub",
    group: "Eat & Drink",
    type: "hub",
    defaults: {
      heroImageUrl: "https://picsum.photos/seed/food-hero/1600/900",
      groups: [
        {
          id: "signature",
          label: "Signature Dishes",
          items: [
            { id: "d1", name: "Bariis Mindi", subtitle: "The King of the Table", description: "Fragrant basmati rice cooked with cloves, cardamom, and cinnamon, served with tender goat or camel meat and garnished with raisins and fried onions.", image: "https://picsum.photos/seed/bariis-mindi/600/400", icon: "🍚", href: "/eat-drink/bariis-mindi" },
            { id: "d2", name: "Anjero & Injera", subtitle: "The Two Breads", description: "Somali Anjero — light and slightly sweet — meets Ethiopian Injera, large and spongy, used as both plate and utensil for scooping up spicy Wot stews.", image: "https://picsum.photos/seed/anjero-injera/600/400", icon: "🫓", href: "/eat-drink/anjero-injera" },
          ],
        },
        {
          id: "nomadic",
          label: "Nomadic Staples",
          items: [
            { id: "n1", name: "Camel Meat & Milk", subtitle: "Hilib & Caano Geel", description: "Camel meat is a lean, rich delicacy of the Somali Region. Pair it with a cold glass of fresh camel milk — famously nutritious, with a distinct salty-sweet taste.", image: "https://picsum.photos/seed/camel-meat-milk/600/400", icon: "🐪", href: "/eat-drink/camel-meat-milk" },
            { id: "n2", name: "Muqmad", subtitle: "The Traveler's Food", description: "Preserved beef jerky cooked in clarified butter and spices, prepared for long desert journeys. Incredibly high in energy and lasting months without refrigeration.", image: "https://picsum.photos/seed/muqmad-jerky/600/400", icon: "🥩", href: "/eat-drink/muqmad" },
          ],
        },
        {
          id: "beverages",
          label: "Beverages",
          items: [
            { id: "b1", name: "Shaah Rinjiga", subtitle: "The Spiced Tea", description: "\"Rinjiga\" means color — and this tea earns its name with a deep reddish hue brewed from ginger, cinnamon, cardamom, and cloves.", image: "https://picsum.photos/seed/shaah-rinjiga-tea/600/400", icon: "🫖", href: "/eat-drink/shaah-rinjiga" },
            { id: "b2", name: "Jebena Bun", subtitle: "The Coffee Ceremony", description: "Green beans roasted over hot coals, ground by hand, and brewed in a traditional clay Jebena pot. The aroma of fresh coffee blending with burning Uunsi (frankincense) creates an atmosphere of peace.", image: "https://picsum.photos/seed/jebena-coffee/600/400", icon: "☕", href: "/eat-drink/jebena-bun" },
          ],
        },
        {
          id: "dining",
          label: "Dining Spots",
          items: [
            { id: "sp1", name: "Garden Cafes & Modern Lounges", subtitle: "Ambience", description: "Jigjiga is booming with modern dining. Spots like Heebaan Garden offer a lush outdoor escape for traditional meals. The city's growing cafe culture provides sleek urban vibes.", image: "https://picsum.photos/seed/garden-cafe-jigjiga/700/450", tag: "Ambience", href: "/eat-drink/garden-cafes" },
            { id: "sp2", name: "Local Street Food & Markets", subtitle: "Authentic", description: "For the most authentic experience, head to the bustling markets. Try freshly fried Sambuus or sit down for Suugo iyo Baasto — Somali-style pasta.", image: "https://picsum.photos/seed/jigjiga-street-food/700/450", tag: "Authentic", href: "/eat-drink/street-food" },
          ],
        },
      ],
    },
  },
  { id: "eat-drink/bariis-mindi", label: "Bariis Mindi", group: "Eat & Drink", type: "article", defaults: { heroImageUrl: "https://picsum.photos/seed/bariis-hero/1600/900", pullQuote: "Bariis bilaa xawaash ah waa sidii guri bilaa daaqad ah — Rice without spice is like a house without windows.", sections: [{ id: "s1", title: "More Than Just Rice", body: "Bariis Mindi is the ultimate symbol of hospitality and celebration in Jigjiga. While rice is a staple in many cultures, the Somali version is a culinary masterpiece defined by its aromatic scent, vibrant colors, and the \"Mindi\" — the method of serving it piled high with meat.", imageUrl: "https://picsum.photos/seed/bariis-mindi-feast/800/500" }, { id: "s2", title: "The Secret: Xawaash Spices", body: "The soul of Bariis Mindi lies in the Xawaash — a hand-ground blend of cumin, coriander, turmeric, cloves, cardamom, and cinnamon toasted and ground together. When the rice is cooking, the smell fills the entire neighborhood.", imageUrl: "https://picsum.photos/seed/xawaash-spices/800/500" }, { id: "s3", title: "The Cooking Process", body: "High-quality long-grain Basmati rice is first sautéed with onions, garlic, and the Xawaash blend before being simmered in a rich meat broth. To add sweetness and texture, it is topped with sautéed raisins, sliced peppers, and caramelized onions.", imageUrl: "https://picsum.photos/seed/bariis-cooking/800/500" }, { id: "s4", title: "The Star: The Meat (Hilib)", body: "A Bariis Mindi is never complete without the meat. In Jigjiga, you have two choices: Hilib Ari (tender slow-roasted goat) or Hilib Geel (camel meat — the regional favorite, lean with a deep savory flavor).", imageUrl: "https://picsum.photos/seed/hilib-camel-goat/800/500" }, { id: "s5", title: "The Tradition of Sharing", body: "Bariis Mindi is traditionally served on a large communal platter. Families and friends sit together and eat with their right hands. This method of eating symbolizes unity, equality, and the strength of the community.", imageUrl: "https://picsum.photos/seed/bariis-sharing-community/800/500" }] } },
  { id: "eat-drink/anjero-injera", label: "Anjero & Injera", group: "Eat & Drink", type: "article", defaults: { heroImageUrl: "https://picsum.photos/seed/anjero-hero/1600/900", pullQuote: "Two breads, one table, one shared story of neighbors becoming family.", sections: [{ id: "s1", title: "Anjero — The Somali Bread", body: "Somali Anjero is a light, slightly sweet flatbread made from fermented sorghum or corn flour. It is softer and more delicate than its Ethiopian cousin, with a gentle tang from the fermentation process.", imageUrl: "https://picsum.photos/seed/anjero-bread/800/500" }, { id: "s2", title: "Injera — The Ethiopian Giant", body: "Ethiopian Injera is a large, spongy flatbread made from teff flour, with a pronounced sour flavor from extended fermentation. In Jigjiga, it is used as both a plate and a utensil — tear a piece and use it to scoop up the rich Wot stew.", imageUrl: "https://picsum.photos/seed/injera-bread/800/500" }, { id: "s3", title: "The Perfect Fusion Meal", body: "In Jigjiga, you will often find both breads served at the same table — Anjero alongside Somali dishes like honey and butter, and Injera paired with spicy Ethiopian Wot stews. This reflects the city's unique position as a crossroads of cultures.", imageUrl: "https://picsum.photos/seed/anjero-injera-table/800/500" }] } },
  { id: "eat-drink/camel-meat-milk", label: "Camel Meat & Milk", group: "Eat & Drink", type: "article", defaults: { heroImageUrl: "https://picsum.photos/seed/camel-food-hero/1600/900", pullQuote: "The camel feeds us, carries us, and sustains us — it is not just an animal, it is a way of life.", sections: [{ id: "s1", title: "Camel Meat: A Regional Delicacy", body: "Camel meat (Hilib Geel) is one of the most prized foods in the Somali Region. Leaner than beef and richer in flavor, it is slow-cooked over charcoal or in large communal pots, developing a deep, savory taste that is unique to the region.", imageUrl: "https://picsum.photos/seed/camel-meat/800/500" }, { id: "s2", title: "Fresh Camel Milk (Caano Geel)", body: "Perhaps even more celebrated than the meat is fresh camel milk. It has a distinctly salty-sweet taste that is unlike any other milk, and it is consumed fresh throughout the day. Nutritionally, it is richer in vitamin C and iron than cow's milk.", imageUrl: "https://picsum.photos/seed/camel-milk/800/500" }, { id: "s3", title: "Cultural Significance", body: "Camel ownership in the Somali Region is a sign of wealth and social status. The tradition of offering camel milk to guests is one of the highest forms of hospitality. At weddings and major celebrations, an entire camel may be slaughtered to honor the occasion.", imageUrl: "https://picsum.photos/seed/camel-culture/800/500" }] } },
  { id: "eat-drink/muqmad", label: "Muqmad", group: "Eat & Drink", type: "article", defaults: { heroImageUrl: "https://picsum.photos/seed/muqmad-hero/1600/900", pullQuote: "Muqmad is the taste of the journey — dense, rich, and unforgettable.", sections: [{ id: "s1", title: "What is Muqmad?", body: "Muqmad is the Somali version of preserved meat — strips of beef or camel meat that are slowly cooked in clarified butter (Subag) and spices until they are dried and preserved. The result is an intensely flavorful, high-energy food that can last months without refrigeration.", imageUrl: "https://picsum.photos/seed/muqmad-prep/800/500" }, { id: "s2", title: "The Nomad's Survival Food", body: "Historically, Muqmad was prepared for long desert journeys. Nomadic herdsmen would carry it as their primary protein source during months-long migrations with their livestock. Its ability to withstand extreme heat and its incredible caloric density made it the ideal travel companion.", imageUrl: "https://picsum.photos/seed/muqmad-journey/800/500" }, { id: "s3", title: "Muqmad Today", body: "While nomadic life has evolved, Muqmad remains a beloved dish in Jigjiga. Today it is most commonly served as a breakfast or snack, often alongside fresh Anjero bread and a drizzle of honey. Modern restaurants in the city serve premium versions made with aged Subag butter.", imageUrl: "https://picsum.photos/seed/muqmad-modern/800/500" }] } },
  { id: "eat-drink/shaah-rinjiga", label: "Shaah Rinjiga", group: "Eat & Drink", type: "article", defaults: { heroImageUrl: "https://picsum.photos/seed/shaah-hero/1600/900", pullQuote: "In Jigjiga, time stops at 4pm — the hour of Shaah and Sheeko (tea and conversation).", sections: [{ id: "s1", title: "What Makes It \"Rinjiga\"?", body: "\"Rinjiga\" means color in Somali — and this tea earns its name with a deep, rich reddish-brown hue. The color comes from a powerful blend of ginger, cinnamon, cardamom, cloves, and black tea leaves, simmered together with milk until the color is deep and the aroma fills the entire room.", imageUrl: "https://picsum.photos/seed/shaah-color/800/500" }, { id: "s2", title: "The Afternoon Ritual", body: "In Jigjiga, the afternoon Shaah break is a social institution. Between 3pm and 5pm, cafes across the city fill with friends, colleagues, and family members gathering for tea and conversation. Business deals are made, news is shared, and relationships are strengthened over small glasses of hot Shaah.", imageUrl: "https://picsum.photos/seed/shaah-ritual/800/500" }, { id: "s3", title: "How to Drink It", body: "Shaah Rinjiga is traditionally served very hot in a small glass, with 2-3 teaspoons of sugar. It is always accompanied by a light snack — often Buskud (sweet biscuits), Muufo (sesame flatbread), or Sambusa. Never drink Shaah in a rush — the experience is about the conversation as much as the tea.", imageUrl: "https://picsum.photos/seed/shaah-serve/800/500" }] } },
  { id: "eat-drink/jebena-bun", label: "Jebena Bun", group: "Eat & Drink", type: "article", defaults: { heroImageUrl: "https://picsum.photos/seed/jebena-hero/1600/900", pullQuote: "In Jigjiga, a cup of Jebena coffee is not just a drink — it is an invitation into someone's world.", sections: [{ id: "s1", title: "The Clay Pot That Changed Everything", body: "The Jebena is a round-bottomed clay pot with a long neck and a spout. It is the vessel used for the traditional Ethiopian and Somali coffee ceremony. Green coffee beans are first washed, then roasted in a flat pan over hot coals right in front of the guests — filling the room with smoke and the intense aroma of fresh coffee.", imageUrl: "https://picsum.photos/seed/jebena-pot/800/500" }, { id: "s2", title: "The Three Rounds of Coffee", body: "The Jebena Bun ceremony traditionally involves three rounds of coffee, each with its own name and significance: Abol (the first and strongest round), Tona (the second, slightly lighter round), and Baraka (the third round — \"blessing\" — which is the lightest and considered to bring good fortune to those who drink it).", imageUrl: "https://picsum.photos/seed/jebena-rounds/800/500" }, { id: "s3", title: "The Role of Women", body: "The coffee ceremony is traditionally led by women of the household. The host roasts, grinds, and brews the coffee with care and pride. The ceremony is as much a performance of skill and hospitality as it is a social gathering. Guests show respect and gratitude by accepting all three rounds of coffee.", imageUrl: "https://picsum.photos/seed/jebena-women/800/500" }] } },
  { id: "eat-drink/garden-cafes", label: "Garden Cafes & Modern Lounges", group: "Eat & Drink", type: "article", defaults: { heroImageUrl: "https://picsum.photos/seed/garden-hero/1600/900", pullQuote: "Where the old world's flavors meet the new world's comfort — that is Jigjiga's cafe scene.", sections: [{ id: "s1", title: "Heebaan Garden: The Pioneer", body: "Heebaan Garden was one of the first modern outdoor dining spaces in Jigjiga, and it remains the most iconic. Set among lush greenery, it serves traditional Somali food in an open-air environment with live music on weekends. The combination of authentic food and modern comfort made it the template for what followed.", imageUrl: "https://picsum.photos/seed/heebaan-garden/800/500" }, { id: "s2", title: "Modern Cafes: Jigjiga's New Identity", body: "Jigjiga's cafe scene has exploded in recent years, driven by a young, connected population and a growing tech and business community. Modern cafes offer fast Wi-Fi, pour-over coffee, smoothies, and Western-inspired decor — while still serving Shaah Rinjiga and Anjero alongside them.", imageUrl: "https://picsum.photos/seed/modern-cafe/800/500" }, { id: "s3", title: "Where to Go", body: "The best cafe strip in Jigjiga runs along the main commercial road near the university district. You'll find a mix of garden spots with traditional seating on Somali mats, and sleek air-conditioned lounges with charging stations. Most open around 7am for breakfast and stay open until midnight for the evening crowd.", imageUrl: "https://picsum.photos/seed/cafe-strip/800/500" }] } },
  { id: "eat-drink/street-food", label: "Street Food & Markets", group: "Eat & Drink", type: "article", defaults: { heroImageUrl: "https://picsum.photos/seed/street-hero/1600/900", pullQuote: "The best meal in Jigjiga has no menu — it is the one handed to you by someone who has been making it the same way for thirty years.", sections: [{ id: "s1", title: "The Art of Sambusa", body: "Sambusa (also Sambuus in Somali) is the undisputed king of Jigjiga street food. These crispy triangular pastries are filled with spiced minced meat, onions, and chili, then deep-fried until golden. You'll find Sambusa vendors on almost every street corner in the morning and evening.", imageUrl: "https://picsum.photos/seed/sambusa-fry/800/500" }, { id: "s2", title: "Taywan Market: The Heart of Local Trade", body: "Taywan Market is the largest and most vibrant market in Jigjiga, selling everything from fresh produce and spices to traditional clothing and electronics. For food lovers, the market's inner section has dozens of stalls serving hot meals — fresh grilled meats, Anjero with honey, and Suugo (pasta sauce).", imageUrl: "https://picsum.photos/seed/taywan-market/800/500" }, { id: "s3", title: "Suugo iyo Baasto: Somali Pasta", body: "One of the most surprising dishes on Jigjiga's street food scene is Suugo iyo Baasto — Somali-style pasta with a rich tomato-based meat sauce, heavily spiced with Xawaash. This is a legacy of the Italian influence in the Horn of Africa, fully adopted and transformed by Somali cooks into something uniquely their own.", imageUrl: "https://picsum.photos/seed/suugo-pasta/800/500" }] } },

  // ── Landmarks ────────────────────────────────────────────────────────────
  {
    id: "landmarks",
    label: "Must-See Landmarks Hub",
    group: "Landmarks",
    type: "hub",
    defaults: {
      heroImageUrl: "https://picsum.photos/seed/landmarks-hero/1600/900",
      groups: [
        {
          id: "cultural",
          label: "Cultural & Religious Icons",
          items: [
            { id: "c1", name: "Jijiga Central Mosque", subtitle: "Masaajidka Jaamacadda", description: "The city's spiritual anchor — towering minarets illuminated green at night, serving as a compass for thousands of worshippers daily.", image: "https://picsum.photos/seed/jigjiga-central-mosque/700/450", tag: "Religious Icon", href: "/landmarks/central-mosque" },
            { id: "c2", name: "Statue of Sayid Hassan", subtitle: "The Symbol of Pride", description: "A massive bronze statue honoring the Father of Somali Nationalism — the most popular spot for commemorative photos in the city.", image: "https://picsum.photos/seed/sayid-hassan-statue/700/450", tag: "Cultural Icon", href: "/history-culture/sayid-hassan" },
          ],
        },
        {
          id: "natural",
          label: "Natural Wonders",
          items: [
            { id: "n1", name: "Karamara Mountains", subtitle: "Silsiladda Karamara", description: "Rising 2,000m above sea level — a natural fortress that has watched over the city for centuries and offers the best panoramic views of the capital.", image: "https://picsum.photos/seed/karamara-mountains-jigjiga/700/450", tag: "Natural Wonder", href: "/landmarks/karamara-mountains" },
            { id: "n2", name: "Valley of Marvels — Babile", subtitle: "Nature's Sculpture Gallery", description: "A short drive from the city brings you to Babile — extraordinary balancing rock formations and the famous Babile Elephant Sanctuary.", image: "https://picsum.photos/seed/babile-valley-rocks/700/450", tag: "Day Trip", href: "#" },
          ],
        },
        {
          id: "markets",
          label: "Markets & Local Life",
          items: [
            { id: "m1", name: "Jigjiga Camel Market", subtitle: "Suuqa Geela", description: "One of the largest livestock trading hubs in the Horn of Africa — a raw, authentic window into the nomadic economy.", image: "https://picsum.photos/seed/camel-market-suuqa/700/450", tag: "Authentic", href: "/landmarks/camel-market" },
            { id: "m2", name: "Taywan Market", subtitle: "The Shopper's Paradise", description: "A bustling maze of stalls selling everything from traditional Somali clothing and hand-woven baskets to the latest electronics.", image: "https://picsum.photos/seed/taywan-market-scene/700/450", tag: "Shopping", href: "/eat-drink/street-food" },
          ],
        },
        {
          id: "modern",
          label: "Modern Jigjiga",
          items: [
            { id: "mo1", name: "Jigjiga University", subtitle: "The Tech Hub Anchor", description: "Founded in 2007, JJU is the symbol of Jigjiga's transformation — producing engineers, doctors, and entrepreneurs who are building the city's future.", image: "/jju-gate-night-wide.jpg", tag: "Education", href: "/landmarks/jigjiga-university" },
            { id: "mo2", name: "Garad Wiil-Waal International Airport", subtitle: "Gateway to Jigjiga", description: "The airport connecting Jigjiga to Addis Ababa, Dire Dawa, and regional destinations — the entry point for thousands of visitors every month.", image: "https://picsum.photos/seed/jigjiga-airport/700/450", tag: "Infrastructure", href: "#" },
            { id: "mo3", name: "Shabeeley Resort", subtitle: "Halka Taariikhda iyo Raaxadu Kulmaan", description: "Jigjiga's premier luxury destination — where 10th-century Somali architecture meets modern comfort on lush green grounds at the edge of the city.", image: "/shabeeley-aerial.jpg", tag: "New 2025 · Must Visit", href: "/landmarks/shabeeley-resort" },
          ],
        },
      ],
    },
  },
  { id: "landmarks/central-mosque", label: "Central Mosque", group: "Landmarks", type: "article", defaults: { heroImageUrl: "https://picsum.photos/seed/mosque-hero/1600/900", pullQuote: "At the sound of the Adhan, the city exhales — and for a moment, Jigjiga belongs only to peace.", sections: [{ id: "s1", title: "A Center of Islamic Learning", body: "The history of this mosque is deeply tied to the city's growth. After the fall of Harar in the late 19th century, many Islamic scholars migrated to Jigjiga. This transformed the city — and specifically this mosque — into a leading center for Islamic education in the Horn of Africa.", imageUrl: "https://picsum.photos/seed/mosque-interior-calligraphy/800/500" }, { id: "s2", title: "A Landmark for All Visitors", body: "Even for non-Muslim visitors, the Central Mosque is a must-see for its architectural beauty and its role as a landmark of peace. Whether you are arriving from the airport or walking through the main markets, the mosque's tall minarets serve as a constant compass, guiding people toward the heart of Jigjiga.", imageUrl: "https://picsum.photos/seed/jigjiga-mosque-courtyard/800/500" }] } },
  { id: "landmarks/camel-market", label: "Camel Market", group: "Landmarks", type: "article", defaults: { heroImageUrl: "https://picsum.photos/seed/camel-market-hero/1600/900", pullQuote: "Here, the ancient economy of the desert is alive — not in a museum, but in the hands of men who still measure wealth in camels.", sections: [{ id: "s1", title: "The Scale of the Market", body: "The Jigjiga Camel Market is one of the largest livestock trading hubs in the Horn of Africa. On peak days — particularly Mondays and Thursdays — thousands of camels, goats, and cattle are brought from across the Somali Region, eastern Ethiopia, and even neighboring Somaliland for trade.", imageUrl: "https://picsum.photos/seed/camel-market-wide/800/500" }, { id: "s2", title: "The Economics of the Camel", body: "A single healthy camel can sell for 50,000 to 200,000 Ethiopian Birr depending on age, size, and health. The market drives millions of birr in daily economic activity. For many nomadic families, a trip to the Jigjiga Camel Market is their primary annual income event — the culmination of months of herding and care.", imageUrl: "https://picsum.photos/seed/camel-market-trade/800/500" }, { id: "s3", title: "White Gold: Camel Milk Economy", body: "Alongside the livestock trade, the market is a hub for fresh camel milk sales. Milk traders — often women — bring thermos flasks and clay pots full of fresh milk from the morning milking. The milk sells out within hours, supplied to city cafes, hotels, and families across Jigjiga.", imageUrl: "https://picsum.photos/seed/camel-milk-market/800/500" }] } },
  { id: "landmarks/karamara-mountains", label: "Karamara Mountains", group: "Landmarks", type: "article", defaults: { heroImageUrl: "https://picsum.photos/seed/karamara-hero/1600/900", pullQuote: "To stand on the Karamara ridge at dawn is to understand why the Somali people say: 'The mountains do not bend — and neither do we.'", sections: [{ id: "s1", title: "The Natural Fortress of Jigjiga", body: "The Karamara mountain range rises dramatically east of Jigjiga, reaching elevations of over 2,000 meters above sea level. This natural barrier has shaped the city's geography, climate, and military history for centuries. The mountains create a rain shadow effect that gives the city a slightly cooler microclimate compared to the surrounding lowlands.", imageUrl: "https://picsum.photos/seed/karamara-wide/800/500" }, { id: "s2", title: "The Dervish Connection", body: "The Karamara pass was of critical strategic importance during the Dervish resistance led by Sayid Mohamed Abdullah Hassan. His forces used the mountains as a base of operations and a defensive line, launching raids from the high ground and disappearing into the passes before colonial forces could respond. Stone remnants of Dervish-era structures can still be found in the hills.", imageUrl: "https://picsum.photos/seed/karamara-dervish/800/500" }, { id: "s3", title: "The Panoramic Views", body: "For visitors willing to make the hike, the Karamara ridge offers breathtaking panoramic views of Jigjiga and the surrounding plains stretching toward the Somali border. At dawn, the city below is lit gold by the rising sun, and in the cool air of the highlands, the beauty of the Somali landscape becomes immediately clear.", imageUrl: "https://picsum.photos/seed/karamara-view/800/500" }] } },
  { id: "landmarks/shabeeley-resort", label: "Shabeeley Resort", group: "Landmarks", type: "article", defaults: { heroImageUrl: "/shabeeley-aerial.jpg", pullQuote: "Here, the ancient Somali soul lives not in a museum — but in a living, breathing resort where leopards once walked and stars still speak.", sections: [{ id: "s1", title: "Where Heritage Meets Luxury", body: "Shabeeley Resort is Jigjiga's first premium hospitality destination that deliberately roots itself in 10th-century Somali culture. The resort's Aqal Soomaali lodges and Gombi structures are not museum replicas — they are fully functioning, air-conditioned suites wrapped in traditional Somali craft. Located on the scenic outskirts of the city, the green landscape of the resort feels worlds away from the bustle of Jigjiga city centre.", imageUrl: "/shabeeley-aerial.jpg" }, { id: "s2", title: "The Amphitheater & Cultural Grounds", body: "The grand amphitheater — tiered stone seating curving around a stage under the open sky — hosts cultural events, regional summits, and flag ceremonies. Lined with the flags of Ethiopia's regions and international partners, it is a striking statement of Jigjiga's ambition to be a hub not just for the Somali Region but for the entire Horn of Africa.", imageUrl: "/shabeeley-flags.jpg" }, { id: "s3", title: "The Name Behind the Resort", body: "Shabeeley is the Somali word for Leopard (Shabeel). This land was once a frontier where leopards and elephants roamed freely across the scrubland. Local elders recall hunting rabbit (Bakayle) and deer (Sagaaro) in these very fields. The resort deliberately carries this name as a reminder that modernity and wild heritage can coexist — and must.", imageUrl: "/shabeeley-aerial.jpg" }] } },
  { id: "landmarks/jigjiga-university", label: "Jigjiga University", group: "Landmarks", type: "article", defaults: { heroImageUrl: "https://picsum.photos/seed/jigjiga-university-gate/1600/900", pullQuote: "Here, the elder's wisdom and the engineer's code meet in the same hallway — that is Jigjiga University.", sections: [{ id: "s1", title: "A University Born from Ambition", body: "Founded in 2007, Jigjiga University (JJU) is one of the fastest-growing and most significant higher education institutions in Ethiopia. It is not just a place for students — it is a landmark of progress that represents the city's transition into a modern Tech Hub.", imageUrl: "https://picsum.photos/seed/jju-campus-aerial/800/500" }, { id: "s2", title: "Research That Serves the Region", body: "Jigjiga University is particularly renowned for its focus on the unique needs of the region. The Pastoralist Research Centre is a leading hub for studying dryland agriculture and nomadic lifestyles — finding modern solutions for water management and livestock health.", imageUrl: "https://picsum.photos/seed/jju-research/800/500" }, { id: "s3", title: "Culture Meets the Classroom", body: "Beyond academics, JJU plays a vital role in preserving Somali culture. It frequently hosts cultural weeks, Somali literature symposiums, and Dhaanto competitions, ensuring that as students learn about the future, they remain deeply connected to their roots.", imageUrl: "https://picsum.photos/seed/jju-cultural/800/500" }] } },
];
