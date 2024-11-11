import express from 'express'
import mysql from 'mysql2'
import cors from 'cors'
import 'dotenv/config'


const server = express();
server.use(express.json());
server.use(cors());
const port = process.env.NODEPORT

server.listen(port, function(){
    console.log('Server started and running on port no', port);
});


// Creating the connection to the database

const db = mysql.createConnection({
    host: process.env.DBSERVER,
    port: process.env.DBPORT,
    user: process.env.DBUSER,
    password: process.env.DBPASSWORD,
    database: process.env.DB,
})

db.connect(function(error){
    if(error){
        console.log('Connection to SQL failed', error);
    }
   else{
        console.log('Successfully connected to MySQL');
   }
})

// Displaying all products
server.get('/products', function(req,res){
    // run a store procedure in the connected
    let query = "CALL getProducts()"
    db.query(query, function(error,data){
        if(error){
            res.json({error_message:error})
        }
        else{
            res.json({productData: data[0]})
        }
    })
})

server.get('/displayAvailableProducts', function(req,res){
    // run a store procedure in the connected
    let query = "CALL displayAvailableProducts()"
    db.query(query, function(error,data){
        if(error){
            res.json({error_message:error})
        }
        else{
            res.json({productData: data[0]})
        }
    })
})


// // get product by ID
// server.get('/products/:id', function(req,res){
//     let SQLquery = "CALL getProductByID(?)"

//     db.query(SQLquery, [req.params.id], (error,data)=>{
//         (error)? res.json({error_message: error}) : res.json(data[0][0])
//     })
// })

// // delete by ID
// server.delete("/products/:id", function(req,res){
//     let SQLquery = "CALL deleteProductById(?)"
//     db.query(SQLquery, [req.params.id], (error,data)=>{
//         (error)? res.json({error_message: error}) : res.json({message: "The product has been deleted"})

//     })
// })

// // Updating
// server.put('/products/:id', (req,res) =>{
//     let SQLquery = "CALL updateProductById(?,?,?,?,?,?)"
    

//     db.query(SQLquery, [req.params.id, req.body.image, req.body.title, req.body.description, req.body.price, req.body.inStock] , (error,data) =>{
//         (error)? res.json({error_message: error}) : res.json({message: "The product has been updated" , data: data[0]})
//     })


// })


// // inserting new product
// server.post('/products',function(req,res){
//     let image = req.body.image
//     let title = req.body.title
//     let description = req.body.description
//     let price  = req.body.price
//     let inStock = req.body.inStock
//     let displayProduct = req.body.displayProduct

//     let SQLquery = "CALL insertNewProduct(?,?,?,?,?,?)"

//     db.query(SQLquery,[req.body.image, req.body.title, req.body.description, req.body.price, req.body.inStock, req.body.displayProduct], function(error,data){
//         if(error){
//             res.json({error_message:error})
//         }
//         else{
//             res.json({message: "success" , data: data[0]})
//         }
//     })
// })

// server.post('/validateuser', (req, res) => {
//     let SQLQuery = "CALL `validateUser`(?, ?)";
//     db.query(SQLQuery, [req.body.email, req.body.password], (error, data) => {
//         if(error){
//             res.json({ error_message: error});
//         }
//         else{
//            if(data[0].length > 0){
//             res.json(true);
//            }
//            else{
//             res.json(false);
//            }
//         }
//     })
// })

// // Validating the user

// server.post('/validateuser', (req, res) => {
//     let SQLQuery = "CALL `validateUser`(?, ?)";
//     db.query(SQLQuery, [req.body.email, req.body.password], (error, data) => {
//         if(error){
//             res.json({ error_message: error});
//         }
//         else{
//            if(data[0].length > 0){
//             res.json(true);
//            }
//            else{
//             res.json(false);
//            }
//         }
//     })
// })


 