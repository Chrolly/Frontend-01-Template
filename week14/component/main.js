// require("./foo.js");
// import "./foo"

function create(Cls, attributes) {
    var o = new Cls();

    for (var name in attributes) {
        o[name] = attributes[name];
    }

    return o;
}

class Div {

}

let component = < Div id = "a"
class = "b" / >
    console.log(component)

// let component = < Cls id = "a" / > ;

// component.setAttribute("id", "a");