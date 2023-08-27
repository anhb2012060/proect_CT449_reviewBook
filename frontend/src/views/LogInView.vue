<template>
  <div class="container mt-5 bg-image">
    <div class="row">
      <div class="col-md-6 mx-auto">
        <form method="POST" @submit.prevent="loginUser()" class="form-login">
            <h2 class="mb-5 text-uppercase text-center">Login</h2>
            <div class="form-outline mb-4">
                <label class="form-label" for="username">Username</label>
                <input type="text" id="username" class="form-control"
                    v-model="this.login.username" placeholder="Nhập Username"/>
            </div>

            <div class="form-outline mb-4">
                <label class="form-label" for="password">Password</label>
                <input type="password" id="password" class="form-control"
                    v-model="this.login.password" placeholder="Nhập Password"/>
            </div>

            <div class="text-center pt-1 mb-5 pb-1">
                <button type="submit" class="btn btn-primary btn-block gradient-custom-2">
                    <span class="btn-text">Login</span>
                    <span class="btn-icon">
                    <i class="fa fa-sign-in"></i>
                    </span>
                </button>
                </div>

          <!-- <div class="forgot-password">
            <a href="#">Forgot Password?</a>
          </div> -->
          <hr>
          <div class="create-account">
            <router-link to="/auth/register">Create New Account</router-link>
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
        login: {
            username: null,
            password: null,
        },
        };
    },

    methods: {
        async loginUser() {
        await axios
            .post("http://localhost:3000/auth/login", this.login)
            .then((res) => {
            if (res.data.status == 200) {
                const values = [res.data.user.name, res.data.user.position];
                localStorage.setItem("id", JSON.stringify(values));
                this.$router.push("/");
            }
 
            if (res.data.status == 404) {
                window.alert("Tài khoản hoặc mật khẩu không đúng");
            }
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
    .form-login {
        max-width: 600px;
        margin: 0 auto;
        background-color: #f0f2f5;
        padding: 30px;
        border-radius: 10px;
    }

    .form-login h2 {
        font-weight: 600;
        margin-bottom: 30px;
        color: #1877f2;
    }

    .form-login label {
    font-weight: 650;
    color: #65676b;
    }

    .form-login input[type="text"],
    .form-login input[type="password"] {
    background-color: #ffffff;
    border: none;
    border-radius: 5px;
    padding: 10px 15px;
    margin-bottom: 20px;
    }

    .form-login input[type="text"]:focus,
    .form-login input[type="password"]:focus {
    box-shadow: 0 0 0 2px #1877f2;
    }

    .form-login button[type="submit"] {
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

    .form-login button[type="submit"]:hover {
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
    #login {
    text-align: center;
    }
    .font-weight-bold{
        color: #1877f2;
        
    }
</style>