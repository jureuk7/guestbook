import {client} from "./client";

export const save = async (name:string,content:string,memoColor:number) => {
  const response = await client.post("/save", {name,content,memoColor});
  return response.data;
}

export const load = async (name:string) => {
  const response = await client.post("/load", {name});
  return response.data;
}

export const list = async () => {
  const response = await client.get("/list");
  return response.data;
}
