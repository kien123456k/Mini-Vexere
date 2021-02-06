<template>
  <div class="col-sm-1">
    <a
      href="#"
      class="add"
      data-toggle="modal"
      data-target="#modalAdd"
      v-tooltip:top="'Add a new station'"
    >
      <i class="material-icons"> &#xe147;</i>
    </a>
  </div>

  <div
    class="modal fade"
    id="modalAdd"
    tabindex="-1"
    role="dialog"
    aria-labelledby="title"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-scrollable" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="title">Add a new station</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <form>
            <div class="form-group">
              <label for="recipient-name" class="col-form-label required">Name:</label>
              <input type="text" class="form-control" id="addName" v-model="name" required />
            </div>
            <div class="form-group">
              <label for="recipient-name" class="col-form-label required">Address:</label>
              <input type="text" class="form-control" id="addAddress" v-model="address" required />
            </div>
            <div class="form-group">
              <label for="recipient-name" class="col-form-label required">Province:</label>
              <input
                type="text"
                class="form-control"
                id="addProvince"
                v-model="province"
                required
              />
            </div>
            <div class="form-group">
              <label for="message-text" class="col-form-label">Description:</label>
              <textarea class="form-control" id="addDescription" v-model="description"></textarea>
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary" @click="handleCreateStation">Create</button>
        </div>
        <div v-if="typeof errorMessage == 'object'">
          <p v-for="(message, index) in errorMessage" :key="index" class="text-danger text-center">
            {{ message }}
          </p>
        </div>
        <div v-else-if="typeof errorMessage == 'string'">
          <p class="text-danger text-center">{{ errorMessage }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from 'jquery';
import * as stationTypes from '../../store/station/constants';
import * as authTypes from '../../store/auth/constants';
export default {
  props: ['station'],
  data() {
    return {
      name: '',
      address: '',
      province: '',
      description: ''
    };
  },
  computed: {
    errorMessage() {
      return this.$store.state.station.errorMessage;
    }
  },
  methods: {
    async handleCreateStation() {
      await this.$store.dispatch(`auth/${authTypes.A_TRY_LOGIN}`);
      await this.$store.dispatch(`station/${stationTypes.A_ADD_STATION}`, {
        name: this.name,
        address: this.address,
        province: this.province,
        description: this.description
      });
      if (!this.errorMessage) {
        $('#modalAdd').modal('hide');
      }
      this.$emit('actionActivate');
    }
  }
};
</script>

<style scoped>
.col-sm-1 .add i {
  color: #2980b9;
  font-size: 32px;
}
.required:after {
  content: ' *';
  color: red;
}
</style>
