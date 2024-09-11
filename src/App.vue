<script setup lang="ts">
import HomeView from './views/HomeView.vue'
</script>

<template>
  <header>
    <div>
      <nav>
        <!-- Use hash-based scrolling for internal sections -->
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#contact">Contact</a>
      </nav>
    </div>
  </header>

  <main>
    <!-- Different sections for each part of the page -->
    <section id="home" class="section">
      <h1>Home Section</h1>
      <p>This is the home section content.</p>
      <HomeView />
    </section>

    <section id="about" class="section">
      <h1>About Section</h1>
      <p>This is the about section content.</p>
    </section>

    <section id="services" class="section">
      <h1>Services Section</h1>
      <p>This is the services section content.</p>
    </section>

    <section id="contact" class="section">
      <h1>Contact Section</h1>
      <p>This is the contact section content.</p>
    </section>
  </main>
</template>

<style scoped>
/* Basic styles for sections and smooth scrolling */
html {
  scroll-behavior: smooth; /* Smooth scrolling for all anchor links */
}

header {
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
  background-color: white;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
}

.wrapper {
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem;
}

nav {
  display: flex;
  justify-content: center;
}

nav a {
  margin: 0 1rem;
  text-decoration: none;
  color: #333;
  font-weight: bold;
  transition: color 0.3s ease;
}

nav a:hover {
  color: #007bff;
}

main {
  padding-top: 80px; /* Offset for fixed header */
}

.section {
  min-height: 100vh; /* Full-screen sections */
  padding: 4rem 1rem;
  text-align: center;
}

.section:nth-of-type(odd) {
  background-color: #f5f5f5;
}

.section:nth-of-type(even) {
  background-color: #e9ecef;
}

@media (min-width: 1024px) {
  header {
    padding-right: calc(var(--section-gap) / 2);
  }

  nav a {
    margin: 0 2rem;
  }

  .section {
    padding: 8rem 1rem;
  }
}
</style>
