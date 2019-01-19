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
                  <h2>Simple ICT - Quiz Apps</h2>
                  <hr>
                  <nuxt-link to="/quiz/section-1" class="btn btn-success">Let's begin the game</nuxt-link>
                  <h4 class="app-body-powered">Made with love by <b>Ni Made Ary Wirdayanti - 1823011019</b></h4>
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
  }
}
</script>
