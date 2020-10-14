import notificationAxiosClient from "../config/notificationAxios"

export function handler(event,context, callback){
    let emailRequest = JSON.parse(event.body);
    notificationAxiosClient.post("email/send",emailRequest).then((response) => {
        console.log(response);
    })
    callback(null, {
        statusCode: 200, 
        body: JSON.stringify({
          msg: context
        })
    })
}