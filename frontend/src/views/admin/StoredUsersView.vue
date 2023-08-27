<template>
  <div class="stored-users-view container">
    <table class="table table-bordered table-hover">
      <thead class="text-primary">
        <tr class="text-uppercase">
          <th class="col-1 store" scope="col">STT</th>
          <th class="col-2 store" scope="col">Username</th>
          <th class="col-2 store" scope="col">Password</th>
          <th class="col-2 store" scope="col">Họ tên</th>
          <th class="col-2 store" scope="col">Giới tính</th>
          <th class="col-1 store" scope="col">Vai trò</th>
          <th class="col store" colspan="2">Chỉnh sửa</th>
        </tr>
      </thead>
      <tbody class="table-user">
        <tr class="text-justify" v-for="(user, index) in users" :key="index">
          <th scope="row" class="center">{{ index + 1 }}</th>
          <td class="center">{{ user.username }}</td>
          <td class="center center-password">
            {{ maskPassword(user.password) }}
          </td>
          <td class="center">{{ user.name }}</td>
          <td class="center">{{ user.gender }}</td>
          <td class="center">{{ user.position }}</td>
          <td class="center">
            <router-link
              :to="'/admin/users/' + user._id + '/edit'"
              class="btn btn-link"
            >
              <span style="color: cadetblue"><i class="fas fa-pen"></i></span>
            </router-link>
            <a
              href=""
              class="btn btn-link"
              @click="getIdUser(user)"
              :data-id="user._id"
              data-toggle="modal"
              data-target="#delete-user-modal"
            >
              <span style="color: red"><i class="fas fa-trash"></i></span>
            </a>
          </td>
        </tr>
      </tbody>
    </table>

    <!-- Modal -->
    <div
      class="modal fade"
      id="delete-user-modal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalCenterTitle"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLongTitle">
              Xóa người dùng?
            </h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            Bạn có chắc muốn xóa Người dùng này không?
          </div>
          <div class="modal-footer">
            <button type="button" @click="deleteUser()" class="btn btn-danger">
              Xóa bỏ
            </button>
            <button
              type="button"
              class="btn btn-secondary"
              data-dismiss="modal"
            >
              Hủy
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
  
  <script>
import axios from "axios";

export default {
  data() {
    return {
      users: [],
      id: null,
    };
  },

  created() {
    axios
      .get("http://localhost:3000/admin/users")
      .then((res) => {
        this.users = res.data.users;
      })
      .catch((err) => {
        console.log(err);
      });
  },

  methods: {
    getIdUser(user) {
      this.id = user._id;
    },

    deleteUser() {
      axios
        .delete("http://localhost:3000/users/" + this.id)
        .then(() => {
          console.log(this.id);
          this.$router.push("/admin/users");
          window.alert("Xóa thành công");
          window.location.reload();
        })
        .catch((err) => console.log(err));
    },

    maskPassword(password) {
      let maskedPassword = "";
      for (let i = 0; i < password.length; i++) {
        maskedPassword += "*";
      }
      return maskedPassword;
    },
  },
};
</script>


<style scoped>
table {
  background-color: #fff;
  padding: 20px;
  border: 2px solid #ccc;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
}
.stored-users-view {
  margin: 16px auto;
}

.btn.btn-link {
  text-decoration: none;
}
.table-user {
  background-color: #f0f2f5;
}
[class*="store"] {
  color: black;
  text-align: center;
}
.center {
  text-align: center;
}
</style>
 