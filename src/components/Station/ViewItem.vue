<template>
  <a
    href="#"
    class="view"
    v-tooltip:top="'View image and description'"
    data-toggle="modal"
    :data-target="'#modalView' + station._id"
  >
    <i class="material-icons">&#xE417;</i>
  </a>

  <div class="modal fade" :id="'modalView' + station._id" tabindex="-1" role="dialog">
    <div class="modal-dialog modal-dialog-scrollable" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">{{ station.name }}</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <p class="text-center">{{ stationDescription }}</p>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['station'],
  computed: {
    stationImage() {
      return this.station.imageUrl
        ? this.station.imageUrl
        : '../../assets/images/StationDefault.png';
    },
    stationDescription() {
      return this.station.description
        ? this.station.description
        : 'No description has been provided';
    }
  }
};
</script>

<style scoped>
.modal-header {
  display: flex;
  justify-content: space-between;
}
</style>
