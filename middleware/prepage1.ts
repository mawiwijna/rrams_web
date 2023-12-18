export default defineNuxtRouteMiddleware(async (to, from) => {
    const userStore = useUserStore();
    
    userStore.setSidebar1('1000');
    console.log('prepage1 set');
});