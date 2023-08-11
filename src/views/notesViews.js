const generateJsonSuccess = (id) => {
    return {success:true, id:id}
}
const generateJsonError = (errorText) => {
    return {success: false, error: errorText}
}
module.exports= {generateJsonError, generateJsonSuccess}