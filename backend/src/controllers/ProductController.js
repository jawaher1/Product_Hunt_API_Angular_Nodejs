
const fetch = require("isomorphic-fetch");

module.exports = {



  async fetchall(req, res){

  const response = await fetch(`https://api.producthunt.com/v1/posts/all`, {
    method: "get",
    headers: {
      "Content-Type": "application/json",
        'Accept': 'application/json',
        'Host': 'api.producthunt.com',
        'Authorization': 'Bearer SFvSfM0CnrCFId23M4wrIPNNNNADGrBmpCwPkrwoFQ0'

    
    }
  });



  res.json(await response.json());
  }
}
