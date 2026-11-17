<template>

  <div>
    <body>
        <header-component></header-component>
    </body>
  </div>

  <div class="home">
    <body>
  <!-- header: navigation links + account avatar -->

  <!-- main: post feed -->
  <main>
    <!-- the posts are no longer added by hand:
                script.js fetches posts.js and creates one <arcitle class="post">
                for each post, then adds it into this empty section -->
    <section class="feed" id="feed" aria-label="Posts">
      <posts-component></posts-component>
    </section>
  </main>

    </body>
  </div>

  <div>
    <body>
        <footer-component></footer-component>
    </body>
  </div>

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
  data: function() {
    return {}
  },
};

</script>