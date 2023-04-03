<template>
  <div class="main__content">
    <section
      v-for="section in sectionsData"
      :key="section.id"
      ref="sections"
      class="section"
      :class="section.id"
      :id="section.id"
    >
      <component :is="section.component"></component>
    </section>
  </div>
</template>
<script>
import HomeElement from '@/components/home/01_Home.vue'
import AboutElement from '@/components/home/02_About.vue'
import GoalsElement from '@/components/home/03_Goals.vue'
import OffersElement from '@/components/home/04_Offers.vue'
import ContactElement from '@/components/home/05_Contact.vue'
import { useHelperStore } from '@/stores/helpers.js'

export default {
  components: {
    HomeElement,
    AboutElement,
    GoalsElement,
    OffersElement,
    ContactElement
  },
  data() {
    return {
      sectionsData: [
        {
          id: 'home',
          component: 'HomeElement'
        },
        {
          id: 'about',
          component: 'AboutElement'
        },
        {
          id: 'goals',
          component: 'GoalsElement'
        },
        {
          id: 'offers',
          component: 'OffersElement'
        },
        {
          id: 'contact',
          component: 'ContactElement'
        }
      ]
    }
  },
  setup() {
    const helpers = useHelperStore()
    return {
      helpers
    }
  },
  mounted() {
    window.addEventListener('scroll', () => {
      this.onScroll()
    })
    console.log(this.$refs.sections)
  },
  methods: {
    onScroll() {
      let scrollY = window.pageYOffset
      this.$refs.sections.forEach((current) => {
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50,
          sectionId = current.getAttribute('id')
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          this.helpers.currentSection = sectionId
        }
      })
    }
  }
}
</script>
