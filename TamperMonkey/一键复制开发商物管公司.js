// 创建按钮
var AnNiuNeiRong = [
    ['一键复制', 'btn1', '400', '400'],
    ['物管公司未找到', 'btn2', '500', '400'],
    ['行政区错误', 'btn3', '600', '400'],
    ['楼盘名称错误', 'btn4', '700', '400']
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

// 变量的定义
var WangZhi = window.location.href;
var KaiFaShang = '';
var WuGuanGongSi = '';
var nromal = '';
var WuGuanMeiZhaoDao = '物管公司未找到';
var XingZhengQuCuoWu = '行政区错误';
var MingChengCuoWu = '楼盘名称错误';
var BeiZhu_1 = '';
var BeiZhu_2 = '';
var XiangTong = '相同';

var GaoLiang_style = 'background-color:yellow;color:red;';

// 判断网址
if (RegExp('https://.*?\.anjuke\.com/community/view/.*?', 'g').test(WangZhi)) {
    // 1. 安居客（小区）
    var vals = document.querySelector(".info-list").childNodes;
    for (i = 0; i < vals.length; i++) {
        if (vals[i].firstChild.textContent === '开发商') {
            let temp1 = vals[i].lastChild
            KaiFaShang = temp1.textContent;
            temp1.setAttribute('style', GaoLiang_style);
        }
        if (vals[i].firstChild.textContent === '物业公司') {
            let temp2 = vals[i].lastChild
            WuGuanGongSi = temp2.textContent;
            temp2.setAttribute('style', GaoLiang_style);
        }
    }
    let temp3 = document.evaluate('/html/body/div/div/div/div[2]/div[2]/div/p', document).iterateNext();
    BeiZhu_1 = temp3.textContent.split("-")[0];
    temp3.setAttribute('style', GaoLiang_style);

    let temp4 = document.evaluate('/html/body/div/div/div/div[2]/div[2]/div/h1', document).iterateNext();
    BeiZhu_2 = temp4.textContent;
    temp4.setAttribute('style', GaoLiang_style);
}
else if (RegExp('https://.*?\.loupan\.com/info/.*?\.html', 'g').test(WangZhi)) {
    // 2. 楼盘网
    let temp1 = document.evaluate('/html/body/div[2]/div[1]/div[6]/div[1]/div[3]/ul/li[1]', document).iterateNext();
    KaiFaShang = temp1.textContent.split("：")[1];
    temp1.setAttribute('style', GaoLiang_style);
    let temp2 = document.evaluate('/html/body/div[2]/div[1]/div[6]/div[1]/div[1]/ul/li[5]/span', document).iterateNext();
    WuGuanGongSi = temp2.textContent.split("：")[1];
    temp2.setAttribute('style', GaoLiang_style);
    let temp3 = document.evaluate('/html/body/div[2]/div[1]/div[1]/div/div[1]/a[3]', document).iterateNext();
    temp3.setAttribute('style', GaoLiang_style);
}
else if (RegExp('http://.*?\.jiwu\.com/detail/.*?\.html', 'g').test(WangZhi)) {
    // 3. 吉屋网（新房）
    let temp1 = document.evaluate('/html/body/div[2]/div/table/tbody/tr[8]/td[2]/span', document).iterateNext();
    KaiFaShang = temp1.textContent;
    temp1.setAttribute('style', GaoLiang_style);
    let temp2 = document.evaluate('/html/body/div[2]/div/table/tbody/tr[7]/td[2]', document).iterateNext();
    WuGuanGongSi = temp2.textContent;
    temp2.setAttribute('style', GaoLiang_style);
}
else if (RegExp('http://.*?\.jiwu\.com/loupan/.*?\.html', 'g').test(WangZhi)) {
    // 4. 吉屋网（二手房）
    let temp1 = document.evaluate('/html/body/div[4]/div/div[3]/div[2]/div[1]/div[2]/ul/li[12]/em', document).iterateNext();
    KaiFaShang = temp1.textContent;
    temp1.setAttribute('style', GaoLiang_style);
    let temp2 = document.evaluate('/html/body/div[4]/div/div[3]/div[2]/div[1]/div[2]/ul/li[11]/em', document).iterateNext();
    WuGuanGongSi = temp2.textContent;
    temp2.setAttribute('style', GaoLiang_style);
    let temp3 = document.evaluate('/html/body/div[2]/div[1]/div/span[4]/a', document).iterateNext();
    temp3.setAttribute('style', GaoLiang_style);
}
else if (RegExp('https://.*?loupan.com/community/.*?html', 'g').test(WangZhi)) {
    // 5. 楼盘网2
    let temp1 = document.evaluate('/html/body/div[2]/div[2]/div/div[1]/div[2]/div/div[2]/p[2]/span[2]', document).iterateNext();
    KaiFaShang = temp1.textContent;
    temp1.setAttribute('style', GaoLiang_style);
    let temp2 = document.evaluate('/html/body/div[2]/div[2]/div/div[1]/div[2]/div/div[2]/p[1]/span[2]', document).iterateNext();
    WuGuanGongSi = temp2.textContent;
    temp2.setAttribute('style', GaoLiang_style);
}
else if (RegExp('https://m\.anjuke\.com/.*?/community/.*?/', 'g').test(WangZhi)) {
    // 6. 安居客手机版
    // 删除指定信息
    if (document.evaluate('/html/body/div[1]/div/div/div/div/div[1]', document).iterateNext()) {
        document.evaluate('/html/body/div[1]/div/div/div/div/div[1]', document).iterateNext().remove();
    }
    document.getElementsByTagName('h1')[0].click();
    document.evaluate('/html/body/div[1]/div/div/div/div/section[4]/div[2]/div/ul[1]', document).iterateNext().remove();

    // 获取信息
    let temp1 = document.evaluate('/html/body/div[1]/div/div/div/div/section[4]/div[2]/div/ul/li[4]/p/span[2]', document).iterateNext();
    KaiFaShang = temp1.textContent;
    temp1.setAttribute('style', GaoLiang_style);

    let temp2 = document.evaluate('/html/body/div[1]/div/div/div/div/section[4]/div[2]/div/ul/li[3]/p/span[2]', document).iterateNext();
    WuGuanGongSi = temp2.textContent;
    temp2.setAttribute('style', GaoLiang_style);
}
else if (RegExp('https://.*?newhouse\.fang\.com/loupan/.*?/housedetail\.htm', 'g').test(WangZhi)) {
    // 7. 房天下 新房
    let temp1 = document.evaluate('/html/body/div[5]/div[5]/div/div[1]/div[1]/ul/li[6]/div[2]/a', document).iterateNext();
    KaiFaShang = temp1.textContent;
    temp1.setAttribute('style', GaoLiang_style);
    let temp2 = document.evaluate('/html/body/div[5]/div[5]/div/div[1]/div[3]/ul/li[8]/div[2]', document).iterateNext();
    WuGuanGongSi = temp2.textContent;
    temp2.setAttribute('style', GaoLiang_style);
    let temp3 = document.evaluate('/html/body/div[5]/div[1]/div/div/ul/li[3]/a', document).iterateNext();
    temp3.setAttribute('style', GaoLiang_style);
}
else if (RegExp('https://.*?fang\.anjuke\.com/loupan/canshu-.*?\.html.*?from=loupan_tab', 'g').test(WangZhi)) {
    // 8. 安居客 新房
    let temp1 = document.evaluate('/html/body/div[2]/div[1]/div[1]/div[1]/div[2]/ul/li[6]/div[2]', document).iterateNext();
    KaiFaShang = temp1.textContent;
    temp1.setAttribute('style', GaoLiang_style);
    let temp2 = document.evaluate('/html/body/div[2]/div[1]/div[1]/div[3]/div[2]/ul/li[5]/div[2]', document).iterateNext();
    WuGuanGongSi = temp2.textContent;
    temp2.setAttribute('style', GaoLiang_style);
}
else if (RegExp('https://house\.leju\.com/.*?/xinxi/#wt_source=pc_house_lpxq_dh', 'g').test(WangZhi)) {
    // 9. 乐居房产
    let temp1 = document.evaluate('/html/body/div[6]/div[1]/div/ul/li[6]/p', document).iterateNext();
    KaiFaShang = temp1.textContent;
    temp1.setAttribute('style', GaoLiang_style);

    let temp2 = document.evaluate('/html/body/div[6]/div[1]/div/ul/li[7]/p', document).iterateNext();
    WuGuanGongSi = temp2.textContent;
    temp2.setAttribute('style', GaoLiang_style);
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
}

btns[1].onclick = function () {
    let text = KaiFaShang + '\t' + '' + '\t' + WuGuanMeiZhaoDao + '\t' + '' + '\t' + WangZhi + '\t';
    temp.value = text;
    temp.focus();
    temp.select();
    document.execCommand('copy');
}

btns[2].onclick = function () {
    let text = KaiFaShang + '\t' + WuGuanGongSi + '\t' + XingZhengQuCuoWu + '\t' + BeiZhu_1 + '\t' + WangZhi + '\t' + XiangTong;
    temp.value = text;
    temp.focus();
    temp.select();
    document.execCommand('copy');
}

btns[3].onclick = function () {
    let text = KaiFaShang + '\t' + WuGuanGongSi + '\t' + MingChengCuoWu + '\t' + BeiZhu_2 + '\t' + WangZhi + '\t' + XiangTong;
    temp.value = text;
    temp.focus();
    temp.select();
    document.execCommand('copy');
}