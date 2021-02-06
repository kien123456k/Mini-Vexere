<template>
  <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12 mt-4">
    <div class="card profile-card shadow">
      <div class="card-img-block">
        <img
          class="card-img-top"
          src="../../assets/images/StationDefault.png"
          alt="station image"
        />
      </div>
      <div class="card-body pt-0">
        <h5 class="card-title">{{ station.name }}</h5>
        <p class="card-text text-truncate">
          {{ stationDescription }}
        </p>
        <router-link class="description-route" :to="`/stations/${station._id}`">
          <button class="bttn-material-flat bttn-md bttn-success">Detail</button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['station'],
  computed: {
    stationDescription() {
      return this.station.description
        ? this.station.description
        : 'No description has been provided';
    }
  }
};
</script>

<style scoped>
.profile-card {
  margin-top: 20px;
}

.profile-card .btn {
  border-radius: 2px;
  text-transform: uppercase;
  font-size: 12px;
  padding: 7px 20px;
}

.profile-card .card-img-block {
  width: 91%;
  margin: 0 auto;
  position: relative;
  top: -20px;
}

.profile-card .card-img-block img {
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.63);
}

.profile-card h5 {
  color: #4e5e30;
  font-weight: 600;
}

.profile-card p {
  font-size: 14px;
  font-weight: 300;
}

.profile-card .btn-primary {
  background-color: #4e5e30;
  border-color: #4e5e30;
}

.card-body {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.card-body p {
  max-width: 100%;
  min-height: 42px;
  white-space: normal;
  display: -webkit-box;
  -webkit-line-clamp: 2; /* number of lines to show */
  -webkit-box-orient: vertical;
}

.description-route {
  align-self: flex-end;
}

.bttn-material-flat {
  text-transform: none;
  border-radius: 5px;
}

button {
  outline: none;
}
</style>
