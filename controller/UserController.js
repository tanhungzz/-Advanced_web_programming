import express from "express";
import userModel from "../Model/userModel";


const getAllUser = async (req, res) => {
    let userList = await userModel.getAllUser();
    res.render('home', { data: { title: 'List User', page: 'listUser', row: userList } });
    console.log(userList);
};

const detailUserUser = async (req, res) => {
    let user = req.params.id
    let detailUser = await userModel.detailUser(user)
    res.render('home', { data: { title: 'Detail User', page: 'detailUser', row: detailUser } });
};


const createUser = (req, res) => {
    res.render('home', { data: { title: 'Create New User', page: 'createNewUser' } });
};

// Xuất khẩu các hàm
export default { getAllUser, createUser, detailUserUser };


// Model>Page>Controller>Route