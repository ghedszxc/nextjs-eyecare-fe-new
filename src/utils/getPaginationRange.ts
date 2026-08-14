const DOTS = '...' as const

const range = (start: number, end: number) =>
  Array.from({ length: end - start + 1 }, (_, i) => start + i)

export const getPaginationRange = (
  totalPages: number,
  currentPage: number,
  siblingCount = 1,
  boundaryCount = 1
): (number | typeof DOTS)[] => {
  const totalPageNumbers = siblingCount * 2 + boundaryCount * 2 + 3 // +3 = current + 2 dots

  if (totalPageNumbers >= totalPages) {
    return range(1, totalPages)
  }

  const leftSiblingIndex = Math.max(currentPage - siblingCount, boundaryCount + 1)
  const rightSiblingIndex = Math.min(currentPage + siblingCount, totalPages - boundaryCount)

  const showLeftDots = leftSiblingIndex > boundaryCount + 2
  const showRightDots = rightSiblingIndex < totalPages - boundaryCount - 1

  const firstPages = range(1, boundaryCount)
  const lastPages = range(totalPages - boundaryCount + 1, totalPages)

  if (!showLeftDots && showRightDots) {
    const leftRange = range(1, boundaryCount + siblingCount * 2 + 2)
    return [...leftRange, DOTS, ...lastPages]
  }

  if (showLeftDots && !showRightDots) {
    const rightRange = range(totalPages - (boundaryCount + siblingCount * 2 + 1), totalPages)
    return [...firstPages, DOTS, ...rightRange]
  }

  return [...firstPages, DOTS, ...range(leftSiblingIndex, rightSiblingIndex), DOTS, ...lastPages]
}
