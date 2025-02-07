import { defineQuery } from "next-sanity"

export const PROJECTS_QUERY =
	defineQuery(`*[_type == "project" && defined(slug.current)]|order(publishedAt desc)[0...12]{
  _id,
  title,
  slug,
  body,
  mainImage,
  publishedAt,
  "categories": coalesce(
    categories[]->{
      _id,
      slug,
      title
    },
    []
  ),
  author->{
    name,
    image
  }
}`)

export const PROJECT_QUERY =
	defineQuery(`*[_type == "project" && slug.current == $slug][0]{
  _id,
  title,
  body,
  mainImage,
  publishedAt,
  "categories": coalesce(
    categories[]->{
      _id,
      slug,
      title
    },
    []
  ),
  author->{
    name,
    image
  }
}`)

export const ARTICLES_QUERY = defineQuery(`
*[_type == "article" && defined(slug.current)]|order(publishedAt desc)[0...12]{
    _id,
    title,
    slug,
    body,
    mainImage,
    publishedAt,
    "categories": coalesce(
        categories[]->{
            _id,
            slug,
            title
        },
    []),
    author->{
        name,
        image
    }
}
`)

export const ARTICLE_QUERY = defineQuery(`
*[_type == "article" && slug.current == $slug][0]{
    _id,
    title,
    body,
    mainImage,
    publishedAt,
    "categories": coalesce(
        categories[]->{
            _id,
            slug,
            title
        },
    []),
    author->{
        name,
        image
    }
}
`)

export const PAGE_QUERY = defineQuery(`
*[_type == "page" && slug.current == $slug][0]{
    ...,
    content[]{
        ...,
        video {
        'url': asset->url,
        },
        url{
            "internalUrl": internalUrl->slug.current,
            manualUrl,
            externalUrl,
            "documentType": internalUrl->_type,
        },
        linkText
    }
}
`)

export const HOME_PAGE_QUERY = defineQuery(`
*[_id == "siteSettings"][0]{
    homePage->{
        ...,
        content[]{
            ...,
            _type == 'hero' => {
                video {
                    'url': asset->url,
                },
                url{
                    "internalUrl": internalUrl->slug.current,
                    manualUrl,
                    externalUrl,
                    "documentType": internalUrl->_type,
                },
                linkText,
            },
            _type == 'featured' => {
                title,
                documents[]->{
                    _id,
                    _type,
                    title,
                    slug,
                    mainImage,
                    "categories": coalesce(
                        categories[]->{
                            _id,
                            slug,
                            title
                        },
                    []),
                    author->{
                        name,
                        image
                    }                    
                }
            }
        }      
    }
}
`)

export const PRIMARYNAVIGATION_QUERY = defineQuery(`
*[_id == "siteSettings"][0]{
    title,
    image,
    primaryNav->{
        navId,
        items[]{
            _key,
            text,
            url{
                "internalUrl": internalUrl->slug.current,
                manualUrl,
                externalUrl,
                "documentType": internalUrl->_type,
            }
        }
    },
}
`)

export const FOOTERNAVIGATION_QUERY = defineQuery(`
    *[_id == "siteSettings"][0]{
        title,
        image,
        footerNav->{
            navId,
            items[]{
                _key,
                text,
                url{
                    "internalUrl": internalUrl->slug.current,
                    manualUrl,
                    externalUrl,
                    "documentType": internalUrl->_type,
                }
            }
        },
    }
    `)
