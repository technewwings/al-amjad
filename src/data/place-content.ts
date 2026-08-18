export interface DestinationExperience {
	title: string;
	description: string;
	src: string;
	alt: string;
	mood?: string;
}

export interface DestinationReview {
	name: string;
	quote: string;
	rating: number;
	image?: string;
}

export interface PlaceContent {
	overview: string;
	experiences: DestinationExperience[];
	reviews: DestinationReview[];
}

const unsplash = (id: string) =>
	`https://images.unsplash.com/${id}?auto=format&fit=crop&w=1200&q=80`;

const placeContentBySlug: Record<string, PlaceContent> = {
	agra: {
		overview:
			'Step back in time to the era of emperors and architectural marvels. This carefully curated Agra journey is designed for travelers who want the iconic sights without missing the city’s quieter corners.\n\nFrom sunrise at the Taj Mahal and the red-sandstone courtyards of Agra Fort to Fatehpur Sikri and the lanes of Sadar Bazaar, each stop is paced so you can look closely — at marble inlay, river light, and the taste of petha with masala chai.',
		experiences: [
			{
				title: 'Sunrise at the Taj Mahal',
				mood: 'Sunrise',
				description:
					'Watch the marble shift from cool grey to rose gold as first light hits the dome. The gardens are quiet, and the reflection pool is almost empty.',
				src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuARUFy3MUpJUnULuWhcupjxPw5ty06hqT8ufWsaNw2u3tAqc2DGJ0pJlimJpKuPgak3GUwY1psP0fjZmBh5K9bxzO_oTpeimEiGUZLkBKAwaDvIPUEMCfyw6BKhNdLt5kVCQnYv2NQkcAHijPMJ0Qgywjnly27gubFNpZWPdUbSk1ysrp7FihtLN7LmQuMMIKiUzKMq4wDzxA_URm6UKw2nho7R2_Z5Kuz95iCA9scNU5x93t6u',
				alt: 'The Taj Mahal at sunrise, reflected in the central pool',
			},
			{
				title: 'Marble inlay and Mughal detail',
				mood: 'Heritage',
				description:
					'Stand close to the pietra dura floral work — jade, jasper, and lapis set into white marble. The craft is as memorable as the monument itself.',
				src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuANIuWp16RRJC27LXWnmKsSxcgXg8q2DxX1Km1DMELOXlLuzhebWxeKMCMcqpZDLyUkA_mIh7c7eNbG3GG4JgEnkQGfQ1WgEze1eS40WhMNCd5Xfnb95MERaLxvcIwCe6e95PswTzwf62Rff8uJEZ8RtUTFny3P1RQp2Qeh-iVQtt6HBbMUKLulIsrLNB6DcQ2sBY6fXXn2EnX8uHNQPNeOb7b6l6qDVr-hPBmiZ5-8118NEr-N',
				alt: 'Intricate marble inlay floral patterns on the walls of the Taj Mahal',
			},
			{
				title: 'Sadar Bazaar lanes',
				mood: 'Markets',
				description:
					'Brassware, marble souvenirs, and textile stalls packed into narrow streets. Shop for inlay work after the monuments, when the city feels lived-in.',
				src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB55BZNyfa5Hb-knQZ1S_uJoCP0dJ9y9CAHwRlTD5WPhyuCqp2Bg_IjmV6sGe8u3Lj9iXmZ1-qL7OxRuxGgpgTX-Wjxe8p2kutWDWTHfTTudocOQ70dwGlnQbiAYsfeoY2tb8DQFFfo8Mzk7yb-2P2jCyJPyrN58kHOQUHuQ5C0HB759nw86Kc6xWdIJIFKr6meB9iwqV8YXnDu6updKQEzSOIsnBfD0i9MNirTItwRSeG2pYkx',
				alt: 'Colorful local market stalls in Agra with textiles, brassware, and souvenirs',
			},
			{
				title: 'Agra Petha and masala chai',
				mood: 'Street food',
				description:
					'Sample the city’s famous translucent sweet with a cup of spiced chai. A simple stop that travelers remember as much as the forts.',
				src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDQ25lgUOR1SinHhiV9hoI8UI6fb42Ynfj_zpuYEhzTQIeaoGpkqab7Q_WpQwCkLyQO6--LS6CGdfcPSqHuQO_drAzZ5sBrJSaIfLypbTHbJmfH0PAxFg68QH_Y1-rY2L6gMKrmXAa_t9cQ1CU1ObYnH3JjCnDodqHbbw45TpGb5QWrwn7MasDNFBSUvk9hDpLVh09QcoXYF-9fVj8bwCCo4BRXPoMxF585QPU06wzeRwXdPeY3',
				alt: 'Agra Petha and masala chai on a wooden table',
			},
		],
		reviews: [
			{
				name: 'Amina K.',
				quote: 'The sunrise Taj visit was worth every early alarm. Our guide timed the crowds and the light perfectly.',
				rating: 5,
			},
			{
				name: 'The Rahman Family',
				quote: 'Hotels, transfers, and the Fatehpur Sikri stop were seamless. The children loved exploring Agra Fort.',
				rating: 5,
			},
			{
				name: 'James L.',
				quote: 'Great value. The local food walk in Sadar Bazaar was the highlight after the monuments.',
				rating: 4,
			},
		],
	},
	'kulu-manali': {
		overview:
			'Kulu and Manali sit in a green Himalayan valley where the Beas River, pine forests, and snow ridges share the same skyline. This escape is built for travelers who want mountain air, gentle adventure, and enough time to slow down in Old Manali.\n\nDays typically mix Solang Valley views, high-pass snow landscapes, and cafe-lined walks beside the river. Hotels, altitude, and weather shifts are handled for you so the focus stays on the peaks — not the logistics.',
		experiences: [
			{
				title: 'Solang Valley views',
				mood: 'Adventure',
				description:
					'Snow-capped ridges, paragliding, and open meadows. Solang is where the Himalayas feel close enough to touch.',
				src: 'https://s7ap1.scene7.com/is/image/incredibleindia/The-Best-Adventure-Experiences-in-Manali1-popular?qlt=82&ts=1726730921047',
				alt: 'Snow-covered mountains and adventure experiences in Manali',
			},
			{
				title: 'Beas River and Old Manali',
				mood: 'Valleys',
				description:
					'Wooden cafes, pine forests, and the sound of the Beas. Evenings here are slow — bonfires, mountain air, and quiet lanes.',
				src: unsplash('photo-1626621341517-bbf3d9990a23'),
				alt: 'Pine-covered Himalayan valley near Manali',
			},
			{
				title: 'High-altitude snow passes',
				mood: 'Snow',
				description:
					'Day trips toward Rohtang or Atal Tunnel open vast white landscapes. Dress warm — the light and wind are part of the memory.',
				src: unsplash('photo-1483921020237-2ff51e8f4a71'),
				alt: 'Snowy mountain pass in the Himalayas',
			},
		],
		reviews: [
			{
				name: 'Fatima S.',
				quote: 'Solang was spectacular. The team handled the altitude and weather changes without any stress for us.',
				rating: 5,
			},
			{
				name: 'The Patel Family',
				quote: 'Kids loved the snow. Hotels were warm and the Manali local walks were a nice contrast to the adventure days.',
				rating: 5,
			},
			{
				name: 'James L.',
				quote: 'Very well organized. The guide in Kulu Manali was fantastic and knew the quieter viewpoints.',
				rating: 4,
			},
		],
	},
	kashmir: {
		overview:
			'Kashmir still earns its old name — Paradise on Earth — with Dal Lake, chinar-lined gardens, and meadow plateaus under sharp mountain light. This journey balances Srinagar’s houseboat calm with open landscapes in Gulmarg and the Mughal gardens.\n\nExpect shikara evenings, garden terraces, and high meadows depending on the season. The itinerary is unhurried so you can sit with the lake, the gardens, and the mountain air instead of rushing between photo stops.',
		experiences: [
			{
				title: 'Shikara on Dal Lake',
				mood: 'Sunset',
				description:
					'Glide past lotus gardens and houseboats as the light turns gold. The lake is the heart of a Srinagar evening.',
				src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDx6sH8UOJaFx97kQFvPsVnOccKHycY3Ph28IGQMwe8ZbSeiUB1HO-JdrplogTqtjcjLAXK_zNBukpQgaH1RNmm_z2RkkrzbPXyYgMOMMYSCNOeAETRy5sR1chWK-8HqberDXKcYOk7NzY1pnrAyxyr4Ov1vQGbGHgaxy3QXpCbmi5RdPNFQarINjglsQ2mS_GWD8ziIOgFB0qcTghj1pnHq1GOI27SeOcwfAgqhDS7xv3OdHTu',
				alt: 'Shikara boat on Dal Lake in Kashmir at sunset',
			},
			{
				title: 'Mughal gardens',
				mood: 'Gardens',
				description:
					'Nishat and Shalimar terraces, chinar trees, and mountain backdrops. Spring blossoms and autumn colour both photograph beautifully.',
				src: unsplash('photo-1595815771614-ade9d652a65d'),
				alt: 'Terraced garden with mountain views in Kashmir',
			},
			{
				title: 'Gulmarg meadows',
				mood: 'Meadows',
				description:
					'Wide green slopes in summer, ski fields in winter. The gondola ride opens a panorama that feels like another country.',
				src: unsplash('photo-1506905925346-21bda4d32df4'),
				alt: 'Open mountain meadows and peaks near Gulmarg',
			},
		],
		reviews: [
			{
				name: 'Aisha M.',
				quote: 'Dal Lake at sunset was unforgettable. Houseboat stay and garden visits were paced just right.',
				rating: 5,
			},
			{
				name: 'Omar & Hana',
				quote: 'Gulmarg exceeded our expectations. Transfers were smooth and the local cuisine recommendations were excellent.',
				rating: 5,
			},
			{
				name: 'Ravi T.',
				quote: 'Peaceful, well planned, and respectful of the region. We would book Kashmir with Al Amjad again.',
				rating: 4,
			},
		],
	},
	ajmer: {
		overview:
			'Ajmer is one of Rajasthan’s spiritual centres, known for the Ajmer Sharif Dargah and a town that gathers pilgrims from across the subcontinent. This visit is paced with respect — time at the shrine, modest dress, and space for prayer or quiet walking.\n\nEvenings by Ana Sagar Lake and a day trip to Pushkar add water, ghats, and desert-town bazaars to the dargah experience. Transfers and hotel placement are chosen so the holy precinct stays easy to reach.',
		experiences: [
			{
				title: 'Ajmer Sharif Dargah',
				mood: 'Spiritual',
				description:
					'The white marble courtyards and qawwali evenings carry a deep sense of devotion. Dress modestly and allow time for the inner sanctum.',
				src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAyPxCVKkOmnJmbmhuOfLzJJpVo-IfwierTWEoCXQDID4nfx2974J7CFx2msbWstciJ_3912ROHYna4NAmUzOMnz5IKxompW0qHlz92JEDPa_4vcG2j4F9DKgkA7eZs7kYQD_mBMHQvBq3htDhyXbS1NS0U6PqkKquSJGf210UqhP7_KURXKWtGRsvUJvQvyIQrlMyW7IQUjTnb5tb7S1v_SLIpoHD5PjDOGtwDJw51lNYaf_34',
				alt: 'Historic architecture in Ajmer, Rajasthan',
			},
			{
				title: 'Ana Sagar Lake',
				mood: 'Lakeside',
				description:
					'Evening breezes along the marble pavilions. A calm contrast after the energy of the dargah lanes.',
				src: unsplash('photo-1477587458883-47145ed94245'),
				alt: 'Historic Rajasthani architecture near water',
			},
			{
				title: 'Pushkar day visit',
				mood: 'Heritage',
				description:
					'A short drive to the sacred lake, ghats, and desert-town bazaars. Often combined with Ajmer for a fuller Rajasthan stop.',
				src: unsplash('photo-1603262110263-fb0112e7cc33'),
				alt: 'Desert-town architecture and ghats in Rajasthan',
			},
		],
		reviews: [
			{
				name: 'Imran H.',
				quote: 'The dargah visit was handled with care and respect. Our family felt looked after from arrival to return.',
				rating: 5,
			},
			{
				name: 'Nadia F.',
				quote: 'Ajmer and Pushkar in one trip worked perfectly. Hotels were clean and close to the main sites.',
				rating: 5,
			},
			{
				name: 'Yusuf A.',
				quote: 'Spiritual, organised, and not rushed. Exactly what we wanted from this journey.',
				rating: 4,
			},
		],
	},
	delhi: {
		overview:
			'Delhi is a capital of contrasts: Mughal tombs and Friday mosque courtyards on one side, wide lawns and India Gate on the other. This city tour is built to show both Old and New Delhi without turning the days into a checklist.\n\nYou move from Chandni Chowk’s spice lanes and Jama Masjid to Humayun’s Tomb, Qutub Minar, and dusk at Rajpath. Guides keep timings realistic so heritage, food, and rest all fit the same itinerary.',
		experiences: [
			{
				title: 'India Gate and Rajpath',
				mood: 'Landmarks',
				description:
					'Wide lawns, evening lights, and the sandstone arch. A classic first impression of the capital at dusk.',
				src: unsplash('photo-1587474260584-136574528ed5'),
				alt: 'India Gate illuminated at dusk in New Delhi',
			},
			{
				title: 'Old Delhi lanes',
				mood: 'Old city',
				description:
					'Jama Masjid’s steps, spice markets, and cycle-rickshaw rides through Chandni Chowk. Loud, fragrant, and unforgettable.',
				src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDWf1YPj3j3XVn3DBfNEz-szFoslcQiLwsQ-l-2pP7ukzaBQKcJjpVvRv8WjIdHGROLkFtH1xasous8KOFUi_mJiGTYvdjDqVeL8RnU_TRcGmCvwA1XRhOBTqXRykDUF8xcOfmHxpgf6mgRHXfmuYg5-N6imxjGjwWTMqyxXVhhAFc-8NspgqSbB5sNk8-86-rJisnOw8O-WqPMPKDtEwJ2dHJ20wSQgRqV0j9ihrq9hpg__qGA',
				alt: 'Landmarks and cityscape of Delhi',
			},
			{
				title: 'Humayun’s Tomb and Qutub',
				mood: 'Heritage',
				description:
					'Garden tombs and soaring minarets that set the template for later Mughal architecture. Best visited in the softer morning light.',
				src: unsplash('photo-1524492412937-b28074a5d7c5'),
				alt: 'Mughal garden tomb architecture in Delhi',
			},
		],
		reviews: [
			{
				name: 'Sara B.',
				quote: 'Old Delhi with a local guide made the city click for us. Timing at the monuments was excellent.',
				rating: 5,
			},
			{
				name: 'The Khan Family',
				quote: 'A well-balanced mix of heritage and food. Drivers were punctual across the whole Delhi stay.',
				rating: 5,
			},
			{
				name: 'Daniel P.',
				quote: 'Packed itinerary but never chaotic. India Gate at night was a lovely close to the first day.',
				rating: 4,
			},
		],
	},
	punjab: {
		overview:
			'Punjab welcomes visitors with the Golden Temple, generous langar, and a food culture that is as memorable as the monuments. This itinerary is built around Amritsar — spiritual time at Harmandir Sahib, the Wagah ceremony, and the city’s famous streets of kulcha and lassi.\n\nDays are paced so you can visit the temple in both daylight and evening light, when the marble and the sacred pool glow. Hospitality is part of the journey, not an extra stop.',
		experiences: [
			{
				title: 'Golden Temple, Amritsar',
				mood: 'Spiritual',
				description:
					'The Harmandir Sahib glowing on the sacred pool, langar, and the calm of the marble parikrama. Visit both day and night if you can.',
				src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCN508iZBs3uBNdIdlrPHwLzBe1uIBXZMOcwJEQ-nyvZ9XlGG9t0Tdm75aW9moWQDO_04PHH36Gqmxty6lDVoVdM_WD_SQ0Yj2Z7ww0foK3aJvtGDhWMILJpxAe0xxl6pn7P3qjBVqceTZnyk3IZYNANDPMNHglFuYAmnjIr8WBZX-csRrZLY-RHy37kG2T-ncjBP4MHts9rxecf1LEcAFku6zaOO0eBYL9DR3Tr0fRsYCE48I6',
				alt: 'Cultural heritage scenes from Punjab',
			},
			{
				title: 'Wagah Border ceremony',
				mood: 'Ceremony',
				description:
					'High-energy parade, flags, and cheering crowds at sunset. Arrive early for seats and soak in the atmosphere.',
				src: unsplash('photo-1532375810709-75b1da00537c'),
				alt: 'Crowds gathered for an outdoor ceremony in Punjab',
			},
			{
				title: 'Amritsar food streets',
				mood: 'Cuisine',
				description:
					'Kulcha, lassi, and late-night dhabas. Punjab’s hospitality is easiest to taste after a day at the shrine.',
				src: unsplash('photo-1596040033229-a9821ebd058d'),
				alt: 'Spices and North Indian street food',
			},
		],
		reviews: [
			{
				name: 'Harpreet K.',
				quote: 'The Golden Temple at night is something we will never forget. Langar visit was handled with real respect.',
				rating: 5,
			},
			{
				name: 'The Singh Family',
				quote: 'Wagah tickets and timing were sorted for us. Food recommendations were spot on.',
				rating: 5,
			},
			{
				name: 'Maya R.',
				quote: 'Warm, organised, and generous with time at the temple. Highly recommend this Punjab package.',
				rating: 4,
			},
		],
	},
	jaipur: {
		overview:
			'Jaipur, the Pink City, is Rajasthan’s royal capital — palaces, hill forts, and bazaars in terracotta and rose sandstone. This tour gives you Amber Fort’s mirrored halls, Hawa Mahal’s honeycomb facade, and enough market time to actually shop.\n\nMornings are kept for the big forts when the light is kinder; afternoons and evenings belong to Johari and Bapu Bazaar. The city is colourful and busy, so the itinerary leaves room to wander without losing the day.',
		experiences: [
			{
				title: 'Hawa Mahal facade',
				mood: 'Pink City',
				description:
					'Honeycomb windows catching the desert light. View it from the street first, then step inside for the city rooftops.',
				src: unsplash('photo-1477587458883-47145ed94245'),
				alt: 'Hawa Mahal facade in Jaipur',
			},
			{
				title: 'Amber Fort',
				mood: 'Palaces',
				description:
					'Elephant-path ramparts, mirrored halls, and views over Maota Lake. The fort is Jaipur’s grandest half-day.',
				src: unsplash('photo-1603262110263-fb0112e7cc33'),
				alt: 'Amber Fort architecture overlooking the hills',
			},
			{
				title: 'Bazaars of the old city',
				mood: 'Bazaars',
				description:
					'Block prints, gemstones, and blue pottery in Johari and Bapu Bazaar. Bargain gently and watch the city glow terracotta at dusk.',
				src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCIj_Lxi_peOu4Ke8hOOhKCyJrcHNShBj9GMtvZLDGqQzeTwusX3SGb9iu5Hwy4GOPi4G1LhXSMWriNc9F4QmVnKkUniWo-LYJjBRh8fq9adH3xONIJd5Bnwy_s5WD1TufqYZY2cc3ZBmRTCWf1bo8q6WjCNrkL7PrK5Rz7jojEmxKKGuKrYC2sHM_4c9QOUxGyJsq5LzaVans58OsP7hUrznzQ1DOUhJUhzK1w9-hKyQt0PoSt',
				alt: 'Historic palace architecture in Jaipur',
			},
		],
		reviews: [
			{
				name: 'Leila N.',
				quote: 'Amber Fort was the highlight. Our driver knew the quieter photo spots and avoided the worst queues.',
				rating: 5,
			},
			{
				name: 'Arjun & Meera',
				quote: 'Palaces, markets, and a beautiful hotel. Jaipur felt royal without being exhausting.',
				rating: 5,
			},
			{
				name: 'Helen W.',
				quote: 'Loved the bazaar walk. Shopping time was built into the itinerary instead of squeezed in.',
				rating: 4,
			},
		],
	},
	darjeeling: {
		overview:
			'Darjeeling is the classic Himalayan hill station: tea terraces, a toy train, and sunrise over Kanchenjunga from Tiger Hill. This short stay is for travelers who want cool air, misty gardens, and a slower colonial-era promenade after the plains.\n\nEarly starts are reserved for the mountain light; the rest of the day can unfold through tea tastings, Mall Road bakeries, and viewpoints above the clouds. The pacing suits families as much as first-time hill visitors.',
		experiences: [
			{
				title: 'Tiger Hill sunrise',
				mood: 'Sunrise',
				description:
					'Kanchenjunga catching first light, often above a sea of clouds. Start before dawn — the drive up is part of the ritual.',
				src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA3vp5A1zxzoj_IVdevCULfVAvhb48osQbdzN1GKdK4Ocf8cU8OnnxAe8TseNexHUrzDVVGn0MnkyFWrGIMyO8GAewF4o3K9JFYIK7z4jY4oVP8XNffODjbzrfDg1M0oNDhorlA7Omd0ng6ceFGZ1dZh5kGttwvtoRvSLKaQK3OdNQnppdrEvzFQ6JHXqVICv9vI8ofydUfMoUb3-8KnzjXJSN_CvPxonJKaki0Vjakshq6NGmm',
				alt: 'Tea gardens and Himalayan sunrise in Darjeeling',
			},
			{
				title: 'Tea garden walks',
				mood: 'Tea estates',
				description:
					'Emerald terraces, cool mist, and tasting sessions. The hills smell of tea leaves after rain.',
				src: unsplash('photo-1582793988951-9aed5509eb97'),
				alt: 'Lush tea garden terraces in the hills',
			},
			{
				title: 'Toy train and Mall Road',
				mood: 'Hill station',
				description:
					'The UNESCO mountain railway, colonial-era promenade, and bakeries. Darjeeling is as much about pace as peaks.',
				src: unsplash('photo-1548013146-72479768bada'),
				alt: 'Hill-station street with mountain backdrop',
			},
		],
		reviews: [
			{
				name: 'Priya D.',
				quote: 'Tiger Hill was magical. They had blankets and tea ready for the sunrise wait.',
				rating: 5,
			},
			{
				name: 'The Bose Family',
				quote: 'Tea estate visit was a favourite. Gentle itinerary that suited both kids and grandparents.',
				rating: 5,
			},
			{
				name: 'Chris M.',
				quote: 'Cool weather, great views, and a charming hotel. Exactly the hill-station break we wanted.',
				rating: 4,
			},
		],
	},
	siliguri: {
		overview:
			'Siliguri is the gateway to the Northeast — a pause between airport runways and the first real mountain views. Use it to acclimatise, see the Teesta, and visit Salugara Monastery’s great stupa before climbing toward Darjeeling or Sikkim.\n\nThis is a short, practical stay: river air, foothill scenery, and a comfortable hotel after a long journey. Transfers are arranged so the onward hill road starts without scramble.',
		experiences: [
			{
				title: 'Teesta river views',
				mood: 'Rivers',
				description:
					'Jade water against forested hills. Siliguri is the pause before the mountains, with wide skies and river air.',
				src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDQTERnyLREWzyg0lkWt0a1Va7bLE0hB1drhzX84503G3II-_cMsvo8DGgcm7Fs1HfbZJiIX5RyrTUmp6hblY0XXsOVajTOoUQtUiTetllwDcD6IDY3X6OkqFlJxD9c4qdmUOjXqRVUOtN_8pVI-oahvcqvtvXTj4fa4G9aC8FI--5-uwThEoJ1Rm1gjduX-GPI40IiIpSM4QwUUKjPSfxGd-5s6lo4QJiYIeWy6vAfpNoegfv0',
				alt: 'Mountain views around Siliguri',
			},
			{
				title: 'Salugara Monastery',
				mood: 'Monastery',
				description:
					'The giant stupa rising above the plains. A colourful, peaceful stop on the way to Darjeeling or Sikkim.',
				src: unsplash('photo-1548013146-72479768bada'),
				alt: 'Himalayan foothill scenery near Siliguri',
			},
			{
				title: 'Gateway to the Northeast',
				mood: 'Nature',
				description:
					'Markets, tea warehouses, and first glimpses of the hills. Use Siliguri to acclimatise before higher altitudes.',
				src: unsplash('photo-1506905925346-21bda4d32df4'),
				alt: 'Mountain foothills beyond Siliguri',
			},
		],
		reviews: [
			{
				name: 'Ananya G.',
				quote: 'Perfect base before Darjeeling. Transfers from the airport were waiting and the monastery stop was a nice surprise.',
				rating: 5,
			},
			{
				name: 'Rohit S.',
				quote: 'Short trip but well used. River views and a comfortable hotel after a long journey.',
				rating: 4,
			},
			{
				name: 'Lina P.',
				quote: 'Calm, green, and organised. Good for families connecting onward to the hills.',
				rating: 5,
			},
		],
	},
	lakshadweep: {
		overview:
			'Lakshadweep is India’s coral-island chain: white sand, lagoon shallows, and water that shifts from turquoise to deep blue in a few steps. Permits and island hops are handled for you so the trip stays simple once you arrive.\n\nDays are built around snorkeling, beach walks, and unhurried sunsets. This is a genuine disconnect — small islands, clear reefs, and very few crowds compared with better-known beach destinations.',
		experiences: [
			{
				title: 'Lagoon shallows',
				mood: 'Lagoons',
				description:
					'Water so clear the sandbars look painted. Wade, swim, and watch the colour shift from turquoise to ink blue.',
				src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAUlxGt5Vcl-OKRtDVJdUggXOgZdwZI5sAtMKiSzW4jdLJoEzkU6PL_IFoQSrXzYYKk95IM--Ie9xoSL6z-ug_Tj1c0_EiGH6qdj1baVId3ppUDQPE7sba7w4PXllzt5gl-ukVs9z8cIrga5h7oQ0cyszR-Q-WVC8LN6YLb3BbV5-uX1lCAxPr-WgF7l6KzjX-cxWabHfUbV_qj-ZVLFsNQGsUDtZEqaCQDLANEmzdBOCjg5S2O',
				alt: 'Crystal-clear waters and white sand beaches of Lakshadweep',
			},
			{
				title: 'Coral gardens',
				mood: 'Snorkeling',
				description:
					'Snorkel over reefs just offshore. Fish, coral, and silence except for your own breathing.',
				src: unsplash('photo-1544551763-46a013bb70d5'),
				alt: 'Snorkeler above a coral reef in clear tropical water',
			},
			{
				title: 'White-sand island walks',
				mood: 'Beaches',
				description:
					'Barefoot circuits of tiny islands at low tide. Sunsets here are slow, wide, and almost empty of crowds.',
				src: unsplash('photo-1507525428034-b723cf961d3e'),
				alt: 'White sand beach and turquoise water',
			},
		],
		reviews: [
			{
				name: 'Noor A.',
				quote: 'The water colour is unreal. Permits and island hops were handled completely by the team.',
				rating: 5,
			},
			{
				name: 'Sam & Diya',
				quote: 'Snorkeling was the highlight. Small group, unhurried days, and beautiful beaches.',
				rating: 5,
			},
			{
				name: 'Ibrahim K.',
				quote: 'A true disconnect. Flights and transfers were coordinated so we could just enjoy the islands.',
				rating: 4,
			},
		],
	},
	iraq: {
		overview:
			'This Iraq journey is organised around ziyarat — the sacred cities of Karbala and Najaf, their golden domes, and the courtyards where pilgrims gather. The focus is spiritual first: prayer time, respectful dress, and group support throughout.\n\nHotels are chosen close to the holy precincts, and daily schedules stay clear so families can move together with dignity. Historic mosques, shared meals, and the atmosphere of the shrines shape the days more than sightseeing for its own sake.',
		experiences: [
			{
				title: 'Sacred cities',
				mood: 'Pilgrimage',
				description:
					'The golden domes and great courtyards of Karbala and Najaf. Journeys here are spiritual first — allow time for prayer and reflection.',
				src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDmw59VHGJtl_gX3Fp8nR68ulp11fJ5IC08SRuZWxbGDqIfc7nyTR91Fw6dBA-SXH7iO7vvUKqhVGE0D0owm1us4VIc_e1GECm_MTNqXoOYJarEQaD9sTFN4PrFEy_Ad51gRHcLjjg3jV3caVueyI3Aa1aBjXJoZhS5vZKms1rDTfdOZ-qvRnxMumJmGhlAJUqkQzsyTokBaPIhA50AhhUW9mBG5D2laHB4JheTUOP1siWEzpTN',
				alt: 'Historic sites in Iraq',
			},
			{
				title: 'Historic mosques and shrines',
				mood: 'Heritage',
				description:
					'Tilework, calligraphy, and night illumination around the holy precincts. Guides help with timings, entry, and respectful dress.',
				src: unsplash('photo-1542816417-0983c9c9ad53'),
				alt: 'Mosque architecture with detailed tilework',
			},
			{
				title: 'Shared meals and hospitality',
				mood: 'Culture',
				description:
					'Simple, generous Iraqi hospitality after long days of ziyarat. Group travel keeps logistics calm in a meaningful destination.',
				src: unsplash('photo-1596040033229-a9821ebd058d'),
				alt: 'Shared Middle Eastern meal with spices and bread',
			},
		],
		reviews: [
			{
				name: 'Hussein A.',
				quote: 'Our ziyarat was organised with dignity. Hotels were close to the shrines and the group support was excellent.',
				rating: 5,
			},
			{
				name: 'The Jafri Family',
				quote: 'We felt safe and well guided throughout. The spiritual atmosphere was everything we hoped for.',
				rating: 5,
			},
			{
				name: 'Zahra M.',
				quote: 'Clear schedules, respectful pacing, and help at every step. Grateful we chose Al Amjad.',
				rating: 5,
			},
		],
	},
	palestine: {
		overview:
			'Palestine is a spiritual journey through one of the world’s most layered landscapes — Al-Aqsa, the Old City’s stone lanes, and nearby historic towns. This itinerary is designed so you can be present: walking slowly, pausing for prayer, and taking in centuries of faith in a single street.\n\nGuides handle practical timings and respectful routing. The days are meaningful rather than rushed, with space for both the holy precincts and the quieter corners of Jerusalem and Bethlehem.',
		experiences: [
			{
				title: 'Al-Aqsa and the Old City',
				mood: 'Spiritual',
				description:
					'Stone lanes, call to prayer, and the deep quiet of one of Islam’s holiest precincts. This journey is about presence more than photos.',
				src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDpSa_KmEBhlSsMSTCnp9__gPTQT0wjZC7prV7XWYUaIqPlBq4YUUzSGQnI1ssZQaaR-7KtV4Yd5ZJUnZcAOofuLKQCIGatTcDUCvVgkZw0YsiRuvVbqxqYrYVTVdJlZiCdNIDNrGifMqJBv7qHK7vFKx6KmI-2juhaM5GYGVFIyhc5OJm6mod9jmOhc46v2qUnEwFK7rKYi6Jgnf2eLWquYEg1RsqYhbll9XrFPh-qULhP4uP6',
				alt: 'Historic spiritual sites in Palestine',
			},
			{
				title: 'Jerusalem’s historic quarters',
				mood: 'Old city',
				description:
					'Markets, stone arches, and centuries of layered history. Walk slowly — every turn holds another century.',
				src: unsplash('photo-1559686798-acc32912566d'),
				alt: 'Stone streets of a historic Middle Eastern old city',
			},
			{
				title: 'Bethlehem and surrounding sites',
				mood: 'Heritage',
				description:
					'Nearby towns and lookout points that complete a spiritual itinerary. Guides keep the day grounded and practical.',
				src: unsplash('photo-1542816417-0983c9c9ad53'),
				alt: 'Historic stone architecture in the Holy Land',
			},
		],
		reviews: [
			{
				name: 'Maryam Q.',
				quote: 'A deeply moving journey. Logistics were handled so we could focus on the visit itself.',
				rating: 5,
			},
			{
				name: 'Ahmad & Layla',
				quote: 'Respectful guides and a well-paced Old City walk. We felt supported the entire time.',
				rating: 5,
			},
			{
				name: 'Sami R.',
				quote: 'Spiritually rich and practically smooth. Would recommend to any family planning this trip.',
				rating: 4,
			},
		],
	},
	jordan: {
		overview:
			'Jordan holds some of the region’s great ancient set-pieces: the Siq opening onto Petra’s Treasury, Wadi Rum’s red desert, and Amman’s citadel above a white-stone capital. This tour gives Petra the full day it deserves, then shifts to sand, stars, and city views.\n\nWalks are paced for mixed groups, with jeep time in Wadi Rum and a gentler urban close in Amman. The landscapes are dramatic; the logistics stay straightforward so you can look up instead of checking maps.',
		experiences: [
			{
				title: 'The Siq into Petra',
				mood: 'Ancient',
				description:
					'A narrow canyon opening onto the Treasury facade. The walk in is as powerful as the monument — rose stone, shade, and silence.',
				src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDmnkmg2kpgYda84xyFi-f2SJKJgnQUFiFHp1PS1iJvK2TKBfI5AX5yL6LbcIHm0ZpN2xj0Frh72dy7so-lV1ZQk49MMz7IvcLQxlxi3OR43VUoXrvWcEFUltMh2Ova3IjTz8FGhPhRIZbAcubhOkyFKQfIYw4PRApLfdoO4riLbDk6zfaGlzQAKV1LZGs0DCIi-q4cGhsymCTD7WSnfN8PoaCvPRtlNDHVg9pwxFvARxLqYPCL',
				alt: 'Ancient ruins of Petra in Jordan',
			},
			{
				title: 'Wadi Rum desert',
				mood: 'Desert',
				description:
					'Red dunes, rock bridges, and a sky full of stars. Jeep tracks by day, campfire quiet by night.',
				src: unsplash('photo-1509316785289-025f5b846b35'),
				alt: 'Red desert landscape and rock formations',
			},
			{
				title: 'Amman citadel views',
				mood: 'City',
				description:
					'Roman columns above a white-stone capital. A gentle urban contrast after Petra’s long walks.',
				src: unsplash('photo-1548788140-ceae8c0ddb87'),
				alt: 'Ancient stone facade similar to Petra’s Treasury',
			},
		],
		reviews: [
			{
				name: 'Elena V.',
				quote: 'Walking into Petra through the Siq was a lifetime moment. The desert camp in Wadi Rum was equally special.',
				rating: 5,
			},
			{
				name: 'Bilal H.',
				quote: 'Excellent pacing — Petra needed a full day and they gave it to us. Guides were knowledgeable.',
				rating: 5,
			},
			{
				name: 'Tom R.',
				quote: 'Stunning landscapes and smooth hotels. A little more free time in Amman would have been nice, still a 4.',
				rating: 4,
			},
		],
	},
	malaysia: {
		overview:
			'Malaysia balances a polished capital with limestone caves and tropical green just outside the city. Kuala Lumpur’s towers, food courts, and Batu Caves sit comfortably in the same itinerary as rainforest or island add-ons.\n\nThis is an easy first trip to Southeast Asia: modern hotels, excellent everyday food, and short hops between skyline and nature. Days are mixed so the city never feels like only malls, and the outdoors never feel far.',
		experiences: [
			{
				title: 'Kuala Lumpur skyline',
				mood: 'City',
				description:
					'Petronas Towers, rooftop views, and a skyline that lights up after tropical rain. The city is sleek and easy to explore.',
				src: unsplash('photo-1596422846543-75c6be412799'),
				alt: 'Petronas Twin Towers in Kuala Lumpur',
			},
			{
				title: 'Batu Caves',
				mood: 'Culture',
				description:
					'Rainbow stairway, limestone caverns, and a living temple. A short trip from the city with a completely different mood.',
				src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBpo9dlgTGAv3fDvb-kbYadXpnsdH973-zoLy-UfUtrZbRS2NaPYO8rZyRPJjNYWyYHXgxbwW95oJIAGSbvgMyH88cYwFRoLmlGq7nVGIOqBcHIesAl-PP9g1B7WFawuNlW9b6uKmJ3ZpnSCShgHyUKP20tcp6wU4kXCK8LJ1ihLky-zi8qxJ7cyGOwuZ6A-btrLruImWMMQcA8X4qmw9zD7mBLJgi4nrOpkf56YO7ZBFhX1mN7',
				alt: 'Modern cityscape and tropical scenery in Malaysia',
			},
			{
				title: 'Tropical nature escapes',
				mood: 'Nature',
				description:
					'Rainforest parks, fireflies, or island add-ons depending on the itinerary. Malaysia balances towers and jungle unusually well.',
				src: unsplash('photo-1501785888041-af3ef285b470'),
				alt: 'Lush tropical landscape and water',
			},
		],
		reviews: [
			{
				name: 'Farah Z.',
				quote: 'KL felt effortless. Towers, food courts, and Batu Caves in a single well-planned day.',
				rating: 5,
			},
			{
				name: 'The Nair Family',
				quote: 'Great mix of city and nature. Kids loved the caves and the hotel pool after long walks.',
				rating: 5,
			},
			{
				name: 'Ben C.',
				quote: 'Clean, modern, and tasty. A very comfortable first trip to Southeast Asia.',
				rating: 4,
			},
		],
	},
	thailand: {
		overview:
			'Thailand pairs warm island water with gold-spired temples and some of Asia’s best street food. This package keeps beach days slow and city or temple visits well briefed — cover shoulders and knees, then take your time in the courtyards.\n\nExpect limestone cliffs, kayaks, night markets, and mango sticky rice eaten standing up. Transfers between coast and town are arranged so the trip feels like a holiday, not a sequence of airports.',
		experiences: [
			{
				title: 'Island beaches',
				mood: 'Beaches',
				description:
					'Limestone cliffs, kayaks, and water that stays warm into the evening. Thailand’s islands are the slow days of the trip.',
				src: unsplash('photo-1552465011-b4e21bf6e79a'),
				alt: 'Tropical beach and limestone cliffs in Thailand',
			},
			{
				title: 'Temple visits',
				mood: 'Temples',
				description:
					'Gold spires, incense, and barefoot courtyards. Dress codes are simple — cover shoulders and knees, and take your time.',
				src: unsplash('photo-1528183429752-a53940ce8665'),
				alt: 'Golden Buddhist temple in Thailand',
			},
			{
				title: 'Night markets and street food',
				mood: 'Street food',
				description:
					'Grilled seafood, mango sticky rice, and busy lantern-lit streets. The best souvenirs are often eaten standing up.',
				src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBYV8-vdGRP4b8PQv-B2oGuunvUXc2KQ14yJwPrVVLKJ0BK7jXyOgV8cSm3rirS27Y_5BUNKxbqenf6XsNygrQnCH9o0uqqFbZ1_v6akSfg2rWhyH8ie-MuVxr_IevXq0tqFgWEfgk1X5E5kYCfG322m1TIJWM4_1qqrsiaYESSxSEreU_2zIM2Lw2apiZORDb6AftOTeUmfbAtz64go86ODZyDw7ZolRBjZjCxfTyR0wYIXNDc',
				alt: 'Beaches and island culture in Thailand',
			},
		],
		reviews: [
			{
				name: 'Hana Y.',
				quote: 'Beaches were stunning and the temple etiquette briefing helped a lot. Food tour was a highlight.',
				rating: 5,
			},
			{
				name: 'Mike & Aisha',
				quote: 'Relaxed island time plus just enough culture. Transfers between city and coast were painless.',
				rating: 5,
			},
			{
				name: 'Sophie L.',
				quote: 'Beautiful trip. A couple of market evenings more would have been perfect, still wonderful.',
				rating: 4,
			},
		],
	},
	singapore: {
		overview:
			'Singapore is compact, green, and built for short stays: Gardens by the Bay, the Marina Bay skyline, and hawker food that rivals any fine-dining night. Five days here feel full without needing long transfers.\n\nEvenings are the city’s best hour — supertree lights, waterfront walks, and neighbourhood flavours in Chinatown or Kampong Glam. The itinerary is easy for families: safe streets, clear plans, and more than enough to eat.',
		experiences: [
			{
				title: 'Gardens by the Bay',
				mood: 'Futuristic',
				description:
					'Supertrees, cloud forest mist, and a skyline that looks like tomorrow. Go after dark when the light show starts.',
				src: unsplash('photo-1525625293386-3f8f99389edd'),
				alt: 'Supertree Grove at Gardens by the Bay, Singapore',
			},
			{
				title: 'Marina Bay',
				mood: 'Skyline',
				description:
					'The Helix Bridge, waterfront, and the Marina Bay Sands silhouette. Best enjoyed on foot in the cooler evening.',
				src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBJOn78k2gTixIGKCH69iphsYT4yv_awOtXUHxV0J7EY7STC0_9TKxKJmvmh-lFQcZcxRsEU_C1Dlse6k8YCnm3PQGSD2MSw6xq1xLpEYRM1PnNNOLdCewHo7KVLWe1djWaKKG6LbRo9QqsEG65nXgj9zuM-52kLLy5IA3bc8ThcxDicFuL_gHJG2UzpzQYh1oRIJi3oi5Cee8tJYvGQeNpbDCxQh-JeIoBKkYOh5yjPgxLXvUG',
				alt: 'Futuristic architecture in Singapore',
			},
			{
				title: 'Neighbourhood flavours',
				mood: 'Food',
				description:
					'Hawker centres, Chinatown, and Kampong Glam. Singapore’s real luxury is eating extremely well for very little.',
				src: unsplash('photo-1559339352-11d035aa65de'),
				alt: 'Singapore hawker food and city dining',
			},
		],
		reviews: [
			{
				name: 'Aisha R.',
				quote: 'Gardens by the Bay at night was breathtaking. The whole city felt easy and safe for our family.',
				rating: 5,
			},
			{
				name: 'The Joseph Family',
				quote: 'Perfect short break. Hawker food tour was the kids’ favourite, not the skyline — which says a lot.',
				rating: 5,
			},
			{
				name: 'Mark D.',
				quote: 'Polished and well timed. Five days felt full without being rushed.',
				rating: 4,
			},
		],
	},
};

function fallbackContent(name: string, src: string, alt: string, tagline: string): PlaceContent {
	return {
		overview: tagline,
		experiences: [
			{
				title: `Landmarks of ${name}`,
				mood: 'Highlights',
				description: tagline,
				src,
				alt,
			},
			{
				title: 'Local streets and flavours',
				mood: 'Culture',
				description: `Markets, meals, and everyday scenes that make ${name} feel lived-in, not just visited.`,
				src,
				alt,
			},
			{
				title: 'Guided moments',
				mood: 'Experience',
				description: `Your days are paced so the big sights in ${name} sit alongside quieter viewpoints and rest time.`,
				src,
				alt,
			},
		],
		reviews: [
			{
				name: 'Amina K.',
				quote: `Our ${name} trip was smoothly organised from airport to hotel. The pacing left room to enjoy the places.`,
				rating: 5,
			},
			{
				name: 'The Rahman Family',
				quote: `Hotels and transfers were reliable. ${name} felt easy even as a first visit.`,
				rating: 5,
			},
			{
				name: 'James L.',
				quote: `Good value and a knowledgeable local guide in ${name}. Would travel with Al Amjad again.`,
				rating: 4,
			},
		],
	};
}

export function getPlaceContentFor(input: {
	slug: string;
	name: string;
	src: string;
	alt: string;
	tagline: string;
}): PlaceContent {
	return placeContentBySlug[input.slug] ?? fallbackContent(input.name, input.src, input.alt, input.tagline);
}
