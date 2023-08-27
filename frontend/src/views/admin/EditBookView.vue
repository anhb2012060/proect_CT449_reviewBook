<template>
    <div class="edit-book-view container">
        
        <form method="POST" @submit.prevent="updateBook" class="form-edit">
            <h2>Cập Nhật thông tin sách</h2>
            <hr>
            <div class="form-row">
                <div class="form-group col-md-3">
                    <label for="id-book">ID sách</label>
                    <input type="text" class="form-control" id="id-book" v-model="this.book.ID">
                </div>
                <div class="form-group col-md-6">
                    <label for="name-book">Tên sách</label>
                    <input type="text" class="form-control" id="name-book" v-model="this.book.name">
                </div>
                <div class="form-group col-md-3">
                    <label for="name-author">Tên tác giả</label>
                    <input type="text" class="form-control" id="name-author" v-model="this.book.author">
                </div>
            </div>

            <div class="form-group mb-4">
                <label class="form-label" for="descript">Mô tả sách</label>
                <textarea class="form-control" id="descript" rows="8" v-model="this.book.description"></textarea>
            </div>

            <div class="form-group mb-4">
                <label for="quantity" class="form-label">Số lượng sách </label><br />
                <input type="number" id="quantity" min="0" max="100" v-model="this.book.quantity">
            </div>

            <div class="form-group mb-4">
                <label class="form-label" for="pathURL">Chọn hình ảnh</label><br>
                <input type="file" name="name-file" id="pathURL" @click="getNameFileImg">
            </div>

            <button type="submit" class="btn btn-primary text-uppercase">
                Cập nhật
            </button>
        </form>
    </div>
</template>

<script>

import axios from 'axios';

export default {
    data() {
        return {
            book: {
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

    computed: {
        id() {
            return this.$route.params.id;
        }
    },

    created() {
        axios
            .get('http://localhost:3000/admin/books/' + this.id + '/edit')
            .then(res => {
                this.book = res.data;
            })
            .catch(err => {
                console.log(err)
            })
    },

    methods: {
        getNameFileImg() {
            const fake_path = document.getElementById('pathURL').value;
            this.posts.image = fake_path.split("\\").pop();
        },

        updateBook() {
            axios.put('http://localhost:3000/books/' + this.id, this.book)
                .then(res => {
                    if (res.data.status === 201) {
                        this.$router.push('/admin/stored/books');
                        window.alert("Cập nhật thông tin sách thành công")
                    }
                    else if (res.data.status === 501) {
                        window.alert("Cập nhật thông tin sách thất bại")
                    }

                })
                .catch(err => console.log(err))
        },
    }
}
</script>

<style scoped>
.edit-book-view {
    margin: 16px auto;
}

.form-group label {
    font-weight: bold;
}
.form-edit{
    background-color: #f0f2f5;
}
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
</style>
