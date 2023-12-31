//Errors
export const errorMessage = (error) => {
    let message;
    if (error instanceof Error) {
        message = error.message
    } else if (error && typeof error === 'object' && "message" in error) {
        message = error.message;
    } else if ( typeof error === 'string') {
        message = error;
    } else {
        message = 'Something went wrong';
    }
    return message;
}
