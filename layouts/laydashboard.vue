<script setup>
const { fhxSidebarActiveClass, funShinaEncrypt3B64 } = useRupa();

const config = useRuntimeConfig();
//console.log(config.public.gurl_utama);

const availableColor = useAvailableColor();
const selectedColor = useSelectedColor();
const vr_state_sidebar_active = useSidebarActive1();

//console.log(userStore.sidebar1.substring(3,4)); 

const vclass1 = ' red ';
//const vr_state_sidebar_active2 = vr_state_sidebar_active.value;
//console.log(vr_state_sidebar_active2)

const userStore = useUserStore();
//console.log(userStore.sidebar1);
//console.log(userStore.sidebar1.substring(0,1));

const isActive1 = ref( (userStore.sidebar1.substring(0,1) === '1') ? true : false  );
const isActive2 = ref( (userStore.sidebar1.substring(1,2) === '1') ? true : false  );
const isActive3 = ref( (userStore.sidebar1.substring(2,3) === '1') ? true : false  );
const isActive4 = ref( (userStore.sidebar1.substring(3,4) === '1') ? true : false  );
console.log('%c SIDEBAR ACTIVE = %s, %s, %s, %s', 'color:lime;background:black;', isActive1.value, isActive2.value, isActive3.value, isActive4.value);

var vr_sidebar_active_class = fhxSidebarActiveClass(vr_state_sidebar_active.value);
//console.log(vr_state_sidebar_active2)

const vt_icon_sidebar1 = ref ( config.public.gurl_utama + '/assets/ximg1/ic-sidebar-a1-' + (isActive1.value ? 'y' : 't') + '.svg');
const vt_icon_sidebar2 = ref ( config.public.gurl_utama + '/assets/ximg1/ic-sidebar-a2-' + (isActive2.value ? 'y' : 't') + '.svg');
const vt_icon_sidebar3 = ref ( config.public.gurl_utama + '/assets/ximg1/ic-sidebar-a3-' + (isActive3.value ? 'y' : 't') + '.svg');
const vt_icon_sidebar4 = ref ( config.public.gurl_utama + '/assets/ximg1/ic-sidebar-a4-' + (isActive4.value ? 'y' : 't') + '.svg');

const { data: datax1 } = await useFetch('/api/initialloader');
//console.log(datax1);
//console.log(datax1.value.endpoint4);

const vt_url_sidebar1 = ref ( config.public.gurl_utama + '/dashboard');
const vt_url_sidebar2 = ref ( config.public.gurl_utama + '/repository/' + datax1.value.endpoint4 );
const vt_url_sidebar3 = ref ( config.public.gurl_utama + '/peta-usulan-jalan/' + datax1.value.endpoint4 );
const vt_url_sidebar4 = ref ( config.public.gurl_utama + '/analisis-usulan-jalan/' + datax1.value.endpoint4 );

//const vt_icon_sidebar4 = ref ( config.public.gurl_utama + '/assets/ximg1/frame-3.svg');

//const { enc_result } = await useFetch('/api/initialloader');
//const { data: datax } = await useFetch('/api/encrypt1?name=pungut');

</script>


<template>
  <div>
        <!--
        <div class="omega" :class="selectedColor">
        sel: {{ selectedColor }}
        </div>
        
        <ul>
        <li v-for="color in availableColor" :key="color">{{ color }}</li>
        </ul>
        -->
    
    <div class="container-fluid">
    <div class="d-flex">
        <div class=" col-auto col-md-2 min-vh-100 aveo-v1-sidebar1" id="sidebar">
            <!-- <div class="min-vh-100 bg-white p-2"> -->
                
                <div style="">
                    <div class="d-flex flex-row aveo-v1-logo1">
                        <img class="group logo" src="~/assets/ximg1/group-288-1.png">
                        <a class="d-flex text-decoration-none align-items-center">
                            <span class="text1 aveo-x1">RRAMS</span>
                        </a> 
                        <button type="button" id="x2sidebarCollapse" class="ms-auto align-self-center border" style="">
                        <i class="bi bi-arrows-expand-vertical"></i>
                        </button>
                    </div>
                    
                    <hr/>
                    
                    <div class="aveo-c1-button-expand2">
                    <button type="button" id="x2sidebarExpand" class="ms-auto align-self-center border">
                    <i class="bi bi-arrows-expand-vertical"></i>
                    </button>
                    </div>
                    
                    <ul class="nav flex-column aveo-v1-list">
                        <li class="nav-item" :class="{active: isActive1 }">
                            <a :href="vt_url_sidebar1" class="nav-link" :class="{active: isActive1 }">
                            <img class="img" :src="vt_icon_sidebar1" ><span class="aveo-x1">Beranda</span>
                            </a>
                        </li>
                        <li class="nav-item" :class="{active: isActive2 }">
                            <a :href="vt_url_sidebar2" class="nav-link" :class="{active: isActive2 }">
                            <img class="img" :src="vt_icon_sidebar2" ><span class="aveo-x1">Repositori</span>
                            </a>
                        </li>
                        
                        <li class="nav-item" :class="{active: isActive3 }">
                            <a :href="vt_url_sidebar3" class="nav-link" :class="{active: isActive3 }">
                            <img class="img" :src="vt_icon_sidebar3" ><span class="aveo-x1">Peta Usulan Jalan</span>
                            </a>
                        </li>
                    
                        <li class="nav-item" :class="{active: isActive4 }">
                            <a :href="vt_url_sidebar4" class="nav-link" :class="{active: isActive4 }">
                            <img class="img" :src="vt_icon_sidebar4" ><span class="aveo-x1">Analisis Usulan Jalan</span>
                            </a>
                        </li>
                    
                    </ul>
                </div>
                
                <div class="aveo-y1">
                
                    <div class="aveo-v1-help p-3 aveo-x1">
                        <div class="d-flex flex-row top mb-2">
                            <img class="mdi-faq me-3" src="~/assets/ximg1/mdi-faq.svg" />
                            <div class="fs-5">Butuh Bantuan?</div>
                            <img class="ms-auto align-self-center material-symbols" src="~/assets/ximg1/material-symbols-close.svg" />
                        </div>
                        <div class="bottom">
                        <p class="jika-ada-pertanyaan">
                            <span class="span">Jika ada pertanyaan, silahkan lihat FAQ yang ada di </span>
                            <span class="text-wrapper-6">halaman ini</span>
                        </p>
                        </div>
                    </div>
                    <hr/>
                    
                    <div class="d-flex flex-row aveo-v1-user">
                        <div class="d-flex frame-3">
                            <div class="frame-4 mt-2 me-3"></div>
                            <div class="frame-5 aveo-x1">
                                <div class="fs-5">Nama User</div>
                                <div class="fs-7">Role User</div>
                            </div>
                        </div>
                        <div class="ms-auto align-self-center">
                        <span class="context-menu" data-container-id="context-menu-items"></span>
                        </div>
                        <!--
                        <img class="img ms-auto align-self-center" src="img/iconamoon-menu-kebab-vertical-bold.svg" />
                        -->
                    </div>
                
                </div>
        </div>
        
    <slot />
    
    </div>
    
    <div class="context-menu-container" id="context-menu-items">
      <ul>
        <li><a href="#t1">Properties</a></li>
        <li><NuxtLink to="/process/logout">Log Out</NuxtLink></li>
      </ul>
    </div>
    
    </div>
    
    
  </div>
</template>
<style scoped></style>