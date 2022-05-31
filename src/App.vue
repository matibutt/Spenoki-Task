<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <router-link to="/" class="navbar-brand" style="padding-left:15px;">Spenoki</router-link>
      <div class="navbar-nav">
        <li class="nav-item">
          <router-link to="/postLists" class="nav-link">PostLists</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/add" class="nav-link">Add Post</router-link>
        </li>
      </div>
    </nav>

    <div class="container mt-3">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: "app"
};
</script>
