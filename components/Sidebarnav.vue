<template>
  <nav class="sidebar-nav sidebar-navcanvas" v-bind:class="{ active: $store.state.sidebar_active }">
    <h2 class="sidebar-title">Quiz Section</h2>
    <ul class="nav">
      <li class="nav-item active">
        <nuxt-link
          to="/quiz/section-1"
          class="nav-link">Section 1</nuxt-link>
      </li>
      <li class="nav-item">
        <nuxt-link
          to="/quiz/section-2"
          class="nav-link">Section 2</nuxt-link>
      </li>
      <li class="nav-item">
        <nuxt-link
          to="/quiz/section-3"
          class="nav-link">Section 3</nuxt-link>
      </li>
    </ul>
  </nav>
</template>