program main
    implicit none

    real a, b

    write(*, *) "请输入两个数字"
    read(*, *) a, b

    write(*, *) a, "+", b, "=" , a + b
    write(*, *) a, "-", b, "=" , a - b
    write(*, *) a, "*", b, "=" , a * b
    write(*, *) a, "/", b, "=" , a / b
    
    

end program main

