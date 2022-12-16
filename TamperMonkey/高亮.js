
var arr = ['安居客', '58同城', '房产网', '诸葛找房', '网易房产', '房天下', '吉屋网', '楼盘网', '链家', '贝壳找房', '汝南在线', '砀山在线', '房地产', '房产', '楼市网', '智房网']
document.addEventListener("DOMNodeInserted", update);


function update() {
    let inputs = document.getElementsByClassName('hint_PIwZX c_font_2AD7M')[0];
    inputs.setAttribute('style', 'background-color:red;');
    let g = document.getElementsByClassName("c-color-gray");
    for (var i = 0; i < g.length; i++) {
        let f = g[i];
        for (var j = 0; j < arr.length; j++) {
            if (f.textContent.search(arr[j]) != -1) {
                f.setAttribute('style', 'background-color:#4cd137;font-size:25px;color:red;');
            }
        }
    }
}
