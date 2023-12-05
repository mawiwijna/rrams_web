<script setup lang="ts">
definePageMeta({ layout: 'laydashboard' });

const { data : prox, error } = await useFetch('https://api.rrams2023a.my.id/get_upload_list_umum_101', {'method': 'POST'});

</script>

<template>
<nuxt-layout name="laylogin">
    
    <div class="border rounded-aveo-lg2 row p-0 gx-2 aveo-x3-tabelfile">
    <!-- <div class="container-fluid"> -->
        <div class="row p-3">
            <h2 class="col-lg-5">Terakhir Diunggah</h2>
            <div class="mb-5 col-lg-5" id="xx1searchbar">
                <div class="bg-danger1 p-2 border rounded ms-auto aveo-x1-searchbar2" style="">
                    <img class="img me-3" src="~/assets/ximg1/material-symbols-search.svg">
                    <input type="text" name="pencarian" placeholder="Pencarian"/>
                </div>
            </div>
            
            <div class="p-0 text-end col-lg-2">
            <div class="dropdown">
            <a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
            Saring
            </a>

            <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
            </div>
            </div>
            
        </div>
        <div class="table-responsive p-0">
        
        <table class="table">
        <thead>
        <tr>
        <th scope="col">#</th>
        <th scope="col">Nama Dokumen</th>
        <th scope="col">Ukuran</th>
        <th scope="col">Tanggal Terunggah</th>
        <th scope="col">Format</th>
        <th scope="col"></th>
        </tr>
        </thead>
        <tbody>
        
        <tr v-for="p in prox">
        <td scope="row">1.</td>
        <td>
        <div class="d-flex flex-row">
            <div class="me-2">
            <img class="fi-rs-globe" src="~/assets/ximg1/fi-rs-globe-1.png">
            </div>
            <div>
                {{ p.qc01filename }}<br/>{{ p.qc01filesize }}
            </div>
            
        </div>
        </td>
        <td>{{ p.qc01filesize }}</td>
        <td>{{ p.qc01timestampcreated }}</td>
        <td>{{ p.qc01filetype }}</td>
        <td><i class="bi bi-three-dots-vertical"></i></td>
        </tr>
        
        <tr>
        <td scope="row">1.</td>
        <td>
        <div class="d-flex flex-row">
            <div class="me-2">
            <img class="fi-rs-globe" src="~/assets/ximg1/fi-rs-globe-1.png">
            </div>
            <div>
                Surat-surat daerah.pdf<br/>200 KB
            </div>
            
        </div>
        </td>
        <td>200 KB</td>
        <td>Jan 4, 2022</td>
        <td>PDF</td>
        <td><i class="bi bi-three-dots-vertical"></i></td>
        </tr>
        
        </tbody>
        </table>
        
        </div>
    <!-- </div> -->
</div>
    
</nuxt-layout>
</template>

<style scoped></style>