import { getPlaceContentFor, type DestinationExperience, type DestinationReview } from './place-content';

export type { DestinationExperience, DestinationReview };

export interface DestinationStop {
	time: string;
	title: string;
	description: string;
}

export interface DestinationDay {
	day: number;
	title: string;
	stops: DestinationStop[];
}

export interface DestinationImage {
	src: string;
	alt: string;
	featured?: boolean;
}

export interface DestinationInclusion {
	icon: string;
	label: string;
}

export interface DestinationDetail {
	slug: string;
	name: string;
	country: string;
	badge?: string;
	title: string;
	tagline: string;
	overview: string;
	duration: string;
	hero: DestinationImage;
	gallery: DestinationImage[];
	itinerary: DestinationDay[];
	inclusions: DestinationInclusion[];
	experiences: DestinationExperience[];
	reviews: DestinationReview[];
	whatsappMessage: string;
}

export const destinationDetails: DestinationDetail[] = [
	{
		slug: 'agra',
		name: 'Agra',
		country: 'India',
		badge: 'Trending',
		title: 'Agra: The City of Eternal Love',
		tagline: 'Experience the majesty of the Taj Mahal and immerse yourself in the rich Mughal history of Agra.',
		duration: '9 Days / 8 Nights',
		hero: {
			src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuARUFy3MUpJUnULuWhcupjxPw5ty06hqT8ufWsaNw2u3tAqc2DGJ0pJlimJpKuPgak3GUwY1psP0fjZmBh5K9bxzO_oTpeimEiGUZLkBKAwaDvIPUEMCfyw6BKhNdLt5kVCQnYv2NQkcAHijPMJ0Qgywjnly27gubFNpZWPdUbSk1ysrp7FihtLN7LmQuMMIKiUzKMq4wDzxA_URm6UKw2nho7R2_Z5Kuz95iCA9scNU5x93t6u',
			alt: 'The Taj Mahal at sunrise, reflected in the central pool with gardens in the foreground',
		},
		gallery: [
			{
				src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuANIuWp16RRJC27LXWnmKsSxcgXg8q2DxX1Km1DMELOXlLuzhebWxeKMCMcqpZDLyUkA_mIh7c7eNbG3GG4JgEnkQGfQ1WgEze1eS40WhMNCd5Xfnb95MERaLxvcIwCe6e95PswTzwf62Rff8uJEZ8RtUTFny3P1RQp2Qeh-iVQtt6HBbMUKLulIsrLNB6DcQ2sBY6fXXn2EnX8uHNQPNeOb7b6l6qDVr-hPBmiZ5-8118NEr-N',
				alt: 'Intricate marble inlay floral patterns on the walls of the Taj Mahal',
				featured: true,
			},
			{
				src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB55BZNyfa5Hb-knQZ1S_uJoCP0dJ9y9CAHwRlTD5WPhyuCqp2Bg_IjmV6sGe8u3Lj9iXmZ1-qL7OxRuxGgpgTX-Wjxe8p2kutWDWTHfTTudocOQ70dwGlnQbiAYsfeoY2tb8DQFFfo8Mzk7yb-2P2jCyJPyrN58kHOQUHuQ5C0HB759nw86Kc6xWdIJIFKr6meB9iwqV8YXnDu6updKQEzSOIsnBfD0i9MNirTItwRSeG2pYkx',
				alt: 'Colorful local market stalls in Agra with textiles, brassware, and souvenirs',
			},
			{
				src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDQ25lgUOR1SinHhiV9hoI8UI6fb42Ynfj_zpuYEhzTQIeaoGpkqab7Q_WpQwCkLyQO6--LS6CGdfcPSqHuQO_drAzZ5sBrJSaIfLypbTHbJmfH0PAxFg68QH_Y1-rY2L6gMKrmXAa_t9cQ1CU1ObYnH3JjCnDodqHbbw45TpGb5QWrwn7MasDNFBSUvk9hDpLVh09QcoXYF-9fVj8bwCCo4BRXPoMxF585QPU06wzeRwXdPeY3',
				alt: 'Agra Petha and masala chai on a wooden table',
			},
		],
		itinerary: [
			{
				day: 1,
				title: 'The Icons',
				stops: [
					{
						time: '05:30 AM',
						title: 'Sunrise at Taj Mahal',
						description: 'Beat the crowds and witness the marble change colors with the rising sun.',
					},
					{
						time: '11:00 AM',
						title: 'Agra Fort Exploration',
						description: 'Discover the grand courtyards and palaces of the Mughal emperors.',
					},
				],
			},
			{
				day: 2,
				title: 'Culture & Cuisine',
				stops: [
					{
						time: '09:00 AM',
						title: 'Fatehpur Sikri',
						description: 'Visit the magnificent abandoned city just outside Agra.',
					},
					{
						time: '03:00 PM',
						title: 'Local Markets & Street Food',
						description: 'Sample famous Agra Petha and shop for marble inlay work in Sadar Bazaar.',
					},
				],
			},
		],
		inclusions: [
			{ icon: 'hotel', label: '4-Star Hotel Accommodation' },
			{ icon: 'directions_car', label: 'AC Transfers included' },
			{ icon: 'restaurant', label: 'Breakfast & 1 Dinner' },
		],
		...getPlaceContentFor({ slug: 'agra', name: 'Agra', src: '', alt: '', tagline: '' }),
		whatsappMessage: 'Hi, I am interested in the Agra package (9 Days / 8 Nights). Please share pricing.',
	},
];

const defaultInclusions: DestinationInclusion[] = [
	{ icon: 'hotel', label: 'Hotel Accommodation' },
	{ icon: 'directions_car', label: 'AC Transfers included' },
	{ icon: 'restaurant', label: 'Meals as per itinerary' },
];

export function formatDuration(days: number) {
	return `${days} Days / ${days - 1} Nights`;
}

function basicPackage(input: {
	slug: string;
	name: string;
	country: string;
	badge?: string;
	title?: string;
	tagline: string;
	src: string;
	alt: string;
	durationDays: number;
}): DestinationDetail {
	const duration = formatDuration(input.durationDays);
	const places = getPlaceContentFor(input);

	return {
		slug: input.slug,
		name: input.name,
		country: input.country,
		badge: input.badge,
		title: input.title ?? input.name,
		tagline: input.tagline,
		overview: places.overview,
		duration,
		hero: { src: input.src, alt: input.alt },
		gallery: [{ src: input.src, alt: input.alt, featured: true }],
		itinerary: [],
		inclusions: defaultInclusions,
		experiences: places.experiences,
		reviews: places.reviews,
		whatsappMessage: `Hi, I am interested in the ${input.name} package (${duration}). Please share pricing.`,
	};
}

const delhiImage = {
	src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDWf1YPj3j3XVn3DBfNEz-szFoslcQiLwsQ-l-2pP7ukzaBQKcJjpVvRv8WjIdHGROLkFtH1xasous8KOFUi_mJiGTYvdjDqVeL8RnU_TRcGmCvwA1XRhOBTqXRykDUF8xcOfmHxpgf6mgRHXfmuYg5-N6imxjGjwWTMqyxXVhhAFc-8NspgqSbB5sNk8-86-rJisnOw8O-WqPMPKDtEwJ2dHJ20wSQgRqV0j9ihrq9hpg__qGA',
	alt: 'Landmarks and cityscape of Delhi',
};

const basicPackages: DestinationDetail[] = [
	basicPackage({
		slug: 'kulu-manali',
		name: 'Kulu Manali',
		country: 'India',
		title: 'Kulu Manali: Himalayan Escape',
		tagline: 'Escape to the serene valleys and breathtaking snow-capped peaks of the Himalayas.',
		src: 'https://s7ap1.scene7.com/is/image/incredibleindia/The-Best-Adventure-Experiences-in-Manali1-popular?qlt=82&ts=1726730921047',
		alt: 'Snow-covered mountains and adventure experiences in Manali',
		durationDays: 12,
	}),
	basicPackage({
		slug: 'kashmir',
		name: 'Kashmir',
		country: 'India',
		badge: 'Trending',
		title: 'Kashmir: Paradise on Earth',
		tagline: "Experience 'Paradise on Earth' with tranquil lakes, vibrant gardens, and majestic landscapes.",
		src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDx6sH8UOJaFx97kQFvPsVnOccKHycY3Ph28IGQMwe8ZbSeiUB1HO-JdrplogTqtjcjLAXK_zNBukpQgaH1RNmm_z2RkkrzbPXyYgMOMMYSCNOeAETRy5sR1chWK-8HqberDXKcYOk7NzY1pnrAyxyr4Ov1vQGbGHgaxy3QXpCbmi5RdPNFQarINjglsQ2mS_GWD8ziIOgFB0qcTghj1pnHq1GOI27SeOcwfAgqhDS7xv3OdHTu',
		alt: 'Shikara boat on Dal Lake in Kashmir at sunset',
		durationDays: 11,
	}),
	basicPackage({
		slug: 'ajmer',
		name: 'Ajmer',
		country: 'India',
		title: 'Ajmer: Spiritual Heart of Rajasthan',
		tagline: 'Discover the spiritual heart of Rajasthan with a visit to the historic Ajmer Sharif Dargah.',
		src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAyPxCVKkOmnJmbmhuOfLzJJpVo-IfwierTWEoCXQDID4nfx2974J7CFx2msbWstciJ_3912ROHYna4NAmUzOMnz5IKxompW0qHlz92JEDPa_4vcG2j4F9DKgkA7eZs7kYQD_mBMHQvBq3htDhyXbS1NS0U6PqkKquSJGf210UqhP7_KURXKWtGRsvUJvQvyIQrlMyW7IQUjTnb5tb7S1v_SLIpoHD5PjDOGtwDJw51lNYaf_34',
		alt: 'Historic architecture in Ajmer, Rajasthan',
		durationDays: 9,
	}),
	basicPackage({
		slug: 'delhi',
		name: 'Delhi',
		country: 'India',
		title: 'Delhi: Capital of Contrasts',
		tagline: "Explore the capital's vibrant mix of ancient history and modern city life.",
		src: delhiImage.src,
		alt: delhiImage.alt,
		durationDays: 9,
	}),
	basicPackage({
		slug: 'punjab',
		name: 'Punjab',
		country: 'India',
		title: 'Punjab: Land of Five Rivers',
		tagline: 'Experience the warm hospitality and rich cultural heritage of the land of five rivers.',
		src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCN508iZBs3uBNdIdlrPHwLzBe1uIBXZMOcwJEQ-nyvZ9XlGG9t0Tdm75aW9moWQDO_04PHH36Gqmxty6lDVoVdM_WD_SQ0Yj2Z7ww0foK3aJvtGDhWMILJpxAe0xxl6pn7P3qjBVqceTZnyk3IZYNANDPMNHglFuYAmnjIr8WBZX-csRrZLY-RHy37kG2T-ncjBP4MHts9rxecf1LEcAFku6zaOO0eBYL9DR3Tr0fRsYCE48I6',
		alt: 'Cultural heritage scenes from Punjab',
		durationDays: 11,
	}),
	basicPackage({
		slug: 'jaipur',
		name: 'Jaipur',
		country: 'India',
		title: 'Jaipur: The Pink City',
		tagline: 'Discover royal palaces, vibrant bazaars, and the timeless charm of Rajasthan’s capital.',
		src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCIj_Lxi_peOu4Ke8hOOhKCyJrcHNShBj9GMtvZLDGqQzeTwusX3SGb9iu5Hwy4GOPi4G1LhXSMWriNc9F4QmVnKkUniWo-LYJjBRh8fq9adH3xONIJd5Bnwy_s5WD1TufqYZY2cc3ZBmRTCWf1bo8q6WjCNrkL7PrK5Rz7jojEmxKKGuKrYC2sHM_4c9QOUxGyJsq5LzaVans58OsP7hUrznzQ1DOUhJUhzK1w9-hKyQt0PoSt',
		alt: 'Historic palace architecture in Jaipur',
		durationDays: 10,
	}),
	basicPackage({
		slug: 'darjeeling',
		name: 'Darjeeling',
		country: 'India',
		title: 'Darjeeling: Queen of the Hills',
		tagline: 'Wander through lush tea gardens and witness the breathtaking sunrise over the Himalayas.',
		src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA3vp5A1zxzoj_IVdevCULfVAvhb48osQbdzN1GKdK4Ocf8cU8OnnxAe8TseNexHUrzDVVGn0MnkyFWrGIMyO8GAewF4o3K9JFYIK7z4jY4oVP8XNffODjbzrfDg1M0oNDhorlA7Omd0ng6ceFGZ1dZh5kGttwvtoRvSLKaQK3OdNQnppdrEvzFQ6JHXqVICv9vI8ofydUfMoUb3-8KnzjXJSN_CvPxonJKaki0Vjakshq6NGmm',
		alt: 'Tea gardens and Himalayan sunrise in Darjeeling',
		durationDays: 6,
	}),
	basicPackage({
		slug: 'siliguri',
		name: 'Siliguri',
		country: 'India',
		title: 'Siliguri: Gateway to the Northeast',
		tagline: 'Your gateway to the Northeast, offering stunning mountain views and serene natural beauty.',
		src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDQTERnyLREWzyg0lkWt0a1Va7bLE0hB1drhzX84503G3II-_cMsvo8DGgcm7Fs1HfbZJiIX5RyrTUmp6hblY0XXsOVajTOoUQtUiTetllwDcD6IDY3X6OkqFlJxD9c4qdmUOjXqRVUOtN_8pVI-oahvcqvtvXTj4fa4G9aC8FI--5-uwThEoJ1Rm1gjduX-GPI40IiIpSM4QwUUKjPSfxGd-5s6lo4QJiYIeWy6vAfpNoegfv0',
		alt: 'Mountain views around Siliguri',
		durationDays: 5,
	}),
	basicPackage({
		slug: 'lakshadweep',
		name: 'Lakshadweep',
		country: 'India',
		badge: 'Trending',
		title: 'Lakshadweep: Tropical Paradise',
		tagline: 'Escape to a tropical paradise with crystal-clear waters and pristine white-sand beaches.',
		src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAUlxGt5Vcl-OKRtDVJdUggXOgZdwZI5sAtMKiSzW4jdLJoEzkU6PL_IFoQSrXzYYKk95IM--Ie9xoSL6z-ug_Tj1c0_EiGH6qdj1baVId3ppUDQPE7sba7w4PXllzt5gl-ukVs9z8cIrga5h7oQ0cyszR-Q-WVC8LN6YLb3BbV5-uX1lCAxPr-WgF7l6KzjX-cxWabHfUbV_qj-ZVLFsNQGsUDtZEqaCQDLANEmzdBOCjg5S2O',
		alt: 'Crystal-clear waters and white sand beaches of Lakshadweep',
		durationDays: 5,
	}),
	basicPackage({
		slug: 'iraq',
		name: 'Iraq',
		country: 'Iraq',
		title: 'Iraq: Cradle of Civilization',
		tagline: 'Explore the cradle of civilization and its rich historical heritage.',
		src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDmw59VHGJtl_gX3Fp8nR68ulp11fJ5IC08SRuZWxbGDqIfc7nyTR91Fw6dBA-SXH7iO7vvUKqhVGE0D0owm1us4VIc_e1GECm_MTNqXoOYJarEQaD9sTFN4PrFEy_Ad51gRHcLjjg3jV3caVueyI3Aa1aBjXJoZhS5vZKms1rDTfdOZ-qvRnxMumJmGhlAJUqkQzsyTokBaPIhA50AhhUW9mBG5D2laHB4JheTUOP1siWEzpTN',
		alt: 'Historic sites in Iraq',
		durationDays: 9,
	}),
	basicPackage({
		slug: 'palestine',
		name: 'Palestine',
		country: 'Palestine',
		title: 'Palestine: A Spiritual Journey',
		tagline: 'Visit the historic sites and experience the profound spiritual atmosphere.',
		src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDpSa_KmEBhlSsMSTCnp9__gPTQT0wjZC7prV7XWYUaIqPlBq4YUUzSGQnI1ssZQaaR-7KtV4Yd5ZJUnZcAOofuLKQCIGatTcDUCvVgkZw0YsiRuvVbqxqYrYVTVdJlZiCdNIDNrGifMqJBv7qHK7vFKx6KmI-2juhaM5GYGVFIyhc5OJm6mod9jmOhc46v2qUnEwFK7rKYi6Jgnf2eLWquYEg1RsqYhbll9XrFPh-qULhP4uP6',
		alt: 'Historic spiritual sites in Palestine',
		durationDays: 9,
	}),
	basicPackage({
		slug: 'jordan',
		name: 'Jordan',
		country: 'Jordan',
		title: 'Jordan: Ancient Wonders',
		tagline: 'Discover the ancient wonders of Petra and the stunning desert landscapes.',
		src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDmnkmg2kpgYda84xyFi-f2SJKJgnQUFiFHp1PS1iJvK2TKBfI5AX5yL6LbcIHm0ZpN2xj0Frh72dy7so-lV1ZQk49MMz7IvcLQxlxi3OR43VUoXrvWcEFUltMh2Ova3IjTz8FGhPhRIZbAcubhOkyFKQfIYw4PRApLfdoO4riLbDk6zfaGlzQAKV1LZGs0DCIi-q4cGhsymCTD7WSnfN8PoaCvPRtlNDHVg9pwxFvARxLqYPCL',
		alt: 'Ancient ruins of Petra in Jordan',
		durationDays: 8,
	}),
	basicPackage({
		slug: 'malaysia',
		name: 'Malaysia',
		country: 'Malaysia',
		title: 'Malaysia: City and Nature',
		tagline: 'Experience the vibrant mix of modern city life and lush tropical nature.',
		src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBpo9dlgTGAv3fDvb-kbYadXpnsdH973-zoLy-UfUtrZbRS2NaPYO8rZyRPJjNYWyYHXgxbwW95oJIAGSbvgMyH88cYwFRoLmlGq7nVGIOqBcHIesAl-PP9g1B7WFawuNlW9b6uKmJ3ZpnSCShgHyUKP20tcp6wU4kXCK8LJ1ihLky-zi8qxJ7cyGOwuZ6A-btrLruImWMMQcA8X4qmw9zD7mBLJgi4nrOpkf56YO7ZBFhX1mN7',
		alt: 'Modern cityscape and tropical scenery in Malaysia',
		durationDays: 7,
	}),
	basicPackage({
		slug: 'thailand',
		name: 'Thailand',
		country: 'Thailand',
		title: 'Thailand: Beaches and Culture',
		tagline: 'Relax on pristine beaches and explore the vibrant culture of the islands.',
		src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBYV8-vdGRP4b8PQv-B2oGuunvUXc2KQ14yJwPrVVLKJ0BK7jXyOgV8cSm3rirS27Y_5BUNKxbqenf6XsNygrQnCH9o0uqqFbZ1_v6akSfg2rWhyH8ie-MuVxr_IevXq0tqFgWEfgk1X5E5kYCfG322m1TIJWM4_1qqrsiaYESSxSEreU_2zIM2Lw2apiZORDb6AftOTeUmfbAtz64go86ODZyDw7ZolRBjZjCxfTyR0wYIXNDc',
		alt: 'Beaches and island culture in Thailand',
		durationDays: 7,
	}),
	basicPackage({
		slug: 'singapore',
		name: 'Singapore',
		country: 'Singapore',
		title: 'Singapore: The Lion City',
		tagline: 'Discover the futuristic architecture and world-class attractions of the Lion City.',
		src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBJOn78k2gTixIGKCH69iphsYT4yv_awOtXUHxV0J7EY7STC0_9TKxKJmvmh-lFQcZcxRsEU_C1Dlse6k8YCnm3PQGSD2MSw6xq1xLpEYRM1PnNNOLdCewHo7KVLWe1djWaKKG6LbRo9QqsEG65nXgj9zuM-52kLLy5IA3bc8ThcxDicFuL_gHJG2UzpzQYh1oRIJi3oi5Cee8tJYvGQeNpbDCxQh-JeIoBKkYOh5yjPgxLXvUG',
		alt: 'Futuristic architecture in Singapore',
		durationDays: 5,
	}),
];

destinationDetails.push(...basicPackages);

export const domesticOverviewSlugs = [
	'delhi',
	'ajmer',
	'agra',
	'punjab',
	'kashmir',
	'lakshadweep',
	'kulu-manali',
	'jaipur',
] as const;

export const internationalOverviewSlugs = [
	'iraq',
	'palestine',
	'jordan',
	'malaysia',
	'thailand',
	'singapore',
] as const;

export function getDestinationBySlug(slug: string) {
	return destinationDetails.find((destination) => destination.slug === slug);
}

export function getDomesticDestinations() {
	return domesticOverviewSlugs
		.map((slug) => getDestinationBySlug(slug))
		.filter((destination): destination is DestinationDetail => Boolean(destination));
}

export function getInternationalDestinations() {
	return internationalOverviewSlugs
		.map((slug) => getDestinationBySlug(slug))
		.filter((destination): destination is DestinationDetail => Boolean(destination));
}

export const featuredDestinationSlugs = ['kulu-manali', 'kashmir', 'lakshadweep', 'agra'] as const;

export function getFeaturedDestinations() {
	return featuredDestinationSlugs
		.map((slug) => getDestinationBySlug(slug))
		.filter((destination): destination is DestinationDetail => Boolean(destination));
}
