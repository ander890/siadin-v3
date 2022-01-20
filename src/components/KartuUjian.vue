<template>
    <table class="table table-responsive">
        <thead>
            <tr>
                <th rowspan="2">No</th>
                <th rowspan="2">Kdmk</th>
                <th rowspan="2">Nama Mata Kuliah</th>
                <th rowspan="2">SKS</th>
                <th rowspan="2">Klpk</th>
                <th rowspan="2">Absen</th>
                <th rowspan="2">Ijinkan Ujian</th>
                <th colspan="4">Teori</th>
                <th colspan="4">Praktek</th>
            </tr>
            <tr>
                <th>Hari, Tanggal</th>
                <th>Jam</th>
                <th>Ruang</th>
                <th>No.Kursi</th>
                <th>Hari, Tanggal</th>
                <th>Jam</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>1</td>
                <td>A11.54101</td>
                <td>
                    <a href="#" class="data" id="2" value="A11.54101" title="Data Mata Kuliah">KALKULUS 1</a> </td>
                <td>4</td>
                <td>A11.4103</td>
                <td>
                    <a class="btn btn-success btn-block absen">100%</a>
                </td>
                <td>Default</td>
                <td>Selasa, 11 Januari 2022</td>
                <td>10.20-12.00</td>
                <td>
                    <strong></strong>
                </td>
                <td>
                    <strong></strong>
                </td>
                <td>-</td>
                <td></td>
                <!--<td colspan="6" style="color: red;font-style: italic">Jadwal Belum Tersedia.</td>-->
            </tr>
            <tr>
                <td>2</td>
                <td>A11.54105</td>
                <td>
                    <a href="#" class="data" id="2" value="A11.54105" title="Data Mata Kuliah">DASAR PEMROGRAMAN</a>
                </td>
                <td>4</td>
                <td>A11.4103</td>
                <td>
                    <a class="btn btn-success btn-block absen">100%</a>
                </td>
                <td>Default</td>
                <td>Kamis, 13 Januari 2022</td>
                <td>14.10-16.20</td>
                <td>
                    <strong></strong>
                </td>
                <td>
                    <strong></strong>
                </td>
                <td>Kamis, 13 Januari 2022</td>
                <td>14.10-16.20</td>
                <!--<td colspan="6" style="color: red;font-style: italic">Jadwal Belum Tersedia.</td>-->
            </tr>
            <tr>
                <td>3</td>
                <td>A11.54302</td>
                <td>
                    <a href="#" class="data" id="2" value="A11.54302" title="Data Mata Kuliah">MATEMATIKA DISKRIT</a>
                </td>
                <td>3</td>
                <td>A11.4103</td>
                <td>
                    <a class="btn btn-success btn-block absen">92.86%</a>
                </td>
                <td>Default</td>
                <td>Jumat, 14 Januari 2022</td>
                <td>09.30-12.00</td>
                <td>
                    <strong></strong>
                </td>
                <td>
                    <strong></strong>
                </td>
                <td>-</td>
                <td></td>
                <!--<td colspan="6" style="color: red;font-style: italic">Jadwal Belum Tersedia.</td>-->
            </tr>
            <tr>
                <td>4</td>
                <td>A11.54314</td>
                <td>
                    <a href="#" class="data" id="2" value="A11.54314" title="Data Mata Kuliah">PEMROGRAMAN BERBASIS
                        WEB</a> </td>
                <td>2</td>
                <td>A11.4103</td>
                <td>
                    <a class="btn btn-success btn-block absen">100%</a>
                </td>
                <td>Default</td>
                <td>Senin, 17 Januari 2022</td>
                <td>13.00-14.40</td>
                <td>
                    <strong></strong>
                </td>
                <td>
                    <strong></strong>
                </td>
                <td>-</td>
                <td></td>
                <!--<td colspan="6" style="color: red;font-style: italic">Jadwal Belum Tersedia.</td>-->
            </tr>
            <tr>
                <td>5</td>
                <td>A11.54403</td>
                <td>
                    <a href="#" class="data" id="2" value="A11.54403" title="Data Mata Kuliah">ORGANISASI DAN ARSITEKTUR
                        KOMPUTER</a> </td>
                <td>3</td>
                <td>A11.4103</td>
                <td>
                    <a class="btn btn-success btn-block absen">100%</a>
                </td>
                <td>Default</td>
                <td>Selasa, 18 Januari 2022</td>
                <td>12.30-15.00</td>
                <td>
                    <strong></strong>
                </td>
                <td>
                    <strong></strong>
                </td>
                <td>-</td>
                <td></td>
                <!--<td colspan="6" style="color: red;font-style: italic">Jadwal Belum Tersedia.</td>-->
            </tr>
            <tr>
                <td>6</td>
                <td>AF201704</td>
                <td>
                    <a href="#" class="data" id="2" value="AF201704" title="Data Mata Kuliah">DASAR DASAR KOMPUTASI</a>
                </td>
                <td>2</td>
                <td>A11.4103</td>
                <td>
                    <a class="btn btn-success btn-block absen">92.86%</a>
                </td>
                <td>Default</td>
                <td>-</td>
                <td></td>
                <td>
                    <strong></strong>
                </td>
                <td>
                    <strong></strong>
                </td>
                <td>Rabu, 12 Januari 2022</td>
                <td>10.35-12.15</td>
                <!--<td colspan="6" style="color: red;font-style: italic">Jadwal Belum Tersedia.</td>-->
            </tr>
            <tr>
                <td>7</td>
                <td>U201704</td>
                <td>
                    <a href="#" class="data" id="2" value="U201704" title="Data Mata Kuliah">PENGANTAR TEKNOLOGI
                        INFORMASI</a> </td>
                <td>2</td>
                <td>A11.4MATR</td>
                <td>
                    <a class="btn btn-danger btn-block absen">0%</a>
                </td>
                <td>Default</td>
                <td colspan="6" style="color:red"><i>Absen anda kurang dari 1%.Silahkan Hubungi Dosen Pengampu.</i></td>
            </tr>
        </tbody>
    </table>
</template>