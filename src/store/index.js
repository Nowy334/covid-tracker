const country = "https://api.covid19api.com/countries";
const API = "https://api.covid19api.com/summary";


function findCountry(data, input){
  for( let i = 0; i < data.length; i++){
    if(input === data[i]){
      return(data[i]);
    }
  }
}

export async function summary(){
  try{
    const response = await fetch(API);
    const data = await response.json();
    console.log(data.Global);
    return data;
  }catch(error){
    console.log(error);
  }
}

function findCode(data, input){
  for( let i = 0; i < data.length; i++){
    if(input === data[i].Slug){
      return(data[i].ISO2);
    }
  }
}    

export async function counterCode(input){
  try{
    const response = await fetch(country);
    const data = await response.json();
    const code = findCode(data, input);
    return code;
  }catch(error){
    console.log(error);
  }
}
