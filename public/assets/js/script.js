
$(document).ready(function () {

    $(".devour-form").on("submit", function (event) {
        event.preventDefault();
         let id = $(this).data("id");
         console.log(id);
         
        let devouredBurger = $(this).data("devouredBurger").val();

        if(devouredBurger === 1){
            devouredBurger = 0;
        } else {
            devouredBurger = 1;
        }
        let devouredState ={
            devoured: devouredBurger,
        };

        $.ajax( "/api/burgers/", + id, {
            type: "PUT",
            data: devouredState,
        }).then(function () {
            console.log("Burger devoured!")
            location.reload();
        });
    });



$("#text-enter-button").on("click",function(event){
   event.preventDefault();
    let  newBurger = {
       burger_name : $("#enter_text").val().trim(),
       devoured: 0 
   }
   console.log(newBurger);
    $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
    }).then (res =>{
     location.reload()
     console.log(res);

});  
    });
});

