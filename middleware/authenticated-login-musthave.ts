export default defineNuxtRouteMiddleware(async (to, from) => {
    const userStore = useUserStore();
    
    //cek apakah sudah login, 
    //jika belum login, maka redirect ke index    
    if (!userStore.user){
        return await navigateTo('/');
    }
});