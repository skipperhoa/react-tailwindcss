export default async function callApi(endpoint, method = 'GET', body=null){
    if(method==="GET"){
        const data = await fetch(endpoint);
        let result = await data.json();
        return result
    }
    else{
        const requestOptions = {
            method: 'POST',
            body: JSON.stringify(body)
        };
        const data = await fetch('http://127.0.0.1:8000/api/users/login', requestOptions)
        let res = await res.json();
        return res;
    }
    
}