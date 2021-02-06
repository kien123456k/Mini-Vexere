<template>
  <div class="container">
    <loader-spinner v-if="loading" />
    <div class="row text-wrapper" v-else-if="!station">
      <p class="text-center">Opps, đã có lỗi xảy ra! Vui lòng thử lại sau!</p>
    </div>
    <div class="row station-detail-wrapper" v-else>
      <div class="col-lg-10 col-md-10 col-sm-10 col-xs-10 mt-4 mb-5">
        <div class="card profile-card shadow">
          <div class="card-img-block shadow mb-5">
            <img class="card-img-top" :src="stationImage" alt="station image" />
          </div>
          <div class="card-body pt-0">
            <h5 class="card-title text-center">{{ station.name }}</h5>
            <p class="card-text">
              {{ station.description ? station.description : 'No description has been provided' }}
            </p>
            <a href="/stations">
              <button class="bttn-material-flat bttn-md bttn-success">BACK</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import * as types from '../../../store/station/constants';
import LoaderSpinner from '../../../components/LoaderSpinner.vue';
export default {
  components: {
    LoaderSpinner
  },
  created() {
    this.$store.dispatch(`station/${types.A_GET_DETAIL_STATION}`, {
      _id: this.$route.params.id
    });
    console.log(this.$store.state.station.loading);
  },
  computed: {
    loading() {
      console.log(this.$store.state.station.loading);
      return this.$store.state.station.loading;
    },
    station() {
      return this.$store.state.station.stations;
    },
    stationImage() {
      return this.station.imageUrl ? this.station.imageUrl : '/img/StationDefault.64cb6702.png';
    }
  }
};
</script>

<style scoped>
.text-wrapper > .text-center {
  font-size: 2.5vw;
  font-style: italic;
  color: #1385c5;
  opacity: 0.8;
  margin-bottom: 8px;
}

.container .text-wrapper {
  justify-content: center;
  flex-direction: column;
  margin: 30vh 10vw;
}

.container .station-detail-wrapper {
  display: flex;
  justify-content: center;
}

.container .card-img-block {
  width: 80%;
  align-self: center;
}

.container .card-body {
  display: flex;
  flex-direction: column;
  align-items: center;
}

button,
a {
  outline: none;
}
</style>
