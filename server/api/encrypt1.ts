import { enc100, dec100 } from './enkripsip2.ts';

export default defineEventHandler ((event) => {
    
    //const { name } = useQuery(event)
    //const { age } = await useBody(event) -> async
    //const { data } = await $fetch('http://api.net/id/1') -> async
    //const { code } = event.context.params
    //const { gurl_api } = useRuntimeConfig()
    //const { qslug } = useRoute().params -> on pages
    //return { 'message': 'hello ${name}' }
    
    //const userStore = useUserStore();
    
    //userStore.logout();
    
    //const { name } = useQuery(event);
    
    //import {SHA256} from "jscrypto/es6/SHA256";
    //const jas = SHA256.hash('name').toString();
    
    const { name } = getQuery(event);
    var kata1 = "293064187022191134XENON";
    
    //MAT = [3 7 ; 2 1]
    /*
    const enc1 = (inPlaintext) => {
        var v_tabel = '7LjCtFH3A25iZlcoEw;USO_nQV9WMzmerTRDhI8vJXdyfbkqYxaPGK0B#pNg6u4s1!';
        if (inPlaintext.length % 2 !== 0) { inPlaintext += '!'; }
        var v_row = [];
        var v_hasil = '';
        for (var v_cacah1 = 0; v_cacah1 < inPlaintext.length; v_cacah1++) {
            v_row.push(v_tabel.indexOf(inPlaintext.charAt(v_cacah1)));
        }
        for (var v_cacah2 = 0; v_cacah2 < v_row.length / 2; v_cacah2++) {
            v_hasil += ('000' + (v_row[2 * v_cacah2] * 3 + v_row[2 * v_cacah2 + 1] * 2)).slice(-3);
            v_hasil += ('000' + (v_row[2 * v_cacah2] * 7 + v_row[2 * v_cacah2 + 1] * 1)).slice(-3).split('').reverse().join('');
        }
        return v_hasil;
    }
    */
    
    //return { sukses: SHA256.hash(name).toString() }
    //return { message: 'shina', 'end4': enc1('name')    }
    //return { message: 'shina', hasil: enc100(name)    }
   // return { message: 'shina', hasil: enc100(name), hasil2: dec100(kata1.replace('XENON', '')) }
    return { message: 'shina' }
})