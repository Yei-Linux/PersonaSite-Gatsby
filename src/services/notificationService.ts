import axiosClient from '../config/axios';
import { Email } from '../models/email.model';

export const sendOfferEmail = (emailRequest : Email) => {
    axiosClient.post("/email",emailRequest).then((response : any) => {
        console.log(response);
    })
}