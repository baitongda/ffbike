import qs from "qs";
export default function ({ $axios, redirect }) {
	// 基本配置
	$axios.defaults.timeout = 10000

	// 请求拦截
	$axios.onRequest(config => {
    config.data = qs.stringify(config.data, {
      allowDots: true //Option allowDots can be used to enable dot notation
    });
	  //config.headers.apikey = 123456
	  //config.headers.basehttp = 'www.baidu.com'
	  return config
	});

	// 响应拦截
	$axios.onResponse(response  => {
    return Promise.resolve(response.data);
	});

	// 错误处理
	$axios.onError(error => {
    return Promise.reject(error);
	})
}
