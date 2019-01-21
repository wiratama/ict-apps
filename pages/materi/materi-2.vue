<template>
  <div>
    <headernav/>
    <div class="container-fluid page-body-wrapper">
      <sidebarnav/>
      
      <div class="main-panel">
        <div class="content-wrapper">
          
          <div class="row">
            <div class="col-12 grid-margin">
              <div class="card">
                <div class="card-body">
                  <h2>Persentase Untung Dan Rugi</h2>
                  <hr>
                  <p>Dalam proses perdagangan bebas selalu terjadi interaksi antara penjual dan pembeli tentang kecocokan harga. Pembeli menginginkan harga yang cukup murah atau terjangkau, sedangkan penjual menginginkan untung yang sebesar-besarnya. Besar untung atau rugi biasanya dinyatakan dengan nominal uang atau presentase. Dalam pembahasan ini, presentase untung dan rugi selalu dihitung dari harga beli barang. Penjelasan tentang persen dan penggunaannya dapat dilihat pada pembahasan berikut.</p>
                  <p>
                    <h5>1. Pengertian persen</h5>
                    <b>Persen</b> merupakan bentuk pecahan biasa yang ditulis sebagai x% dengan x bilangan nyata. Persen artinya per seratus, hal ini berarti persen adalah nama lain dari pecahan biasa yang penyebutnya bernilai seratus.<br>
                  </p>
                  <p>
                    <h5>2. Menentukan Persentase Untung dan Rugi terhadap Harga Pembelian</h5>
                    Penentuan persentase untung dan rugi selalu dihitung dari harga beli, kecuali dalam keadaan tertentu . perumusan persen untung dan persen rugi dapat dilihat sebagai berikut<br>
                    $$Pesentase\ untung\ dari\ harga\ beli\ =\ \frac {Untung}{Harga beli} \times 100\%$$
                  </p>
                  <p>
                    <h5>3. Rabat (diskon)</h5>
                    Dalam kehidupan sehari-hari, istilah Diskon sering dijumpai dalam bidang jual beli. Diskon adalah besaran potongan harga yang diberikan untuk suatu barang tertentu. Tujuan dari pemberian rabat (diskon) adalah sebagai ajang promosi agar pembeli mempunyai minat yang besar. Istilah ini sering dijumpai dalam perdagangan buku, alat-alat tulis dan kantor, pakaian, perumahan, dan produk laiinya.
                    $$Harga\ akhir\ =\ Harga\ awal\ -\ Diskon$$
                    <br>Diskon biasanya diberikan dengan satuan persen.
                  </p>
                  <p>
                    <h5>4. Bruto, Tara, dan Neto</h5>
                    Istilah bruto, tara dan neto sering digunakan dalam permasalahan berat barang. Dalam perdagangan, bruto berarti berat kotor, neto berarti berat bersih, dan tara sebagai potongan berat.<br>
                    <p class="content-indentation">
                      <b>1. Bruto</b>, bruto adalah istilah untuk perhitungan kotor dari suatu barang.
                      $$Bruto\ =\ Neto\ +\ Tara$$
                    </p>
                    <p class="content-indentation">
                      <b>2. Tara</b>, tara adalah selisih antara neto dan bruto.(berat kemasan).
                      $$Tara\ =\ Bruto\ –\ Neto$$
                    </p>
                    <p class="content-indentation">
                      <b>3. Neto</b>, neto adalah perhitungan bersih suatu barang.
                      $$Neto\ = Bruto\ –\ Tara$$
                    </p>
                  </p>
                  <nuxt-link to="/materi/materi-3" class="btn btn-success">Pajak</nuxt-link>
                </div>
              </div>
            </div>
          </div>
          
          <footerbar/>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import Sidebarnav from '~/components/Sidebarnav.vue'
import Headernav from '~/components/Headernav.vue'
import Footerbar from '~/components/Footerbar.vue'

export default {
  mounted() {
    MathJax.Hub.Queue(["Typeset",MathJax.Hub]);
  },
  components: {
    Sidebarnav,
    Headernav,
    Footerbar
  },
}
</script>
