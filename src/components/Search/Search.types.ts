import type { ICta } from '@customTypes/ICta'

export interface SearchProps {
  placeholder?: string
  /** Optional CTA. When it has a `url`, submitting navigates to `${url}?q=<query>`. */
  searchCta?: ICta
  /** Called with the trimmed query when the search is submitted. */
  onSearch?: (query: string) => void
  /**
   * `pill` renders the persistent pill style; `expandable` (default) renders an
   * icon button that expands into the input on click.
   */
  variant?: 'expandable' | 'pill'
  className?: string
}
