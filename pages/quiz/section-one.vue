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
                  <h2>This is section one</h2>
                  <hr>
                  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente porro minima, tempora repudiandae quaerat amet natus et repellendus possimus, iusto temporibus magni? Facere illo recusandae voluptatum placeat cupiditate aliquam nesciunt!</p>
                </div>
              </div>
            </div>
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
