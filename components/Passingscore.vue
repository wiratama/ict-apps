<template>
  <div class="col-12 grid-margin">
    <div class="card">
      <div class="card-body">
          <h5 clas="section-title">Passing score</h5>
          <hr>
          <p class="section-question">
          {{ scoreValue }}
          </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted(){
    this.$store.dispatch('addScoreValue')
  },
  computed : {
    scoreValue(){
      return this.$store.getters.getScoreValue
    }
  }
}
</script>

