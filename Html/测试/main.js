// ==UserScript==
// @name         一键复制
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://*.anjuke.com/community/view/*
// @match        https://*.loupan.com/info/*.html
// @match        http://*.jiwu.com/detail/*.html
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

(function () {
    // 开始------------------------------------------------------------------------------------------------------------------------
    // 创建按钮
    var AnNiuNeiRong = [
        ['一键复制', 'btn1', '100', '200'],
        ['物管公司未找到', 'btn3', '200', '200']
    ];

    var btns = new Array();
    for (var i = 0; i < AnNiuNeiRong.length; i++) {
        var temp_btn = document.createElement('button');
        temp_btn.textContent = AnNiuNeiRong[i][0];
        temp_btn.id = AnNiuNeiRong[i][1];
        var temp_style = 'position:fixed; left:' + AnNiuNeiRong[i][2] + 'px; top:' + AnNiuNeiRong[i][3] + 'px; width:100px; height:100px;z-index: 99;'
        temp_btn.setAttribute('style', temp_style);
        document.body.appendChild(temp_btn);
        btns[i] = temp_btn
    }

    // 判断网址
    var WangZhi = window.location.href;
    var KaiFaShang = '';
    var WuGuanGongSi = '';
    var nromal = '';
    var WuGuanMeiZhaoDao = '物管公司未找到';
    var MingChengCuoWu = '';
    var BeiZhu = '';
    var XiangTong = '相同';



    if (RegExp('https://.*?\.anjuke\.com/community/view/.*?', 'g').test(WangZhi)) {
        // 安居客（小区）
        var vals = document.querySelector(".info-list").childNodes;
        for (i = 0; i < vals.length; i++) {
            if (vals[i].firstChild.textContent === '开发商') {
                let temp1 = vals[i].lastChild
                KaiFaShang = temp1.textContent;
                temp1.setAttribute('style', 'background-color:#4cd137;font-size:25px;color:red;');
            }
            if (vals[i].firstChild.textContent === '物业公司') {
                let temp2 = vals[i].lastChild
                WuGuanGongSi = temp2.textContent;
                temp2.setAttribute('style', 'background-color:#4cd137;font-size:25px;color:red;');
            }
        }
    }
    else if (RegExp('https://.*?\.loupan\.com/info/.*?\.html', 'g').test(WangZhi)) {
        // 楼盘网
        let temp1 = document.evaluate('/html/body/div[2]/div[1]/div[6]/div[1]/div[3]/ul/li[1]', document).iterateNext()
        KaiFaShang = temp1.textContent.split("：")[1];
        temp1.setAttribute('style', 'background-color:#4cd137;font-size:25px;color:red;');

        let temp2 = document.evaluate('/html/body/div[2]/div[1]/div[6]/div[1]/div[1]/ul/li[5]/span', document).iterateNext()
        WuGuanGongSi = temp2.textContent.split("：")[1];
        temp2.setAttribute('style', 'background-color:#4cd137;font-size:25px;color:red;');
    }
    else if (RegExp('http://.*?\.jiwu\.com/detail/.*?\.html', 'g').test(WangZhi)) {
        // 吉屋网（新房）
        let temp1 = document.evaluate('/html/body/div[2]/div/table/tbody/tr[8]/td[2]/span', document).iterateNext()
        KaiFaShang = temp1.textContent;
        temp1.setAttribute('style', 'background-color:#4cd137;font-size:25px;color:red;');

        let temp2 = document.evaluate('/html/body/div[2]/div/table/tbody/tr[7]/td[2]', document).iterateNext()
        WuGuanGongSi = temp2.textContent;
        temp2.setAttribute('style', 'background-color:#4cd137;font-size:25px;color:red;');
    }

    // 去掉行首行尾多余内容
    KaiFaShang = KaiFaShang.replace(/^\s+|\s+$/g, "");
    WuGuanGongSi = WuGuanGongSi.replace(/^\s+|\s+$/g, "");

    // 创建输入框
    var temp = document.createElement('input')
    temp.id = 'copytext';
    var first = document.body.firstChild;
    document.body.insertBefore(temp, first);
    
    // 函数
    btns[0].onclick = function () {
        let text = KaiFaShang + '\t' + WuGuanGongSi + '\t' + '' + '\t' + '' + '\t' + WangZhi + '\t' + XiangTong;
        temp.value = text;
        temp.focus();
        temp.select();
        document.execCommand('copy');
        window.history.go(-1);
    }

    btns[1].onclick = function () {
        let text = KaiFaShang + '\t' + '' + '\t' + WuGuanMeiZhaoDao + '\t' + '' + '\t' + WangZhi + '\t';
        temp.value = text;
        temp.focus();
        temp.select();
        document.execCommand('copy');
        window.history.go(-1);
    }

    // 结束------------------------------------------------------------------------------------------------------------------------
})();