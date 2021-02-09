<template>
  <h1 class="wrapper">
    Welcome&nbsp;
    <span
      class="txt-rotate"
      data-period="1000"
      data-rotate='[ "back Admin!", "to Coach Booking CMS.", "to the Head of a website." ]'
    ></span>
  </h1>
</template>

<script>
export default {
  mounted() {
    const TxtRotate = function (el, toRotate, period) {
      this.toRotate = toRotate;
      this.el = el;
      this.loopNum = 0;
      this.period = parseInt(period, 10) || 1000;
      this.txt = '';
      this.tick();
      this.isDeleting = false;
    };

    TxtRotate.prototype.tick = function () {
      const i = this.loopNum % this.toRotate.length;
      const fullTxt = this.toRotate[i];

      if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
      } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
      }
      this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

      const that = this;
      let delta = 120;

      if (this.isDeleting) {
        delta /= 2;
      }

      if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
      } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
      }

      setTimeout(function () {
        that.tick();
      }, delta);
    };

    const count = function () {
      const elements = document.getElementsByClassName('txt-rotate');
      let toRotate, period;
      for (let i = 0; i < elements.length; i++) {
        toRotate = elements[i].getAttribute('data-rotate');
        period = elements[i].getAttribute('data-period');
        if (toRotate) {
          new TxtRotate(elements[i], JSON.parse(toRotate), period);
        }
      }

      // INJECT CSS
      const css = document.createElement('style');
      css.type = 'text/css';
      css.innerHTML = '.txt-rotate > .wrap { border-right: 0.08em solid #666 }';
      document.body.appendChild(css);
    };
    count();
  }
};
</script>

<style scoped>
.wrapper {
  font-weight: 400;
  font-size: 3.5em;
  font-style: italic;
  margin: 0.4em 0;
  text-align: center;
  color: #1385c5;
}
</style>
