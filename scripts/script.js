$(document).ready(function(){
    $("form").submit(function(){
        let passwd = $("#passwd").val();
        let conf = $("#conf").val();

        if(conf != passwd){
            $("#conf").css("background-color", "lightcoral");
            alert("Le mot de passe confirmé ne correspond pas !");
            return false;
        }
        alert("Validation réussie !");
        return true;
    });
});