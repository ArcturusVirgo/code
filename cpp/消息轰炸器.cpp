#include <Windows.h>
#include <iostream>

using namespace std;

int main() {

    int i;
    int times;
    cout << "����˵����\n" <<
            "�Ƚ����ݸ��Ƶ����а��ϣ�����ʼ������������������촰�ӿ�\n"
            "5���ʼ������Ϣ\n\n" <<
            "�����������" << endl;
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
