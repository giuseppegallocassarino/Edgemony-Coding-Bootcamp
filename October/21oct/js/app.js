const cart=[];
function myObject()
{
    let object = prompt("Add your object:");
    if (object == null || object == ""){
        alert("Please insert your object")
    }
    if (cart.includes(object)==true) {
        alert (object + "is already in your chart!")

    }
    else {
        alert ("Object adeed:"+ object)
        cart.push(object);
    }

    console.log(cart);
            
}