import axios from "axios";

let users = [];


export interface User {
  id: number
  name: string
  username: string
  email: string
  address: Address
  phone: string
  website: string
  company: Company
}

export interface Address {
  street: string
  suite: string
  city: string
  zipcode: string
  geo: Geo
}

export interface Geo {
  lat: string
  lng: string
}

export interface Company {
  name: string
  catchPhrase: string
  bs: string
}


const axiosInstance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
})

const button = document.querySelector("button");

button?.addEventListener("click", ()=>{
  initapp()
})



async function initapp() {
  const res = await axiosInstance.get<User[]>('/users');
  console.log(res);

  users = res.data

  const ul = document.querySelector("ul") as HTMLUListElement;

  users.forEach((user) => {
    const li = document.createElement("li");
    li.textContent= `${user.name}: ${user.email} ${user.phone}`
    ul.appendChild(li)
    
  });

}

