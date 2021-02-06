<template>
  <div class="container">
    <loader-spinner v-if="loading" />
    <div class="row error-wrapper" v-else-if="!stations">
      <p class="text-center">Opps, đã có lỗi xảy ra! Vui lòng thử lại sau!</p>
    </div>
    <div class="row" v-else>
      <template v-if="stations.length === 0">
        <p class="text-center">Sorry, there is no station available at this moment!</p>
        <p class="text-center">Please come back later!</p>
      </template>
      <StationItem v-else v-for="station in stations" :key="station._id" :station="station" />
    </div>
  </div>
</template>

<script>
import StationItem from './../../../components/Station/Item';
import LoaderSpinner from './../../../components/LoaderSpinner';
import * as types from './../../../store/station/constants';
export default {
  components: {
    StationItem,
    LoaderSpinner
  },
  created() {
    this.$store.dispatch(`station/${types.A_GET_ALL_STATIONS}`);
  },
  computed: {
    loading() {
      return this.$store.state.station.loading;
    },
    stations() {
      return this.$store.state.station.stations;
    }
  }
};
</script>

<style>
.container .error-wrapper p {
  font-size: 2.5vw;
  font-style: italic;
  color: #1385c5;
  opacity: 0.8;
  margin-bottom: 8px;
}

.container .error-wrapper {
  justify-content: center;
  flex-direction: column;
  margin: 30vh 10vw;
}
</style>
