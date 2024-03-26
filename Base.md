## FUNTIONCS REACT

## Funciones

user/login - "/api/v1/usuario/login"
user/register - /api/v1/usuario/register
user/update - /api/v1/usuario/update
user/getUser - /api/v1/usuario
user/updatePassword - /api/v1/usuario/updatepassword`
user/forgotPassword - /api/v1/usuario/forgotpassword
user/resetPassword - /api/v1/usuario/resetpassword

## PRODUCT ACTIONS

products/getProducts - /api/v1/product/list
products/getProductId - /api/v1/product/${id}
products/getProductPagination - api/v1/product/pagination?${paramUrl}
products/create - /api/v1/product/create

## ORDER ACTIONS

order/saveOrder - /api/v1/order
order/payment - /api/v1/payment
products/getProducts - /api/v1/order/paginationAdmin
orders/getOrderById - /api/v1/order/${id}
products/getProductPagination - api/v1/order/paginationByUsername

## COUNTRY ACTIONS

country/getCountries - /api/v1/Country

## CATEGORY ACTIONS

category/getCategories - /api/v1/category/list

## CART ACTIONS

shoppingCart/GetById - /api/v1/ShoppingCart/${shoppingCartId}
shoppingCart/update - /api/v1/ShoppingCart/${params.shoppingCartId}
shoppingCart/removeItem - /api/v1/ShoppingCart/item/${params.id}
shoppingCart/saveAddressInfo - api/v1/order/address
