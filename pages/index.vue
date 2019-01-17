<template>
  <div>
    <headernav/>
    <div class="container-fluid page-body-wrapper">
      <sidebarnav/>
      
      <div class="main-panel">
        <div class="content-wrapper">
          <div class="row">
            <div class="col-6 grid-margin"><div class="card"><div class="card-body"><h2>Content</h2></div></div></div>
            <div class="col-6 grid-margin"><div class="card"><div class="card-body"><h2>Content</h2></div></div></div>
            <div class="col-6 grid-margin"><div class="card"><div class="card-body"><h2>Content</h2></div></div></div>
            <div class="col-6 grid-margin"><div class="card"><div class="card-body"><h2>Content</h2></div></div></div>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import Sidebarnav from '~/components/Sidebarnav.vue'
import Headernav from '~/components/Headernav.vue'

export default {
  components: {
    Sidebarnav,
    Headernav
  }
}
</script>
