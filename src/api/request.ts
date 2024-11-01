import axios, { AxiosRequestConfig, Method } from 'axios';
const baseUrl = import.meta.env.VITE_APP_BASE_API;
axios.defaults.baseURL = baseUrl;  //设置默认全局的请求url地址

// 封装axios请求
class httpRequest {
    baseUrl: string
    constructor(baseUrl?: string) {
        this.baseUrl = baseUrl || '';
    }
    getInsideConfig(): object {
        let config = {
            baseURL: baseUrl,
            timeout: 50 * 1000,
            headers: {
                "Content-Type": "application/json;charset=utf-8"
            }
        }
        return config;
    }
    interceptors(instance: any, url: string) {
        instance.interceptors.request.use((config: any) => {
            console.log("请求配置：")
            return config
        }, (error: any) => {
            return Promise.reject(error)
        })
        instance.interceptors.response.use((resp: any) => {
            console.log("响应配置");
            return Promise.reject(resp.data);
        }, (error: any) => {
            // status 错误提醒机制
            return Promise.reject(error);
        })
    }
    request(options: any) {
        const instance = axios.create();
        options = Object.assign(this.getInsideConfig(), options);
        this.interceptors(instance, options.url);
        return instance(options)
    }
}
let _https: any = new httpRequest(baseUrl);

// 封装常用的请求方式
const get = (url, params, config) => { return _https.request({ url, params, ...config, method: 'get' }) }
const post = (url, data, config) => { return _https.request({ url, data, ...config, method: 'post' }) }
const remove = (url, params, config) => { return _https.request({ url, params, ...config, method: 'delete' }) }
const update = (url, data, config) => { return _https.request({ url, data, ...config, method: 'put' }) }

// 导出
export default { get, post,remove,update }


