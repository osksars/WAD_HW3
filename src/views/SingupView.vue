<template>

  <HeaderComponent></HeaderComponent>

  <div class="singup">
    <form action="App.vue" class="form">
      <text>Email</text>
      <input type="email" placeholder="Email" required class="email"/> <br />
      <text>Password</text>
      <input type="password" placeholder="Password" required class="password"/> <br />
      <button class="logInButton">Signup</button>
    </form>
  </div>

  <FooterComponent></FooterComponent>
  
</template>

<script>
import FooterComponent from '@/components/FooterComponent.vue';
import HeaderComponent from '@/components/HeaderComponent.vue';

export default {
  name: "SignupView",
  components: {
    HeaderComponent,
    FooterComponent
  },
  data: function() {
    return {}
  },
};
</script>

<style>
  * {
    border-radius: 30px;
  }
  
</style>