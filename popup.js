
console.log('my_pops ready');

function onLoad(){
	console.log('OnReady');
	$('#btnLeft').click(function(){
		sendSetScreen(1);
	});

	console.log('OnReady');
	$('#btnCenter').click(function(){
		sendSetScreen(2);
	});

	console.log('OnReady');
	$('#btnRight').click(function(){
		sendSetScreen(3);
	});

	console.log('OnReady');
	$('#btnGallery').click(function(){
		sendSetScreen(22);
	});

	$('#btnYoutube').click(function(){
		sendSetScreen(44);
	});

	$('#btnSearch').click(function(){
		sendSetScreen(88);
	});

	$('#btnReddit').click(function(){
		sendSetScreen(111);
	});

	$('#btnControl').click(function(){
		sendSetScreen(0);
	});

}

function sendSetScreen(num){
	chrome.runtime.sendMessage({what : num});
}


$().ready(onLoad);

