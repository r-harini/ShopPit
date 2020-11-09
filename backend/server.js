import express from 'express';
import data from './data';

const app = express();  //define app

app.get("/api/products/:id", (req, res)=> {     //to create an endpoint
    const productId=req.params.id;
    const product= data.products.find(x => x._id === productId);
    if (product)
        res.send(product)
    else
        res.status(404).send({msg: "Product Not Found."})
}); 

app.get("/api/products", (req, res)=> {     //to create an endpoint
    res.send(data.products);
}); 
app.listen(5000, ()=>{console.log("Server started at http://localhost:5000")}) //to run this server. ExpressJS will start running