//Aquí voy a tener todas las funciones para crear un nuevo registro
import { createQuotesClient } from "../api/QuotesClients.js"
import { getClients } from "../api/clients.js"
import { getProducts } from "../api/products.js"
import { createQuotesSupplier } from "../api/QuotesSuppliers.js"
import { getSupplier } from "../api/suppliers.js"

export const QuotesClients = {
    create: createQuotesClient,
    get: { 
        client: getClients,
        product: getProducts,
    },
    param: ["nit", "name"]
}

export const QuotesSuppliers = {
    create: createQuotesSupplier,
    get: { 
        supplier: getSupplier,
        product: getProducts,
    },
    param: ["nit", "name"]
}
