<template>
  <section id="posts" class="feed-wrapper">
    <ul class="feed">
      <!-- one PostComponent per post; each one reads its own data from the store -->
      <li v-for="id in postIds" :key="id">
        <post-component :post-id="id"></post-component>
      </li>
    </ul>
  </section>
</template>

<script>
import PostComponent from "@/components/PostComponent.vue";

export default {
  name: "PostsComponent",
  components: {
    PostComponent,
  },
  computed: {
    // ids of the posts in the store, newest first
    postIds() {
      return [...this.$store.state.posts]
        .sort((a, b) => b.creationTime.localeCompare(a.creationTime))
        .map((p) => p.postId);
    },
  },
};
</script>

<style scoped>
.feed-wrapper {
  width: 100%;
  max-width: 640px;
}

.feed {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

@media (max-width: 480px) {
  .feed {
    gap: 0.85rem;
  }
}
</style>