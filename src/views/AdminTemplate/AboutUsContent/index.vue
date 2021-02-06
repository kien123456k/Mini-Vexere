<template>
  <about-us-content />
  <description-content />
  <our-team-content />
  <footer-content />
</template>

<script>
import AboutUsContent from './AboutUs';
import DescriptionContent from './Description';
import OurTeamContent from './OurTeam';
import FooterContent from './Footer';
export default {
  components: {
    AboutUsContent,
    DescriptionContent,
    OurTeamContent,
    FooterContent
  }
};
</script>

<style>
.container h1,
.container h2 {
  text-align: left;
}
.social-link {
  width: 30px;
  height: 30px;
  border: 1px solid #ddd;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #666;
  border-radius: 50%;
  transition: all 0.3s;
  font-size: 0.9rem;
}

.social-link:hover,
.social-link:focus {
  background: #ddd;
  text-decoration: none;
  color: #555;
}
</style>
