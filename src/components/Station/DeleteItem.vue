<template>
  <a
    href="#"
    class="delete"
    data-toggle="modal"
    :data-target="'#modalDelete' + station._id"
    v-tooltip:top="'Delete'"
  >
    <i class="material-icons">&#xE872;</i>
  </a>

  <div class="modal fade" :id="'modalDelete' + station._id" tabindex="-1" role="dialog">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title">Warning!</h4>
          <button type="button" class="close" data-dismiss="modal" aria-hidden="true">
            <i class="fas fa-times"></i>
          </button>
        </div>
        <div class="modal-body">This action will delete this item permanently. Are you sure?</div>
        <div class="modal-footer">
          <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
          <button
            type="button"
            class="btn btn-danger"
            @click="handleDeleteStation"
            data-dismiss="modal"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import * as stationTypes from '../../store/station/constants';
import * as authTypes from '../../store/auth/constants';
export default {
  props: ['station'],
  methods: {
    async handleDeleteStation() {
      await this.$store.dispatch(`auth/${authTypes.A_TRY_LOGIN}`);
      await this.$store.dispatch(`station/${stationTypes.A_DELETE_STATION}`, {
        _id: this.station._id
      });
      await this.$emit('actionActivate');
    }
  },
  emits: ['actionActivate']
};
</script>

<style scoped>
.modal-dialog {
  margin-top: 30vh;
}
.modal-header {
  display: flex;
  justify-content: space-between;
}
</style>
