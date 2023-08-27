<template>
    <div class="stored-books-view container">
        <table class="table table-bordered table-hover">
            <thead class="text-primary">
                <tr class="text-uppercase">
                <th class="col-1 store" scope="col">STT</th>
                <th class="col-1 store" scope="col">Mã sách</th>
                <th class="col-3 store" scope="col">Tên</th>
                <th class="col-2 store" scope="col">Tác giả</th>
                <th class="col-2 store" scope="col">Số lượng</th>
                <th class="col-2 store" colspan="2">Chỉnh sửa</th>
                </tr>
            </thead>
            <tbody id="table-book">
                <tr class="text-justify" v-for="(book, index) in books" :key="index" v-bind:class="{ 'bg-info': selectedRow === index }" v-on:mouseover="selectedRow = index" v-on:mouseleave="selectedRow = null">
                <th scope="row" class="center">{{ index + 1 }}</th>
                <td class="center">{{ book.ID }}</td>
                <td>{{ book.name }}</td>
                <td class="center">{{ book.author }}</td>
                <td class="center">{{ book.quantity }}</td>
                <td class="center">
                    <router-link :to="'/admin/books/' + book._id + '/edit'" class="btn btn-link"><span style="color: cadetblue;"><i class="fas fa-pen"></i></span></router-link>
                    <a href="" class="btn btn-link" @click="getIdBook(book)" :data-id="book._id" data-toggle="modal" data-target="#delete-book-modal"><span style="color: red;"><i class="fas fa-trash"></i></span></a>
                </td>
                </tr>
            </tbody>
        </table>
        <!-- Modal -->
        <div class="modal fade" id="delete-book-modal" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle"
            aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLongTitle">Xóa sách?</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        Bạn có chắc muốn xóa sách này?
                    </div>
                    <div class="modal-footer">
                        <button type="button" @click="deleteBook()" class="btn btn-danger">Xóa bỏ</button>
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Hủy</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            books: [],
            id: null
        }
    },

    created() {
        axios.get('http://localhost:3000/admin/stored/books')
            .then(res => {
                this.books = res.data.books;
            })
            .catch(err => {
                console.log(err)
            });
    },

    methods: {
        getIdBook(book) {
            this.id = book._id;
        },

        deleteBook() {
            axios.delete('http://localhost:3000/books/' + this.id)
                .then(() => {
                    console.log(this.id);
                    this.$router.push('/admin/stored/books');
                    window.alert("Xóa thành công")
                    window.location.reload()
                })
                .catch(err => console.log(err));
        },
    }
}
</script>

<style scoped>
table {
    background-color: #fff;
    padding: 20px;
    border: 2px solid #CCC;
    border-radius: 10px;
    box-shadow: 0px 0px 10px rgba(0,0,0,0.2);
}
.stored-books-view {
    margin: 16px auto;
}

.btn.btn-link {
    text-decoration: none;
}
#table-book{
    background-color: #f0f2f5;
}
[class*="store"] {
    color: black;
    text-align: center;
}
.center{
    text-align: center;
}
</style>
