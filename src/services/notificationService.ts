import axiosClient from '../config/axios';
import { Email } from '../models/email.model';

export const sendOfferEmail = (emailRequest : Email) => {
    const headers = {"Access-Control-Allow-Origin": "*"}
      
    axiosClient.post("/email",emailRequest,{headers: headers}).then((response : any) => {
        console.log(response);
    })
}