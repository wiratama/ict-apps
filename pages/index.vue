<template>
  <div>
    <headernav/>
    <div class="container-fluid page-body-wrapper">
      <sidebarnav/>
      <div class="main-panel">
        Content
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
