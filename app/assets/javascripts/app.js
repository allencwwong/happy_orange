var ready;

ready = function(){

  $main_image = $("#main_image_section");
  $sub_image = $(".sub-image li img");

  // hide selector

 
  
    // food tags json

  //   var food_tag_data = function(){ 
  //     var json = null;

  //     $.ajax({ 
  //       async: false, 
  //       type: 'GET', 
  //       url: 'http://localhost:3001/food-tags-json', 
  //       data: { get_param: 'value' }, 
  //       dataType: 'json',
  //       success: function (data) { 
  //         json = data;
  //       // console.log(data);
  //     }
  //   });
  //     return json;
  //   }();

  // // food details json

  // var food_details_data = function(){ 
  //   var json = null;

  //   $.ajax({ 
  //     async: false, 
  //     type: 'GET', 
  //     url: 'http://localhost:3001/food-details-json', 
  //     data: { get_param: 'value' }, 
  //     dataType: 'json',
  //     success: function (data) { 
  //       json = data;
  //       // console.log(data);
  //     }
  //   });
  //   return json;
  // }();

  // filter btn

  $(".filter-btn").click(function(){
    $("#filter_panel").slideToggle("slow");
  });


// // get list of photo tag ids
// var food_tag_ids = [];
// $.each(food_tag_data,function(){
//   for(var i=0;i<$(this).length;i++){
//     food_tag_ids.push($(this)[i].photo_id);
//   }
// });


// // set photo show tag status base on photo tag ids
// $.each(food_tag_ids,function(index,value){
//   var photo_id = value;
//   $sub_image.each(function(){
//     if($(this).data("photo-id") === photo_id){
//       console.log($(this).data("photo-id"));
//       $(this).data("show-tag",true);
//     }
//     console.log($(this).data("photo-id") + " " + $(this).data("show-tag"));
//   });
// });

//     // show page image selector
//     $sub_image.click(function(){
//       var selected_img_id = $(this).data("photo-id");
//       // var selected_img = $(this).attr("src");
//       var selected_img = $(this);
//       $main_image.find("img").attr("src",selected_img.attr("src"));     
      
//   // show page name
//   var name = $(this).data("name");
//   $(".header-title h2").append().text(name);
//   console.log(name);

//   // console.log(food_details_data);
//   $.each(food_details_data,function(){
//     if(selected_img_id === $(this)["0"].id){
//       $main_image.find(".sub-label").empty();
//       var food = $(this)["0"];
//       var price_symb;
//       var price = food.price;
//       var short_desc = food.short_desc;
      
      
//       if(price <= 17.99){
//         price_symb = "$";
//       } else if (price > 18){
//         price_symb = "$$";
//       } else if (price > 25){
//         price_symb = "$$$";
//       }
//       $main_image.find(".label-price").append(price_symb);
//       $main_image.find(".short-desc").append(short_desc);
//       // $(".label-cuisine").append(food.cuisine);
//     }
//     // console.log($(this)["0"].id);
//   });

  

//         $.each(food_tag_ids,function(){
//           if(selected_img_id === food_tag_ids){
//             $selected_img.data("show-tag",true);
//           }

//         });

//         $.each(food_tag_data,function(){
//   for(var i=0;i<$(this).length;i++){
    
//        if ($(this)[i].photo_id === selected_img_id){
        
//         $main_image.find(".label-tag").empty();
//         // console.log(photo_id_with_tags);
//         for(key in $(this)[i]){

//           if ($(this)[i].hasOwnProperty(key) && key != "photo_id"){
//                 // selected_img.data("show-tag", true);
//                 $main_image.find(".labels").append("<li class='label label-primary label-tag'>"+$(this)[i][key]+"</li>");

//               } 
//             } 
//           }

//         }
  
// });
  $show_page = $("#show");
  var active = $show_page.find(".sub-image li").first();
  
  $show_page.find(".active").insertBefore(active);
  $show_page.find(".main-image").attr("src",$show_page.find(".active img").attr("src"));




//   // empty out tag for no tag
//   if(selected_img.data("show-tag") === false){
//     $main_image.find(".label-tag").empty();
//   }

// });  // end of show page image selector   

  // show sub navigation

  $("div").each(function(){
    if($(this).data("nav") === "sub-nav"){
      $("#main_nav").css("display","none");
      $("#sub_nav").css("display","block");
    }
  }); 

  // sub navigation back/home button

  $(".back-btn").click(function(){   
    parent.history.back();
    return false;    
  });  


// like and pass 
  // var selection;
  // function my_selection(user_id,status){
  //   selection = {
  //     id: 
  //     user_id: user_id,
  //     food_photo_id: photo_id,
  //     status: status     
  //   }
  // }



// end

};

$(document).ready(ready);
$(document).on('page:load', ready);






