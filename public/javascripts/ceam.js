function gdm(e) {
    var t = e.indexOf(":");
    t > 0 && (e = e.substr(0, t));
    var n = e.split("."), a = n.length, i = "";
    if (e.match(ip_pat))return "";
    if (a >= 3)if ("cn" == n[a - 1]) {
        var o = n[a - 2];
        i = "com" == o || "net" == o || "org" == o || "edu" == o || "gov" == o ? "." + n[a - 3] + "." + o + "." + n[a - 1] : "." + o + "." + n[a - 1]
    } else {
        var o = n[a - 2];
        i = "." + o + "." + n[a - 1]
    }
    return i
}
var ip_pat = /^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/, swo = function () {
    function e() {
        if (!$) {
            try {
                var e = M.getElementsByTagName("body")[0].appendChild(g("span"));
                e.parentNode.removeChild(e)
            } catch (t) {
                return
            }
            $ = !0;
            for (var n = P.length, a = 0; n > a; a++)P[a]()
        }
    }

    function t(e) {
        $ ? e() : P[P.length] = e
    }

    function n(e) {
        if (typeof j.addEventListener != A)j.addEventListener("load", e, !1); else if (typeof M.addEventListener != A)M.addEventListener("load", e, !1); else if (typeof j.attachEvent != A)m(j, "onload", e); else if ("function" == typeof j.onload) {
            var t = j.onload;
            j.onload = function () {
                t(), e()
            }
        } else j.onload = e
    }

    function a() {
        F ? i() : o()
    }

    function i() {
        var e = M.getElementsByTagName("body")[0], t = g(N);
        t.setAttribute("type", B);
        var n = e.appendChild(t);
        if (n) {
            var a = 0;
            !function () {
                if (typeof n.GetVariable != A) {
                    var i = n.GetVariable("$version");
                    i && (i = i.split(" ")[1].split(","), q.pv = [parseInt(i[0], 10), parseInt(i[1], 10), parseInt(i[2], 10)])
                } else if (10 > a)return a++, void setTimeout(arguments.callee, 10);
                e.removeChild(t), n = null, o()
            }()
        } else o()
    }

    function o() {
        var e = U.length;
        if (e > 0)for (var t = 0; e > t; t++) {
            var n = U[t].id, a = U[t].callbackFn, i = {success: !1, id: n};
            if (q.pv[0] > 0) {
                var o = p(n);
                if (o)if (!y(U[t].swfVersion) || q.wk && q.wk < 312)if (U[t].expressInstall && s()) {
                    var d = {};
                    d.data = U[t].expressInstall, d.width = o.getAttribute("width") || "0", d.height = o.getAttribute("height") || "0", o.getAttribute("class") && (d.styleclass = o.getAttribute("class")), o.getAttribute("align") && (d.align = o.getAttribute("align"));
                    for (var u = {}, h = o.getElementsByTagName("param"), f = h.length, v = 0; f > v; v++)"movie" != h[v].getAttribute("name").toLowerCase() && (u[h[v].getAttribute("name")] = h[v].getAttribute("value"));
                    c(d, u, n, a)
                } else l(o), a && a(i); else w(n, !0), a && (i.success = !0, i.ref = r(n), a(i))
            } else if (w(n, !0), a) {
                var g = r(n);
                g && typeof g.SetVariable != A && (i.success = !0, i.ref = g), a(i)
            }
        }
    }

    function r(e) {
        var t = null, n = p(e);
        if (n && "OBJECT" == n.nodeName)if (typeof n.SetVariable != A)t = n; else {
            var a = n.getElementsByTagName(N)[0];
            a && (t = a)
        }
        return t
    }

    function s() {
        return !G && y("6.0.65") && (q.win || q.mac) && !(q.wk && q.wk < 312)
    }

    function c(e, t, n, a) {
        G = !0, S = a || null, k = {success: !1, id: n};
        var i = p(n);
        if (i) {
            "OBJECT" == i.nodeName ? (C = d(i), x = null) : (C = i, x = n), e.id = L, (typeof e.width == A || !/%$/.test(e.width) && parseInt(e.width, 10) < 310) && (e.width = "310"), (typeof e.height == A || !/%$/.test(e.height) && parseInt(e.height, 10) < 137) && (e.height = "137"), M.title = M.title.slice(0, 47) + " - Flash Player Installation";
            var o = q.ie && q.win ? "ActiveX" : "PlugIn", r = "MMredirectURL=" + j.location.toString().replace(/&/g, "%26") + "&MMplayerType=" + o + "&MMdoctitle=" + M.title;
            if (typeof t.flashvars != A ? t.flashvars += "&" + r : t.flashvars = r, q.ie && q.win && 4 != i.readyState) {
                var s = g("div");
                n += "SWFObjectNew", s.setAttribute("id", n), i.parentNode.insertBefore(s, i), i.style.display = "none", function () {
                    4 == i.readyState ? i.parentNode.removeChild(i) : setTimeout(arguments.callee, 10)
                }()
            }
            u(e, t, n)
        }
    }

    function l(e) {
        if (q.ie && q.win && 4 != e.readyState) {
            var t = g("div");
            e.parentNode.insertBefore(t, e), t.parentNode.replaceChild(d(e), t), e.style.display = "none", function () {
                4 == e.readyState ? e.parentNode.removeChild(e) : setTimeout(arguments.callee, 10)
            }()
        } else e.parentNode.replaceChild(d(e), e)
    }

    function d(e) {
        var t = g("div");
        if (q.win && q.ie)t.innerHTML = e.innerHTML; else {
            var n = e.getElementsByTagName(N)[0];
            if (n) {
                var a = n.childNodes;
                if (a)for (var i = a.length, o = 0; i > o; o++)1 == a[o].nodeType && "PARAM" == a[o].nodeName || 8 == a[o].nodeType || t.appendChild(a[o].cloneNode(!0))
            }
        }
        return t
    }

    function u(e, t, n) {
        var a, i = p(n);
        if (q.wk && q.wk < 312)return a;
        if (i)if (typeof e.id == A && (e.id = n), q.ie && q.win) {
            var o = "";
            for (var r in e)e[r] != Object.prototype[r] && ("data" == r.toLowerCase() ? t.movie = e[r] : "styleclass" == r.toLowerCase() ? o += ' class="' + e[r] + '"' : "classid" != r.toLowerCase() && (o += " " + r + '="' + e[r] + '"'));
            var s = "";
            for (var c in t)t[c] != Object.prototype[c] && (s += '<param name="' + c + '" value="' + t[c] + '" />');
            i.outerHTML = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"' + o + ">" + s + "</object>", H[H.length] = e.id, a = p(e.id)
        } else {
            var l = g(N);
            l.setAttribute("type", B);
            for (var d in e)e[d] != Object.prototype[d] && ("styleclass" == d.toLowerCase() ? l.setAttribute("class", e[d]) : "classid" != d.toLowerCase() && l.setAttribute(d, e[d]));
            for (var u in t)t[u] != Object.prototype[u] && "movie" != u.toLowerCase() && h(l, u, t[u]);
            i.parentNode.replaceChild(l, i), a = l
        }
        return a
    }

    function h(e, t, n) {
        var a = g("param");
        a.setAttribute("name", t), a.setAttribute("value", n), e.appendChild(a)
    }

    function f(e) {
        var t = p(e);
        t && "OBJECT" == t.nodeName && (q.ie && q.win ? (t.style.display = "none", function () {
            4 == t.readyState ? v(e) : setTimeout(arguments.callee, 10)
        }()) : t.parentNode.removeChild(t))
    }

    function v(e) {
        var t = p(e);
        if (t) {
            for (var n in t)"function" == typeof t[n] && (t[n] = null);
            t.parentNode.removeChild(t)
        }
    }

    function p(e) {
        var t = null;
        try {
            t = M.getElementById(e)
        } catch (n) {
        }
        return t
    }

    function g(e) {
        return M.createElement(e)
    }

    function m(e, t, n) {
        e.attachEvent(t, n), V[V.length] = [e, t, n]
    }

    function y(e) {
        var t = q.pv, n = e.split(".");
        return n[0] = parseInt(n[0], 10), n[1] = parseInt(n[1], 10) || 0, n[2] = parseInt(n[2], 10) || 0, t[0] > n[0] || t[0] == n[0] && t[1] > n[1] || t[0] == n[0] && t[1] == n[1] && t[2] >= n[2] ? !0 : !1
    }

    function _(e, t, n, a) {
        if (!q.ie || !q.mac) {
            var i = M.getElementsByTagName("head")[0];
            if (i) {
                var o = n && "string" == typeof n ? n : "screen";
                if (a && (E = null, T = null), !E || T != o) {
                    var r = g("style");
                    r.setAttribute("type", "text/css"), r.setAttribute("media", o), E = i.appendChild(r), q.ie && q.win && typeof M.styleSheets != A && M.styleSheets.length > 0 && (E = M.styleSheets[M.styleSheets.length - 1]), T = o
                }
                q.ie && q.win ? E && typeof E.addRule == N && E.addRule(e, t) : E && typeof M.createTextNode != A && E.appendChild(M.createTextNode(e + " {" + t + "}"))
            }
        }
    }

    function w(e, t) {
        if (X) {
            var n = t ? "visible" : "hidden";
            $ && p(e) ? p(e).style.visibility = n : _("#" + e, "visibility:" + n)
        }
    }

    function b(e) {
        var t = /[\\\"<>\.;]/, n = null != t.exec(e);
        return n && typeof encodeURIComponent != A ? encodeURIComponent(e) : e
    }

    {
        var C, x, S, k, E, T, A = "undefined", N = "object", I = "Shockwave Flash", D = "ShockwaveFlash.ShockwaveFlash", B = "application/x-shockwave-flash", L = "SWFObjectExprInst", O = "onreadystatechange", j = window, M = document, R = navigator, F = !1, P = [a], U = [], H = [], V = [], $ = !1, G = !1, X = !0, q = function () {
            var e = typeof M.getElementById != A && typeof M.getElementsByTagName != A && typeof M.createElement != A, t = R.userAgent.toLowerCase(), n = R.platform.toLowerCase(), a = /win/.test(n ? n : t), i = /mac/.test(n ? n : t), o = /webkit/.test(t) ? parseFloat(t.replace(/^.*webkit\/(\d+(\.\d+)?).*$/, "$1")) : !1, r = !1, s = [0, 0, 0], c = null;
            if (typeof R.plugins != A && typeof R.plugins[I] == N)c = R.plugins[I].description, !c || typeof R.mimeTypes != A && R.mimeTypes[B] && !R.mimeTypes[B].enabledPlugin || (F = !0, r = !1, c = c.replace(/^.*\s+(\S+\s+\S+$)/, "$1"), s[0] = parseInt(c.replace(/^(.*)\..*$/, "$1"), 10), s[1] = parseInt(c.replace(/^.*\.(.*)\s.*$/, "$1"), 10), s[2] = /[a-zA-Z]/.test(c) ? parseInt(c.replace(/^.*[a-zA-Z]+(.*)$/, "$1"), 10) : 0); else if (typeof j.ActiveXObject != A)try {
                var l = new ActiveXObject(D);
                l && (c = l.GetVariable("$version"), c && (r = !0, c = c.split(" ")[1].split(","), s = [parseInt(c[0], 10), parseInt(c[1], 10), parseInt(c[2], 10)]))
            } catch (d) {
            }
            return {w3: e, pv: s, wk: o, ie: r, win: a, mac: i}
        }();
        !function () {
            q.w3 && ((typeof M.readyState != A && "complete" == M.readyState || typeof M.readyState == A && (M.getElementsByTagName("body")[0] || M.body)) && e(), $ || (typeof M.addEventListener != A && M.addEventListener("DOMContentLoaded", e, !1), q.ie && q.win && (M.attachEvent(O, function () {
                "complete" == M.readyState && (M.detachEvent(O, arguments.callee), e())
            }), j == top && !function () {
                if (!$) {
                    try {
                        M.documentElement.doScroll("left")
                    } catch (t) {
                        return void setTimeout(arguments.callee, 0)
                    }
                    e()
                }
            }()), q.wk && !function () {
                return $ ? void 0 : /loaded|complete/.test(M.readyState) ? void e() : void setTimeout(arguments.callee, 0)
            }(), n(e)))
        }(), function () {
            q.ie && q.win && window.attachEvent("onunload", function () {
                for (var e = V.length, t = 0; e > t; t++)V[t][0].detachEvent(V[t][1], V[t][2]);
                for (var n = H.length, a = 0; n > a; a++)f(H[a]);
                for (var i in q)q[i] = null;
                q = null;
                for (var o in swo)swo[o] = null;
                swo = null
            })
        }()
    }
    return {
        registerObject: function (e, t, n, a) {
            if (q.w3 && e && t) {
                var i = {};
                i.id = e, i.swfVersion = t, i.expressInstall = n, i.callbackFn = a, U[U.length] = i, w(e, !1)
            } else a && a({success: !1, id: e})
        }, getObjectById: function (e) {
            return q.w3 ? r(e) : void 0
        }, embedSWF: function (e, n, a, i, o, r, l, d, h, f) {
            var v = {success: !1, id: n};
            q.w3 && !(q.wk && q.wk < 312) && e && n && a && i && o ? (w(n, !1), t(function () {
                a += "", i += "";
                var t = {};
                if (h && typeof h === N)for (var p in h)t[p] = h[p];
                t.data = e, t.width = a, t.height = i;
                var g = {};
                if (d && typeof d === N)for (var m in d)g[m] = d[m];
                if (l && typeof l === N)for (var _ in l)typeof g.flashvars != A ? g.flashvars += "&" + _ + "=" + l[_] : g.flashvars = _ + "=" + l[_];
                if (y(o)) {
                    var b = u(t, g, n);
                    t.id == n && w(n, !0), v.success = !0, v.ref = b
                } else {
                    if (r && s())return t.data = r, void c(t, g, n, f);
                    w(n, !0)
                }
                f && f(v)
            })) : f && f(v)
        }, switchOffAutoHideShow: function () {
            X = !1
        }, ua: q, getFlashPlayerVersion: function () {
            return {major: q.pv[0], minor: q.pv[1], release: q.pv[2]}
        }, hasFlashPlayerVersion: y, createSWF: function (e, t, n) {
            return q.w3 ? u(e, t, n) : void 0
        }, showExpressInstall: function (e, t, n, a) {
            q.w3 && s() && c(e, t, n, a)
        }, removeSWF: function (e) {
            q.w3 && f(e)
        }, createCSS: function (e, t, n, a) {
            q.w3 && _(e, t, n, a)
        }, addDomLoadEvent: t, addLoadEvent: n, getQueryParamValue: function (e) {
            var t = M.location.search || M.location.hash;
            if (t) {
                if (/\?/.test(t) && (t = t.split("?")[1]), null == e)return b(t);
                for (var n = t.split("&"), a = 0; a < n.length; a++)if (n[a].substring(0, n[a].indexOf("=")) == e)return b(n[a].substring(n[a].indexOf("=") + 1))
            }
            return ""
        }, expressInstallCallback: function () {
            if (G) {
                var e = p(L);
                e && C && (e.parentNode.replaceChild(C, e), x && (w(x, !0), q.ie && q.win && (C.style.display = "block")), S && S(k)), G = !1
            }
        }
    }
}();
try {
    !function (e) {
        "use strict";
        function t(e) {
            var t = new c;
            t.style.visibility = "hidden", t.style.position = "absolute", t.src = e
        }

        function n(e, t, n) {
            if (e.indexOf("&" + t + "=") > -1 || 0 === e.indexOf(t + "=")) {
                var a, i, o = e.indexOf("&" + t + "=");
                return -1 === o && (o = e.indexOf(t + "=")), a = e.indexOf("&", o + 1), i = -1 !== a ? e.substr(0, o) + e.substr(a + (o ? 0 : 1)) + "&" + t + "=" + n : e.substr(0, o) + "&" + t + "=" + n
            }
            return e + "&" + t + "=" + n
        }

        function a() {
            return "indexedDB"in e ? !0 : (e.indexedDB = e.indexedDB || e.mozIndexedDB || e.webkitIndexedDB || e.msIndexedDB) ? !0 : !1
        }

        function i(e) {
            p = e;
            var t = s.getElementById("myswf");
            t && t.parentNode && t.parentNode.removeChild(t)
        }

        function o(e) {
            function t(e, t, n) {
                var a = s.createElement("img");
                return a.src = t + "#" + parseInt(32e3 * Math.random()), a.onload = function () {
                    o[e] = !0, r -= 1, 0 >= r && (c = !1, n(o))
                }, a.onerror = function () {
                    o[e] = !1, r -= 1, 0 >= r && (c = !1, n(o))
                }, a
            }

            function n(e, t) {
                return e.toString().length < t ? n("0" + e, t) : e
            }

            function a(e) {
                for (var t = 0, n = e.length, a = 0; n > a; ++a)t = (t << 1) + (e[a] ? 1 : 0);
                return t
            }

            function i(e, t) {
                var a = [], i = parseInt(e, 10).toString(2);
                i = n(i, 32);
                for (var o = 32 - t; 32 > o; ++o)a.push("1" == i[o] ? !0 : !1);
                return a
            }

            var o = [], r = 0, c = !1;
            return {
                bools_to_int: a, is_working: function () {
                    return c
                }, get_hsts_value: function (n) {
                    if (c)return !1;
                    c = !0, o = [], r = e.length;
                    for (var a = 0; a < e.length; ++a) {
                        o.push(void 0);
                        {
                            t(a, e[a], n)
                        }
                    }
                    return !0
                }, set_hsts_value: function (n, a) {
                    if (c)return !1;
                    c = !0, o = [], r = e.length;
                    for (var i = 0; i < e.length; ++i)o.push(void 0), n[i] ? t(i, e[i] + "?SET=1", a) : t(i, e[i] + "?DEL=1", a);
                    return !0
                }, set_hsts_as_int: function (t, n) {
                    var t = i(t, e.length);
                    return this.set_hsts_value(t, n)
                }, get_hsts_as_int: function (e) {
                    return this.get_hsts_value(function (t) {
                        e(a(t))
                    })
                }
            }
        }

        function r(i) {
            i = i || {};
            var r = {};
            for (var h in m) {
                var v = i[h];
                r[h] = "undefined" != typeof v ? v : m[h]
            }
            "function" == typeof r.domain && (r.domain = r.domain(e));
            var _ = r.history, w = r.java, b = r.tests, C = r.baseurl, x = r.asseturi, S = r.phpuri, k = r.domain, E = r.hsts, T = this;
            this._ec = {}, E && (r.hsts_domains.length <= 8 && console.log("HSTS cookie with " + r.hsts_domains.length + " can only save values up to " + Math.pow(2, r.hsts_domains.length) - 1), this.hsts_cookie = o(r.hsts_domains)), this.get = function (e, t, n) {
                T._evc(e, t, void 0, void 0, n)
            }, this.set = function (e, t) {
                T._evc(e, function () {
                }, t)
            }, this._evc = function (t, n, i, o, s) {
                if (void 0 === T._evc && (T = this), void 0 === o && (o = 0), 0 === o && (T.evc_database_storage(t, i), T.evc_indexdb_storage(t, i), T.evc_png(t, i), T.evc_etag(t, i), T.evc_cache(t, i), T.evc_lso(t, i), r.silverlight && T.evc_silverlight(t, i), r.authPath && T.evc_auth(t, i), w && T.evc_java(t, i), T._ec.userData = T.evc_userdata(t, i), T._ec.cookieData = T.evc_cookie(t, i), T._ec.localData = T.evc_local_storage(t, i), T._ec.globalData = T.evc_global_storage(t, i), T._ec.sessionData = T.evc_session_storage(t, i), T._ec.windowData = T.evc_window(t, i), _ && (T._ec.historyData = T.evc_history(t, i)), E && (T._ec.hstsData = void 0, void 0 === i ? T.hsts_cookie.get_hsts_as_int(function (e) {
                        T._ec.hstsData = e
                    }) : T.hsts_cookie.set_hsts_as_int(i, function (e) {
                        T._ec.hstsData = T.hsts_cookie.bools_to_int(e)
                    }))), void 0 !== i)("undefined" == typeof p || "undefined" == typeof g || void 0 === T._ec.hstsData || T.hsts_cookie.is_working()) && o++ < b && setTimeout(function () {
                    T._evc(t, n, i, o, s)
                }, 300); else if ((e.openDatabase && "undefined" == typeof T._ec.dbData || a() && ("undefined" == typeof T._ec.idbData || "" === T._ec.idbData) || "undefined" == typeof p || "undefined" == typeof T._ec.etagData || "undefined" == typeof T._ec.cacheData || "undefined" == typeof g) && o++ < b)setTimeout(function () {
                    T._evc(t, n, i, o, s)
                }, 300); else {
                    T._ec.lsoData = T.getFromStr(t, p), p = void 0, T._ec.slData = T.getFromStr(t, g), g = void 0;
                    var c, l, d = T._ec, u = [], h = 0;
                    T._ec = {};
                    for (l in d)d[l] && "null" !== d[l] && "undefined" !== d[l] && (u[d[l]] = void 0 === u[d[l]] ? 1 : u[d[l]] + 1);
                    for (l in u)u[l] > h && (h = u[l], c = l);
                    this.working = !1, void 0 === c || void 0 !== s && 1 === s || T.set(t, c), "function" == typeof n && n(c, d)
                }
            }, this.evc_window = function (t, a) {
                try {
                    if (void 0 === a)return this.getFromStr(t, e.name);
                    e.name = n(e.name, t, a)
                } catch (i) {
                }
            }, this.evc_userdata = function (e, t) {
                try {
                    var n = this.createElem("div", "userdata_el", 1);
                    if (n.addBehavior) {
                        if (n.style.behavior = "url(#default#userData)", void 0 === t)return n.load(e), n.getAttribute(e);
                        n.setAttribute(e, t), n.save(e)
                    }
                } catch (a) {
                }
            }, this.ajax = function (e) {
                var t, n, a, i, o, r;
                for (t = {
                    "X-Requested-With": "XMLHttpRequest",
                    Accept: "text/javascript, text/html, application/xml, text/xml, */*"
                }, a = [function () {
                    return new XMLHttpRequest
                }, function () {
                    return new ActiveXObject("Msxml2.XMLHTTP")
                }, function () {
                    return new ActiveXObject("Microsoft.XMLHTTP")
                }], o = 0, r = a.length; r > o; o++) {
                    i = a[o];
                    try {
                        i = i();
                        break
                    } catch (s) {
                    }
                }
                i.onreadystatechange = function () {
                    4 === i.readyState && e.success(i.responseText)
                }, i.open("get", e.url, !0);
                for (n in t)i.setRequestHeader(n, t[n]);
                i.send()
            }, this.evc_cache = function (e, t) {
                if (void 0 !== t)s.cookie = r.cacheCookieName + "=" + t + "; path=/; domain=" + k, T.ajax({
                    url: C + S + r.cachePath + "?name=" + e + "&cookie=" + r.cacheCookieName,
                    success: function () {
                    }
                }); else {
                    var n = this.getFromStr(r.cacheCookieName, s.cookie);
                    T._ec.cacheData = void 0, s.cookie = r.cacheCookieName + "=; expires=Mon, 20 Sep 2010 00:00:00 UTC; path=/; domain=" + k, T.ajax({
                        url: C + S + r.cachePath + "?name=" + e + "&cookie=" + r.cacheCookieName,
                        success: function (e) {
                            s.cookie = r.cacheCookieName + "=" + n + "; expires=Sun, 08-Aug-2021 06:05:50 GMT; path=/; domain=" + k, T._ec.cacheData = e
                        }
                    })
                }
            }, this.evc_auth = function (e, n) {
                void 0 !== n ? t("//" + n + "@" + location.host + C + S + r.authPath + "?name=" + e) : T.ajax({
                    url: C + S + r.authPath + "?name=" + e,
                    success: function (e) {
                        T._ec.authData = e
                    }
                })
            }, this.evc_etag = function (e, t) {
                if (void 0 !== t)s.cookie = r.etagCookieName + "=" + t + "; path=/; domain=" + k, T.ajax({
                    url: C + S + r.etagPath + "?name=" + e + "&cookie=" + r.etagCookieName,
                    success: function () {
                    }
                }); else {
                    var n = this.getFromStr(r.etagCookieName, s.cookie);
                    T._ec.etagData = void 0, s.cookie = r.etagCookieName + "=; expires=Mon, 20 Sep 2010 00:00:00 UTC; path=/; domain=" + k, T.ajax({
                        url: C + S + r.etagPath + "?name=" + e + "&cookie=" + r.etagCookieName,
                        success: function (e) {
                            s.cookie = r.etagCookieName + "=" + n + "; expires=Sun, 08-Aug-2021 06:05:50 GMT; path=/; domain=" + k, T._ec.etagData = e
                        }
                    })
                }
            }, this.evc_java = function (e, t) {
                function n(n) {
                    var a = s.getElementById(n);
                    void 0 !== t ? a.set(e, t) : T._ec.javaData = a.get(e)
                }

                var a = s.getElementById("ecAppletContainer");
                "undefined" != typeof dtjava && (null !== a && void 0 !== a && a.length || (a = s.createElement("div"), a.setAttribute("id", "ecAppletContainer"), a.style.position = "absolute", a.style.top = "-3000px", a.style.left = "-3000px", a.style.width = "1px", a.style.height = "1px", s.body.appendChild(a)), "undefined" == typeof ecApplet ? dtjava.embed({
                    id: "ecApplet",
                    url: C + x + "/evc.jnlp",
                    width: "1px",
                    height: "1px",
                    placeholder: "ecAppletContainer"
                }, {}, {onJavascriptReady: n}) : n("ecApplet"))
            }, this.evc_lso = function (e, t) {
                var n = s.getElementById("swfcontainer"), a = {}, i = {}, o = {};
                null !== n && void 0 !== n && n.length || (n = s.createElement("div"), n.setAttribute("id", "swfcontainer"), s.body.appendChild(n)), void 0 !== t && (a.everdata = e + "=" + t), i.swliveconnect = "true", o.id = "myswf", o.name = "myswf", d.embedSWF(C + x + "/ce.swf", "swfcontainer", "1", "1", "9.0.0", !1, a, i, o)
            }, this.evc_png = function (e, t) {
                var n, a, i, o = s.createElement("canvas");
                o.style.visibility = "hidden", o.style.position = "absolute", o.width = 200, o.height = 1, o && o.getContext && (n = new c, n.style.visibility = "hidden", n.style.position = "absolute", void 0 !== t ? s.cookie = r.pngCookieName + "=" + t + "; path=/; domain=" + k : (T._ec.pngData = void 0, a = o.getContext("2d"), i = this.getFromStr(r.pngCookieName, s.cookie), s.cookie = r.pngCookieName + "=; expires=Mon, 20 Sep 2010 00:00:00 UTC; path=/; domain=" + k, n.onload = function () {
                    s.cookie = r.pngCookieName + "=" + i + "; expires=Sun, 08-Aug-2021 06:05:50 GMT; path=/; domain=" + k, T._ec.pngData = "", a.drawImage(n, 0, 0);
                    var e, t, o = a.getImageData(0, 0, 200, 1), c = o.data;
                    for (e = 0, t = c.length; t > e && 0 !== c[e] && (T._ec.pngData += String.fromCharCode(c[e]), 0 !== c[e + 1]) && (T._ec.pngData += String.fromCharCode(c[e + 1]), 0 !== c[e + 2]); e += 4)T._ec.pngData += String.fromCharCode(c[e + 2])
                }), n.src = C + S + r.pngPath + "?name=" + e + "&cookie=" + r.pngCookieName)
            }, this.evc_local_storage = function (e, t) {
                try {
                    if (u) {
                        if (void 0 === t)return u.getItem(e);
                        u.setItem(e, t)
                    }
                } catch (n) {
                }
            }, this.evc_database_storage = function (t, n) {
                try {
                    if (e.openDatabase) {
                        var a = e.openDatabase("sqlite_evc", "", "evc", 1048576);
                        a.transaction(void 0 !== n ? function (e) {
                            e.executeSql("CREATE TABLE IF NOT EXISTS cache(id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, name TEXT NOT NULL, value TEXT NOT NULL, UNIQUE (name))", [], function () {
                            }, function () {
                            }), e.executeSql("INSERT OR REPLACE INTO cache(name, value) VALUES(?, ?)", [t, n], function () {
                            }, function () {
                            })
                        } : function (e) {
                            e.executeSql("SELECT value FROM cache WHERE name=?", [t], function (e, t) {
                                T._ec.dbData = t.rows.length >= 1 ? t.rows.item(0).value : ""
                            }, function () {
                            })
                        })
                    }
                } catch (i) {
                }
            }, this.evc_indexdb_storage = function (t, n) {
                try {
                    if ("indexedDB"in e || (indexedDB = e.indexedDB || e.mozIndexedDB || e.webkitIndexedDB || e.msIndexedDB, IDBTransaction = e.IDBTransaction || e.webkitIDBTransaction || e.msIDBTransaction, IDBKeyRange = e.IDBKeyRange || e.webkitIDBKeyRange || e.msIDBKeyRange), indexedDB) {
                        var a = 1, i = indexedDB.open("idb_evc", a);
                        i.onerror = function () {
                        }, i.onupgradeneeded = function (e) {
                            {
                                var t = e.target.result;
                                t.createObjectStore("evc", {keyPath: "name", unique: !1})
                            }
                        }, i.onsuccess = void 0 !== n ? function (e) {
                            var a = e.target.result;
                            if (a.objectStoreNames.contains("evc")) {
                                var i = a.transaction(["evc"], "readwrite"), o = i.objectStore("evc");
                                o.put({name: t, value: n})
                            }
                            a.close()
                        } : function (e) {
                            var n = e.target.result;
                            if (n.objectStoreNames.contains("evc")) {
                                var a = n.transaction(["evc"]), i = a.objectStore("evc"), o = i.get(t);
                                o.onsuccess = function () {
                                    T._ec.idbData = void 0 === o.result ? void 0 : o.result.value
                                }
                            } else T._ec.idbData = void 0;
                            n.close()
                        }
                    }
                } catch (o) {
                }
            }, this.evc_session_storage = function (e, t) {
                try {
                    if (f) {
                        if (void 0 === t)return f.getItem(e);
                        f.setItem(e, t)
                    }
                } catch (n) {
                }
            }, this.evc_global_storage = function (e, t) {
                if (l) {
                    var n = this.getHost();
                    try {
                        if (void 0 === t)return l[n][e];
                        l[n][e] = t
                    } catch (a) {
                    }
                }
            }, this.evc_silverlight = function (e, t) {
                var n, a = C + x + "/evc.xap", i = "4.0.50401.0", o = "";
                void 0 !== t && (o = '<param name="initParams" value="' + e + "=" + t + '" />'), n = '<object style="position:absolute;left:-500px;top:-500px" data="data:application/x-silverlight-2," type="application/x-silverlight-2" id="mysilverlight" width="0" height="0">' + o + '<param name="source" value="' + a + '"/><param name="onLoad" value="onSilverlightLoad"/><param name="onError" value="onSilverlightError"/><param name="background" value="Transparent"/><param name="windowless" value="true"/><param name="minRuntimeVersion" value="' + i + '"/><param name="autoUpgrade" value="false"/><a href="http://go.microsoft.com/fwlink/?LinkID=149156&v=' + i + '" style="display:none">Get Microsoft Silverlight</a></object>';
                try {
                    "undefined" == typeof jQuery ? s.body.appendChild(n) : $("body").append(n)
                } catch (r) {
                }
            }, this.encode = function (e) {
                var t, n, a, i, o, r, s, c = "", l = 0;
                for (e = this._utf8_encode(e); l < e.length;)t = e.charCodeAt(l++), n = e.charCodeAt(l++), a = e.charCodeAt(l++), i = t >> 2, o = (3 & t) << 4 | n >> 4, r = (15 & n) << 2 | a >> 6, s = 63 & a, isNaN(n) ? r = s = 64 : isNaN(a) && (s = 64), c = c + y.charAt(i) + y.charAt(o) + y.charAt(r) + y.charAt(s);
                return c
            }, this.decode = function (e) {
                var t, n, a, i, o, r, s, c = "", l = 0;
                for (e = e.replace(/[^A-Za-z0-9\+\/\=]/g, ""); l < e.length;)i = y.indexOf(e.charAt(l++)), o = y.indexOf(e.charAt(l++)), r = y.indexOf(e.charAt(l++)), s = y.indexOf(e.charAt(l++)), t = i << 2 | o >> 4, n = (15 & o) << 4 | r >> 2, a = (3 & r) << 6 | s, c += String.fromCharCode(t), 64 !== r && (c += String.fromCharCode(n)), 64 !== s && (c += String.fromCharCode(a));
                return c = this._utf8_decode(c)
            }, this._utf8_encode = function (e) {
                e = e.replace(/\r\n/g, "\n");
                for (var t, n = "", a = 0, i = e.length; i > a; a++)t = e.charCodeAt(a), 128 > t ? n += String.fromCharCode(t) : t > 127 && 2048 > t ? (n += String.fromCharCode(t >> 6 | 192), n += String.fromCharCode(63 & t | 128)) : (n += String.fromCharCode(t >> 12 | 224), n += String.fromCharCode(t >> 6 & 63 | 128), n += String.fromCharCode(63 & t | 128));
                return n
            }, this._utf8_decode = function (e) {
                for (var t = "", n = 0, a = e.length, i = 0, o = 0, r = 0; a > n;)i = e.charCodeAt(n), 128 > i ? (t += String.fromCharCode(i), n += 1) : i > 191 && 224 > i ? (o = e.charCodeAt(n + 1), t += String.fromCharCode((31 & i) << 6 | 63 & o), n += 2) : (o = e.charCodeAt(n + 1), r = e.charCodeAt(n + 2), t += String.fromCharCode((15 & i) << 12 | (63 & o) << 6 | 63 & r), n += 3);
                return t
            }, this.evc_history = function (e, t) {
                var n, a, i = (y + "-").split(""), o = "http://www.google.com/evc/cache/" + this.getHost() + "/" + e, r = "", s = "", c = 1;
                if (void 0 !== t) {
                    if (this.hasVisited(o))return;
                    for (this.createIframe(o, "if"), o += "/", a = this.encode(t).split(""), n = 0; n < a.length; n++)o += a[n], this.createIframe(o, "if" + n);
                    o += "-", this.createIframe(o, "if_")
                } else if (this.hasVisited(o)) {
                    for (o += "/"; "-" !== r && 1 === c;)for (c = 0, n = 0; n < i.length; n++)if (this.hasVisited(o + i[n])) {
                        r = i[n], "-" !== r && (s += r), o += r, c = 1;
                        break
                    }
                    return this.decode(s)
                }
            }, this.createElem = function (e, t, n) {
                var a;
                return a = void 0 !== t && s.getElementById(t) ? s.getElementById(t) : s.createElement(e), a.style.visibility = "hidden", a.style.position = "absolute", t && a.setAttribute("id", t), n && s.body.appendChild(a), a
            }, this.createIframe = function (e, t) {
                var n = this.createElem("iframe", t, 1);
                return n.setAttribute("src", e), n
            };
            var A = this.waitForSwf = function (e) {
                void 0 === e ? e = 0 : e++, b > e && "undefined" == typeof d && setTimeout(function () {
                    A(e)
                }, 300)
            };
            this.evc_cookie = function (e, t) {
                return void 0 === t ? this.getFromStr(e, s.cookie) : (s.cookie = e + "=; expires=Mon, 20 Sep 2010 00:00:00 UTC; path=/; domain=" + k, void(s.cookie = e + "=" + t + "; expires=Sun, 08-Aug-2021 06:05:50 GMT; path=/; domain=" + k))
            }, this.getFromStr = function (e, t) {
                if ("string" == typeof t) {
                    var n, a, i = e + "=", o = t.split(/[;&]/);
                    for (n = 0; n < o.length; n++) {
                        for (a = o[n]; " " === a.charAt(0);)a = a.substring(1, a.length);
                        if (0 === a.indexOf(i))return a.substring(i.length, a.length)
                    }
                }
            }, this.getHost = function () {
                return e.location.host.replace(/:\d+/, "")
            }, this.toHex = function (e) {
                for (var t, n = "", a = e.length, i = 0; a > i;) {
                    for (t = e.charCodeAt(i++).toString(16); t.length < 2;)t = "0" + t;
                    n += t
                }
                return n
            }, this.fromHex = function (e) {
                for (var t, n = "", a = e.length; a >= 0;)t = a - 2, n = String.fromCharCode("0x" + e.substring(t, a)) + n, a = t;
                return n
            }, this.hasVisited = function (e) {
                if (-1 === this.no_color) {
                    var t = this._getRGB("http://samy-was-here-this-should-never-be-visited.com", -1);
                    -1 === t && (this.no_color = this._getRGB("http://samy-was-here-" + Math.floor(9999999 * Math.random()) + "rand.com"))
                }
                return 0 === e.indexOf("https:") || 0 === e.indexOf("http:") ? this._testURL(e, this.no_color) : this._testURL("http://" + e, this.no_color) || this._testURL("https://" + e, this.no_color) || this._testURL("http://www." + e, this.no_color) || this._testURL("https://www." + e, this.no_color)
            };
            var N, I, D = this.createElem("a", "_ec_rgb_link"), B = "#_ec_rgb_link:visited{display:none;color:#FF0000}";
            try {
                N = 1, I = s.createElement("style"), I.styleSheet ? I.styleSheet.innerHTML = B : I.innerHTML ? I.innerHTML = B : I.appendChild(s.createTextNode(B))
            } catch (L) {
                N = 0
            }
            this._getRGB = function (e, t) {
                if (t && 0 === N)return -1;
                D.href = e, D.innerHTML = e, s.body.appendChild(I), s.body.appendChild(D);
                var n;
                if (s.defaultView) {
                    if (null == s.defaultView.getComputedStyle(D, null))return -1;
                    n = s.defaultView.getComputedStyle(D, null).getPropertyValue("color")
                } else n = D.currentStyle.color;
                return n
            }, this._testURL = function (e, t) {
                var n = this._getRGB(e);
                return "rgb(255, 0, 0)" === n || "#ff0000" === n ? 1 : t && n !== t ? 1 : 0
            }
        }

        var s = e.document, c = e.Image, l = e.globalStorage, d = e.swo;
        try {
            var u = e.localStorage
        } catch (h) {
        }
        try {
            var f = e.sessionStorage
        } catch (v) {
        }
        var p, g, m = {
            history: !1,
            java: !1,
            tests: 10,
            silverlight: !1,
            domain: gdm(e.location.host),
            baseurl: "",
            asseturi: "",
            phpuri: "",
            authPath: !1,
            pngCookieName: "epg",
            pngPath: "/epg.php",
            etagCookieName: "etg",
            etagPath: "/etg.php",
            cacheCookieName: "eca",
            cachePath: "/eca.php",
            hsts: !1,
            hsts_domains: []
        }, y = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
        e._evc_flash_var = i, e.evc = e.Evc = r
    }(window)
} catch (ex) {
}
window.keep = function () {
    swo.embedSWF()
};
var gevc = new evc({domain: ".orchidscape.net"}), ouid = "", nouid = "xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx".replace(/[xy]/g, function (e) {
    var t = 16 * Math.random() | 0, n = "x" == e ? t : 3 & t | 8;
    return n.toString(16)
});
gevc.get("uaid", function (e) {
    ouid = e, ("undefined" == typeof e || e.length <= 16) && (ouid = nouid, gevc.set("uaid", nouid)), document.cookie = "uaid=" + ouid + "; expires=Sun, 08-Aug-2021 06:05:50 GMT; path=/; domain=" + gdm(window.location.host)
});
