<template>
  <home-navbar />
  <router-view />
</template>

<script>
import HomeNavbar from '../../components/Home';
export default {
  title: 'Mini Vexere',
  components: {
    HomeNavbar
  }
};
</script>

<style>
body {
  background-color: #ecf0f1;
  background-image: none;
}
</style>
