<template>
  <div id="clock"></div>
</template>

<script>
export default {
  props: {
    minute: Number
  },
  data() {
    return {
      interval: null
    };
  },
  mounted: function () {
    this.$nextTick(function () {
      var countDownDate = new Date(Date.now() + 60000 * this.minute);

      this.interval = setInterval(() => {
        var now = new Date().getTime();
        var distance = countDownDate - now;

        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        if (seconds >= 10)
          document.getElementById('clock').innerHTML = '0' + minutes + ':' + seconds;
        else document.getElementById('clock').innerHTML = '0' + minutes + ':' + '0' + seconds;

        if (distance < 0) {
          clearInterval(this.interval);
          this.$emit('allowResendOTP');
        }
      }, 1000);
    });
  },
  beforeUnmount() {
    clearInterval(this.interval);
  }
};
</script>

<style>
#clock {
  color: #ca0b00;
  margin-top: 0.25rem;
}
</style>
