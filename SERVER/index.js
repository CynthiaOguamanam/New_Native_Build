require("./Util/db")
const express = require ('express');
const cors = require ('cors');
const router = require("./Router/userRouter");
const Otherrouter = require("./Router/otherUserFile");

const app = express()
const port = 2007;

app.use(cors());
app.use(express.json());

app.use('/api', router);
app.use("/api", Otherrouter)

app.listen(port, ()=>{
    console.log(`server is now up and running....! ${port}`)
});
