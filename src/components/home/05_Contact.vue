<template>
  <h1>Kontakt</h1>
  <p class="contact__text">
    Du möchtest mehr darüber wissen, wie die Training-Einheiten stattfinden? Oder hast du interesse
    an einenr Individuellen Ernährungsberatung?
  </p>
  <p>Dann nutz hier die Möglichkeit mir zu schreiben</p>
  <div class="contact-box">
    <form ref="contactform" @submit.prevent="sendEmail" class="contact__form">
      <div class="contact__form-head">
        <div class="input__container">
          <input
            class="input"
            type="text"
            v-model="name"
            name="user_name"
            placeholder="Your Name"
          />
        </div>
        <div class="input__container">
          <input
            class="input"
            type="email"
            v-model="email"
            name="user_email"
            placeholder="Your Email"
          />
        </div>
      </div>
      <div class="input__container">
        <input class="input" type="text" v-model="subject" name="subject" placeholder="Subject" />
      </div>
      <div class="input__container textarea">
        <textarea
          class="input"
          name="user_project"
          v-model="message"
          placeholder="Message"
        ></textarea>
      </div>
      <button type="submit" class="btn">Send Message<i class="bx bx-right-arrow-alt"></i></button>
    </form>
  </div>
</template>
<script>
import emailjs from '@emailjs/browser'
export default {
  components: {},
  setup() {
    return {
      name: '',
      email: '',
      subject: '',
      message: ''
    }
  },
  methods: {
    sendEmail() {
      const form = this.$refs.contactform
      emailjs.sendForm('service_pvkjntj', 'template_6ytyosq', form, 'DsZHBt1lwbMV_UDGP').then(
        () => {},
        (error) => {
          alert('Something has failed....' + { error })
        }
      )
    }
  }
}
</script>
