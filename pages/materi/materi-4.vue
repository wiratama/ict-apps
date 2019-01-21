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
                  <h2>Bunga tabungan</h2>
                  <hr>
                  Hal-hal yang perlu diperhatikan dalam menghitung bunga tunggal <br>
                  <p class="content-indentation">
                    1. Uang yang dipinjamkan disebut modal dan disimbolkan dengan M
                  </p>
                  <p class="content-indentation">
                    2. Uang tambahan yang dibayarkan untuk penggunaan yang lainnya (modal) disebut bunga dan disimbolkan dengan b. 
                  </p>
                  <p>Rumus yang sering digunakan untuk menuliskan hubungan antara modal (M), suku bunga (b%), jangka waktu (n tahun), dan bunga tunggal (BT)</p>
                  <p>$$BT\ =\ \frac {M\ \times b\ \times n}{100}$$</p>
                  <p>$$M\ =\ \frac {100\ \times BT}{b\ \times n}$$</p>
                  <p>$$b\ =\ \frac {100\ \times BT}{M\ \times n}$$</p>
                  <p>$$n\ =\ \frac {100\ \times BT}{M\ \times b}$$</p>
                  <nuxt-link to="/quiz/section-1" class="btn btn-success">Pembahasan</nuxt-link>
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
