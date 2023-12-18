import { defineStore } from 'pinia';

export const useUserStore = defineStore("user", () => {
    const sidebar1 = ref('1000');
    
    const user = ref();
    const token = useCookie('RRAMS2_COOKIEZ', {
        maxAge: 120 * 60
    });

    //-----
    
    const setSidebar1 = (data?: string) => (sidebar1.value = data);
        
    const setToken = (data?: string) => (token.value = data);
    const setUser = (data?: any) => (user.value = data);
    
    const signIn = async (data: Login) => {
        try {
            const vo_getdb1 = await $fetch<User>("https://dummyjson.com/auth/login", {
               method: 'POST', body: data 
            });
            
            setToken(vo_getdb1.token);
            await fetchCustomer();
            
        } catch (error){
            setToken();
            setUser();
            console.log(error);
        }
    };
    
    const fetchCustomer = async () => {
        if (token.value){
            try {
                const vo_getdb1 = await $fetch<Customer>("https://dummyjson.com/user/1", {
                   method: 'GET' 
                });
                
                setUser(vo_getdb1);
                            
            } catch (error){
                setUser();
                console.log(error);
            }
        }
    };
    
    const logout = () => {
        setToken();
        setUser();
    };
    
    return {user, token, sidebar1,  signIn, fetchCustomer, logout, setSidebar1 };
});

