import { enc100, dec100 } from './enkripsip2.ts';

export default defineEventHandler (async (event) => {
    
    //const { name } = getQuery(event)
    //const { age } = await useBody(event) -> async
    //const { data } = await $fetch('http://api.net/id/1') -> async
    //const { code } = event.context.params
    //const { gurl_api } = useRuntimeConfig()
    //const { qslug } = useRoute().params -> on pages
    //return { 'message': 'hello ${name}' }
    
    //return { message: 'shina', hasil: enc100(name), hasil2: dec100(kata1.replace('XENON', '')) }
    return { endpoint4: enc100('1#1'), endpointedit4d: enc100('X#NEW#X') }
})