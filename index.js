const express = require("ëxpress");
const app = express();

app.use(logger);
app.get("/books", (req, res)=>{
    return res.send({route: "/books"})
})

app.listen(4000,()=>{
    console.log("inside book route")

})
//app.use(checkPermission);

app.get("/libraries",(req,res)=>{
    return res.send({route:"/libraries"})
})

// app.listen(5000,()=>{
//     console.log(" working inside libraries route")

// })
app.get("/authors", (req, res)=>{
    return res.send({route: "/authors"})
})

// app.listen(6000,()=>{
//     console.log("working inside authors route")

// })

function logger(req,res,next){
    if(req.path==="/books"){
        req.role="books"
    }
    else if(req.path==="/libraries"){
        req.role = "/libraries"
    }
    else if(req.path==="/libraries"){
        req.role = "/libraries"
    }
    else{
        req.role = "server unknown"
    }
    console.log("before router call")
    next()
    console.log("after route")

}
// app.listen(7000,()=>{
//     console.log("its working now")
// })



function checkPermission(req,res,next){
     if(req.path==="/libraries"){
        req.role = "/libraries"
    }
    else if(req.path==="/libraries"){
        req.role = "/libraries"
    }
    
    console.log("before router call")
    next()
    console.log("after route")

}
app.listen(9000,()=>{
    console.log("it is checking permission")
})