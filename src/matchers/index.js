const createMatcher = regex => string => string.match(regex)

export const isEmail = createMatcher(/email/i)
export const isId = createMatcher(/id/i)
export const isName = createMatcher(/name/i)
export const isPlural = createMatcher(/.*s$/)
