import axios from "axios";

export default async function GetAllPost(){
  const url = `https://traiga-api.vercel.app/api/public-getAllProduct`;

  const result = await axios.get(url);
  return result.data.data;
};
