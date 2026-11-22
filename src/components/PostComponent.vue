<template>
    <!-- ONE post. it only receives the post's id and gets all content from the Vuex store -->
     <article v-if="post" class="post">
        <div class="post-header">
      <div class="author-info">
        <img class="userPicture" :src="post.userPicture" :alt="'Avatar of ' + post.userName" />
        <span class="userName">{{ post.userName }}</span>
      </div>
      <span class="time">{{ formatDate(post.creationTime) }}</span>
    </div>

    <div class="post-body">
      <span class="postText">{{ post.postText }}</span>
      <img
        v-if="post.postPhoto"
        :src="post.postPhoto"
        :alt="'Photo from ' + post.userName"
        class="postPhoto"
      />
    </div>

    <div class="post-footer">
      <button class="like-btn" :class="{ liked: post.liked }" aria-label="Like this post" @click="like">👍</button>
      <span class="likes-count">{{ post.likes }} likes</span>
    </div>
     </article>
</template>

<script>
    export default {
        name: "PostComponent",
        props: {
            postId: {
                type: Number,
                required: true,
            },
        },
        computed: {
            // fetch this post's content from the Vuex store
            post() {
                return this.$store.state.posts.find((p) => p.postId === this.postId);
            },
        },
        methods: {
            formatDate(isoString) {
                const date = new Date(isoString + "T00:00:00");
                return date.toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                });
            },
            like() {
                this.$store.commit("toggleLike", this.postId);
            },
        },
    };
</script>

<style scoped>
.post {
  background: var(--card);
  border: 1px solid var(--line);
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 2px 6px rgba(27, 31, 39, 0.04);
}

.post-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.85rem 1rem;
}

.author-info {
  display: flex;
  align-items: center;
  gap: 0.65rem;
}

.userPicture {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  object-fit: cover;
  border: 1px solid var(--line);
  background: var(--paper);
}

.userName {
  font-weight: 600;
  color: var(--ink);
}

.time {
  color: var(--muted);
  font-size: 0.85rem;
}

.post-body .postPhoto {
  display: block;
  width: 100%;
  max-height: 420px;
  object-fit: cover;
}

.post-body .postText {
  display: block;
  margin: 0.85rem 1rem;
  color: var(--ink);
}

.post-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.6rem 1rem 0.8rem;
  border-top: 1px solid var(--line);
}

.like-btn {
  background: none;
  border: 1px solid transparent;
  cursor: pointer;
  font-size: 1.2rem;
  padding: 0.25rem 0.55rem;
  border-radius: 6px;
  transition: background-color 0.2s;
}

.like-btn:hover {
  background: var(--paper);
}

.like-btn.liked {
  background: var(--paper);
  border-color: var(--accent);
}

.likes-count {
  font-size: 0.9rem;
  font-weight: 500;
  color: var(--muted);
}
</style>