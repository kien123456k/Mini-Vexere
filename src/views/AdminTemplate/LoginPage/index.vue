<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
        <div class="card card-signin">
          <div class="card-body">
            <h5 class="card-title text-center">Đăng nhập</h5>
            <login-form />
            <login-verifier />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LoginForm from './LoginForm';
import LoginVerifier from './LoginVerifier';
export default {
  components: {
    LoginForm,
    LoginVerifier
  },
  created() {
    if (this.$store.state.auth.token) {
      this.$router.replace('/admin/welcome');
    }
  }
};
</script>

<style>
body {
  background-color: none;
  background-image: linear-gradient(to right, #38ef7d, #11998e);
}
</style>
<style scoped>
.card-signin {
  border: 0;
  border-radius: 1rem;
  box-shadow: 0 0.5rem 1rem 0 rgba(0, 0, 0, 0.1);
  margin-top: 4rem;
}

.card-signin .card-title {
  margin-bottom: 2rem;
  font-weight: 400;
  font-size: 3rem;
}

.card-signin .card-body {
  padding: 2rem;
}
</style>
