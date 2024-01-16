function getUser(){

    //Option 1 
    // axios.get("https://jsonplaceholder.typicode.com/users")


    //Option 2
    axios.get("https://jsonplaceholder.typicode.com/users?",{
        params: {
            _limit:1
        }
    })
    .then((res) => {
        console.log(res.data)
    })
      .catch((err)=>console.log(err))
}


getUser()