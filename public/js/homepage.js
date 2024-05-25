

//old
// $(".header>img").click(()=>
// {
//     displaySideBar();
// })

//new
$(".header>img").click(()=>
{
    displaySideBar();
    $(".sidebar").animate({left:0},"slow");
})


$(".prompt").hover(function(){
   
    displayPromptSubmit(this);
},
function(){
    hidePromptSubmit(this);
}
 );

 //Example prompts event starts 

 $(".prompt-one").click(()=>
 {

$("#one").submit();
$(".prompt-one img").attr("src","./images/brain-solid.svg");
$(".prompt-one img").addClass("fas fa-spinner");

 }
 );

 $(".prompt-two").click(()=>
 {

$("#two").submit();
$(".prompt-two img").attr("src","./images/spinner-solid.svg");
$(".prompt-two img").addClass("fas fa-spinner");

 }
 );

 $(".prompt-three").click(()=>
 {

$("#three").submit();
$(".prompt-three img").attr("src","./images/spinner-solid.svg");
$(".prompt-three img").addClass("fas fa-spinner");

 }
 );

 $(".prompt-four").click(()=>
 {

$("#four").submit();
$(".prompt-four img").attr("src","./images/spinner-solid.svg");
$(".prompt-four img").addClass("fas fa-spinner");

 }
 );

// Examples prompts end


$(".chat-display-conversation-prompt").animate({left:0},"slow");
// $(".chat-display-conversation-answer").animate({left:100},"slow");

$(".submit-button").click(()=>{
$("#prompt").submit();
$(".submit-button>img").attr("src","./images/spinner-solid.svg");
$(".submit-button>img").addClass("fas fa-spinner");
$(".submit-button").addClass("icon-container");

});

// -------------------------------------------------------------------------------------------------------------------------

// Scrolling
// var my_time;
// var count = 0;
// setTimeout('pageScroll()', 1200);
// function pageScroll() {
// // If condition to set repeat 
//     if (count < 2) {
//         var objDiv =  document.querySelector('.chat-display-conversation');
//         objDiv.scrollTop = objDiv.scrollTop + 1;
//         if (objDiv.scrollTop == (objDiv.scrollHeight - 61)) {
//   setTimeout(function() {
//                 objDiv.scrollTop = 0;
//                 count++;
//     }, 1200);
//         }
// //set scrolling time start
//         my_time = setTimeout('pageScroll()', 10);
// //set scrolling time end
//     }
// }


//  -------------------------------------------------------------------------------------------------------------------------


function displaySideBar()
{
    $(".sidebar").toggle("slow");
}


function displayPromptSubmit(element)
{
    $(element).find(".prompt-submit>img").show(); 
}


function hidePromptSubmit(element)
{
    $(element).find(".prompt-submit>img").hide(); 
}
