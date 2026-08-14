import { BlogPostContent as Root } from './BlogPostContent'
import { BlogPostContentBody } from './BlogPostContent.Body'

export const BlogPostContent = Object.assign(Root, {
  Body: BlogPostContentBody,
})
export type { BlogPostContentProps } from './BlogPostContent.types'
