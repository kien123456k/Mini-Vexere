<template>
  <div class="container-fluid row flex-column justify-content-center">
    <div class="error mx-auto" data-text="404">404</div>
    <p class="text-center lead text-gray-800 mb-5">Page Not Found</p>
    <p class="text-center text-gray-600 mb-0">It looks like you are lost</p>
    <p class="text-center text-gray-600 mb-0">but don't worry, we got your back!</p>
    <a href="/" class="text-center">&larr; Back To Home</a>
  </div>
</template>

<script>
import '../assets/css/sb-admin-2.min.css';
export default {
  title: 'Not Found'
};
</script>

<style scoped>
.container-fluid {
  height: 100vh;
  background-color: #f8f9fc;
  padding: 0;
  margin: 0;
}
</style>
