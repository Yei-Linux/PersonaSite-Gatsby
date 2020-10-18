import notificationAxiosClient from "../config/notificationAxios"

export function handler(event,context, callback){
    const headers = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE'
      };

    let emailRequest = JSON.parse(event.body);
    notificationAxiosClient.post("email/send",emailRequest).then((response) => {
        console.log(response);
    })
    callback(null, {
        statusCode: 200, 
        headers,
        body: JSON.stringify({
          msg: event.headers
        })
    })
}