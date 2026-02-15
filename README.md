# 🛒 Product Inventory API

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
![Mongoose](https://img.shields.io/badge/Mongoose-880000?style=for-the-badge&logo=mongoose&logoColor=white)
![dotenv](https://img.shields.io/badge/dotenv-ECD53F?style=for-the-badge&logo=dotenv&logoColor=black)

Backend API supporting product filtering using query parameters.

------------------------------------------------------------------------

## 🚀 Features

-   Add Products
-   Filter by Category

------------------------------------------------------------------------

## 📌 Filtering Example

GET `/api/products?category=Electronics`

Response:

``` json
{
  "success": true,
  "count": 2,
  "data": [
    {
      "name": "iPhone",
      "category": "Electronics",
      "price": 30000
    }
  ]
}
```
