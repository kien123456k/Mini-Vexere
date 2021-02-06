<template>
  <nav class="navbar-home-page navbar navbar-expand-lg navbar-light">
    <a class="navbar-brand" href="/"><img src="../../assets/images/logoInversion.png" alt="" /></a>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link exact active-class="active-route" class="nav-link" to="/stations">
            Station
          </router-link>
        </li>
        <router-link exact active-class="active-route" class="nav-link" to="/about">
          About
        </router-link>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style>
.active {
  background-color: #2980b9;
  color: red !important;
  border-radius: 6px;
}

.navbar-home-page {
  background-color: #1365ae;
}

.navbar-home-page img {
  width: 12vw;
  min-width: 140px;
  margin-left: 10vw;
}

.navbar-home-page a {
  color: #fff !important;
  margin: 0 1vw;
}

.navbar-expand-lg .navbar-nav {
  width: 100%;
  justify-content: flex-end;
  margin-right: 10vw;
}
</style>
