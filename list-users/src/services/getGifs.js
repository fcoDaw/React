import Buscador from "../components/Buscador";
const apiKey = 'vhtnPW6GjeP1njrRj0qUvJsmXXEnLNLS';


export default function getGifs({keyword = <Buscador/>} = {}){

    const apiURl = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${keyword}&limit=10&offset=0&rating=g&lang=en'`;
    return fetch(apiURl)
    .then(res => res.json())
    .then(response => {
      const {data = []} = response;

      if(Array.isArray(data)){
        const gifs = data.map (image => {

            const { images,title, id } =  image 
            const {url} = images.downsized_medium

            return { title, id, url }
         })
      
        return gifs;
      }
})
  
}