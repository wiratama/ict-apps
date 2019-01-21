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
                  <h2>Harga beli, harga jual, keuntungan dan kerugian</h2>
                  <hr>
                  <p>Dalam perdagangan kita sering mendengar atau menggunakan istilah-istilah seperti harga beli, harga jual,keuntungan dan kerugian.</p>
                  <p>
                    <h5>1. Untung</h5>
                    <b>Untung</b> adalah selisih yang didapat antara harga penjualan suatu barang dengan harga pembeliannya dengan syarat nilai harga jual lebih tinggi dari harga pembelian.<br>
                    <b>Untung = harga jual – harga beli</b>
                  </p>
                  <p>
                    <h5>2. Rugi</h5>
                    <b>Rugi</b> adalah selisih yang didapat antara harga penjualan suatu barang dengan harga pembeliannya dengan syarat nilai harga jual lebih rendah dari harga pembelian.<br>
                    <b>Rugi = harga beli – harga jual</b>
                  </p>
                  <p>
                    <h5>3. Harga pembelian</h5>
                    <b>Harga pembelian</b> adalah harga barang dari pabri, grosir atau tempat lainnya
                  </p>
                  <p>
                    <h5>4. Harga penjualan</h5>
                    <b>Harga penjualan</b> adalah harga yang ditetapkan penjual kepada pembeli
                  </p>
                  <nuxt-link to="/materi/materi-2" class="btn btn-success">Persentase Untung Dan Rugi</nuxt-link>
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
