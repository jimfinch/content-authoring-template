/**
 * ---------------------------------------------------------------------------------
 * This file has been generated by Sanity TypeGen.
 * Command: `sanity typegen generate`
 *
 * Any modifications made directly to this file will be overwritten the next time
 * the TypeScript definitions are generated. Please make changes to the Sanity
 * schema definitions and/or GROQ queries if you need to update these types.
 *
 * For more information on how to use Sanity TypeGen, visit the official documentation:
 * https://www.sanity.io/docs/sanity-typegen
 * ---------------------------------------------------------------------------------
 */

// Source: schema.json
export type SanityImagePaletteSwatch = {
  _type: "sanity.imagePaletteSwatch";
  background?: string;
  foreground?: string;
  population?: number;
  title?: string;
};

export type SanityImagePalette = {
  _type: "sanity.imagePalette";
  darkMuted?: SanityImagePaletteSwatch;
  lightVibrant?: SanityImagePaletteSwatch;
  darkVibrant?: SanityImagePaletteSwatch;
  vibrant?: SanityImagePaletteSwatch;
  dominant?: SanityImagePaletteSwatch;
  lightMuted?: SanityImagePaletteSwatch;
  muted?: SanityImagePaletteSwatch;
};

export type SanityImageDimensions = {
  _type: "sanity.imageDimensions";
  height?: number;
  width?: number;
  aspectRatio?: number;
};

export type Geopoint = {
  _type: "geopoint";
  lat?: number;
  lng?: number;
  alt?: number;
};

export type Featured = {
  _type: "featured";
  title?: string;
  documents?: Array<{
    _ref: string;
    _type: "reference";
    _weak?: boolean;
    [internalGroqTypeReferenceTo]?: "project";
  } | {
    _ref: string;
    _type: "reference";
    _weak?: boolean;
    [internalGroqTypeReferenceTo]?: "article";
  } | {
    _ref: string;
    _type: "reference";
    _weak?: boolean;
    [internalGroqTypeReferenceTo]?: "page";
  }>;
};

export type NavigationItem = {
  _type: "navigationItem";
  text?: string;
  url?: Link;
};

export type SiteSettings = {
  _id: string;
  _type: "siteSettings";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title?: string;
  description?: string;
  image?: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    alt?: string;
    _type: "image";
  };
  homePage?: {
    _ref: string;
    _type: "reference";
    _weak?: boolean;
    [internalGroqTypeReferenceTo]?: "page";
  };
  primaryNav?: {
    _ref: string;
    _type: "reference";
    _weak?: boolean;
    [internalGroqTypeReferenceTo]?: "navigation";
  };
  footerNav?: {
    _ref: string;
    _type: "reference";
    _weak?: boolean;
    [internalGroqTypeReferenceTo]?: "navigation";
  };
};

export type Navigation = {
  _id: string;
  _type: "navigation";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title?: string;
  navId?: Slug;
  items?: Array<{
    _key: string;
  } & NavigationItem>;
};

export type Statement = {
  _type: "statement";
  text?: string;
};

export type SplitImage = {
  _type: "splitImage";
  orientation?: "imageLeft" | "imageRight";
  title?: string;
  image?: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    alt?: string;
    _type: "image";
  };
};

export type Hero = {
  _type: "hero";
  title?: string;
  text?: Array<{
    children?: Array<{
      marks?: Array<string>;
      text?: string;
      _type: "span";
      _key: string;
    }>;
    style?: "normal" | "h1" | "h2" | "h3" | "h4" | "blockquote";
    listItem?: "bullet";
    markDefs?: Array<{
      href?: string;
      _type: "link";
      _key: string;
    }>;
    level?: number;
    _type: "block";
    _key: string;
  } | {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    alt?: string;
    _type: "image";
    _key: string;
  }>;
  linkText?: string;
  url?: Link;
  image?: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    alt?: string;
    _type: "image";
  };
  video?: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.fileAsset";
    };
    _type: "file";
  };
};

export type Link = {
  _type: "link";
  internalUrl?: {
    _ref: string;
    _type: "reference";
    _weak?: boolean;
    [internalGroqTypeReferenceTo]?: "project";
  } | {
    _ref: string;
    _type: "reference";
    _weak?: boolean;
    [internalGroqTypeReferenceTo]?: "page";
  } | {
    _ref: string;
    _type: "reference";
    _weak?: boolean;
    [internalGroqTypeReferenceTo]?: "article";
  };
  manualUrl?: string;
  externalUrl?: string;
};

export type PageBuilder = Array<{
  _key: string;
} & Hero | {
  _key: string;
} & SplitImage | {
  _key: string;
} & Statement | {
  _key: string;
} & Featured>;

export type Page = {
  _id: string;
  _type: "page";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title?: string;
  slug?: Slug;
  content?: PageBuilder;
  mainImage?: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    _type: "image";
  };
};

export type SanityFileAsset = {
  _id: string;
  _type: "sanity.fileAsset";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  originalFilename?: string;
  label?: string;
  title?: string;
  description?: string;
  altText?: string;
  sha1hash?: string;
  extension?: string;
  mimeType?: string;
  size?: number;
  assetId?: string;
  uploadId?: string;
  path?: string;
  url?: string;
  source?: SanityAssetSourceData;
};

export type Project = {
  _id: string;
  _type: "project";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title?: string;
  slug?: Slug;
  author?: {
    _ref: string;
    _type: "reference";
    _weak?: boolean;
    [internalGroqTypeReferenceTo]?: "author";
  };
  mainImage?: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    alt?: string;
    _type: "image";
  };
  categories?: Array<{
    _ref: string;
    _type: "reference";
    _weak?: boolean;
    _key: string;
    [internalGroqTypeReferenceTo]?: "category";
  }>;
  publishedAt?: string;
  body?: Array<{
    children?: Array<{
      marks?: Array<string>;
      text?: string;
      _type: "span";
      _key: string;
    }>;
    style?: "normal" | "h1" | "h2" | "h3" | "h4" | "blockquote";
    listItem?: "bullet";
    markDefs?: Array<{
      href?: string;
      _type: "link";
      _key: string;
    }>;
    level?: number;
    _type: "block";
    _key: string;
  } | {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    alt?: string;
    _type: "image";
    _key: string;
  }>;
};

export type Article = {
  _id: string;
  _type: "article";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title?: string;
  slug?: Slug;
  author?: {
    _ref: string;
    _type: "reference";
    _weak?: boolean;
    [internalGroqTypeReferenceTo]?: "author";
  };
  mainImage?: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    alt?: string;
    _type: "image";
  };
  categories?: Array<{
    _ref: string;
    _type: "reference";
    _weak?: boolean;
    _key: string;
    [internalGroqTypeReferenceTo]?: "category";
  }>;
  publishedAt?: string;
  body?: Array<{
    children?: Array<{
      marks?: Array<string>;
      text?: string;
      _type: "span";
      _key: string;
    }>;
    style?: "normal" | "h1" | "h2" | "h3" | "h4" | "blockquote";
    listItem?: "bullet";
    markDefs?: Array<{
      href?: string;
      _type: "link";
      _key: string;
    }>;
    level?: number;
    _type: "block";
    _key: string;
  } | {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    alt?: string;
    _type: "image";
    _key: string;
  }>;
};

export type Author = {
  _id: string;
  _type: "author";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  name?: string;
  slug?: Slug;
  image?: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    _type: "image";
  };
  bio?: Array<{
    children?: Array<{
      marks?: Array<string>;
      text?: string;
      _type: "span";
      _key: string;
    }>;
    style?: "normal";
    listItem?: never;
    markDefs?: Array<{
      href?: string;
      _type: "link";
      _key: string;
    }>;
    level?: number;
    _type: "block";
    _key: string;
  }>;
};

export type Category = {
  _id: string;
  _type: "category";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title?: string;
  slug?: Slug;
  description?: string;
};

export type Slug = {
  _type: "slug";
  current?: string;
  source?: string;
};

export type BlockContent = Array<{
  children?: Array<{
    marks?: Array<string>;
    text?: string;
    _type: "span";
    _key: string;
  }>;
  style?: "normal" | "h1" | "h2" | "h3" | "h4" | "blockquote";
  listItem?: "bullet";
  markDefs?: Array<{
    href?: string;
    _type: "link";
    _key: string;
  }>;
  level?: number;
  _type: "block";
  _key: string;
} | {
  asset?: {
    _ref: string;
    _type: "reference";
    _weak?: boolean;
    [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
  };
  hotspot?: SanityImageHotspot;
  crop?: SanityImageCrop;
  alt?: string;
  _type: "image";
  _key: string;
}>;

export type SanityImageCrop = {
  _type: "sanity.imageCrop";
  top?: number;
  bottom?: number;
  left?: number;
  right?: number;
};

export type SanityImageHotspot = {
  _type: "sanity.imageHotspot";
  x?: number;
  y?: number;
  height?: number;
  width?: number;
};

export type SanityImageAsset = {
  _id: string;
  _type: "sanity.imageAsset";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  originalFilename?: string;
  label?: string;
  title?: string;
  description?: string;
  altText?: string;
  sha1hash?: string;
  extension?: string;
  mimeType?: string;
  size?: number;
  assetId?: string;
  uploadId?: string;
  path?: string;
  url?: string;
  metadata?: SanityImageMetadata;
  source?: SanityAssetSourceData;
};

export type SanityAssetSourceData = {
  _type: "sanity.assetSourceData";
  name?: string;
  id?: string;
  url?: string;
};

export type SanityImageMetadata = {
  _type: "sanity.imageMetadata";
  location?: Geopoint;
  dimensions?: SanityImageDimensions;
  palette?: SanityImagePalette;
  lqip?: string;
  blurHash?: string;
  hasAlpha?: boolean;
  isOpaque?: boolean;
};

export type AllSanitySchemaTypes = SanityImagePaletteSwatch | SanityImagePalette | SanityImageDimensions | Geopoint | Featured | NavigationItem | SiteSettings | Navigation | Statement | SplitImage | Hero | Link | PageBuilder | Page | SanityFileAsset | Project | Article | Author | Category | Slug | BlockContent | SanityImageCrop | SanityImageHotspot | SanityImageAsset | SanityAssetSourceData | SanityImageMetadata;
export declare const internalGroqTypeReferenceTo: unique symbol;
// Source: ./src/sanity/lib/queries.ts
// Variable: PROJECTS_QUERY
// Query: *[_type == "project" && defined(slug.current)]|order(publishedAt desc)[0...12]{  _id,  title,  slug,  body,  mainImage,  publishedAt,  "categories": coalesce(    categories[]->{      _id,      slug,      title    },    []  ),  author->{    name,    image  }}
export type PROJECTS_QUERYResult = Array<{
  _id: string;
  title: string | null;
  slug: Slug | null;
  body: Array<{
    children?: Array<{
      marks?: Array<string>;
      text?: string;
      _type: "span";
      _key: string;
    }>;
    style?: "blockquote" | "h1" | "h2" | "h3" | "h4" | "normal";
    listItem?: "bullet";
    markDefs?: Array<{
      href?: string;
      _type: "link";
      _key: string;
    }>;
    level?: number;
    _type: "block";
    _key: string;
  } | {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    alt?: string;
    _type: "image";
    _key: string;
  }> | null;
  mainImage: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    alt?: string;
    _type: "image";
  } | null;
  publishedAt: string | null;
  categories: Array<{
    _id: string;
    slug: Slug | null;
    title: string | null;
  }> | Array<never>;
  author: {
    name: string | null;
    image: {
      asset?: {
        _ref: string;
        _type: "reference";
        _weak?: boolean;
        [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
      };
      hotspot?: SanityImageHotspot;
      crop?: SanityImageCrop;
      _type: "image";
    } | null;
  } | null;
}>;
// Variable: PROJECT_QUERY
// Query: *[_type == "project" && slug.current == $slug][0]{  _id,  title,  body,  mainImage,  publishedAt,  "categories": coalesce(    categories[]->{      _id,      slug,      title    },    []  ),  author->{    name,    image  }}
export type PROJECT_QUERYResult = {
  _id: string;
  title: string | null;
  body: Array<{
    children?: Array<{
      marks?: Array<string>;
      text?: string;
      _type: "span";
      _key: string;
    }>;
    style?: "blockquote" | "h1" | "h2" | "h3" | "h4" | "normal";
    listItem?: "bullet";
    markDefs?: Array<{
      href?: string;
      _type: "link";
      _key: string;
    }>;
    level?: number;
    _type: "block";
    _key: string;
  } | {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    alt?: string;
    _type: "image";
    _key: string;
  }> | null;
  mainImage: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    alt?: string;
    _type: "image";
  } | null;
  publishedAt: string | null;
  categories: Array<{
    _id: string;
    slug: Slug | null;
    title: string | null;
  }> | Array<never>;
  author: {
    name: string | null;
    image: {
      asset?: {
        _ref: string;
        _type: "reference";
        _weak?: boolean;
        [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
      };
      hotspot?: SanityImageHotspot;
      crop?: SanityImageCrop;
      _type: "image";
    } | null;
  } | null;
} | null;
// Variable: ARTICLES_QUERY
// Query: *[_type == "article" && defined(slug.current)]|order(publishedAt desc)[0...12]{    _id,    title,    slug,    body,    mainImage,    publishedAt,    "categories": coalesce(        categories[]->{            _id,            slug,            title        },    []),    author->{        name,        image    }}
export type ARTICLES_QUERYResult = Array<{
  _id: string;
  title: string | null;
  slug: Slug | null;
  body: Array<{
    children?: Array<{
      marks?: Array<string>;
      text?: string;
      _type: "span";
      _key: string;
    }>;
    style?: "blockquote" | "h1" | "h2" | "h3" | "h4" | "normal";
    listItem?: "bullet";
    markDefs?: Array<{
      href?: string;
      _type: "link";
      _key: string;
    }>;
    level?: number;
    _type: "block";
    _key: string;
  } | {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    alt?: string;
    _type: "image";
    _key: string;
  }> | null;
  mainImage: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    alt?: string;
    _type: "image";
  } | null;
  publishedAt: string | null;
  categories: Array<{
    _id: string;
    slug: Slug | null;
    title: string | null;
  }> | Array<never>;
  author: {
    name: string | null;
    image: {
      asset?: {
        _ref: string;
        _type: "reference";
        _weak?: boolean;
        [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
      };
      hotspot?: SanityImageHotspot;
      crop?: SanityImageCrop;
      _type: "image";
    } | null;
  } | null;
}>;
// Variable: ARTICLE_QUERY
// Query: *[_type == "article" && slug.current == $slug][0]{    _id,    title,    body,    mainImage,    publishedAt,    "categories": coalesce(        categories[]->{            _id,            slug,            title        },    []),    author->{        name,        image    }}
export type ARTICLE_QUERYResult = {
  _id: string;
  title: string | null;
  body: Array<{
    children?: Array<{
      marks?: Array<string>;
      text?: string;
      _type: "span";
      _key: string;
    }>;
    style?: "blockquote" | "h1" | "h2" | "h3" | "h4" | "normal";
    listItem?: "bullet";
    markDefs?: Array<{
      href?: string;
      _type: "link";
      _key: string;
    }>;
    level?: number;
    _type: "block";
    _key: string;
  } | {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    alt?: string;
    _type: "image";
    _key: string;
  }> | null;
  mainImage: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    alt?: string;
    _type: "image";
  } | null;
  publishedAt: string | null;
  categories: Array<{
    _id: string;
    slug: Slug | null;
    title: string | null;
  }> | Array<never>;
  author: {
    name: string | null;
    image: {
      asset?: {
        _ref: string;
        _type: "reference";
        _weak?: boolean;
        [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
      };
      hotspot?: SanityImageHotspot;
      crop?: SanityImageCrop;
      _type: "image";
    } | null;
  } | null;
} | null;
// Variable: PAGE_QUERY
// Query: *[_type == "page" && slug.current == $slug][0]{    ...,    content[]{        ...,        video {        'url': asset->url,        },        url{            "internalUrl": internalUrl->slug.current,            manualUrl,            externalUrl,            "documentType": internalUrl->_type,        },        linkText    }}
export type PAGE_QUERYResult = {
  _id: string;
  _type: "page";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title?: string;
  slug?: Slug;
  content: Array<{
    _key: string;
    _type: "featured";
    title?: string;
    documents?: Array<{
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "article";
    } | {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "page";
    } | {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "project";
    }>;
    video: null;
    url: null;
    linkText: null;
  } | {
    _key: string;
    _type: "hero";
    title?: string;
    text?: Array<{
      children?: Array<{
        marks?: Array<string>;
        text?: string;
        _type: "span";
        _key: string;
      }>;
      style?: "blockquote" | "h1" | "h2" | "h3" | "h4" | "normal";
      listItem?: "bullet";
      markDefs?: Array<{
        href?: string;
        _type: "link";
        _key: string;
      }>;
      level?: number;
      _type: "block";
      _key: string;
    } | {
      asset?: {
        _ref: string;
        _type: "reference";
        _weak?: boolean;
        [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
      };
      hotspot?: SanityImageHotspot;
      crop?: SanityImageCrop;
      alt?: string;
      _type: "image";
      _key: string;
    }>;
    linkText: string | null;
    url: {
      internalUrl: string | null;
      manualUrl: string | null;
      externalUrl: string | null;
      documentType: "article" | "page" | "project" | null;
    } | null;
    image?: {
      asset?: {
        _ref: string;
        _type: "reference";
        _weak?: boolean;
        [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
      };
      hotspot?: SanityImageHotspot;
      crop?: SanityImageCrop;
      alt?: string;
      _type: "image";
    };
    video: {
      url: string | null;
    } | null;
  } | {
    _key: string;
    _type: "splitImage";
    orientation?: "imageLeft" | "imageRight";
    title?: string;
    image?: {
      asset?: {
        _ref: string;
        _type: "reference";
        _weak?: boolean;
        [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
      };
      hotspot?: SanityImageHotspot;
      crop?: SanityImageCrop;
      alt?: string;
      _type: "image";
    };
    video: null;
    url: null;
    linkText: null;
  } | {
    _key: string;
    _type: "statement";
    text?: string;
    video: null;
    url: null;
    linkText: null;
  }> | null;
  mainImage?: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    _type: "image";
  };
} | null;
// Variable: HOME_PAGE_QUERY
// Query: *[_id == "siteSettings"][0]{    homePage->{        ...,        content[]{            ...,            _type == 'hero' => {                video {                    'url': asset->url,                },                url{                    "internalUrl": internalUrl->slug.current,                    manualUrl,                    externalUrl,                    "documentType": internalUrl->_type,                },                linkText,            },            _type == 'featured' => {                title,                documents[]->{                    _id,                    _type,                    title,                    slug,                    mainImage,                    "categories": coalesce(                        categories[]->{                            _id,                            slug,                            title                        },                    []),                    author->{                        name,                        image                    }                                    }            }        }          }}
export type HOME_PAGE_QUERYResult = {
  homePage: null;
} | {
  homePage: {
    _id: string;
    _type: "page";
    _createdAt: string;
    _updatedAt: string;
    _rev: string;
    title?: string;
    slug?: Slug;
    content: Array<{
      _key: string;
      _type: "featured";
      title: string | null;
      documents: Array<{
        _id: string;
        _type: "article";
        title: string | null;
        slug: Slug | null;
        mainImage: {
          asset?: {
            _ref: string;
            _type: "reference";
            _weak?: boolean;
            [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
          };
          hotspot?: SanityImageHotspot;
          crop?: SanityImageCrop;
          alt?: string;
          _type: "image";
        } | null;
        categories: Array<{
          _id: string;
          slug: Slug | null;
          title: string | null;
        }> | Array<never>;
        author: {
          name: string | null;
          image: {
            asset?: {
              _ref: string;
              _type: "reference";
              _weak?: boolean;
              [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
            };
            hotspot?: SanityImageHotspot;
            crop?: SanityImageCrop;
            _type: "image";
          } | null;
        } | null;
      } | {
        _id: string;
        _type: "page";
        title: string | null;
        slug: Slug | null;
        mainImage: {
          asset?: {
            _ref: string;
            _type: "reference";
            _weak?: boolean;
            [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
          };
          hotspot?: SanityImageHotspot;
          crop?: SanityImageCrop;
          _type: "image";
        } | null;
        categories: Array<never>;
        author: null;
      } | {
        _id: string;
        _type: "project";
        title: string | null;
        slug: Slug | null;
        mainImage: {
          asset?: {
            _ref: string;
            _type: "reference";
            _weak?: boolean;
            [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
          };
          hotspot?: SanityImageHotspot;
          crop?: SanityImageCrop;
          alt?: string;
          _type: "image";
        } | null;
        categories: Array<{
          _id: string;
          slug: Slug | null;
          title: string | null;
        }> | Array<never>;
        author: {
          name: string | null;
          image: {
            asset?: {
              _ref: string;
              _type: "reference";
              _weak?: boolean;
              [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
            };
            hotspot?: SanityImageHotspot;
            crop?: SanityImageCrop;
            _type: "image";
          } | null;
        } | null;
      }> | null;
    } | {
      _key: string;
      _type: "hero";
      title?: string;
      text?: Array<{
        children?: Array<{
          marks?: Array<string>;
          text?: string;
          _type: "span";
          _key: string;
        }>;
        style?: "blockquote" | "h1" | "h2" | "h3" | "h4" | "normal";
        listItem?: "bullet";
        markDefs?: Array<{
          href?: string;
          _type: "link";
          _key: string;
        }>;
        level?: number;
        _type: "block";
        _key: string;
      } | {
        asset?: {
          _ref: string;
          _type: "reference";
          _weak?: boolean;
          [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
        };
        hotspot?: SanityImageHotspot;
        crop?: SanityImageCrop;
        alt?: string;
        _type: "image";
        _key: string;
      }>;
      linkText: string | null;
      url: {
        internalUrl: string | null;
        manualUrl: string | null;
        externalUrl: string | null;
        documentType: "article" | "page" | "project" | null;
      } | null;
      image?: {
        asset?: {
          _ref: string;
          _type: "reference";
          _weak?: boolean;
          [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
        };
        hotspot?: SanityImageHotspot;
        crop?: SanityImageCrop;
        alt?: string;
        _type: "image";
      };
      video: {
        url: string | null;
      } | null;
    } | {
      _key: string;
      _type: "splitImage";
      orientation?: "imageLeft" | "imageRight";
      title?: string;
      image?: {
        asset?: {
          _ref: string;
          _type: "reference";
          _weak?: boolean;
          [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
        };
        hotspot?: SanityImageHotspot;
        crop?: SanityImageCrop;
        alt?: string;
        _type: "image";
      };
    } | {
      _key: string;
      _type: "statement";
      text?: string;
    }> | null;
    mainImage?: {
      asset?: {
        _ref: string;
        _type: "reference";
        _weak?: boolean;
        [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
      };
      hotspot?: SanityImageHotspot;
      crop?: SanityImageCrop;
      _type: "image";
    };
  } | null;
} | null;
// Variable: PRIMARYNAVIGATION_QUERY
// Query: *[_id == "siteSettings"][0]{    title,    image,    primaryNav->{        navId,        items[]{            _key,            text,            url{                "internalUrl": internalUrl->slug.current,                manualUrl,                externalUrl,                "documentType": internalUrl->_type,            }        }    },}
export type PRIMARYNAVIGATION_QUERYResult = {
  title: string | null;
  image: null;
  primaryNav: null;
} | {
  title: string | null;
  image: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    alt?: string;
    _type: "image";
  } | null;
  primaryNav: {
    navId: Slug | null;
    items: Array<{
      _key: string;
      text: string | null;
      url: {
        internalUrl: string | null;
        manualUrl: string | null;
        externalUrl: string | null;
        documentType: "article" | "page" | "project" | null;
      } | null;
    }> | null;
  } | null;
} | {
  title: null;
  image: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    _type: "image";
  } | null;
  primaryNav: null;
} | null;
// Variable: FOOTERNAVIGATION_QUERY
// Query: *[_id == "siteSettings"][0]{        title,        image,        footerNav->{            navId,            items[]{                _key,                text,                url{                    "internalUrl": internalUrl->slug.current,                    manualUrl,                    externalUrl,                    "documentType": internalUrl->_type,                }            }        },    }
export type FOOTERNAVIGATION_QUERYResult = {
  title: string | null;
  image: null;
  footerNav: null;
} | {
  title: null;
  image: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    _type: "image";
  } | null;
  footerNav: null;
} | {
  title: string | null;
  image: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    alt?: string;
    _type: "image";
  } | null;
  footerNav: {
    navId: Slug | null;
    items: Array<{
      _key: string;
      text: string | null;
      url: {
        internalUrl: string | null;
        manualUrl: string | null;
        externalUrl: string | null;
        documentType: "article" | "page" | "project" | null;
      } | null;
    }> | null;
  } | null;
} | null;

// Query TypeMap
import "@sanity/client";
declare module "@sanity/client" {
  interface SanityQueries {
    "\n*[_type == \"project\" && defined(slug.current)]|order(publishedAt desc)[0...12]{\n  _id,\n  title,\n  slug,\n  body,\n  mainImage,\n  publishedAt,\n  \"categories\": coalesce(\n    categories[]->{\n      _id,\n      slug,\n      title\n    },\n    []\n  ),\n  author->{\n    name,\n    image\n  }\n}\n": PROJECTS_QUERYResult;
    "\n*[_type == \"project\" && slug.current == $slug][0]{\n  _id,\n  title,\n  body,\n  mainImage,\n  publishedAt,\n  \"categories\": coalesce(\n    categories[]->{\n      _id,\n      slug,\n      title\n    },\n    []\n  ),\n  author->{\n    name,\n    image\n  }\n}\n": PROJECT_QUERYResult;
    "\n*[_type == \"article\" && defined(slug.current)]|order(publishedAt desc)[0...12]{\n    _id,\n    title,\n    slug,\n    body,\n    mainImage,\n    publishedAt,\n    \"categories\": coalesce(\n        categories[]->{\n            _id,\n            slug,\n            title\n        },\n    []),\n    author->{\n        name,\n        image\n    }\n}\n": ARTICLES_QUERYResult;
    "\n*[_type == \"article\" && slug.current == $slug][0]{\n    _id,\n    title,\n    body,\n    mainImage,\n    publishedAt,\n    \"categories\": coalesce(\n        categories[]->{\n            _id,\n            slug,\n            title\n        },\n    []),\n    author->{\n        name,\n        image\n    }\n}\n": ARTICLE_QUERYResult;
    "\n*[_type == \"page\" && slug.current == $slug][0]{\n    ...,\n    content[]{\n        ...,\n        video {\n        'url': asset->url,\n        },\n        url{\n            \"internalUrl\": internalUrl->slug.current,\n            manualUrl,\n            externalUrl,\n            \"documentType\": internalUrl->_type,\n        },\n        linkText\n    }\n}\n": PAGE_QUERYResult;
    "\n*[_id == \"siteSettings\"][0]{\n    homePage->{\n        ...,\n        content[]{\n            ...,\n            _type == 'hero' => {\n                video {\n                    'url': asset->url,\n                },\n                url{\n                    \"internalUrl\": internalUrl->slug.current,\n                    manualUrl,\n                    externalUrl,\n                    \"documentType\": internalUrl->_type,\n                },\n                linkText,\n            },\n            _type == 'featured' => {\n                title,\n                documents[]->{\n                    _id,\n                    _type,\n                    title,\n                    slug,\n                    mainImage,\n                    \"categories\": coalesce(\n                        categories[]->{\n                            _id,\n                            slug,\n                            title\n                        },\n                    []),\n                    author->{\n                        name,\n                        image\n                    }                    \n                }\n            }\n        }      \n    }\n}\n": HOME_PAGE_QUERYResult;
    "\n*[_id == \"siteSettings\"][0]{\n    title,\n    image,\n    primaryNav->{\n        navId,\n        items[]{\n            _key,\n            text,\n            url{\n                \"internalUrl\": internalUrl->slug.current,\n                manualUrl,\n                externalUrl,\n                \"documentType\": internalUrl->_type,\n            }\n        }\n    },\n}\n": PRIMARYNAVIGATION_QUERYResult;
    "\n    *[_id == \"siteSettings\"][0]{\n        title,\n        image,\n        footerNav->{\n            navId,\n            items[]{\n                _key,\n                text,\n                url{\n                    \"internalUrl\": internalUrl->slug.current,\n                    manualUrl,\n                    externalUrl,\n                    \"documentType\": internalUrl->_type,\n                }\n            }\n        },\n    }\n    ": FOOTERNAVIGATION_QUERYResult;
  }
}
