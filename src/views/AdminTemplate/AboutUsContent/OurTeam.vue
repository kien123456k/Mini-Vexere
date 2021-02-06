<template>
  <div class="bg-light">
    <div class="container py-5">
      <div class="row mb-4">
        <div class="col-lg-5">
          <h2 class="display-4 font-weight-light">Our team</h2>
          <p class="font-italic text-muted">
            As I told you before,
            <strong>I am the team! </strong>
          </p>
          <p class="font-italic text-muted">
            My avatar is base on my in real life with a litte magic of photoshop. You can see it in
            a sidebar.
          </p>
        </div>
      </div>

      <div class="row text-center">
        <introduce-card
          :name="'Kirin Tran'"
          :role="'Project Manager'"
          :source="'/img/userAvatarDefaultLeftSide.7564323a.png'"
        />
        <introduce-card
          :name="'Kirin Tran'"
          :role="'Front-end Developer'"
          :source="'/img/userAvatarDefaultLeftSide.7564323a.png'"
        />
        <introduce-card
          :name="'Kirin Tran'"
          :role="'Back-end Developer'"
          s
          :source="'/img/userAvatarDefaultLeftSide.7564323a.png'"
        />
        <introduce-card
          :name="'Kirin Tran'"
          :role="'Designer'"
          :source="'/img/userAvatarDefaultLeftSide.7564323a.png'"
        />
      </div>
    </div>
  </div>
</template>

<script>
import IntroduceCard from './IntroduceCard';
export default {
  components: {
    IntroduceCard
  }
};
</script>

<style></style>
