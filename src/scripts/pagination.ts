export const pagination = (total: number, page: number, pageSize: number) => {
  const totalPage = Math.ceil(total / pageSize)
  return {
    total,
    totalPage,
    page,
    pageSize,
    hasPrev: page > 1,
    hasNext: page < totalPage,
    start: (page - 1) * pageSize,
    end: Math.min(page * pageSize, total),
    prev: page - 1,
    next: page + 1,
    pages: Array.from({ length: totalPage }, (_, i) => i + 1)
  }
}
