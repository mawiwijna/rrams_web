export default defineNuxtRouteMiddleware(async (to, from) => {
    const userStore = useUserStore();
    
    userStore.setSidebar1('0010');
    console.log('prepage3 set');
});