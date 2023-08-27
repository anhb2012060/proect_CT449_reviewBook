<template>
    <div class="nav-bar-view">
        <header>
            <nav class="navbar navbar-expand-lg bg-info">
                <!-- Logo -->
                <router-link class="navbar-brand" to="/">
                </router-link>

                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">

                        <!-- Home page -->
                        <div class="home">
                            <li class="nav-item active">
                                    <router-link to="/" class="nav-link"><span style="color: dimgrey;"><i class="fas fa-home"></i></span>Home<span class="sr-only">(current)</span></router-link>
                            </li>
                        </div>
                        <li>
                            <div v-if="this.position == 'Admin'">
                                <nav class="navbar ">
                                    <div class="collapse navbar-collapse" id="navbarNav">
                                        <ul class="navbar-nav">
                                            <li class="nav-item">
                                                <router-link to="/admin/books/create" class="nav-link">
                                                    <span style="color: dimgrey;"><i class="fas fa-book"></i></span>
                                                    Add books
                                                </router-link>
                                            </li>
                                            <li class="nav-item">
                                                <router-link to="/admin/users/create" class="nav-link">
                                                    <span style="color: dimgrey;"><i class="fas fa-user"></i></span>
                                                    Add users
                                                </router-link>
                                            </li>
                                            <li class="nav-item">
                                                <router-link to="/admin/stored/books" class="nav-link">
                                                    <span style="color: dimgrey;"><i class="fas fa-store-alt"></i></span>
                                                    Bookstore
                                                </router-link>
                                            </li>
                                            <li class="nav-item">
                                                <router-link class="nav-link" to="/admin/users">
                                                    <span style="color: dimgrey;"><i class="fas fa-users"></i></span>
                                                    User list
                                                </router-link>
                                            </li>
                                        </ul>
                                    </div>
                                </nav>
                            </div>
                        </li>
                    </ul>

                    <!-- Dropdown menu -->
                    <ul class="nav navbar-nav navbar-right">
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle mb-1" href="#" id="navbarDropdown" role="button"
                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <span style="color: chartreuse;"><i class="fas fa-check-circle"></i></span>
                                {{ this.id }}
                            </a>
                            <div class="dropdown-menu text-dark mt-2 menu-user" aria-labelledby="navbarDropdown" id="out">
                                <router-link v-on:click="logoutUser()" class="dropdown-item text-dark" to="/">
                                    <i class="fas fa-sign-out-alt"></i>
                                    Đăng xuất
                                </router-link>
                            </div>

                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    </div>
</template>

<script>

export default {
    computed: {
        id() {
            const name = JSON.parse(localStorage.getItem("id"))[0];
            return name || null;
        }, 
        position() {
            const position = JSON.parse(localStorage.getItem("id"))[1];
            return position || null;
        }
    },
    methods: {
        logoutUser() {
            localStorage.clear();
            this.$router.push('/auth/login');
        }
    },
}
</script>

<style>
.logo {
    width: 40px;
}

a {
    color: #fff;
    text-decoration: none;
}

i {
    display: inline-block;
    width: 1rem;
    height: 1rem;
    margin: 0 8px 0 0;
}
.home{
    padding-top: 27px;
}
.nav-item{
    padding: 0px 30px;
}
#out{
    margin:0px  45px;
}
.navbar{
    height: 94px;
}
</style>