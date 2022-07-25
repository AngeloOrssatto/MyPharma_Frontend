import React, {ReactElement, FC} from "react";
import {Box, Typography} from "@mui/material";
import InputProduct from "../components/products/InputProduct";

const EditProduct: FC<any> = (): ReactElement => {
    return (
        <Box sx={{
            flexGrow: 1,
            backgroundColor: 'whitesmoke',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            {/* <Typography variant="h3">EditProduct</Typography> */}
            <InputProduct></InputProduct>
            
        </Box>
    );
};

export default EditProduct;