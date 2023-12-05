export const useRupa = () => {
    
    const fhxLog1 = (inKata) => console.log(inKata)
    
    const fhxBase64Encode = (inFile) => {
        var fs = require('fs')
        
        var bitmap = fs.readFileSync(inFile)
        return new Buffer(bitmap).toString('base64')
    }
    
    // -------------------------
    // -------------------------
    
    return {
        fhxLog1, fhxBase64Encode
    }
}