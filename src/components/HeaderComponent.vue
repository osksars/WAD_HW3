<template>
  <!-- router for the 2 pages -->
    <header class="site-header">
      <nav class="nav">
        <router-link to="/">Home</router-link> |
        <router-link to="/signup">Sign up</router-link>
      </nav>
    </header>

</template>

<style scoped>
.site-header {
  background-color: var(--card);
  border-bottom: 1px solid var(--line);
  padding: 1rem 1.5rem;
  text-align: center;
}

.nav {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
}

.nav a {
  text-decoration: none;
  font-weight: 600;
  color: var(--ink);
  padding: 0.4rem 0.85rem;
  border-radius: 6px;
  transition: background-color 0.2s, color 0.2s;
}

.nav a:hover {
  background-color: var(--paper);
  color: var(--accent);
}

.nav a.router-link-exact-active {
  background-color: var(--accent);
  color: #ffffff;
}

.divider {
  color: var(--line);
}

@media (max-width: 480px) {
  .site-header {
    padding: 0.75rem 0.8rem;
  }

  .nav a {
    padding: 0.35rem 0.6rem;
    font-size: 0.9rem;
  }
}
</style>