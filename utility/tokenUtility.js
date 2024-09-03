
import jwt from 'jsonwebtoken';


const generateToken = (user) => {
  const { _id, email } = user;
  const payload = { userId: _id, email };
  const secret = process.env.JWT_SECRET; 
  const options = { expiresIn: '1h' }; 

  return jwt.sign(payload, secret, options);
};

export default generateToken;
