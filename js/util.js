(function($) {
    $.fn.templateData = function(id, datainfo) {
        var source = id.html();
        // 编译HTML生成对应的JS模板
        var template = Handlebars.compile(source);
        // 使用JS模板处理需要显示的JSON数据，生成对应的HTML内容
        var html = template(datainfo);
        return html;
    };

    //获取url跟着的参数
    $.fn.getRequestParameter = function(name) {
        var url = window.location.search,
            reg, retVal;
        return name ? (reg = new RegExp("(^\\?|&)" + name + "=([^&]*)(&|$)"), retVal = url.match(reg), $.isArray(retVal) && retVal.length >= 3 ?
            retVal[2] : '') : '';
    };
})
