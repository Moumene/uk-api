import express from "express";
import bodyParser from "body-parser";
import {TestRoutes} from "../routes/testRoutes";
import {CommonRoutes} from "../routes/commonRoutes";
import {ProductRoutes} from "../routes/productRoutes";
import {CurrencyRoutes} from "../routes/currencyRoutes";

class App {
    public app: express.Application;
    private productRoutes: ProductRoutes = new ProductRoutes();
    private currencyRoutes: CurrencyRoutes = new CurrencyRoutes();
    private testRoutes: TestRoutes = new TestRoutes();
    private commonRoutes: CommonRoutes = new CommonRoutes();

    constructor() {
        this.app = express();
        this.config();
        this.testRoutes.route(this.app);
        this.productRoutes.route(this.app);
        this.currencyRoutes.route(this.app);
        this.commonRoutes.route(this.app);
    }

    private config(): void {
        // support application/json type post data
        this.app.use(bodyParser.json());
        //support application/x-www-form-urlencoded post data
        this.app.use(bodyParser.urlencoded({extended: false}));
    }
}

export default new App().app;
