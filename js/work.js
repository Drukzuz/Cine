function pop(a){
    $("#pop").addClass("pop-on");
    document.getElementById("pop-titulo").innerHTML = a;
}

function back(){
    $("#pop").removeClass("pop-on");
    $("#pop").addClass("pop");
}