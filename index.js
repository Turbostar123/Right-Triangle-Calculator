//page load
function pageLoad(){
    $("perimeter_button").onclick = perimeter;
    $("other_options").onclick = more_options;
}
window.onload = pageLoad;

//Computes perimeter
function perimeter(){
    var leg_1 = parseFloat($("leg_1").value);
    var leg_2 = parseFloat($("leg_2").value);
    var perimeter = leg_1 + leg_2 + Math.sqrt((leg_1 * leg_1) + (leg_2 * leg_2));
    $("result").innerHTML = "The perimeter is: " + perimeter;
}

//Computes area
function area(){
    var leg_1 = parseFloat($("leg_1").value);
    var leg_2 = parseFloat($("leg_2").value);
    var area = (1/2) * leg_1 * leg_2;
    $("result").innerHTML = "The area is: " + area;
}

//Computes both
function both(){
    var leg_1 = parseFloat($("leg_1").value);
    var leg_2 = parseFloat($("leg_2").value);
    var perimeter = leg_1 + leg_2 + Math.sqrt((leg_1 * leg_1) + (leg_2 * leg_2));
    var area = (1/2) * leg_1 * leg_2;
    $("result").innerHTML = "The perimeter is: " + perimeter + "<br>The area is: " + area;
}

//Clear results
function clear(){
    $("result").innerHTML = "";
}

//Other options
var more_options_enabled = false;

function more_options(){
    if (more_options_enabled){
        return;
    }
    
    var area_button = document.createElement("button");
    area_button.innerHTML = "Compute Area!";
    area_button.onclick = area;

    var both_button = document.createElement("button");
    both_button.innerHTML = "Compute Both!";
    both_button.onclick = both;

    var clear_button = document.createElement("button");
    clear_button.innerHTML = "Clear Results!";
    clear_button.observe("mouseover", clear);

    var buttons = $("buttons");
    buttons.appendChild(area_button);
    buttons.appendChild(both_button);
    buttons.appendChild(clear_button);

    more_options_enabled = true;
}