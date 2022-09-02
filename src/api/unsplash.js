import axios from "axios";

// const  searchImage = (term) =>{

// }

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID y0ZZk-Vwv7_hvF5JHAxAF7jPcZM_aOd1hCKrt_gDszM",
  },
});
