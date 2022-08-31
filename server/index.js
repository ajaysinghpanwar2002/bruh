import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors'; 

const app = express();

app.use(bodyParser.json({limit: "20mb", extended:true}));
app.use(bodyParser.urlencoded({limit: "20mb", extended:true}));

app.use(cors());
const CONNECTION_URL = 'mongodb+srv://ajaysingh:ajaysingh123@cluster0.cplle.mongodb.net/?retryWrites=true&w=majority';

// assigning port
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL,{
	useNewUrlParser:true, useUnifiedTopology:true
}).then(() => app.listen(PORT, () =>
console.log(`connection is established and running on port: ${PORT}`)
))
.catch((err) => console.log(err.message)); 














// middleware func -> post, front ->json
app.use(express.json());
let users = [

{
    'id':1,
    'name':'ajay'
},
{
    'id':2,
    'name':'ayush'
},
{
    'id':3,
    'name':'ankit'
},
{
    'id':4,
    'name':'dips'
},
{
    'id':5,
    'name':'arun'
}
];

const userRouter = express.Router();
const authRouter = express.Router();
app.use('/user',userRouter);
app.use('/auth',authRouter);

userRouter
.route('/')
.get(getUser)
.post(postUser)
.patch(updateUser)
.delete(deleteUser)

userRouter
.route('./:id')
.get(getUserById)

authRouter
.route('/signup')
.get(getSignUp)
.post(postSignUp);

function getUser(req,res){
	res.send(users);
}
function postUser(req, res){
    console.log(req.body);
    res.send({
        messgae: "data recieved succesfully",
        user: req.body
    })
}
function updateUser(req, res){
    console.log(req.body);
    let datatobeupdated = req.body;
    for(key in datatobeupdated){
        users[key]=datatobeupdated[key];
    }
    res.json({
        messgae: "data updated succesfully"
    })
}
function deleteUser(req,res){
	user = {}
	res.json({
		message:"data has been deleted"
	});
}
function getUserById(req,res){
	console.log(req.params.id);
	let paramId=req.param.id;
	let obj = {};
	for(let i=0;i<users.length;i++){
		if (users[i]['id'] == paramId){
			obj = users[i]
		}
	}
	res.json({
		message:"req recieved",
		data:obj
	});
}	

function getSignUp(req,res){
    res.sendFile('client\src\components\signup.js',{root:__dirname});
}
function postSignUp(req,res){
    let obj = req.body;
    //console.log()
    res.json({
        message:"user signed up",
        data:obj
    });

}