import { defineQuery } from "next-sanity"

export const PROJECTS_QUERY = defineQuery(`
*[_type == "projects" && defined(slug.current)]|order(publishedAt desc)[0...12]{
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
        },[]
    ),
    author->{
        name,
        image
    },
}
`)

export const PROJECT_QUERY = defineQuery(`
*[_type == "projects" && slug.current == $slug][0]{
    _id,
    title,
    seoTitle,
    seoDescription,
    body,
    mainImage,
    publishedAt,
    "categories": coalesce(
        categories[]->{
            _id,
            slug,
            title
        },[]
    ),
    author->{
        name,
        image
    },
    relatedProjects[]{
    _key, // required for drag and drop
        ...@->{_id, title, slug} // get fields from the referenced post
    }
}
`)

export const ARTICLES_QUERY = defineQuery(`
*[_type == "articles" && defined(slug.current)]|order(publishedAt desc)[0...12]{
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
        },[]
    ),
    author->{
        name,
        image
    }
}
`)

export const ARTICLE_QUERY = defineQuery(`
*[_type == "articles" && slug.current == $slug][0]{
    _id,
    title,
    seoTitle,
    seoDescription,
    body,
    mainImage,
    publishedAt,
    "categories": coalesce(
        categories[]->{
            _id,
            slug,
            title
        },[]
    ),
    author->{
        name,
        image
    },
    relatedArticles[]{
    _key, // required for drag and drop
        ...@->{_id, title, slug} // get fields from the referenced post
    }
}
`)

export const PAGE_QUERY = defineQuery(`
*[_type == "pages" && slug.current == $slug][0]{
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
                    },
                    publishedAt
                }
            }
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
                    },
                    publishedAt
                }
            }
        }      
    }
}
`)

export const PRIMARYNAVIGATION_QUERY = defineQuery(`*[_id == "siteSettings"][0]{
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

export const CATEGORY_QUERY = defineQuery(`
  *[_type == "category" && slug.current == $slug][0] {
    _id,
    title,
    "articles": *[_type == "articles" && references(^._id)] {
      _id,
      title,
      slug,
      mainImage,
      publishedAt,
      author->,
      categories[]->
    },
    "projects": *[_type == "projects" && references(^._id)] {
      _id,
      title,
      slug,
      mainImage,
      categories[]->
    }
  }
`)
