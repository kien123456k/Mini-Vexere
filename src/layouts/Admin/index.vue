<template>
  <div class="wrapper">
    <sidebar-admin />
    <content-admin />
  </div>
</template>

<script>
import $ from 'jquery';
import SidebarAdmin from './Sidebar';
import ContentAdmin from './Content';
export default {
  title: 'Coach Booking CMS',
  components: {SidebarAdmin, ContentAdmin},
  mounted: () => {
    $(document).ready(function () {
      $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
      });
    });
  }
};
</script>

<style lang="scss">
body {
  background-color: #ecf0f1;
  background-image: none;
}

p {
  font-family: 'Poppins', sans-serif;
  font-size: 1.1em;
  font-weight: 300;
  line-height: 1.7em;
  color: #999;
}

a {
  &:hover,
  &:focus {
    color: inherit;
    text-decoration: none;
    transition: all 0.3s;
  }
  color: inherit;
  text-decoration: none;
  transition: all 0.3s;
}

.list-unstyled i {
  margin: 6px;
}

.wrapper {
  display: flex;
  width: 100%;
  height: 100vh;
  align-items: stretch;
  overflow: hidden;
}
</style>
