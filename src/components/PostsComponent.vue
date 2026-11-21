<template>

    <section id="posts" class="feed-wrapper">
        <ul class="feed">
            <!-- takes the posts from the list in a loop -->
            <li class="post" v-for="post in posts" :key=post.postId>
                <div class="post-header">
                    <span class="userName"> {{ post.userName }} </span> <br>
                    <span class="time"> {{ formatDate(post.creationTime) }} </span> <br>
                    <img class="userPicture" src="images/daweid-icon-7797704_1920.png">
                </div>
                <div class="post-body">
                    <span class="postText"> {{ post.postText }} </span>
                    <img v-if="post.postPhoto != null" :alt="'Photo from ' + post.userName" :src="post.postPhoto"
                        class="postPhoto">
                </div>
                <div class="post-footer">
                    <span class="likes"> </span>
                    <button class="like-btn" :class="{ liked: post.liked }" @click="toggleLike(post.postId)">
                        {{ post.likes }} 👍 </button>
                </div>
            </li>
        </ul>
    </section>
</template>

<script>

export default {
    name: "PostsComponent",
    data: function () {
        return {
        }
    },
    computed: {
        posts() {
            // fetching the posts from the store
            return [...this.$store.state.posts].sort((a, b) => b.creationTime.localeCompare(a.creationTime));
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
        toggleLike(postId) {
            this.$store.commit("toggleLike", postId)
        }
    }
}

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
  transition: background-color 0.2s, border-color 0.2s;
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

@media (max-width: 480px) {
  .feed {
    gap: 0.85rem;
  }
}
</style>