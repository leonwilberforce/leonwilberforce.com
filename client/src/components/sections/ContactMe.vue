<template>
  <section id="contact-me">
    <div class="container">
      <a class="anchor" id="contact-nav"></a>
      <h1>Contact me:</h1>
      <transition name="fade" mode="out-in">
        <div class="row" v-if="!emailSent">
          <div class="col-12">
            <p>
              If you would like to discuss any of my work, feel free to contact me via the form below or each out on social media.
            </p>
            <div class="row">
              <div class="col-sm-6">
                <div class="form-group">
                  <label for="nameInput">Name</label>
                  <input v-model="name" type="text" class="form-control" id="nameInput" placeholder="Enter name" />
                </div>
              </div>

              <div class="col-sm-6">
                <div class="form-group">
                  <label for="emailInput">Email</label>
                  <input v-model="email" type="email" class="form-control" id="emailInput" placeholder="Enter email" />
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-12">
                <div class="form-group">
                  <label for="messageInput">Your Message</label>
                  <textarea v-model="message" id="messageInput" class="form-control" rows="5" placeholder="Your message"></textarea>
                </div>
                <a @click="sendMessage" class="btn btn-primary btn-lg">Send Message</a>
              </div>
            </div>
          </div>
        </div>
        <div class="row" v-else>
          <div class="col-lg-6 offset-lg-3 text-center">
            <div class="contact-thank-you">
              <h4>Thank You</h4>
              <p>Thank you for your message.<br />I will get back to you as soon as I can.</p>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </section>
</template>

<script>
import ContactService from "@/services/contact.service.js";

export default {
  name: "ContactMe",
  data() {
    return {
      name: "",
      email: "",
      message: "",
      emailSent: false
    };
  },
  methods: {
    sendMessage() {
      ContactService.sendContactEmail(this.name, this.email, this.message)
        .then(() => {
          this.emailSent = true;
        })
        .catch(() => {
          // TODO
        });
    }
  }
};
</script>

<style scoped>
#contact-me {
  background-color: #d1d1d1;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
}

.contact-thank-you {
  padding: 50px;
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
