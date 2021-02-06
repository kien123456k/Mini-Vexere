<template>
  <div id="content">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <button type="button" id="sidebarCollapse" class="btn btn-info">
          <i class="fas fa-bars"></i>
        </button>
        <p class="text-info">{{ currentRoute }}</p>
      </div>
    </nav>
    <div id="main-content"><router-view /></div>
  </div>
</template>

<script>
export default {
  computed: {
    currentRoute() {
      return this.$route.name;
    }
  }
};
</script>

<style lang="scss" scoped>
.navbar {
  padding: 15px 10px;
  background: #fff;
  border: none;
  border-radius: 0;
  margin-bottom: 4vh;
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1);
}

#content {
  width: 100%;
  padding: 20px;
  min-height: 100vh;
  min-width: 65vw;
  transition: all 0.3s;
  overflow-y: auto;
  .container-fluid {
    flex-wrap: nowrap;
    min-width: 280px;
  }
  p {
    margin-bottom: 0;
    word-break: break-all;
    word-wrap: break-word;
  }
}
</style>
