export const businessName = 'Al Amjad Tours & Travels';
export const businessPhone = '+919995794058';

export const defaultDescription =
	'Tour packages, flights, and IRCTC train tickets from Kasaragod. Al Amjad Tours & Travels at M.A Bazar books India and international trips.';

export function clip(text: string, max = 160) {
	const clean = text.replace(/\s+/g, ' ').trim();
	if (clean.length <= max) return clean;
	const sliced = clean.slice(0, max - 1);
	const trimmed = sliced.replace(/\s+\S*$/, '');
	return `${trimmed || sliced}…`;
}

export function travelAgencyJsonLd(homeUrl: string, image: string) {
	return {
		'@context': 'https://schema.org',
		'@type': 'TravelAgency',
		'@id': '/#travel-agency',
		name: businessName,
		url: homeUrl,
		telephone: businessPhone,
		image,
		address: {
			'@type': 'PostalAddress',
			streetAddress: 'M.A Bazar',
			addressLocality: 'Kasaragod',
			addressRegion: 'Kerala',
			addressCountry: 'IN',
		},
		areaServed: {
			'@type': 'City',
			name: 'Kasaragod',
		},
	};
}

export function touristTripJsonLd(destination: { name: string; tagline: string }) {
	return {
		'@context': 'https://schema.org',
		'@type': 'TouristTrip',
		name: `${destination.name} tour package`,
		description: destination.tagline,
		touristType: 'Leisure travel',
		provider: {
			'@id': '/#travel-agency',
		},
	};
}
