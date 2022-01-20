<template>
  <div class="content-page" style="margin-left: 0px !important; margin-top:90px !important">
    <div class="content">
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-6">
            <div class="card shadow p-3 mb-5 bg-white rounded">
              <div class="card-body">
                <div class="row">
                  <div class="col-md-4">
                    <center>
                      <img :src="profile" alt="user-image" class="rounded-circle" style="width: 150px">
                    </center>
                  </div>
                  <div class="col-md-8">
                    <table style="font-size:1rem">
                      <tr>
                        <td width="45%">NAMA</td>
                        <td width="5%">:</td>
                        <td width="50%">{{ user.nama }}</td>
                      </tr>
                      <tr>
                        <td width="45%">NIM</td>
                        <td width="5%">:</td>
                        <td width="50%">{{ user.nim }}</td>
                      </tr>
                      <tr>
                        <td width="45%">EMAIL</td>
                        <td width="5%">:</td>
                        <td width="50%">{{ user.email }}</td>
                      </tr>
                      <tr>
                        <td width="45%">FAKULTAS</td>
                        <td width="5%">:</td>
                        <td width="50%">{{ user.fakultas }}</td>
                      </tr>
                      <tr>
                        <td width="45%">PROGRAM STUDI</td>
                        <td width="5%">:</td>
                        <td width="50%">{{ user.prodi }}</td>
                      </tr>
                      <tr>
                        <td width="45%">SEMESTER STUDI</td>
                        <td width="5%">:</td>
                        <td width="50%">{{ user.semester }}</td>
                      </tr>
                    </table>
                  </div>
                </div>
                <br>
                <center>
                  SISA MASA STUDI
                  <br>
                  <button class="btn btn-success"
                    style="border-radius:1rem">{{ this.countSisaMasaStudi(user.end) }}</button>
                </center>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="card shadow mb-5 bg-white rounded">
              <div class="card-body">
                <h1>VISI</h1>
                <p>
                  Menjadi Universitas pilihan utama di bidang pendidikan dan kewirausahaan.
                </p>
                <br>
                <h1>MISI</h1>
                <p>
                  1. Menyelenggarakan pendidikan tinggi yang berkualitas.
                </p>
                <p>
                  2. Menumbuhkembangkan kreatifitas dan inovasi civitas akademika yang bermanfaat bagi masyarakat,
                  pemerintah dan dunia usaha.
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-12">
            <div class="row">
              <div class="col-md-6" style="margin-top: 1rem">
                <a class="btn text-white btn-block btn-menu" style="background-color:#D81B60" href="./akademik">
                  <a class="logo-btn">
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 172 172"
                      style=" fill:#000000;">
                      <g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt"
                        stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0"
                        font-family="none" font-weight="none" font-size="none" text-anchor="none"
                        style="mix-blend-mode: normal">
                        <path d="M0,172v-172h172v172z" fill="none"></path>
                        <g fill="#ffffff">
                          <path
                            d="M51.6,17.2c-6.68889,0 -15.30897,1.51648 -22.61979,2.97865c-7.31082,1.46216 -13.16875,2.92266 -13.16875,2.92266c-2.55413,0.63777 -4.34583,2.93281 -4.34479,5.56536v7.32344c-3.41497,1.98528 -5.73333,5.63994 -5.73333,9.87656v86c0,6.33533 5.13133,11.46667 11.46667,11.46667h58.88984c2.0447,3.54154 5.82076,5.7261 9.91016,5.73333c4.09341,-0.00324 7.87465,-2.18834 9.92136,-5.73333h58.87864c6.33533,0 11.46667,-5.13133 11.46667,-11.46667v-86c0,-4.23663 -2.31837,-7.89128 -5.73333,-9.87656v-7.32344c0.00104,-2.63255 -1.79066,-4.92759 -4.34479,-5.56536c0,0 -5.85793,-1.46049 -13.16876,-2.92266c-7.31081,-1.46216 -15.9309,-2.97865 -22.61979,-2.97865c-6.68889,0 -15.30897,1.51648 -22.61979,2.97865c-6.53933,1.30787 -10.71864,2.34728 -11.78021,2.60912c-1.06157,-0.26184 -5.24089,-1.30125 -11.78021,-2.60912c-7.31081,-1.46216 -15.9309,-2.97865 -22.61979,-2.97865zM51.6,28.66667c4.77778,0 13.35769,1.35018 20.38021,2.75469c4.6074,0.92148 6.08092,1.32234 8.28646,1.84766v91.45338c-2.01064,-0.46104 -2.68966,-0.67231 -6.04688,-1.34375c-7.31081,-1.46216 -15.9309,-2.97864 -22.61979,-2.97864c-6.68889,0 -15.30897,1.51648 -22.61979,2.97864c-3.35721,0.67144 -3.72958,0.8134 -6.04687,1.34375v-91.45338c2.20631,-0.52418 3.67905,-0.92617 8.28646,-1.84766c7.02251,-1.4045 15.60243,-2.75469 20.38021,-2.75469zM120.4,28.66667c4.77778,0 13.35769,1.35018 20.38021,2.75469c4.60741,0.92148 6.08014,1.32348 8.28646,1.84766v91.45338c-2.31729,-0.53035 -2.68967,-0.67231 -6.04688,-1.34375c-7.31081,-1.46216 -15.9309,-2.97864 -22.61979,-2.97864c-6.68889,0 -15.30897,1.51648 -22.61979,2.97864c-3.35722,0.67144 -4.03624,0.88271 -6.04688,1.34375v-91.45338c2.20554,-0.52532 3.67905,-0.92617 8.28646,-1.84766c7.02252,-1.4045 15.60244,-2.75469 20.38021,-2.75469zM120.4,45.86667c-3.16643,0 -5.73333,2.5669 -5.73333,5.73333c0,3.16643 2.5669,5.73333 5.73333,5.73333c3.16643,0 5.73333,-2.5669 5.73333,-5.73333c0,-3.16643 -2.5669,-5.73333 -5.73333,-5.73333zM114.66667,63.06667c-2.06765,-0.02924 -3.99087,1.05709 -5.03322,2.843c-1.04236,1.78592 -1.04236,3.99474 0,5.78066c1.04236,1.78592 2.96558,2.87225 5.03322,2.843v17.2c-2.06765,-0.02924 -3.99087,1.05709 -5.03322,2.843c-1.04236,1.78592 -1.04236,3.99474 0,5.78066c1.04236,1.78592 2.96558,2.87225 5.03322,2.843h4.77031c0.61915,0.10233 1.2509,0.10233 1.87005,0h4.8263c2.06765,0.02924 3.99087,-1.05709 5.03322,-2.843c1.04236,-1.78592 1.04236,-3.99474 0,-5.78066c-1.04236,-1.78592 -2.96558,-2.87225 -5.03322,-2.843v-22.93333c-0.00032,-3.1663 -2.56703,-5.73302 -5.73333,-5.73333z">
                          </path>
                        </g>
                      </g>
                    </svg> </a>
                  <a class="text-btn">
                    AKADEMIK
                  </a>
                </a>
                <br>
                <a class="btn text-white btn-block btn-menu" style="background-color:#1E88E5" href="./keuangan" >
                  <a class="logo-btn">
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 172 172"
                      style=" fill:#000000;">
                      <g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt"
                        stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0"
                        font-family="none" font-weight="none" font-size="none" text-anchor="none"
                        style="mix-blend-mode: normal">
                        <path d="M0,172v-172h172v172z" fill="none"></path>
                        <g fill="#ffffff">
                          <path
                            d="M40.13333,11.46667c-3.1663,0.00032 -5.73302,2.56703 -5.73333,5.73333v22.66458l-19.79792,15.29635l31.26458,24.57943v-45.34036c6.33287,0 11.46667,-5.1338 11.46667,-11.46667h57.33333c0,6.33287 5.1338,11.46667 11.46667,11.46667v22.93333v22.40703l31.26458,-24.57943l-19.79792,-15.29635v-22.66458c-0.00032,-3.1663 -2.56703,-5.73302 -5.73333,-5.73333zM86,40.13333c-3.16643,0 -5.73333,2.5669 -5.73333,5.73333c0,3.16643 2.5669,5.73333 5.73333,5.73333c3.16643,0 5.73333,-2.5669 5.73333,-5.73333c0,-3.16643 -2.5669,-5.73333 -5.73333,-5.73333zM11.46667,67.28828v67.93776l38.03932,-38.05052zM160.53333,67.28828l-38.03933,29.89844l38.03933,38.03933zM86,68.8c-12.66493,0 -22.93333,10.2684 -22.93333,22.93333c0,1.11227 0.16994,2.1698 0.32474,3.2362l12.95599,10.36927c5.68173,4.5408 13.61228,4.5408 19.29401,0l12.95599,-10.35808c0.16053,-1.07213 0.33594,-2.13513 0.33594,-3.24739c0,-12.66493 -10.2684,-22.93333 -22.93333,-22.93333zM58.5875,104.30859l-44.74687,44.75808h144.31875l-44.74688,-44.74688l-15.01641,11.79141c-3.65213,2.86667 -8.02156,4.3 -12.39609,4.3c-4.37453,0 -8.74969,-1.43333 -12.39609,-4.3z">
                          </path>
                        </g>
                      </g>
                    </svg>
                  </a>
                  <a class="text-btn">
                    KEUANGAN
                  </a>
                </a>
                <br>
                <a class="btn text-white btn-block btn-menu" style="background-color:#00ACC1" href="./kalender">
                  <a class="logo-btn">
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 172 172"
                      style=" fill:#000000;">
                      <g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt"
                        stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0"
                        font-family="none" font-weight="none" font-size="none" text-anchor="none"
                        style="mix-blend-mode: normal">
                        <path d="M0,172v-172h172v172z" fill="none"></path>
                        <g fill="#ffffff">
                          <path
                            d="M43,7.16667v14.33333h-7.16667c-7.88333,0 -14.33333,6.45 -14.33333,14.33333v100.33333c0,7.88333 6.45,14.33333 14.33333,14.33333h100.33333c7.88333,0 14.33333,-6.45 14.33333,-14.33333v-100.33333c0,-7.88333 -6.45,-14.33333 -14.33333,-14.33333h-7.16667v-14.33333h-14.33333v14.33333h-57.33333v-14.33333zM35.83333,35.83333h7.16667h14.33333h57.33333h14.33333h7.16667v14.33333h-100.33333zM35.83333,64.5h100.33333v71.66667h-100.33333z">
                          </path>
                        </g>
                      </g>
                    </svg> </a>
                  <a class="text-btn">
                    KALENDER
                  </a>
                </a>
              </div>

              <div class="col-md-6" style="margin-top: 1rem">
                <a class="btn text-white btn-block btn-menu" style="background-color:#00897B" target="_blank" href="https://kulino.dinus.ac.id">
                  <a class="logo-btn">
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 172 172"
                      style=" fill:#000000;">
                      <g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt"
                        stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0"
                        font-family="none" font-weight="none" font-size="none" text-anchor="none"
                        style="mix-blend-mode: normal">
                        <path d="M0,172v-172h172v172z" fill="none"></path>
                        <g fill="#ffffff">
                          <path
                            d="M28.66667,34.4c-6.33533,0 -11.46667,5.13133 -11.46667,11.46667v68.8c0,6.33533 5.13133,11.46667 11.46667,11.46667h114.66667c6.33533,0 11.46667,-5.13133 11.46667,-11.46667v-68.8c0,-6.33533 -5.13133,-11.46667 -11.46667,-11.46667zM28.66667,51.6h17.2v11.46667h-17.2zM86,51.6c5.4696,0 7.16667,3.88568 7.16667,3.88568c4.89053,0 7.16667,5.3509 7.16667,11.63463c0,3.13613 -1.26536,5.73333 -1.26536,5.73333c0.50453,0.31533 1.34859,1.31876 1.14219,3.10183c-0.38987,3.3196 -1.72153,4.16401 -2.56433,4.23281c-0.32107,3.096 -4.82344,7.06364 -5.9013,7.63698v5.18464c2.14427,6.97747 14.04667,3.55664 17.2,15.92344h-45.87786c3.15333,-12.3668 15.05573,-8.94597 17.2,-15.92344v-5.18464c-1.07787,-0.57333 -5.58024,-4.54098 -5.9013,-7.63698c-0.8428,-0.0688 -2.17445,-0.91321 -2.56432,-4.23281c-0.21214,-1.78307 0.62072,-2.78649 1.13099,-3.10183c0,0 -1.25417,-2.8724 -1.25417,-5.73333c-0.00573,-8.48533 4.19134,-15.52031 14.32214,-15.52031zM28.66667,74.53333h17.2v11.46667h-17.2zM28.66667,97.46667h17.2v11.46667h-17.2zM57.33333,137.6c-2.06765,-0.02924 -3.99087,1.05709 -5.03322,2.843c-1.04236,1.78592 -1.04236,3.99474 0,5.78066c1.04236,1.78592 2.96558,2.87225 5.03322,2.843h57.33333c2.06765,0.02924 3.99087,-1.05709 5.03322,-2.843c1.04236,-1.78592 1.04236,-3.99474 0,-5.78066c-1.04236,-1.78592 -2.96558,-2.87225 -5.03322,-2.843z">
                          </path>
                        </g>
                      </g>
                    </svg> </a>
                  <a class="text-btn">
                    KULINO
                  </a>
                </a>
                <br>
                <a class="btn text-white btn-block btn-menu" style="background-color:#7CB342">
                  <a class="logo-btn">
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 172 172"
                      style=" fill:#000000;">
                      <g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt"
                        stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0"
                        font-family="none" font-weight="none" font-size="none" text-anchor="none"
                        style="mix-blend-mode: normal">
                        <path d="M0,172v-172h172v172z" fill="none"></path>
                        <g fill="#ffffff">
                          <path
                            d="M43,14.33333c-7.84216,0 -14.33333,6.49117 -14.33333,14.33333v114.66667c0,7.84216 6.49117,14.33333 14.33333,14.33333h86c7.84216,0 14.33333,-6.49117 14.33333,-14.33333v-86l-43,-43zM43,28.66667h50.16667v35.83333h35.83333v78.83333h-86zM57.33333,86v14.33333h57.33333v-14.33333zM57.33333,114.66667v14.33333h57.33333v-14.33333z">
                          </path>
                        </g>
                      </g>
                    </svg> </a>
                  <a class="text-btn">
                    DOKUMEN & REPOSITORY
                  </a>
                </a>
                <br>
                <a class="btn text-white btn-block btn-menu" style="background-color:#6D4C41">
                  <a class="logo-btn">
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 172 172"
                      style=" fill:#000000;">
                      <g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt"
                        stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0"
                        font-family="none" font-weight="none" font-size="none" text-anchor="none"
                        style="mix-blend-mode: normal">
                        <path d="M0,172v-172h172v172z" fill="none"></path>
                        <g fill="#ffffff">
                          <path
                            d="M35.83333,7.16667c-7.88333,0 -14.33333,6.45 -14.33333,14.33333v100.33333h14.33333v-100.33333h86v-14.33333zM64.5,35.83333c-7.88333,0 -14.33333,6.45 -14.33333,14.33333v100.33333c0,7.88333 6.45,14.33333 14.33333,14.33333h78.83333c7.88333,0 14.33333,-6.45 14.33333,-14.33333v-78.83333l-35.83333,-35.83333zM64.5,50.16667h50.16667v28.66667h28.66667v71.66667h-78.83333zM78.83333,93.16667v14.33333h50.16667v-14.33333zM78.83333,121.83333v14.33333h50.16667v-14.33333z">
                          </path>
                        </g>
                      </g>
                    </svg>
                  </a>
                  <a class="text-btn">
                    TUGAS AKHIR
                  </a>
                </a>
              </div>
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
  import profile from "@/assets/images/users/user.png"

  export default {
    name: 'Home',
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
      countSisaMasaStudi(ends) {
        let end = ends
        let tahun = 0
        let bulan = 0
        let hari = 0

        for (;;) {
          if (end >= 365) {
            tahun++
            end -= 365
          } else {
            break
          }
        }

        for (;;) {
          if (end >= 31) {
            bulan++
            end -= 31
          } else {
            break
          }
        }

        hari = end

        return tahun + " Tahun " + bulan + " Bulan " + hari + " Hari"
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
    text-decoration:none;
  }
</style>