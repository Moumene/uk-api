import {Application, Request, Response} from "express";
import {CurrencyController} from "../controllers/currencyController";

export class CurrencyRoutes {

    private currencyController: CurrencyController = new CurrencyController();

    public route(app: Application) {
        app.get('/api/currencies', (req: Request, res: Response) => {
            this.currencyController.getCurrency(req, res);
        })
    }
}
