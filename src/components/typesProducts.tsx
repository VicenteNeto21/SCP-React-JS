// Criando as inteface para receber os produtos

export interface Produto {
    id: number;
    name: string;
    description: string;
    price: number;
    categoryId: number;
    supplierId: number;
    stockId: number;
  }
  
  export interface Categoria {
    id: number;
    name: string;
  }
  
  export interface Fornecedor {
    id: number;
    name: string;
    contactInfo: string;
  }
  
  export interface Estoque {
    id: number;
    quantity: number;
    location: string;
  }
  