<template>

  <HeaderComponent></HeaderComponent>

  <div class="signup page-main">
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

<style scoped>
.signup {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem 0;
}

.form {
  background: var(--card);
  border: 1px solid var(--line);
  border-radius: 16px;
  padding: 2rem 2.25rem;
  width: 100%;
  max-width: 460px;
  display: flex;
  flex-direction: column;
  gap: 1.15rem;
  box-shadow: 0 2px 8px rgba(27, 31, 39, 0.05);
}

.form-group {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
}

.form-group label {
  width: 90px;
  text-align: right;
  font-weight: 500;
  color: var(--ink);
  flex-shrink: 0;
}

.form-group input {
  flex: 1;
  padding: 0.65rem 1rem;
  border: 1px solid var(--line);
  border-radius: 20px;
  font-size: 0.95rem;
  background-color: var(--paper);
  color: var(--ink);
  outline: none;
  transition: border-color 0.2s, background-color 0.2s;
}

.form-group input:focus {
  border-color: var(--accent);
  background-color: var(--card);
}

.logInButton {
  align-self: center;
  margin-top: 0.4rem;
  padding: 0.65rem 2.2rem;
  background: var(--accent);
  color: #ffffff;
  border: none;
  border-radius: 20px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s;
}

.logInButton:hover {
  background: var(--accent-hover);
}

.error-box {
  background: var(--error-bg);
  border: 1px solid var(--error-border);
  color: var(--error-text);
  border-radius: 10px;
  padding: 0.75rem 1rem;
  font-size: 0.88rem;
}

.error-title {
  margin: 0 0 0.35rem;
  font-weight: 600;
}

.error-box ul {
  margin: 0;
  padding-left: 1.2rem;
}

@media (max-width: 480px) {
  .form {
    padding: 1.5rem 1.25rem;
  }

  .form-group {
    flex-direction: column;
    align-items: stretch;
    gap: 0.35rem;
  }

  .form-group label {
    width: auto;
    text-align: left;
  }
}
</style>