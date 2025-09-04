//Productos
export const schemaProducts = [{
    name: "UniqueID",
    alias: "ID",
    type: "number",
    required: false,
    create: false,
    edit: false,
    filter: true,
    tableView: true
    },
    {
    name: 'name',
    alias: "Nombre",
    type: 'text',
    example: "Cristian Altamar",
    required: true,
    create: true,
    edit: true,
    filter: true,
    tableView: true
}]

//Clientes
export const schemaThird = [{
    name: "UniqueID",
    alias: "ID",
    type: "number",
    required: false,
    create: false,
    edit: false,
    filter: true,
    tableView: true
    },
    {
    name: "name",
    alias: "Nombre",
    type: "text",
    example: "Prosolser sas",
    required: true,
    create: true,
    edit: true,
    filter: true,
    tableView: true
    },
    {
    name: "nit",
    alias: "NIT",
    type: "number",
    example: "900959848",
    required: true,
    create: true,
    edit: true,
    filter: true,
    tableView: true
    },
    {
    name: "contact",
    alias: "Contacto",
    type: "text",
    example: "Maria Carolina",
    required: false,
    create: true,
    edit: true,
    filter: false,
    tableView: true
    },
    {
    name: "address",
    alias: "Dirección",
    type: "text",
    example: "Direccion...",
    required: false,
    create: true,
    edit: true,
    filter: false,
    tableView: true
    },
    {
    name: "phone",
    alias: "Tel/cel",
    type: "number",
    example: "300 640 7390",
    required: false,
    create: true,
    edit: true,
    filter: false,
    tableView: true
    }
]

//QuoteClients
export const schemaQuotesClients = [
    {
    name: "UniqueID",
    alias: "ID",
    type: "number",
    required: true,
    create: true,
    edit: false,
    filter: true,
    tableView: true
    },
    {
    name: "dateStart",
    alias: "Fecha",
    type: "date",
    example: "10-05-2025",
    required: false,
    create: false,
    edit: false,
    filter: true,
    tableView: false
    },
    {
    name: "dateEnd",
    alias: "Fecha",
    type: "date",
    example: "10-05-2025",
    required: false,
    create: false,
    edit: false,
    filter: true,
    tableView: false
    },
    {
    name: "date",
    alias: "Fecha",
    type: "date",
    example: "10-05-2025",
    required: true,
    create: true,
    edit: true,
    filter: false,
    tableView: true
    },
    {
    name: "clientID",
    alias: "ClientID",
    type: "number",
    required: false,
    create: false,
    edit: false,
    filter: false,
    tableView: false
    },
    {
    name: "client",
    alias: "Cliente",
    type: "text",
    required: true,
    create: true,
    edit: true,
    filter: true,
    tableView: true,
    link: "clients"
    },
    {
    name: "delivery",
    alias: "Entrega",
    type: "text",
    required: false,
    create: true,
    edit: true,
    filter: false,
    tableView: true
    }
]

export const schemaQuotesClientsDetails = [
    {
    name: "UniqueID",
    alias: "ID",
    type: "number",
    required: false,
    create: false,
    edit: false,
    filter: false,
    tableView: false
    },
    {
    name: "product_id",
    alias: "ProductoID",
    type: "number",
    required: false,
    create: false,
    edit: false,
    filter: false,
    tableView: false
    },
    {
    name: "product",
    alias: "Producto",
    type: "text",
    required: true,
    create: true,
    edit: true,
    filter: true,
    tableView: true,
    link: "products"
    },
    {
    name: "und",
    alias: "Unidad",
    type: "text",
    required: true,
    create: true,
    edit: true,
    filter: false,
    tableView: true
    },
    {
    name: "quantity",
    alias: "Cantidad",
    type: "number",
    required: true,
    create: true,
    edit: true,
    filter: false,
    tableView: true
    },
    {
    name: "reference_price",
    alias: "Referencia",
    type: "number",
    required: true,
    create: true,
    edit: true,
    filter: false,
    tableView: true,
    link: "products"
    },
    {
    name: "increment",
    alias: "Incremento",
    type: "number",
    required: true,
    create: true,
    edit: true,
    filter: false,
    tableView: true
    },
    {
    name: "sale_price",
    alias: "Precio",
    type: "number",
    required: true,
    create: true,
    edit: true,
    filter: true,
    tableView: true
    },
    {
    name: "total",
    alias: "Total",
    type: "number",
    required: false,
    create: false,
    edit: false,
    filter: false,
    tableView: true
    }
]


//Defaulf schema
export const d = [
            {name: "limit", alias: "limite", type: "text",editable: true, view: false},
            {name: "page", alias: "pagina", type: "number", editable: true, view: false}]
