/**
 * demo1.js
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * Copyright 2017, Codrops
 * http://www.codrops.com
 */
{
	// Helper vars and functions.
	const extend = function(a, b) {
		for( let key in b ) { 
			if( b.hasOwnProperty( key ) ) {
				a[key] = b[key];
			}
		}
		return a;
	};

	// from http://www.quirksmode.org/js/events_properties.html#position
	const getMousePos = function(ev) {
		let posx = 0;
		let posy = 0;
		if (!ev) ev = window.event;
		if (ev.pageX || ev.pageY) 	{
			posx = ev.pageX;
			posy = ev.pageY;
		}
		else if (ev.clientX || ev.clientY) 	{
			posx = ev.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
			posy = ev.clientY + document.body.scrollTop + document.documentElement.scrollTop;
		}
		return { x : posx, y : posy };
	};

	const TiltObj = function(el, options) {
		this.el = el;
		this.options = extend({}, this.options);
		extend(this.options, options);
		this.DOM = {};
		this.DOM.img = this.el.querySelector('.content__img');
		this.DOM.title = this.el.querySelector('.content__title');
		this._initEvents();
	};

	TiltObj.prototype.options = {
		movement: {
			img : { translation : {x: -10, y: -10} },
			title : { translation : {x: 25, y: 25} },
		}
	};

	TiltObj.prototype._initEvents = function() {
		this.mouseenterFn = (ev) => {
			anime.remove(this.DOM.img);
			anime.remove(this.DOM.title);
		};
		
		this.mousemoveFn = (ev) => {
			requestAnimationFrame(() => this._layout(ev));
		};
		
		this.mouseleaveFn = (ev) => {
			requestAnimationFrame(() => {
				anime({
					targets: [this.DOM.img, this.DOM.title],
					duration: 1500,
					easing: 'easeOutElastic',
					elasticity: 400,
					translateX: 0,
					translateY: 0
				});
			});
		};

		this.el.addEventListener('mousemove', this.mousemoveFn);
		this.el.addEventListener('mouseleave', this.mouseleaveFn);
		this.el.addEventListener('mouseenter', this.mouseenterFn);
	};

	TiltObj.prototype._layout = function(ev) {
		// Mouse position relative to the document.
		const mousepos = getMousePos(ev);
		// Document scrolls.
		const docScrolls = {left : document.body.scrollLeft + document.documentElement.scrollLeft, top : document.body.scrollTop + document.documentElement.scrollTop};
		const bounds = this.el.getBoundingClientRect();
		// Mouse position relative to the main element (this.DOM.el).
		const relmousepos = { x : mousepos.x - bounds.left - docScrolls.left, y : mousepos.y - bounds.top - docScrolls.top };

		// Movement settings for the animatable elements.
		const t = {
			img: this.options.movement.img.translation,
			title: this.options.movement.title.translation,
		};
			
		const transforms = {
			img : {
				x: (-1*t.img.x - t.img.x)/bounds.width*relmousepos.x + t.img.x,
				y: (-1*t.img.y - t.img.y)/bounds.height*relmousepos.y + t.img.y
			},
			title : {
				x: (-1*t.title.x - t.title.x)/bounds.width*relmousepos.x + t.title.x,
				y: (-1*t.title.y - t.title.y)/bounds.height*relmousepos.y + t.title.y
			}
		};
		this.DOM.img.style.WebkitTransform = this.DOM.img.style.transform = 'translateX(' + transforms.img.x + 'px) translateY(' + transforms.img.y + 'px)';
		this.DOM.title.style.WebkitTransform = this.DOM.title.style.transform = 'translateX(' + transforms.title.x + 'px) translateY(' + transforms.title.y + 'px)';
	};

	const DOM = {};
	DOM.svg = document.querySelector('.morph');
	DOM.shapeEl = DOM.svg.querySelector('path');
	DOM.contentElems = Array.from(document.querySelectorAll('#a-1, #a-2, #a-3, #a-4, #a-5'));
	DOM.contentLinks = Array.from(document.querySelectorAll('.content__link'));
	DOM.footer = document.querySelector('#a-6');
	const contentElemsTotal = DOM.contentElems.length;
	const shapes = [
		{
			path: 'M278.86553,581.90322C303.09155,587.3469 429.5197,631.73603 494.80783,572.66779C560.09596,513.59955 616.36115,552.32718 648.36312,550.95662C680.36509,549.58606 718.97922,549.51611 754.54366,520.68578C790.10811,491.85545 809.34912,445.38578 811.50545,354.30122C813.66178,263.21667 788.04822,205.93055 750.25088,127.79689C712.45355,49.66323 637.90378,64.79689 598.49611,84.35245C559.08844,103.90801 511.59657,190.50188 431.98856,219.68578C352.38055,248.86968 129.29745,243.94176 81.43456,373.61045C33.57167,503.27914 254.63951,576.45954 278.86553,581.90322z',
			pathAlt: 'M278.86553,581.90322C303.09155,587.3469 429.5197,631.73603 494.80783,572.66779C560.09596,513.59955 616.36115,552.32718 648.36312,550.95662C680.36509,549.58606 718.97922,549.51611 754.54366,520.68578C790.10811,491.85545 809.34912,445.38578 811.50545,354.30122C813.66178,263.21667 788.04822,205.93055 750.25088,127.79689C712.45355,49.66323 637.90378,64.79689 598.49611,84.35245C559.08844,103.90801 511.59657,190.50188 431.98856,219.68578C352.38055,248.86968 129.29745,243.94176 81.43456,373.61045C33.57167,503.27914 254.63951,576.45954 278.86553,581.90322z',
			scaleX: 1.6,
			scaleY: 1.6,
			rotate: 0,
			tx: 200,
			ty: -330,
			fill: {
				color: '#B7D8A1',
				duration: 500,
				easing: 'linear'
			},
			animation: {
				path: {
					duration: 3000,
					easing: 'easeOutElastic',
					elasticity: 600
				},
				svg: {
					duration: 2000,
					easing: 'easeOutElastic'
				}
			}
		},
		{
			path: 'M278.86553,581.90322C303.09155,587.3469 429.5197,631.73603 494.80783,572.66779C560.09596,513.59955 616.36115,552.32718 648.36312,550.95662C680.36509,549.58606 718.97922,549.51611 754.54366,520.68578C790.10811,491.85545 809.34912,445.38578 811.50545,354.30122C813.66178,263.21667 788.04822,205.93055 750.25088,127.79689C712.45355,49.66323 637.90378,64.79689 598.49611,84.35245C559.08844,103.90801 511.59657,190.50188 431.98856,219.68578C352.38055,248.86968 129.29745,243.94176 81.43456,373.61045C33.57167,503.27914 254.63951,576.45954 278.86553,581.90322z',
			pathAlt: 'M269.97664,597.90322C294.20266,603.3469 422.40859,629.95825 493.03005,583.33446C563.65152,536.71066 618.13893,564.77162 650.1409,563.40106C682.14287,562.0305 734.97922,561.96055 770.54366,533.13022C806.10811,504.29989 768.46023,445.38578 770.61656,354.30122C772.77289,263.21667 814.71489,207.70833 776.91755,129.57467C739.12022,51.44101 637.90378,64.79689 598.49611,84.35245C559.08844,103.90801 522.26324,213.61299 442.65523,242.79689C363.04722,271.98079 129.29745,243.94176 81.43456,373.61045C33.57167,503.27914 245.75062,592.45954 269.97664,597.90322z',
			scaleX: 0.7,
			scaleY: 0.7,
			rotate: 0,
			tx: -50,
			ty: 200,
			fill: {
				color: '#B7D8A1',
				duration: 500,
				easing: 'linear'
			},
			animation: {
				path: {
					duration: 2000,
					easing: 'easeOutElastic',
					elasticity: 600
				},
				svg: {
					duration: 2000,
					easing: 'easeOutElastic'
				}
			}
		},
		{
			// N
			path: 'M193.471 717.908C268.922 690.755 164.605 565.061 310 526.061C414.592 498.006 445.534 667.996 504.877 703.908C531.281 719.888 567.244 715.736 603.877 678.908C674.997 607.411 710.238 555.608 739.061 436.079C765.145 327.908 749.009 95.3701 681.362 102.908C568.898 115.441 698.753 327.908 579.385 327.908C518.644 327.908 480.041 117.613 384.433 105.908C355.292 102.341 232.853 62.4973 173.879 333.166C114.904 603.834 118.021 745.062 193.471 717.908Z',
			pathAlt: 'M193.471,717.908C268.922,690.755 201.93833,559.72767 347.33333,520.72767C451.92533,492.67267 445.534,667.996 504.877,703.908C531.281,719.888 574.35511,722.84711 610.98811,686.01911C682.10811,614.52211 724.46022,557.38578 753.28322,437.85678C779.36722,329.68578 725.89789,111.3701 658.25089,118.908C545.78689,131.441 657.86411,335.01911 538.49611,335.01911C477.75511,335.01911 460.48544,130.05744 364.87744,118.35244C335.73644,114.78544 232.853,62.4973 173.879,333.166C114.904,603.834 118.021,745.062 193.471,717.908z',
			scaleX: 1.0,
			scaleY: 1.0,
			rotate: 0,
			tx: 480,
			ty: 100,
			fill: {
				color: '#B7D8A1',
				duration: 500,
				easing: 'linear'
			},
			animation: {
				path: {
					duration: 3000,
					easing: 'easeOutElastic',
					elasticity: 600
				},
				svg: {
					duration: 2500,
					easing: 'easeOutElastic'
				}
			}
		},
		{
			// F
			path: 'M437.5 486C462.105 460.664 552.589 538.805 587.586 475.121C600.664 451.322 608.516 383.786 552.829 369.77C452.433 344.5 478.792 306.409 491 280C533.052 189.035 751.335 316.307 715.508 111C705.375 52.9339 581.528 71 529.764 88C478 105 395.234 148.301 372 179C327.116 238.306 144.265 502.041 164.577 644.478C173.445 706.661 225.097 765.265 301.007 745.17C417.867 714.236 342.479 583.848 437.5 486Z',
			pathAlt: 'M420.16667,464.66667C508.77167,429.99734 552.589,538.805 587.586,475.121C600.664,451.322 608.516,383.786 552.829,369.77C452.433,344.5 497.45867,313.07567 509.66667,286.66667C551.71867,195.70167 736.66833,340.307 700.84133,135C690.70833,76.9339 581.528,71 529.764,88C478,105 409.90067,174.96767 386.66667,205.66667C341.78267,264.97267 169.04234,540.96167 172.577,613.81134C176.11166,686.66101 176.147,738.77067 279.67366,702.50333C383.20033,666.236 331.56167,499.336 420.16667,464.66667z',
			scaleX: 1.0,
			scaleY: 1.0,
			rotate: 0,
			tx: 450,
			ty: 30,
			fill: {
				color: '#B7D8A1',
				duration: 500,
				easing: 'linear'
			},
			animation: {
				path: {
					duration: 3000,
					easing: 'easeOutElastic',
					elasticity: 600
				},
				svg: {
					duration: 2500,
					easing: 'easeOutElastic'
				}
			}
		},
		{
			// C
			path: 'M622.38889,487.77779C542.10499,458.88621 511.70012,579.69387 418.69712,592.45432C325.69412,605.21477 254.73821,565.11933 222.16233,483.54778C189.58645,401.97623 204.56976,344.74235 261.22221,284.55557C317.87466,224.36879 371.88361,227.60559 374.29272,211.05554C376.70183,194.50549 382.22246,181.01392 357.31956,152.00001C332.41666,122.9861 256.56733,150.07877 169.33334,235.88888C82.09935,321.69899 34.04278,496.70767 175.24367,637.36689C316.44456,778.02611 438.36921,740.54846 525.00699,693.61445C611.64478,646.68044 702.67278,516.66934 622.38889,487.77778z',
			pathAlt: 'M585.38889,490.77779C505.10499,461.88621 512.70012,591.69387 419.69712,604.45432C326.69412,617.21477 245.73821,574.11933 213.16233,492.54778C180.58645,410.97623 204.56976,344.74235 261.22221,284.55557C317.87466,224.36879 350.88361,258.60559 371.29272,247.05554C391.70183,235.50549 411.22246,205.01392 386.31956,176.00001C361.41666,146.9861 256.56733,150.07877 169.33334,235.88888C82.09935,321.69899 40.04278,499.70767 181.24367,640.36689C322.44456,781.02611 442.36921,747.54846 529.00699,700.61445C615.64478,653.68044 665.67278,519.66934 585.38889,490.77778z',
			scaleX: 1.2,
			scaleY: 1.2,
			rotate: 20,
			tx: 300,
			ty: 100,
			fill: {
				color: '#B7D8A1',
				duration: 500,
				easing: 'linear'
			},
			animation: {
				path: {
					duration: 3000,
					easing: 'easeOutElastic',
					elasticity: 600
				},
				svg: {
					duration: 2500,
					easing: 'easeOutElastic'
				}
			}
		},
		{
			path: 'M278.86553,581.90322C303.09155,587.3469 429.5197,631.73603 494.80783,572.66779C560.09596,513.59955 616.36115,552.32718 648.36312,550.95662C680.36509,549.58606 718.97922,549.51611 754.54366,520.68578C790.10811,491.85545 809.34912,445.38578 811.50545,354.30122C813.66178,263.21667 788.04822,205.93055 750.25088,127.79689C712.45355,49.66323 637.90378,64.79689 598.49611,84.35245C559.08844,103.90801 511.59657,190.50188 431.98856,219.68578C352.38055,248.86968 129.29745,243.94176 81.43456,373.61045C33.57167,503.27914 254.63951,576.45954 278.86553,581.90322z',
			pathAlt: 'M269.97664,597.90322C294.20266,603.3469 422.40859,629.95825 493.03005,583.33446C563.65152,536.71066 618.13893,564.77162 650.1409,563.40106C682.14287,562.0305 734.97922,561.96055 770.54366,533.13022C806.10811,504.29989 768.46023,445.38578 770.61656,354.30122C772.77289,263.21667 814.71489,207.70833 776.91755,129.57467C739.12022,51.44101 637.90378,64.79689 598.49611,84.35245C559.08844,103.90801 522.26324,213.61299 442.65523,242.79689C363.04722,271.98079 129.29745,243.94176 81.43456,373.61045C33.57167,503.27914 245.75062,592.45954 269.97664,597.90322z',
			scaleX: 1.4,
			scaleY: 1.9,
			rotate: 0,
			tx: 320,
			ty: 100,
			fill: {
				color: '#e0ecd7',
				duration: 500,
				easing: 'linear'
			},
			animation: {
				path: {
					duration: 3000,
					easing: 'easeOutElastic',
					elasticity: 600
				},
				svg: {
					duration: 2000,
					easing: 'easeOutElastic'
				}
			}
		}
	];
	let step;
	
	if ( document.documentElement.clientWidth < 980 ) {
		shapes[2].scaleX = 0.6;
		shapes[2].scaleY = 0.6;
		shapes[2].tx = 250;
		
		shapes[3].scaleX = 0.5;
		shapes[3].scaleY = 0.5;
		shapes[3].tx = 250;
		
		shapes[4].scaleX = 0.5;
		shapes[4].scaleY = 0.5;
		shapes[4].tx = 350;
		
	}
	
	window.addEventListener( "resize", function( event ) {
		if ( document.documentElement.clientWidth < 980 ) {
			shapes[2].scaleX = 0.6;
			shapes[2].scaleY = 0.6;
			shapes[2].tx = 250;
			
			shapes[3].scaleX = 0.5;
			shapes[3].scaleY = 0.5;
			shapes[3].tx = 250;
			
			shapes[4].scaleX = 0.5;
			shapes[4].scaleY = 0.5;
			shapes[4].tx = 350;
			
		}
		else {
			
			shapes[2].scaleX = 1.1;
			shapes[2].scaleY = 1.1;
			shapes[2].tx = 480;
			
			shapes[3].scaleX = 1.0;
			shapes[3].scaleY = 1.0;
			shapes[3].tx = 450;
			
			shapes[4].scaleX = 1.2;
			shapes[4].scaleY = 1.2;
			shapes[4].tx = 300;
		}
	} );

	const initShapeLoop = function(pos) {
		pos = pos || 0;
		anime.remove(DOM.shapeEl);
		anime({
			targets: DOM.shapeEl,
			easing: 'linear',
			d: [{value: shapes[pos].pathAlt, duration:3500}, {value: shapes[pos].path, duration:3500}],
			loop: true,
			fill: {
				value: shapes[pos].fill.color,
				duration: shapes[pos].fill.duration,
				easing: shapes[pos].fill.easing
			},
			direction: 'alternate'
		});
	};

	const initShapeEl = function() {
		anime.remove(DOM.svg);
		anime({
			targets: DOM.svg,
			duration: 1,
			easing: 'linear',
			scaleX: shapes[0].scaleX,
			scaleY: shapes[0].scaleY,
			translateX: shapes[0].tx+'px',
			translateY: shapes[0].ty+'px',
			rotate: shapes[0].rotate+'deg'
		});

		initShapeLoop();
	};

	const createScrollWatchers = function() {
		DOM.contentElems.forEach((el,pos) => {
			const scrollElemToWatch = pos ? DOM.contentElems[pos] : DOM.footer;
			pos = pos ? pos : contentElemsTotal;
			const watcher = scrollMonitor.create(scrollElemToWatch,-300);
			
			watcher.enterViewport(function() {
				step = pos;
				anime.remove(DOM.shapeEl);
				anime({
					targets: DOM.shapeEl,
					duration: shapes[pos].animation.path.duration,
					easing: shapes[pos].animation.path.easing,
					elasticity: shapes[pos].animation.path.elasticity || 0,
					d: shapes[pos].path,
					fill: {
						value: shapes[pos].fill.color,
						duration: shapes[pos].fill.duration,
						easing: shapes[pos].fill.easing
					},
					complete: function() {
						initShapeLoop(pos);
					}
				});

				anime.remove(DOM.svg);
				anime({
					targets: DOM.svg,
					duration: shapes[pos].animation.svg.duration,
					easing: shapes[pos].animation.svg.easing,
					elasticity: shapes[pos].animation.svg.elasticity || 0,
					scaleX: shapes[pos].scaleX,
					scaleY: shapes[pos].scaleY,
					translateX: shapes[pos].tx+'px',
					translateY: shapes[pos].ty+'px',
					rotate: shapes[pos].rotate+'deg'
				});
			});

			watcher.exitViewport(function() {
				const idx = !watcher.isAboveViewport ? pos-1 : pos+1;

				if( idx <= contentElemsTotal && step !== idx ) {
					step = idx;
					anime.remove(DOM.shapeEl);
					anime({
						targets: DOM.shapeEl,
						duration: shapes[idx].animation.path.duration,
						easing: shapes[idx].animation.path.easing,
						elasticity: shapes[idx].animation.path.elasticity || 0,
						d: shapes[idx].path,
						fill: {
							value: shapes[idx].fill.color,
							duration: shapes[idx].fill.duration,
							easing: shapes[idx].fill.easing
						},
						complete: function() {
							initShapeLoop(idx);
						}
					});

					anime.remove(DOM.svg);
					anime({
						targets: DOM.svg,
						duration: shapes[idx].animation.svg.duration,
						easing: shapes[idx].animation.svg.easing,
						elasticity: shapes[idx].animation.svg.elasticity || 0,
						scaleX: shapes[idx].scaleX,
						scaleY: shapes[idx].scaleY,
						translateX: shapes[idx].tx+'px',
						translateY: shapes[idx].ty+'px',
						rotate: shapes[idx].rotate+'deg'
					});
				}
			});
		});
	};

	const init = function() {
		imagesLoaded(document.body, () => {
			initShapeEl();
			createScrollWatchers();
			Array.from(document.querySelectorAll('.home-why-we-block')).forEach(el => new TiltObj(el));
			// Remove loading class from body
			document.body.classList.remove('loading');
		});
	}

	init();
};