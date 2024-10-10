import path from 'path';

const viewEngine = (app) => {
    app.set("view engine", "ejs");
    app.set("views", "./views"); // Đảm bảo đường dẫn tới thư mục view
};

export default viewEngine;