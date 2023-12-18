<script setup lang="ts">
//4B tulis usulan jalan

const config = useRuntimeConfig();

definePageMeta({ 
    layout: 'laydashboard',
    middleware: ['authenticated-login-musthave', 'prepage4'],
    
});

useHead({
    title: config.public.website_title_head + ' Terbitkan Baru Usulan Jalan',
    script: [
        { 'type': 'text/javascript', 'src': '/assets/xjs1/rrams-4b.js' },
        //{ 'type': 'text/javascript', 'src': '/node_modules/@ckeditor/ckeditor5-build-classic/build/ckeditor.js' },
        //{ 'type': 'text/javascript', 'src': '/node_modules/@ckeditor/ckeditor5-vue/dist/ckeditor.js' },
    ]
});

import { useEditor, EditorContent } from '@tiptap/vue-3'
import StarterKit from '@tiptap/starter-kit'

const editor = useEditor({
  editorProps: {
    attributes: {
        class: 'border p-4 height-tiptap'
    },
  },
  content: '<p>I’m running Tiptap with Vue.js. 🎉</p>',
  extensions: [
    StarterKit,
  ],
})

const { qslug } = useRoute().params
//console.log(qslug)
const { data: datax2 } = await useFetch('/api/translateslug?type=x4b&name=' + qslug);
//console.log(datax2);

const vt_title = 'Terbitkan Baru Usulan Jalan';
const vt_button_1_teks = 'Terbitkan';

const vt_icon_sidebar1 = ref ( config.public.gurl_utama + '/assets/ximg1/ic-sidebar-a1-t.svg');

const { data: datax1 } = await useFetch('/api/initialloader');

const vt_url_new = ref ( config.public.gurl_utama + '/tulis-usulan/' + datax1.value.endpointedit4d );

const vt_icon_pelengkap1 = ref ( config.public.gurl_utama + '/assets/ximg1/ic-lengkapanalisis-a1-t.svg');
const vt_icon_pelengkap2 = ref ( config.public.gurl_utama + '/assets/ximg1/ic-lengkapanalisis-a2-t.svg');
const vt_icon_pelengkap3 = ref ( config.public.gurl_utama + '/assets/ximg1/ic-lengkapanalisis-a3-t.svg');
const vt_icon_pelengkap4 = ref ( config.public.gurl_utama + '/assets/ximg1/ic-lengkapanalisis-a4-t.svg');
const vt_icon_pelengkap5 = ref ( config.public.gurl_utama + '/assets/ximg1/ic-lengkapanalisis-a5-t.svg');
const vt_icon_pelengkap6 = ref ( config.public.gurl_utama + '/assets/ximg1/ic-lengkapanalisis-a6-t.svg');
const vt_icon_pelengkap7 = ref ( config.public.gurl_utama + '/assets/ximg1/ic-lengkapanalisis-a7-t.svg');


const signIn = async () => {

};

</script>

<template>
        
    <div class="p-4 bg-white flex-fill aveo-x1-beranda">



<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <!--
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      -->
      <div class="modal-body">
        Data berhasil disimpan.
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-light" data-bs-dismiss="modal">Tutup</button>
      </div>
    </div>
  </div>
</div>


        <div class="row mb-3 aveo-x2-breadcrumb">
            <div class="col">
                <img class="img me-2" :src="vt_icon_sidebar1"><img class="chevron-right-filled me-2" src="~/assets/ximg1/chevronrightfilled-1.svg"><a :href="vt_url_new">Analisis Usulan Jalan</a><img class="chevron-right-filled me-2" src="~/assets/ximg1/chevronrightfilled-1.svg"><a :href="vt_url_new">{{ vt_title }}</a>
            </div>
        </div>
        
        <div class="row mb-3 aveo-x2-judul justify-content-between">
            <div class="col">
                <h1>{{ vt_title }}</h1>
            </div>
            <div class="col text-end">
                <a href="#" class="btn btn-small btn-secondary me-2" data-bs-toggle="offcanvas" data-bs-target="#offcanvaslengkapExample" role="button"><i class="bi bi-plus-circle pe-2"></i>Pelengkap Analisis</a>
                <a :href="vt_url_new" class="btn btn-small btn-primary"><i class="bi bi-check-circle pe-2"></i>{{ vt_button_1_teks }}</a>
            </div>
        </div>
        
        <div class="row gx-3 aveo-x1-areaa">
            
            <form @submit.prevent="signIn">
                <div class="mb-3">
                    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="judul" placeholder="judul artikel" />
                </div>
                
                <div class="mb-3">
                     <EditorContent :editor="editor" />
                </div>
                
                <!--
                <div class="mb-3 form-check">
                    <input type="checkbox" class="form-check-input" id="exampleCheck1">
                    <label class="form-check-label" for="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
                -->
                
            </form>
        </div>
        
    </div>
    
    <div class="offcanvas offcanvas-end aveo-offcanvas-a-entire" tabindex="-1" id="offcanvaslengkapExample" aria-labelledby="offcanvasExampleLabel">
        
        <div id="themenuawal" class="">
            <div class="offcanvas-header">
                <div class="offcanvas-title">
                    <div class="d-flex flex-row">
                        <div class="p-2"><div class="aveo-offcanvas-a-icon1"><img class="" :src="vt_icon_pelengkap1"/></div></div>
                        <div class="p-2 aveo-offcanvas-a-topdesc"><span>Pelengkapan Analisis</span><span>Lengkapkan dokumen dalam setiap analisis</span></div>
                    </div>
                </div>
                <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <hr/>
            
            <div class="offcanvas-body aveo-offcanvas-a-area2">
            
                 <div class="d-flex flex-column mb-3" id="themenua">
                    
                    <div class="card mb-2">
                        <div class="card-body">
                            <a href="#" id="carda1">
                                <div class="d-flex flex-row justify-content-between">
                                    <div class="">
                                        <div class="d-flex flex-row">
                                            <div class="p-2"><img :src="vt_icon_pelengkap2"/></div>
                                            <div class="p-2"><span class="aveo-offcanvas-a-href1">Kemantapan Jalan</span></div>
                                        </div>
                                    </div>
                                    <div class="p-2"><i class="bi bi-plus-lg"></i></div>
                                </div>
                            </a>
                        </div>
                    </div>
                    
                    <div class="card mb-2">
                        <div class="card-body">
                            <a href="#" id="carda5">
                                <div class="d-flex flex-row justify-content-between">
                                    <div class="">
                                        <div class="d-flex flex-row">
                                            <div class="p-2"><img :src="vt_icon_pelengkap6"/></div>
                                            <div class="p-2"><span class="aveo-offcanvas-a-href1">PTV Visum</span></div>
                                        </div>
                                    </div>
                                    <div class="p-2"><i class="bi bi-plus-lg"></i></div>
                                </div>
                            </a>
                        </div>
                    </div>
                    
                    <div class="card">
                        <div class="card-body">
                            <a href="#" id="carda6">
                                <div class="d-flex flex-row justify-content-between">
                                    <div class="">
                                        <div class="d-flex flex-row">
                                            <div class="p-2"><img :src="vt_icon_pelengkap7"/></div>
                                            <div class="p-2"><span class="aveo-offcanvas-a-href1">Kriteria Koridor</span></div>
                                        </div>
                                    </div>
                                    <div class="p-2"><i class="bi bi-plus-lg"></i></div>
                                </div>
                            </a>
                        </div>
                    </div>
                    
                 </div>
                 
                 
                
                
            </div>
        </div>
        
        <!-- ### -->
        <div id="thesubmenu1">
            <div class="offcanvas-header d-flex justify-content-between">
                    <div class="p-2"><a href="#" id="jtopbacka1"><i class="bi bi-arrow-left"></i></a></div>
                    <div class="p-2 aveo-offcanvas-a-topdesc"><span>Kemantapan Jalan</span></div>
                    <div class="p-2"><button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button></div>
            </div>
            <hr/>
            
            <div class="offcanvas-body aveo-offcanvas-a-area2">
            
                <div class="d-flex flex-column mb-3">
                    
                <div>
                <span class="aveo-offcanvas-a-href1">Kemantapan Jalan</span>
                </div>
                <div class="dropdown mt-3">
                <select class="form-control" name="cars" id="cars">
                <option value="a" selected>Ringan</option>
                <option value="b">Sedang</option>
                <option value="c">Berat</option>
                </select>
                </div>
                
                <div class="mt-3">
                    <span class="aveo-offcanvas-a-href1">Dokumen Pendukung</span>
                    
                    <div class="file-upload">
                        <div id="xfuimagewrapww1" class="image-upload-wrap">
                            <input id="xidfileuploadww1" class="file-upload-input" type="file"  accept="image/*" />
                            <div class="drag-text">
                                <p>Unggah atau tarik file foto di kotak ini.<br/>File yang diizinkan adalah PNG atau JPG.<br/>Ukuran foto yang dianjurkan 4:3.<br/>Besar file foto maksimal 10 MB.</p>
                            </div>
                        </div>
                        
                        <div id="xfuimagepreviewareaww1" class="file-upload-content">
                            <img id="xfuimagepreviewimageww1" class="file-upload-image" src="#" alt="your image" />
                            <div class="image-title-wrap">
                                <button id="xidfileremoveww1" type="button" class="remove-image">Remove <span id="xfuimagetitleww1" class="image-title">Uploaded Image</span></button>
                            </div>
                        </div>
                    </div>
                </div>
                
                </div>
                
            </div>
        </div>
        
        <!-- ### -->
        <div id="thesubmenu5">
            <div class="offcanvas-header d-flex justify-content-between">
                    <div class="p-2"><a href="#" id="jtopbacka5"><i class="bi bi-arrow-left"></i></a></div>
                    <div class="p-2 aveo-offcanvas-a-topdesc"><span>PTV Visum</span></div>
                    <div class="p-2"><button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button></div>
            </div>
            <hr/>
            
            <div class="offcanvas-body aveo-offcanvas-a-area2" >
            
                <div class="mb-3" style="height: 500px; overflow-y: scroll;">
                        
                    <div>
                    <span class="aveo-offcanvas-a-href1">list jalan yang butuh penangan jalan</span>
                    </div>
                    <div class="dropdown mt-3">
                    <select class="form-control" name="cars" id="cars">
                    <option value="a" selected>Jl. Jati</option>
                    <option value="b">Jl. Randu</option>
                    <option value="c">Jl. Soka</option>
                    </select>
                    </div>
                    
                    <div class="mt-3">
                    <span class="aveo-offcanvas-a-href1">List jalan yang butuh rehabilitasi jalan</span>
                    </div>
                    <div class="dropdown mt-3">
                    <select class="form-control" name="cars" id="cars">
                    <option value="a">Jl. Jati</option>
                    <option value="b" selected>Jl. Randu</option>
                    <option value="c">Jl. Soka</option>
                    </select>
                    </div>
                    
                    <div class="mt-3">
                        <span class="aveo-offcanvas-a-href1">Data Terkait Jalan Nasional, Provinsi dan Kabupaten Kota</span>
                        
                        <div class="file-upload">
                            <div id="xfuimagewrapwe1" class="image-upload-wrap">
                                <input id="xidfileuploadwe1" class="file-upload-input" type="file"  accept="image/*" />
                                <div class="drag-text">
                                    <p>Unggah atau tarik file foto di kotak ini.<br/>File yang diizinkan adalah PNG atau JPG.<br/>Ukuran foto yang dianjurkan 4:3.<br/>Besar file foto maksimal 10 MB.</p>
                                </div>
                            </div>
                            
                            <div id="xfuimagepreviewareawe1" class="file-upload-content">
                                <img id="xfuimagepreviewimagewe1" class="file-upload-image" src="#" alt="your image" />
                                <div class="image-title-wrap">
                                    <button id="xidfileremovewe1" type="button" class="remove-image">Remove <span id="xfuimagetitlewe1" class="image-title">Uploaded Image</span></button>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="mt-3">
                        <span class="aveo-offcanvas-a-href1">Data Historis Traffic</span>
                        
                        <div class="file-upload">
                            <div id="xfuimagewrapwe2" class="image-upload-wrap">
                                <input id="xidfileuploadwe2" class="file-upload-input" type="file"  accept="image/*" />
                                <div class="drag-text">
                                    <p>Unggah atau tarik file foto di kotak ini.<br/>File yang diizinkan adalah PNG atau JPG.<br/>Ukuran foto yang dianjurkan 4:3.<br/>Besar file foto maksimal 10 MB.</p>
                                </div>
                            </div>
                            
                            <div id="xfuimagepreviewareawe2" class="file-upload-content">
                                <img id="xfuimagepreviewimagewe2" class="file-upload-image" src="#" alt="your image" />
                                <div class="image-title-wrap">
                                    <button id="xidfileremovewe2" type="button" class="remove-image">Remove <span id="xfuimagetitlewe2" class="image-title">Uploaded Image</span></button>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="mt-3">
                        <span class="aveo-offcanvas-a-href1">Data Historis International Roughness Index</span>
                        
                        <div class="file-upload">
                            <div id="xfuimagewrapwe3" class="image-upload-wrap">
                                <input id="xidfileuploadwe3" class="file-upload-input" type="file"  accept="image/*" />
                                <div class="drag-text">
                                    <p>Unggah atau tarik file foto di kotak ini.<br/>File yang diizinkan adalah PNG atau JPG.<br/>Ukuran foto yang dianjurkan 4:3.<br/>Besar file foto maksimal 10 MB.</p>
                                </div>
                            </div>
                            
                            <div id="xfuimagepreviewareawe3" class="file-upload-content">
                                <img id="xfuimagepreviewimagewe3" class="file-upload-image" src="#" alt="your image" />
                                <div class="image-title-wrap">
                                    <button id="xidfileremovewe3" type="button" class="remove-image">Remove <span id="xfuimagetitlewe3" class="image-title">Uploaded Image</span></button>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="mt-3">
                        <span class="aveo-offcanvas-a-href1">Data Historis Preservasi Jalan</span>
                        
                        <div class="file-upload">
                            <div id="xfuimagewrapwe4" class="image-upload-wrap">
                                <input id="xidfileuploadwe4" class="file-upload-input" type="file"  accept="image/*" />
                                <div class="drag-text">
                                    <p>Unggah atau tarik file foto di kotak ini.<br/>File yang diizinkan adalah PNG atau JPG.<br/>Ukuran foto yang dianjurkan 4:3.<br/>Besar file foto maksimal 10 MB.</p>
                                </div>
                            </div>
                            
                            <div id="xfuimagepreviewareawe4" class="file-upload-content">
                                <img id="xfuimagepreviewimagewe4" class="file-upload-image" src="#" alt="your image" />
                                <div class="image-title-wrap">
                                    <button id="xidfileremovewe4" type="button" class="remove-image">Remove <span id="xfuimagetitlewe4" class="image-title">Uploaded Image</span></button>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="mt-3">
                        <span class="aveo-offcanvas-a-href1">Data Historis Preservasi Jalan</span>
                        
                        <div class="file-upload">
                            <div id="xfuimagewrapwe4" class="image-upload-wrap">
                                <input id="xidfileuploadwe4" class="file-upload-input" type="file"  accept="image/*" />
                                <div class="drag-text">
                                    <p>Unggah atau tarik file foto di kotak ini.<br/>File yang diizinkan adalah PNG atau JPG.<br/>Ukuran foto yang dianjurkan 4:3.<br/>Besar file foto maksimal 10 MB.</p>
                                </div>
                            </div>
                            
                            <div id="xfuimagepreviewareawe4" class="file-upload-content">
                                <img id="xfuimagepreviewimagewe4" class="file-upload-image" src="#" alt="your image" />
                                <div class="image-title-wrap">
                                    <button id="xidfileremovewe4" type="button" class="remove-image">Remove <span id="xfuimagetitlewe4" class="image-title">Uploaded Image</span></button>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    
                </div>
                
            </div>
        </div>
        
        
        <!-- ### -->
        <div id="thesubmenu6">
            <div class="offcanvas-header d-flex justify-content-between">
                    <div class="p-2"><a href="#" id="jtopbacka6"><i class="bi bi-arrow-left"></i></a></div>
                    <div class="p-2 aveo-offcanvas-a-topdesc"><span>Kriteria Koridor</span></div>
                    <div class="p-2"><button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button></div>
            </div>
            <hr/>
            
            <div class="offcanvas-body aveo-offcanvas-a-area2" >
            
                <div class="mb-3" style="height: 500px; overflow-y: scroll;">
                        
                    <div>
                    <span class="aveo-offcanvas-a-href1">Koridor Pariwisata</span>
                    </div>
                    <div class="dropdown mt-3">
                    <select class="form-control" name="cars" id="cars">
                    <option value="a" selected>Tidak Mendukung</option>
                    <option value="b">Mendukung</option>
                    </select>
                    </div>
                    
                    <div class="mt-3">
                    <span class="aveo-offcanvas-a-href1">Koridor Pertanian</span>
                    </div>
                    <div class="dropdown mt-3">
                    <select class="form-control" name="cars" id="cars">
                    <option value="a" selected>Tidak Mendukung</option>
                    <option value="b">Mendukung</option>
                    </select>
                    </div>
                    
                    <div class="mt-3">
                    <span class="aveo-offcanvas-a-href1">Koridor Industri</span>
                    </div>
                    <div class="dropdown mt-3">
                    <select class="form-control" name="cars" id="cars">
                    <option value="a" selected>Tidak Mendukung</option>
                    <option value="b">Mendukung</option>
                    </select>
                    </div>
                    
                    <div class="mt-3">
                    <span class="aveo-offcanvas-a-href1">Koridor Jasa</span>
                    </div>
                    <div class="dropdown mt-3">
                    <select class="form-control" name="cars" id="cars">
                    <option value="a" selected>Tidak Mendukung</option>
                    <option value="b">Mendukung</option>
                    </select>
                    </div>
                    
                </div>
                
            </div>
        </div>
        
        
        
        
        
        
        <!-- #### -->
        <div class="aveo-offcanvas-a-area2-close">
            <hr/>
            
            <div id="jbottomawal">
            <div class="d-flex flex-row justify-content-end">
                <div class="p-3 ">
                    <button type="button" class="btn btn-small btn-secondary" data-bs-dismiss="offcanvas" aria-label="Close"><i class="bi bi-x-circle pe-2"></i>Tutup</button>
                </div>
            </div>
            </div>
            
            <div id="jbottoma1">
            <div class="d-flex flex-row justify-content-end">
                <div class="p-3 ">
                    <button type="button" class="btn btn-small btn-light me-3" data-bs-dismiss="offcanvas" aria-label="Close" id="jbottombacka1">Batal</button>
                    <button type="button" class="btn btn-small btn-primary" aria-label="Simpan" data-bs-toggle="modal" data-bs-target="#exampleModal" id="jbottomsimpana1">Simpan</button>
                    
                </div>
            </div>
            </div>
            
        </div>
        
            
         
        
    </div>
    
    
                <!--
                <div>
                    Some text as placeholder. In real life you can have the elements you have chosen. Like, text, images, lists, etc.
                </div>
                <div class="dropdown mt-3">
                    
                    <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown">
                    Dropdown button
                    </button>
                    
                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <li><a class="dropdown-item" href="#">Action</a></li>
                        <li><a class="dropdown-item" href="#">Another action</a></li>
                        <li><a class="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                </div>
                -->
    <!-- Modal -->


</template>

<style scoped>
</style>