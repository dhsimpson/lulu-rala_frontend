const axios = require("axios");
const dotenv = require('dotenv');

axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
dotenv.config();

const emailUrl = `${process.env.REACT_APP_LOCAL_IP}:8090/postEmail`;

const postEmail = async (applicant, phone, email, address, content) => {
        const body = {
            "applicant": applicant,
            "phone": phone,
            "email": email,
            "address": address,
            "content": content
        }
        await axios.post(emailUrl, body)
            .then(async (result) => {
            })
            .catch(error => {
                console.log(error);
            });
    }
export {postEmail}
