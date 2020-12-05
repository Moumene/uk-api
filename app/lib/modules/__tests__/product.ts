import ProductService from '../product/service';
import products from "../product/products";

describe('Products', () => {
    it('should return all products', function () {
        const productService: ProductService = new ProductService();
        const result = productService.filterProduct();

        expect(result).toEqual(products);
    });
});
