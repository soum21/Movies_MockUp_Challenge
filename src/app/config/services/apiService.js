export default class ApiService {
  // Configs
  // show Api log to see console.log
  constructor(showApiLog) {
    this.showApiLog = showApiLog;
  }

  async open(requrl) {
    return new Promise((resolve, reject) => {
      fetch(requrl)
        .then((response) => {
          if (response.ok) {
            let data = response.json();
            if (this.showApiLog) {
              console.log("RES -->", data);
            }
            resolve(data);
          } else {
            let error = {
              msg: "Inavalid Api Request",
              status: response.status,
            };
            reject(error);
          }
        })
        .catch((err) => {
          let error = {
            msg: "NetworkError when attempting to fetch resource.",
            status: 404,
          };
          reject(error);
        });
    });
  }
}
