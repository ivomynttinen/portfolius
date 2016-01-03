export function getCurrencySymbol(currency:string) {
	if (currency === 'EUR') {
		return '€'
	}

	if (currency === 'USD') {
		return '$'
	}

	if (currency === 'GBP') {
		return '£'
	}

	if (currency === 'AUD') {
		return '$'
	}
}
