// 每次调用 $.get() 或 $.post() 或 $.ajax() 的时候先调用这个函数
$.ajaxPrefilter(function(options) {
    // 发起真正的ajax请求之前,统一拼接请求的根路径
    options.url = 'http://api-breakingnews-web.itheima.net' + options.url

    // 统一为有权限的接口 设置headers 请求头
    if (options.url.indexOf('/my/') !== -1) {
        options.headers = {
            Authorization: localStorage.getItem('token') || ''
        }
    }
    // 全局统一挂载complete 回调函数
    options.complete = function(res) {
        if (res.responseJSON.status === 1 && res.responseJSON.message === '身份认证失败！') {
            // 强制清空token
            localStorage.removeItem('token')
                // 强制跳转登录页面
            location.href = '/login.html'
        }
    }
})