import {Request, Response} from 'express';
import axios from 'axios';
import {FIXER_API} from '../utils/api';
import env from './../environment';
import ProductService from "../modules/product/service";
import {failureResponse, successResponse} from "../modules/common/service";

export class ProductController {

    private productService: ProductService = new ProductService();

    public async getProducts(req: Request, res: Response) {
        try {
            // get the selected currency
            const currency = req.query.currency;
            let result = [];
            if (currency && typeof currency === "string" && currency !== "USD") {
                // convert the price before sending the result
                result = this.productService.filterProduct();
                result = await Promise.all(
                    result.map(async (item) => {
                        item.priceUSD = await this.getNewPrice(item.priceUSD, currency);
                        return item;
                    }));
                console.log(result);
            } else {
                result = this.productService.filterProduct();
            }
            successResponse("products fetched successfully", result, res);
        } catch (e) {
            failureResponse("can't perform this action", null, res);
        }
    }

    private async getNewPrice(priceUSD: Number, currency: String) {
        console.log('converting the price', priceUSD, currency);
        const newPrice = await axios.get(FIXER_API(env.getFixerApiKey()), {
            params: {
                from: "USD",
                to: currency,
                amount: priceUSD,
            }
        });
        console.log(newPrice?.data?.success);
        if (newPrice?.data?.success) {
            return newPrice.data?.result;
        }
        return 0;
    }
}
