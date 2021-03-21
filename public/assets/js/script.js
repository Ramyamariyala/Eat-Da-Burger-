// const burger = require("../../../models/burger");

$(document).ready(function () {

//     $(".devour-form").on("submit", function (event) {
//         event.preventDefault();

//         var burger_id = $(this).children(".burger_id").val();
//         console.log(burger_id);
//         $.ajax({
//             method: "PUT",
//             url: "/api/burgers/" + burger_id
//         }).then(function (data) {
//             // reload page to display devoured burger in proper column
//             location.reload();
//         });

//     });
/* <div class="container">
    <div class="row">
        <div class="col-md-12 text-center enter_section">
            <form>
                <input type="text" class="form-control devour-form" name="burger_name" value="" id="enter_text">
                <button type="submit" class="btn btn-primary" id="text-enter-button">Submit</button>
            </form>
            <p>Enter a burger you want to eat Click the "Submit" button.</p>
        </div>
    </div>
</div> */

// $.ajax("/api/cats", {
//     type: "POST",
//     data: newCat
//   }).then(
//     function() {
//       console.log("created new cat");
//       // Reload the page to get the updated list
//       location.reload();
//     }
//   );
// });

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
