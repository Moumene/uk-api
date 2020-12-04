import {Request, Response} from "express";
import CurrencyService from "../modules/currency/service";
import {failureResponse, successResponse} from "../modules/common/service";

export class CurrencyController {

    private currencyService: CurrencyService = new CurrencyService();

    public getCurrency(req: Request, res: Response) {
        const country = req.query?.country || "";
        try {
            let strCountry = "";
            if (typeof country === "string" && country.length > 0)  {
               strCountry = country;
            }
            successResponse(
                "data fetched successfully",
                this.currencyService.getCurrencyByCountry(strCountry),
                res
            );
        } catch (e) {
            failureResponse("an error occurred while getting currency", null, res);
        }
    }
}
