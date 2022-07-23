import React, { FC, ReactElement, useState } from "react";
import { useNavigate } from 'react-router-dom'
import { Box } from "@mui/material";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import api from '../services/api'


const InputProduct: FC = (): ReactElement => {
    const navigate = useNavigate()

    const [name, setName] = useState("")
    const [price, setPrice] = useState(0)
    const [description, setDescription] = useState("")

    const onNameChange = (e: any) => setName(e.target.value)
    const onPriceChange = (e: any) => setPrice(e.target.value)
    const onDescriptionChange = (e: any) => setDescription(e.target.value)

    const handleSubmit = () => {
        createProduct()
        navigate('/products', { replace: true } )
        handleReset()
    }

    async function createProduct() {
        const response = await api.post('/products', {
            name,
            price,
            description
        })
        console.log(response)
    }

    const handleReset = () => {
        setName("")
        setDescription("")
        setPrice(0)
    }

    return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1 },
      }}
      
      autoComplete="off"
    >
        <Stack direction="row" spacing={2}>

            <div>
                <TextField
                required
                id="outlined-required"
                label="Name"
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
            
            </div>

            <Button 
                variant="contained" 
                size="large" 
                color="success"
                onClick={handleSubmit}    
            >
                Adicionar
            </Button>
        </Stack>
    </Box>
    )
}

export default InputProduct

    