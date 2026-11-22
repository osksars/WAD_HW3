<template>

  <header-component></header-component>

  <!-- posts section -->
  <div class="home">
      <main>
        <section class="feed" id="feed" aria-label="Posts">
          <posts-component></posts-component>
        </section>

        <div class="reset-wrapper">
          <button class="reset-btn" @click="resetLikes">Reset likes</button>
        </div>
      </main>
  </div>

  <footer-component></footer-component>

</template>

<script>
import FooterComponent from '@/components/FooterComponent.vue';
import HeaderComponent from '@/components/HeaderComponent.vue';
import PostsComponent from '@/components/PostsComponent.vue';

export default {
  name: "HomeView",
  components: {
    PostsComponent,
    HeaderComponent,
    FooterComponent
  },
  data: function () {
    return {}
  },
  methods: {
    // sets the likes of every post back to 0 (happens in the store)
    resetLikes() {
      this.$store.commit("resetLikes");
    }
  }
};

</script>
<style scoped>
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.reset-wrapper {
  display: flex;
  justify-content: center;
  margin-top: 1.5rem;
  margin-bottom: 2rem;
}

.reset-btn {
  padding: 0.6rem 2rem;
  background: var(--accent);
  color: #ffffff;
  border: none;
  border-radius: 20px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s;
}

.reset-btn:hover {
  background: var(--accent-hover);
}
</style>