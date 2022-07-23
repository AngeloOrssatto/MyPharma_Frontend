import React, { ReactElement, FC } from "react";
import { Box, Typography } from "@mui/material";
import InputProduct from "../components/InputProduct";
import ListProducts from "../components/ListProducts";


const Products: FC<any> = (): ReactElement => {
  
  return (
    <Box
      sx={{
        flexGrow: 1,
        backgroundColor: "whitesmoke",
        display: "row",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography variant="h3" sx={{
        margin: '20px',
      }}>Produtos</Typography>
      
    <InputProduct></InputProduct>

    <ListProducts></ListProducts>

    </Box>
  );
};

export default Products;