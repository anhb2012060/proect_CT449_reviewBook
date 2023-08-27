const mongoose = require('mongoose');
const bcrypt = require("bcryptjs");

const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: { type: String, maxLength: 12, required: true, unique: true },
    password: { type: String, maxLength: 16, required: true },
    name: { type: String, maxLength: 50 },
    gender: { type: String, enum: ['Nam', 'Nữ','Khác'], default: 'Nam' },
    // mssv:{ type: String, maxLength: 50 },
    position: { type: String, enum: ['Admin','Người dùng'], default: 'Người dùng' },
}, { collection: 'users' });

const User = mongoose.model('User', userSchema);
module.exports = User;
