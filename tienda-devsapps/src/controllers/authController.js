const jwt = require ('jsonwebtoken');
const { OAuth2Client } = require ('google-auth-library')
const CLIENT_ID = "1009352706675-18qvmg72j2m44klk25j7kufrp1jamvpr.apps.googleusercontent.com"
const userModel = require ('../database/User');
const JWT_KEY = 'miClave';

googleAuth = (req, res) => {
    console.log(req.headers, req.body, req.params);
    const { token } = req.body;
  
    const client = new OAuth2Client(CLIENT_ID);
    client.verifyIdToken({
      idToken: token,
      audience: CLIENT_ID
    }).then(resp => {
      console.log(resp);
      const { name, email } = resp.payload;
      console.log(name, email);
      // actualizar base de datos
      return userModel.findOneAndUpdate({ email: email }, { name: name }, { new: true, upsert: true });
    }).then(user => {
      console.log(user);
      // crear token de la aplicacion y retornar
      var appToken = jwt.sign({ user: user }, JWT_KEY, { expiresIn: '1h' });
      res.json(appToken);
    }).catch(err => {
      console.log(err);
      res.status(500).send(err);
    });
  }


  module.exports = { googleAuth}