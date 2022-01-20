<template>
    <div class="content-page" style="margin-left: 0px !important; margin-top:90px !important">
        <div class="content">
            <div class="container-fluid">        
                <Kalender/>
            </div>
        </div>
    </div>
</template>


<script>
    import Kalender from '@/components/Kalender.vue'
    import profile from "@/assets/images/users/user.png"

    export default {
        name: 'Home',
        components: {
            Kalender,
        },
        data() {
            return {
                profile,
                progress: {
                    percent: 0,
                    list: []
                },
                user: this.$store.state.auth.user
            }
        },
        mounted() {
            document.body.classList.remove('login-bg')
        },
        methods: {
        }
    }
</script>