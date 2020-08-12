

function getWidth() {
    return Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
}

const low_opacity_value = "25%";

function show_accordian() {
    var acc = document.getElementsByClassName("accordion");
    for (var i = 0; i < acc.length; i++) {
        acc[search_type].classList.toggle("active");
        // toggle search type panel 
        var panel = document.getElementsByClassName("panel");
        if (panel[0].style.display === "block") {
            panel[0].style.display = "none";
        } else {
            panel[0].style.display = "block";
        }
        
    }
}

var search_type = 0;

function set_search(n, mobile_view) {

    // from here ...

    document.getElementById("acc_dt").style.display = "none";
    document.getElementById("acc_EN").style.display = "none";
    document.getElementById("acc_MP").style.display = "none";
    document.getElementById("acc_BP").style.display = "none";
    document.getElementById("acc_ds").style.display = "none";
    document.getElementById("electronegativity_div").style.display = "none";
    document.getElementById("melting_pt_div").style.display = "none";
    document.getElementById("boiling_pt_div").style.display = "none";
    document.getElementById("discovery_div").style.display = "none";

    if (mobile_view) {
        var acc = document.getElementsByClassName("accordion");
        acc[search_type].classList.toggle("active");
        switch(n) {
            case 0:
                document.getElementById("acc_dt").classList.toggle("active");
                break;
            case 1:
                document.getElementById("acc_EN").classList.toggle("active");
                break;
            case 2:
                document.getElementById("acc_MP").classList.toggle("active");
                break;
            case 3:
                document.getElementById("acc_BP").classList.toggle("active");
                break;
            case 4:
                document.getElementById("acc_ds").classList.toggle("active");
                break;
        }
    } else {
        document.getElementById("EN_btn").style.backgroundColor = "transparent";
        document.getElementById("EN_btn").style.color = "white";
        document.getElementById("MP_btn").style.backgroundColor = "transparent";
        document.getElementById("MP_btn").style.color = "white";
        document.getElementById("BP_btn").style.backgroundColor = "transparent";
        document.getElementById("BP_btn").style.color = "white";
        document.getElementById("DS_btn").style.backgroundColor = "transparent";
        document.getElementById("DS_btn").style.color = "white";
        switch(n) {
            case 1:
                if (search_type != 1) {
                    document.getElementById("EN_btn").style.backgroundColor = "white";
                    document.getElementById("EN_btn").style.color = "black";
                }
                break;
            case 2:
                if (search_type != 2) {
                    document.getElementById("MP_btn").style.backgroundColor = "white";
                    document.getElementById("MP_btn").style.color = "black";
                }
                break;
            case 3:
                if (search_type != 3) {
                    document.getElementById("BP_btn").style.backgroundColor = "white";
                    document.getElementById("BP_btn").style.color = "black";
                }
                break;
            case 4:
                if (search_type != 4) {
                    document.getElementById("DS_btn").style.backgroundColor = "white";
                    document.getElementById("DS_btn").style.color = "black";
                }
                break;
        }
        
    }      

    // ... to here, it's all just visual indicators of the selectors at the top
    // the following code has all the functionality ...
    
    switch (n) {
        case 0:
            document.getElementById("acc_dt").style.display = "block";                
            document.getElementById("element_search_container").style.display = "grid";
            reset_opacity();
            search_type = 0;
            break;
        case 1:
            if (search_type != n) {
                document.getElementById("acc_EN").style.display = "block";
                document.getElementById("electronegativity_div").style.display = "block";
                document.getElementById("element_search_container").style.display = "none";
                en_slider_function();
                search_type = 1;
            } else {
                document.getElementById("acc_dt").style.display = "block";
                document.getElementById("acc_dt").classList.toggle("active");
                document.getElementById("element_search_container").style.display = "grid";
                reset_opacity();
                search_type = 0;
            }
            break;
        case 2:
            if (search_type != n) {
                search_type = 2;
                document.getElementById("acc_MP").style.display = "block";
                document.getElementById("melting_pt_div").style.display = "block";
                document.getElementById("element_search_container").style.display = "none";
                mp_slider_function();
            } else {
                document.getElementById("acc_dt").style.display = "block";
                document.getElementById("element_search_container").style.display = "grid";
                reset_opacity();
                search_type = 0;
            }
            break;
        case 3:
            if (search_type != n) {
                search_type = 3;
                document.getElementById("acc_BP").style.display = "block";
                document.getElementById("acc_BP").classList.toggle("active");
                document.getElementById("boiling_pt_div").style.display = "block";
                document.getElementById("element_search_container").style.display = "none";
                bp_slider_function();
            } else {
                document.getElementById("acc_dt").style.display = "block";
                document.getElementById("acc_dt").classList.toggle("active");
                document.getElementById("element_search_container").style.display = "grid";
                reset_opacity();
                search_type = 0;
            }
            break;
        case 4:
            if (search_type != n) {
                search_type = 4;
                document.getElementById("acc_ds").style.display = "block";
                document.getElementById("discovery_div").style.display = "block";
                document.getElementById("element_search_container").style.display = "none";
                ds_slider_function();
            } else {
                document.getElementById("acc_dt").style.display = "block";
                document.getElementById("acc_dt").classList.toggle("active");
                document.getElementById("element_search_container").style.display = "grid";
                reset_opacity();
                search_type = 0;
            }
            break;
    }
}    

function reset_opacity() {
    elements.forEach(element => {
        document.getElementById(element.name).style.opacity = "100%";
    });
}

