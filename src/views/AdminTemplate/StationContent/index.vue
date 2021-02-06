<template>
  <div class="container-xl">
    <div class="table-responsive">
      <div class="table-wrapper">
        <div class="table-title">
          <div class="row">
            <div class="col-sm-11">
              <h2>Station <b>Dashboard</b></h2>
            </div>
            <div class="col-sm-1">
              <add-item @actionActivate="actionActivate" />
            </div>
          </div>
        </div>

        <table class="table table-striped table-hover table-bordered">
          <thead class="thead-dark">
            <tr>
              <th scope="col">STT</th>
              <th scope="col">Name<i class="fa fa-sort"></i></th>
              <th scope="col">Address<i class="fa fa-sort"></i></th>
              <th scope="col">Province <i class="fa fa-sort"></i></th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <div v-if="loading" class="loader-wrapper"><loader-spinner /></div>
          <tbody v-else>
            <tr v-for="(station, index) in stations" :key="station._id">
              <th scope="row">{{ (page - 1) * limit + index + 1 }}</th>
              <td>{{ station.name }}</td>
              <td>{{ station.address }}</td>
              <td>{{ station.province }}</td>
              <td>
                <view-item :station="station" />
                <delete-item :station="station" @actionActivate="actionActivate" />
              </td>
            </tr>
          </tbody>
        </table>
        <div class="clearfix">
          <div class="hint-text">
            Showing <b>{{ entries > 5 ? limit : entries }}</b> out of <b>{{ entries }}</b> entries
          </div>
          <ul class="pagination">
            <li class="page-item" :class="{disabled: page === 1}">
              <button class="page-link" @Click="goToFirstPage">
                <i class="fa fa-angle-double-left"></i>
              </button>
            </li>
            <li class="page-item" :class="{disabled: page === 1}">
              <button class="page-link" @Click="goToPreviousPage">
                <i class="fa fa-angle-left"></i>
              </button>
            </li>
            <li class="page-item" :class="{disabled: page === pages}">
              <button class="page-link" @Click="goToNextPage">
                <i class="fa fa-angle-right"></i>
              </button>
            </li>
            <li class="page-item" :class="{disabled: page === pages}">
              <button class="page-link" @Click="goToLastPage">
                <i class="fa fa-angle-double-right"></i>
              </button>
            </li>
          </ul>
        </div>
        <p v-if="errorMessage" class="text-right text-danger">
          <i class="fas fa-times-circle"></i> &nbsp;Action failed!
        </p>
        <p v-else-if="isActionUsed" class="text-right text-success">
          <i class="fas fa-check-circle"></i>
          &nbsp;Action succeeded!
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import * as types from '../../../store/station/constants';
import DeleteItem from '../../../components/Station/DeleteItem.vue';
import ViewItem from '../../../components/Station/ViewItem.vue';
import LoaderSpinner from '../../../components/LoaderSpinner.vue';
import AddItem from '../../../components/Station/AddItem.vue';
export default {
  components: {
    DeleteItem,
    ViewItem,
    LoaderSpinner,
    AddItem
  },
  data() {
    return {
      page: 1,
      limit: 6,
      isActionUsed: false
    };
  },
  created() {
    this.$store.dispatch(`station/${types.A_GET_STATION_PAGE}`, {
      page: this.page,
      limit: this.limit
    });
  },
  computed: {
    loading() {
      return this.$store.state.station.loading;
    },
    stations() {
      return this.$store.state.station.stations;
    },
    pages() {
      return this.$store.state.station.pages;
    },
    entries() {
      return this.$store.state.station.entries;
    },
    errorMessage() {
      return this.$store.state.station.errorMessage;
    }
  },
  methods: {
    goToFirstPage() {
      this.page = 1;
      this.$store.dispatch(`station/${types.A_GET_STATION_PAGE}`, {
        page: this.page,
        limit: this.limit
      });
    },
    goToPreviousPage() {
      this.page--;
      this.$store.dispatch(`station/${types.A_GET_STATION_PAGE}`, {
        page: this.page,
        limit: this.limit
      });
    },
    goToNextPage() {
      this.page++;
      this.$store.dispatch(`station/${types.A_GET_STATION_PAGE}`, {
        page: this.page,
        limit: this.limit
      });
    },
    goToLastPage() {
      this.page = this.pages;
      this.$store.dispatch(`station/${types.A_GET_STATION_PAGE}`, {
        page: this.page,
        limit: this.limit
      });
    },
    actionActivate() {
      this.$store.dispatch(`station/${types.A_GET_STATION_PAGE}`, {
        page: this.page,
        limit: this.limit
      });
      this.isActionUsed = true;
    }
  }
};
</script>

<style>
body {
  color: #566787;
  background: #f5f5f5;
  font-family: 'Roboto', sans-serif;
}
.container-xl {
  padding: 0;
}
.table-responsive {
  margin: 30px 0;
}
.table-wrapper {
  min-width: 1000px;
  background: #fff;
  padding: 20px;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.05);
}
.table-title {
  padding-bottom: 10px;
  margin: 0 0 10px;
  min-width: 100%;
}
.table-title h2 {
  margin: 8px 0 0;
  font-size: 22px;
}
.search-box {
  position: relative;
  float: right;
}
.search-box input {
  height: 34px;
  border-radius: 20px;
  padding-left: 35px;
  border-color: #ddd;
  box-shadow: none;
}
.search-box input:focus {
  border-color: #3fbae4;
}
.search-box i {
  color: #a0a5b1;
  position: absolute;
  font-size: 19px;
  top: 8px;
  left: 10px;
}
table.table tr th,
table.table tr td {
  border-color: #e9e9e9;
}
table.table-striped tbody tr:nth-of-type(odd) {
  background-color: #fcfcfc;
}
table.table-striped.table-hover tbody tr:hover {
  background: #f5f5f5;
}
table.table th i {
  font-size: 13px;
  margin: 0 5px;
  cursor: pointer;
}
table.table td:last-child {
  width: 130px;
}
table.table td a {
  color: #a0a5b1;
  display: inline-block;
  margin: 0 5px;
}
table.table td a.view {
  color: #03a9f4;
}
table.table td a.edit {
  color: #ffc107;
}
table.table td a.delete {
  color: #e34724;
}
table.table td i {
  font-size: 19px;
}
.pagination {
  float: right;
  margin: 0 0 5px;
}
.pagination li button {
  border: none;
  font-size: 95%;
  width: 30px;
  height: 30px;
  color: #999;
  margin: 0 2px;
  line-height: 30px;
  border-radius: 30px !important;
  text-align: center;
  padding: 0;
  outline: none;
}
.pagination li a:hover {
  color: #666;
}
.pagination li.active a {
  background: #03a9f4;
}
.pagination li.active a:hover {
  background: #0397d6;
}
.pagination li.disabled i {
  color: #ccc;
}
.pagination li i {
  font-size: 16px;
  padding-top: 6px;
}
.hint-text {
  float: left;
  margin-top: 6px;
  font-size: 95%;
}
.loader-wrapper {
  position: relative;
  width: 16rem;
  height: 16rem;
}
#loader-wrapper {
  top: 10vh;
  left: 32vw;
}
</style>
