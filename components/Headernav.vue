<template>
  <ul class="nav d-flex justify-content-end fixed-top top-nav-bar">
    <li class="nav-item">
      <a class="nav-link active">E-Learning</a>
    </li>
    <li class="nav-item">
      <button class="navbar-toggler d-lg-none" type="button" @click="sidebarMenu">
        <span class="oi" data-glyph="menu"></span>
      </button>
    </li>
  </ul>
</template>

<script>
export default {
  methods: {
    sidebarMenu() {
      let _show_sidebar = this.$store.state.sidebar_active;
      this.$store.commit('shoHideSidebar', !_show_sidebar);
    }
  }
}
</script>
