
export const requaredInput = (values) => {
    if(values) return undefined
    return 'Add post'
}

export const maxLength = (int) => (values) => {
    if(values.length < int) return undefined
    return `max ${int} symbols`
}