export const requaredInput = (values) => {
    if(values) return undefined
    return 'Поле не может быть пустым'
}

export const maxLength = (int) => (values) => {
    if(values.length < int) return undefined
    return `max ${int} symbols`
}