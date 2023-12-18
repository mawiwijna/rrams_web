<script setup>
definePageMeta({ 
    middleware: ['authenticated-login-musthave']
});

const requestOptions = {
    method: 'GET',
    headers: {},
    body: JSON.stringify( {} ),
}

//const { data : prox } = await useFetch('https://fakestoreapi.com/products')
//const { data : prox } = await useFetch('https://api.rrams2023a.my.id/master_kategori_b101', requestOptions)

//const { data : prox } = await useFetch('https://api.rrams2023a.my.id/master_kategori_b101')
//console.log(prox)
//console.log(prox.data)

const { data } = await useFetch('/api/logout');
//await navigateTo('/');
//useRouter().go(0);

const userStore = useUserStore();
userStore.logout();
useRouter().go(0);

</script>

<template></template>

<style scoped></style>