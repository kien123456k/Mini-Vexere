<template>
  <div id="clock"></div>
</template>

<script>
export default {
  props: {
    minute: Number
  },
  mounted: function () {
    this.$nextTick(function () {
      var countDownDate = new Date(Date.now() + 60000 * this.minute);

      var x = setInterval(() => {
        var now = new Date().getTime();
        var distance = countDownDate - now;

        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        if (seconds >= 10)
          document.getElementById('clock').innerHTML = '0' + minutes + ':' + seconds;
        else document.getElementById('clock').innerHTML = '0' + minutes + ':' + '0' + seconds;

        if (distance < 0) {
          clearInterval(x);
          this.$emit('allowResendOTP');
        }
      }, 1000);
    });
  }
};
</script>

<style>
#clock {
  color: #ca0b00;
  margin-top: 0.25rem;
}
</style>
