var numerOfStep = 0;
var isFail = false;
var count = 0;
var solution = [
  2,
  2,
  3,
  5,
  2,
  2,
  3,
  5
];
var success = "CF89HL";
var icon = "img/battery-svgrepo-com.svg";
window.onload = function () {
	$('body').bind('cut copy', function(e) {
        e.preventDefault();
    });
	
	var boxAmmount = getRandomInt(25, 35);
	var left = getRandomInt(2, 5);
	var top = getRandomInt(15, 17);
	for(let i = 0;i<boxAmmount;i++){
		if (i % 2 === 0) {
            $(".step1").append("<div class='box draggable floating' data-step='1' style='left:"+left+"vw;top:"+top+"vh;'><img src='"+icon+"'></div>");
        }else{
			$(".step1").append("<div class='box draggable floating2' data-step='1' style='left:"+left+"vw;top:"+top+"vh;'><img src='"+icon+"'></div>");
		}

		if(left<80){
			left += getRandomInt(10, 15);
		}else{
			left = getRandomInt(2, 5);
			top += getRandomInt(10, 12);
		}
	}

	$( function() {
		$( ".draggable" ).draggable();
		$( ".draggable" ).droppable({
			drop: function( event, ui ) {
				if(count>=10){
					location.reload();
				}

				var eWidth = ui.draggable.width();
				var eHeight = ui.draggable.height();
				var eBorderRadius = ui.draggable.css("borderRadius");
				eWidth += $(this).width();
				eHeight += $(this).height();
				var tempBox = $(this);
				
				var step1 = parseInt(ui.draggable.data("step"));
				var step2 = parseInt($(this).data("step"));
				var step = step1+step2;
				
				ui.draggable.fadeOut( 100, function() {
					ui.draggable.remove();
					
					for(var i2 = 0; i2<step1;i2++){
						tempBox.append("<img src='"+icon+"'>");
					}
					
					tempBox.animate({
						width: eWidth+'px',
						height: eHeight+'px'
					});
					tempBox.data("step",step);
					if(solution[numerOfStep] && solution[numerOfStep] == step){
						if(numerOfStep == solution.length-1 && !isFail){
							$(".step1, .solution").fadeOut( 100, function() {
								var MD5 = function(d){var r = M(V(Y(X(d),8*d.length)));return r.toLowerCase()};function M(d){for(var _,m="0123456789ABCDEF",f="",r=0;r<d.length;r++)_=d.charCodeAt(r),f+=m.charAt(_>>>4&15)+m.charAt(15&_);return f}function X(d){for(var _=Array(d.length>>2),m=0;m<_.length;m++)_[m]=0;for(m=0;m<8*d.length;m+=8)_[m>>5]|=(255&d.charCodeAt(m/8))<<m%32;return _}function V(d){for(var _="",m=0;m<32*d.length;m+=8)_+=String.fromCharCode(d[m>>5]>>>m%32&255);return _}function Y(d,_){d[_>>5]|=128<<_%32,d[14+(_+64>>>9<<4)]=_;for(var m=1732584193,f=-271733879,r=-1732584194,i=271733878,n=0;n<d.length;n+=16){var h=m,t=f,g=r,e=i;f=md5_ii(f=md5_ii(f=md5_ii(f=md5_ii(f=md5_hh(f=md5_hh(f=md5_hh(f=md5_hh(f=md5_gg(f=md5_gg(f=md5_gg(f=md5_gg(f=md5_ff(f=md5_ff(f=md5_ff(f=md5_ff(f,r=md5_ff(r,i=md5_ff(i,m=md5_ff(m,f,r,i,d[n+0],7,-680876936),f,r,d[n+1],12,-389564586),m,f,d[n+2],17,606105819),i,m,d[n+3],22,-1044525330),r=md5_ff(r,i=md5_ff(i,m=md5_ff(m,f,r,i,d[n+4],7,-176418897),f,r,d[n+5],12,1200080426),m,f,d[n+6],17,-1473231341),i,m,d[n+7],22,-45705983),r=md5_ff(r,i=md5_ff(i,m=md5_ff(m,f,r,i,d[n+8],7,1770035416),f,r,d[n+9],12,-1958414417),m,f,d[n+10],17,-42063),i,m,d[n+11],22,-1990404162),r=md5_ff(r,i=md5_ff(i,m=md5_ff(m,f,r,i,d[n+12],7,1804603682),f,r,d[n+13],12,-40341101),m,f,d[n+14],17,-1502002290),i,m,d[n+15],22,1236535329),r=md5_gg(r,i=md5_gg(i,m=md5_gg(m,f,r,i,d[n+1],5,-165796510),f,r,d[n+6],9,-1069501632),m,f,d[n+11],14,643717713),i,m,d[n+0],20,-373897302),r=md5_gg(r,i=md5_gg(i,m=md5_gg(m,f,r,i,d[n+5],5,-701558691),f,r,d[n+10],9,38016083),m,f,d[n+15],14,-660478335),i,m,d[n+4],20,-405537848),r=md5_gg(r,i=md5_gg(i,m=md5_gg(m,f,r,i,d[n+9],5,568446438),f,r,d[n+14],9,-1019803690),m,f,d[n+3],14,-187363961),i,m,d[n+8],20,1163531501),r=md5_gg(r,i=md5_gg(i,m=md5_gg(m,f,r,i,d[n+13],5,-1444681467),f,r,d[n+2],9,-51403784),m,f,d[n+7],14,1735328473),i,m,d[n+12],20,-1926607734),r=md5_hh(r,i=md5_hh(i,m=md5_hh(m,f,r,i,d[n+5],4,-378558),f,r,d[n+8],11,-2022574463),m,f,d[n+11],16,1839030562),i,m,d[n+14],23,-35309556),r=md5_hh(r,i=md5_hh(i,m=md5_hh(m,f,r,i,d[n+1],4,-1530992060),f,r,d[n+4],11,1272893353),m,f,d[n+7],16,-155497632),i,m,d[n+10],23,-1094730640),r=md5_hh(r,i=md5_hh(i,m=md5_hh(m,f,r,i,d[n+13],4,681279174),f,r,d[n+0],11,-358537222),m,f,d[n+3],16,-722521979),i,m,d[n+6],23,76029189),r=md5_hh(r,i=md5_hh(i,m=md5_hh(m,f,r,i,d[n+9],4,-640364487),f,r,d[n+12],11,-421815835),m,f,d[n+15],16,530742520),i,m,d[n+2],23,-995338651),r=md5_ii(r,i=md5_ii(i,m=md5_ii(m,f,r,i,d[n+0],6,-198630844),f,r,d[n+7],10,1126891415),m,f,d[n+14],15,-1416354905),i,m,d[n+5],21,-57434055),r=md5_ii(r,i=md5_ii(i,m=md5_ii(m,f,r,i,d[n+12],6,1700485571),f,r,d[n+3],10,-1894986606),m,f,d[n+10],15,-1051523),i,m,d[n+1],21,-2054922799),r=md5_ii(r,i=md5_ii(i,m=md5_ii(m,f,r,i,d[n+8],6,1873313359),f,r,d[n+15],10,-30611744),m,f,d[n+6],15,-1560198380),i,m,d[n+13],21,1309151649),r=md5_ii(r,i=md5_ii(i,m=md5_ii(m,f,r,i,d[n+4],6,-145523070),f,r,d[n+11],10,-1120210379),m,f,d[n+2],15,718787259),i,m,d[n+9],21,-343485551),m=safe_add(m,h),f=safe_add(f,t),r=safe_add(r,g),i=safe_add(i,e)}return Array(m,f,r,i)}function md5_cmn(d,_,m,f,r,i){return safe_add(bit_rol(safe_add(safe_add(_,d),safe_add(f,i)),r),m)}function md5_ff(d,_,m,f,r,i,n){return md5_cmn(_&m|~_&f,d,_,r,i,n)}function md5_gg(d,_,m,f,r,i,n){return md5_cmn(_&f|m&~f,d,_,r,i,n)}function md5_hh(d,_,m,f,r,i,n){return md5_cmn(_^m^f,d,_,r,i,n)}function md5_ii(d,_,m,f,r,i,n){return md5_cmn(m^(_|~f),d,_,r,i,n)}function safe_add(d,_){var m=(65535&d)+(65535&_);return(d>>16)+(_>>16)+(m>>16)<<16|65535&m}function bit_rol(d,_){return d<<_|d>>>32-_}

								var encode = MD5(success);
								encode = encode.substring(0,15);
								encode2 = encode;
								encode = encode.split('');
								encode = "<span class='draggable2'>"+encode.join("</span><span class='draggable2'>")+"</span>";
								var villageTexte = "005aff ua 000800 erbmo'l ed éterup al suos ésopatxuj ertê tneviod te sertuen tnos sétinu sel euqsiup noitnetta eriaf ecnalab al ceva evitisop noitrop al te euqirémun ua evitagén noitrop al relpuoc tnemelpmis eriaf ec ruop emètsys ud rueoc ua redécca'd nifa stiordne snob xua éirt ertê tiod élêmertne euqirémunahpla euqalp al reilucitrap eirt nu etissecén uaennap ec";
								$(".step1").html("<div class='descVillage'>"+villageTexte+"</div><div class='innerSuccess'>"+encode+"</div><div class='village'><div class='person scientist'></div><div class='person artist'></div><div class='enfant'></div></div>");
								var encode3 = MD5(success+success);
								$("body").append("<div class='successCode'>Code de succès étape <span class='successText'>1</span>:<div class='code'>"+encode3.substring(0,15)+"</div></div>");
								$( ".draggable2, .person, .enfant" ).draggable();
								$(".step1").addClass("success");
								$(".step1").fadeIn( "slow", function() {
									$( ".draggable2, .person, .enfant" ).droppable({
										drop: function( event, ui ) {
											var sortSuccess = false;
											var sortCount = 0;
											
											ui.draggable.removeClass("c1");
											ui.draggable.removeClass("c2");
											ui.draggable.removeClass("c3");
											
											if($(this).hasClass("enfant")){
												ui.draggable.addClass("c1");
											}
											
											if($(this).hasClass("scientist")){
												ui.draggable.addClass("c2");
											}
											
											if($(this).hasClass("artist")){
												ui.draggable.addClass("c3");
											}
											
											$(".draggable2").each(function( index ) {
												if(($(this).hasClass("c1") && $(this).text() == "1") || ($(this).hasClass("c2") && (parseInt($(this).text()) || $(this).text() == "0") && $(this).text() != "1") || ($(this).hasClass("c3") && !parseInt($(this).text()) && $(this).text() != "0")){
													sortCount++;
												}
											});
											
											if(sortCount >= 15){
												sortSuccess = true;
											}
											
											
											if(sortSuccess){
												var code2 = MD5(encode2);
												$(".code").html(code2.substring(0,15));
												$(".successText").html("2");
												var texteCadran = '<div class="slider-container"><div class="slider-subcontainer"><div class="cadranNumberContainer"><div class="cadranNumber cadranNumber1">1</div><div class="cadranNumber cadranNumber2">2</div><div class="cadranNumber cadranNumber3">3</div><div class="cadranNumber cadranNumber4">4</div><div class="cadranNumber cadranNumber5">5</div><div class="cadranNumber cadranNumber6">6</div><div class="cadranNumber cadranNumber7">7</div><div class="cadranNumber cadranNumber8">8</div></div><div id="slider" class="slider"><div class="arrow left arrowRed"></div></div></div><div class="slider-subcontainer"><div class="cadranNumberContainer"><div class="cadranNumber cadranNumber1">1</div><div class="cadranNumber cadranNumber2">2</div><div class="cadranNumber cadranNumber3">3</div><div class="cadranNumber cadranNumber4">4</div><div class="cadranNumber cadranNumber5">5</div><div class="cadranNumber cadranNumber6">6</div><div class="cadranNumber cadranNumber7">7</div><div class="cadranNumber cadranNumber8">8</div></div><div id="slider" class="slider"><div class="arrow left arrowYellow"></div></div></div><div class="slider-subcontainer"><div class="cadranNumberContainer"><div class="cadranNumber cadranNumber1">1</div><div class="cadranNumber cadranNumber2">2</div><div class="cadranNumber cadranNumber3">3</div><div class="cadranNumber cadranNumber4">4</div><div class="cadranNumber cadranNumber5">5</div><div class="cadranNumber cadranNumber6">6</div><div class="cadranNumber cadranNumber7">7</div><div class="cadranNumber cadranNumber8">8</div></div><div id="slider" class="slider"><div class="arrow left arrowBlue"></div></div></div></div>';
												$(".solution").html("<div style=”white-space:nowrap;”>.--. --- ..- .-. <wbr>/</wbr> ..-. .. -. .- .-.. .. ... . .-. <wbr>/</wbr> .-.. .- <wbr>/</wbr> -.. . ... .- -.-. - .. ...- .- - .. --- -. <wbr>/</wbr> -.. ..- <wbr>/</wbr> ... -.-- ... - . -- . <wbr>/</wbr> ...- --- ..- ... <wbr>/</wbr> -.. . ...- .-. . --.. <wbr>/</wbr> .- .--- ..- ... - . .-. <wbr>/</wbr> .-.. . ... <wbr>/</wbr> -.-. .- -.. .-. .- -. ... <wbr>/</wbr> ... ..- .. ...- .- -. - <wbr>/</wbr> .-.. .- <wbr>/</wbr> - .-. .- -.. .. - .. --- -. <wbr>/</wbr> -.. . <wbr>/</wbr> .-.. .- <wbr>/</wbr> .-. ..- . <wbr>/</wbr> -.. . ... <wbr>/</wbr> -... --- ..- .-.. .- -. --. . .-. .. ... <wbr>/</wbr> .-.. --- -. -.. --- -. .. . -. -. . ... <wbr>/</wbr> .-.. <wbr>/</wbr> --- .-. -.. --- -. -. .- -. -.-. . -- . -. - <wbr>/</wbr> -.. --- .. - <wbr>/</wbr> - --- ..- - . ..-. --- .. ... <wbr>/</wbr> .-. . ... .--. . -.-. - . .-. <wbr>/</wbr> .-.. . <wbr>/</wbr> -.-. -- .--- <wbr>/</wbr> . - <wbr>/</wbr> -. --- -. <wbr>/</wbr> .-.. <wbr>/</wbr> . -. .-.. .. --. -. . -- . -. - <wbr>/</wbr> - .-. .- -.. .. - .. --- -. -. . .-.. <wbr>/</wbr> -.. . <wbr>/</wbr> -... .- -... --- .-. -.. <wbr>/</wbr> .- <wbr>/</wbr> - .-. .. -... --- .-. -.. </div></div>");
												$(".solution").show();
												$(".step1").html(texteCadran);
												$( ".slider" ).slider({
													min: 0,
													max:360,
													slide: function( event, ui ) {
														$(this).rotate(ui.value);
													},
													stop: function( event, ui ) {
														var redVal = $(".arrowRed").parent().slider( "value" );
														var blueVal = $(".arrowBlue").parent().slider( "value" );
														var yellowVal = $(".arrowYellow").parent().slider( "value" );
														
														if(redVal >= "90" && redVal <= "134" && blueVal >= "90" && blueVal <= "134" && yellowVal >= "45" && yellowVal <= "89"){
															var codeF = MD5(MD5(encode2));
															$(".slider-container").remove();
															$(".solution").html("Fécilication, vous avez réussie le dernière étape. Vous pouvez retourner dans la réunion principale du jeu. N'oubliez pas de transmettre le dernier code de succès.");
															$(".step1").append($(".solution").detach());
															$(".successText").html("3");
															$(".code").html(codeF.substring(0,15));
														}
													}
												});
												
												$(".arrowRed").parent().slider( "value","300");
												$(".arrowBlue").parent().slider( "value","15");
												$(".arrowYellow").parent().slider( "value","203");
												$(".arrowRed").parent().css({'transform' : 'rotate('+ 300 +'deg)'});
												$(".arrowBlue").parent().css({'transform' : 'rotate('+ 15 +'deg)'});
												$(".arrowYellow").parent().css({'transform' : 'rotate('+ 203 +'deg)'});
											}

										}
									});
								});
							});
						}else{
							numerOfStep++;
							count++;
						}
					}else{
						isFail = true;
						count++;
					}
					
				});
				
			}
		});
	} );
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

jQuery.fn.rotate = function(degrees) {
	$(this).css({'transform' : 'rotate('+ degrees +'deg)'});
	return $(this);
};