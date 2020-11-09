import React, {useState, useEffect} from 'react';
//import data from '../data'
import {Link} from 'react-router-dom'
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from '../actions/productActions';

function HomeScreen(props){
    
    //defining hooks
    
    const productList= useSelector(state => state.productList);
    const {products, loading, error}= productList;
    const dispatch= useDispatch();

    //fetching data from server
    useEffect(()=>{
        dispatch(listProducts());
        return()=>{
            //cleanup==nothing
        };
    },[])



    return (
    loading? <div>Loading...</div>:
    error? <div>{error}</div>:
    <div>
        <ul className="products">
                        {
                            products.map(product => 
                        
                        <li key={product._id}>
                            <div className="product">
                                <Link to={'/product/'+product._id}>
                                <img src={product.image} alt="product" className="product-image"/>
                                </Link>
                                <div className="product-name">
                                    <Link to={'/product/'+product._id}>{product.name}</Link>
                                </div>
                                <div className="product-brand">
                                    {product.brand}
                                </div>
                                <div className="product-price">
                                    ${product.price}
                                </div>
                            <div className="product-rating">{product.rating} stars ({ product.numReviews} reviews)</div>
                            </div>
                        </li>)
                        }
                    </ul>
    </div>)
}

export default HomeScreen;