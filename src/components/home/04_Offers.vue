<template>
  <h1>Service</h1>
  <div class="service-header">
    <img src="../../assets/images/manu-fight2.jpeg" alt="" />
    <h2>Du möchtest auch in den Ring?</h2>
  </div>
  <div class="service-container">
    <div class="service-box">
      <div class="service-img">
        <img src="../../assets/images/manu-training2.jpg" alt="" />
      </div>
      <div class="service-layer">
        <h4>Individuales Training</h4>
        <p class="btn" @click="isOpenModal1 = true">weitere Informationen</p>
      </div>
    </div>
    <div class="service-box">
      <div class="service-img">
        <img src="../../assets/images/manu-training1.jpeg" alt="" />
      </div>
      <div class="service-layer">
        <h4>Gruppen Training</h4>
        <p class="btn" @click="isOpenModal2 = true">weitere Informationen</p>
      </div>
    </div>
    <div class="service-box">
      <div class="service-img">
        <img src="../../assets/images/manu-training3.jpg" alt="" />
      </div>
      <div class="service-layer">
        <h4>Ernährungsberatung</h4>
        <p class="btn" @click="isOpenModal3 = true">weitere Informationen</p>
      </div>
    </div>
  </div>
  <div class="modal" v-if="isOpenModal1" @click="isOpenModal1 = false">
    <div class="modalbox">
      <i class="bx bx-x-circle modal-close-btn" @click="isOpenModal1 = false"></i>
      <div class="modalbox-content">
        <h4>Individuelles Training</h4>
        <ul>
          <li>Punkt 1</li>
          <li>Punkt 2</li>
          <li>Punkt 3</li>
          <li>Punkt 4</li>
          <li>Punkt 5</li>
        </ul>
      </div>
    </div>
  </div>
  <div class="modal" v-if="isOpenModal2" @click="isOpenModal2 = false">
    <div class="modalbox">
      <i class="bx bx-x-circle modal-close-btn" @click="isOpenModal2 = false"></i>
      <div class="modalbox-content">
        <h4>Gruppen Training</h4>
        <ul>
          <li>Punkt 1</li>
          <li>Punkt 2</li>
          <li>Punkt 3</li>
          <li>Punkt 4</li>
          <li>Punkt 5</li>
        </ul>
      </div>
    </div>
  </div>
  <div class="modal" v-if="isOpenModal3" @click="isOpenModal3 = false">
    <div class="modalbox">
      <i class="bx bx-x-circle modal-close-btn" @click="isOpenModal3 = false"></i>
      <div class="modalbox-content">
        <h4>Ernährungsberatung</h4>
        <ul>
          <li>Punkt 1</li>
          <li>Punkt 2</li>
          <li>Punkt 3</li>
          <li>Punkt 4</li>
          <li>Punkt 5</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOpenModal1: false,
      isOpenModal2: false,
      isOpenModal3: false
    }
  }
}
</script>
