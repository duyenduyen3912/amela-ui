import { sendGet, sendPost } from './axios';

// eslint-disable-next-line import/prefer-default-export
export const getListTask = (params: any) => sendGet('/task/list-task', params);

export const getListPost = () => sendGet('https://jsonplaceholder.typicode.com/posts');

export const addNewPost = (payload: any) => sendPost('https://jsonplaceholder.typicode.com/posts', payload)