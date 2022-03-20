// Imported

const  RegisterModel  = require("../Models/Model");
const JWT=require('jsonwebtoken')
const bcrypt = require("bcrypt");


// Display Data

exports.Register = async (req,res) => {
  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.password;
  try {
    
    const user = await RegisterModel.findOne({ email: email });
    if (user) {
     return res.status(422).json({ error:'User Already Exist'})
    }
    const salt = await bcrypt.genSalt(Number(process.env.SALT));
    const token= JWT.sign({email:email},process.env.JWT_SECRET,{"expiresIn":"1d"})
    const hashpassword = await bcrypt.hash(password, salt);
    const RegisterDataBase = RegisterModel({ name: name, email: email, password: hashpassword,token:token })

    await RegisterDataBase.save();
    res.send('Register Successfully')
  } catch (error) {
    res.send(error)
  }

  
}
exports.Login = async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  const user = await RegisterModel.findOne({ email: email })
  
  const validate = await bcrypt.compare(
    password,
    user.password
  );
  if ( validate ) {
    res.status(200).send("Login Successful")
  } else {
    res.status(201).send("Login Unsuccessful")
  }
  
}