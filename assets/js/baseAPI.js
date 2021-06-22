// 每次调用 $.get() 或 $.post() 或 $.ajax() 的时候先调用这个函数
$.ajaxPrefilter(function(options) {
    // 发起真正的ajax请求之前,统一拼接请求的根路径
    options.url = 'http://api-breakingnews-web.itheima.net' + options.url
})