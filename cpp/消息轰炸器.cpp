#include <Windows.h>
#include <iostream>

using namespace std;

int main() {

    int i;
    int times;
    cout << "程序说明：\n" <<
            "先将内容复制到剪切板上，程序开始后立即将光标移至聊天窗接口\n"
            "5秒后开始发送消息\n\n" <<
            "请输入次数：" << endl;
    cin >> times;

    Sleep(5000);
    for(i=0;i<times;i++){
        cout << i << endl;
        keybd_event(17, 0, 0, 0);
        keybd_event(86, 0, 0, 0);
        keybd_event(86, 0, 2, 0);
        keybd_event(17, 0, 2, 0);
        Sleep(100);
        keybd_event(13, 0, 0, 0);
        keybd_event(13, 0, 2, 0);
    }
    return 0;
}
