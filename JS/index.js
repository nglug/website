var x = 0
    function buttonClick() {
    if (x == 0) {
        document.getElementById("navbar").style.top = "0px";
        x ++;
        document.getElementById("main").style.marginTop = "38px";

    } else {
        document.getElementById("navbar").style.top = "-50px";
        x --;
        document.getElementById("main").style.marginTop = "0px";
    }
    
    }