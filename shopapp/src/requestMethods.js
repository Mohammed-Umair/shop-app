import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";

const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ODQ0MWZiYzNmNDJjZjg0Zjg0ZDFmNyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4NjQ4MTAwNSwiZXhwIjoxNjg2NzQwMjA1fQ.SXuzXqvnsMDwNDj3Y4AR6B497GbjAA-TbRXg2rSNHcA";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});
export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});
