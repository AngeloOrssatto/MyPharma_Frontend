import React, { ReactElement, FC, useState, useEffect } from "react";
import { DataGrid, GridColDef } from '@mui/x-data-grid';

import api from '../services/api'

const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 100 },
    { field: 'name', headerName: 'Produto', width: 130 },
    { field: 'price', headerName: 'Preço', type: 'number', width: 130 },
    { field: 'description', headerName: 'Descrição', sortable: false, width: 250 },
    { field: 'update', headerName: 'Atualizar', sortable: false, width: 100 },
    { field: 'delete', headerName: 'Excluir', sortable: false, width: 100 }
];

const ListProducts: FC = (): ReactElement => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        loadProducts()
    }, []);

    async function loadProducts() {
        const response = await api.get('/products')
        console.log(response)
        setProducts(response.data)
    }

    return (
        <>
            <div style={{ height: 400, width: '100%' }}>
                <DataGrid
                    rows={products}
                    columns={columns}
                    pageSize={5}
                    rowsPerPageOptions={[5]}
                    // checkboxSelection
                    sx={{
                        position: "center"
                    }}
                />
            </div>
        </>
    )
}

export default ListProducts