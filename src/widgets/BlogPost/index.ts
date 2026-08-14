import { BlogPost as Root } from './BlogPost'
import { BlogPostBody } from './BlogPost.Body'
import { BlogPostTitle } from './BlogPost.Title'

export const BlogPost = Object.assign(Root, {
  Title: BlogPostTitle,
  Body: BlogPostBody,
})

export type { BlogPostProps } from './BlogPost.types'
