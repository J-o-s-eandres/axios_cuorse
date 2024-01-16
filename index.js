function getUser(){

    //Option 1 
    // axios.get("https://jsonplaceholder.typicode.com/users")


    //Option 2
    axios({
        url:"https://jsonplaceholder.typicode.com/users?",
        method:"GET",
        params: {
            _limit:3
        }
    }).then((res) => {
        console.log(res.data)
    })
      .catch((err)=>console.log(err))
}


getUser()