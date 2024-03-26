import { configureStore } from "@reduxjs/toolkit";
import { productsReducer } from "./slices/productsSlice";
import { productByIdReducer } from "./slices/productByIdSlice";
import { productPaginationReducer } from "./slices/productPaginationSlice";
import { categoryReducer } from "./slices/categorySlice";
import { securityReducer } from "./slices/securitySlice";
import { forgotPasswordReducer } from "./slices/forgotPasswordSlice";
import { resetPasswordReducer } from "./slices/resetPasswordSlice";
import { cartReducer } from "./slices/cartSlice";
import { countryReducer } from "./slices/countrySlice";
import { orderReducer } from "./slices/orderSlice";
import filterReducer from "./slices/filterSlice";
import { tipoServicioReducer } from "./slices/tiposervicioSlice";
import { ServicioReducer } from "./slices/servicioSlice";
import { ForoReducer } from "./slices/ForoSlice";
import orderPaginationSlice from "./slices/orderPaginationSlice";

export default configureStore({
  reducer: {
    products: productsReducer,
    product: productByIdReducer,
    productPagination: productPaginationReducer,
    category: categoryReducer,
    security: securityReducer,
    forgotPassword: forgotPasswordReducer,
    resetPassword: resetPasswordReducer,
    cart: cartReducer,
    country: countryReducer,
    order: orderReducer,
    filter: filterReducer,
    tipoServicio: tipoServicioReducer,
    servicio: ServicioReducer,
    foro: ForoReducer,
    orderPagination: orderPaginationSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});
