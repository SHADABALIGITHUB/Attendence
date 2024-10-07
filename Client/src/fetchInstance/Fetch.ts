const BASE_URL = import.meta.env.VITE_Node_URL;
const FetchInstance= async (endpoint:string,options:RequestInit={})=>{

       const defaultHeaders={
          'Content-Type': 'application/json',
       }
       options.headers = {
        ...defaultHeaders,
        ...options.headers,
    };

    const response = await fetch(`${BASE_URL}${endpoint}`, options);

    if (!response.ok) {
        const error = await response.text();
        throw new Error(`Error: ${response.status} - ${error}`);
    }
    return response.json();
    
}


export default FetchInstance;