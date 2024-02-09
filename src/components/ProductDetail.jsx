import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { items } from './Data';
import { Link } from 'react-router-dom';
import Products from './Products';


const ProductDetail = () => {

    const {id}=useParams();
    const [product ,setProduct] = useState({});
    const [relatedProduct, setRelatedProduct] = useState([])

  useEffect(()=>{
    const filterProduct = items.filter((product)=>{
        return product.id == id;
    })
    setProduct(filterProduct[0])


    const relatedProductsData=items.filter((data)=>{
      return data.category ==product.category
    })
   setRelatedProduct(relatedProductsData)

  },[id ,product.category]); 
    

  return (
  
  <>
    <div className="container">
        
            <div className="card flex-row">
                <img src={product.imgSrc} alt=""  style={{width:'300px',height:'300px'}}/>
           
            <div className="card-body">
                    <h5 className="card-title">{product.title}</h5>
                    <p className="card-text">
                     {product.description}
                    </p>
                    
                  
                  <button className=" btn btn-primary">{product.price}₹</button>
                  <button className="btn btn-primary mx-3 btn-warning text-decoration-none"><Link to={'/cart'}>add to cart</Link></button>
                  </div>

        </div>

    </div>

    <Products items={relatedProduct}/>

 </>
  )
}

export default ProductDetail