export default defineNuxtRouteMiddleware(async (to, from) => {
    const userStore = useUserStore();
    
    userStore.setSidebar1('0001');
    console.log('prepage4 set');
});