<script lang="ts" setup>

definePageMeta({
    middleware: ['authenticated-login-cannothave']
});

const userStore = useUserStore();

const signIn = async () => {
    await userStore.signIn({
        username: 'kminchelle',
        password: '0lelplR',
    })
    
    await navigateTo("/dashboard", { replace: true })
};

const vt_email = ref('kminchelle');
const vt_password = ref('0lelplR');


/*
    export default {
        name: 'LoginForm',
        data() {
          return {
            loger: {
              passw: "abcdef",
              email: "tes@tes.net",
            },
          };
        },
        methods: {
          handleSubmit() {
            return navigateTo('/dashboard')
          }
        }
    };
*/
</script>

<template>
<nuxt-layout name="laylogin">
    
    <div class="container-fluid min-vh-100 d-flex flex-column login-bg">
    <div class="row justify-content-center">

                <div class="col-12 col-md-4">
                    
                    <div class="row mt-5 mb-5">
                    
                        <div class="d-flex flex-row justify-content-center">
                        <div class="p-2">
                            <a href="javascript:void(0)" class="" style="">
                            <img class="loginarea-logo1" src="~/assets/ximg1/logo_dir1_v2.png" alt="SmartAdmin WebApp" aria-roledescription="logo">
                            </a>
                        </div>
                        <div class="p-2 loginarea-h">
                            <h1>RRAMS <br/><em>Road Asset Management System</em></h1>
                            <h2>Direktorat Regional 1</h2>
                        </div>
                        </div>
                    
                    </div>
                    
                    <div class="row">
                    
                    <!-- x11 -->
                    
                        <div class="card p-4 rounded-plus bg-faded">
                            <h2 class="fs-xxl fw-500 mt-4 text-center" style="color:#3066BE;"></h2>
                            
                            <form @submit.prevent="signIn">
                            <div class="form-group mb-5">
                                <div class="row">
                                    <label class="control-label col-md-12 col-sm-12 col-xs-12">Surat Elektronik (Email) <span style="color: red;">* </span><span style="color: red;" id="result"></span></label>
                                    <div class="col-md-12 col-sm-12 col-xs-12">
                                        <input v-model="vt_email" type="text" id="username2" class="form-control" name="email" placeholder="Masukkan Alamat Email Anda" required="">
                                        <div class="help-block" id="error_email" style="display: none;color:red;"></div>
                                    </div>

                                </div>
                            </div>
                            
                            <div class="form-group">
                                <div class="row">
                                    <label class="control-label col-md-12 col-sm-12 col-xs-12">kata sandi <span style="color: red;">*</span></label>
                                    <div class="col-md-12 col-sm-12 col-xs-12">
                                        <input v-model="vt_password" type="password" id="password2" class="form-control" placeholder="Masukkan Kata Sandi Anda" required="">
                                        <div class="help-block" id="error_password" style="display: none;color:red;"></div>
                                    </div>
                                </div>
                            </div>
                            

                            <div class="row no-gutters mt-5">
                                    <button type="submit" id="login-btn" class="btn btn-primary btn-block w-100" style="">Masuk</button>
                            </div>
                            </form>
                            
                            <div class="row no-gutters mt-2">
                                <a href="https://test-sipasti.rajawali.cloud/registrasi" class="btn btn-block btn-secondary w-100" style="">
                                Daftar
                                </a>
                            </div>
                            
                        </div>
                    
                    <!-- x12 -->
                    
                    </div>
                    
                </div>
                
    </div>
    </div>
    
</nuxt-layout>
</template>

<style scoped></style>