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

    
    // Post option 1

    // axios({
    //     method: "POST",
    //     url: "https://reqres.in/api/register",
    //     data:{
    //         email: "eve.holt@reqres.in",
    //         password: "pistol"
    //     }
    // })
    //   .then((res) => console.log(res))
    //   .catch((err)=> console.log(err))
    
      

    // Post option 2
//     const data = {
//         email: "eve.holt@reqres.in",
//         password: "pistol"
// }
//     axios.post('https://reqres.in/api/register',data )
//       .then((res) => console.log(res))
//       .catch((err)=> console.log(err))




    // PUT
    // axios.put('https://jsonplaceholder.typicode.com/users/1', {
    //     name : "Jose Graham",
    //     username: "jg1900"
    // }).then((res)=> console.log(res))
    // .catch((err)=> console.log(err))
    
    
    //PATCH
    // axios.patch('https://jsonplaceholder.typicode.com/users/1', {
    //     name : "Jose Graham",
    //     username: "jg1900"
    // }).then((res)=> console.log(res))
    // .catch((err)=> console.log(err))



    //DELETE
    // axios.delete('https://jsonplaceholder.typicode.com/users/1'
    // ).then((res)=> console.log(res))
    // .catch((err)=> console.log(err))
}


main()