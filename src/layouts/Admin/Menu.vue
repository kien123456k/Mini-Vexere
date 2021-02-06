<template>
  <ul class="list-unstyled components">
    <li>
      <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">
        <i class="fas fa-tachometer-alt"></i>
        <span>Dashboard</span>
      </a>
      <ul class="collapse list-unstyled" id="homeSubmenu">
        <li>
          <router-link
            exact
            active-class="active-route"
            class="nav-link bttn-jelly bttn-sidebar-menu bttn-block"
            to="/admin/stations"
          >
            <i class="fas fa-archway"></i>
            <span>Station</span>
          </router-link>
        </li>
      </ul>
    </li>
    <li>
      <router-link
        exact
        active-class="active-route"
        class="nav-link bttn-jelly bttn-sidebar-menu bttn-block"
        to="/admin/aboutus"
      >
        <i class="fas fa-info-circle"></i>
        <span>About Us</span>
      </router-link>
    </li>
    <li>
      <a href="#" @click="handleLogout" class="bttn-jelly bttn-sidebar-menu bttn-block">
        <i class="fas fa-sign-out-alt"></i>
        <span>Logout</span>
      </a>
    </li>
  </ul>
</template>

<script>
import * as types from '../../store/auth/constants';
export default {
  methods: {
    handleLogout() {
      this.$store.dispatch(`auth/${types.A_LOGOUT}`);
    }
  }
};
</script>

<style>
.active-route {
  background-color: #1abc9c !important;
  color: #fff !important;
}

.bttn-sidebar-menu {
  background-color: #7386d5;
  color: #fff;
}
</style>
