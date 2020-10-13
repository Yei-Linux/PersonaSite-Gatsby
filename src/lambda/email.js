import axiosClient from "../config/axios"

export function handler(event,context, callback){
    let emailRequest = JSON.parse(event.body);
    console.log(emailRequest,process.env.NOTIFICATION_KEY);
    axiosClient.post("email/send",emailRequest).then((response) => {
        console.log(response);
    })
    callback(null, {
        statusCode: 200, 
        body: JSON.stringify({
          msg: "Response sent",
        }),
    })
}