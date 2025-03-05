export interface BaseDocument {
	_id: string
	_type: string
	title?: string
	slug?: {
		current: string
	}
	mainImage?: {
		alt?: string
	}
}

export interface WithCategories {
	categories?: {
		_id: string
		title: string
	}[]
}

export interface WithAuthor {
	author?: {
		name?: string
		image?: object
	}
}

export interface WithPublishedDate {
	publishedAt?: string
}
