<template>
  <div class="col-xl-3 col-sm-6 mb-5">
    <div class="bg-white rounded shadow-sm py-5 px-4">
      <img
        :src="source"
        alt=""
        width="100"
        class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
      />
      <h5 class="mb-0">{{ name }}</h5>
      <span class="small text-uppercase text-muted">{{ role }}</span>
      <ul class="social mb-0 list-inline mt-3">
        <li class="list-inline-item">
          <a href="https://www.facebook.com/kien123456k/" target="_blank" class="social-link"
            ><i class="fa fa-facebook-f"></i
          ></a>
        </li>
        <li class="list-inline-item">
          <a href="https://github.com/kien123456k" target="_blank" class="social-link"
            ><i class="fa fa-github"></i
          ></a>
        </li>
        <li class="list-inline-item">
          <a href="https://www.instagram.com/kirin_tran1511/" target="_blank" class="social-link"
            ><i class="fa fa-instagram"></i
          ></a>
        </li>
        <li class="list-inline-item">
          <a href="https://www.linkedin.com/in/kirintran/" target="_blank" class="social-link"
            ><i class="fa fa-linkedin"></i
          ></a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: ['name', 'role', 'source']
};
</script>

<style></style>
