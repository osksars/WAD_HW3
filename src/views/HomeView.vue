<template>
  <div class="home">
    <body>
  <!-- header: navigation links + account avatar -->
  <header>
    <nav>
      <!--navigation links-->
      <a href="index.html">Home</a>
      <a href="addPost.html">Add Post</a>
    </nav>
    <!-- avatar links to the login page -->
    <!-- aria-label for accessibility since the link contains only an image -->
    <div class="user-menu">
      <div class="avatar-btn" id="avatar-btn" style="cursor: pointer" aria-label="Account">
        <img src="images/daweid-icon-7797704_1920.png" alt="User Avatar" width="32" height="32" />
      </div>
    </div>
  </header>

  <!-- dropdown menu -->
  <div class="dropdown-menu" id="menu">
    <p>John Doe</p>
    <p>john.doe@ut.ee</p>
    <hr />
    <a href="login.html">Logout</a>
  </div>

  <!-- main: post feed -->
  <main>
    <!-- the posts are no longer added by hand:
                script.js fetches posts.js and creates one <arcitle class="post">
                for each post, then adds it into this empty section -->
    <section class="feed" id="feed" aria-label="Posts"></section>
  </main>

</body>
  </div>


</template>

<script>

export default {
  name: "HomeView",
  components: {
  },
};

const POSTS = this.$store.state.posts;

const feed = document.getElementById("feed");

function formatDate(isoString) {
    const date = new Date(isoString + "T00:00:00");
    return date.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
    });
}

function createPost(post) {
    const article = document.createElement("article");
    article.className = "post";

    const header = document.createElement("div");
    header.className = "post-header";

    const avatarImg = document.createElement("img");
    avatarImg.src = post.userPicture;
    avatarImg.alt = post.userName;
    avatarImg.className = "avatar";

    const name = document.createElement("strong");
    name.textContent = post.userName;

    const time = document.createElement("time");
    time.dateTime = post.creationTime;
    time.textContent = formatDate(post.creationTime);

    header.append(avatarImg, name, time);

    //post body - optional photo + text
    const body = document.createElement("div");
    body.className = "post-body";

    if (post.postPhoto) {
        const photo = document.createElement("img");
        photo.src = post.postPhoto;
        photo.alt = "Photo from " + post.userName;
        body.appendChild(photo);
    }

    const text = document.createElement("p");
    text.textContent = post.postText;
    body.appendChild(text);

    //post footer - like button (same as before)
    const footer = document.createElement("div");
    footer.className = "post-footer";

    const likeBtn = document.createElement("button");
    likeBtn.className = "like-btn";
    likeBtn.type = "button";

    let liked = false;
    let count = post.likes || 0;
    likeBtn.textContent = `👍 ${count}`;

    likeBtn.addEventListener("click", () => {
        liked = !liked;
        count += liked ? 1 : -1;
        likeBtn.classList.toggle("liked", liked);
        likeBtn.textContent = `👍 ${count}`;
    });

    footer.appendChild(likeBtn);

    article.append(header, body, footer);
    return article;
}

fetch(POSTS)
    .then((response) => {
        if (!response.ok) {
            throw new Error("HTTP error " + response.status);
        }
        return response.json();
    })
    .then((posts) => {
        const sorted = [...posts].sort((a, b) =>
            b.creationTime.localeCompare(a.creationTime),
        );
        sorted.forEach((post) => feed.appendChild(createPost(post)));
    })
    .catch((error) => {
        console.error("Could not load posts:", error);
        feed.textContent = "Sorry, the posts could not be loaded";
    });

//dropdown menu toggling
const avatarBtn = document.getElementById("avatar-btn");
const dropdownMenu = document.getElementById("menu");

if (avatarBtn && dropdownMenu) {
    avatarBtn.addEventListener("click", () => {
        dropdownMenu.classList.toggle("show");
    });
}
</script>