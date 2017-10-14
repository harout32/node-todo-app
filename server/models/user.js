let mongoose    = require('mongoose');
const validator = require('validator');
const jwt       = require('jsonwebtoken');
const _         = require('lodash');
const bcrypt    = require('bcryptjs');

const secret    = 'my-Secret';

let UserSchema = new mongoose.Schema({
        email:         {
            required:  true,
            trim:      true,
            type:      String,
            minlength: 1,
            unique: true,
            validate: {
                isAsync: true,
                validator: validator.isEmail,
                message:'{VALUE} is not a valid email'
            }
        },
        password: {
            type:String,
            required:true,
            minLength:6
        },
        tokens:[{
            access:{
                type:String,
                required:true
            },
            token:{
                type:String,
                required:true
            }
        }]   
    })


UserSchema.methods.toJSON = function(){
    let userObject = this.toObject();
    return _.pick(userObject,['_id','email']);
};

UserSchema.methods.generateAuthToken = function(){
    let access = 'auth';
    let  token = jwt.sign({_id:this._id.toHexString(), access},secret).toString();
    this.tokens.push({access,token});
    console.log(token);
    return this.save().then(()=>{
        return token
    });
}; 

UserSchema.statics.findByToken = function(token){
    let decoded;
    try{
        decoded = jwt.verify(token,secret);
    }catch(e){
        return Promise.reject();
    }
    return User.findOne({
        '_id':decoded._id,
        'tokens.token':token,
        'tokens.access':'auth'
    })
};

UserSchema.pre('save', function(next){
    //check if on save the password is changed;
    if(this.isModified('password')){
        console.log(this.isModified('password'));
        bcrypt.genSalt(10,(err,salt)=>{
            console.log(salt);
        bcrypt.hash(this.password,salt,(err,hash)=>{
            console.log(hash);
            this.password = hash;
            next();
        });
    });
    }else{
        next();
    }
    
})

let User         = mongoose.model('User',UserSchema);
module.exports   = {User};