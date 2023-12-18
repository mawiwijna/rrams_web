<script lang="ts" setup>
//analisis usulan jalan

definePageMeta({ 
    layout: 'laydashboard',
    middleware: ['authenticated-login-musthave', 'prepage4']
});

const requestOptions = {
    method: 'GET',
    headers: {},
    body: JSON.stringify( {} ),
};

//const { data : prox } = await useFetch('https://fakestoreapi.com/products')
//const { data : prox } = await useFetch('https://api.rrams2023a.my.id/master_kategori_b101', requestOptions)

//const { data : prox } = await useFetch('https://api.rrams2023a.my.id/master_kategori_b101');
//console.log(prox);
//console.log(prox.data);

//const selectedColor = useSelectedColor();
//selectedColor.value = 'yyyy'

</script>

<template>
        
    <div class="p-3 bg-white flex-fill aveo-x1-beranda" >
        
        
        
        
        
            <div class="row">
                <div class="col col-lg-8">
                    
                    <div class="container">
                        <div class="row mb-3">
                            <div class="col">
                                
                                <h1>Beranda</h1>
                                <p class="intro">Selamat datang di beranda RRAMS</p>
                                
                            </div>
                        </div>
                        
                        <!-- <div class="d-flex flex-row mb-3"> -->
                        <div class="row">
                            <div class="col-sm-12 col-lg-6 ">
                            <h2>Repositori RRAMS</h2>
                            </div>
                            <div class="col-sm-12 col-lg-6 aveo-w2-alldata">
                            <p><a href="">Lihat seluruh data</a></p>
                            </div>
                        </div>
                        
                        
                        <div class="container p-0">
                        <div class="row gx-5 aveo-x1-repository">
                        
                        <div class="col">
                        <div class="border rounded-aveo-lg2 bg-info1 d-flex">
                            <div class="me-0 mt-3 p-3">
                                <img class="fi-rs-globe" src="~/assets/ximg1/fi-rs-globe-1.png">
                            </div>
                            <div class="p-3">
                                <h3>Data Spasial</h3>
                                <div class="fs-1">100</div>
                            </div>
                        </div>
                        </div>
                        
                        
                        <div class="col">
                        <div class="border rounded-aveo-lg2 bg-info1 d-flex">
                            <div class="me-0 mt-3 p-3">
                                <img class="fi-rs-globe" src="~/assets/ximg1/fi-rs-globe-1.png">
                            </div>
                            <div class="p-3">
                                <h3>Data Spasial</h3>
                                <div class="fs-1">100</div>
                            </div>
                        </div>
                        </div>
                        
                        </div>
                        </div>
                        
                    </div>
                    
                </div>
                
                <div class="col col-lg-4">
                    <div class="container">
                        
                        <div class="mb-5" id="xx1searchbar">
                            <div class="bg-danger1 p-2 border rounded ms-auto aveo-x1-searchbar2" style="">
                                <img class="img me-3" src="~/assets/ximg1/material-symbols-search.svg">
                                <input type="text" name="pencarian" placeholder="Pencarian"/>
                            </div>
                        </div>
                         
                        <div class="border rounded p-3">
                            <div class="row aveo-x1-listerheader">
                            <div class="col">
                                <h2>Analisis Usulan Jalan Terkini</h2>
                            </div>
                            <div class="col more">
                                <a href="#">Lihat Semua</a>
                            </div>
                            </div>
                            <hr/>
                            
                            <div class="row border rounded m-1 mb-3 aveo-x1-listerkanan">
                                <div class="d-flex flex-row">
                                    <div class="mt-3"><img src="~/assets/ximg1/gambar.svg"></div>
                                    <div class="p-3">
                                    <h3>Pembangunan LRT Bali</h3>
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
                            
                            <div class="row border rounded m-1 aveo-x1-listerkanan">
                                <div class="d-flex flex-row">
                                    <div class="mt-3"><img src="~/assets/ximg1/gambar.svg"></div>
                                    <div class="p-3">
                                    <h3>Pembangunan LRT Bali</h3>
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
                
            </div>
           <!-- -->
            
        
    </div>
    
</template>

<style scoped></style>