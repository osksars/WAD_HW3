<template>
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


</template>

<script>
import PostsComponent from '@/components/PostsComponent.vue';

export default {
  name: "HomeView",
  components: {
    PostsComponent
  },
  data: function() {
    return {}
  },
};

</script>