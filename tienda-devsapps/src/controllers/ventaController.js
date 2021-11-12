const ventaModel = require('../database/venta');
 

listVentas = (req, res) => {   
  ventaModel.find().then((data) => {
    res.json(data);
  }).catch(err => {
    res.send(err);
  });
};

getVenta = (req, res) => {
  ventaModel.find({ _id: req.params.id }).then((data) => {
    res.json(data);
  }).catch(err => {
    res.send(err);
  });
}

createVenta = (req, res) => { 
  ventaModel.create(req.body).then((data) => {
    res.json(data);
  }).catch(err => {
    res.send(err);
  });
}

modifyventa = (req, res) => {
  ventaModel.findByIdAndUpdate(req.params.id, req.body).then((data) => {
    res.json(data);
  }).catch(err => {
    res.send(err);
  });
}

deleteVenta = (req, res) => { 
  ventaModel.findByIdAndDelete(req.params.id).then(data => {
    res.json(data);
  }).catch(err => {
    res.send(err);
  });
}

module.exports = {
  listVentas,  getVenta,  createVenta, modifyventa,  deleteVenta
}

 