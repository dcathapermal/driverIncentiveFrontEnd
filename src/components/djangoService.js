const axios = require("axios");

const API_URL = "http://ec2-34-207-127-34.compute-1.amazonaws.com" //subject to change

class DjangoService {
    constructor(){
        this.user_token = 0
        this.config = {
            headers: {
                'Authorization': `Token ${this.user_token}`
            }
        }
    }
    create_user(user, email, password1, password2) {
        return(axios.post(`${API_URL}/rest-auth/registration/`, {username: user, email: email, password1: password1, password2: password2}))
    }

    login(user, password){
      return axios.post(`${API_URL}/api-token-auth/`, {username: user, password: password})
    }
    logout() {
        this.user_token = 0;
        this.config = {
            headers: {
                'Authorization': `Token ${this.user_token}`
            }
        }
    }

    getCatalog(sponsorName){
      return(axios.get(`${API_URL}/CatalogView?name=${this.user_token}`));
    }
  }

export default DjangoService;
