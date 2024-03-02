const express = require("express");
const axios = require("axios").default;
const app = express();
const registory=require("./registory.json")

app.all("/:apiname/:path", async (req, res) => {
  try {

    if(registory.services[req.params.apiname]){
        const response = await axios({
            method:req.method,
            data:req.body,
            headers:req.headers,
            url:registory.services[req.params.apiname].url+req.params.path
        })
        return res.json(response.data);
    }else{
        return res.json({message:'This method and api is not allowed'})
    }
   
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Error fetching data" });
  }
});

app.listen(3000, () => {
  console.log('api gateway running');
});
