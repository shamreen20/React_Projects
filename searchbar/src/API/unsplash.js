import axios from "axios";

export default axios.create({

   baseURL : "https://api.unsplash.com/search/photos",
    headers:{
        Authorization: "Client-ID QnkWAog-HlSiBN6xAqMJDJDSnlikcJZe0VohuwFp0O0"
    }
   });