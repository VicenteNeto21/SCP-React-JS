// Tela Principal para mostrar os produtos

import React, { useState } from 'react';
import ProductForm from './components/FormsProducts';
import ProductTable from './components/TableProducts';
import './css/Style.css';
import { Produto, Categoria, Fornecedor, Estoque } from './components/typesProducts';

const App: React.FC = () => {
  const [products, setProducts] = useState<Produto[]>([]);
  const [categories] = useState<Categoria[]>([
    { id: 1, name: 'Eletrônicos' },
    { id: 2, name: 'Roupas' },
    { id: 3, name: 'Outros'}
  ]);
  const [suppliers] = useState<Fornecedor[]>([
    { id: 1, name: 'Fornecedor A', contactInfo: 'fornecedorA@example.com' },
    { id: 2, name: 'Fornecedor B', contactInfo: 'fornecedorB@example.com' },
  ]);
  const [stocks] = useState<Estoque[]>([
    { id: 1, quantity: 100, location: 'Armazém A' },
    { id: 2, quantity: 200, location: 'Armazém B' },
  ]);
  const [editingProduct, setEditingProduct] = useState<Produto | null>(null);

  const getSupplierName = (supplierId: number): string => {
    const supplier = suppliers.find(supplier => supplier.id === supplierId);
    return supplier ? supplier.name : 'Fornecedor Desconhecido';
  };

  const getCategoryName = (categoryId: number): string => {
    const category = categories.find(category => category.id === categoryId);
    return category ? category.name : 'Sem Categoria';
  };

  const getStockName = (stockId: number): string => {
    const stock = stocks.find(stock => stock.id === stockId);
    return stock ? stock.location : 'Estoque Desconhecido';
  };

  const handleAddProduct = (product: Produto) => {
    if (product.id === 0) {
      product.id = products.length + 1;
      setProducts([...products, product]);
    } else {
      setProducts(products.map(p => (p.id === product.id ? product : p)));
    }
    setEditingProduct(null);
  };

  const handleEditProduct = (product: Produto) => {
    setEditingProduct(product);
  };

  const handleDeleteProduct = (id: number) => {
    setProducts(products.filter(product => product.id !== id));
  };

  return (
    <div className="container mt-5">
      <div className="text-center">
        <h1 className="display-5 mb-5">SCP - Sistema de Cadastramento de Produtos</h1>
      </div>
      <ProductForm
        onAddProduct={handleAddProduct}
        editingProduct={editingProduct}
        categories={categories}
        suppliers={suppliers}
        stocks={stocks}
      />
      <ProductTable
        products={products}
        onEditProduct={handleEditProduct}
        onDeleteProduct={handleDeleteProduct}
        getSupplierName={getSupplierName}
        getCategoryName={getCategoryName}
        getStockName={getStockName}
      />
    </div>
  );
};

export default App;
