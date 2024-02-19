 async function main(){

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


    // const userURL = "https://jsonplaceholder.typicode.com/users";
    // const postURL = "https://jsonplaceholder.typicode.com/posts";

    // Promise.all([axios.get(userURL), axios.get(postURL)])
    // .then(res => console.log(res))
    // .catch(err => console.log(err))

    // const res = await Promise.all([axios.get(userURL), axios.get(postURL)])
    // console.log(res)
    // console.log(res[0],res[1]);




    // Interceptor -> add data 

    // axios.interceptors.request.use(function (config){
    //     console.log(config)
    //     config.headers['Authorization'] = 'Bearer xyz123'
    //     return config
    // })

    // Headers
    // const res = await axios.post('https://jsonplaceholder.typicode.com/users',
    // {
    //     name: 'JGM'
    // }, 
    // {
    //     headers:{
    //         'fazt': 'xyz123'
    //     }
    // })
    // console.log(res)


    // Request transform 
    // const res = await axios.get('https://jsonplaceholder.typicode.com/users', {
    //     transformResponse: axios.defaults.transformResponse.concat(data =>{
    //         data = data.map(user => {
    //             return {
    //                 ...user,
    //                 myCustomTitle: `${user.name} ${user.username} ${user.email}`
    //             }
    //         })
    //         return data
    //     })
    // })
    // console.log(res)

    // Globals 

    // axios.defaults.headers.common['Jgm'] = 'hello'

    // const res = await axios.get('https://jsonplaceholder.typicode.com/users')
    // console.log(res)

    //Error  Handling
    // axios.get('https://jsonplaceholder.typicode.com/postss')
    // .then((res) => console.log(res))
    // .catch((err) => {
    //     console.log(err.response)
    //     console.log(err.response.data)
    //     console.log(err.response.status)
    //     console.log(err.response.headers)
    // });

    // Instancias
    const axiosInstance =axios.create({
        baseURL : 'https://jsonplaceholder.typicode.com',
        timeout:1000
    })

    const resPost = await axiosInstance.get('/posts/1')
    console.log(resPost)

    const resUsers = await axiosInstance.get('/users/1')
    console.log(resUsers)





}


main()