<template>
  <div id="loader-wrapper" class="d-flex justify-content-center">
    <div id="loader" class="spinner-border text-primary" role="status">
      <span class="sr-only">Loading...</span>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
#loader-wrapper {
  position: absolute;
  top: 45vh;
  left: 45vw;
  align-items: center;
}

#loader {
  width: 8rem;
  height: 8rem;
  font-size: 24px;
  color: #1385c5 !important;
}
</style>
