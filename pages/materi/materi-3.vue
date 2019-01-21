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
                  <h2>Pajak</h2>
                  <hr>
                  <p>
                    Pajak adalah nominal yang akan menambah nilai suatu barang. Pajak pada umumnya juga diberikan dalam satuan persen. Pajak untuk suatu barang akan menambah harga, namun untuk pajak terhadap gaji, hadiah, atau barang yang didapatkan akan mengurangi nilai atau harganya.
                  </p>
                  <nuxt-link to="/materi/materi-4" class="btn btn-success">Bunga tabungan</nuxt-link>
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
