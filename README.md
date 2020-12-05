# uk-api

My first typescript project

#### Setup & run

> yarn install

To run the project

> yarn dev


#### To test the code

> yarn test:unit

#### ENV

there's an env file with the current item `FIXER_API_KEY` used for the currency conversion


## GET PRODUCTS
the currency params is optional, by default the api return the price in USD.

`http://localhost:3000/api/products?currency=USD` 


## GET CURRENCIES

get all the currencies or only currency of a country

`http://localhost:3000/api/currencies?country=DZ` 

