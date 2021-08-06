function hidePage() {
	$('.page').slideUp('fast');
};

function showOne() {
	$('.one').slideDown();
};

function showTwo() {
	$('.phrase').val('');
	$('.two').slideDown();
};

function showCreate() {
	$('.create').slideDown();
};

function showOwn() {
	$('.create').slideDown();
	// $('.own').slideDown();
};
function showVerify() {
	$('.verify').slideDown();

};

function showMain() {
	// $('.phrase').trigger("input");
	$('.main').slideDown();
};

function showAddress() {
	$('.address').slideDown();
};

function showCustom() {
	$('.custom').slideDown();
};

function showAction() {
	$('.action').slideDown();
};

function showSend() {
	$('.send').slideDown();
};

function showKeys() {
	$('.keys').slideDown();
};

function showHash() {
	$('.hash').slideDown();
};

function fixCreate() {
	$('.page.create button.button-o').removeClass('hidden');
	$('.page.create p').text('Please note your phrase keys. Never share these words with somone.');
};

function fixOwn() {
	$('.page.create button.button-o').addClass('hidden');
	$('.page.create p').text('Please enter your own phrase keys.');
};

function copyToClipboard(element) {
  var $temp = $("<input>");
  $("body").append($temp);
  $temp.val($(element).text()).select();
  document.execCommand("copy");
  $temp.remove();
  $('.copy strong').text('Copied!');
   //alert("Copied");
};



function copyAddress(element) {
  var $temp = $("<input>");
  $("body").append($temp);
  $temp.val($(element).text()).select();
  document.execCommand("copy");
  $temp.remove();
  $('.copy-address strong').text('Copied!');
  //  alert("Copied");
};

// document.getElementById('getaddress').onclick = getAddress;
//
// var i = 0;
// var original = document.getElementById('address');
//
// // function repeat() {
// // var clone = original.cloneNode(true);
// // clone.id = "repeatTHIS1" + ++i;
// // original.parentNode.appendChild(clone);
// // }
//
// function getAddress() {
//   var indexrow = parseInt($('.addresses').last().find('.index span').text());
// 	console.log(indexrow);
//
// }

setInterval(function(){
    if(!navigator.onLine){
        $(".internet").slideDown('slow');
        $(".container").addClass('blur');
    }else{
        $(".internet").slideUp('slow');
        $(".container").removeClass('blur');
    }
},100);

function ignore() {
	$(".internet").addClass('hidden');
	$(".container").addClass('noblur');
};

function unDisable() {
	$(".footer.disable").addClass('hidden');
	$(".footer.enable").removeClass('hidden');
};

$(document).ready(function(){

	$('.sendlink').click(function(){
		$('.page').slideUp('fast');
		$('.main').slideDown('slow');
		$('.action').addClass('old-action');
		$('.action').removeClass('action');
		$('.send').addClass('action');
	 });

	$('.requestlink').click(function(){
		$('.page').slideUp('fast');
		$('.main').slideDown('slow');
		$('.old-action').addClass('action');
		$('.send').removeClass('action');
		$('.send').removeClass('old-action');
		$('.send-button').addClass('hidden');
	 });

	$('.toggle').click(function(){
		$('.nav').slideToggle('fast');
		$(".container").addClass('blur');
	 });

	$('.close-nav').click(function(){
		$('.nav').slideUp('fast');
		$(".container").removeClass('blur');
	 });

	$('.form-group label').click(function(){
		$(this).parent('.form-group').toggleClass('mini');
		$(this).next('.inputs').slideToggle('fast');
	 });

	$('.type li').click(function(){
		$('.type li').removeClass('active');
		$(this).addClass('active');
	 });

	$('.type li.legacy').click(function(){
		$('.type-content li').removeClass('type-active');
		$('.type-content li.type-legacy').addClass('type-active');
	 });

	$('.type li.compatible').click(function(){
		$('.type-content li').removeClass('type-active');
		$('.type-content li.type-compatible').addClass('type-active');
	 });

	$('.type li.default').click(function(){
		$('.type-content li').removeClass('type-active');
		$('.type-content li.type-default').addClass('type-active');
	 });

});

function fixPages() {
		$('.send').removeClass('action');
		$('.send').removeClass('old-action');
		$('.old-action').addClass('action');
		$('.send-button').removeClass('hidden');
};

function doverify(){
var phrase = $('#phrase').val();
var userentered = $('#verify').val();
if (phrase === userentered) {
	hidePage();
	showMain();
	unDisable();
}else{
	alert('Please Check Again!');
}

}
