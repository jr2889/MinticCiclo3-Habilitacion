const productModel = require('../database/product');
 

listProducts = (req, res) => {   
  productModel.find().then((data) => {
    res.json(data);
  }).catch(err => {
    res.send(err);
  });
};

getProduct = (req, res) => {
  productModel.find({ _id: req.params.id }).then((data) => {
    res.json(data);
  }).catch(err => {
    res.send(err);
  });
}

createProduct = (req, res) => { 
  productModel.create(req.body).then((data) => {
    res.json(data);
  }).catch(err => {
    res.send(err);
  });
}

modifyproduct = (req, res) => {
  productModel.findByIdAndUpdate(req.params.id, req.body).then((data) => {
    res.json(data);
  }).catch(err => {
    res.send(err);
  });
}

deleteProduct = (req, res) => { 
  productModel.findByIdAndDelete(req.params.id).then(data => {
    res.json(data);
  }).catch(err => {
    res.send(err);
  });
}

module.exports = {
  listProducts,  getProduct,  createProduct, modifyproduct,  deleteProduct
}