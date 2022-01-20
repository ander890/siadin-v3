<template>
    <div class="content-page" style="margin-left: 0px !important; margin-top:90px !important">
        <div class="content">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-md-2 col-sm-12">
                        <div class="list-group">
                            <a @click="setActive('krs')" v-bind:class="{ active: open.krs }" class="list-group-item list-group-item-action" aria-current="true">KRS</a>
                            <a @click="setActive('kartu_ujian')" v-bind:class="{ active: open.kartu_ujian }" class="list-group-item list-group-item-action">Kartu Ujian</a>
                            <a @click="setActive('khs')" v-bind:class="{ active: open.khs }" class="list-group-item list-group-item-action">KHS</a>
                            <a @click="setActive('daftar_nilai')" v-bind:class="{ active: open.daftar_nilai }" class="list-group-item list-group-item-action">Daftar Nilai</a>
                            <a @click="setActive('remidi')" v-bind:class="{ active: open.remidi }" class="list-group-item list-group-item-action">Remidi</a>
                            <a @click="setActive('khs_semester_antara')" v-bind:class="{ active: open.khs_semester_antara }" class="list-group-item list-group-item-action">KHS Semester Antara</a>
                            <a @click="setActive('ujian_semester_antara')" v-bind:class="{ active: open.ujian_semester_antara }" class="list-group-item list-group-item-action">Ujian Semester Antara</a>
                        </div>
                    </div>
                    <div class="col-md-10 col-sm-12">
                            <div v-if="open.krs">
                                <KRS/>
                            </div>
                            <div v-if="open.kartu_ujian">
                                <KartuUjian/>
                            </div>
                            <div v-if="open.khs">
                                <KHS/>
                            </div>
                            <div v-if="open.daftar_nilai">
                                <DaftarNilai/>
                            </div>
                            <div v-if="open.remidi">
                                <Remidi/>
                            </div>
                            <div v-if="open.khs_semester_antara">
                                <KHSSemesterAntara/>
                            </div>
                            <div v-if="open.ujian_semester_antara">
                                <UjianSemesterAntara/>
                            </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<style>
    @import '../../assets/styles/app.min.css';
</style>

<script>
    import KRS from '@/components/KRS.vue'
    import KartuUjian from '@/components/KartuUjian.vue'
    import KHS from '@/components/KHS.vue'
    import DaftarNilai from '@/components/DaftarNilai.vue'
    import Remidi from '@/components/Remidi.vue'
    import KHSSemesterAntara from '@/components/KHSSemesterAntara.vue'
    import UjianSemesterAntara from '@/components/UjianSemesterAntara.vue'

    import profile from "@/assets/images/users/user.png"

    export default {
        name: 'Home',
        components: {
            KRS,
            KartuUjian,
            KHS,
            DaftarNilai,
            Remidi,
            KHSSemesterAntara,
            UjianSemesterAntara
        },
        data() {
            return {
                profile,
                progress: {
                    percent: 0,
                    list: []
                },
                open: {
                    krs: false,
                    kartu_ujian: false,
                    khs: false,
                    daftar_nilai: false,
                    remidi: false,
                    khs_semester_antara: false,
                    ujian_semester_antara: false,
                },
                user: this.$store.state.auth.user
            }
        },
        mounted() {
            this.setActive("krs")
            document.body.classList.remove('login-bg')
        },
        methods: {
            setActive(active){
                this.open = {
                    krs: false,
                    kartu_ujian: false,
                    khs: false,
                    daftar_nilai: false,
                    remidi: false,
                    khs_semester_antara: false,
                    ujian_semester_antara: false,
                }

                if(active == "krs"){
                    this.open.krs = true
                }else if(active == "kartu_ujian"){
                    this.open.kartu_ujian = true
                }else if(active == "khs"){
                    this.open.khs = true
                }else if(active == "daftar_nilai"){
                    this.open.daftar_nilai = true
                }else if(active == "remidi"){
                    this.open.remidi = true
                }else if(active == "khs_semester_antara"){
                    this.open.khs_semester_antara = true
                }else if(active == "ujian_semester_antara"){
                    this.open.ujian_semester_antara = true
                }

            }
        }
    }
</script>

<style scoped>
    .btn-menu {
        height: 3rem;
    }

    .logo-btn {
        float: left !important;
        color: white
    }

    .text-btn {
        color: white;
        font-size: 1.5rem;
        float: right;
        text-decoration: none;
    }
</style>