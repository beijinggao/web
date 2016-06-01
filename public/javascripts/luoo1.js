function url(a) {
    return $.luoo.root + "/" + a
}
function check_login(a) {
    $.luoo.get(url("login/user"), "", function (b) {
        b.status ? ($("#loggedOutWrapper").hide(), $("#loggedInWrapper").html(b.msg).show(), $("#commentAvatarHolder").attr("href", $.luoo.root + "/user/" + b.data.uid), $("#commentAvatarHolder img").attr("src", b.data.user_avatar), $("#commentForm").data("login", 1), $("#lnActiveTip").tip("", !1)) : "undefined" != typeof a ? ($("#loggedOutWrapper").hide(), $("#loggedInWrapper").html(b.msg).show(), $("#commentForm").data("login", 0)) : ($("#loggedOutWrapper").show(), $("#loggedInWrapper").html("").hide(), $("#commentAvatarHolder").attr("href", "javascript:;"), $("#commentAvatarHolder img").attr("src", $.luoo.url_static + "/img/avatar.gif"), $("#commentForm").data("login", 0))
    })
}

(jQuery), function ($) {
    $.luoo = {
        cfg: {foo: "bar"}, tips: [], openedMsg: null, qrcode: null, init: function (a) {
            return this.root = a.root ? a.root : document.location.href, this.url_static = a.url_static ? a.url_static : this.root + "/static", this.res = a.res ? a.res : {}, this.cfg = a.cfg ? a.cfg : {}, this
        }, post: function (url, data, cback, object) {
            $.ajax({type: "post", url: url, data: data, dataType: "json"}).done(function (json) {
                try {
                    eval("var func = " + cback), func(json, object)
                } catch (e) {
                }
            })
        }, get: function (url, data, cback, object, async) {
            async = async === !0 ? !0 : !1, $.ajax({
                type: "get",
                url: url,
                data: data,
                dataType: "json",
                async: async
            }).done(function (json) {
                try {
                    eval("var func = " + cback), func(json, object)
                } catch (e) {
                }
            })
        }, browser: function () {
            var a = navigator.userAgent.toLowerCase();
            return {
                version: a.match(/(?:firefox|opera|safari|chrome|msie)[\/: ]([\d.]+)/)[1],
                safari: /version.+safari/.test(a),
                chrome: /chrome/.test(a),
                firefox: /firefox/.test(a),
                ie: /msie/.test(a),
                opera: /opera/.test(a)
            }
        }, destroy_tip: function (a) {
            0 != $.luoo.tips.length && $.each($.luoo.tips, function (b, c) {
                !c || a && c.id != a || c.destroy(), c && a && c.id == a ? $.luoo.tips.splice(b, 1) : $.luoo.tips.splice(0, $.luoo.tips.length)
            })
        }, msg: function (a, b, c, d, e, f) {
            var g = "undefined" == typeof c ? !1 : c, h = "undefined" == typeof d ? "none" : d, e = "undefined" == typeof e ? null : e, f = "undefined" == typeof f ? 410 : f, i = {
                title: a,
                content: b,
                ok: g,
                cancle: !1,
                lock: "none" != h,
                background: h,
                width: f,
                close: e
            };
            this.openedMsg = art.dialog(i)
        }, close_msg: function () {
            this.openedMsg && this.openedMsg.close()
        }
    }, $.fn.luooTab = function (a) {
        return $(".tab-item").removeClass("actived"), $(".tab-content-item").hide(), $(this).each(function () {
            var b = $(this), c = 0;
            a && (c = $("#tab-" + a).index()), $(".tab-item", b).eq(c).addClass("actived"), $(".tab-content-item", b).hide(), $(".tab-content-item", b).eq(c).show(), b.find(".tab-item").on("click", function () {
                var a = $(this), c = a.index();
                $(".tab-item", b).removeClass("actived"), a.addClass("actived"), $(".tab-content-item", b).hide(), $(".tab-content-item", b).eq(c).fadeIn(300)
            })
        })
    }, $.fn.getComments = function () {
        return $(this).each(function () {
            var a = $(this);
            $.luoo.post(a.data("url"), a.data(), "get_comment_callback", a), a.on("click", ".ajax-comment-pager a", function (b) {
                b.preventDefault(), $.luoo.post($(this).attr("href"), "", "get_comment_callback", a)
            }), $(".ln-comment-sort").click(function (b) {
                b.preventDefault(), $.luoo.post($(this).data("url"), "", "get_comment_callback", a), $(".ln-comment-sort").removeClass("current"), $(this).addClass("current")
            })
        })
    }, $.fn.luooPicturePager = function (a) {
        return $(this).each(function () {
            var b = $(this);
            a && b.wrap('<a href="' + a + '" title="下一篇"></a>')
        })
    }, $.fn.tip = function (a, b) {
        var c;
        return $(this).each(function () {
            var d = $(this), e = "object" == typeof a ? a : d.data(), f = e.tipid ? e.tipid : "", g = e.target ? e.target : d;
            f && $.luoo.destroy_tip(f);
            var h = {};
            e.adjustx && (h.x = e.adjustx), e.adjusty && (h.y = e.adjusty);
            var i = {classes: "qtip-luoo"};
            e.width && (i.width = e.width);
            var j = {solo: !0};
            if (e.show ? j.event = e.show : j.event = "click", e.hide)var k = e.hide; else var k = "click";
            if (e.posmy)var l = e.posmy; else var l = "top center";
            if (e.posat)var m = e.posat; else var m = "bottom center";
            var n = d.qtip({
                id: f, content: {
                    text: function (a, b) {
                        if (e.html)return e.html;
                        if (e.remote)$.ajax({url: e.remote, dataType: "json"}).done(function (a) {
                            b.set("content.text", a.data)
                        }).fail(function (a, c, d) {
                            b.set("content.text", c + ": " + d)
                        }); else if (e.ct)return $("#" + e.ct).length > 0 ? $("#" + e.ct).html() : e.ct;
                        return '<p style="padding: 20px 0; text-align: center"><img src="' + $.luoo.url_static + '/img/loading_W.gif"></p>'
                    }
                }, position: {my: l, at: m, target: g, adjust: h}, style: i, show: j, hide: k
            });
            c = n.qtip("api"), b !== !1 && c.show(), $.luoo.tips.push(c), $("body").on("click", function (a) {
                $(a.target).parents(".qtip").is($("#qtip-" + c.id)) || c.hide()
            })
        }), c
    }
}

(jQuery), Array.prototype.indexOf || (Array.prototype.indexOf = function (a) {
    var b = this.length >>> 0, c = Number(arguments[1]) || 0;
    for (c = 0 > c ? Math.ceil(c) : Math.floor(c), 0 > c && (c += b); b > c; c++)if (c in this && this[c] === a)return c;
    return -1
})

"function" != typeof Array.prototype.reduce && (Array.prototype.reduce = function (a, b) {
    var c = b, d = 0, e = this.length;
    if ("undefined" == typeof b && (c = this[0], d = 1), "function" == typeof a)for (d; e > d; d++)this.hasOwnProperty(d) && (c = a(c, this[d], d, this));
    return c
})

"function" != typeof Array.prototype.map && (Array.prototype.map = function (a, b) {
    var c = [];
    if ("function" == typeof a)for (var d = 0, e = this.length; e > d; d++)c.push(a.call(b, this[d], d, this));
    return c
})

Object.keys || (Object.keys = function () {
    "use strict";
    var a = Object.prototype.hasOwnProperty, b = !{toString: null}.propertyIsEnumerable("toString"), c = ["toString", "toLocaleString", "valueOf", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "constructor"], d = c.length;
    return function (e) {
        if ("object" != typeof e && ("function" != typeof e || null === e))throw new TypeError("Object.keys called on non-object");
        var f, g, h = [];
        for (f in e)a.call(e, f) && h.push(f);
        if (b)for (g = 0; d > g; g++)a.call(e, c[g]) && h.push(c[g]);
        return h
    }
}())

$(document).ready(function () {
    $("body").on("mouseenter", ".logged-out-wrapper", function () {
        return $("#qtip-headLoginDialog").is($(":visible")) ? !1 : void $(this).tip()
    });
    $("body").on("click", function (a) {
        var b = $(a.target);
        return b.parents("div").is($(".logged-out-wrapper")) ? !1 : void $("#registerDialog,#loginDialog").hide()
    });
});
