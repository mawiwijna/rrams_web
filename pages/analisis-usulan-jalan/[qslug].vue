<script lang="ts" setup>
//4A analisis usulan jalan

const config = useRuntimeConfig();

definePageMeta({ 
    layout: 'laydashboard',
    middleware: ['authenticated-login-musthave', 'prepage4']
});

useHead({
    title: config.public.website_title_head + ' Analisis Usulan Jalan',
});


const requestOptions = {
    method: 'GET',
    headers: {},
    body: JSON.stringify( {} ),
};

//const { qslug } = useRoute().params
//console.log(qslug)

//const { data : prox } = await useFetch('https://fakestoreapi.com/products')
//const { data : prox } = await useFetch('https://api.rrams2023a.my.id/master_kategori_b101', requestOptions)

//const { data : prox } = await useFetch('https://api.rrams2023a.my.id/master_kategori_b101');
//console.log(prox);
//console.log(prox.data);

//const selectedColor = useSelectedColor();
//selectedColor.value = 'yyyy'

const vt_icon_sidebar1 = ref ( config.public.gurl_utama + '/assets/ximg1/ic-sidebar-a1-t.svg');

const { data: datax1 } = await useFetch('/api/initialloader');

const vt_url_new = ref ( config.public.gurl_utama + '/tulis-usulan/' + datax1.value.endpointedit4d );

</script>

<template>
        
    <div class="p-4 bg-white flex-fill aveo-x1-beranda">
            
        <div class="row mb-3 aveo-x2-breadcrumb">
            <div class="col">
                <img class="img me-2" :src="vt_icon_sidebar1"><img class="chevron-right-filled me-2" src="~/assets/ximg1/chevronrightfilled-1.svg"><a :href="vt_url_new">Analisis Usulan Jalan</a>
            </div>
        </div>
        
        <div class="row mb-3 aveo-x2-judul justify-content-between">
            <div class="col">
                <h1>Analisis Usulan Jalan</h1>
            </div>
            <div class="col text-end">
                <a :href="vt_url_new" class="btn btn-small btn-primary"><i class="bi bi-pencil-square pe-2"></i>Tulis Usulan</a>
            </div>
        </div>
        
        <div class="row mb-5 aveo-x2-kategori">
            <div class="col">
                <div class="chip-cancel me-2">
                <div class="typography"><div class="chip-2">Semua Analisis</div></div>
                <i class="bi bi-x-circle-fill text-white"></i>
                </div>
                
                <div class="chip-normal me-2">
                <div class="typography"><div class="chip-4">Functional Region</div></div>
                </div>
                
                <div class="chip-check me-2">
                <div class="typography"><div class="chip-2">Kriteria Koridor</div></div>
                <i class="bi bi-check-circle-fill text-white"></i>
                </div>
                
            </div>
        </div>
        
        <div class="row mb-3 aveo-x2-searchbar">
            <div class="col">
                <div class="" id="xx1searchbar">
                    <div class="bg-danger1 p-2 border rounded-aveo-lg1 aveo-x1-searchbar3" style="">
                        <img class="img me-3" src="~/assets/ximg1/material-symbols-search.svg">
                        <input type="text" name="pencarian" placeholder="Pencarian"/>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="row gx-3 aveo-x1-repository">
                    
            <div class="col">
                <div class="border rounded-aveo-lg1 m-1 mb-3 aveo-x1-listertengah">
                    <div class="p-3 d-flex flex-row">
                        <div class=""><img class="rounded-aveo-lg1" src=""></div>
                        <div class="p-3 pt-0">
                            <div class="info mb-1">
                            <div class="text-1 me-3">Direktorat Regional I</div>
                            <div class="ellipse me-2"></div>
                            <div class="text-2">17 Oktober 2023</div>
                            </div>
                            
                            <h3><a href="/artikel-usulan-jalan/1">Pembangunan LRT Bali</a></h3>
                            <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Lorem ipsum dolor sit amet. consectetur adipiscing elit, sed do eiusmod temp de genere...</p>
                            
                            <div class="d-flex flex-row">
                                <div class="aveo-w1-tag aveo-w1-tag-1 d-flex  border rounded">
                                    <div class="ellipse mt-1 me-2"></div>
                                    <div class="text">Semua Analisis</div>
                                </div>
                            </div>
                        
                        </div>
                    </div>
                </div>
            </div>
            
            
            <div class="col">
                <div class="border rounded-aveo-lg1 m-1 mb-3 aveo-x1-listertengah">
                    <div class="p-3 d-flex flex-row">
                        <div class=""><img class="rounded-aveo-lg1" src=""></div>
                        <div class="p-3 pt-0">
                            <div class="info mb-1">
                            <div class="text-1 me-3">Direktorat Regional I</div>
                            <div class="ellipse me-2"></div>
                            <div class="text-2">17 Oktober 2023</div>
                            </div>
                            
                            <h3><a href="/artikel-usulan-jalan/2">Pembangunan LRT Sumatera</a></h3>
                            <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Lorem ipsum dolor sit amet. consectetur adipiscing elit, sed do eiusmod temp de genere...</p>
                            
                            <div class="d-flex flex-row">
                                <div class="aveo-w1-tag aveo-w1-tag-1 d-flex  border rounded">
                                    <div class="ellipse mt-1 me-2"></div>
                                    <div class="text">Semua Analisis</div>
                                </div>
                            </div>
                        
                        </div>
                    </div>
                </div>
            </div>
        
        </div>
        
        
        
    </div>
    
</template>

<style scoped></style>