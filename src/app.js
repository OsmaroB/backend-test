require('dotenv').config();
const express = require("express");
const app = express();
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const swaggerOptions = {
    swaggerDefinition:{
        info: {
            title: "Products API",
            description: "Products API Information",
            contact: {
                name: "OsmaroBonilla"
            },
            servers: "http://localhost:5000"
        },
        paths:{
            "/":{
                get:{
                    tags:{
                        category: ' get categories',
                        provider: ' return list providers',
                        product: ' return list product with INNER JOIN products categories and providers',
                        
                    }
                }
            }
        }
    },
    // ['.routes/*.js']
    apis: ["index.js"]
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));


// Routes
/** 
 * @swagger
 * /category:
 *   get:
 *     description: Use to request all catogories
 *       responses: 
 *         '200':
 *           description: A successfull response
*/

app.use("/product", require("./routes/products.route"));
app.use("/category", require("./routes/categories.route"));
app.use("/provider", require("./routes/providers.route"));

module.exports = app;

