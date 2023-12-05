

export const validateInput = (value, maxLength) => {
    if(!value || typeof value !== 'string' || value.length > maxLength) {
        return false
    }
}