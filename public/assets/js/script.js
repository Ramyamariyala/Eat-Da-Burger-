
$(document).ready(function () {

    // $(".devour-form").on("submit", function (event) {
    //     event.preventDefault();

    //     var burger_id = $(this).children(".burger_id").val();
    //     console.log(burger_id);
    //     $.ajax({
    //         method: "PUT",
    //         url: "/api/burgers/" + burger_id
    //     }).then(function (data) {
    //         // reload page to display devoured burger in proper column
    //         location.reload();
    //     });



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
