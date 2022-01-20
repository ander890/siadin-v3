<template>
    <div class="account-pages w-100">
        <div class="container justify-content-center">
            <div class="row vh-100 d-flex align-items-center justify-content-center">
                <div class="col-md-8 col-lg-6 col-xl-5 ">
                    <div class="card" v-if="loginBox">
                        <div class="card-body p-4">
                            <div class="text-center mb-4">
                                <h1>SIADIN V3</h1>
                                <!-- <span><img src="@/assets/logo-dark.png" alt="" height="50"></span> -->
                            </div>
                            <!-- <div class="alert alert-success" role="alert">
                                Silahkan login menggunakan akun <b>SSO UNDIP</b>
                            </div> -->
                            <form class="pt-2" v-on:submit.prevent="submitForm">
                                <div class="form-group mb-3">
                                    <label for="emailaddress">NIM </label>
                                    <input class="form-control" type="text" id="emailaddress" required=""
                                        placeholder="Enter your NIM" v-model="form.nim">
                                </div>
                                <div class="form-group mb-3">
                                    <label for="password">Password</label>
                                    <input class="form-control" type="password" required="" id="password"
                                        placeholder="Enter your password" v-model="form.password">
                                </div>

                                <!-- <div class="custom-control custom-checkbox mb-3">
                                    <input type="checkbox" class="custom-control-input" id="checkbox-signin">
                                    <label class="custom-control-label" for="checkbox-signin">Remember me</label>
                                </div> -->


                                <div class="form-group mb-0 text-center">
                                    
                                    <button class="btn btn-success btn-block" type="submit" :disabled="isBtnDisabled">  
                                        <div v-if="loading" class="spinner-border spinner" role="status"></div>
                                        {{ loginText }}
                                    </button>

                                    <br>
                                    <a href="">Lupa Password ?</a>
                                </div>
                            </form>
                            <!-- <div class="row mt-3">
                                <div class="col-12 text-center">
                                    <p class="text-muted mb-0">Email tidak terdaftar ? <a href="auth-register.html" class="text-dark ml-1"><b>Sinkronisasi dengan SSO</b></a></p>
                                </div>
                            </div> -->
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    components: { 
    },
    data(){
        return{
            form: {
                nim: 'A11.2021.13308',
                password: 'inipassword',
            },
            loginBox: true,
            isBtnDisabled: false,
            loading: false,
            loginText: "Login",
        }
    },
    mounted () {
        document.body.classList.add('login-bg')
    },
    methods:{
        setDefault(){
            this.isBtnDisabled = false
            this.loading = false
            this.loginText = "Login"
        },
        setLoading(){
            this.isBtnDisabled = true
            this.loading = true
            this.loginText = "Sedang menghubungi server..."
        },
        backToLogin(){
            this.loginBox = true
            this.syncBox = false
            this.syncLoading = false
        },
        submitForm(){
            this.setLoading()

            let data = {
                nama: "Daniel Alexander",
                nim: "A11.2021.13308",
                email: "11202113308@mhs.dinus.ac.id",
                fakultas: "Fakultas Ilmu Komputer",
                prodi: "Teknik Informatika",
                semester: "1",
                end: "1327"
            }

            this.$store.dispatch('login', data).then(response => {
                if(response.success == true){
                    this.$toast.success("Login Sukses")
                    this.$router.push('/dashboard')
                }
            });
        }
    }
}
</script>

<style>
.login-bg{
    background-image: url('~@/assets/bg-pattern.png');
    background-color: #343b4a;
    background-size: cover;
}

.spinner{
    height: 1rem !important;
    width: 1rem !important;
}

</style>