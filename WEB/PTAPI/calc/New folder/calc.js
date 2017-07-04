var myDate = (new Date().toUTCString());
		var main = function(){
		var name = prompt('Please write your name');
	var more = ' \n Let\'s calculate your budget! please, click ok';
var conferm = confirm('Hello' + ' '+ name + ' '+ more);

if(conferm === true && name === null){
	//var appendDiv = document.createElement("h1");
	var message1 = new Error("Please fill any name to continue"),
message2 = " feel free to use a name that's not associted with your real identity.";
	//appendDiv.innerText = message1 + "\n" + message2;
	//document.body.appendChild(appendDiv);
	document.write(new Error(message1 + "\n" + message2));
	//document.body.innerHTML = appendDiv.innerHTML;
}
else if(conferm !== true && name !== null){
	document.write(new Error("Please reload the page and confirm you want to proceed.")); instead
	// document.body.innerHTML = new Error("Please reload the page and confirm you want to proceed.");
}
//(conferm !== false && name !== null)
else if(conferm !== true && name === null){
	document.write(" Error: You're crazy"); 
}

else{
//alert('Conferm is true, so lets get to work');
jQuery('div.new').prepend('Welcome' + ' ' + name).css('font-family', 'helvetica').css('text-transform', 'uppercase').css('font-size', '3em').append("<p>").append('<input class="item" id="item" placeholder="Write item name">').append('<input id="Money" class="amount" placeholder="Amount">');
//.css('font-family', 'impact')
//$("name").css("color", "red");
jQuery('#rightPane').append('<p>').html(myDate);


}


 $.fn.addFunction = function(){
	var total = 0;
	//var val = $("#Money").val();
	this.each(function(){
		if($(this).is('#Money')){
			 val = $(this).val();
		}
		  // total  +=	;
 total  += val;

	});
	//total  += val;
	  return total;
    };

var input1 = $( 'input#item' ).val();
	var val = $( 'input.amount' ).val();
	$('input').bind('keypress', function(e) {
	if(e.keyCode ===13){
		// Enter pressed... do anything here...
		
		var input1 = $( 'input#item' ).val();
	 $('ul > p').prepend('<p>'+ input1 + " " + val + '</p>');
	 
	$('input').val('  ');
	}
	$('span.total').html( $(this).addFunction() );
});

				
		};
$(main);
		