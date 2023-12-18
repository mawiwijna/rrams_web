export const useRupa = () => {
    
    const fhxLog1 = (inKata) => console.log(inKata)
    
    const fhxBase64Encode = (inFile) => {
        var fs = require('fs')
        
        var bitmap = fs.readFileSync(inFile)
        return new Buffer(bitmap).toString('base64')
    }
    
    const fhxSidebarActiveClass = (inArray) => {
        //inArray = [true, false, false, false]
        var vr_hasil = ['', '', '', ''];
        for (let vi_cacah = 0; vi_cacah < vr_hasil.length; vi_cacah++){
            vr_hasil[vi_cacah] = (inArray[vi_cacah]) ? ' active ' : ' ';
        }
        
        return vr_hasil;
    }
    
    
    
    const funShinaEncrypt3 = (inData) => {
        const Blowfish = require('egoroof-blowfish');
        const bf = new Blowfish('sH1n4_gUk6uK_kUc1NG', Blowfish.MODE.ECB, Blowfish.PADDING.NULL);
        bf.setIv('efghabcd');

        return bf.encode(inData);
    }
    
    const funShinaEncryptFormat1 = (inAcakKata) => {
        //format Blowfish encryption output
        var vt_hasil = '';

        for (let i = 0; i < inAcakKata.length; i++){
            vt_hasil += inAcakKata[i] + 371;
        }

        return vt_hasil;
    }
    
    const funShinaEncrypt2 = (inData) => {
        let coba = inData + "#X-END";
        let buff = new Buffer(coba);
        let hasil = buff.toString('base64');

        hasil = hasil.replace(/=/g, "_XS1_");
        hasil = hasil.replace(/\+/g, "_XS2_");
        hasil = hasil.replace(/\//g, "_XS3_");
        hasil = hasil.replace(/\-/g, "_XS4_");

        return hasil;
    }
    
    const funShinaEncrypt3A64 = (inData) => {
        let vt_hasil1 = funShinaEncrypt3(inData)
        let vt_hasil2 = funShinaEncryptFormat1(vt_hasil1)
        return funShinaEncrypt2(vt_hasil2)
    }
    
    const funShinaEncrypt3B64 = (inData) => {
        
        // const Cryptr = require('cryptr');
        // const cryptr = new Cryptr('myTotallySecretKey');

        // if (inMode == 'd'){
            // const decryptedString = cryptr.decrypt(inData);
            // return decryptedString;
        // } else {
            // const encryptedString = cryptr.encrypt(inData);
            // return encryptedString;
        // }
        
        //import { resolve } from "path"
        //return AES.encrypt(inData, "secret phrase").toString();
    }
    

    
    // -------------------------
    // -------------------------
    
    return {
        fhxLog1, fhxBase64Encode, fhxSidebarActiveClass,
        funShinaEncrypt3A64, funShinaEncrypt3B64
    }
}