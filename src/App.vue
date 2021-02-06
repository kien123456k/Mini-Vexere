<template>
  <router-view />
</template>

<script>
import * as types from './store/auth/constants';
export default {
  created() {
    this.$store.dispatch(`auth/${types.A_TRY_LOGIN}`);
  }
};
</script>

<style lang="scss">
@import url('./assets/scss/globalStyle.scss');
</style>
