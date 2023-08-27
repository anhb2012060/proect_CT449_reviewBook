<template>
    <div class="book-create-view container">
        <form method="POST" @submit.prevent="addNewBook()" action="" class="form-create">
            <h2>Thêm sách</h2>
            <hr>
            <div class="form-group">
                <label for="book_id">Mã sách</label>
                <input type="text" class="form-control" id="book_id" placeholder="VD: CT20K1" v-model="posts.ID">
            </div>
            <div class="form-group">
                <label for="book_name">Tên sách</label>
                <input type="text" class="form-control" id="book_name" placeholder="VD: Phát triễn ứng dụng web" v-model="posts.name">
            </div>
            <div class="form-group">
                <label for="author_name">Tên tác giả</label>
                <input type="text" class="form-control" id="author_name" placeholder="VD: Nguyễn Văn A" v-model="posts.author">
            </div>
            <div class="form-group">
                <label for="book_description">Mô tả sách</label>
                <textarea class="form-control" id="book_description" rows="3" placeholder="Nhập mô tả sách" v-model="posts.description"></textarea>
            </div>
            <div class="form-group">
                <label for="book_quantity">Số lượng sách</label>
                <input type="number" class="form-control" id="book_quantity" placeholder="Nhập số lượng sách" v-model="posts.quantity">
            </div>
            <div class="form-group">
                <label class="form-label" for="pathURL">Hình ảnh sách</label><br>
                <input type="file" name="name-file" id="pathURL">
            </div>
            <button type="reset" class="btn btn-primary text-uppercase delete-book" @click="reset()">Xóa</button>
            <button type="submit" class="btn btn-primary text-uppercase" @click="getNameFileImg()">Thêm sách</button>
            </form>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            posts: {
                ID: null,
                name: null,
                description: null,
                image: null,
                author: null,
                quantity: null,
                slug: null
            }
        }
    },

    methods: {
        getNameFileImg() {
            const fake_path = document.getElementById('pathURL').value;
            this.posts.image = fake_path.split("\\").pop();
        },

        addNewBook() {
            axios.post('http://localhost:3000/admin/books/store', this.posts)
                .then(res => {
                    if (res.data.status === 200) {
                        window.alert("Thêm sách mới thành công")

                        this.posts.ID = "";
                        this.posts.name = "";
                        this.posts.author = "";
                        this.posts.description = "";
                        this.posts.quantity = "";
                        this.posts.image = "";
                        document.getElementById('pathURL').value = "";
                    }
                    else if (res.data.status === 500) {
                        window.alert("Thêm sách mới thất bại")
                    }
                })
                .catch(err => console.log(err))
        },
        reset() {
             document.getElementById("form-create").reset();
        },
    }
}
</script>

<style scoped>
    form {
        background-color: #fff;
        padding: 20px;
        border: 1px solid #CCC;
        border-radius: 10px;
        box-shadow: 0px 0px 10px rgba(0,0,0,0.2);
    }
    form h2 {
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
</style>
