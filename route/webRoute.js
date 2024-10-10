import express from "express";
import getHomePage from "../controller/HomeController";
import aboutPage from "../controller/AboutController";
const router = express.Router()
const initWebRoute = (app) => {
    router.get('/', getHomePage)

    router.get('/about', aboutPage)
    return app.use('/', router)

    


}
export default initWebRoute