import { defineQuery } from "next-sanity"

export const PROJECTS_QUERY =
	defineQuery(`*[_type == "project" && defined(slug.current)][0...12]{
    _id, title, slug
}`)

export const PROJECT_QUERY =
	defineQuery(`*[_type == "project" && slug.current == $slug][0]{
    title, body, mainImage
}`)

export const ARTICLES_QUERY =
	defineQuery(`*[_type == "article" && defined(slug.current)][0...12]{
_id, title, slug
}`)

export const ARTICLE_QUERY =
	defineQuery(`*[_type == "article" && slug.current == $slug][0]{
title, body, mainImage
}`)
