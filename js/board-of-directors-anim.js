function reorderArray(e, a) {
    var o, t = [];
    switch (a) {
        case 0:
            t = e;
            break;
        case 1:
            for (o = 0; o < e.length; o++) t.unshift(e[o]);
            break;
        case 2:
            o = Math.ceil(e.length / 2);
            for (var r = o - 1; r >= 0;) t.push(e[r--]), o < e.length && t.push(e[o++])
    }
    return t
}
$ = jQuery, $(document).ready(function() {
	e();
    function e() {
        new ScrollMagic.Scene({
            triggerElement: ".team-scroll-module",
            triggerHook: 1
        }).setClassToggle(".team-scroll-module", "start-animate").addTo(c);
        var e = new TimelineMax;
        e.to($(".team-image-mod"), .01, {
            autoAlpha: 0,
            ease: Power0.easeNone
        }), $(".team-item").each(function() {
            var e = new TimelineMax;
            e.fromTo($(this).find(".team-image-mod"), 1, {
                autoAlpha: 0
            }, {
                autoAlpha: 1,
                ease: Power0.easeNone
            }), new ScrollMagic.Scene({
                triggerElement: this,
                triggerHook: .9,
                duration: "80%"
            }).setTween(e).addTo(c)
        }), $(".team-fade").each(function() {
            var e = new TimelineMax;
            e.fromTo($(this).find(".team-image-mod"), 1, {
                autoAlpha: 1
            }, {
                autoAlpha: 0,
                ease: Power0.easeNone
            }), new ScrollMagic.Scene({
                triggerElement: this,
                triggerHook: 0,
                duration: "80%"
            }).setTween(e).addTo(c)
        });
        var a = new TimelineMax;
        a.fromTo($(".team-item-last .team-content-mod .team-figure"), .01, {
            autoAlpha: 0
        }, {
            autoAlpha: 1,
            ease: Power0.easeNone
        }, "start"), new ScrollMagic.Scene({
            triggerElement: ".team-animation-finish",
            triggerHook: 1
        }).setTween(a).addTo(c), $(".parallax-animate-module").each(function() {
            var e = new TimelineMax;
            e.to($(this).find(".parallax-box"), 1, {
                y: "-50%",
                ease: Power1.linear
            }), new ScrollMagic.Scene({
                triggerElement: this,
                triggerHook: .7,
                duration: "100%"
            }).setTween(e).addTo(c);
            var a = new TimelineMax;
            a.fromTo($(this).find(".bg-scale"), .2, {
                rotation: -180,
                alpha: 0,
                scale: .5
            }, {
                rotation: 0,
                alpha: 1,
                scale: 1,
                ease: Power1.linear
            }), new ScrollMagic.Scene({
                triggerElement: this,
                triggerHook: 1,
                duration: "150%"
            }).setTween(a).addTo(c)
        });
        var o = new TimelineMax;
        o.to($(".deeper-module .grow"), .1, {
            height: "105%",
            ease: Power3.easeInOut
        }), new ScrollMagic.Scene({
            triggerElement: ".deeper-module .grow",
            triggerHook: .7,
            duration: "100%"
        }).setTween(o).addTo(c);
        var t = new TimelineMax;
        t.fromTo($(".borader-text"), .2, {
            scale: .8,
            y: "-50%",
            x: "-50%"
        }, {
            scale: 1.5,
            y: "-50%",
            x: "-50%",
            ease: Power1.easeInOut
        }), new ScrollMagic.Scene({
            triggerElement: ".broader-module",
            triggerHook: 1,
            duration: "200%"
        }).setTween(t).addTo(c)
    }

    function a() {
        $(".animate-count").each(function() {
            if ($(this).length > 0) {
                $(this).empty();
                var e = $(this).attr("data-count"),
                    a = e.split(".");
                if (a.length > 1) var o = a[1].length;
                else var o = 0;
                if (2 === o) var a = 2;
                else if (1 === o) var a = 1;
                else var a = 0;
                $(this).numerator({
                    easing: "linear",
                    duration: 500,
                    delimiter: ",",
                    rounding: a,
                    toValue: e
                })
            }
        })
    }

    function o() {
        $(".gallery-module").each(function() {
            var e = new TimelineMax;
            e.staggerFromTo($(this).find(".image-holder"), 1, {
                autoAlpha: 0
            }, {
                autoAlpha: 1
            }, .5), new ScrollMagic.Scene({
                triggerElement: this,
                triggerHook: .7
            }).setTween(e).addTo(c)
        })
    }

    function t() {
        $(".gallery-module .image-holder").each(function() {
            var e = new TimelineMax;
            e.staggerFromTo($(this), 1, {
                autoAlpha: 0
            }, {
                autoAlpha: 1
            }, .5), new ScrollMagic.Scene({
                triggerElement: this,
                triggerHook: .8
            }).setTween(e).addTo(c)
        })
    }

    function r() {
        $(".d-stagger1").each(function() {
            var e = new TimelineMax;
            e.fromTo($(this), .5, {
                autoAlpha: 0,
                y: 50
            }, {
                autoAlpha: 1,
                y: 0,
                ease: Power0.easeInOut
            }), new ScrollMagic.Scene({
                triggerElement: this,
                triggerHook: .9
            }).setTween(e).addTo(c)
        }), $(".d-stagger2").each(function() {
            var e = new TimelineMax;
            e.fromTo($(this), .5, {
                autoAlpha: 0,
                y: 50
            }, {
                autoAlpha: 1,
                y: 0,
                ease: Power0.easeInOut
            }, "+=0.3"), new ScrollMagic.Scene({
                triggerElement: this,
                triggerHook: .9
            }).setTween(e).addTo(c)
        }), $(".d-stagger3").each(function() {
            var e = new TimelineMax;
            e.fromTo($(this), .5, {
                autoAlpha: 0,
                y: 50
            }, {
                autoAlpha: 1,
                y: 0,
                ease: Power0.easeInOut
            }, "+=0.6"), new ScrollMagic.Scene({
                triggerElement: this,
                triggerHook: .9
            }).setTween(e).addTo(c)
        }), $(".d-stagger4").each(function() {
            var e = new TimelineMax;
            e.fromTo($(this), .5, {
                autoAlpha: 0,
                y: 50
            }, {
                autoAlpha: 1,
                y: 0,
                ease: Power0.easeInOut
            }, "+=0.9"), new ScrollMagic.Scene({
                triggerElement: this,
                triggerHook: .9
            }).setTween(e).addTo(c)
        })
    }

    function n() {
        $(".t-stagger1").each(function() {
            var e = new TimelineMax;
            e.fromTo($(this), .5, {
                autoAlpha: 0,
                y: 50
            }, {
                autoAlpha: 1,
                y: 0,
                ease: Power0.easeInOut
            }), new ScrollMagic.Scene({
                triggerElement: this,
                triggerHook: .9
            }).setTween(e).addTo(c)
        }), $(".t-stagger2").each(function() {
            var e = new TimelineMax;
            e.fromTo($(this), .5, {
                autoAlpha: 0,
                y: 50
            }, {
                autoAlpha: 1,
                y: 0,
                ease: Power0.easeInOut
            }, "+=0.3"), new ScrollMagic.Scene({
                triggerElement: this,
                triggerHook: .9
            }).setTween(e).addTo(c)
        }), $(".t-stagger3").each(function() {
            var e = new TimelineMax;
            e.fromTo($(this), .5, {
                autoAlpha: 0,
                y: 50
            }, {
                autoAlpha: 1,
                y: 0,
                ease: Power0.easeInOut
            }, "+=0.6"), new ScrollMagic.Scene({
                triggerElement: this,
                triggerHook: .9
            }).setTween(e).addTo(c)
        })
    }

    function i() {
        $(".animate-block").each(function() {
            var e = new TimelineMax;
            e.fromTo($(this), .6, {
                autoAlpha: 0,
                y: 50
            }, {
                autoAlpha: 1,
                y: 0,
                ease: Power0.easeInOut
            }), new ScrollMagic.Scene({
                triggerElement: this,
                triggerHook: .9
            }).setTween(e).addTo(c)
        })
    }
    new ClipboardJS(".copylink"), $(".svg-deeper").on("click", function() {
        window.open("pdfs/intro/DBS-AR17-12-13.pdf", "_blank")
    }), $(".borader-text").on("click", function() {
        window.open("pdfs/intro/DBS-AR17-14-15.pdf", "_blank")
    }), $(".smarter-svg").on("click", function() {
        window.open("pdfs/intro/DBS-AR17-16-17.pdf", "_blank")
    });
    var l, s = !1;
    $("body").on("click", ".nav-trigger", function(e) {
        if (s === !0) return $("body").scrollTop(l), $("body").removeClass("nav-open"), $(".burger").removeClass("on"), void(s = !1);
        l = window.pageYOffset;
        var a = -l + "px";
        $("body").css("top", a), $("body").addClass("nav-open"), $("body").removeClass("search-open"), $(".burger").addClass("on"), s = !0
    }), $("body").on("click", ".search-trigger", function(e) {
        $("body").toggleClass("search-open"), $(".search-form input").focus()
    });
    var c = new ScrollMagic.Controller;
    new ScrollMagic.Scene({
        triggerElement: ".splash",
        triggerHook: 0
    }).setPin(".splash").addTo(c), new ScrollMagic.Scene({
        triggerElement: "#main",
        triggerHook: .5
    }).setTween(TweenMax.to(".splash", .1, {
        opacity: "0",
        ease: Linear.easeNone
    })).addTo(c);
    var g = new TimelineMax;
    if (g.fromTo($(".cutter"), .5, {
            width: "0%"
        }, {
            width: "100%",
            ease: Power0.easeInOut
        }).staggerFromTo($(".digital path"), .2, {
            autoAlpha: 0,
            drawSVG: "0%"
        }, {
            autoAlpha: 1,
            drawSVG: "100%",
            ease: Power0.easeInOut
        }, .2).fromTo($(".star"), .1, {
            scale: 0
        }, {
            scale: 1,
            transformOrigin: "90%  0%",
            ease: Power0.easeInOut
        }).fromTo($(".scroll-down"), .4, {
            autoAlpha: 0
        }, {
            autoAlpha: 1,
            ease: Power0.easeInOut
        }).call(function() {
            $(".splash-badge").addClass("shown")
        }).set($("body"), {
            className: "-=splash-loader"
        }), $(window).scroll(function() {
            var e, a, o = 0,
                t = 0;
            e = $(window).scrollTop(), a = $(document).height() - $(window).height(), e > 0 && (o = e / a, t = $(window).width() * o), $(".progress-bar").css("width", t)
        }), $(".primary-nav-content").mCustomScrollbar({
            theme: "minimal"
        }), new ScrollMagic.Scene({
            triggerElement: "#main",
            triggerHook: 0
        }).setClassToggle("#header", "nav-drop").addTo(c), $(".home").length) var d = $(window).height() + 300;
    else var d = 300;
    var h = 0;
    $(window).scroll(function() {
        var e = $(window).scrollTop();
        e >= d && $("#header").addClass("primary-nav-hide"), e <= h && $("#header").removeClass("primary-nav-hide"), h = e
    }), $(".parallax-animate-module .content-box").each(function() {
        new ScrollMagic.Scene({
            triggerElement: this,
            triggerHook: .5
        }).setClassToggle(this, "switch").addTo(c)
    });
    var m = new TimelineMax({
            repeat: -1
        }),
        u = new TimelineMax({
            repeat: -1,
            yoyo: !0
        });
    m.fromTo($(".smarter-svg .cls-7"), .5, {
        autoAlpha: 0
    }, {
        autoAlpha: 1,
        ease: Power1.easeInOut
    }), u.fromTo($(".smarter-svg .cls-1"), .3, {
        autoAlpha: .2
    }, {
        autoAlpha: 0,
        ease: Power1.easeInOut
    }).fromTo($(".smarter-svg .cls-2"), .3, {
        autoAlpha: .4
    }, {
        autoAlpha: 0,
        ease: Power1.easeInOut
    }).fromTo($(".smarter-svg .cls-3"), .3, {
        autoAlpha: .6
    }, {
        autoAlpha: 0,
        ease: Power1.easeInOut
    }).fromTo($(".smarter-svg .cls-4"), .3, {
        autoAlpha: .8
    }, {
        autoAlpha: 0,
        ease: Power1.easeInOut
    });
    var w = new TimelineMax;
    w.fromTo($(".smarter-svg .cls-6"), .3, {
        autoAlpha: 0
    }, {
        autoAlpha: 1,
        ease: Power1.easeInOut
    }).fromTo($(".smarter-svg .cls-1"), .3, {
        autoAlpha: 0
    }, {
        autoAlpha: .2,
        ease: Power1.easeInOut
    }).fromTo($(".smarter-svg .cls-2"), .3, {
        autoAlpha: 0
    }, {
        autoAlpha: .4,
        ease: Power1.easeInOut
    }).fromTo($(".smarter-svg .cls-3"), .3, {
        autoAlpha: 0
    }, {
        autoAlpha: .6,
        ease: Power1.easeInOut
    }).fromTo($(".smarter-svg .cls-4"), .3, {
        autoAlpha: 0
    }, {
        autoAlpha: .8,
        ease: Power1.easeInOut
    }).fromTo($(".smarter-svg .cls-5"), .3, {
        autoAlpha: 0
    }, {
        autoAlpha: 1,
        ease: Power1.easeInOut
    }).fromTo($(".smarter-svg .cls-7"), .3, {
        autoAlpha: 0
    }, {
        autoAlpha: 1,
        ease: Power1.easeInOut
    }).add(u), new ScrollMagic.Scene({
        triggerElement: ".smarter-module",
        triggerHook: 1
    }).setTween(w).addTo(c), $(".column-item").matchHeight(), $(".column-3").hover(function() {
        $(".columns-module").addClass("righthover"), $(".columns-module").removeClass("lefthover")
    }), $(".column-1,.column-2").hover(function() {
        $(".columns-module").addClass("lefthover"), $(".columns-module").removeClass("righthover")
    });
    var p = new TimelineMax({
        paused: !0
    });
    p.add("start").set($("body"), {
        className: "+=is-overlay"
    }).set($(".share-trigger"), {
        className: "+=active"
    }).fromTo($(".share-trigger .icon-share"), .3, {
        rotation: 0
    }, {
        rotation: 180,
        ease: Quad.easeInOut
    }).set($(".share-trigger"), {
        className: "+=close-share"
    }, "-=0.2").staggerFromTo($(".animate-items a"), .1, {
        autoAlpha: 0,
        scale: 0
    }, {
        autoAlpha: 1,
        scale: 1,
        ease: Power0.easeInOut
    }, .1, "-=start").staggerFromTo($(".animate-items a i"), .1, {
        autoAlpha: 0
    }, {
        autoAlpha: 1,
        ease: Power0.easeInOut
    });
    var f = !1;
    $("body").on("click", ".share-trigger", function(e) {
        return f === !0 ? (p.reverse(), void(f = !1)) : (p.play(), void(f = !0))
    }), $("body").on("click", ".share-option a:not(.copylink)", function(e) {
        $(".share-trigger").trigger("click"), f = !1
    }), $("body").on("click", ".share-option a.copylink", function(e) {
        var a = new TimelineMax;
        a.to($(".copylink-overlay"), .3, {
            alpha: 1
        }).to($(".copylink-overlay"), 1, {
            alpha: 0
        }, "+=0.5").call(function() {
            $(".share-trigger").trigger("click"), f = !1
        })
    }), new ScrollMagic.Scene({
        triggerElement: "#main",
        triggerHook: .3
    }).setClassToggle(".fixed-social-share", "is-active").addTo(c), new ScrollMagic.Scene({
        triggerElement: ".columns-module",
        triggerHook: 1
    }).setClassToggle(".fixed-social-share", "hide").addTo(c), $(".sticky-block").hcSticky({
        top: 110
    }), $(".infographic-module").each(function() {
        var e = new TimelineMax;
        e.add(a), new ScrollMagic.Scene({
            triggerElement: this,
            triggerHook: .6
        }).setTween(e).addTo(c)
    }), $(".infographic-box").each(function() {
        var e = new TimelineMax;
        e.staggerFromTo($(".infographic-circle path"), .4, {
            autoAlpha: 0,
            drawSVG: "0%"
        }, {
            autoAlpha: 1,
            drawSVG: "100%",
            ease: Power0.linear
        }, .1), new ScrollMagic.Scene({
            triggerElement: this,
            triggerHook: .5
        }).setTween(e).addTo(c)
    }), $(window).width() >= 1200 ? $(".split-text-wrap").each(function() {
        var e = new TimelineMax;
        e.staggerFromTo($(this).find(".split-text"), 2, {
            autoAlpha: 0
        }, {
            autoAlpha: 1
        }, .1).set($(this).find(".split-text"), {
            className: "+=load"
        }).staggerFromTo($(this).find(".fadespan"), .5, {
            autoAlpha: 0
        }, {
            autoAlpha: 1
        }, .1), new ScrollMagic.Scene({
            triggerElement: this,
            triggerHook: .8
        }).setTween(e).addTo(c)
    }) : $(".split-text-wrap").each(function() {
        var e = new TimelineMax;
        e.staggerFromTo($(this).find(".split-text"), 2, {
            autoAlpha: 0
        }, {
            autoAlpha: 1
        }, .1).set($(this).find(".split-text"), {
            className: "+=load"
        }).staggerFromTo($(this).find(".fadespan"), .5, {
            autoAlpha: 0
        }, {
            autoAlpha: 1
        }, .1), new ScrollMagic.Scene({
            triggerElement: this,
            triggerHook: .8
        }).setTween(e).addTo(c)
    }), $(".widget-jump").find("a").click(function(e) {
        e.preventDefault();
        var a = $(this).attr("href");
        $("html, body").animate({
            scrollTop: $(a).offset().top - 110
        }, 1e3)
    }), $(".backtotop, #footer .footer-top").click(function(e) {
        e.preventDefault(), $("html, body").animate({
            scrollTop: $("body").offset().top
        }, 1e3)
    });
    var T = new TimelineMax;
    T.staggerFromTo($(".presence-map").find("li"), 1, {
        autoAlpha: 0
    }, {
        autoAlpha: 1,
        ease: Power0.easeInOut
    }, .3), new ScrollMagic.Scene({
        triggerElement: ".presence-map",
        triggerHook: .3
    }).setTween(T).addTo(c), $(window).width() > 1024 ? (o(), e()) : t(), enquire.register("screen and (min-width:1025px)", {
        match: function() {
            e(), o()
        },
        unmatch: function() {
            t()
        }
    }), $(window).width() > 1024 ? r() : $(window).width() > 767 && $(window).width() < 1025 ? n() : i(), $(window).resize(function() {
        $(window).width() >= 1200 ? $(".split-text-wrap").each(function() {
            for (var e = [], a = new TimelineMax, o = new SplitText($(this).find(".split-text"), {
                    type: "lines,chars"
                }), t = 0; t < o.lines.length; t++) {
                var r = o.lines[t].querySelectorAll("div"),
                    n = reorderArray(r, Math.floor(3 * Math.random()));
                e.push(n)
            }
            for (var r = 0; r < o.lines.length; r++) {
                var i = 5 + 10 * r;
                a.from(o.lines[r], 3, {
                    y: i
                }, 0)
            }
            for (var r = 0; r < e.length; r++) a.staggerFrom(e[r], .2, {
                opacity: 0,
                delay: .2 * r
            }, .01, 0);
            a.set($(this).find(".split-text"), {
                className: "+=load"
            }).staggerFromTo($(this).find(".fadespan"), .5, {
                autoAlpha: 0
            }, {
                autoAlpha: 1
            }, .1), new ScrollMagic.Scene({
                triggerElement: this,
                triggerHook: .8
            }).setTween(a).addTo(c)
        }) : (tltopSplitText.killAll(), $(".split-text-wrap").each(function() {
            var e = new TimelineMax;
            e.set($(this).find(".split-text"), {
                className: "+=load"
            }).staggerFromTo($(this).find(".fadespan"), .5, {
                autoAlpha: 0
            }, {
                autoAlpha: 1
            }, .1), new ScrollMagic.Scene({
                triggerElement: this,
                triggerHook: .8
            }).setTween(e).addTo(c)
        })), $(window).width() > 1024 ? r() : $(window).width() > 767 && $(window).width() < 1025 ? n() : i()
    })
});
//var md = new MobileDetect(window.navigator.userAgent);
//"Safari" === md.userAgent() && "iOS" === md.os() && $("body").addClass("issafari");