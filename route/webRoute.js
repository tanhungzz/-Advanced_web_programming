import express from "express";
import getHomePage from "../controller/HomeController";
import aboutPage from "../controller/AboutController";
import UserController from "../controller/UserController";

const router = express.Router()
const initWebRoute = (app) => {
    router.get('/', getHomePage)

    router.get('/about', aboutPage)   

    router.get('/listUser',UserController.getAllUser)

    router.get('/detailUser/:id',UserController.detailUserUser)


    return app.use('/', router)
}
export default initWebRoute