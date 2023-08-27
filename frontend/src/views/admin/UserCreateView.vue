<template>
    <div class="book-create-view container">
        <form method="POST" @submit.prevent="register" action="" class="form-create">
            <h2>Thêm người dùng</h2>
            <hr>
            <div class="form-group">
                <label for="book_id">Họ tên</label>
                <input type="text" class="form-control" id="book_id" placeholder="VD: Nguyễn Văn A" v-model="posts.name">
            </div>
            <div class="form-group">
                <label for="book_name">Username</label>
                <input type="text" class="form-control" id="book_name" placeholder="VD: duyanh" v-model="posts.username">
            </div>
            <div class="form-group">
                <label for="author_name">Password</label>
                <input type="password" class="form-control" id="author_name" placeholder="VD: 123456aa" v-model="posts.password">
            </div>
            <div class="form-group">
                <label for="book_description" id="gioitinh">Giới tính</label>
                <select class="select" id="gender" v-model="posts.gender">
                    <option>Nam</option>
                    <option>Nữ</option>
                    <option>Khác</option>
                </select>
            </div>
            <div class="form-group">
                <label for="book_quantity" id="vitri">Vị trí</label>
                <select class="select" id="gender" v-model="posts.position">
                    <option>Người dùng</option>
                    <option>Admin</option>
                </select>
            </div>
            <button type="reset" class="btn btn-primary text-uppercase delete-book" @click="reset()">Xóa</button>
            <button type="submit" class="btn btn-primary text-uppercase">Thêm người dùng</button>
            </form>
    </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      posts: {
        name: null,
        gender: null,
        username: null,
        password: null,
      },
    };
  },

  methods: {
    reset() {
      document.getElementById("form-sign-up").reset();
    },

    register() {
      axios
        .post("http://localhost:3000/auth/register", this.posts)
        .then((res) => {
          if (res.data.status == 200) {
                window.alert("Thêm người dùng thành công");
          }else if (res.data.status == 500) {
                window.alert("Thêm người dùng thất bại");
          } ;

          this.posts.name = "";
          this.posts.gender = "";
          this.posts.username = "";
          this.posts.password = "";
        })
        .catch((err) => console.log(err));
    },
  },
};
</script>

<style scoped>
    form {
        background-color: #fff;
        padding: 20px;
        border: 1px solid #CCC;
        border-radius: 10px;
        box-shadow: 0px 0px 10px rgba(0,0,0,0.2);
    }
    h2 {
        text-align: center;
        color: #555;
        text-transform: uppercase;
        font-weight: bold;
        margin-bottom: 30px;
    }

    .form-group label {
    color: #555;
    font-weight: bold;
    margin-bottom: 10px;
    }

    .form-control {
    border: 2px solid #CCC;
    border-radius: 5px;
    transition: all 0.5s ease;
    }

    .form-control:focus {
        box-shadow: 0px 0px 10px rgba(0,0,0,0.2);
        border-color: #007bff;
    }

    .form-group .btn {
    margin-top: 20px;
    background-color: #007bff;
    border-color: #007bff;
    }

    .form-group .btn:hover {
    background-color: #0069d9;
    border-color: #0062cc;
    }

    #book_image {
        margin-top: 10px;
        border: 2px dashed #CCC;
        padding: 10px;
        text-align: center;
    }

    #book_image img {
        max-width: 100%;
    }
    .form-create{
        background-color: #f0f2f5;
    }
    .delete-book{
        margin-right: 10px;
    }
    .container{
        margin: 16px auto;
    }
    #vitri{
        padding-right: 15px;
    }
    #gioitinh{
        padding-right: 15px;
    }
</style>
