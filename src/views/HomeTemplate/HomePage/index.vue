<template>
  <div id="main-content-wrapper">
    <div class="type-carousel"><home-typing-carousel /></div>
  </div>
</template>

<script>
import HomeTypingCarousel from '../../../components/HomeTypingCarousel';
export default {
  components: {
    HomeTypingCarousel
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
