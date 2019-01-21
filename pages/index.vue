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
                  <h1>ARITMATIKA SOSIAL</h1>
                  <hr>
                  <p class="section-materi">
                    <b>Aritmetika sosial</b> merupakan salah satu materi matematika yang mempelajari operasi dasar suatu bilangan yang berkaitan dengan kehidupan sehari-hari.
                  </p>
                  <p class="section-materi">
                    Dalam kehidupan sehari-hari kegiatan jual beli atau perdagangan sering dijumpai. Dalam perdagangan terdapat penjual dan pembeli. Jika kita ingin memperoleh barang yang kita inginkan maka kita harus melakukan pertukaran untuk mendapatkannya. Misalnya penjual menyerahkan barang kepada pembeli sebagai gantinya pembeli menyerahkan uang sebagai penganti barang kepada penjual.
                  </p>
                  <p class="section-materi">
                    Seorang pedagang membeli barang dari pabrik untuk dijual lagi dipasar. Harga barang dari pabrik disebut modal atau harga pembelian sedangkan harga dari hasil penjualan barang disebut harga penjualan.
                  </p>
                  <p class="section-materi">
                    <b>Dalam aritmetika sosial akan dijumpai beberapa hal, antara lain :</b>
                    <ul class="intro-list">
                      <li>
                        1. Untung, Rugi, Harga pembelian, Harga penjualan
                      </li>
                      <li>
                        2. Persentase untung dan rugi
                      </li>
                      <li>
                        3. Diskon
                      </li>
                      <li>
                        4. Pajak
                      </li>
                      <li>
                        5. Bunga tabungan
                      </li>
                      <li>
                        6. Bruto, tara, neto
                      </li>
                    </ul>
                  </p>
                  <nuxt-link to="/materi/materi-1" class="btn btn-success">Harga beli, harga jual,keuntungan dan kerugian.</nuxt-link>
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
  components: {
    Sidebarnav,
    Headernav,
    Footerbar
  },
}
</script>
