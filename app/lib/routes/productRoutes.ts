import {Application, Request, Response} from "express";
import {ProductController} from "../controllers/productController";

export class ProductRoutes {

    private productController: ProductController = new ProductController();

    public route(app: Application) {
        app.get('/api/products', (req: Request, res: Response) => {
            this.productController.getProducts(req, res);
        })
    }
}
