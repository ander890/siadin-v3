<template>
    <div class="content-page" style="margin-left: 0px !important; margin-top:90px !important">
        <div class="content">
            <div class="container-fluid">
                <div id="rp">
                    <h2>Informasi Tagihan Periode Awal Semester 2021-2022 Genap</h2>
                    <h3 style="text-align:justify;color: #00bfff; font-weight: bold">A11.2021.13308 - DANIEL ALEXANDER
                    </h3>
                    <h4>Gelombang Pendaftaran : PMDKII</h4>
                    <hr>
                    <div class="row">
                        <div class="col-md-6">
                            <div class="col-md-12 tbtagihan1">
                                <span class="info_kekurangan">
                                    <p class="alert alert-warning" style="text-align:center;font-size: x-large;">
                                        Kekurangan Pembayaran : Rp 4.850.000,00</p>
                                </span>

                                <tfeet>
                                </tfeet>
                                <table class="table table-hover" style="background-color: #edeaea">
                                    <thead>
                                        <tr>
                                            <th colspan="4">DATA TAGIHAN</th>
                                        </tr>
                                        <tr>
                                            <th colspan="2">Kewajiban Sekarang</th>
                                            <th colspan="2">Kekurangan Lalu</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Gedung</td>
                                            <td> Rp 2.600.000,00</td>
                                            <td>Gedung</td>
                                            <td> Rp 0,00</td>
                                        </tr>
                                        <tr>
                                            <td>SPP</td>
                                            <td> Rp 2.250.000,00</td>
                                            <td>SPP</td>
                                            <td> Rp 0,00</td>
                                        </tr>
                                        <tr>
                                            <td>Poliklinik</td>
                                            <td> Rp 0,00</td>
                                            <td>Poliklinik</td>
                                            <td> Rp 0,00</td>
                                        </tr>
                                        <tr>
                                            <td>SKS</td>
                                            <td> Rp 0,00</td>
                                            <td>SKS</td>
                                            <td> Rp 0,00</td>
                                        </tr>
                                        <tr>
                                            <td>Modul</td>
                                            <td> Rp 0,00</td>
                                            <td>Modul</td>
                                            <td> Rp 0,00</td>
                                        </tr>
                                        <tr>
                                            <td>BK</td>
                                            <td> Rp 0,00</td>
                                            <td>BK</td>
                                            <td> Rp 0,00</td>
                                        </tr>
                                    </tbody>
                                    <tbody>
                                        <tr>
                                            <td><strong>Total Kewajiban</strong></td>
                                            <td><strong> Rp 4.850.000,00</strong></td>
                                            <td><strong>Total Kekurangan</strong></td>
                                            <td><strong> Rp 0,00</strong></td>
                                        </tr>

                                        <tr class="tbtagihan2" style="color: #4169e1">
                                            <td><strong>Total Tagihan</strong></td>
                                            <td colspan="2" id="lbl_tagihan" style="font-weight: bold"> Rp 4.850.000,00
                                            </td>
                                        </tr>
                                        <tr class="tbtagihan2" style="color: #c9661e">
                                            <td><strong>Terbayar</strong></td>
                                            <td colspan="2" id="lbl_terbayar" style="font-weight: bold">Rp 0,00</td>
                                        </tr>
                                        <tr class="tbtagihan2" style="color: red">
                                            <td><strong>Sisa Belum Terbayar</strong></td>
                                            <td colspan="2" id="lbl_sisa" style="font-weight: bold">Rp 4.850.000,00</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div class="col-md-12" style="margin-left: 0px">
                                <table class="table table-hover" style="background-color: #edeaea">
                                    <tbody>
                                        <tr>
                                            <td style="width: 28%">Status Pembayaran <strong>KRS</strong><br>2021-2022
                                                Genap</td>
                                            <td style="width: 37%">
                                                <b>
                                                    <font color="red">Belum Lunas </font>
                                                </b></td>
                                            <td style="width: 35%">
                                                <!--<strong>Terakhir Pembayaran</strong> :<br>-->
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Pembayaran Tercatat di BIKU</td>
                                            <td>-</td>
                                            <td>
                                                <!-- <a href="pdf_tagihan" target="_blank" title="Download Tagihan"><img src="" style="width: 15px;height: 15px;"> Tagihan</a><br> -->
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Dicatat Oleh</td>
                                            <td>-</td>
                                            <td> </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <span id="m_bayar_stat" style="display:none"></span>
                        </div>
                        <div class="col-md-6">
                            <div class="col-md-12" style="margin-left: 0px">
                                <div class="alert alert-info">
                                    <p
                                        style="padding:10px;text-align:justify;color: maroon; font-weight: bold;background-color: #f7d7d7">
                                        Note :
                                        <br>Catatan Penting :
                                        <br>1. Rektor memberikan kebijakan berupa subsidi biaya poliklinik khusus di
                                        Periode Semester Genap 2021/2022 dan Biku telah memprosesnya.
                                        <br>2. Tagihan Periode Awal Semester Genap 2021/2022 bisa mulai dibayarkan pada
                                        tanggal 20 Januari 2022.
                                        <br>3. Batas waktu pembayaran Tagihan Periode Awal Semester Genap 2021/2022,
                                        bisa dibayarkan maksimal 1 minggu sebelum pelaksanaan Input KRS dimulai. (info
                                        krs silahkan cek di krs.dinus.ac.id atau Biro Akademik)
                                        <br>4. Status Bisa mengikuti Input KRS akan di informasikan 1 minggu sebelum
                                        pelaksanaan Input KRS berlangsung.
                                    </p>

                                    <hr style="margin-top: 5px;margin-bottom: 5px;">
                                    <strong>Metode Pembayaran <br>
                                        <span>REGULER (SPP,SKS,POLI,MODUL,USPI)</span></strong><br><br>

                                    1. Virtual Account Bank Jateng (AutoValidasi)<br>
                                    <span style="font-size: x-large;">(0102) 111 21 13308</span><br>
                                    Rek atas nama DANIEL ALEXANDER<br>
                                    (tutorialnya <a href="https://dinus.ac.id/file/ALUR PROSES PEMBAYARAN UDINUS.pdf"
                                        target="_blank">disini</a> , <a
                                        href="https://drive.google.com/drive/u/0/folders/1YlzoZa_FkgwxGnjAyJRNStPAWnfqsvOz"
                                        target="_blank">disini</a>).<br><br>

                                    2. Rekening Mandiri Virtual Account (AutoValidasi H+1):: <br>
                                    <span style="font-size: x-large;">88764 111 21 13308</span><br>
                                    Rek atas nama DANIEL ALEXANDER<br>
                                    (tutorialnya <a href="http://bit.ly/mva-udinus" target="_blank">disini</a>).<br><br>
                                    Note:<br>
                                    &nbsp;&nbsp;&nbsp;- Tidak Wajib Konfirmasi karena otomatis terupdate 1x24 jam.<br>
                                    &nbsp;&nbsp;&nbsp;- Pembayaran kuliah reguler hanya dapat dijalankan menggunakan
                                    metode pembayaran di atas.<br>

                                    <!-- <a href="pdf_bukti_bayar" target="_blank" title="Download Form Bukti Transfer Pembayaran"><img src="https://siadin.dinus.ac.id/assets/img/pdf-icon.png" style="width: 15px;height: 15px;"> Form Bukti Transfer Bayar</a><br><br>  -->

                                    <!-- PERHATIAN :<br>
                Untuk Metode Pembayaran <strong>NON-REGULER</strong> (Biaya Sidang, Wisuda, Non-Reguler lainnya) hanya dapat dibayarkan secara TUNAI di :<br>
                1. Bank Jateng Capem UDINUS (Gedung G Lt.1).<br>
                2. Bank BRI Kantor Kas UDINUS (Gedung A Lt.1).<br> -->

                                    <hr style="margin-top: 5px;margin-bottom: 5px;">
                                    <p style="text-align: justify">
                                        <strong>HOTLINE BIRO KEUANGAN</strong><br>
                                        <img src="https://siadin.dinus.ac.id/assets/img/WhatsApp-icon.png"
                                            style="width: 15px;height: 15px;"> WA BIKU OFFICIAL 081226087007<br><br>
                                        <strong>Konsultasi Administrasi Keuangan</strong><br>
                                        <img src="https://siadin.dinus.ac.id/assets/img/WhatsApp-icon.png"
                                            style="width: 15px;height: 15px;"> Bapak Triatmo&nbsp;&nbsp;:
                                        081215992479<br>
                                        <img src="https://siadin.dinus.ac.id/assets/img/WhatsApp-icon.png"
                                            style="width: 15px;height: 15px;"> Ibu
                                        Yunita&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: 081225026179<br><br>
                                        Infomasi melalui Website : <a href="http://informasi-biku.dinus.ac.id/"
                                            target="_blank">informasi-biku.dinus.ac.id</a><br><br>
                                        <strong>HARI PELAYANAN&nbsp;: Senin - Jumat</strong><br>
                                        <strong>JAM PELAYANAN&nbsp;&nbsp;: 09.00 - 15.00</strong><br>
                                    </p>
                                </div>
                            </div>
                            <!-- <div class="col-md-12" style="margin-left: 0px">
                    </div>-->
                        </div>
                    </div>

                    <div id="bedahari"></div>
                </div>
            </div>
        </div>
    </div>
</template>