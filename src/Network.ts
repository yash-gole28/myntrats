import axios from "axios";


const BASE_URL = process.env.REACT_APP_BASE;

// const getToken = async () => {
//   const userInfo = await getFromLocalStorage("token");
//   return userInfo || "";
// };

const post = async (url: string, params: {}, headers?: {}): Promise<any> => {
  try {
    // const token = await getToken();
    const _headers = {
      headers: { ...headers, Authorization:'' },
    };
    const response = await axios.post(BASE_URL + url, params, _headers);
    return response.data;
  } catch (error: any) {
    // toast({ icon: "error", title: "Something went wrong" });
  }
};

const get = async (
  url: string,
  params?: {},
  headers?: {},
  cancelToken?: any
): Promise<any> => {
  try {

    const config: any = {
      params,
      headers: { ...headers, Authorization:'' },
      cancelToken: cancelToken,
    };
    console.log(BASE_URL + url)
    const response = await axios.get(BASE_URL + url,config);

    return response;
  } catch (error: any) {
    // toast({ icon: "error", title: "Something went wrong" });
  }
};

const deleteApi = async (url: string, params: {}, headers?: {}) => {
  try {
    // const token = await getToken();

    const response = await axios.delete(BASE_URL + url, {
      params,
      headers: { ...headers, Authorization:'' },
    });
    return response;
  } catch (error: any) {
    // toast({ icon: "error", title: "Something went wrong" });
  }
};

const put = async (url: string, params?: {}, headers?: {}, query?: {}) => {
  try {
    // const token = await getToken();
    const _headers = {
      headers: { ...headers, Authorization: `` },
    };
    const response = await axios.put(BASE_URL + url, params, {
      ..._headers,
      params: query,
    });
    return response;
  } catch (error: any) {
    // toast({ icon: "error", title: "Something went wrong" });
  }
};

export const API = {
  post, 
  get,
  put,
  deleteApi,
};
