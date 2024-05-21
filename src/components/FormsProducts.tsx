// src/components/ProductForm.tsx
import React, { useState, useEffect } from 'react';
import { Produto, Categoria, Fornecedor, Estoque } from './typesProducts';

interface Props {
  onAddProduct: (product: Produto) => void;
  editingProduct: Produto | null;
  categories: Categoria[];
  suppliers: Fornecedor[];
  stocks: Estoque[];
}

const ProductForm: React.FC<Props> = ({ onAddProduct, editingProduct, categories, suppliers, stocks }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState(0);
  const [categoryId, setCategoryId] = useState<number>(0);
  const [supplierId, setSupplierId] = useState<number>(0);
  const [stockId, setStockId] = useState<number>(0);

  useEffect(() => {
    if (editingProduct) {
      setName(editingProduct.name);
      setDescription(editingProduct.description);
      setPrice(editingProduct.price);
      setCategoryId(editingProduct.categoryId);
      setSupplierId(editingProduct.supplierId);
      setStockId(editingProduct.stockId);
    } else {
      clearFields();
    }
  }, [editingProduct]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && description && price > 0 && categoryId && supplierId && stockId) {
      onAddProduct({ id: editingProduct ? editingProduct.id : 0, name, description, price, categoryId, supplierId, stockId });
      clearFields();
    }
  };

  const clearFields = () => {
    setName('');
    setDescription('');
    setPrice(0);
    setCategoryId(0);
    setSupplierId(0);
    setStockId(0);
  };

  return (
    <form className="row justify-content-center mb-4" onSubmit={handleSubmit} autoComplete="off">
      <div className="col-10 col-md-8 mb-3">
        <label htmlFor="name-product">Nome do Produto</label>
        <input
          className="form-control"
          id="name-product"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Digite o nome do produto"
        />
      </div>
      <div className="col-10 col-md-8 mb-3">
        <label htmlFor="description-product">Descrição do Produto</label>
        <input
          className="form-control"
          id="description-product"
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Descrição do produto"
        />
      </div>
      <div className="col-10 col-md-8 mb-3">
        <label htmlFor="product-value">Valor do Produto</label>
        <input
          className="form-control"
          id="product-value"
          type="number"
          value={price}
          onChange={(e) => setPrice(parseFloat(e.target.value))}
          step="0.01"
          placeholder="0,00"
        />
      </div>
      <div className="col-10 col-md-8 mb-3">
        <label htmlFor="category-id">Categoria</label>
        <select
          className="form-control"
          id="category-id"
          value={categoryId}
          onChange={(e) => setCategoryId(Number(e.target.value))}
        >
          <option value="">Selecione a Categoria</option>
          {categories.map(category => (
            <option key={category.id} value={category.id}>{category.name}</option>
          ))}
        </select>
      </div>
      <div className="col-10 col-md-8 mb-3">
        <label htmlFor="supplier-id">Fornecedor</label>
        <select
          className="form-control"
          id="supplier-id"
          value={supplierId}
          onChange={(e) => setSupplierId(Number(e.target.value))}
        >
          <option value="">Selecione o Fornecedor</option>
          {suppliers.map(supplier => (
            <option key={supplier.id} value={supplier.id}>{supplier.name}</option>
          ))}
        </select>
      </div>
      <div className="col-10 col-md-8 mb-3">
        <label htmlFor="stock-id">Estoque</label>
        <select
          className="form-control"
          id="stock-id"
          value={stockId}
          onChange={(e) => setStockId(Number(e.target.value))}
        >
          <option value="">Selecione o Estoque</option>
          {stocks.map(stock => (
            <option key={stock.id} value={stock.id}>{stock.location} - {stock.quantity}</option>
          ))}
        </select>
      </div>
      <div className="col-10 col-md-8 button-center">
        <input className="btn btn-success add-btn text-center" type="submit" value="Salvar Produto" />
      </div>
    </form>
  );
};

export default ProductForm;
