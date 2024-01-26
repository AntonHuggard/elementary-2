

coord_list = [
    "translateY(-100px) translateX(10px)",
    "translateY(-100px) translateX(-10px)",
    "translateY(calc(-10px + -100px * sin(18deg))) translateX(calc(-5px + 100px * cos(18deg)))",
    "translateY(calc(10px + -100px * sin(18deg))) translateX(calc(5px + 100px * cos(18deg)))",
    "translateY(calc(-10px + -100px * sin(18deg))) translateX(calc(5px + -100px * cos(18deg)))",
    "translateY(calc(10px + -100px * sin(18deg))) translateX(calc(-5px + -100px * cos(18deg)))",
    "translateY(calc(-8px + 100px * cos(36deg))) translateX(calc(8px + 100px * sin(36deg)))",
    "translateY(calc(8px + 100px * cos(36deg))) translateX(calc(-8px + 100px * sin(36deg)))",
    "translateY(calc(8px + 100px * cos(36deg))) translateX(calc(8px + -100px * sin(36deg)))",
    "translateY(calc(-8px + 100px * cos(36deg))) translateX(calc(-8px + -100px * sin(36deg)))"
    ]



for i in range(1, 11):
    j=i-1
    #coords = input("enter transform thing: ")
    print("#d-elctr-{} {{ animation: ORBIT-D{} 5s infinite linear; }}".format(str(i), str(i)))
    print("@keyframes ORBIT-D{} {{ ".format(i))
    print("\t0% {")
    print("\t\ttransform: rotate(0deg) {} rotate(0deg);".format(coord_list[j]))
    print("\t}")
    print("\t100% {")
    print("\t\ttransform: rotate(360deg) {} rotate(-360deg);".format(coord_list[j]))
    print("\t}")
    print("}")
    
