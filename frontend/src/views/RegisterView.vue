<template>
      <div class="container mt-5 bg-image">
            <div class="row">
                <div class="col-md-6 mx-auto">
                <form method="POST" class="form-register" id="form-sign-up" @submit.prevent="register">
                    <h2 class="mb-5 text-uppercase text-center">Register</h2>

                    <div class="form-group form-outline mb-4">
                        <label class="form-label" for="name">Full name </label>
                        <input type="text" id="name"
                            class="form-control form-control-lg" v-model="posts.name" />
                    </div>

                    <div class="form-group form-outline mb-4">
                        <label class="form-label" for="username">Username </label>
                        <input type="text" id="username"
                        class="form-control form-control-lg" v-model="posts.username" />
                    </div>

                    <div class="form-group form-outline mb-4">
                        <label class="form-label" for="password">Password </label>
                        <input type="password" id="password"
                            class="form-control form-control-lg" v-model="posts.password" />   
                    </div>

                    <div class="form-group">
                            <label class="form-label gioitinh" for="gender">Giới tính </label>
                            <select class="select" id="gender" v-model="posts.gender">
                                <option>Nam</option>
                                <option>Nữ</option>
                                <option>Khác</option>
                            </select>
                    </div>
                    <div class="d-flex justify-content-end pt-4">
                            <button type="submit" class="btn btn-primary btn-block gradient-custom-2" >
                                <span class="btn-text">Register</span>
                            </button>
                    </div>

                    <hr>
                    <div class="login-link">
                        <p>Already have an account? <router-link to="/auth/login" id="login-here">Login here</router-link></p>
                    </div>
          </form>
        </div>
</div>
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
                window.alert("Đăng ký thành công");
                this.$router.push("/");
          }else if (res.data.status == 500) {
                window.alert("Đăng ký thất bại");
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
    padding: 20px;
    border: 1px solid #CCC;
    border-radius: 10px;
    box-shadow: 0px 0px 10px rgba(0,0,0,0.2);
}
.form-register {
    max-width: 600px;
    margin: 0 auto;
    background-color: #f0f2f5;
    padding: 30px;
    border-radius: 10px;
}

.form-register h2 {
    font-weight: 600;
    margin-bottom: 30px;
    color: #1877f2;
}

.form-register label {
  font-weight: 650;
  color: #65676b;
}

.form-register input[type="text"],
.form-register input[type="password"] {
  background-color: #ffffff;
  border: none;
  border-radius: 5px;
  padding: 10px 15px;
  margin-bottom: 4px;
}

.form-register input[type="text"]:focus,
.form-register input[type="password"]:focus {
  box-shadow: 0 0 0 2px #1877f2;
}

.form-register button[type="submit"] {
  /* background-color: #1877f2; */
  border: none;
  border-radius: 5px;
  color: #ffffff;
  font-size: 16px;
  font-weight: 600;
  padding: 12px 20px;
  margin-top: 20px;
  transition: background-color 0.3s;
}
.form-register button[type="button"] {
  background-color: #1877f2;
  border: none;
  border-radius: 5px;
  color: #ffffff;
  font-size: 16px;
  font-weight: 600;
  padding: 12px 20px;
  margin-top: 20px;
  transition: background-color 0.3s;
}
.form-register button[type="submit"]:hover {
  background-color: #166fe5;
}

.forgot-password {
  text-align: center;
  margin-top: 20px;
  color: #65676b;
}

.forgot-password a {
  color: #1877f2;
}

.social-login {
  text-align: center;
  margin-top: 30px;
}

.social-login h4 {
  font-weight: 600;
  margin-bottom: 20px;
  color: #65676b;
}

.social-login button {
  background-color: #ffffff;
  border: 1px solid #d3d3d3;
  border-radius: 5px;
  color: #1877f2;
  font-size: 16px;
  font-weight: 600;
  padding: 12px 20px;
  margin-right: 10px;
}

.social-login button i {
  margin-right: 10px;
}

.social-login button:hover {
  background-color: #e9eff7;
}

.create-account {
  text-align: center;
  margin-top: 30px;
  color: #65676b;
}

.create-account a {
  color: #1877f2;
}

#register {
  text-align: center;
}
.gioitinh {
  padding-right: 25px;
}
#login-here{
  text-decoration: none;
  color: #166fe5;
}
#login-here:hover{
  color: black;
}
</style>
