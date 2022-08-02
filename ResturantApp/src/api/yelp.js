import axios from "axios";
export default axios.create({
    baseURL:"https://api.yelp.com/v3/businesses",
    headers:{
        Authorization: "Bearer _8DJupDUKCC91V-Jh1aJid_8HEQqcaEYD8h5E8STGJFC5zn5woaLbI-0FtdDyrRVQY2wyXpcCfAPc0zW5XyAmdaM6BGXu9uRIWYo_Prvd3bcs6EP89EeadUqYYTpYnYx",
    },
});