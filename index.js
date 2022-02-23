function search(){
    
}
function submit(){
    var pass = document.getElementById("submit");
    var name = document.getElementById("name");
    if(name == 'gold' && pass=='12345'){
        document.write("welcome");
    }
    else{
        document.write("Invalid");
    }
    
}