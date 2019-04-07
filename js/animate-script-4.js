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
			// C
			path: 'M1630.56,858.2c115.25-249.92,286.62-494.61,346.37-573.67C2027.82,217.2,2209.08,122.24,2322.45,85s384.6-76.9,406.79,50.45C2807.7,585.66,2329.65,306.54,2237.55,506,2210.81,564,2153.09,647.5,2373,702.92c22.51,5.67,40.27,15.34,54.11,27.67,28.44-74.91,71.79-148.4,132.74-217.83,50.89-58,215.6-173.48,327.18-206.36,305.48-90,229.32,200.13,96.77,211.73-199.65,17.47-379.3,557-109.86,690.7,398.65,197.78,518.91-386.16,758.77-173.39,109.81,97.4-47.38,421.2-319,552.4-261.86,126.47-660.89,1.21-788.68-181.36-82.15-117.35-137.08-265.16-141-419.83-91.46,22.74-221.48-72.21-263.55-28.82-208.1,214.59-43,500.55-298.93,568.39-166.25,44.07-279.37-84.45-298.79-220.83-5-35-4.38-73.33.75-114-63.09,134.14-144.33,232.59-262.62,351.37-98.11,98.51-194.39,109.65-265.06,67-158.83-96-241.5-550.48-521.53-475.35C84.92,1238.77,364.06,1574.76,162,1647.45S-48.18,1342.5,110,618.69,595.87,1.31,673.88,10.82C929.83,42,1033,604.29,1195.57,604.23c319.56-.12-27.86-568.11,273.23-601.73,174.08-19.44,220.53,554.27,161.76,855.7Z',
			pathAlt: 'M1630.56,858.2c115.25-249.92,286.62-494.61,346.37-573.67C2027.82,217.2,2209.08,122.24,2322.45,85s384.6-76.9,406.79,50.45C2807.7,585.66,2329.65,306.54,2237.55,506,2210.81,564,2153.09,647.5,2373,702.92c22.51,5.67,40.27,15.34,54.11,27.67,28.44-74.91,71.79-148.4,132.74-217.83,50.89-58,215.6-173.48,327.18-206.36,305.48-90,229.32,200.13,96.77,211.73-199.65,17.47-379.3,557-109.86,690.7,398.65,197.78,518.91-386.16,758.77-173.39,109.81,97.4-47.38,421.2-319,552.4-261.86,126.47-660.89,1.21-788.68-181.36-82.15-117.35-137.08-265.16-141-419.83-91.46,22.74-221.48-72.21-263.55-28.82-208.1,214.59-43,500.55-298.93,568.39-166.25,44.07-279.37-84.45-298.79-220.83-5-35-4.38-73.33.75-114-63.09,134.14-144.33,232.59-262.62,351.37-98.11,98.51-194.39,109.65-265.06,67-158.83-96-241.5-550.48-521.53-475.35C84.92,1238.77,364.06,1574.76,162,1647.45S-48.18,1342.5,110,618.69,595.87,1.31,673.88,10.82C929.83,42,1033,604.29,1195.57,604.23c319.56-.12-27.86-568.11,273.23-601.73,174.08-19.44,220.53,554.27,161.76,855.7Z',
			scaleX: 0.5,
			scaleY: 0.5,
			rotate: 10,
			tx: 300,
			ty: -20,
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
		shapes[0].scaleX = 1.0;
		shapes[0].scaleY = 1.0;
		shapes[0].tx = 180;
		
	}
	
	window.addEventListener( "resize", function( event ) {
		if ( document.documentElement.clientWidth < 980 ) {
			shapes[0].scaleX = 1.0;
			shapes[0].scaleY = 1.0;
			shapes[0].tx = 180;
			
		}
		else {
			shapes[0].scaleX = 1.0;
			shapes[0].scaleY = 1.0;
			shapes[0].tx = 300;
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