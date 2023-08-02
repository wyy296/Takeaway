import axios from "axios";

/*
请求函数模块
返回值: promise对象
 */

export default function ajax(url, data = {}, type = "GET") {
  return new Promise(function(resolve, reject) {
    let promise;
    if (type === "GET") {
      // 准备url query 参数数据
      let dataStr = ""; //数据拼接字符串
      Object.keys(data).forEach(key => {
        dataStr += key + "=" + data[key] + "&";
      });
      if (dataStr !== "") {
        dataStr = dataStr.substring(0, dataStr.lastIndexOf("&"));
        url = url + "?" + dataStr;
      }
      // 发送get 请求
      promise = axios.get(url);
    } else {
      // 发送post 请求
      promise = axios.post(url, data);
    }
    promise
      .then(function(response) {
        // 成功了调用resolve
        resolve(response.data);
      })
      .catch(function(error) {
        // 失败了调用reject
        reject(error);
      });
  });
}
