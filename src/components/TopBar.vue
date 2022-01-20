<template>
    <div class="navbar-custom">
        <ul class="list-unstyled topnav-menu float-right mb-0">
            <li class="dropdown notification-list">
                <a class="nav-link dropdown-toggle nav-user mr-0 waves-effect waves-light" data-toggle="dropdown"
                    href="#" role="button" aria-haspopup="false" aria-expanded="false" v-on:click="profileDropdown">
                    <img :src="user.profile" alt="user-image" class="rounded-circle">
                    <span class="pro-user-name ml-1">
                        {{ user.name }} <i class="mdi mdi-chevron-down"></i>
                    </span>
                </a>

                <div v-if="showProfileDropdown" class="dropdown-menu dropdown-menu-right profile-dropdown" style="display:block !important">
                    <!-- <a v-on:click="profile" class="dropdown-item notify-item">
                        <i class="dripicons-user"></i>
                        <span>Profile</span>
                    </a> -->
                    <a v-on:click="logout" class="dropdown-item notify-item">
                        <i class="dripicons-power"></i>
                        <span>Logout</span>
                    </a>

                </div>
            </li>

            <li class="dropdown notification-list">
                <a href="javascript:void(0);" class="nav-link right-bar-toggle waves-effect waves-light">
                    <i class="fe-settings noti-icon"></i>
                </a>
            </li>

        </ul>

        <ul class="list-unstyled menu-left mb-0">
            <li>
                <center>
                    <div style="margin-top: 15px"></div>
                    <router-link :to="{ path: '/' }" style="color: white;text-decoration:none; font-size:30px;margin-top:50px">
                        UNIVERSITAS DIAN NUSWANTORO
                    </router-link>
                </center>
            </li>
        </ul>
    </div>
</template>

<script>
    import logo from "@/assets/images/logo-light.png"
    import profile from "@/assets/images/users/user.png"

    export default {
        data: function () {
            return {
                logo: logo,
                user: {
                    profile: this.$store.state.auth.user.profile ?? profile,
                    name: this.$store.state.auth.user.nama
                },
                showProfileDropdown: false,
                open: true,
            }
        },
        mounted(){
        },
        methods:{
            collapseMenu(){
                document.body.classList.toggle('sidebar-enable')
                if(window.innerWidth >= 768){
                    document.body.classList.toggle('enlarged')
                    if(this.open == true){
                        this.$root.$emit('enlarge', "hide")
                        this.open = false
                    }else{
                        this.$root.$emit('enlarge', "show")
                        this.open = true
                    }
                }else{
                    document.body.classList.remove('enlarged')
                    this.$root.$emit('enlarge', "show");
                }
            },
            profileDropdown(){
                if(this.showProfileDropdown){
                    this.showProfileDropdown = false;
                }else{
                    this.showProfileDropdown = true;
                }
            },
            logout(){
                this.$store.dispatch('logout')
                this.$toast.success("Logout sukses")
                this.$router.push('/login') 
            },
            profile(){
                this.profileDropdown()
                this.$router.push('/profile') 
            }
        }
    }
</script>
