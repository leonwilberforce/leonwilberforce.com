<template>
  <section id="contact-me">
    <div class="container">
      <a class="anchor" id="contact-nav"></a>
      <div class="row">
        <div class="col-12">
          <h1>Contact me:</h1>
          <p>
            If you would like to discuss any of my work or ask about freelance
            work, feel free to contact me via the form to your right or though
            the email below.
          </p>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-6">
          <div class="form-group">
            <label for="nameInput">Name</label>
            <input
              type="text"
              class="form-control"
              id="nameInput"
              placeholder="Enter name"
            />
          </div>
        </div>
        <div class="col-sm-6">
          <div class="form-group">
            <label for="emailInput">Email</label>
            <input
              type="email"
              class="form-control"
              id="emailInput"
              placeholder="Enter email"
            />
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <div class="form-group">
            <label for="messageInput">Your Message</label>
            <textarea
              id="messageInput"
              class="form-control"
              rows="5"
              placeholder="Your message"
            ></textarea>
          </div>
          <a href="" class="btn btn-primary btn-lg">Send Message</a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "ContactMe"
};
</script>

<style scoped>
#contact-me {
  background-color: #d1d1d1;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
}
</style>
