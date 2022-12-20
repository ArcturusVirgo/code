import pyautogui
from pywinauto.application import Application

app = Application(backend='uia').start(r'D:\ML703Pro\OemDrv.exe')
main_window = app.window(title='ML703Pro')
main_window.wait('visible')

treeview = main_window.child_window(class_name='SysTreeView32')
Default = treeview.child_window(title='Default', control_type='TreeItem')
LOL = treeview.child_window(title='LOL', control_type='TreeItem')
buttons = main_window.children(class_name='Button')
okay = buttons[3]

p_x, p_y = pyautogui.position()
if Default.is_selected():
    LOL.click_input()
elif LOL.is_selected():
    Default.click_input()
pyautogui.moveTo(p_x, p_y)

okay.click()
main_window.wait('ready')
app.kill()
