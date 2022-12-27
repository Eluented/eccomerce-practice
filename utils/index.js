export const DetectLink = (str) => {
    if (typeof str === 'string') {
        var urlRegex = /(((https?:\/\/)|(www\.))[^\s]+)/g;
        return str.match(urlRegex)
    }
    console.error("This is not String");
}