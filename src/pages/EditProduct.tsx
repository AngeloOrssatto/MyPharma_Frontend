import React, {ReactElement, FC, useEffect, useState} from "react";
import {Box} from "@mui/material";
import { useNavigate, useParams } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { ProductsService } from '../services/products/ProductsService'

const EditProduct: FC<any> = (): ReactElement => {
    const { id } = useParams<'id'>();
    const navigate = useNavigate()

    const [name, setName] = useState("")
    const [price, setPrice] = useState(0)
    const [description, setDescription] = useState("")

    const onNameChange = (e: any) => setName(e.target.value)
    const onPriceChange = (e: any) => setPrice(e.target.value)
    const onDescriptionChange = (e: any) => setDescription(e.target.value)

    useEffect(() => {
        loadProduct() 
    }, [])

    async function loadProduct() {
        const data = await ProductsService.getProductById(Number(id))
        console.log(data)
        setName(data.name)
        setPrice(data.price)
        setDescription(data.description)
    }

    const handleSubmit = () => {
        update()
        navigate('/products')
    }

    async function update() {
        const response = await ProductsService.updateProduct(Number(id), name, price, description)
        console.log(response)
        
    }

    return (
        <Box sx={{
            flexGrow: 1,
            backgroundColor: 'whitesmoke',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            
            <Stack direction="row" spacing={2}>

                <TextField
                required
                id="outlined-required"
                label="Produto"
                value={name}
                onChange={onNameChange}
                />
                <TextField
                required
                id="outlined-required"
                label="Preço"
                type="number"
                value={price}
                onChange={onPriceChange}
                />
                <TextField
                required
                id="outlined-required"
                label="Descrição"
                value={description}
                onChange={onDescriptionChange}
                />
            
            
                <Button 
                    variant="contained" 
                    size="large" 
                    color="success"
                    onClick={handleSubmit}    
                    >
                    Atualizar
                </Button>
            </Stack>
            
        </Box>
    );
};

export default EditProduct;