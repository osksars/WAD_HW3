<template>
  <!-- router for the 2 pages -->
  <router-view>
    <header>
      <nav>
        <router-link to="/">Home</router-link> |
        <router-link to="/signup">Sign up</router-link>
      </nav>
    </header>
  </router-view>

</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  flex-direction: column;
}

header {
  border: solid;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

footer {
  border: solid;

  bottom: 0;
}
</style>