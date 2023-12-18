// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve } from "path"
import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
    modules: [['@pinia/nuxt', { autoImports: ['defineStore', 'acceptHMRUpdate'] }]],
    imports: { dirs: ['./stores'] },
    devtools: { enabled: true },
    quiet: false,
    alias: {
      '@': resolve(__dirname, '/'),
    },
    runtimeConfig: {
        public: {
            'gurl_utama': process.env.URL_UTAMA_RRAMS,
            'website_title_head': process.env.WEBSITE_TITLE_HEAD,
        },
        'gurl_api': process.env.URL_API_RRAMS
    },
    routeRules: {  
        '/analisis-usulan-jalan/**': { ssr: false }, 
    },
    
    app: {
    head: {
        'title': 'RRAMS Debug',
        'meta': [
            {'charset': 'utf-8'},
            {'name': 'viewport', 'content': 'width=device-width, initial-scale=1'},
            {'name': 'creator', 'content': 'Wihikan Mawi Wijna'},
        ],
        'link': [
            { 'rel': 'preconnect', 'href': 'https://fonts.googleapis.com'},
            { 'rel': 'preconnect', 'href': 'https://fonts.gstatic.com'},
            { 'rel': 'stylesheet', 'href': 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap'},
            {
                'rel': 'stylesheet', 'href': 'https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css', 'integrity': 'sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC', 'crossorigin': 'anonymous'
            },
            { 'rel': 'stylesheet', 'href': 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.2/font/bootstrap-icons.min.css'},
            
            { 'rel': 'stylesheet', 'href': '/assets/xcss1/styleguide.css'},
            { 'rel': 'stylesheet', 'href': '/assets/xcss1/aveo.css'},
            { 'rel': 'stylesheet', 'href': '/assets/xcss1/context-menu.css'},
            { 'rel': 'icon', 'type': 'image/png', 'href': '/assets/ximg1/group-288-1.png'},
        ],
        'script': [
            { 'type': 'text/javascript', 'src': 'https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js', 'integrity': 'sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM', 'crossorigin': 'anonymous' },
            { 'type': 'text/javascript', 'src': 'https://code.jquery.com/jquery-3.7.1.slim.min.js', 'integrity': 'sha256-kmHvs0B+OpCW5GVHUNjv9rOmY0IvSIRcf7zGUDTDQM8=', 'crossorigin': 'anonymous' },
            //{ 'type': 'text/javascript', 'src': 'https://cdn.ckeditor.com/ckeditor5/40.2.0/classic/ckeditor.js', 'crossorigin': 'anonymous' },
            
            { 'type': 'text/javascript', 'src': '/assets/xjs1/context-menu.js' },
            { 'type': 'text/javascript', 'src': '/assets/xjs1/rrams-init1.js' },
        ]
    }
    }
    //css: ['~/assets/desain.scss']
  //css: ['']
})
