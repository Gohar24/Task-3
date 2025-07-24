function data(event){
    event.preventDefault()
    var name=document.getElementById ("name").value;
    var email=document.getElementById("email").value;

    if(name ==="" || email === "")
    {
        alert("All fields are mondatory");
        return false;
    }
    if(!email.endsWith("@gmail.com"))
    {
        alert("only gmail adresses are allowed");
        return false;
    }

    else
    {
        window.location.href = "abc.html";
        true;
    }
}