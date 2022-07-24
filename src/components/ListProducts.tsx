import React, { ReactElement, FC, useState, useEffect } from "react";
import { DataGrid, GridCellEditCommitParams, GridColDef } from '@mui/x-data-grid';
import { LinearProgress, Pagination, Paper, Table, TableBody, TableCell, TableContainer, TableFooter, TableHead, TableRow } from '@mui/material';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

import { ProductsService } from '../services/products/ProductsService'

const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 100 },
    { field: 'name', headerName: 'Produto', width: 130, editable: true },
    { field: 'price', headerName: 'Preço', type: 'number', width: 130, editable: true },
    { field: 'description', headerName: 'Descrição', sortable: false, width: 250, editable: true },
    { field: 'update', headerName: 'Atualizar', sortable: false, width: 100 },
    { field: 'delete', headerName: 'Excluir', sortable: false, width: 100 }
];

interface IProduct {
    id: number;
    name: string;
    price: number;
    description: string;
    createdAt: Date;
    updatedAt: Date;
}

const ListProducts: FC = (): ReactElement => {

    const [products, setProducts] = useState<IProduct[]>([]);

    useEffect(() => {
        loadProducts()
    }, []);

    async function loadProducts() {
        const response = await ProductsService.getAllProducts()
        console.log(response)
        setProducts(response)
    }

    async function handleDelete(id:number) {
      const response = await ProductsService.deleteProduct(id)
      console.log(response)
      setProducts(oldProducts => [
        ...oldProducts.filter(oldProduct => oldProduct.id !== id),
      ]);
    }

    return (
        <>
        <TableContainer component={Paper} variant="outlined" sx={{ m: 1, width: 'auto' }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell width={100}>Ações</TableCell>
              <TableCell>Id</TableCell>
              <TableCell>Produto</TableCell>
              <TableCell>Preço</TableCell>
              <TableCell>Descrição</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products.map(product => (
              <TableRow key={product.id}>
                <TableCell>
                  <IconButton size="small" onClick={() => {handleDelete(product.id)}}>
                    <DeleteIcon>delete</DeleteIcon>
                  </IconButton>
                  <IconButton size="small" onClick={() => {}}>
                    <EditIcon>edit</EditIcon>
                  </IconButton>
                </TableCell>
                <TableCell>{product.id}</TableCell>
                <TableCell>{product.name}</TableCell>
                <TableCell>{product.price}</TableCell>
                <TableCell>{product.description}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>



            {/* <div style={{ height: 400, width: '100%' }}>
                <DataGrid
                    rows={products}
                    columns={columns}
                    pageSize={5}
                    rowsPerPageOptions={[5]}
                    // checkboxSelection
                    onCellEditCommit={handleCommit}
                    sx={{
                        position: "center"
                    }}
                />
            </div> */}
        </>
    )
}

export default ListProducts