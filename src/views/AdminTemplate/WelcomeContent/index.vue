<template>
  <div id="main-content-wrapper">
    <div class="type-carousel"><admin-typing-carousel /></div>
  </div>
</template>

<script>
import AdminTypingCarousel from '../../../components/AdminTypingCarousel';
export default {
  components: {
    AdminTypingCarousel
  }
};
</script>

<style>
#main-content-wrapper {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.type-carousel {
  margin-top: 18vh;
  color: #9b59b6;
}
</style>
