import React from 'react';
import { Produto } from './typesProducts';

interface Props {
  products: Produto[];
  onEditProduct: (product: Produto) => void;
  onDeleteProduct: (id: number) => void;
  getSupplierName: (supplierId: number) => string;
  getCategoryName: (categoryId: number) => string;
  getStockName: (stockId: number) => string;
}

const ProductTable: React.FC<Props> = ({ products, onEditProduct, onDeleteProduct, getSupplierName, getCategoryName, getStockName }) => {
  return (
    <div className="row mt-5">
      <div className="col">
        <table className="table table-striped table-dark table-hover">
          <thead>
            <tr>
              <th>Nome do Produto</th>
              <th>Descrição</th>
              <th>Preço</th>
              <th>Categoria</th>
              <th>Fornecedor</th>
              <th>Estoque</th>
              <th>Ação</th>
            </tr>
          </thead>
          <tbody>
            {products.map(product => (
              <tr key={product.id}>
                <td>{product.name}</td>
                <td>{product.description}</td>
                <td>{product.price}</td>
                <td>{getCategoryName(product.categoryId)}</td>
                <td>{getSupplierName(product.supplierId)}</td>
                <td>{getStockName(product.stockId)}</td>
                <td>
                  <button className="btn btn-warning btn-sm" onClick={() => onEditProduct(product)}>Editar</button>
                  <button className="btn btn-danger btn-sm" onClick={() => onDeleteProduct(product.id)}>Excluir</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductTable;
