<template>
  <nav v-for="(linkItem, index) in navLinks" :key="index" class="navbar">
    <RouterLink
      :to="linkItem.path"
      @click="$emit('sending-start')"
      class="nav__link"
      :class="{ 'active-link': linkItem.id === helpers.currentSection }"
    >
      {{ linkItem.text }}
    </RouterLink>
  </nav>
</template>

<script>
import { RouterLink } from 'vue-router'
import { useHelperStore } from '@/stores/helpers.js'

export default {
  setup() {
    const helpers = useHelperStore()
    return {
      helpers
    }
  },
  components: {
    RouterLink
  },
  props: {
    navLinks: {
      default: ''
    }
  },
  emits: ['sending-start']
}
</script>
