import { AxiosRequestConfig } from "axios";


const getAxiosConfig = () : AxiosRequestConfig => {
  const token = sessionStorage.getItem('jwt')?.replace('Bearer ', '');
  return {
    headers: {
      'Authorizaion': token,
      'Content-Type': 'application/json',
    },
  };
};

export const getTodos = async(): Promise<TodoRepository[]> 