<script setup lang="ts">
//4C artikel usulan jalan

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

const vt_title = 'Pembangunan LRT Bali';
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
            
            <div class="row mb-3 aveo-x2-breadcrumb">
            <div class="col">
                <img class="img me-2" :src="vt_icon_sidebar1"><img class="chevron-right-filled me-2" src="~/assets/ximg1/chevronrightfilled-1.svg"><a :href="vt_url_new">Analisis Usulan Jalan</a><img class="chevron-right-filled me-2" src="~/assets/ximg1/chevronrightfilled-1.svg"><a :href="vt_url_new">{{ vt_title }}</a>
            </div>
            </div>
            
            <div class="p-5">
            <div class="row mb-3 aveo-x2-judul">
                <div class="col">
                    <h1>Pembangunan LRT Bali</h1>
                </div>
            </div>
            
            <div class="row mb-5 aveo-x2-infopublish">
                <span class="text-1">Direktorat Regional I</span><span class="ellipse"></span><span class="text-2">Diterbitkan pada 17 Oktober 2023</span>
            </div>
            
            <div class="row py-3 mb-5 aveo-x2-inforeact">
                <div class="col-6 text-align-top text-align-center">
                    <i class="bi bi-heart me-3"></i><span>121</span><i class="bi bi-chat mx-3"></i><span>61</span>
                </div>
                <div class="col-6 text-end">
                    <i class="bi bi-upload"></i>
                    <i class="bi bi-three-dots-vertical"></i>
                </div>
            </div>
            
            <div class="row mb-3 aveo-x2-breadcrumb">
                <div class="col">
                    <p><img src="~/assets/ximg1/gambar-2.svg" class="img-fluid"></p>
                    <p class="deskripsi-2">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;On the other hand, we
                    denounce with righteous indignation and dislike men who are so beguiled and demoralized by the
                    charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and
                    trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through
                    weakness of will, which is the same as saying through shrinking from toil and pain. These cases are
                    perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled
                    and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed
                    and every pain avoided. But in certain circumstances and owing to the claims of duty or the
                    obligations of business it will frequently occur that pleasures have to be repudiated and annoyances
                    accepted. The wise man therefore always holds in these matters to this principle of selection: he
                    rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse
                    pains."
                    </p>
                    
                </div>
            </div>
            
            <div class="row py-4 mt-5 mb-5 aveo-x2-infosimilar">
                <h3 class="mt-3 mb-5">Analisis Terkait</h3>
                <div class="col-4">
                    <div class="mb-3 aveo-x1-listersimilar">
                        <div class="">
                            <div class="pb-3"><img class="img-fluid" src="~/assets/ximg1/frame-427319568.png"></div>
                            <div class="info mb-1">
                                <div class="text-1 me-3">Direktorat Regional I</div>
                                <div class="ellipse me-2"></div>
                                <div class="text-2">17 Oktober 2023</div>
                            </div>
                                
                            <h4 class="mb-2">Pembangunan LRT Bali</h4>
                            <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Lorem ipsum dolor sit amet. consectetur adipiscing elit, sed do eiusmod temp de genere...</p>
                                                                
                        </div>
                    </div>
                </div>
                
                
                <div class="col-4">
                    <div class="mb-3 aveo-x1-listersimilar">
                        <div class="">
                            <div class="pb-3"><img class="img-fluid" src="~/assets/ximg1/frame-427319568.png"></div>
                            <div class="info mb-1">
                                <div class="text-1 me-3">Direktorat Regional I</div>
                                <div class="ellipse me-2"></div>
                                <div class="text-2">17 Oktober 2023</div>
                            </div>
                                
                            <h4 class="mb-2">Pembangunan LRT Bali</h4>
                            <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Lorem ipsum dolor sit amet. consectetur adipiscing elit, sed do eiusmod temp de genere...</p>
                                                                
                        </div>
                    </div>
                </div>
                
                <div class="col-4">
                    <div class="mb-3 aveo-x1-listersimilar">
                        <div class="">
                            <div class="pb-3"><img class="img-fluid" src="~/assets/ximg1/frame-427319568.png"></div>
                            <div class="info mb-1">
                                <div class="text-1 me-3">Direktorat Regional I</div>
                                <div class="ellipse me-2"></div>
                                <div class="text-2">17 Oktober 2023</div>
                            </div>
                                
                            <h4 class="mb-2">Pembangunan LRT Bali</h4>
                            <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Lorem ipsum dolor sit amet. consectetur adipiscing elit, sed do eiusmod temp de genere...</p>
                                                                
                        </div>
                    </div>
                </div>
                
            </div>
            </div>
                        
        </div>
    
    
    
    
</template>

<style scoped></style>