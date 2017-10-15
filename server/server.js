require('./config/config');

const _          = require('lodash');
const express    = require('express');
const bodyParser = require('body-parser');
const bcrypt     = require('bcryptjs');
const {ObjectID} = require('mongodb');


let {mongoose}   = require('./db/mongoose');
let {Todo}       = require('./models/todo');
let {User}       = require('./models/user');
let {authentication} = require('./middleware/authentication');

let app    = express();

const port = process.env.PORT;

app.use(bodyParser.json());


//adding new todo
app.post('/todos',authentication, (req,res)=>{
    let todo = new Todo({
        text:req.body.text,
        _creator: req.user._id
    });
    todo.save().then((doc)=>{
        res.send(doc)
    },(e)=>{
        res.status(400).send(e);
    })
});
//getting all todos
app.get('/todos',authentication, (req, res)=>{
     Todo.find({_creator: req.user._id}).then((todos)=>{
         res.send({todos});
     },(err)=>{
         res.status(400).send(err);
     });
})

//get specific todo by id
app.get('/todos/:id',authentication, (req, res)=>{
    let id = req.params.id;

    if(!ObjectID.isValid(id)){
        return res.status(404).send();
    }
    
    Todo.findOne({
        _id:id,
        _creator:req.user._id
    }).then((todo)=>{
        if(!todo){
            return res.status(404).send();
        }
        res.status(200).send(todo);
 
    }).catch((e)=>{
        res.status(400).send();
    });
});
//delete todo by id
app.delete('/todos/:id',authentication, (req,res)=>{
    let id = req.params.id;
    if(!ObjectID.isValid(id)){
        return res.status(404).send();
    }
    Todo.findOneAndRemove({
        _id:id,
        _creator: req.user.id
    })
    .then((todo)=>{
        if(!todo){
            return res.status(404).send();
        }
        res.status(200).send(todo)})
    .catch((err)=>{
            res.status(400).send();
        });
});
//updating todo by id
app.patch('/todos/:id',authentication, (req,res)=>{
    let id   = req.params.id;
    let body = _.pick(req.body,['text','completed']);
    if(!ObjectID.isValid(id)){
        return res.status(404).send();
    }
    if(_.isBoolean(body.completed)&& body.completed){
        body.completedAt = new Date().getTime();
    }else{
        body.completed   = false;
        body.completedAt = null;
    }
    Todo.find
    Todo.findOneAndUpdate({
        _id:id,
        _creator: req.user._id
    },{$set:body},{new:true})
    .then((todo)=>{
        if(!todo){
            return res.status(404).send(); 
        }
        res.send({todo})})
    .catch((e)=>{
        res.status(400).send();
    })
});

// sign up new user
app.post('/users',(req,res)=>{
    let body = _.pick(req.body,['email','password'])
    let user = new User(body);
    user.save()
    .then(()=>{
        user.generateAuthToken().then((token)=>{
        res.header('x-auth',token).send({user,token});
        });
    }).catch((err)=>{
        res.status(400).send(err);
    });
});
//useres LOGIN

app.post('/users/login',(req,res)=>{
    let body = _.pick(req.body,['email','password']);
    User.findByCredentials(body.email, body.password).then((user)=>{
        return user.generateAuthToken().then((token)=>{
            res.header('x-auth',token).send({user,token});
        });
        
    }).catch((err)=>{
        res.status(401).send({message:'email or password was wrong'});
    });
});

//user logout
app.delete('/users/me/token',authentication,(req, res)=>{
     req.user.removeToken(req.token)
     .then(()=>{
         res.status(200).send();
     })
     .catch((err)=>{
         res.status(400).send();
     });
})
//geting user info by token
app.get('/users/me',authentication,(req,res)=>{
    res.send(req.user);
});

//listening to the port 
app.listen(port, ()=>{
    console.log(`started at port ${port}`);
});