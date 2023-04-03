<template>
  <h1>Erfolge</h1>

  <swiper
    :effect="'creative'"
    :creativeEffect="{
      prev: {
        shadow: true,
        translate: [0, 0, -400]
      },
      next: {
        translate: ['100%', 0, 0]
      }
    }"
    :pagination="true"
    :modules="modules"
    :navigation="true"
    class="portfolio-box"
  >
    <swiper-slide
      ><div class="portfolio-box">
        <img src="../../assets/images/manu-fight1.jpeg" alt="" />
        <div class="portfolio-layer">
          <h2>Meisterschaft</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas consequuntur dolor ipsum,
            expedita neque, sunt sint harum sit tenetur.
          </p>
        </div>
      </div></swiper-slide
    >
    <swiper-slide>
      <div class="portfolio-box">
        <img src="../../assets/images/manu-fight3.jpeg" alt="" />
        <div class="portfolio-layer">
          <h2>Meisterschaft</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas consequuntur dolor ipsum,
            expedita neque, sunt sint harum sit tenetur.
          </p>
        </div>
      </div></swiper-slide
    >
    <swiper-slide>
      <div class="portfolio-box">
        <div class="portfolio-img">
          <img src="../../assets/images/manu-fight4.jpeg" alt="" />
        </div>
        <div class="portfolio-layer">
          <h2>Meisterschaft</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas consequuntur dolor ipsum,
            expedita neque, sunt sint harum sit tenetur.
          </p>
        </div>
      </div>
    </swiper-slide>
    ...
  </swiper>
</template>
<script>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Pagination, EffectCreative } from 'swiper'

export default {
  components: {
    Swiper,
    SwiperSlide
  },
  setup() {
    return {
      modules: [Pagination, Navigation, EffectCreative]
    }
  }
}
</script>
