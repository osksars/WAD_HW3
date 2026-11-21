<template>

  <header-component></header-component>

  <!-- posts section -->
  <div class="home">

    <body>
      <main>
        <section class="feed" id="feed" aria-label="Posts">
          <posts-component></posts-component>
        </section>
      </main>
    </body>
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
};

</script>
<style scoped>
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>