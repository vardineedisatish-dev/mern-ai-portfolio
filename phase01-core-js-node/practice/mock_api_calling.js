const API_URL="https://jsonplaceholder.typicode.com/posts/1";

async function fetchData(){
try{
    const response= await fetch(API_URL);
     
    if(!response.ok){
        throw new Error(`HTTP error!Status ${response.status}`);
    }

    const data= await response.json();
    console.log("Data received",data);
}
catch(error)
{
    console.error("error occured while fetching data"+error.message);
}finally{
    console.log("fetch attempt finished");
}
}

fetchData();