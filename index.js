function main(){

    //Option 1 
    // axios.get("https://jsonplaceholder.typicode.com/users")


    //Option 2
    // axios.get("https://jsonplaceholder.typicode.com/users?",{
    //     params: {
    //         _limit:1
    //     }
    // })
    // .then((res) => {
    //     console.log(res.data)
    // })
    //   .catch((err)=>console.log(err))


    axios({
        method: "POST",
        url: "https://reqres.in/api/register",
        data:{
            email: "eve.holt@reqres.in",
            password: "pistol"
        }
    })
      .then((res) => console.log(res))
      .catch((err)=> console.log(err))
}


main()