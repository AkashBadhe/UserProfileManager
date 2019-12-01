import {data} from './userData';
import json from './testData';

 const getUsers = () => {
   console.log(json);
    return data;
  }

  const getUserById = (id) => {
    return data.filter(user=>user.id === id)[0] 
  }



  const setData = (user) =>{
    //TODO add user
  }

  export default {
    getUsers,
    getUserById,
    setData
  }