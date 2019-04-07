document.addEventListener( "DOMContentLoaded", ready );

var scrollEl,
	scrollIdParam;
var shareP = 0;

function ready( event ) {
	var headerEl = document.querySelector( "header" ),
		headerBobMenuBt = document.querySelector( "#header-bob-menu-bt" );
		
	if ( headerEl && headerBobMenuBt ) {
		headerBobMenuBt.addEventListener( "click", function( event ) {
			if ( headerEl.classList.contains( "active" ) ) {
				headerEl.classList.remove( "active" );
				document.body.style = "";
			}
			else {
				headerEl.classList.add( "active" );
				document.body.style.overflow = "hidden";
			}
		} );
		var menuLinks = document.querySelectorAll( ".header-navigation a" );
		if ( menuLinks[ 0 ] ) {
			for ( var i = 0; i < menuLinks.length; i++ ) {
				menuLinks[ i ].addEventListener( "click", function( event ) {
					headerEl.classList.remove( "active" );
					document.body.style = "";
				} );
			}
		}
	}
	
	var animBlock = document.querySelector( "#anim-block" );
	if ( animBlock ) {
		var lastAnimBlock = animBlock.lastElementChild;
		if ( lastAnimBlock ) {
			bgAnimFinal( lastAnimBlock );
			window.addEventListener( "scroll", function( event ) {
				bgAnimFinal( lastAnimBlock );
			} );
		}
	}
	
	scrollEl = document.querySelectorAll( ".nav-link" );
	if ( scrollEl ) 
		for ( var i = 0; i < scrollEl.length; i++ )
			scrollEl[ i ].addEventListener( "click", scrollingFunc );
	
	/* PopUp */
	
	var popLinkEl = document.querySelectorAll( '.pop-link' );
	
	if ( popLinkEl[ 0 ] && popData ) {
		var popUpBg = document.querySelector( "#popUpBg" ),
			popUp = document.querySelector( "#popUp" );
			
		if ( popUpBg && popUp ) {
			for ( var i = 0; i < popLinkEl.length; i++ ) {
				popLinkEl[ i ].addEventListener( "click", function( event ) {
					event.preventDefault();
					
					if ( this.dataset.id > 7 )
						popUp.classList.add( "pop-2" );
					else
						popUp.classList.remove( "pop-2" );
					
					popUp.innerHTML = popData[ this.dataset.id ];// + "<button id='popUpCloseBtBottom' class='def-bt hover-trans-05'>CLOSE</button>";
					
					popUpBg.className = "open";
					setTimeout( function() {
						popUpBg.className = "active";
					}, 10 );
				} );
				
				/*popLinkEl[ i ].addEventListener( "mouseover", function( event ) {
					if ( this.parentNode.className == 'image-block' )
						return;
					if ( document.documentElement.clientWidth <= 900 )
						return;
					event.preventDefault();
					
					popUp.innerHTML = popData[ this.dataset.id ] + "<button id='popUpCloseBtBottom' class='def-bt hover-trans-05'>CLOSE</button>";
					
					popUpBg.className = "open";
					setTimeout( function() {
						popUpBg.className = "active";
					}, 10 );
				} );*/
			}
			
			popUpBg.addEventListener( "click", function( event ) {
				//event.preventDefault();
				var elId = event.target.id;
				if ( elId != "popUpBg" && elId != "popUpCloseBtBottom" && elId != "popUpCloseBtTop" )
					return;
				
				popUpBg.className = "close";
				setTimeout( function() {
					popUpBg.className = "";
				}, 503 );
			} );
		}
	}
	
	var paralaxImg = document.querySelector( ".image-bg-block img, .top-image-block-2 img" );
	
	if ( paralaxImg && ! paralaxImg.classList.contains( "not-parallax" ) ) {
		document.addEventListener( "mousemove", function( event ) {
			var x = event.clientX,
				y = event.clientY,
				screenH = document.documentElement.clientHeight,
				screenW = document.documentElement.clientWidth;
			
			/*if ( y > screenH / 2 ) {
				var Y = ( ( screenH / 2 ) - ( screenH - y ) );
				Y = Y / 40;
				paralaxImg.style.marginTop = "-" + Y + "px";
				paralaxImg.style.marginBottom = "auto";
			}
			else {
				var Y = ( ( screenH / 2 ) - y );
				Y = Y / 40;
				paralaxImg.style.marginTop = "auto";
				paralaxImg.style.marginBottom = "-" + Y + "px";
			}*/
			
			if ( x > screenH / 2 ) {
				var X = ( ( screenW / 2 ) - ( screenW - x ) );
				X = X / 40;
				paralaxImg.style.marginLeft = "-" + X + "px";
				paralaxImg.style.marginRight = "auto";
				paralaxImg.parentNode.style.backgroundPosition = "-" + X / 2 + "px bottom";
			}
			else {
				var X = ( ( screenW / 2 ) - x );
				X = X / 40;
				paralaxImg.style.marginLeft = X + "px";
				paralaxImg.style.marginRight = "auto";
				paralaxImg.parentNode.style.backgroundPosition = "-" + X / 2 + "px bottom";
			}
			//console.log( "x: ", x, " y: ", y );
		} );
	}
	
	var headerLogo = document.querySelector( ".header-logo" );
	if ( headerLogo ) {
		headerLogo.addEventListener( "click", function( event ) {
			 document.location.href="/";
		} );
	}
	
	var teamImageMod = document.querySelector( "#board-style" );
	if ( teamImageMod ) {
		var nowPageScroll = window.pageYOffset;
		if ( nowPageScroll <= 300 ) {
			teamImageMod.innerHTML = ".team-item:first-of-type .team-image-mod { opacity: 1!important; }"
		}
		else {
			teamImageMod.innerHTML = "";
		}
		
		var teamImageMmodLast = document.querySelector( "footer" ),
			teamImageMmodLast2 = document.querySelector( "#block-9 > div" );
		if ( teamImageMmodLast && teamImageMmodLast2 && nowPageScroll > getCoords( teamImageMmodLast ).top - document.documentElement.clientHeight ) {
			teamImageMmodLast2.style.position = "absolute";
		}
		else {
			teamImageMmodLast2.style.position = "fixed";
		}
		window.addEventListener( "scroll", function( event ) {
			var nowPageScroll = window.pageYOffset;
			if ( nowPageScroll <= 300 ) {
				teamImageMod.innerHTML = ".team-item:first-of-type .team-image-mod { opacity: 1!important; }"
			}
			else {
				teamImageMod.innerHTML = "";
			}
			
			var teamImageMmodLast = document.querySelector( "footer" ),
				teamImageMmodLast2 = document.querySelector( "#block-9 > div" );
			if ( teamImageMmodLast && teamImageMmodLast2 && nowPageScroll > getCoords( teamImageMmodLast ).top - document.documentElement.clientHeight ) {
				teamImageMmodLast2.style.position = "absolute";
			}
			else {
				teamImageMmodLast2.style.position = "fixed";
			}
		} );
	}
	share();
	setInterval( share, 1000 )
}



function share() {
	var shareLink = document.querySelector( ".share-link" ),
		shareBlock = document.querySelector( "#st-2" ),
		shareLinkParam = 0;
	if ( shareLink && shareBlock && shareP == 0 ) {
		shareLink.addEventListener( "click", function( event ) {
			if ( shareLinkParam == 0 ) {
				shareBlock.style.display = "block";
				shareLinkParam++;
			}
			else {
				shareBlock.style.display = "none";
				shareLinkParam = 0;
			}
		} );
		shareP = 1;
	}
	else {
		shareP = 0;
	}
}

function bgAnimFinal( el ) {
	if ( ! el )
		return;
	var nowPageScroll = window.pageYOffset,
		el2 = el.lastElementChild;
	if ( ! el2 )
		return;
	if ( nowPageScroll >= getCoords( el ).top - 400 ) {
		el2.style.opacity = "1";
	}
	else {
		el2.style.opacity = "0";
	}
}

function scrollingFunc( event, s_max, scrollLength, scrollId, IdParam ) {
	//if ( document.documentElement.clientWidth <= 970 )
		//return;
	if ( ! s_max && s_max != 0 ) {
		//console.log( 1 );
		scrollTimeParam = 1;
		
		IdParam = scrollIdParam;
		scrollIdParam++;
		setTimeout( function() {
			scrollTimeParam = 0;
		}, 1001 );
		var scrollIdOb = this.attributes[ "href" ]
		if ( scrollIdOb )
			scrollId = scrollIdOb.value;
		if ( ! scrollId ) {
			scrollId = this.dataset.href;
			if ( ! scrollId )
				return;
		}
			
		scrollParam = scrollId;
		var el = document.querySelector( scrollId );
		//console.log( "el", el );
		if ( ! el )
			return;
		if ( document.documentElement.clientWidth > 700 )
			s_max = getCoords( el ).top - 50 - 100;
		else
			s_max = getCoords( el ).top - 50 - 30;
		s_max = s_max.toFixed( 0 );
		if ( s_max < 0 )
			s_max = 0;
		//console.log( "s_max", s_max );
		if ( ! s_max && s_max != 0 )
			return;
	}
	
	if ( scrollParam != scrollId )
		return;
	
	var scrollNow = window.pageYOffset;
	if ( ! scrollNow && scrollNow != 0 )
		return;
	
	if ( ! scrollLength ) {
		var scrollAbs = Math.abs( scrollNow - s_max );
		scrollLength = scrollAbs / 100;
		//console.log( "scrollLength", scrollLength );
	}
	
	if ( scrollNow > s_max ) {
		scrollNow -= scrollLength;
		if ( scrollNow < s_max )
			scrollNow = s_max;
	}
	else if ( scrollNow < s_max ) {
		scrollNow += scrollLength;
		if ( scrollNow > s_max )
			scrollNow = s_max;
	}
	else
		return;
	
	scrollTo( 0, scrollNow );
	setTimeout( function() {
		if ( scrollTimeParam == 1 )
			scrollingFunc( event, s_max, scrollLength, scrollId, IdParam );
		else
			scrollTo( 0, s_max );
			//console.log( 2 );
	}, 2 );
	
	event.preventDefault();
}

function getCoords(elem) {
	var box = elem.getBoundingClientRect();
	
	return {
		top: box.top + pageYOffset,
		left: box.left + pageXOffset
	};
}