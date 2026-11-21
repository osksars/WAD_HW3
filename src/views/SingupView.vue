<template>

  <HeaderComponent></HeaderComponent>

  <div class="singup">
    <form @submit.prevent="handleSignup" class="form">
      <div class="form-group">
        <label for="email">Email</label>
        <input id="email" v-model="email" type="email" placeholder="Email" required class="email" />
      </div>

      <div class="form-group">
        <label for="password">Password</label>
        <input id="password" v-model="password" type="password" placeholder="Password" required class="password" />
      </div>

      <div v-if="passwordErrors.length > 0" class="error-box">
        <p class="error-title">The password is not valid:</p>
        <ul>
          <li v-for="(error, index) in passwordErrors" :key="index">
            {{ error }}
          </li>
        </ul>
      </div>

      <button type="submit" class="logInButton">Signup</button>
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
  data: function () {
    return {
      email: "",
      password: "",
      passwordErrors: []
    };
  },
  methods: {
    validatePassword(password) {
      const errors = [];

      if (password.length < 8 || password.length >= 15) {
        errors.push("Password must be at least 8 characters and less than 15 characters.");
      }

      if (!/[A-Z]/.test(password)) {
        errors.push("Password must include at least one uppercase alphabet character.");
      }

      const lowercaseMatches = password.match(/[a-z]/g) || [];
      if (lowercaseMatches.length < 2) {
        errors.push("Password must include at least two lowercase alphabet characters.");
      }

      if (!/[0-9]/.test(password)) {
        errors.push("Password must include at least one numeric value.");
      }

      if (!/^[A-Z]/.test(password)) {
        errors.push("Password must start with an uppercase letter.");
      }

      if (!password.includes("_")) {
        errors.push('Password must include the character "_".');
      }

      return errors;
    },

    handleSignup() {
      this.passwordErrors = this.validatePassword(this.password);

      if (this.passwordErrors.length === 0) {
        this.$router.push("/");
      }
    },
  }
};
</script>

<style>
* {
  border-radius: 30px;
}
</style>