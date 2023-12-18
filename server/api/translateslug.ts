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
    
    const { type, name } = getQuery(event);
    var vt_hasil = 'X'
    
    if (type == 'x4b'){
        //var vt_dec1 = dec100(name).split('#')
        return { hasil: dec100(name).split('#'), origin: name, origim: type }
    } else {
        return { hasil: 'X' }
    }
        
    //return { sukses: SHA256.hash(name).toString() }
    //return { message: 'shina', 'end4': enc1('name')    }
    //return { message: 'shina', hasil: enc100(name)    }
   // return { message: 'shina', hasil: enc100(name), hasil2: dec100(kata1.replace('XENON', '')) }
    //return { hasil: vt_hasil }
})