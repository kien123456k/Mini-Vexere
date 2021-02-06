<template>
  <div class="img bg-wrap text-center py-4">
    <div class="user-logo">
      <div class="img avatar-center avatar-flash"></div>
      <h3>email@address.com</h3>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
#sidebar {
  .bg-wrap {
    width: 100%;
    height: 160px;
    position: relative;
    display: flex;
    justify-content: center;
    z-index: 0;
    background-image: url('../../assets/images/userAvatarBg.jpg');
    background-position: center;
    background-size: 380px;
    &:after {
      z-index: -1;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      content: '';
      background: #000;
      opacity: 0.3;
    }
  }
  .user-logo {
    padding: 0 1vw 0 1vw;
    .img {
      width: 88px;
      height: 88px;
      border-radius: 50%;
      margin: 0 auto;
      margin-bottom: 10px;
      background-image: url('../../assets/images/userAvatarDefaultLeftSide.png');
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center center;
    }
    h3 {
      color: #fff;
      font-size: 16px;
      word-break: break-all;
    }
  }
}

.avatar-flash {
  position: relative;
  width: 100px;
  height: 100px;
  border-radius: 100rem;
  z-index: 1;
  overflow: hidden;
  &:before {
    content: '';
    width: 14px;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.1);
    position: absolute;
    top: 0;
    left: 0;
    transform: translateX(-100%) rotate(15deg);
    animation: flash 1s infinite;
  }
}

@keyframes flash {
  to {
    transform: translateX(100%) rotate(15deg);
    left: 100%;
  }
}
</style>
