<template>
  <nav id="sidebar">
    <div class="sidebar-header">
      <h6 class="text-center">Coach Booking System</h6>
      <h6 class="text-center">Management</h6>
    </div>
    <avatar-admin />
    <menu-admin />
    <contact-admin />
  </nav>
</template>

<script>
import AvatarAdmin from './Avatar';
import MenuAdmin from './Menu';
import ContactAdmin from './Contact';
export default {
  components: {
    AvatarAdmin,
    MenuAdmin,
    ContactAdmin
  }
};
</script>

<style lang="scss">
#sidebar {
  min-width: 280px;
  max-width: 280vw;
  background: #7386d5;
  color: #fff;
  transition: all 0.3s;
  overflow-y: auto;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none;
  }
  &.active {
    margin-left: -280px;
  }
  .sidebar-header {
    padding: 20px;
    background: #6d7fcc;
  }
  .sidebar-header h6 {
    font-weight: 700;
    margin-bottom: 0;
    color: #fff;
  }
  ul {
    i,
    svg {
      font-size: 18px;
    }
    p {
      color: #fff;
      padding: 10px;
    }
    li {
      &.active > a {
        color: #fff;
        background: #6d7fcc;
      }
      a {
        padding: 10px 16px;
        font-size: 1.1em;
        display: block;
        &:hover {
          color: #7386d5;
          background: #fff;
        }
      }
    }
    &.components {
      padding: 12px 0;
      border-bottom: 1px solid #47748b;
      margin-top: 0;
      margin-bottom: 0;
      span {
        padding: 8px;
      }
    }
    &.CTAs {
      padding: 12px 24px;
      p {
        padding: 0 0 12px 0;
        margin: 0;
        cursor: default;
      }
      a {
        text-align: center;
        font-size: 0.9em !important;
        display: block;
        border-radius: 5px;
        margin-bottom: 5px;
      }
    }
  }
}

a {
  &.white-bg-blue-txt {
    background: #fff;
    color: #3b5998;
  }
  &.blue-bg-white-txt,
  &.blue-bg-white-txt:hover {
    background: #6e5494 !important;
    color: #fff !important;
  }
  &[data-toggle='collapse'] {
    position: relative;
  }
  &[aria-expanded='true'] {
    color: #fff;
    background: #6d7fcc;
  }
}

.dropdown-toggle::after {
  display: block;
  position: absolute;
  top: 50%;
  right: 20px;
  transform: translateY(-50%);
}

ul ul a {
  font-size: 0.9em !important;
  padding-left: 30px !important;
  background: #6d7fcc;
}

@media (max-width: 768px) {
  #sidebar {
    margin-left: calc(100px - 100vw);
    min-width: calc(100vw - 100px);
  }
  #sidebar.active {
    margin-left: 0;
  }
  #sidebarCollapse span {
    display: none;
  }
}
</style>
