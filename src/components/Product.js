import React from 'react';

export default function Product(props) {
  const { product, onAdd } = props;
  return (
    <div>
      <img className="small" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTA-sTOFORg74NIY-7gatFwDesVsNcEfYoMwQ&usqp=CAU"{...product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <div>${product.price}</div>
      <div>
        <button onClick={() => onAdd(product)}>Add To Cart</button>
      </div>
    </div>
  );
}