import axios from "axios";
export default axios.create({
    baseURL: "https://api.yelp.com/v3/businesses",
    headers:{
        Authorization: "Bearer 4dr0jTmE29CcU1l5bRnp8pQ2gQXpRqvhb2S-mezANSAQ61XipZdhPWquHt4SNNH_cEc74ceXwtj8dtSfO5tjl79JAAdtYnteVoJqY1KhwSW_jeJ2rDjFwJzCapXpYnYx",
    },
});