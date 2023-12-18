export default defineNuxtRouteMiddleware(async (to, from) => {
    const userStore = useUserStore();
    
    userStore.setSidebar1('0100');
    console.log('prepage2 set');
});