<template>
  <!-- the header and footer are visible at all times -->
  
  <main class="page-main">
    <router-view />
  </main>
  
</template>

<script>

export default {
  name: "HomeView",
  components: {
  },
  data: function () {
    return {}
  },
};
</script>