import md5 from 'md5'
import axios from 'axios'
const instance = axios.create({
baseURL: 'https://imooc-admin.lgdsunday.club/prod-api',
});


// 添加请求拦截器
instance.interceptors.request.use(function (config) {
    const { icode, time } = getTestICode()
    config.headers.icode = icode
    config.headers.codeType = time
// 在发送请求之前做些什么
return config;
}, function (error) {
// 对请求错误做些什么
return Promise.reject(error);
});

// 添加响应拦截器
instance.interceptors.response.use(function (response) {
    
// 对响应数据做点什么
return response.data;
}, function (error) {
// 对响应错误做点什么
return Promise.reject(error);
});
//实现code
function getTestICode() {
    const now = parseInt(Date.now() / 1000)
    const code = now + 'LGD_Sunday-1991'
    return {
      icode: md5(code),
      time: now
    }
}
export default instance;