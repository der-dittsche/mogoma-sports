<template>
  <header class="header-menu">
    <a href="#" class="logo">MaGoMa</a>
    <div class="nav__toggler" @click="toggleNav">
      <i class="bx bx-menu" :class="{ hidden: togglenav }"></i>
      <i class="bx bx-x" :class="{ hidden: !togglenav }"></i>
    </div>
    <div class="navbar" :class="{ showmobile: togglenav }">
      <NavbarView :navLinks="navLinks" @sending-start="getToggleStatus" />
    </div>
  </header>

  <main>
    <RouterView />
    <footer>
      <FooterView />
    </footer>
  </main>
</template>

<script>
import { RouterView } from 'vue-router'
import NavbarView from './components/NavbarView.vue'
import FooterView from './components/FooterView.vue'
import { ref } from 'vue'

export default {
  components: {
    RouterView,
    NavbarView,
    FooterView
  },
  data() {
    return {
      navLinks: [
        {
          text: 'Home',
          path: '/#home',
          id: 'home'
        },
        {
          text: 'Über mich',
          path: '/#about',
          id: 'about'
        },
        {
          text: 'Erfolge',
          path: '/#goals',
          id: 'goals'
        },
        {
          text: 'Angebote',
          path: '/#offers',
          id: 'offers'
        },
        {
          text: 'Kontakt',
          path: '/#contact',
          id: 'contact'
        }
      ],
      togglenav: ref(false)
    }
  },
  methods: {
    getToggleStatus() {
      this.togglenav = !this.togglenav
    },
    toggleNav() {
      this.togglenav = !this.togglenav
    }
  }
}
</script>
