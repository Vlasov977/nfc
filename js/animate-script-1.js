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
			// N
			path: 'M193.471 717.908C268.922 690.755 164.605 565.061 310 526.061C414.592 498.006 445.534 667.996 504.877 703.908C531.281 719.888 567.244 715.736 603.877 678.908C674.997 607.411 710.238 555.608 739.061 436.079C765.145 327.908 749.009 95.3701 681.362 102.908C568.898 115.441 698.753 327.908 579.385 327.908C518.644 327.908 480.041 117.613 384.433 105.908C355.292 102.341 232.853 62.4973 173.879 333.166C114.904 603.834 118.021 745.062 193.471 717.908Z',
			pathAlt: 'M193.471,717.908C268.922,690.755 201.93833,559.72767 347.33333,520.72767C451.92533,492.67267 445.534,667.996 504.877,703.908C531.281,719.888 574.35511,722.84711 610.98811,686.01911C682.10811,614.52211 724.46022,557.38578 753.28322,437.85678C779.36722,329.68578 725.89789,111.3701 658.25089,118.908C545.78689,131.441 657.86411,335.01911 538.49611,335.01911C477.75511,335.01911 460.48544,130.05744 364.87744,118.35244C335.73644,114.78544 232.853,62.4973 173.879,333.166C114.904,603.834 118.021,745.062 193.471,717.908z',
			scaleX: 0.9,
			scaleY: 0.9,
			rotate: 0,
			tx: 200,
			ty: -30,
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
		}
	];
	let step;
	
	if ( document.documentElement.clientWidth < 980 ) {
		shapes[0].scaleX = 0.9;
		shapes[0].scaleY = 0.9;
		shapes[0].tx = 130;
		
	}
	
	window.addEventListener( "resize", function( event ) {
		if ( document.documentElement.clientWidth < 980 ) {
			shapes[0].scaleX = 0.9;
			shapes[0].scaleY = 0.9;
			shapes[0].tx = 130;
			
		}
		else {
			shapes[0].scaleX = 0.9;
			shapes[0].scaleY = 0.9;
			shapes[0].tx = 250;
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