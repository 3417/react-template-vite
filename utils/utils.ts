

// 防抖


export const debounce = (fn: Function, delay: number) => {
    let timer: any = null;
    return function () {
        if (timer) clearTimeout(timer);
        timer = setTimeout(() => {
            fn.apply(this, arguments)
        }, delay)
    }
}

// 节流

export const throttle = (fn: Function, delay: number) => {
    let timer: any = null;
    return function () {
        if (!timer) {
            timer = setTimeout(() => {
                fn.apply(this, arguments)
                timer = null
            }, delay)
        }
    }
}

// 金钱格式化
export const formatMoney = (money: number) => {
    return money.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
}

// 获取顶部地址栏地址
export const getTopUrl = () => {
    return window.location.href.split('#')[0];
}



export const getQueryString = (name: string) => {
    return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.href) || [, ""])[1].replace(/\+/g, '%20')) || null;
}


// 补0
export const pad = (num:number)=> num.toString().padStart(2, '0');


// 格式化url参数键值对
export const formatUrlParams = (params: any) => {
    return Object.keys(params).map(key => `${key}=${params[key]}`).join('&');
}

// 获取Url参数
export const getUrlParams = (url: string) => {
    const params: any = {};
    url.replace(/([^?&=]+)=([^?&=]*)/g, (_, key, value) => {
        params[key] = value;
        return value;
    });
    return params;
}
