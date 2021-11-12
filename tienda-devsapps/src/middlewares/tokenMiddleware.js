const jwt= require('jsonwebtoken');
const JWT_KEY = 'miClave';


verifyToken = (req, res, next) => {
     const  {token} = req.body;
     console.log(req.body)
    
    console.log('Este es mi middleware', token);
    jwt.verify(token, JWT_KEY, function (err, decoded) {
        if (err) {
        //console.log('hubo error al verificar el token', err);
        res.status(401).send('No autorizado');
        return;
    }
    console.log(decoded)
    next();
  });
}

module.exports = {
  verifyToken
}