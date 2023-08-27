<template>
    <div class="home-view container">
        <div class="row justify-content-center mb-3">
            <!-- Search books -->
            <form class="form-inline">
                <div class="input-group">
                    <input type="search" class="form-control" id="search-input" v-model="search" placeholder="Nhập tên sách hoặc tác giả cần tìm" aria-label="Search">
                </div>
            </form>
        </div>
  
        <div class="row">
            <template v-for="(book, index) in filteredList">
                <div :key="index" v-if="index < 20" class="col-md-4 mb-3">
                    <div class="card h-100 card-hover" id="form">
                        <router-link :to="'/books/' + book.slug">
                        <img class="card-img-top img-fluid img-book" :src="path + book.image" alt="Card image cap">
                        </router-link>
                        <div class="card-body">
                            <h5 class="card-title name-book">{{ book.name }}</h5>
                            <p class="card-text">Tác giả: {{ book.author }}</p>
                            <p class="card-text"><small class="text-muted">Mã sách: {{ book.ID }}</small></p>
                            <div class="like-button">
                                <button class="heart" @click="mounted"><i class="fa fa-heart"></i></button>
                                <span class="count">0</span>
                            </div>
                        </div>
                    </div>
                </div>
            </template>
        </div>

    </div>
</template> 
  
<script>

import axios from 'axios'
import staticPath from '../assets/staticPath';
export default {
    data() {
        return {
            search: '',
            books: []
        };
    },

    created() {
        axios
            .get("http://localhost:3000/")
            .then(res => {
                this.books = res.data.books;
            })
            .catch(err => {
                console.log(err);
            });
    },

    computed: {
        filteredList() {
            return this.books.filter(book => {
                return book.name.toLowerCase().includes(this.search.toLowerCase()) || book.author.toLowerCase().includes(this.search.toLowerCase())
            })
        },

        path() {
            return staticPath
        }, 
        mounted() {
            const likeButton = document.querySelector('.like-button');
            const heart = likeButton.querySelector('.heart');
            const count = likeButton.querySelector('.count');
            let isLiked = false;
            heart.addEventListener('click', () => {
                isLiked = !isLiked;
                heart.classList.toggle('active', isLiked);
                count.textContent = isLiked ? parseInt(count.textContent) + 1 : parseInt(count.textContent) - 1;
            });
        }
    },
};

</script>

<style scoped>
#form {
    background-color: #fff;
    border: 1px solid #CCC;
    border-radius: 20px;
    box-shadow: 0px 0px 10px rgba(0,0,0,0.2);
}
.button_search{
    border-radius: 10px;
}
.button_search:hover{
    background-color: #17a2b8;
}
.home-view {
    margin: 16px auto;
}

.card {
    display: inline-block;
    margin: 12px 8px;
}

.card .card-body .card-title {
    min-height: 3rem;
    color: chocolate;
}

.id-book {
    color: rgb(72, 186, 243);
}
.card-text{
    font-size: 16px;
}
.img-book{
    width: 300px;
    height: 360px;
    margin: 14px;
}
.card {
  transition: transform 0.2s ease-in-out;
  transform: scale(1);
}
.card:hover {
  transform: scale(1.05);
}
.like-button {
  display: inline-block;
  position: relative;
}

.heart {
  background-color: #fff;
  border: none;
  color: #e74c3c;
  cursor: pointer;
  font-size: 24px;
  height: 24px;
  outline: none;
  padding: 0;
  width: 24px;
  transition: color 0.2s;
}

.heart:hover {
  color: #c0392b;
}

.heart.active {
  color: #c0392b;
}

.count {
  position: absolute;
  top: 0;
  right: -15px;
  background-color: #c0392b;
  border-radius: 50%;
  color: #fff;
  font-size: 12px;
  font-weight: bold;
  height: 18px;
  line-height: 18px;
  text-align: center;
  width: 18px;
}
#search-input{
    width: 290px;
    border-radius: 10px;
}
</style> 

