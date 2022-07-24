import api from '../api/api'

async function getAllProducts() {
    try {
        const response = await api.get('/products')
        return response.data
    } catch (error) {
        return new Error('Erro ao carregar dados')
    }
}

async function createProduct(name:string, price:number, description:string) {
    try {
        const response = await api.post('/products', {
            name,
            price,
            description
        })
        return response.data
    } catch (error) {
        return new Error('Erro ao criar produto')
    }
}

async function deleteProduct(id:number) {
    try {
        const response = await api.delete(`/products/${id}`);
        return response.data
      } catch (error) {
        return new Error('Erro ao apagar produto');
      }
}

async function updateProduct(id:number, name:string, price:number, description:string) {
    try {
        const response = await api.put(`/produtcs/${id}`, {
            name,
            price,
            description
        });
        return response.data
      } catch (error) {
        return new Error('Erro ao atualizar produto');
      }
}


export const ProductsService = {
    getAllProducts,
    createProduct,
    deleteProduct,
    updateProduct,
}