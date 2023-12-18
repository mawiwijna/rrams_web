export default defineNuxtRouteMiddleware(async (to, from) => {
    const userStore = useUserStore();
    
    //cek apakah sudah login, 
    //jika sudah login, maka redirect ke dashboard    
    if (!!userStore.user){
        return await navigateTo('/dashboard');
    }
});