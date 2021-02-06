<template>
  <home-navbar />
  <router-view />
</template>

<script>
import HomeNavbar from '../../components/Home';
export default {
  components: {
    HomeNavbar
  }
};
</script>

<style></style>
