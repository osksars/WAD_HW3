<template>
<div id= "posts">
<h1> Book list one</h1>
<ul>
<li class="postId" v-for = "post in posts" :key="post.id">
<span class="postId"> {{post.postId}} </span> <br>
<span class="userName"> {{post.userName}} </span> <br>
<span class="creationTime"> {{post.creationTime}} </span> <br>
<span class="userPicture"> {{post.userPicture}} </span>
<span class="postText"> {{post.postText}} </span>
<span class="postPhoto"> {{post.postPhoto}} </span>
<span class="likes"> {{post.likes}} </span>
</li>
</ul>
</div>
</template>

<script>
import { computed } from 'vue';

export default {
name: "PostsComponent",
data: function() {
return {
}},
computed: {
    posts(){
        return [...this.$store.state.posts].sort((a, b) => b.creationTime.localeCompare(a.creationTime));},           
},
methods: {
    formatDate(isoString) {
        const date = new Date(isoString + "T00:00:00");
        return date.toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric",
        });
    }

    //should create some like methods

    // likes() {
    //     let liked = false;
    // let count = post.likes || 0;
    // likeBtn.textContent = `👍 ${count}`;

    // likeBtn.addEventListener("click", () => {
    //     liked = !liked;
    //     count += liked ? 1 : -1;
    //     likeBtn.classList.toggle("liked", liked);
    //     likeBtn.textContent = `👍 ${count}`;
    // });
    // }
}}
</script>

<style>
</style>