import notificationAxiosClient from "../config/notificationAxios"

export function handler(event,context, callback){
    let emailRequest = JSON.parse(event.body);
    console.log(emailRequest,process.env.GATSBY_NOTIFICATION_URL);
    notificationAxiosClient.post("email/send",emailRequest).then((response) => {
        console.log(response);
    })
    callback(null, {
        statusCode: 200, 
        body: JSON.stringify({
          msg: "Response sent"+process.env.GATSBY_NOTIFICATION_URL,
        }),
    })
}