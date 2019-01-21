<template>
  <nav class="sidebar-nav sidebar-navcanvas" v-bind:class="{ active: $store.state.sidebar_active }">
    <h5 class="sidebar-title">E-Learning Matematika</h5>
    <hr>
    <ul class="nav">
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" @click="dropDownMenu('materi_drop_down')" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" :aria-expanded="this.drop_down.materi_drop_down">Materi</a>
        
        <div class="dropdown-menu child-dropdown-menu pembahasan-child-menu" v-bind:class="{ show: this.drop_down.materi_drop_down }">
          <nuxt-link
            to="/materi/materi-1"
            class="nav-link">Materi 1</nuxt-link>
          <nuxt-link
            to="/materi/materi-2"
            class="nav-link">Materi 2</nuxt-link>
          <nuxt-link
            to="/materi/materi-3"
            class="nav-link">Materi 3</nuxt-link>
          <nuxt-link
            to="/materi/materi-4"
            class="nav-link">Materi 4</nuxt-link>
        </div>
      </li>
      <li class="nav-item dropdown" v-bind:class="{ show: this.drop_down.pembahasan_drop_down }">
        <a class="nav-link dropdown-toggle" @click="dropDownMenu('pembahasan_drop_down')" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" :aria-expanded="this.drop_down.pembahasan_drop_down">Pembahasan</a>
        
        <div class="dropdown-menu child-dropdown-menu pembahasan-child-menu" v-bind:class="{ show: this.drop_down.pembahasan_drop_down }">
          <nuxt-link
            to="/quiz/section-1"
            class="nav-link">Pembahasan 1</nuxt-link>
          <nuxt-link
            to="/quiz/section-2"
            class="nav-link">Pembahasan 2</nuxt-link>
          <nuxt-link
            to="/quiz/section-3"
            class="nav-link">Pembahasan 3</nuxt-link>
          <nuxt-link
            to="/quiz/section-4"
            class="nav-link">Pembahasan 4</nuxt-link>
          <nuxt-link
            to="/quiz/section-5"
            class="nav-link">Pembahasan 5</nuxt-link>
          <nuxt-link
            to="/quiz/section-6"
            class="nav-link">Pembahasan 6</nuxt-link>
          <nuxt-link
            to="/quiz/section-7"
            class="nav-link">Pembahasan 7</nuxt-link>
        </div>
      </li>
    </ul>
  </nav>
</template>
<script>
export default {
  data: function() {
    return {
      drop_down:{
        pembahasan_drop_down: false,
        materi_drop_down: false,
      }
    }
  },
  methods: {
    dropDownMenu(type_drop_down) {
      this.drop_down[type_drop_down] = !this.drop_down[type_drop_down];
    }
  }
}
</script>