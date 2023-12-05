<script lang="ts" setup></script>
<template>
  <div>
    
    <div class="container-fluid">
    <div class="d-flex">
        <div class=" col-auto col-md-2 min-vh-100 aveo-v1-sidebar1" id="sidebar">
            <!-- <div class="min-vh-100 bg-white p-2"> -->
                
                <div style="">
                    <div class="d-flex flex-row aveo-v1-logo1">
                        <img class="group logo" src="~/assets/ximg1/group-288-1.png">
                        <a class="d-flex text-decoration-none align-items-center">
                            <span class="fs-3 text1 aveo-x1">RRAMS</span>
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
                    <li class="nav-item  "><a href="#" class="nav-link active"><img class="img" src="~/assets/ximg1/frame.svg"><span class="aveo-x1">Beranda</span></a></li>
                    <li class="nav-item  "><a href="#" class="nav-link active"><img class="img" src="~/assets/ximg1/frame-1.svg"><span class="aveo-x1">Repositori</span></a></li>
                    <li class="nav-item  "><a href="#" class="nav-link active"><img class="img" src="~/assets/ximg1/frame-2.svg"><span class="aveo-x1">Peta Usulan Jalan</span></a></li>
                    <li class="nav-item  "><a href="#" class="nav-link active"><img class="img" src="~/assets/ximg1/frame-3.svg"><span class="aveo-x1">Analisis Usulan Jalan</span></a></li>
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
        <li><a href="#t2">Log Out</a></li>
      </ul>
    </div>
    
    </div>
    
    
  </div>
</template>
<style scoped></style>