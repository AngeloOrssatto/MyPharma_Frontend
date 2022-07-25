// pages
import Home from "./pages/Home";
import EditProduct from "./pages/EditProduct";
import Products from "./pages/Products";

// other
import {FC} from "react";

// interface
interface Route {
    key: string,
    title: string,
    path: string,
    enabled: boolean,
    component: FC<{}>
}

export const routes: Array<Route> = [
    {
        key: 'products-insert-route',
        title: 'Inserir',
        path: '/',
        enabled: true,
        component: Home
    },
    {
        key: 'products-route',
        title: 'Listagem',
        path: '/products',
        enabled: true,
        component: Products
    },
    {
        key: 'products-edit-route',
        title: 'Edit Products',
        path: '/products/:id',
        enabled: true,
        component: EditProduct
    }

]