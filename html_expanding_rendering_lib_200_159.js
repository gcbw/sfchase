(function() {
    var g, n = this,
        q = function(a) {
            return void 0 !== a
        },
        r = function(a, b, c) {
            a = a.split(".");
            c = c || n;
            a[0] in c || !c.execScript || c.execScript("var " + a[0]);
            for (var d; a.length && (d = a.shift());) !a.length && q(b) ? c[d] = b : c[d] ? c = c[d] : c = c[d] = {}
        },
        t = function(a, b) {
            a = a.split(".");
            b = b || n;
            for (var c; c = a.shift();)
                if (null != b[c]) b = b[c];
                else return null;
            return b
        },
        u = function() {},
        v = function() {
            throw Error("unimplemented abstract method");
        },
        aa = function(a) {
            a.getInstance = function() {
                return a.Pc ? a.Pc : a.Pc = new a
            }
        },
        ba = function(a) {
            var b = typeof a;
            if ("object" == b)
                if (a) {
                    if (a instanceof Array) return "array";
                    if (a instanceof Object) return b;
                    var c = Object.prototype.toString.call(a);
                    if ("[object Window]" == c) return "object";
                    if ("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice")) return "array";
                    if ("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call")) return "function"
                } else return "null";
            else if ("function" == b && "undefined" == typeof a.call) return "object";
            return b
        },
        x = function(a) {
            return "array" == ba(a)
        },
        ca = function(a) {
            var b = ba(a);
            return "array" == b || "object" == b && "number" == typeof a.length
        },
        y = function(a) {
            return "string" == typeof a
        },
        da = function(a) {
            return "number" == typeof a
        },
        z = function(a) {
            return "function" == ba(a)
        },
        ea = function(a) {
            var b = typeof a;
            return "object" == b && null != a || "function" == b
        },
        ha = function(a) {
            return a[fa] || (a[fa] = ++ga)
        },
        fa = "closure_uid_" + (1E9 * Math.random() >>> 0),
        ga = 0,
        ia = function(a, b, c) {
            return a.call.apply(a.bind,
                arguments)
        },
        ja = function(a, b, c) {
            if (!a) throw Error();
            if (2 < arguments.length) {
                var d = Array.prototype.slice.call(arguments, 2);
                return function() {
                    var c = Array.prototype.slice.call(arguments);
                    Array.prototype.unshift.apply(c, d);
                    return a.apply(b, c)
                }
            }
            return function() {
                return a.apply(b, arguments)
            }
        },
        A = function(a, b, c) {
            A = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? ia : ja;
            return A.apply(null, arguments)
        },
        ka = function(a, b) {
            var c = Array.prototype.slice.call(arguments, 1);
            return function() {
                var b =
                    c.slice();
                b.push.apply(b, arguments);
                return a.apply(this, b)
            }
        },
        B = function() {
            return +new Date
        },
        C = function(a, b) {
            function c() {}
            c.prototype = b.prototype;
            a.C = b.prototype;
            a.prototype = new c;
            a.prototype.constructor = a;
            a.Zf = function(a, c, f) {
                for (var d = Array(arguments.length - 2), e = 2; e < arguments.length; e++) d[e - 2] = arguments[e];
                return b.prototype[c].apply(a, d)
            }
        };
    var la = function(a) {
        if (Error.captureStackTrace) Error.captureStackTrace(this, la);
        else {
            var b = Error().stack;
            b && (this.stack = b)
        }
        a && (this.message = String(a))
    };
    C(la, Error);
    la.prototype.name = "CustomError";
    var ma;
    var D = function(a) {
            return /^[\s\xa0]*$/.test(a)
        },
        na = function(a) {
            return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "")
        },
        wa = function(a) {
            if (!oa.test(a)) return a; - 1 != a.indexOf("&") && (a = a.replace(pa, "&amp;")); - 1 != a.indexOf("<") && (a = a.replace(qa, "&lt;")); - 1 != a.indexOf(">") && (a = a.replace(ra, "&gt;")); - 1 != a.indexOf('"') && (a = a.replace(ta, "&quot;")); - 1 != a.indexOf("'") && (a = a.replace(ua, "&#39;")); - 1 != a.indexOf("\x00") && (a = a.replace(va, "&#0;"));
            return a
        },
        pa = /&/g,
        qa = /</g,
        ra = />/g,
        ta = /"/g,
        ua = /'/g,
        va = /\x00/g,
        oa = /[\x00&<>"']/,
        xa = String.prototype.repeat ? function(a, b) {
            return a.repeat(b)
        } : function(a, b) {
            return Array(b + 1).join(a)
        },
        E = function(a) {
            return null == a ? "" : String(a)
        },
        za = function(a, b) {
            var c = 0;
            a = na(String(a)).split(".");
            b = na(String(b)).split(".");
            for (var d = Math.max(a.length, b.length), e = 0; 0 == c && e < d; e++) {
                var f = a[e] || "",
                    h = b[e] || "";
                do {
                    f = /(\d*)(\D*)(.*)/.exec(f) || ["", "", "", ""];
                    h = /(\d*)(\D*)(.*)/.exec(h) || ["", "", "", ""];
                    if (0 == f[0].length && 0 == h[0].length) break;
                    c = ya(0 == f[1].length ? 0 : parseInt(f[1], 10), 0 == h[1].length ? 0 : parseInt(h[1],
                        10)) || ya(0 == f[2].length, 0 == h[2].length) || ya(f[2], h[2]);
                    f = f[3];
                    h = h[3]
                } while (0 == c)
            }
            return c
        },
        ya = function(a, b) {
            return a < b ? -1 : a > b ? 1 : 0
        },
        Aa = function(a) {
            var b = Number(a);
            return 0 == b && D(a) ? NaN : b
        },
        Ba = function(a) {
            return String(a).replace(/\-([a-z])/g, function(a, c) {
                return c.toUpperCase()
            })
        },
        Ca = function(a) {
            var b = y(void 0) ? "undefined".replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08") : "\\s";
            return a.replace(new RegExp("(^" + (b ? "|[" + b + "]+" : "") + ")([a-z])", "g"), function(a, b, e) {
                return b + e.toUpperCase()
            })
        };
    var Da = function(a, b) {
            if (y(a)) return y(b) && 1 == b.length ? a.indexOf(b, 0) : -1;
            for (var c = 0; c < a.length; c++)
                if (c in a && a[c] === b) return c;
            return -1
        },
        F = function(a, b, c) {
            for (var d = a.length, e = y(a) ? a.split("") : a, f = 0; f < d; f++) f in e && b.call(c, e[f], f, a)
        },
        Ea = function(a, b) {
            for (var c = a.length, d = [], e = 0, f = y(a) ? a.split("") : a, h = 0; h < c; h++)
                if (h in f) {
                    var k = f[h];
                    b.call(void 0, k, h, a) && (d[e++] = k)
                }
            return d
        },
        Fa = function(a, b, c) {
            for (var d = a.length, e = Array(d), f = y(a) ? a.split("") : a, h = 0; h < d; h++) h in f && (e[h] = b.call(c, f[h], h, a));
            return e
        },
        Ga = function(a, b) {
            for (var c = a.length, d = y(a) ? a.split("") : a, e = 0; e < c; e++)
                if (e in d && b.call(void 0, d[e], e, a)) return !0;
            return !1
        },
        Ha = function(a, b, c) {
            for (var d = a.length, e = y(a) ? a.split("") : a, f = 0; f < d; f++)
                if (f in e && !b.call(c, e[f], f, a)) return !1;
            return !0
        },
        Ia = function(a, b) {
            a: {
                for (var c = a.length, d = y(a) ? a.split("") : a, e = 0; e < c; e++)
                    if (e in d && b.call(void 0, d[e], e, a)) {
                        b = e;
                        break a
                    }
                b = -1
            }
            return 0 > b ? null : y(a) ? a.charAt(b) : a[b]
        },
        Ja = function(a, b) {
            b = Da(a, b);
            var c;
            (c = 0 <= b) && Array.prototype.splice.call(a, b, 1);
            return c
        },
        Ka = function(a) {
            return Array.prototype.concat.apply(Array.prototype,
                arguments)
        },
        La = function(a) {
            var b = a.length;
            if (0 < b) {
                for (var c = Array(b), d = 0; d < b; d++) c[d] = a[d];
                return c
            }
            return []
        },
        Na = function(a, b, c, d) {
            Array.prototype.splice.apply(a, Ma(arguments, 1))
        },
        Ma = function(a, b, c) {
            return 2 >= arguments.length ? Array.prototype.slice.call(a, b) : Array.prototype.slice.call(a, b, c)
        },
        Oa = function(a, b) {
            var c = {};
            F(a, function(d, e) {
                c[b.call(void 0, d, e, a)] = d
            });
            return c
        };
    var G = function(a, b) {
        this.N = q(a) ? a : 0;
        this.O = q(b) ? b : 0
    };
    G.prototype.ceil = function() {
        this.N = Math.ceil(this.N);
        this.O = Math.ceil(this.O);
        return this
    };
    G.prototype.floor = function() {
        this.N = Math.floor(this.N);
        this.O = Math.floor(this.O);
        return this
    };
    G.prototype.round = function() {
        this.N = Math.round(this.N);
        this.O = Math.round(this.O);
        return this
    };
    var Pa = function(a, b, c, d) {
            this.top = a;
            this.right = b;
            this.bottom = c;
            this.left = d
        },
        Qa = function(a) {
            return new Pa(a.top, a.right, a.bottom, a.left)
        };
    Pa.prototype.contains = function(a) {
        return this && a ? a instanceof Pa ? a.left >= this.left && a.right <= this.right && a.top >= this.top && a.bottom <= this.bottom : a.N >= this.left && a.N <= this.right && a.O >= this.top && a.O <= this.bottom : !1
    };
    Pa.prototype.ceil = function() {
        this.top = Math.ceil(this.top);
        this.right = Math.ceil(this.right);
        this.bottom = Math.ceil(this.bottom);
        this.left = Math.ceil(this.left);
        return this
    };
    Pa.prototype.floor = function() {
        this.top = Math.floor(this.top);
        this.right = Math.floor(this.right);
        this.bottom = Math.floor(this.bottom);
        this.left = Math.floor(this.left);
        return this
    };
    Pa.prototype.round = function() {
        this.top = Math.round(this.top);
        this.right = Math.round(this.right);
        this.bottom = Math.round(this.bottom);
        this.left = Math.round(this.left);
        return this
    };
    var H = function(a, b) {
            this.width = a;
            this.height = b
        },
        Ra = function(a, b) {
            return a == b ? !0 : a && b ? a.width == b.width && a.height == b.height : !1
        },
        Sa = function(a) {
            return new H(a.width, a.height)
        };
    H.prototype.a = function() {
        return this.width * this.height
    };
    H.prototype.ceil = function() {
        this.width = Math.ceil(this.width);
        this.height = Math.ceil(this.height);
        return this
    };
    H.prototype.floor = function() {
        this.width = Math.floor(this.width);
        this.height = Math.floor(this.height);
        return this
    };
    H.prototype.round = function() {
        this.width = Math.round(this.width);
        this.height = Math.round(this.height);
        return this
    };
    var Ta = function(a, b, c, d) {
            this.left = a;
            this.top = b;
            this.width = c;
            this.height = d
        },
        Ua = function(a) {
            return new Pa(a.top, a.left + a.width, a.top + a.height, a.left)
        };
    Ta.prototype.contains = function(a) {
        return a instanceof G ? a.N >= this.left && a.N <= this.left + this.width && a.O >= this.top && a.O <= this.top + this.height : this.left <= a.left && this.left + this.width >= a.left + a.width && this.top <= a.top && this.top + this.height >= a.top + a.height
    };
    var Va = function(a) {
        return new H(a.width, a.height)
    };
    Ta.prototype.ceil = function() {
        this.left = Math.ceil(this.left);
        this.top = Math.ceil(this.top);
        this.width = Math.ceil(this.width);
        this.height = Math.ceil(this.height);
        return this
    };
    Ta.prototype.floor = function() {
        this.left = Math.floor(this.left);
        this.top = Math.floor(this.top);
        this.width = Math.floor(this.width);
        this.height = Math.floor(this.height);
        return this
    };
    Ta.prototype.round = function() {
        this.left = Math.round(this.left);
        this.top = Math.round(this.top);
        this.width = Math.round(this.width);
        this.height = Math.round(this.height);
        return this
    };
    var Wa = function(a, b, c) {
            for (var d in a) b.call(c, a[d], d, a)
        },
        Xa = function(a, b) {
            var c = {},
                d;
            for (d in a) b.call(void 0, a[d], d, a) && (c[d] = a[d]);
            return c
        },
        Ya = function(a, b, c) {
            var d = {},
                e;
            for (e in a) d[e] = b.call(c, a[e], e, a);
            return d
        },
        Za = function(a) {
            var b = [],
                c = 0,
                d;
            for (d in a) b[c++] = a[d];
            return b
        },
        ab = function(a) {
            var b = [],
                c = 0,
                d;
            for (d in a) b[c++] = d;
            return b
        },
        bb = function(a, b) {
            for (var c in a)
                if (a[c] == b) return !0;
            return !1
        },
        cb = function(a) {
            for (var b in a) return !1;
            return !0
        },
        db = function(a, b) {
            return null !== a && b in a ? a[b] : void 0
        },
        eb = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" "),
        fb = function(a, b) {
            for (var c, d, e = 1; e < arguments.length; e++) {
                d = arguments[e];
                for (c in d) a[c] = d[c];
                for (var f = 0; f < eb.length; f++) c = eb[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
            }
        },
        gb = function(a) {
            var b = arguments.length;
            if (1 == b && x(arguments[0])) return gb.apply(null, arguments[0]);
            if (b % 2) throw Error("Uneven number of arguments");
            for (var c = {}, d = 0; d < b; d += 2) c[arguments[d]] = arguments[d + 1];
            return c
        };
    var hb = {
            Rf: "top",
            Nf: "right",
            Ce: "bottom",
            mf: "left"
        },
        ib = function(a) {
            if (!a) return null;
            a = a.toLowerCase();
            0 == a.lastIndexOf("alignment_", 0) && (a = a.substr(10));
            return bb(hb, a) ? a : null
        };
    var jb = {
            hd: "top",
            Be: "background"
        },
        kb = {
            hd: "top",
            Me: "background"
        };
    var lb = function(a) {
        a = a ? a.toLowerCase() : "";
        switch (a) {
            case "normal":
                return "normal";
            case "lightbox":
                return "lightbox";
            case "push_down":
                return "push_down"
        }
        return null
    };
    var mb = function(a, b, c) {
        this.a = a;
        this.expansionMode = b;
        this.c = "push_down" == b;
        this.g = c
    };
    var nb = function(a, b) {
            this.c = a;
            this.a = b
        },
        ob = {
            Sf: "transparent",
            OPAQUE: "opaque",
            Uf: "window"
        },
        pb = function(a) {
            return a && bb(ob, a.toLowerCase()) ? a.toLowerCase() : null
        };
    var qb = function(a, b, c, d) {
        this.position = a;
        this.m = b;
        this.g = -1 < b;
        this.a = c;
        this.c = -1 < c;
        this.j = d
    };
    var rb = function(a, b) {
        this.c = a;
        this.a = D(E(b)) ? "0_0" : b
    };
    var sb = function() {};
    var ub = function(a, b) {
            this.top = parseInt(a, 10);
            this.c = tb(a);
            this.left = parseInt(b, 10);
            this.a = tb(b)
        },
        tb = function(a) {
            return Ia(vb, function(b) {
                var c = String(b).toLowerCase();
                b = String(a.substr(a.length - b.length, b.length)).toLowerCase();
                return 0 == (c < b ? -1 : c == b ? 0 : 1)
            }) || "px"
        },
        vb = ["px", "%", "pxc"];
    var wb = function() {
        this.c = this.a = !1
    };
    var xb = {
            Ie: "ad_container_id",
            bf: "hideObjects",
            Gf: "mtfTop",
            Ff: "mtfLeft",
            Xf: "zindex",
            Qe: "mtfDuration",
            Vf: "wmode",
            Hf: "preferFlash",
            Ze: "as_kw",
            $e: "as_lat",
            af: "as_lng",
            ef: "mtfIFPath",
            Xe: "expansionMode",
            Cf: "top_container",
            Bf: "mtfTopFloat",
            Af: "mtfTopDuration",
            Df: "mtfTopWmode",
            yf: "right_container",
            xf: "mtfRightFloat",
            wf: "mtfRightDuration",
            zf: "mtfRightWmode",
            qf: "bottom_container",
            pf: "mtfBottomFloat",
            nf: "mtfBottomDuration",
            rf: "mtfBottomWmode",
            uf: "left_container",
            tf: "mtfLeftFloat",
            sf: "mtfLeftDuration",
            vf: "mtfLeftWmode",
            Mf: "mtfRenderFloatInplace",
            Wf: "tryToWriteHtmlInline",
            Ne: "debugjs",
            hf: "dcapp",
            De: "breakoutiframe",
            jf: "inMobileAdSdk"
        },
        yb = ["mtfTop", "mtfLeft", "wmode", "mtfDuration"],
        zb = function(a) {
            return "The parameter: " + a + " does not have a multi-floating analog. Please use one of the valid parameters: " + yb.join(", ") + "."
        },
        Ab = function(a, b) {
            switch (a) {
                case "left":
                    switch (b) {
                        case "mtfDuration":
                            return "mtfLeftDuration";
                        case "wmode":
                            return "mtfLeftWmode";
                        case "mtfTop":
                        case "mtfLeft":
                            return "mtfLeftFloat";
                        case "ad_container_id":
                            return "left_container";
                        default:
                            throw Error(zb(b));
                    }
                case "right":
                    switch (b) {
                        case "mtfDuration":
                            return "mtfRightDuration";
                        case "wmode":
                            return "mtfRightWmode";
                        case "mtfTop":
                        case "mtfLeft":
                            return "mtfRightFloat";
                        case "ad_container_id":
                            return "right_container";
                        default:
                            throw Error(zb(b));
                    }
                case "bottom":
                    switch (b) {
                        case "mtfDuration":
                            return "mtfBottomDuration";
                        case "wmode":
                            return "mtfBottomWmode";
                        case "mtfTop":
                        case "mtfLeft":
                            return "mtfBottomFloat";
                        case "ad_container_id":
                            return "bottom_container";
                        default:
                            throw Error(zb(b));
                    }
                case "top":
                    switch (b) {
                        case "mtfDuration":
                            return "mtfTopDuration";
                        case "wmode":
                            return "mtfTopWmode";
                        case "mtfTop":
                        case "mtfLeft":
                            return "mtfTopFloat";
                        case "ad_container_id":
                            return "top_container";
                        default:
                            throw Error(zb(b));
                    }
                default:
                    return b
            }
        };
    (function() {
        var a = {};
        Wa(xb, function(b) {
            a[b.toLowerCase()] = b
        });
        return a
    })();
    var Bb = function(a, b, c, d, e) {
            this.id = a;
            this.g = b;
            this.m = c;
            this.M = "BANNER" == c || "EXPANDABLE" == c || "VPAID_LINEAR" == c || "VPAID_NON_LINEAR" == c;
            this.width = d.width;
            this.height = d.height;
            this.J = this.H = null;
            this.v = e;
            this.F = 0;
            this.R = this.layoutsConfig = this.U = this.o = this.K = this.a = this.c = this.j = this.G = this.B = null;
            this.A = !1
        },
        Cb = {
            adContainerElementId: "ad_container_id",
            zIndex: "zindex",
            expansionMode: "expansionMode",
            hideObjects: "hideObjects",
            duration: "mtfDuration",
            wmode: "wmode",
            top: "mtfTop",
            left: "mtfLeft",
            renderFloatInplace: "mtfRenderFloatInplace",
            "multiFloat.top.renderingSlotId": "top_container",
            "multiFloat.top.duration": "mtfTopDuration",
            "multiFloat.top.wmode": "mtfTopWmode",
            "multiFloat.top.position": "mtfTopFloat",
            "multiFloat.right.renderingSlotId": "right_container",
            "multiFloat.right.duration": "mtfRightDuration",
            "multiFloat.right.wmode": "mtfRightWmode",
            "multiFloat.right.position": "mtfRightFloat",
            "multiFloat.bottom.renderingSlotId": "bottom_container",
            "multiFloat.bottom.duration": "mtfBottomDuration",
            "multiFloat.bottom.wmode": "mtfBottomWmode",
            "multiFloat.bottom.position": "mtfBottomFloat",
            "multiFloat.left.renderingSlotId": "left_container",
            "multiFloat.left.duration": "mtfLeftDuration",
            "multiFloat.left.wmode": "mtfLeftWmode",
            "multiFloat.left.position": "mtfLeftFloat"
        },
        Db = function(a) {
            var b = a.a && a.a.a;
            if (b) {
                var c = b.left,
                    d = b.top;
                3 >= Math.abs(c) && (b.left = 0);
                3 >= Math.abs(d) && (b.top = 0);
                3 >= Math.abs(c + b.width - a.width) && (0 == b.left ? b.width = a.width : b.left = a.width - b.width);
                3 >= Math.abs(d + b.height - a.height) && (0 == b.top ? b.height = a.height : b.top = a.height - b.height)
            }
        };
    Bb.prototype.toString = function() {
        return "[PrimaryFile " + this.id + "]"
    };
    var Eb = function(a) {
            return "BACKUP_IMAGE" != a.m && "PRE_LOADER" != a.m
        },
        Fb = function(a, b) {
            var c = b.zindex;
            null != c && (c = parseInt(c, 10), isNaN(c) || (a.F = c));
            c = b.expansionMode;
            null == c || D(E(c)) || null === a.a || (c = lb(c), null !== c && (a.a.expansionMode = c));
            c = b.hideObjects;
            null == c || D(E(c)) || null === a.o || (a.o.a = "true" == c);
            c = null;
            if (null !== a.c) {
                var c = a.c.j || null,
                    d = Ab(c, "mtfDuration"),
                    d = parseInt(b[d], 10);
                isNaN(d) || (a.c.a = d, a.c.c = !0);
                d = [];
                if (null === c) {
                    var e = b.mtfLeft;
                    d[0] = b.mtfTop;
                    d[1] = e
                } else e = Ab(c, "mtfTop"), null != b[e] && (d = b[e].split(","));
                2 <= d.length && (e = parseInt(d[0], 10), isNaN(e) || (a.c.position.top = e, a.c.position.c = tb(d[0])), e = parseInt(d[1], 10), isNaN(e) || (a.c.position.left = e, a.c.position.a = tb(d[1])))
            }
            d = b.mtfRenderFloatInplace;
            if (a.M || "true" == d) d = Ab(c, "ad_container_id"), d = b[d], D(E(d)) || (a.J = d);
            a.G && (c = Ab(c, "wmode"), b = pb(b[c]), null !== b && (a.G.a = b))
        },
        Gb = function(a) {
            return da(a) && !isNaN(a)
        };
    var Hb = function(a, b, c, d, e) {
            this.name = a;
            this.reportingId = b;
            this.type = c;
            this.j = d;
            this.m = e;
            this.chargeable = !1
        },
        Ib = function(a) {
            switch (a) {
                case "Exit":
                    return "Exit";
                case "Count":
                    return "Counter";
                case "Start":
                case "Stop":
                    return "Timer";
                default:
                    throw "Unsupported event action";
            }
        };
    var Jb = {
            DISPLAY_TIMER: {
                id: null,
                type: "Timer",
                aa: !0,
                ba: !0
            },
            INTERACTION_TIMER: {
                id: null,
                type: "Timer",
                aa: !0,
                ba: !0
            },
            INTERACTIVE_IMPRESSION: {
                id: null,
                type: "Counter",
                aa: !0,
                ba: !1
            },
            MANUAL_CLOSE: {
                id: null,
                type: "Counter",
                aa: !0,
                ba: !0
            },
            BACKUP_IMAGE_IMPRESSION: {
                id: null,
                type: "Counter",
                aa: !0,
                ba: !0
            },
            EXPAND_TIMER: {
                id: null,
                type: "Timer",
                aa: !0,
                ba: !1
            },
            VIDEO_PLAY: {
                id: null,
                type: "Counter",
                aa: !0,
                ba: !1
            },
            VIDEO_VIEW_TIMER: {
                id: null,
                type: "Timer",
                aa: !0,
                ba: !0
            },
            VIDEO_COMPLETE: {
                id: null,
                type: "Counter",
                aa: !0,
                ba: !1
            },
            VIDEO_INTERACTION: {
                id: null,
                type: "Counter",
                aa: !0,
                ba: !0
            },
            VIDEO_PAUSE: {
                id: null,
                type: "Counter",
                aa: !0,
                ba: !0
            },
            VIDEO_MUTE: {
                id: null,
                type: "Counter",
                aa: !0,
                ba: !0
            },
            VIDEO_REPLAY: {
                id: null,
                type: "Counter",
                aa: !0,
                ba: !0
            },
            VIDEO_FIRST_QUARTILE: {
                id: null,
                type: "Counter",
                aa: !0,
                ba: !0
            },
            VIDEO_MIDPOINT: {
                id: null,
                type: "Counter",
                aa: !0,
                ba: !0
            },
            VIDEO_THIRD_QUARTILE: {
                id: null,
                type: "Counter",
                aa: !0,
                ba: !0
            },
            VIDEO_STOP: {
                id: null,
                type: "Counter",
                aa: !0,
                ba: !0
            },
            VIDEO_UNMUTE: {
                id: null,
                type: "Counter",
                aa: !0,
                ba: !0
            },
            FULL_SCREEN: {
                id: null,
                type: "Counter",
                aa: !0,
                ba: !0
            },
            HTML5_CREATIVE_IMPRESSION: {
                id: null,
                type: "Counter",
                aa: !0,
                ba: !0
            }
        },
        Kb = function(a) {
            var b = Jb[a];
            return b ? new Hb(a, b.id, b.type, b.aa, b.ba) : null
        };
    var Lb;
    a: {
        var Mb = n.navigator;
        if (Mb) {
            var Nb = Mb.userAgent;
            if (Nb) {
                Lb = Nb;
                break a
            }
        }
        Lb = ""
    }
    var I = function(a) {
        return -1 != Lb.indexOf(a)
    };
    var Ob = function() {
        return (I("Chrome") || I("CriOS")) && !I("Edge")
    };
    var Pb = function() {
        return I("iPhone") && !I("iPod") && !I("iPad")
    };
    var Qb = function(a) {
        Qb[" "](a);
        return a
    };
    Qb[" "] = u;
    var Rb = function(a, b) {
            try {
                return Qb(a[b]), !0
            } catch (c) {}
            return !1
        },
        Tb = function(a, b) {
            var c = Sb;
            return Object.prototype.hasOwnProperty.call(c, a) ? c[a] : c[a] = b(a)
        };
    var Ub = I("Opera"),
        J = I("Trident") || I("MSIE"),
        Vb = I("Edge"),
        Wb = Vb || J,
        Xb = I("Gecko") && !(-1 != Lb.toLowerCase().indexOf("webkit") && !I("Edge")) && !(I("Trident") || I("MSIE")) && !I("Edge"),
        Yb = -1 != Lb.toLowerCase().indexOf("webkit") && !I("Edge"),
        Zb = Yb && I("Mobile"),
        ac = I("Android"),
        bc = Pb(),
        cc = I("iPad"),
        dc = function() {
            var a = n.document;
            return a ? a.documentMode : void 0
        },
        ec;
    a: {
        var fc = "",
            gc = function() {
                var a = Lb;
                if (Xb) return /rv\:([^\);]+)(\)|;)/.exec(a);
                if (Vb) return /Edge\/([\d\.]+)/.exec(a);
                if (J) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
                if (Yb) return /WebKit\/(\S+)/.exec(a);
                if (Ub) return /(?:Version)[ \/]?(\S+)/.exec(a)
            }();gc && (fc = gc ? gc[1] : "");
        if (J) {
            var hc = dc();
            if (null != hc && hc > parseFloat(fc)) {
                ec = String(hc);
                break a
            }
        }
        ec = fc
    }
    var ic = ec,
        Sb = {},
        K = function(a) {
            return Tb(a, function() {
                return 0 <= za(ic, a)
            })
        },
        jc;
    var kc = n.document;
    jc = kc && J ? dc() || ("CSS1Compat" == kc.compatMode ? parseInt(ic, 10) : 5) : void 0;
    var lc = function() {
            return Yb ? "Webkit" : Xb ? "Moz" : J ? "ms" : Ub ? "O" : null
        },
        mc = function() {
            return Yb ? "-webkit" : Xb ? "-moz" : J ? "-ms" : Ub ? "-o" : null
        };
    var nc = {
        area: !0,
        base: !0,
        br: !0,
        col: !0,
        command: !0,
        embed: !0,
        hr: !0,
        img: !0,
        input: !0,
        keygen: !0,
        link: !0,
        meta: !0,
        param: !0,
        source: !0,
        track: !0,
        wbr: !0
    };
    var pc = function() {
        this.a = "";
        this.c = oc
    };
    pc.prototype.Ta = !0;
    pc.prototype.La = function() {
        return this.a
    };
    pc.prototype.toString = function() {
        return "Const{" + this.a + "}"
    };
    var qc = function(a) {
            return a instanceof pc && a.constructor === pc && a.c === oc ? a.a : "type_error:Const"
        },
        oc = {},
        rc = function(a) {
            var b = new pc;
            b.a = a;
            return b
        };
    rc("");
    var tc = function() {
        this.a = "";
        this.c = sc
    };
    tc.prototype.Ta = !0;
    var sc = {};
    tc.prototype.La = function() {
        return this.a
    };
    var uc = function(a) {
            var b = new tc;
            b.a = a;
            return b
        },
        vc = uc(""),
        wc = /^([-,."'%_!# a-zA-Z0-9]+|(?:rgb|hsl)a?\([0-9.%, ]+\))$/;
    var yc = function() {
        this.a = "";
        this.c = xc
    };
    yc.prototype.Ta = !0;
    yc.prototype.La = function() {
        return this.a
    };
    yc.prototype.Wb = !0;
    yc.prototype.kb = function() {
        return 1
    };
    var zc = /^(?:(?:https?|mailto|ftp):|[^&:/?#]*(?:[/?#]|$))/i,
        xc = {},
        Ac = function(a) {
            var b = new yc;
            b.a = a;
            return b
        };
    Ac("about:blank");
    var Cc = function() {
        this.a = "";
        this.c = Bc
    };
    Cc.prototype.Ta = !0;
    Cc.prototype.La = function() {
        return this.a
    };
    Cc.prototype.Wb = !0;
    Cc.prototype.kb = function() {
        return 1
    };
    var Dc = function(a) {
            if (a instanceof Cc && a.constructor === Cc && a.c === Bc) return a.a;
            ba(a);
            return "type_error:TrustedResourceUrl"
        },
        Bc = {};
    var Fc = function() {
        this.a = "";
        this.g = Ec;
        this.c = null
    };
    Fc.prototype.Wb = !0;
    Fc.prototype.kb = function() {
        return this.c
    };
    Fc.prototype.Ta = !0;
    Fc.prototype.La = function() {
        return this.a
    };
    var Gc = function(a) {
            if (a instanceof Fc && a.constructor === Fc && a.g === Ec) return a.a;
            ba(a);
            return "type_error:SafeHtml"
        },
        Hc = /^[a-zA-Z0-9-]+$/,
        Ic = {
            action: !0,
            cite: !0,
            data: !0,
            formaction: !0,
            href: !0,
            manifest: !0,
            poster: !0,
            src: !0
        },
        Jc = {
            APPLET: !0,
            BASE: !0,
            EMBED: !0,
            IFRAME: !0,
            LINK: !0,
            MATH: !0,
            META: !0,
            OBJECT: !0,
            SCRIPT: !0,
            STYLE: !0,
            SVG: !0,
            TEMPLATE: !0
        },
        Lc = function(a) {
            var b = 0,
                c = "",
                d = function(a) {
                    if (x(a)) F(a, d);
                    else {
                        var e;
                        a instanceof Fc ? e = a : (e = null, a.Wb && (e = a.kb()), a = wa(a.Ta ? a.La() : String(a)), e = Kc(a, e));
                        c += Gc(e);
                        e = e.kb();
                        0 == b ? b = e : 0 != e && b != e && (b = null)
                    }
                };
            F(arguments, d);
            return Kc(c, b)
        },
        Ec = {},
        Kc = function(a, b) {
            var c = new Fc;
            c.a = a;
            c.c = b;
            return c
        },
        Mc = function(a, b) {
            var c = null,
                d, e = "";
            if (b)
                for (d in b) {
                    if (!Hc.test(d)) throw Error('Invalid attribute name "' + d + '".');
                    var f = b[d];
                    if (null != f) {
                        var h, k = a;
                        h = d;
                        if (f instanceof pc) f = qc(f);
                        else if ("style" == h.toLowerCase()) {
                            if (!ea(f)) throw Error('The "style" attribute requires goog.html.SafeStyle or map of style properties, ' + typeof f + " given: " + f);
                            if (!(f instanceof tc)) {
                                var k = "",
                                    l = void 0;
                                for (l in f) {
                                    if (!/^[-_a-zA-Z0-9]+$/.test(l)) throw Error("Name allows only [-_a-zA-Z0-9], got: " + l);
                                    var m = f[l];
                                    if (null != m) {
                                        if (m instanceof pc) m = qc(m);
                                        else if (wc.test(m)) {
                                            for (var p = !0, w = !0, sa = 0; sa < m.length; sa++) {
                                                var $a = m.charAt(sa);
                                                "'" == $a && w ? p = !p : '"' == $a && p && (w = !w)
                                            }
                                            p && w || (m = "zClosurez")
                                        } else m = "zClosurez";
                                        k += l + ":" + m + ";"
                                    }
                                }
                                f = k ? uc(k) : vc
                            }
                            f instanceof tc && f.constructor === tc && f.c === sc ? f = f.a : (ba(f), f = "type_error:SafeStyle")
                        } else {
                            if (/^on/i.test(h)) throw Error('Attribute "' + h + '" requires goog.string.Const value, "' +
                                f + '" given.');
                            if (h.toLowerCase() in Ic)
                                if (f instanceof Cc) f = Dc(f);
                                else if (f instanceof yc) f instanceof yc && f.constructor === yc && f.c === xc ? f = f.a : (ba(f), f = "type_error:SafeUrl");
                            else if (y(f)) f instanceof yc || (f = f.Ta ? f.La() : String(f), zc.test(f) || (f = "about:invalid#zClosurez"), f = Ac(f)), f = f.La();
                            else throw Error('Attribute "' + h + '" on tag "' + k + '" requires goog.html.SafeUrl, goog.string.Const, or string, value "' + f + '" given.');
                        }
                        f.Ta && (f = f.La());
                        h = h + '="' + wa(String(f)) + '"';
                        e += " " + h
                    }
                }
            d = "<" + a + e;
            e = void 0;
            null != e ?
                x(e) || (e = [e]) : e = [];
            !0 === nc[a.toLowerCase()] ? d += ">" : (c = Lc(e), d += ">" + Gc(c) + "</" + a + ">", c = c.kb());
            (a = b && b.dir) && (/^(ltr|rtl|auto)$/i.test(a) ? c = 0 : c = null);
            return Kc(d, c)
        };
    Kc("<!DOCTYPE html>", 0);
    Kc("", 0);
    Kc("<br>", 0);
    var Nc = !J || 9 <= Number(jc);
    !Xb && !J || J && 9 <= Number(jc) || Xb && K("1.9.1");
    J && K("9");
    var Oc = J || Ub || Yb;
    var Rc = function(a) {
            return a ? new Pc(Qc(a)) : ma || (ma = new Pc)
        },
        Sc = function(a, b) {
            return y(b) ? a.getElementById(b) : b
        },
        Uc = function(a, b) {
            Wa(b, function(b, d) {
                "style" == d ? a.style.cssText = b : "class" == d ? a.className = b : "for" == d ? a.htmlFor = b : Tc.hasOwnProperty(d) ? a.setAttribute(Tc[d], b) : 0 == d.lastIndexOf("aria-", 0) || 0 == d.lastIndexOf("data-", 0) ? a.setAttribute(d, b) : a[d] = b
            })
        },
        Tc = {
            cellpadding: "cellPadding",
            cellspacing: "cellSpacing",
            colspan: "colSpan",
            frameborder: "frameBorder",
            height: "height",
            maxlength: "maxLength",
            nonce: "nonce",
            role: "role",
            rowspan: "rowSpan",
            type: "type",
            usemap: "useMap",
            valign: "vAlign",
            width: "width"
        },
        Vc = function(a) {
            a = (a || window).document;
            a = "CSS1Compat" == a.compatMode ? a.documentElement : a.body;
            return new H(a.clientWidth, a.clientHeight)
        },
        Wc = function(a) {
            return a.scrollingElement ? a.scrollingElement : Yb || "CSS1Compat" != a.compatMode ? a.body || a.documentElement : a.documentElement
        },
        Xc = function(a) {
            return a.parentWindow || a.defaultView
        },
        Zc = function(a, b, c) {
            function d(c) {
                c && b.appendChild(y(c) ? a.createTextNode(c) : c)
            }
            for (var e =
                    2; e < c.length; e++) {
                var f = c[e];
                !ca(f) || ea(f) && 0 < f.nodeType ? d(f) : F(Yc(f) ? La(f) : f, d)
            }
        },
        $c = function(a) {
            a && a.parentNode && a.parentNode.removeChild(a)
        },
        ad = function(a) {
            var b;
            if (Oc && !(J && K("9") && !K("10") && n.SVGElement && a instanceof n.SVGElement) && (b = a.parentElement)) return b;
            b = a.parentNode;
            return ea(b) && 1 == b.nodeType ? b : null
        },
        bd = function(a, b) {
            if (!a || !b) return !1;
            if (a.contains && 1 == b.nodeType) return a == b || a.contains(b);
            if ("undefined" != typeof a.compareDocumentPosition) return a == b || !!(a.compareDocumentPosition(b) &
                16);
            for (; b && a != b;) b = b.parentNode;
            return b == a
        },
        Qc = function(a) {
            return 9 == a.nodeType ? a : a.ownerDocument || a.document
        },
        Yc = function(a) {
            if (a && "number" == typeof a.length) {
                if (ea(a)) return "function" == typeof a.item || "string" == typeof a.item;
                if (z(a)) return "function" == typeof a.item
            }
            return !1
        },
        Pc = function(a) {
            this.a = a || n.document || document
        };
    Pc.prototype.S = function(a) {
        return Sc(this.a, a)
    };
    Pc.prototype.c = function(a, b, c) {
        var d = this.a,
            e = arguments,
            f = String(e[0]),
            h = e[1];
        if (!Nc && h && (h.name || h.type)) {
            f = ["<", f];
            h.name && f.push(' name="', wa(h.name), '"');
            if (h.type) {
                f.push(' type="', wa(h.type), '"');
                var k = {};
                fb(k, h);
                delete k.type;
                h = k
            }
            f.push(">");
            f = f.join("")
        }
        f = d.createElement(f);
        h && (y(h) ? f.className = h : x(h) ? f.className = h.join(" ") : Uc(f, h));
        2 < e.length && Zc(d, f, e);
        return f
    };
    Pc.prototype.contains = bd;
    var dd = function(a, b, c) {
            if (y(b))(b = cd(a, b)) && (a.style[b] = c);
            else
                for (var d in b) {
                    c = a;
                    var e = b[d],
                        f = cd(c, d);
                    f && (c.style[f] = e)
                }
        },
        ed = {},
        cd = function(a, b) {
            var c = ed[b];
            if (!c) {
                var d = Ba(b),
                    c = d;
                void 0 === a.style[d] && (d = lc() + Ca(d), void 0 !== a.style[d] && (c = d));
                ed[b] = c
            }
            return c
        },
        fd = function(a, b) {
            var c = a.style[Ba(b)];
            return "undefined" !== typeof c ? c : a.style[cd(a, b)] || ""
        },
        gd = function(a, b) {
            var c = Qc(a);
            return c.defaultView && c.defaultView.getComputedStyle && (a = c.defaultView.getComputedStyle(a, null)) ? a[b] || a.getPropertyValue(b) ||
                "" : ""
        },
        hd = function(a, b) {
            return gd(a, b) || (a.currentStyle ? a.currentStyle[b] : null) || a.style && a.style[b]
        },
        jd = function(a, b, c) {
            var d;
            b instanceof G ? (d = b.N, b = b.O) : (d = b, b = c);
            a.style.left = id(d, !1);
            a.style.top = id(b, !1)
        },
        kd = function(a) {
            var b;
            try {
                b = a.getBoundingClientRect()
            } catch (c) {
                return {
                    left: 0,
                    top: 0,
                    right: 0,
                    bottom: 0
                }
            }
            J && a.ownerDocument.body && (a = a.ownerDocument, b.left -= a.documentElement.clientLeft + a.body.clientLeft, b.top -= a.documentElement.clientTop + a.body.clientTop);
            return b
        },
        ld = function(a) {
            var b = Qc(a),
                c =
                new G(0, 0),
                d;
            d = b ? Qc(b) : document;
            d = !J || 9 <= Number(jc) || "CSS1Compat" == Rc(d).a.compatMode ? d.documentElement : d.body;
            if (a == d) return c;
            a = kd(a);
            d = Rc(b).a;
            b = Wc(d);
            d = Xc(d);
            b = J && K("10") && d.pageYOffset != b.scrollTop ? new G(b.scrollLeft, b.scrollTop) : new G(d.pageXOffset || b.scrollLeft, d.pageYOffset || b.scrollTop);
            c.N = a.left + b.N;
            c.O = a.top + b.O;
            return c
        },
        md = function(a) {
            if (1 == a.nodeType) return a = kd(a), new G(a.left, a.top);
            a = a.changedTouches ? a.changedTouches[0] : a;
            return new G(a.clientX, a.clientY)
        },
        nd = function(a, b, c) {
            if (b instanceof H) c = b.height, b = b.width;
            else if (void 0 == c) throw Error("missing height argument");
            a.style.width = id(b, !0);
            a.style.height = id(c, !0)
        },
        id = function(a, b) {
            "number" == typeof a && (a = (b ? Math.round(a) : a) + "px");
            return a
        },
        pd = function(a) {
            var b = od;
            if ("none" != hd(a, "display")) return b(a);
            var c = a.style,
                d = c.display,
                e = c.visibility,
                f = c.position;
            c.visibility = "hidden";
            c.position = "absolute";
            c.display = "inline";
            a = b(a);
            c.display = d;
            c.position = f;
            c.visibility = e;
            return a
        },
        od = function(a) {
            var b = a.offsetWidth,
                c = a.offsetHeight,
                d = Yb && !b &&
                !c;
            return q(b) && !d || !a.getBoundingClientRect ? new H(b, c) : (a = kd(a), new H(a.right - a.left, a.bottom - a.top))
        },
        qd = function(a) {
            var b = ld(a);
            a = pd(a);
            return new Ta(b.N, b.O, a.width, a.height)
        };
    var rd = function(a, b) {
            for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b.call(void 0, a[c], c, a)
        },
        td = function() {
            var a = sd;
            if (!a) return "";
            var b = /.*[&#?]google_debug(=[^&]*)?(&.*)?$/;
            try {
                var c = b.exec(decodeURIComponent(a));
                if (c) return c[1] && 1 < c[1].length ? c[1].substring(1) : "true"
            } catch (d) {}
            return ""
        };
    var ud = function(a, b, c) {
            a.addEventListener ? a.addEventListener(b, c, !1) : a.attachEvent && a.attachEvent("on" + b, c)
        },
        vd = function(a, b, c) {
            a.removeEventListener ? a.removeEventListener(b, c, !1) : a.detachEvent && a.detachEvent("on" + b, c)
        };
    var wd = function(a, b, c, d, e) {
            this.G = c || 4E3;
            this.g = a || "&";
            this.o = b || ",$";
            this.j = q(d) ? d : "trn";
            this.A = e || null;
            this.m = !1;
            this.c = {};
            this.v = 0;
            this.a = []
        },
        xd = function(a, b) {
            var c = {};
            c[a] = b;
            return [c]
        },
        yd = function(a, b, c, d) {
            a.a.push(b);
            a.c[b] = xd(c, d)
        },
        Bd = function(a, b, c, d) {
            b = b + "//" + c + d;
            var e = zd(a) - d.length - 0;
            if (0 > e) return "";
            a.a.sort(function(a, b) {
                return a - b
            });
            d = null;
            c = "";
            for (var f = 0; f < a.a.length; f++)
                for (var h = a.a[f], k = a.c[h], l = 0; l < k.length; l++) {
                    if (!e) {
                        d = null == d ? h : d;
                        break
                    }
                    var m = Ad(k[l], a.g, a.o);
                    if (m) {
                        m = c + m;
                        if (e >=
                            m.length) {
                            e -= m.length;
                            b += m;
                            c = a.g;
                            break
                        } else a.m && (c = e, m[c - 1] == a.g && --c, b += m.substr(0, c), c = a.g, e = 0);
                        d = null == d ? h : d
                    }
                }
            f = "";
            a.j && null != d && (f = c + a.j + "=" + (a.A || d));
            return b + f + ""
        },
        zd = function(a) {
            if (!a.j) return a.G;
            var b = 1,
                c;
            for (c in a.c) b = c.length > b ? c.length : b;
            return a.G - a.j.length - b - a.g.length - 1
        },
        Ad = function(a, b, c, d, e) {
            var f = [];
            rd(a, function(a, k) {
                (a = Cd(a, b, c, d, e)) && f.push(k + "=" + a)
            });
            return f.join(b)
        },
        Cd = function(a, b, c, d, e) {
            if (null == a) return "";
            b = b || "&";
            c = c || ",$";
            "string" == typeof c && (c = c.split(""));
            if (a instanceof Array) {
                if (d = d || 0, d < c.length) {
                    for (var f = [], h = 0; h < a.length; h++) f.push(Cd(a[h], b, c, d + 1, e));
                    return f.join(c[d])
                }
            } else if ("object" == typeof a) return e = e || 0, 2 > e ? encodeURIComponent(Ad(a, b, c, d, e + 1)) : "...";
            return encodeURIComponent(String(a))
        };
    var Fd = function(a, b, c, d) {
            if (Math.random() < (d || a.a)) try {
                var e;
                c instanceof wd ? e = c : (e = new wd, rd(c, function(a, b) {
                    var c = e,
                        d = c.v++;
                    a = xd(b, a);
                    c.a.push(d);
                    c.c[d] = a
                }));
                var f = Bd(e, a.j, a.c, a.g + b + "&");
                f && Dd(n, f)
            } catch (h) {}
        },
        Dd = function(a, b, c) {
            a.google_image_requests || (a.google_image_requests = []);
            var d = a.document.createElement("img");
            if (c) {
                var e = function(a) {
                    c(a);
                    vd(d, "load", e);
                    vd(d, "error", e)
                };
                ud(d, "load", e);
                ud(d, "error", e)
            }
            d.src = b;
            a.google_image_requests.push(d)
        };
    var Gd = document,
        Hd = window;
    var Id = null;
    var Jd = function(a) {
        this.a = !!a
    };
    Jd.prototype.a = !1;
    var Kd = function(a, b) {
        a.a || D(E(b)) || (window.studioV2_image_requests || (window.studioV2_image_requests = []), a = document.createElement("img"), a.src = b, window.studioV2_image_requests.push(a))
    };
    var Ld = !J || 9 <= Number(jc),
        Md = J && !K("9");
    !Yb || K("528");
    Xb && K("1.9b") || J && K("8") || Ub && K("9.5") || Yb && K("528");
    Xb && !K("8") || J && K("9");
    var L = function() {
        this.G = this.G;
        this.U = this.U
    };
    L.prototype.G = !1;
    L.prototype.dispose = function() {
        this.G || (this.G = !0, this.D())
    };
    var Nd = function(a, b) {
        a.G ? q(void 0) ? b.call(void 0) : b() : (a.U || (a.U = []), a.U.push(q(void 0) ? A(b, void 0) : b))
    };
    L.prototype.D = function() {
        if (this.U)
            for (; this.U.length;) this.U.shift()()
    };
    var M = function(a) {
            a && "function" == typeof a.dispose && a.dispose()
        },
        Od = function(a) {
            for (var b = 0, c = arguments.length; b < c; ++b) {
                var d = arguments[b];
                ca(d) ? Od.apply(null, d) : M(d)
            }
        };
    var N = function(a, b) {
        this.type = a;
        this.a = this.target = b;
        this.Vc = !0
    };
    N.prototype.j = function() {
        this.Vc = !1
    };
    var Pd = function(a, b) {
        N.call(this, a ? a.type : "");
        this.a = this.target = null;
        this.clientY = this.clientX = 0;
        this.c = this.state = null;
        if (a) {
            this.type = a.type;
            var c = a.changedTouches ? a.changedTouches[0] : null;
            this.target = a.target || a.srcElement;
            this.a = b;
            (b = a.relatedTarget) && Xb && Rb(b, "nodeName");
            null === c ? (this.clientX = void 0 !== a.clientX ? a.clientX : a.pageX, this.clientY = void 0 !== a.clientY ? a.clientY : a.pageY) : (this.clientX = void 0 !== c.clientX ? c.clientX : c.pageX, this.clientY = void 0 !== c.clientY ? c.clientY : c.pageY);
            this.state =
                a.state;
            this.c = a;
            a.defaultPrevented && this.j()
        }
    };
    C(Pd, N);
    Pd.prototype.j = function() {
        Pd.C.j.call(this);
        var a = this.c;
        if (a.preventDefault) a.preventDefault();
        else if (a.returnValue = !1, Md) try {
            if (a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode) a.keyCode = -1
        } catch (b) {}
    };
    var Qd = "closure_listenable_" + (1E6 * Math.random() | 0),
        Rd = function(a) {
            return !(!a || !a[Qd])
        },
        Sd = 0;
    var Td = function(a, b, c, d, e) {
            this.listener = a;
            this.a = null;
            this.src = b;
            this.type = c;
            this.vb = !!d;
            this.Ab = e;
            this.Rb = ++Sd;
            this.fb = this.ub = !1
        },
        Ud = function(a) {
            a.fb = !0;
            a.listener = null;
            a.a = null;
            a.src = null;
            a.Ab = null
        };
    var Vd = function(a) {
            this.src = a;
            this.a = {};
            this.c = 0
        },
        Xd = function(a, b, c, d, e, f) {
            var h = b.toString();
            b = a.a[h];
            b || (b = a.a[h] = [], a.c++);
            var k = Wd(b, c, e, f); - 1 < k ? (a = b[k], d || (a.ub = !1)) : (a = new Td(c, a.src, h, !!e, f), a.ub = d, b.push(a));
            return a
        },
        Yd = function(a, b) {
            var c = b.type;
            if (!(c in a.a)) return !1;
            var d = Ja(a.a[c], b);
            d && (Ud(b), 0 == a.a[c].length && (delete a.a[c], a.c--));
            return d
        },
        Zd = function(a, b) {
            b = b && b.toString();
            var c = 0,
                d;
            for (d in a.a)
                if (!b || d == b) {
                    for (var e = a.a[d], f = 0; f < e.length; f++) ++c, Ud(e[f]);
                    delete a.a[d];
                    a.c--
                }
        },
        $d = function(a, b, c, d, e) {
            a = a.a[b.toString()];
            b = -1;
            a && (b = Wd(a, c, d, e));
            return -1 < b ? a[b] : null
        },
        Wd = function(a, b, c, d) {
            for (var e = 0; e < a.length; ++e) {
                var f = a[e];
                if (!f.fb && f.listener == b && f.vb == !!c && f.Ab == d) return e
            }
            return -1
        };
    var ae = "closure_lm_" + (1E6 * Math.random() | 0),
        be = {},
        ce = 0,
        de = function(a, b, c, d, e) {
            if (x(b)) {
                for (var f = 0; f < b.length; f++) de(a, b[f], c, d, e);
                return null
            }
            c = ee(c);
            return Rd(a) ? a.I(b, c, d, e) : fe(a, b, c, !1, d, e)
        },
        fe = function(a, b, c, d, e, f) {
            if (!b) throw Error("Invalid event type");
            var h = !!e,
                k = ge(a);
            k || (a[ae] = k = new Vd(a));
            c = Xd(k, b, c, d, e, f);
            if (c.a) return c;
            d = he();
            c.a = d;
            d.src = a;
            d.listener = c;
            if (a.addEventListener) a.addEventListener(b.toString(), d, h);
            else if (a.attachEvent) a.attachEvent(ie(b.toString()), d);
            else throw Error("addEventListener and attachEvent are unavailable.");
            ce++;
            return c
        },
        he = function() {
            var a = je,
                b = Ld ? function(c) {
                    return a.call(b.src, b.listener, c)
                } : function(c) {
                    c = a.call(b.src, b.listener, c);
                    if (!c) return c
                };
            return b
        },
        ke = function(a, b, c, d, e) {
            if (x(b)) {
                for (var f = 0; f < b.length; f++) ke(a, b[f], c, d, e);
                return null
            }
            c = ee(c);
            return Rd(a) ? Xd(a.ra, String(b), c, !0, d, e) : fe(a, b, c, !0, d, e)
        },
        le = function(a, b, c, d, e) {
            if (x(b))
                for (var f = 0; f < b.length; f++) le(a, b[f], c, d, e);
            else c = ee(c), Rd(a) ? a.Oa(b, c, d, e) : a && (a = ge(a)) && (b = $d(a, b, c, !!d, e)) && me(b)
        },
        me = function(a) {
            if (da(a) || !a || a.fb) return !1;
            var b = a.src;
            if (Rd(b)) return Yd(b.ra, a);
            var c = a.type,
                d = a.a;
            b.removeEventListener ? b.removeEventListener(c, d, a.vb) : b.detachEvent && b.detachEvent(ie(c), d);
            ce--;
            (c = ge(b)) ? (Yd(c, a), 0 == c.c && (c.src = null, b[ae] = null)) : Ud(a);
            return !0
        },
        ne = function(a) {
            if (a)
                if (Rd(a)) a.ra && Zd(a.ra, "c");
                else if (a = ge(a)) {
                var b = 0,
                    c = "c".toString(),
                    d;
                for (d in a.a)
                    if (!c || d == c)
                        for (var e = a.a[d].concat(), f = 0; f < e.length; ++f) me(e[f]) && ++b
            }
        },
        oe = function(a, b, c, d, e) {
            c = ee(c);
            d = !!d;
            return Rd(a) ? $d(a.ra, String(b), c, d, e) : a ? (a = ge(a)) ? $d(a, b, c, d, e) :
                null : null
        },
        ie = function(a) {
            return a in be ? be[a] : be[a] = "on" + a
        },
        qe = function(a, b, c, d) {
            var e = !0;
            if (a = ge(a))
                if (b = a.a[b.toString()])
                    for (b = b.concat(), a = 0; a < b.length; a++) {
                        var f = b[a];
                        f && f.vb == c && !f.fb && (f = pe(f, d), e = e && !1 !== f)
                    }
                return e
        },
        pe = function(a, b) {
            var c = a.listener,
                d = a.Ab || a.src;
            a.ub && me(a);
            return c.call(d, b)
        },
        je = function(a, b) {
            if (a.fb) return !0;
            if (!Ld) {
                var c = b || t("window.event");
                b = new Pd(c, this);
                var d = !0;
                if (!(0 > c.keyCode || void 0 != c.returnValue)) {
                    a: {
                        var e = !1;
                        if (0 == c.keyCode) try {
                            c.keyCode = -1;
                            break a
                        } catch (h) {
                            e = !0
                        }
                        if (e || void 0 == c.returnValue) c.returnValue = !0
                    }
                    c = [];
                    for (e = b.a; e; e = e.parentNode) c.push(e);a = a.type;
                    for (e = c.length - 1; 0 <= e; e--) {
                        b.a = c[e];
                        var f = qe(c[e], a, !0, b),
                            d = d && f
                    }
                    for (e = 0; e < c.length; e++) b.a = c[e],
                    f = qe(c[e], a, !1, b),
                    d = d && f
                }
                return d
            }
            return pe(a, new Pd(b, this))
        },
        ge = function(a) {
            a = a[ae];
            return a instanceof Vd ? a : null
        },
        re = "__closure_events_fn_" + (1E9 * Math.random() >>> 0),
        ee = function(a) {
            if (z(a)) return a;
            a[re] || (a[re] = function(b) {
                return a.handleEvent(b)
            });
            return a[re]
        };
    var se = function(a, b, c) {
        this.j = c;
        this.g = a;
        this.m = b;
        this.c = 0;
        this.a = null
    };
    se.prototype.get = function() {
        var a;
        0 < this.c ? (this.c--, a = this.a, this.a = a.next, a.next = null) : a = this.g();
        return a
    };
    var te = function(a, b) {
        a.m(b);
        a.c < a.j && (a.c++, b.next = a.a, a.a = b)
    };
    var ue = function(a) {
            return function() {
                return a
            }
        },
        ve = ue(!1),
        we = ue(!0),
        xe = function(a) {
            return a
        },
        ye = function(a) {
            var b = 1,
                b = b || 0;
            return function() {
                return a.apply(this, Array.prototype.slice.call(arguments, 0, b))
            }
        };
    var ze = function(a) {
            n.setTimeout(function() {
                throw a;
            }, 0)
        },
        De = function(a) {
            a = Ae(a);
            !z(n.setImmediate) || n.Window && n.Window.prototype && !I("Edge") && n.Window.prototype.setImmediate == n.setImmediate ? (Be || (Be = Ce()), Be(a)) : n.setImmediate(a)
        },
        Be, Ce = function() {
            var a = n.MessageChannel;
            "undefined" === typeof a && "undefined" !== typeof window && window.postMessage && window.addEventListener && !I("Presto") && (a = function() {
                var a = document.createElement("IFRAME");
                a.style.display = "none";
                a.src = "";
                document.documentElement.appendChild(a);
                var b = a.contentWindow,
                    a = b.document;
                a.open();
                a.write("");
                a.close();
                var c = "callImmediate" + Math.random(),
                    d = "file:" == b.location.protocol ? "*" : b.location.protocol + "//" + b.location.host,
                    a = A(function(a) {
                        if (("*" == d || a.origin == d) && a.data == c) this.port1.onmessage()
                    }, this);
                b.addEventListener("message", a, !1);
                this.port1 = {};
                this.port2 = {
                    postMessage: function() {
                        b.postMessage(c, d)
                    }
                }
            });
            if ("undefined" !== typeof a && !I("Trident") && !I("MSIE")) {
                var b = new a,
                    c = {},
                    d = c;
                b.port1.onmessage = function() {
                    if (q(c.next)) {
                        c = c.next;
                        var a = c.zc;
                        c.zc = null;
                        a()
                    }
                };
                return function(a) {
                    d.next = {
                        zc: a
                    };
                    d = d.next;
                    b.port2.postMessage(0)
                }
            }
            return "undefined" !== typeof document && "onreadystatechange" in document.createElement("SCRIPT") ? function(a) {
                var b = document.createElement("SCRIPT");
                b.onreadystatechange = function() {
                    b.onreadystatechange = null;
                    b.parentNode.removeChild(b);
                    b = null;
                    a();
                    a = null
                };
                document.documentElement.appendChild(b)
            } : function(a) {
                n.setTimeout(a, 0)
            }
        },
        Ae = xe;
    var Fe = new se(function() {
            return new Ee
        }, function(a) {
            a.reset()
        }, 100),
        He = function() {
            var a = Ge,
                b = null;
            a.a && (b = a.a, a.a = a.a.next, a.a || (a.c = null), b.next = null);
            return b
        },
        Ee = function() {
            this.next = this.c = this.a = null
        };
    Ee.prototype.set = function(a, b) {
        this.a = a;
        this.c = b;
        this.next = null
    };
    Ee.prototype.reset = function() {
        this.next = this.c = this.a = null
    };
    var Le = function(a, b) {
            Ie || Je();
            Ke || (Ie(), Ke = !0);
            var c = Ge,
                d = Fe.get();
            d.set(a, b);
            c.c ? c.c.next = d : c.a = d;
            c.c = d
        },
        Ie, Je = function() {
            var a = n.Promise;
            if (-1 != String(a).indexOf("[native code]")) {
                var b = a.resolve(void 0);
                Ie = function() {
                    b.then(Me)
                }
            } else Ie = function() {
                De(Me)
            }
        },
        Ke = !1,
        Ge = new function() {
            this.c = this.a = null
        },
        Me = function() {
            for (var a; a = He();) {
                try {
                    a.a.call(a.c)
                } catch (b) {
                    ze(b)
                }
                te(Fe, a)
            }
            Ke = !1
        };
    var Ne = function(a) {
            a.prototype.then = a.prototype.then;
            a.prototype.$goog_Thenable = !0
        },
        Oe = function(a) {
            if (!a) return !1;
            try {
                return !!a.$goog_Thenable
            } catch (b) {
                return !1
            }
        };
    var O = function(a, b) {
            this.a = 0;
            this.o = void 0;
            this.j = this.c = this.g = null;
            this.m = this.G = !1;
            if (a != u) try {
                var c = this;
                a.call(b, function(a) {
                    Pe(c, 2, a)
                }, function(a) {
                    Pe(c, 3, a)
                })
            } catch (d) {
                Pe(this, 3, d)
            }
        },
        Qe = function() {
            this.next = this.j = this.c = this.m = this.a = null;
            this.g = !1
        };
    Qe.prototype.reset = function() {
        this.j = this.c = this.m = this.a = null;
        this.g = !1
    };
    var Re = new se(function() {
            return new Qe
        }, function(a) {
            a.reset()
        }, 100),
        Se = function(a, b, c) {
            var d = Re.get();
            d.m = a;
            d.c = b;
            d.j = c;
            return d
        },
        Te = function() {
            var a = Error("Cannot go fullscreen, already in fullscreen");
            return new O(function(b, c) {
                c(a)
            })
        },
        Ve = function(a, b, c) {
            Ue(a, b, c, null) || Le(ka(b, a))
        },
        We = function(a) {
            return new O(function(b, c) {
                var d = a.length,
                    e = [];
                if (d)
                    for (var f = function(a, c) {
                            d--;
                            e[a] = c;
                            0 == d && b(e)
                        }, h = function(a) {
                            c(a)
                        }, k = 0, l; k < a.length; k++) l = a[k], Ve(l, ka(f, k), h);
                else b(e)
            })
        },
        Ye = function() {
            var a, b = new O(function(b) {
                a =
                    b
            });
            return new Xe(b, a)
        };
    O.prototype.then = function(a, b, c) {
        return Ze(this, z(a) ? a : null, z(b) ? b : null, c)
    };
    Ne(O);
    var af = function(a, b, c) {
            b = Se(b, b, c);
            b.g = !0;
            $e(a, b)
        },
        bf = function(a, b, c) {
            return Ze(a, null, b, c)
        };
    O.prototype.cancel = function(a) {
        0 == this.a && Le(function() {
            var b = new cf(a);
            df(this, b)
        }, this)
    };
    var df = function(a, b) {
            if (0 == a.a)
                if (a.g) {
                    var c = a.g;
                    if (c.c) {
                        for (var d = 0, e = null, f = null, h = c.c; h && (h.g || (d++, h.a == a && (e = h), !(e && 1 < d))); h = h.next) e || (f = h);
                        e && (0 == c.a && 1 == d ? df(c, b) : (f ? (d = f, d.next == c.j && (c.j = d), d.next = d.next.next) : ef(c), ff(c, e, 3, b)))
                    }
                    a.g = null
                } else Pe(a, 3, b)
        },
        $e = function(a, b) {
            a.c || 2 != a.a && 3 != a.a || gf(a);
            a.j ? a.j.next = b : a.c = b;
            a.j = b
        },
        Ze = function(a, b, c, d) {
            var e = Se(null, null, null);
            e.a = new O(function(a, h) {
                e.m = b ? function(c) {
                    try {
                        var e = b.call(d, c);
                        a(e)
                    } catch (m) {
                        h(m)
                    }
                } : a;
                e.c = c ? function(b) {
                    try {
                        var e = c.call(d,
                            b);
                        !q(e) && b instanceof cf ? h(b) : a(e)
                    } catch (m) {
                        h(m)
                    }
                } : h
            });
            e.a.g = a;
            $e(a, e);
            return e.a
        };
    O.prototype.A = function(a) {
        this.a = 0;
        Pe(this, 2, a)
    };
    O.prototype.B = function(a) {
        this.a = 0;
        Pe(this, 3, a)
    };
    var Pe = function(a, b, c) {
            0 == a.a && (a === c && (b = 3, c = new TypeError("Promise cannot resolve to itself")), a.a = 1, Ue(c, a.A, a.B, a) || (a.o = c, a.a = b, a.g = null, gf(a), 3 != b || c instanceof cf || hf(a, c)))
        },
        Ue = function(a, b, c, d) {
            if (a instanceof O) return $e(a, Se(b || u, c || null, d)), !0;
            if (Oe(a)) return a.then(b, c, d), !0;
            if (ea(a)) try {
                var e = a.then;
                if (z(e)) return jf(a, e, b, c, d), !0
            } catch (f) {
                return c.call(d, f), !0
            }
            return !1
        },
        jf = function(a, b, c, d, e) {
            var f = !1,
                h = function(a) {
                    f || (f = !0, c.call(e, a))
                },
                k = function(a) {
                    f || (f = !0, d.call(e, a))
                };
            try {
                b.call(a,
                    h, k)
            } catch (l) {
                k(l)
            }
        },
        gf = function(a) {
            a.G || (a.G = !0, Le(a.v, a))
        },
        ef = function(a) {
            var b = null;
            a.c && (b = a.c, a.c = b.next, b.next = null);
            a.c || (a.j = null);
            return b
        };
    O.prototype.v = function() {
        for (var a; a = ef(this);) ff(this, a, this.a, this.o);
        this.G = !1
    };
    var ff = function(a, b, c, d) {
            if (3 == c && b.c && !b.g)
                for (; a && a.m; a = a.g) a.m = !1;
            if (b.a) b.a.g = null, kf(b, c, d);
            else try {
                b.g ? b.m.call(b.j) : kf(b, c, d)
            } catch (e) {
                lf.call(null, e)
            }
            te(Re, b)
        },
        kf = function(a, b, c) {
            2 == b ? a.m.call(a.j, c) : a.c && a.c.call(a.j, c)
        },
        hf = function(a, b) {
            a.m = !0;
            Le(function() {
                a.m && lf.call(null, b)
            })
        },
        lf = ze,
        cf = function(a) {
            la.call(this, a)
        };
    C(cf, la);
    cf.prototype.name = "cancel";
    var Xe = function(a, b) {
        this.c = a;
        this.a = b
    };
    /*
     Portions of this code are from MochiKit, received by
     The Closure Authors under the MIT license. All other code is Copyright
     2005-2009 The Closure Authors. All Rights Reserved.
    */
    var P = function(a, b) {
        this.o = [];
        this.U = a;
        this.H = b || null;
        this.j = this.a = !1;
        this.g = void 0;
        this.B = this.J = this.A = !1;
        this.v = 0;
        this.c = null;
        this.m = 0
    };
    P.prototype.cancel = function(a) {
        if (this.a) this.g instanceof P && this.g.cancel();
        else {
            if (this.c) {
                var b = this.c;
                delete this.c;
                a ? b.cancel(a) : (b.m--, 0 >= b.m && b.cancel())
            }
            this.U ? this.U.call(this.H, this) : this.B = !0;
            this.a || this.G(new mf)
        }
    };
    P.prototype.F = function(a, b) {
        this.A = !1;
        nf(this, a, b)
    };
    var nf = function(a, b, c) {
            a.a = !0;
            a.g = c;
            a.j = !b;
            of(a)
        },
        qf = function(a) {
            if (a.a) {
                if (!a.B) throw new pf;
                a.B = !1
            }
        };
    P.prototype.pa = function(a) {
        qf(this);
        nf(this, !0, a)
    };
    P.prototype.G = function(a) {
        qf(this);
        nf(this, !1, a)
    };
    var sf = function(a, b, c) {
            rf(a, b, null, c)
        },
        rf = function(a, b, c, d) {
            a.o.push([b, c, d]);
            a.a && of(a)
        };
    P.prototype.then = function(a, b, c) {
        var d, e, f = new O(function(a, b) {
            d = a;
            e = b
        });
        rf(this, d, function(a) {
            a instanceof mf ? f.cancel() : e(a)
        });
        return f.then(a, b, c)
    };
    Ne(P);
    var tf = function(a, b) {
        b instanceof P ? sf(a, A(b.K, b)) : sf(a, function() {
            return b
        })
    };
    P.prototype.K = function(a) {
        var b = new P;
        rf(this, b.pa, b.G, b);
        a && (b.c = this, this.m++);
        return b
    };
    var uf = function(a) {
            return Ga(a.o, function(a) {
                return z(a[1])
            })
        },
        of = function(a) {
            if (a.v && a.a && uf(a)) {
                var b = a.v,
                    c = vf[b];
                c && (n.clearTimeout(c.a), delete vf[b]);
                a.v = 0
            }
            a.c && (a.c.m--, delete a.c);
            for (var b = a.g, d = c = !1; a.o.length && !a.A;) {
                var e = a.o.shift(),
                    f = e[0],
                    h = e[1],
                    e = e[2];
                if (f = a.j ? h : f) try {
                    var k = f.call(e || a.H, b);
                    q(k) && (a.j = a.j && (k == b || k instanceof Error), a.g = b = k);
                    if (Oe(b) || "function" === typeof n.Promise && b instanceof n.Promise) d = !0, a.A = !0
                } catch (l) {
                    b = l, a.j = !0, uf(a) || (c = !0)
                }
            }
            a.g = b;
            d && (k = A(a.F, a, !0), d = A(a.F, a, !1), b instanceof P ? (rf(b, k, d), b.J = !0) : b.then(k, d));
            c && (b = new wf(b), vf[b.a] = b, a.v = b.a)
        },
        pf = function() {
            la.call(this)
        };
    C(pf, la);
    pf.prototype.message = "Deferred has already fired";
    pf.prototype.name = "AlreadyCalledError";
    var mf = function() {
        la.call(this)
    };
    C(mf, la);
    mf.prototype.message = "Deferred was canceled";
    mf.prototype.name = "CanceledError";
    var wf = function(a) {
        this.a = n.setTimeout(A(this.g, this), 0);
        this.c = a
    };
    wf.prototype.g = function() {
        delete vf[this.a];
        throw this.c;
    };
    var vf = {};
    var yf = function(a) {
            var b = new Cc;
            b.a = a;
            return xf(b)
        },
        xf = function(a) {
            var b = {},
                c = b.document || document,
                d = Dc(a),
                e = document.createElement("SCRIPT");
            a = {
                Wc: e,
                cd: void 0
            };
            var f = new P(zf, a),
                h = null,
                k = null != b.timeout ? b.timeout : 5E3;
            0 < k && (h = window.setTimeout(function() {
                Af(e, !0);
                f.G(new Bf(1, "Timeout reached for loading script " + d))
            }, k), a.cd = h);
            e.onload = e.onreadystatechange = function() {
                e.readyState && "loaded" != e.readyState && "complete" != e.readyState || (Af(e, b.$f || !1, h), f.pa(null))
            };
            e.onerror = function() {
                Af(e, !0, h);
                f.G(new Bf(0,
                    "Error while loading script " + d))
            };
            a = b.attributes || {};
            fb(a, {
                type: "text/javascript",
                charset: "UTF-8",
                src: d
            });
            Uc(e, a);
            Df(c).appendChild(e);
            return f
        },
        Df = function(a) {
            var b = (a || document).getElementsByTagName("HEAD");
            return b && 0 != b.length ? b[0] : a.documentElement
        },
        zf = function() {
            if (this && this.Wc) {
                var a = this.Wc;
                a && "SCRIPT" == a.tagName && Af(a, !0, this.cd)
            }
        },
        Af = function(a, b, c) {
            null != c && n.clearTimeout(c);
            a.onload = u;
            a.onerror = u;
            a.onreadystatechange = u;
            b && window.setTimeout(function() {
                $c(a)
            }, 0)
        },
        Bf = function(a, b) {
            a = "Jsloader error (code #" +
                a + ")";
            b && (a += ": " + b);
            la.call(this, a)
        };
    C(Bf, la);
    var Ef = function(a, b, c) {
            this.j = a;
            this.a = "";
            b && (this.a = /^(http[s]?:)?\/\//.test(b) ? b : "//pagead2.googlesyndication.com/activeview?avi=" + b);
            this.g = c || "";
            this.c = !1
        },
        Ff = function(a, b) {
            b.setAttribute("id", "DfaVisibilityIdentifier_" + B());
            b.className = "GoogleActiveViewClass";
            b._avicxn_ = a.a;
            b._avm_ = a.g;
            a.c || (yf("//pagead2.googlesyndication.com/pagead/js/lidar.js"), a.c = !0)
        },
        Gf = function(a) {
            a.a && Kd(a.j, a.a + "&id=lidar2&r=w&rs=5r")
        };
    var Hf = function(a) {
        var b = !1,
            c;
        return function() {
            b || (c = a(), b = !0);
            return c
        }
    }(function() {
        if (J) return K("10.0");
        var a = document.createElement("DIV"),
            b = mc(),
            c = {
                transition: "opacity 1s linear"
            };
        b && (c[b + "-transition"] = "opacity 1s linear");
        b = {
            style: c
        };
        if (!Hc.test("div")) throw Error("Invalid tag name <div>.");
        if ("DIV" in Jc) throw Error("Tag name <div> is not allowed for SafeHtml.");
        b = Mc("div", b);
        a.innerHTML = Gc(b);
        return "" != fd(a.firstChild, "transition")
    });
    var If = !1,
        Jf = "",
        Kf = function(a) {
            a = a.match(/[\d]+/g);
            if (!a) return "";
            a.length = 3;
            return a.join(".")
        };
    (function() {
        if (navigator.plugins && navigator.plugins.length) {
            var a = navigator.plugins["Shockwave Flash"];
            if (a && (If = !0, a.description)) {
                Jf = Kf(a.description);
                return
            }
            if (navigator.plugins["Shockwave Flash 2.0"]) {
                If = !0;
                Jf = "2.0.0.11";
                return
            }
        }
        if (navigator.mimeTypes && navigator.mimeTypes.length && (a = navigator.mimeTypes["application/x-shockwave-flash"], If = !(!a || !a.enabledPlugin))) {
            Jf = Kf(a.enabledPlugin.description);
            return
        }
        try {
            var b = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7");
            If = !0;
            Jf = Kf(b.GetVariable("$version"));
            return
        } catch (c) {}
        try {
            b = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6");
            If = !0;
            Jf = "6.0.21";
            return
        } catch (c) {}
        try {
            b = new ActiveXObject("ShockwaveFlash.ShockwaveFlash"), If = !0, Jf = Kf(b.GetVariable("$version"))
        } catch (c) {}
    })();
    var Lf = Jf;
    var Mf = I("Firefox"),
        Nf = Pb() || I("iPod"),
        Of = I("iPad"),
        Pf = I("Android") && !(Ob() || I("Firefox") || I("Opera") || I("Silk")),
        Qf = Ob(),
        Rf = I("Safari") && !(Ob() || I("Coast") || I("Opera") || I("Edge") || I("Silk") || I("Android")) && !(Pb() || I("iPad") || I("iPod"));
    var Sf = function(a) {
            return (a = a.exec(Lb)) ? a[1] : ""
        },
        Tf = function() {
            if (Mf) return Sf(/Firefox\/([0-9.]+)/);
            if (J || Vb || Ub) return ic;
            if (Qf) return Sf(/Chrome\/([0-9.]+)/);
            if (Rf && !(Pb() || I("iPad") || I("iPod"))) return Sf(/Version\/([0-9.]+)/);
            if (Nf || Of) {
                var a = /Version\/(\S+).*Mobile\/(\S+)/.exec(Lb);
                if (a) return a[1] + "." + a[2]
            } else if (Pf) return (a = Sf(/Android\s+([0-9.]+)/)) ? a : Sf(/Version\/([0-9.]+)/);
            return ""
        }();
    var Uf = bc || cc,
        Vf = document.createElement("VIDEO"),
        Wf = Vf && Vf.canPlayType && (Vf.canPlayType("video/mp4").replace(/no/, "") || ac) ? !0 : !1,
        Xf = document.createElement("VIDEO"),
        Yf = Xf && Xf.canPlayType && Xf.canPlayType("video/webm").replace(/no/, "") ? !0 : !1,
        Zf = function(a) {
            return (Wb || Xb || Yb || Ub || !1) && !Zb && 0 <= za(Lf, a)
        },
        $f = function(a, b) {
            if (!n.postMessage) return !1;
            a = x(a) ? La(a) : [];
            Ia(a, function(a) {
                return "Modernizr.canvas" == a
            }) || a.push("Modernizr.canvas");
            b && !Ia(a, function(a) {
                return "Modernizr.cssanimations" == a
            }) && a.push("Modernizr.cssanimations");
            return Ha(a, function(a) {
                if ("svgFilters" == a) {
                    if (!(J && K("10") && 10 <= Number(jc) || Qf && 0 <= za(Tf, "18") || Mf && 0 <= za(Tf, "11"))) return !1
                } else if ("svgFeImage" == a) {
                    if (!(J && K("10") && 10 <= Number(jc) || Qf && 0 <= za(Tf, "29"))) return !1
                } else if (/Modernizr.canvas/.test(a)) {
                    if (!(document.createElement("canvas").getContext || J && 0 <= za(Tf, "9"))) return !1
                } else if (/Modernizr.cssanimations/.test(a)) {
                    if (a = Wc(document).style, !q(a.animationName) && !q(a[lc() + "AnimationName"])) return !1
                } else if (/Modernizr.cssgradients/.test(a)) {
                    a = "";
                    for (var b,
                            c = ["", mc() + "-"], f = 0; f < c.length; f++) b = 0 === f ? "to " : "", a += "background-image:" + c[f] + "linear-gradient(" + b + "left top, #9f9, white);";
                    b = document.createElement("A");
                    b.style.cssText = a + "background-image:-webkit-gradient(linear,left top,right bottom,from(#9f9),to(white));";
                    if (!(-1 < fd(b, "backgroundImage").indexOf("gradient"))) return !1
                } else if (/Modernizr.csstransitions/.test(a) && !Hf()) return !1;
                return !0
            })
        };
    var ag = function(a) {
            return a.Bb && Zf(a.flashVersion) || a.Vb && $f(a.html5Features, a.gb) ? !0 : !1
        },
        eg = function(a, b, c, d, e, f, h, k) {
            if (b) {
                var l = Sc(document, c);
                l.innerHTML = bg(b);
                d = new Jd(d);
                var m = E(b.G);
                D(m) || Kd(d, m);
                Kd(d, b.g);
                Kd(d, b.c);
                for (m = 0; m < e.length; m++) Kd(d, e[m]);
                cg(a);
                null != k && 0 < k.length && dg(k, c);
                a = new Ef(d, f, h);
                a.a && (a.a ? Ff(a, l) : a.c || Gf(a));
                de(l, "click", function() {
                    for (var a = 0; a < b.m.length; a++) b.m[a].ping()
                })
            }
        },
        dg = function(a, b) {
            var c = Sc(document, b);
            if (null != c) F(a, function(a) {
                c.parentNode.insertBefore(fg(a),
                    c.nextSibling)
            });
            else {
                var d;
                (b = document.getElementsByTagName("HEAD")) && 0 < b.length ? d = b[0] : d = document.documentElement;
                F(a, function(a) {
                    d.appendChild(fg(a))
                })
            }
        },
        fg = function(a) {
            var b = document.createElement("SCRIPT");
            b.src = a;
            b.type = "text/javascript";
            b.async = !1;
            return b
        },
        cg = function(a) {
            var b = window.DARTDebugEventHandler;
            if (b) {
                b = new b;
                try {
                    b.handleEventActivity("BACKUP_IMAGE_IMPRESSION", "Counter", 1, 0, !1, a)
                } catch (c) {}
            }
        };
    var gg = function(a, b) {
        this.j = Math.random() < a;
        this.o = b;
        this.g = null;
        this.m = ""
    };
    gg.prototype.c = function() {
        return this.j && null !== this.g ? (this.o + "//pagead2.googlesyndication.com/pagead/gen_204/?id=" + this.g + this.m).substring(0, 2E3) : ""
    };
    var hg = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/,
        ig = function(a) {
            var b = a.match(hg);
            a = b[1];
            var c = b[2],
                d = b[3],
                b = b[4],
                e = "";
            a && (e += a + ":");
            d && (e += "//", c && (e += c + "@"), e += d, b && (e += ":" + b));
            return e
        },
        jg = function(a, b) {
            if (a) {
                a = a.split("&");
                for (var c = 0; c < a.length; c++) {
                    var d = a[c].indexOf("="),
                        e, f = null;
                    0 <= d ? (e = a[c].substring(0, d), f = a[c].substring(d + 1)) : e = a[c];
                    b(e, f ? decodeURIComponent(f.replace(/\+/g, " ")) : "")
                }
            }
        },
        kg = function(a, b) {
            a = [a, "&",
                b
            ];
            if (a[1]) {
                b = a[0];
                var c = b.indexOf("#");
                0 <= c && (a.push(b.substr(c)), a[0] = b = b.substr(0, c));
                c = b.indexOf("?");
                0 > c ? a[1] = "?" : c == b.length - 1 && (a[1] = void 0)
            }
            return a.join("")
        },
        lg = /#|$/;
    var mg = function(a, b) {
            this.a = a;
            this.c = b
        },
        ng = function(a, b, c) {
            this.url = a;
            this.win = b;
            this.Qc = !!c;
            this.depth = da(void 0) ? void 0 : null
        };
    var og = function(a, b, c) {
            this.g = a;
            this.j = b;
            this.a = c;
            this.m = this.c
        },
        pg = function(a, b, c) {
            this.message = a;
            this.a = b || "";
            this.c = c || -1
        },
        rg = function(a, b) {
            var c;
            try {
                c = b()
            } catch (f) {
                var d = a.a;
                try {
                    var e = qg(f),
                        d = a.m.call(a, "osd_proto::reqm_int", e, void 0, void 0)
                } catch (h) {
                    a.c("pAR", h)
                }
                if (!d) throw f;
            } finally {}
            return c
        },
        tg = function(a) {
            var b = sg;
            return function() {
                for (var c = [], d = 0; d < arguments.length; ++d) c[d] = arguments[d];
                return rg(b, function() {
                    return a.apply(void 0, c)
                })
            }
        };
    og.prototype.c = function(a, b, c, d, e) {
        try {
            var f = e || this.j,
                h = new wd;
            h.m = !0;
            yd(h, 1, "context", a);
            b instanceof pg || (b = qg(b));
            yd(h, 2, "msg", b.message.substring(0, 512));
            b.a && yd(h, 3, "file", b.a);
            0 < b.c && yd(h, 4, "line", b.c.toString());
            b = {};
            if (d) try {
                d(b)
            } catch (Ed) {}
            d = [b];
            h.a.push(5);
            h.c[5] = d;
            var k;
            e = n;
            d = [];
            var l, m = null;
            do {
                b = e;
                var p;
                try {
                    p = !!b && null != b.location.href && Rb(b, "foo")
                } catch (Ed) {
                    p = !1
                }
                p ? (l = b.location.href, m = b.document && b.document.referrer || null) : (l = m, m = null);
                d.push(new ng(l || "", b));
                try {
                    e = b.parent
                } catch (Ed) {
                    e =
                        null
                }
            } while (e && b != e);
            l = 0;
            for (var w = d.length - 1; l <= w; ++l) d[l].depth = w - l;
            b = n;
            if (b.location && b.location.ancestorOrigins && b.location.ancestorOrigins.length == d.length - 1)
                for (l = 1; l < d.length; ++l) {
                    var sa = d[l];
                    sa.url || (sa.url = b.location.ancestorOrigins[l - 1] || "", sa.Qc = !0)
                }
            for (var $a = new ng(n.location.href, n, !1), Cf = d.length - 1, w = Cf; 0 <= w; --w) {
                var $b = d[w];
                if ($b.url && !$b.Qc) {
                    $a = $b;
                    break
                }
            }
            var $b = null,
                zm = d.length && d[Cf].url;
            0 != $a.depth && zm && ($b = d[Cf]);
            k = new mg($a, $b);
            k.c && yd(h, 6, "top", k.c.url || "");
            yd(h, 7, "url", k.a.url ||
                "");
            Fd(this.g, f, h, c)
        } catch (Ed) {
            try {
                Fd(this.g, f, {
                    context: "ecmserr",
                    rctx: a,
                    msg: ug(Ed),
                    url: k.a.url
                }, c)
            } catch (ro) {}
        }
        return this.a
    };
    var qg = function(a) {
            return new pg(ug(a), a.fileName, a.lineNumber)
        },
        ug = function(a) {
            var b = a.toString();
            a.name && -1 == b.indexOf(a.name) && (b += ": " + a.name);
            a.message && -1 == b.indexOf(a.message) && (b += ": " + a.message);
            if (a.stack) {
                a = a.stack;
                var c = b;
                try {
                    -1 == a.indexOf(c) && (a = c + "\n" + a);
                    for (var d; a != d;) d = a, a = a.replace(/((https?:\/..*\/)[^\/:]*:\d+(?:.|\n)*)\2/, "$1");
                    b = a.replace(/\n */g, "\n")
                } catch (e) {
                    b = c
                }
            }
            return b
        };
    var vg = function(a, b) {
        gg.call(this, a, "");
        this.G = b;
        this.g = "studio-rl-error";
        this.a = null
    };
    C(vg, gg);
    vg.prototype.c = function() {
        if (null === this.a) return "";
        this.m = "&rl=" + this.G + "&err=" + encodeURIComponent(y(this.a) ? this.a : this.a instanceof Error ? ug(this.a) : "Failed to capture error message from: " + this.a.toString());
        return vg.C.c.call(this)
    };
    var wg = function(a) {
        L.call(this);
        this.j = a + ".js";
        this.c = new vg(.001, a);
        this.a = this.qb = null
    };
    C(wg, L);
    wg.prototype.g = function(a) {
        var b;
        if (b = a instanceof ErrorEvent) {
            b = a.filename;
            var c = this.j,
                d = b.length - c.length;
            b = 0 <= d && b.indexOf(c, d) == d
        }
        b && (this.c.a = a.error instanceof Error ? a.error : a.message, a = this.c.c(), Dd(n, a))
    };
    wg.prototype.D = function() {
        this.a && this.qb.removeEventListener("error", this.a, !1);
        wg.C.D.call(this)
    };
    var xg = function() {
        try {
            if ("" != n.document.referrer) return n.document.referrer;
            if (n.location.ancestorOrigins && n.location.ancestorOrigins[0]) return n.location.ancestorOrigins[0];
            if (top != n) return n.parent.location.href
        } catch (a) {}
        return n.location.href
    };
    var yg = "StopIteration" in n ? n.StopIteration : {
            message: "StopIteration",
            stack: ""
        },
        zg = function() {};
    zg.prototype.next = function() {
        throw yg;
    };
    zg.prototype.m = function() {
        return this
    };
    var Ag = function(a, b) {
        this.c = {};
        this.a = [];
        this.j = this.g = 0;
        var c = arguments.length;
        if (1 < c) {
            if (c % 2) throw Error("Uneven number of arguments");
            for (var d = 0; d < c; d += 2) this.set(arguments[d], arguments[d + 1])
        } else if (a) {
            a instanceof Ag ? (c = a.Ka(), d = a.ha()) : (c = ab(a), d = Za(a));
            for (var e = 0; e < c.length; e++) this.set(c[e], d[e])
        }
    };
    Ag.prototype.ha = function() {
        Bg(this);
        for (var a = [], b = 0; b < this.a.length; b++) a.push(this.c[this.a[b]]);
        return a
    };
    Ag.prototype.Ka = function() {
        Bg(this);
        return this.a.concat()
    };
    var Bg = function(a) {
        if (a.g != a.a.length) {
            for (var b = 0, c = 0; b < a.a.length;) {
                var d = a.a[b];
                Cg(a.c, d) && (a.a[c++] = d);
                b++
            }
            a.a.length = c
        }
        if (a.g != a.a.length) {
            for (var e = {}, c = b = 0; b < a.a.length;) d = a.a[b], Cg(e, d) || (a.a[c++] = d, e[d] = 1), b++;
            a.a.length = c
        }
    };
    Ag.prototype.get = function(a, b) {
        return Cg(this.c, a) ? this.c[a] : b
    };
    Ag.prototype.set = function(a, b) {
        Cg(this.c, a) || (this.g++, this.a.push(a), this.j++);
        this.c[a] = b
    };
    Ag.prototype.forEach = function(a, b) {
        for (var c = this.Ka(), d = 0; d < c.length; d++) {
            var e = c[d],
                f = this.get(e);
            a.call(b, f, e, this)
        }
    };
    Ag.prototype.m = function(a) {
        Bg(this);
        var b = 0,
            c = this.j,
            d = this,
            e = new zg;
        e.next = function() {
            if (c != d.j) throw Error("The map has changed since the iterator was created");
            if (b >= d.a.length) throw yg;
            var e = d.a[b++];
            return a ? e : d.c[e]
        };
        return e
    };
    var Cg = function(a, b) {
        return Object.prototype.hasOwnProperty.call(a, b)
    };
    var Dg = function(a) {
        if (a.ha && "function" == typeof a.ha) return a.ha();
        if (y(a)) return a.split("");
        if (ca(a)) {
            for (var b = [], c = a.length, d = 0; d < c; d++) b.push(a[d]);
            return b
        }
        return Za(a)
    };
    var Fg = function(a) {
            this.a = new Ag;
            a && Eg(this, a)
        },
        Gg = function(a) {
            var b = typeof a;
            return "object" == b && a || "function" == b ? "o" + ha(a) : b.substr(0, 1) + a
        },
        Eg = function(a, b) {
            b = Dg(b);
            for (var c = b.length, d = 0; d < c; d++) {
                var e = b[d];
                a.a.set(Gg(e), e)
            }
        };
    Fg.prototype.contains = function(a) {
        a = Gg(a);
        return Cg(this.a.c, a)
    };
    Fg.prototype.ha = function() {
        return this.a.ha()
    };
    Fg.prototype.m = function() {
        return this.a.m(!1)
    };
    var Q = function() {
        L.call(this);
        this.ra = new Vd(this);
        this.Ma = this;
        this.da = null
    };
    C(Q, L);
    Q.prototype[Qd] = !0;
    g = Q.prototype;
    g.hc = function(a) {
        this.da = a
    };
    g.removeEventListener = function(a, b, c, d) {
        le(this, a, b, c, d)
    };
    g.L = function(a) {
        var b, c = this.da;
        if (c) {
            b = [];
            for (var d = 1; c; c = c.da) b.push(c), ++d
        }
        c = this.Ma;
        d = a.type || a;
        if (y(a)) a = new N(a, c);
        else if (a instanceof N) a.target = a.target || c;
        else {
            var e = a;
            a = new N(d, c);
            fb(a, e)
        }
        var e = !0,
            f;
        if (b)
            for (var h = b.length - 1; 0 <= h; h--) f = a.a = b[h], e = Hg(f, d, !0, a) && e;
        f = a.a = c;
        e = Hg(f, d, !0, a) && e;
        e = Hg(f, d, !1, a) && e;
        if (b)
            for (h = 0; h < b.length; h++) f = a.a = b[h], e = Hg(f, d, !1, a) && e;
        return e
    };
    g.D = function() {
        Q.C.D.call(this);
        this.ra && Zd(this.ra, void 0);
        this.da = null
    };
    g.I = function(a, b, c, d) {
        return Xd(this.ra, String(a), b, !1, c, d)
    };
    g.Oa = function(a, b, c, d) {
        var e;
        e = this.ra;
        a = String(a).toString();
        if (a in e.a) {
            var f = e.a[a];
            b = Wd(f, b, c, d); - 1 < b ? (Ud(f[b]), Array.prototype.splice.call(f, b, 1), 0 == f.length && (delete e.a[a], e.c--), e = !0) : e = !1
        } else e = !1;
        return e
    };
    var Hg = function(a, b, c, d) {
        b = a.ra.a[String(b)];
        if (!b) return !0;
        b = b.concat();
        for (var e = !0, f = 0; f < b.length; ++f) {
            var h = b[f];
            if (h && !h.fb && h.vb == c) {
                var k = h.listener,
                    l = h.Ab || h.src;
                h.ub && Yd(a.ra, h);
                e = !1 !== k.call(l, d) && e
            }
        }
        return e && 0 != d.Vc
    };
    var Ig = function(a, b) {
        Q.call(this);
        this.j = a || 1;
        this.c = b || n;
        this.m = A(this.v, this);
        this.o = B()
    };
    C(Ig, Q);
    Ig.prototype.g = !1;
    Ig.prototype.a = null;
    Ig.prototype.v = function() {
        if (this.g) {
            var a = B() - this.o;
            0 < a && a < .8 * this.j ? this.a = this.c.setTimeout(this.m, this.j - a) : (this.a && (this.c.clearTimeout(this.a), this.a = null), this.L("tick"), this.g && (this.a = this.c.setTimeout(this.m, this.j), this.o = B()))
        }
    };
    Ig.prototype.start = function() {
        this.g = !0;
        this.a || (this.a = this.c.setTimeout(this.m, this.j), this.o = B())
    };
    var Jg = function(a) {
        a.g = !1;
        a.a && (a.c.clearTimeout(a.a), a.a = null)
    };
    Ig.prototype.D = function() {
        Ig.C.D.call(this);
        Jg(this);
        delete this.c
    };
    var Kg = function(a, b, c) {
        if (z(a)) c && (a = A(a, c));
        else if (a && "function" == typeof a.handleEvent) a = A(a.handleEvent, a);
        else throw Error("Invalid listener argument");
        return 2147483647 < Number(b) ? -1 : n.setTimeout(a, b || 0)
    };
    var Lg = function(a) {
        L.call(this);
        this.c = a;
        this.a = {}
    };
    C(Lg, L);
    var Mg = [];
    Lg.prototype.I = function(a, b, c, d) {
        x(b) || (b && (Mg[0] = b.toString()), b = Mg);
        for (var e = 0; e < b.length; e++) {
            var f = de(a, b[e], c || this.handleEvent, d || !1, this.c || this);
            if (!f) break;
            this.a[f.Rb] = f
        }
        return this
    };
    var Ng = function(a, b, c, d, e, f) {
        if (x(c))
            for (var h = 0; h < c.length; h++) Ng(a, b, c[h], d, e, f);
        else(b = ke(b, c, d || a.handleEvent, e, f || a.c || a)) && (a.a[b.Rb] = b)
    };
    Lg.prototype.Oa = function(a, b, c, d, e) {
        if (x(b))
            for (var f = 0; f < b.length; f++) this.Oa(a, b[f], c, d, e);
        else if (a = oe(a, b, c || this.handleEvent, d, e || this.c || this)) me(a), delete this.a[a.Rb];
        return this
    };
    var Og = function(a) {
        Wa(a.a, function(a, c) {
            this.a.hasOwnProperty(c) && me(a)
        }, a);
        a.a = {}
    };
    Lg.prototype.D = function() {
        Lg.C.D.call(this);
        Og(this)
    };
    Lg.prototype.handleEvent = function() {
        throw Error("EventHandler.handleEvent not implemented");
    };
    var Qg = function(a) {
        Q.call(this);
        this.a = this.j = null;
        this.c = new Lg(this);
        this.o = !1;
        Pg || (this.a = new Ig(100), this.c.I(this.a, "tick", this.g), this.a.start(), this.c.I(document, "DOMContentLoaded", this.g), this.c.I(document, "readystatechange", this.g), this.c.I(window, "load", this.m), this.g(), null != a && da(a) && Kg(this.m, a, this))
    };
    C(Qg, Q);
    var Pg = !1;
    Qg.prototype.g = function() {
        var a;
        if (a = J) {
            a = !1;
            try {
                a = null == window.frameElement
            } catch (b) {}
        }
        a && document.documentElement.doScroll ? a = Rg() : "undefined" === document.readyState ? document.getElementsByTagName ? (a = document.getElementsByTagName("*"), a = 0 < a.length ? a[a.length - 1] : null, this.j && a && this.j == a ? a = !0 : (this.j = a, a = !1)) : a = !1 : a = "complete" === document.readyState;
        a && this.m()
    };
    var Rg = function() {
        if (!document.documentElement.doScroll) return !1;
        try {
            return document.documentElement.doScroll("left"), !0
        } catch (a) {
            return !1
        }
    };
    Qg.prototype.D = function() {
        Sg(this);
        Qg.C.D.call(this)
    };
    var Sg = function(a) {
        a.c.dispose();
        a.a && (a.a.dispose(), a.a = null)
    };
    Qg.prototype.m = function() {
        this.o || (Pg = this.o = !0, Sg(this), this.L(new N("ready")))
    };
    var Tg = function(a) {
        this.a = a
    };
    var Ug = function() {
        this.v = {};
        this.c = this.a = null;
        this.g = [];
        this.j = !0
    };
    C(Ug, L);
    var Vg = function(a, b, c) {
        a.j = !1;
        if (null === a.a) {
            var d = z(n.MutationObserver || n.WebKitMutationObserver) ? a.o : a.m;
            a.a = new O(d, a)
        }
        af(a.a.then(b, u, c), function() {
            null === this.c || this.c.disconnect();
            this.j = !0
        }, a)
    };
    Ug.prototype.o = function(a) {
        Wg(this) ? a() : (this.c = new n.MutationObserver(A(function(b, c) {
            var d = !1;
            F(b, function(a) {
                "childList" == a.type && 0 != a.addedNodes.length && (d = !0)
            });
            d && Wg(this) && (c.disconnect(), a())
        }, this)), this.c.observe(n.document.documentElement, {
            childList: !0,
            subtree: !0
        }))
    };
    Ug.prototype.m = function(a) {
        var b = new Qg(1500);
        Pg ? Wg(this) && a() : de(b, "ready", function() {
            Wg(this) ? a() : Kg(function() {
                Wg(this) && a()
            }, 0, this)
        }, !1, this)
    };
    var Wg = function(a) {
        for (var b = a.g.length - 1; 0 <= b; --b) {
            var c;
            c = a.g[b];
            if (null === Sc(document, c)) {
                var d;
                b: {
                    var e = window;
                    try {
                        d = e.parent.document;
                        break b
                    } catch (f) {}
                    d = void 0
                }
                c = d ? null !== d.getElementById(c) : !1
            } else c = !0;
            if (!c) return a.g.length = b + 1, !1
        }
        a.g = [];
        return !0
    };
    Ug.prototype.D = function() {
        null === this.a || this.a.cancel();
        this.a = null;
        null === this.c || this.c.disconnect();
        this.c = null
    };
    var Xg = {
            Ge: "CLICK",
            gf: "IMPRESSION_JS",
            ff: "IMPRESSION_IMG",
            ze: "ARTWORK_IMPRESSION",
            Se: "ENGAGEMENT_IMG",
            We: "EXPANSION"
        },
        Yg = function(a) {
            return bb(Xg, a) ? a : null
        };
    var Zg = "undefined_type",
        $g = function() {
            return "undefined_type" === Zg ? null : Zg + "_rendering_lib_200_159"
        },
        ah = 0,
        bh = null;
    var ch = null,
        gh = function(a) {
            var b;
            b = ch;
            var c = a.o;
            dh[c] || (dh[c] = new eh(a, b, fh.getInstance()));
            b = dh[c];
            c = new Ug;
            a = a.j;
            for (var d = 0; d < a.length; ++d) {
                var e = a[d],
                    f = e.J;
                if (null != f) {
                    var h = c,
                        e = e.B;
                    h.j && (f = new Tg(f), h.a = null, h.v[null != e ? e : "."] = f, h.g.push(f.a))
                }
            }
            Vg(c, b.ce, b)
        },
        jh = function() {
            hh().then(ih)
        },
        mh = function(a) {
            var b = {
                Bb: 0 < kh(a, "FLASH").length,
                flashVersion: a.R,
                Vb: 0 < kh(a, "HTML5").length,
                html5Features: a.fa,
                gb: a.$
            };
            if (ag(b)) gh(a);
            else if (a.K) {
                var b = Fa(lh(a, "IMPRESSION_IMG"), function(a) {
                        return a.a
                    }),
                    c = lh(a,
                        "IMPRESSION_JS"),
                    c = Fa(c, function(a) {
                        return a.a
                    });
                eg(a.G, a.K, a.J, a.c, b, a.V.a, a.V.g, c)
            }
        },
        ih = function(a) {
            for (var b = 0; b < a.length; b++) mh(a[b])
        },
        nh = function(a) {
            dh[a] && dh[a].dispose()
        };
    var oh = function(a) {
            return /^\s*$/.test(a) ? !1 : /^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g, "@").replace(/(?:"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)[\s\u2028\u2029]*(?=:|,|]|}|$)/g, "]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g, ""))
        },
        ph = function(a) {
            a = String(a);
            if (oh(a)) try {
                return eval("(" + a + ")")
            } catch (b) {}
            throw Error("Invalid JSON string: " + a);
        },
        sh = function(a) {
            var b = [];
            qh(new rh, a, b);
            return b.join("")
        },
        rh = function() {},
        qh = function(a,
            b, c) {
            if (null == b) c.push("null");
            else {
                if ("object" == typeof b) {
                    if (x(b)) {
                        var d = b;
                        b = d.length;
                        c.push("[");
                        for (var e = "", f = 0; f < b; f++) c.push(e), qh(a, d[f], c), e = ",";
                        c.push("]");
                        return
                    }
                    if (b instanceof String || b instanceof Number || b instanceof Boolean) b = b.valueOf();
                    else {
                        c.push("{");
                        e = "";
                        for (d in b) Object.prototype.hasOwnProperty.call(b, d) && (f = b[d], "function" != typeof f && (c.push(e), th(d, c), c.push(":"), qh(a, f, c), e = ","));
                        c.push("}");
                        return
                    }
                }
                switch (typeof b) {
                    case "string":
                        th(b, c);
                        break;
                    case "number":
                        c.push(isFinite(b) &&
                            !isNaN(b) ? String(b) : "null");
                        break;
                    case "boolean":
                        c.push(String(b));
                        break;
                    case "function":
                        c.push("null");
                        break;
                    default:
                        throw Error("Unknown type: " + typeof b);
                }
            }
        },
        uh = {
            '"': '\\"',
            "\\": "\\\\",
            "/": "\\/",
            "\b": "\\b",
            "\f": "\\f",
            "\n": "\\n",
            "\r": "\\r",
            "\t": "\\t",
            "\x0B": "\\u000b"
        },
        vh = /\uffff/.test("\uffff") ? /[\\\"\x00-\x1f\x7f-\uffff]/g : /[\\\"\x00-\x1f\x7f-\xff]/g,
        th = function(a, b) {
            b.push('"', a.replace(vh, function(a) {
                var b = uh[a];
                b || (b = "\\u" + (a.charCodeAt(0) | 65536).toString(16).substr(1), uh[a] = b);
                return b
            }), '"')
        };
    var wh = function(a) {
        this.a = a
    };
    r("studio.common.mde.Direction", wh, void 0);
    wh.prototype.toString = function() {
        return (this.a & 2 ? "b" : "t") + (this.a & 1 ? "r" : "l")
    };
    var xh = function(a, b, c) {
            return new Pa(a.a & 2 ? b.top : 0, a.a & 1 ? c.width : b.right, a.a & 2 ? c.height : b.bottom, a.a & 1 ? b.left : 0)
        },
        yh = new wh(0),
        zh = new wh(1),
        Ah = new wh(2),
        Bh = new wh(3);
    var Ch = function(a, b, c) {
        L.call(this);
        this.c = a;
        this.m = b || 0;
        this.g = c;
        this.j = A(this.o, this)
    };
    C(Ch, L);
    Ch.prototype.a = 0;
    Ch.prototype.D = function() {
        Ch.C.D.call(this);
        Dh(this);
        delete this.c;
        delete this.g
    };
    Ch.prototype.start = function(a) {
        Dh(this);
        this.a = Kg(this.j, q(a) ? a : this.m)
    };
    var Dh = function(a) {
        0 != a.a && n.clearTimeout(a.a);
        a.a = 0
    };
    Ch.prototype.o = function() {
        this.a = 0;
        this.c && this.c.call(this.g)
    };
    var Eh = {},
        Fh = null,
        Gh = function(a) {
            a = ha(a);
            delete Eh[a];
            cb(Eh) && Fh && Dh(Fh)
        },
        Ih = function() {
            Fh || (Fh = new Ch(function() {
                Hh()
            }, 20));
            var a = Fh;
            0 != a.a || a.start()
        },
        Hh = function() {
            var a = B();
            Wa(Eh, function(b) {
                Jh(b, a)
            });
            cb(Eh) || Ih()
        };
    var Kh = function() {
        Q.call(this);
        this.g = 0;
        this.v = this.j = null
    };
    C(Kh, Q);
    Kh.prototype.H = v;
    Kh.prototype.A = v;
    Kh.prototype.c = function(a) {
        this.L(a)
    };
    var Lh = function(a, b, c, d) {
        Kh.call(this);
        if (!x(a) || !x(b)) throw Error("Start and end parameters must be arrays");
        if (a.length != b.length) throw Error("Start and end points must be the same length");
        this.m = a;
        this.J = b;
        this.F = c;
        this.B = d;
        this.o = [];
        this.a = 0
    };
    C(Lh, Kh);
    Lh.prototype.H = function(a) {
        if (a || 0 == this.g) this.a = 0, this.o = this.m;
        else if (1 == this.g) return !1;
        Gh(this);
        this.j = a = B(); - 1 == this.g && (this.j -= this.F * this.a);
        this.v = this.j + this.F;
        this.a || this.c("begin");
        this.c("play"); - 1 == this.g && this.c("resume");
        this.g = 1;
        var b = ha(this);
        b in Eh || (Eh[b] = this);
        Ih();
        Jh(this, a);
        return !0
    };
    Lh.prototype.A = function(a) {
        Gh(this);
        this.g = 0;
        a && (this.a = 1);
        Mh(this, this.a);
        this.c("stop");
        this.c("end")
    };
    Lh.prototype.D = function() {
        0 == this.g || this.A(!1);
        this.c("destroy");
        Lh.C.D.call(this)
    };
    var Jh = function(a, b) {
            b < a.j && (a.v = b + a.v - a.j, a.j = b);
            a.a = (b - a.j) / (a.v - a.j);
            1 < a.a && (a.a = 1);
            Mh(a, a.a);
            1 == a.a ? (a.g = 0, Gh(a), a.c("finish"), a.c("end")) : 1 == a.g && a.c("animate")
        },
        Mh = function(a, b) {
            z(a.B) && (b = a.B(b));
            a.o = Array(a.m.length);
            for (var c = 0; c < a.m.length; c++) a.o[c] = (a.J[c] - a.m[c]) * b + a.m[c]
        };
    Lh.prototype.c = function(a) {
        this.L(new Nh(a, this))
    };
    var Nh = function(a, b) {
        N.call(this, a);
        this.c = b.o;
        this.g = b.a;
        this.state = b.g
    };
    C(Nh, N);
    var Ph = function() {
        Q.call(this);
        this.H = this.ib();
        Oh(this)
    };
    C(Ph, Q);
    Ph.prototype.ib = v;
    Ph.prototype.ta = function() {
        Oh(this)
    };
    Ph.prototype.sa = function() {
        Oh(this)
    };
    var Oh = function(a) {
        if (!a.H) throw Error("Not in a supported iframe");
    };
    Ph.prototype.m = function(a) {
        this.L(new Qh("a", this, a))
    };
    var Rh = function(a) {
        a.L(new Qh("e", a))
    };
    g = Ph.prototype;
    g.xb = v;
    g.Ob = v;
    g.dc = v;
    g.cc = v;
    g.Ib = function() {
        return !1
    };
    var Qh = function(a, b, c) {
        N.call(this, a, b);
        this.c = c || null
    };
    C(Qh, N);
    r("studio.common.gdn.Environment.EngagementPhase", {
        INVITATION: 0,
        ENGAGED: 1,
        INVITATION_LARGE_CANVAS: 2
    }, void 0);
    var Sh = function() {
        var a = "2mdn.net/879366/" + $g() + ".js",
            b;
        z(t("performance.getEntriesByType", window)) && (b = Ia(window.performance.getEntriesByType("resource"), function(b) {
            return y(b.name) ? -1 != b.name.indexOf(a) : !1
        }));
        var c = null != b ? b.duration : -1;
        b = null != b ? b.transferSize : -1;
        var d = t("navigator.connection.type", window) || -1,
            e = {}; - 1 != c && (e.resourceDuration = Math.floor(100 * c) / 100); - 1 != b && (e.transferSize = b); - 1 != d && (e.connectionType = d);
        return e
    };
    var Th = new H(-1, -1),
        Uh = new G(-1, -1);
    var Vh = function(a, b, c) {
        Ph.call(this);
        this.c = CreativeToolset.getInstance();
        this.g = c;
        Ra(a, new H(0, 0)) && (a = new H(b.width, b.height));
        c = Ua(b);
        b = Math.min(a.width, Math.max(c.right, a.width - c.left));
        c = Math.min(a.height, Math.max(c.bottom, a.height - c.top));
        this.j = {
            width: this.g ? a.width : b,
            height: this.g ? a.height : c,
            expansionMode: this.g ? CreativeToolset.ExpansionMode.LIGHTBOX : CreativeToolset.ExpansionMode.NORMAL,
            expansionCallback: A(this.sd, this),
            aboutToExpandCallback: A(this.pd, this),
            collapseCallback: A(this.qd, this),
            initiateCollapseCallback: A(this.rd, this),
            initiateFullscreenExpansionCallback: A(this.ud, this)
        };
        this.a = "collapsed";
        a = t("CreativeToolset.internals.gen204.sampledInfo");
        z(a) && (b = Sh(), a("rendering_lib_created", b))
    };
    C(Vh, Ph);
    Vh.prototype.ib = function() {
        return Wh()
    };
    var Wh = function() {
        return !(!n.IN_ADSENSE_IFRAME || !n.CreativeToolset)
    };
    g = Vh.prototype;
    g.ta = function(a, b) {
        Vh.C.ta.call(this);
        this.a = "expanding";
        a && b ? this.c.expandWindow(a, b) : this.c.expandWindow()
    };
    g.sa = function() {
        Vh.C.sa.call(this);
        this.a = "collapsing";
        this.c.collapseWindow()
    };
    g.sd = function(a, b, c) {
        "expanding" == this.a ? (this.a = "expanded", this.m(this.g ? null : [yh, zh, Bh, Ah][c])) : "expanding_fullscreen" == this.a && (this.a = "fullscreen", this.L(new Qh("c", this)))
    };
    g.ud = function() {
        "collapsed" == this.a && this.L(new Qh("d", this))
    };
    g.pd = function() {
        "collapsed" != this.a && "expanding" != this.a && "expanding_fullscreen" != this.a || this.L(new Qh("b", this))
    };
    g.qd = function() {
        this.a = "collapsed";
        Rh(this)
    };
    g.rd = function() {
        "expanded" == this.a || "expanding" == this.a ? this.L(new Qh("f", this)) : "fullscreen" != this.a && "expanding_fullscreen" != this.a || this.L(new Qh("g", this))
    };
    g.Ib = function() {
        return !0
    };
    var Xh = function(a, b) {
        a.c.setExternalResizeCallback && a.c.setExternalResizeCallback(b)
    };
    Vh.prototype.xb = function() {
        return new O(function(a, b) {
            this.c.getMaxExpandableSize(function(c) {
                c ? (c = new H(c.lightboxWidth, c.lightboxHeight), a(0 < c.a() ? c : Th)) : b(Error("Unable to get dimensions (GdnFrameManager)"))
            })
        }, this)
    };
    Vh.prototype.Ob = function(a, b) {
        return new G((b.width - a.width) / 2, (b.height - a.height) / 2)
    };
    Vh.prototype.dc = function(a) {
        return new O(function(b, c) {
            "collapsed" == this.a || "expanding_fullscreen" == this.a ? (this.a = "expanding_fullscreen", ne(this), ke(this, "c", function() {
                b(a)
            }), this.c.expandWindow(a.width, a.height)) : c(Error("GdnFrameManager: could not go fullscreen, not in collapsed or expanding fullscreen state"))
        }, this)
    };
    Vh.prototype.cc = function() {
        try {
            if ("fullscreen" != this.a) return !1;
            this.a = "collapsing_fullscreen";
            this.c.collapseWindow();
            return !0
        } catch (a) {
            return !1
        }
    };
    var Yh = function() {
        Q.call(this);
        this.c = new Lg(this);
        Nd(this, ka(M, this.c))
    };
    C(Yh, Q);
    Yh.prototype.Zc = v;
    Yh.prototype.close = v;
    Yh.prototype.Yc = v;
    var fh = function() {
        Yh.call(this);
        this.a = window.mraid || null
    };
    C(fh, Yh);
    aa(fh);
    var Zh = /doubleclick.net\/(pf)?ad/;
    g = fh.prototype;
    g.Zc = function(a) {
        Zh.test(a) ? this.a.expand(a) : this.a.open(a)
    };
    g.close = function() {
        return this.a.close()
    };
    g.Yc = function() {
        "loading" == this.a.getState() ? this.a.addEventListener("ready", A(this.kc, this)) : this.kc()
    };
    g.kc = function() {
        try {
            this.a.removeEventListener("ready", A(this.kc, this))
        } catch (a) {
            this.a.removeEventListener("ready")
        }
        this.a.addEventListener("viewableChange", A(this.Nc, this));
        this.a.addEventListener("stateChange", A(this.Id, this));
        this.L("ready");
        this.a.isViewable() && this.Nc()
    };
    g.Id = function() {
        this.L("state_change")
    };
    g.Nc = function() {
        this.a.isViewable() ? this.L("show") : this.L("hide")
    };
    g.D = function() {
        this.a = null;
        fh.C.D.call(this)
    };
    var $h = function() {
        Ph.call(this);
        this.a = fh.getInstance();
        this.g = this.c = null;
        this.o = this.j = !1;
        this.v = "default";
        "loading" == this.a.a.getState() ? (this.c = A(this.$c, this), de(this.a, "ready", this.c, !1, this)) : this.$c()
    };
    C($h, Ph);
    g = $h.prototype;
    g.$c = function() {
        this.c && (le(this.a, "ready", this.c, !1, this), this.c = null);
        this.g = A(this.Pd, this);
        de(this.a, "state_change", this.g, !1, this)
    };
    g.Pd = function() {
        var a = this.a.a.getState();
        "expanded" == this.v && "default" == a && (this.j ? this.o ? this.L(new Qh("g", this)) : this.L(new Qh("f", this)) : this.o || Rh(this));
        "default" == this.v && "expanded" == a && (this.o ? this.L(new Qh("c", this)) : this.m());
        this.v = a
    };
    g.ib = function() {
        return window.mraid
    };
    g.Ib = function() {
        return !0
    };
    g.Ob = function() {
        return Uh
    };
    g.xb = function() {
        return new O(function(a) {
            if (this.a.a.getMaxSize) {
                var b = this.a.a.getMaxSize();
                if (b && q(b.width) && q(b.height)) {
                    a(new H(b.width, b.height));
                    return
                }
            }
            a(Th)
        }, this)
    };
    g.dc = function(a) {
        return new O(function(b) {
            ke(this, "c", function() {
                b(a)
            });
            this.j = this.o = !0;
            this.a.a.expand()
        }, this)
    };
    g.cc = function() {
        this.o = !0;
        this.j = !1;
        return "expanded" == this.a.a.getState() ? (this.a.a.close(), !0) : !1
    };
    g.ta = function() {
        this.j = !0;
        $h.C.ta.call(this);
        this.a.a.expand()
    };
    g.sa = function() {
        $h.C.sa.call(this);
        this.j = !1;
        "expanded" == this.a.a.getState() && this.a.a.close()
    };
    g.D = function() {
        this.c && (le(this.a, "ready", this.c, !1, this), this.c = null);
        this.g && (le(this.a, "state_change", this.g, !1, this), this.g = null)
    };
    var bi = function(a, b) {
        Ph.call(this);
        this.a = ai();
        var c = Ua(b);
        this.a.init({
            width: b.width,
            height: b.height,
            offsetLeft: c.left,
            offsetTop: c.top,
            offsetRight: a.width - c.right,
            offsetBottom: a.height - c.bottom
        })
    };
    C(bi, Ph);
    var ai = function() {
        try {
            return window.$WLXRmAd || window.parent && window.parent.$WLXRmAd
        } catch (a) {}
    };
    bi.prototype.ib = function() {
        return !!ai()
    };
    bi.prototype.ta = function() {
        bi.C.ta.call(this);
        this.a.expand();
        Kg(this.m, 500, this)
    };
    bi.prototype.sa = function() {
        bi.C.sa.call(this);
        this.a.collapse()
    };
    var ci = function(a, b) {
        this.N = a;
        this.O = b
    };
    C(ci, G);
    var di = function(a, b, c, d) {
        Ph.call(this);
        this.a = window.$sf;
        this.F = d && this.a.ext && this.a.ext.supports() && this.a.ext.supports()["exp-push"];
        this.c = new ci(b.left, b.top);
        this.A = new ci(b.width, b.height);
        b = this.c;
        c = this.A;
        b = new ci(b.N + c.N, b.O + c.O);
        a = new ci(a.width, a.height);
        this.j = new ci(a.N - b.N, a.O - b.O);
        a = 0 == this.c.O || 0 == this.j.O;
        this.B = !((0 == this.c.N || 0 == this.j.N) && a);
        a = {
            l: this.c.N,
            t: this.c.O,
            r: this.j.N,
            b: this.j.O,
            push: this.F
        };
        this.B && (a.t = 0, a.l = 0);
        this.o = this.v = a;
        this.a.ext.register(this.A.N, this.A.O,
            A(this.ae, this))
    };
    C(di, Ph);
    g = di.prototype;
    g.ib = function() {
        return !!t("$sf.ext")
    };
    g.ta = function() {
        di.C.ta.call(this);
        if (this.a.ext) try {
            var a;
            if (this.B && z(this.a.ext.geom)) try {
                var b = this.a.ext.geom(),
                    c = {
                        l: this.c.N,
                        t: this.c.O,
                        r: this.j.N,
                        b: this.j.O
                    },
                    d = parseInt(b.exp.l, 10) > parseInt(b.exp.r, 10) ? "l" : "r",
                    e = parseInt(b.exp.t, 10) > parseInt(b.exp.b, 10) ? "t" : "b",
                    f = {
                        l: 0,
                        t: 0,
                        r: 0,
                        b: 0,
                        push: this.F
                    };
                f[d] = c[d];
                f[e] = c[e];
                a = f
            } catch (h) {
                a = this.v
            } else a = this.v;
            this.o = a;
            this.a.ext.expand(this.o)
        } catch (h) {}
    };
    g.sa = function() {
        di.C.sa.call(this);
        if (this.a.ext) try {
            this.a.ext.collapse()
        } catch (a) {}
    };
    g.xb = function() {
        return new O(function(a, b) {
            z(this.a.ext.geom) ? (b = this.a.ext.geom(), a(new H(b.win.w, b.win.h))) : b(Error("Unable to get max dimensions (SafeFrames)"))
        }, this)
    };
    g.Ib = function() {
        return !1
    };
    g.ae = function(a) {
        if (!this.g) switch (a) {
            case "expanded":
                a = this.o;
                this.m(0 == a.l && 0 == a.t && Bh || 0 == a.r && 0 == a.t && Ah || 0 == a.r && 0 == a.b && yh || 0 == a.l && 0 == a.b && zh || Bh);
                break;
            case "collapsed":
                Rh(this)
        }
    };
    var ei = function(a, b) {
        Ph.call(this);
        this.a = window.Y.SandBox.vendor;
        this.j = a;
        this.g = b;
        this.c = void 0;
        this.a.register(b.width, b.height, A(this.o, this))
    };
    C(ei, Ph);
    ei.prototype.ib = function() {
        return fi()
    };
    var fi = function() {
        return window.Y && window.Y.SandBox && window.Y.SandBox.vendor
    };
    ei.prototype.ta = function() {
        ei.C.ta.call(this);
        var a, b = Ua(this.g),
            c = this.j;
        a = -b.top;
        var d = -b.left,
            e = c.width - b.right,
            b = c.height - b.bottom,
            c = null;
        try {
            c = this.a.geom().exp
        } catch (f) {
            c = {
                t: a,
                l: d,
                r: e,
                b: b
            }
        }
        a = new G(e <= c.r && e || d >= -c.l && d || e || d, b <= c.b && b || a >= -c.t && a || b || a);
        this.c = 0 > a.O ? 0 > a.N ? yh : zh : 0 > a.N ? Ah : Bh;
        this.a.expand(a.N, a.O)
    };
    ei.prototype.sa = function() {
        ei.C.sa.call(this);
        this.a.collapse()
    };
    ei.prototype.o = function(a) {
        "collapsed" == a ? Rh(this) : "expanded" == a && this.m(this.c)
    };
    var gi = void 0,
        hi = null,
        ki = function() {
            void 0 === gi && (gi = Ia(ii, ji) || "none");
            return gi
        },
        li = function() {
            return "gdn" == ki()
        },
        mi = function(a) {
            switch (a) {
                case "gdn":
                    return Vh;
                case "yahoo":
                    return ei;
                case "msn":
                    return bi;
                case "safe":
                    return di;
                case "mraid":
                    return $h;
                default:
                    return null
            }
        },
        ji = function(a) {
            switch (a) {
                case "gdn":
                    return Wh();
                case "yahoo":
                    return fi();
                case "msn":
                    return !!ai();
                case "safe":
                    return !!t("$sf.ext");
                case "mraid":
                    return window.mraid;
                default:
                    return !1
            }
        },
        ii = "gdn mraid safe yahoo msn none".split(" ");
    var ni = function(a) {
            this.a = [];
            this.c = a
        },
        pi = function(a, b, c) {
            b = a.c.Qb(b);
            for (var d = 0; d < b.length; d++) {
                var e = b[d],
                    f = e.element,
                    h = e.Na,
                    e = e.attributes;
                c && oi(a, f, h, e);
                if (h) {
                    var k = f,
                        l = void 0;
                    for (l in h) k.style[l] = h[l]
                }
                if (e)
                    for (k in k = void 0, e) f.setAttribute(k, e[k])
            }
            return a
        },
        oi = function(a, b, c, d) {
            var e = {};
            e.element = b;
            c && (e.Na = Ya(c, function(a, c) {
                return b.style[c]
            }));
            d && (e.attributes = Ya(d, function(a, c) {
                return b.getAttribute(c)
            }));
            a.a.push(e)
        },
        qi = function(a) {
            for (var b; b = a.a.pop();) {
                var c = b.element;
                if (b.Na)
                    for (var d in b.Na) c.style[d] =
                        b.Na[d];
                if (b.attributes)
                    for (var e in b.attributes) c.setAttribute(e, b.attributes[e])
            }
        };
    var ti = function(a, b, c) {
        Q.call(this);
        this.B = null;
        this.g = !1;
        this.F = new ni(a);
        this.M = !!c;
        this.m = new Lg(this);
        this.P = b;
        this.v = this.j = null;
        this.o = !1;
        this.c = this.a = null;
        this.J = ri();
        si(this) && this.m.I(si(this), "g", A(this.L, this))
    };
    C(ti, Q);
    var ri = Of || Nf ? function() {
            return new H(window.innerWidth, window.innerHeight)
        } : Vc,
        ui = function(a, b) {
            li() && Xh(si(a), A(function() {
                this.o && this.g && b()
            }, a))
        },
        wi = function(a) {
            return new O(function(a) {
                var b = si(this);
                b && !b.Ib() ? a(!1) : (b = bf(vi(this).then(function(a) {
                    return 0 < a.width && 0 < a.height || Ra(a, Th)
                }), function() {
                    return !1
                }), a(b))
            }, a)
        },
        vi = function(a) {
            return new O(function(a, c) {
                var b = si(this);
                b ? a(b.xb()) : this.M || window == window.top ? a(ri()) : c("Could not get available dimensions (in sandboxed iframe)")
            }, a)
        };
    ti.prototype.K = function(a) {
        var b;
        if (b = a.ka) {
            b = a.ka;
            var c = a.Pa;
            b = !(b.width <= c.width && b.height <= c.height)
        }
        if (b) throw Error("Cannot establish expanded rectangle (requested size too large)");
        b = a.ka ? a.ka : a.Pa;
        var c = new G(Math.max(0, (a.Pa.width - b.width) / 2), Math.max(0, (a.Pa.height - b.height) / 2)),
            d;
        si(this) ? (d = si(this).Ob(a.collapsed, a.Pa), d = d == Uh || d && Uh && d.N == Uh.N && d.O == Uh.O ? Uh : new G(d.N - c.N, d.O - c.O)) : (d = md(this.P), d = new G(d.N - c.N, d.O - c.O));
        b = new Ta(si(this) ? 0 : c.N, si(this) ? 0 : c.O, b.width, b.height);
        return {
            Pa: a.Pa,
            ka: a.ka,
            fixed: !!a.ka,
            dd: d,
            Ya: b
        }
    };
    var xi = function(a, b, c) {
        return a.g ? Te() : vi(a).then(function(a) {
            return {
                Pa: a,
                ka: c,
                collapsed: b
            }
        }).then(a.K, void 0, a).then(function(a) {
            return si(this) ? si(this).dc(a.Ya).then(function(b) {
                a.Ya = b;
                return a
            }) : a
        }, void 0, a)
    };
    ti.prototype.H = function(a) {
        Ra(Va(a.Ya), Th) || pi(this.F, a.Ya, !0);
        this.a = a;
        yi(this);
        this.j = A(this.R, this);
        Of || Nf ? (this.c = new Ig(50), this.m.I(this.c, "tick", this.A), this.c.start()) : this.m.I(window, ["resize", "orientationchange"], this.j);
        this.g = !0;
        return a
    };
    var zi = function(a, b) {
            a.g && (a.v && a.v.cancel(), b && si(a) && si(a).cc(), qi(a.F), yi(a), a.g = !1, a.v = null)
        },
        yi = function(a) {
            a.j && (a.m.Oa(window, ["resize", "orientationchange"], a.j), a.j = null);
            a.c && (a.m.Oa(a.c, "tick", a.A), Jg(a.c))
        };
    ti.prototype.A = function() {
        var a = new H(window.innerWidth, window.innerHeight);
        Ra(this.J, a) || this.j();
        this.J = a
    };
    ti.prototype.R = function() {
        this.v = vi(this).then(function(a) {
            a = this.a.fixed ? new Ta(Math.max(0, (a.width - this.a.ka.width) / 2), Math.max(0, (a.height - this.a.ka.height) / 2), this.a.ka.width, this.a.ka.height) : new Ta(0, 0, a.width, a.height);
            Ra(Va(a), Th) || pi(this.F, a, !1)
        }, void 0, this)
    };
    var si = function(a) {
        null == a.B && (a.B = hi);
        return a.B
    };
    ti.prototype.D = function() {
        M(this.m);
        this.c && (le(this.c, "tick", this.A, !1, this), M(this.c));
        ti.C.D.call(this)
    };
    var Bi = function(a, b, c, d) {
        this.c = a;
        this.g = {};
        this.m = [];
        a = pd(this.c);
        this.j = c || new Ta(0, 0, a.width, a.height);
        this.o = null;
        this.a = b;
        this.v = !1;
        this.A = !!d;
        2 == (this.a & 2) && (Ai(this, !0, !0), this.m = [])
    };
    C(Bi, L);
    var Di = function(a) {
            a.o || Ci(a);
            return a.o
        },
        Ci = function(a) {
            var b = qd(a.c);
            0 <= a.c.offsetLeft && (b.left += a.j.left);
            0 <= a.c.offsetTop && (b.top += a.j.top);
            b.width = Math.max(b.width, a.j.width);
            b.height = Math.max(b.height, a.j.height);
            a.o = b
        },
        Fi = function(a, b) {
            a.v && b || (b && a.A && Ci(a), 1 == (a.a & 1) && (Ei(a, "OBJECT", b), Ei(a, "embed", b)), 32 != (a.a & 32) && 16 != (a.a & 16) && 4 != (a.a & 4) && 8 != (a.a & 8) || Ai(a, b), a.v = b)
        },
        Ai = function(a, b, c) {
            if (b) {
                b = Qc(a.c);
                for (var d = ad(a.c); d && d != b; d = ad(d)) {
                    var e = {};
                    if (c) Gi(a, d, e);
                    else {
                        if (4 == (a.a & 4)) {
                            var f =
                                a,
                                h = e,
                                k = hd(d, "zIndex");
                            isNaN(parseInt(k, 10)) || (h.zIndex = f.c.style.zIndex)
                        }
                        8 == (a.a & 8) && Gi(a, d, e);
                        16 == (a.a & 16) && (f = e, h = Hi(d, "backface-visibility"), "hidden" == h.value && (f[Ba(h.oc)] = "visible"));
                        32 == (a.a & 32) && (f = e, h = Hi(d, "transform"), D(E(h.value)) || "none" == h.value || (f[Ba(h.oc)] = "none"))
                    }
                    cb(e) || a.m.push(pi(new ni(new Ii([{
                        element: d,
                        Na: e
                    }])), null, !0))
                }
            } else
                for (; 0 < a.m.length;) qi(a.m.pop())
        },
        Gi = function(a, b, c) {
            "hidden" != hd(b, "overflowX") && "hidden" != hd(b, "overflowY") || qd(b).contains(Di(a)) || (c.overflowX = "visible",
                c.overflowY = "visible", c.overflow = "visible")
        },
        Hi = function(a, b) {
            var c = mc() + "-" + b,
                d = gd(a, c);
            return null === d ? {
                oc: b,
                value: gd(a, b)
            } : {
                oc: c,
                value: d
            }
        },
        Ei = function(a, b, c) {
            if (c) {
                a.g[b] = a.g[b] || [];
                c = document;
                var d = b && "*" != b ? String(b).toUpperCase() : "";
                c = c.querySelectorAll && c.querySelector && d ? c.querySelectorAll(d + "") : c.getElementsByTagName(d || "*");
                for (d = 0; d < c.length; d++) {
                    var e = c[d],
                        f = Di(a),
                        h = qd(e);
                    f.left <= h.left + h.width && h.left <= f.left + f.width && f.top <= h.top + h.height && h.top <= f.top + f.height && e != a.c && !bd(a.c, e) &&
                        (a.g[b].push({
                            visibility: e.style.visibility,
                            element: e
                        }), e.style.visibility = "hidden")
                }
            } else
                for (; a.g[b] && 0 < a.g[b].length;) c = a.g[b].pop(), c.element.style.visibility = c.visibility
        };
    Bi.prototype.D = function() {
        Fi(this, !1);
        Ai(this, !1);
        Bi.C.D.call(this)
    };
    var Ii = function(a) {
        this.a = a
    };
    Ii.prototype.Qb = function() {
        return this.a
    };
    var Ji = function(a, b, c) {
        if (b instanceof H) c = b.height, b = b.width;
        else if (void 0 == c) throw Error("missing height argument");
        b = 0 < parseInt(b, 10) ? b : "100%";
        c = 0 < parseInt(c, 10) ? c : "100%";
        nd(a, b, c)
    };
    var Ki = {
        3: "INTERACTION_TIMER",
        EVENT_USER_INTERACTION: "INTERACTIVE_IMPRESSION",
        EVENT_MANUAL_CLOSE: "MANUAL_CLOSE",
        EVENT_VIDEO_PLAY: "VIDEO_PLAY",
        EVENT_VIDEO_VIEW_TIMER: "VIDEO_VIEW_TIMER",
        EVENT_VIDEO_COMPLETE: "VIDEO_COMPLETE",
        EVENT_VIDEO_INTERACTION: "VIDEO_INTERACTION",
        EVENT_VIDEO_PAUSE: "VIDEO_PAUSE",
        EVENT_VIDEO_MUTE: "VIDEO_MUTE",
        EVENT_VIDEO_REPLAY: "VIDEO_REPLAY",
        EVENT_VIDEO_FIRSTQUARTILE: "VIDEO_FIRST_QUARTILE",
        EVENT_VIDEO_MIDPOINT: "VIDEO_MIDPOINT",
        EVENT_VIDEO_THIRDQUARTILE: "VIDEO_THIRD_QUARTILE",
        EVENT_VIDEO_STOP: "VIDEO_STOP",
        EVENT_VIDEO_UNMUTE: "VIDEO_UNMUTE",
        EVENT_FULLSCREEN: "FULL_SCREEN",
        DISPLAY_TIMER: "DISPLAY_TIMER",
        INTERACTION_TIMER: "INTERACTION_TIMER",
        INTERACTIVE_IMPRESSION: "INTERACTIVE_IMPRESSION",
        MANUAL_CLOSE: "MANUAL_CLOSE",
        BACKUP_IMAGE_IMPRESSION: "BACKUP_IMAGE_IMPRESSION",
        EXPAND_TIMER: "EXPAND_TIMER",
        VIDEO_PLAY: "VIDEO_PLAY",
        VIDEO_VIEW_TIMER: "VIDEO_VIEW_TIMER",
        VIDEO_COMPLETE: "VIDEO_COMPLETE",
        VIDEO_INTERACTION: "VIDEO_INTERACTION",
        VIDEO_PAUSE: "VIDEO_PAUSE",
        VIDEO_MUTE: "VIDEO_MUTE",
        VIDEO_REPLAY: "VIDEO_REPLAY",
        VIDEO_FIRST_QUARTILE: "VIDEO_FIRST_QUARTILE",
        VIDEO_MIDPOINT: "VIDEO_MIDPOINT",
        VIDEO_THIRD_QUARTILE: "VIDEO_THIRD_QUARTILE",
        VIDEO_STOP: "VIDEO_STOP",
        VIDEO_UNMUTE: "VIDEO_UNMUTE",
        FULL_SCREEN: "FULL_SCREEN",
        HTML5_CREATIVE_IMPRESSION: "HTML5_CREATIVE_IMPRESSION"
    };
    var Li = function(a, b, c) {
        N.call(this, a);
        this.c = b || void 0;
        this.data = c
    };
    C(Li, N);
    var Mi = function(a, b, c, d) {
        N.call(this, a);
        this.c = b;
        this.G = c;
        this.A = !!d
    };
    C(Mi, N);
    var Ni = function(a, b, c, d) {
        "Count" == b && (d = !0);
        Mi.call(this, a, b, !0, d);
        this.g = c
    };
    C(Ni, Mi);
    var Oi = function(a, b, c, d) {
        Ni.call(this, a, b, c);
        this.videoName = d
    };
    C(Oi, Ni);
    var Pi = function(a, b, c, d, e) {
        Mi.call(this, a, b, !1, e);
        this.m = c;
        this.v = d
    };
    C(Pi, Mi);
    var Qi = function(a, b) {
        N.call(this, "reportCustomVariable");
        this.c = a;
        this.g = b
    };
    C(Qi, N);
    var Ri = function(a, b, c, d, e) {
        Pi.call(this, a, "Exit", b, !0);
        this.o = "null" != c ? c : null;
        this.g = "null" != d ? d : null;
        this.log = e
    };
    C(Ri, Pi);
    var Si = function(a) {
        N.call(this, "invokeExternalJSFunction");
        this.c = a
    };
    C(Si, N);
    var Ti = function(a) {
        N.call(this, "setThrottlingWindow");
        this.c = a
    };
    C(Ti, N);
    var Ui = function(a, b, c) {
        N.call(this, "setTimerAdjustment");
        this.m = a;
        this.c = b;
        this.g = c
    };
    C(Ui, N);
    var Vi = function(a) {
        N.call(this, "registerChargeableEventName");
        this.c = a
    };
    C(Vi, N);
    var Wi = function() {
        N.call(this, "updateVideoProgress")
    };
    C(Wi, N);
    var Zi = function(a, b) {
            switch (a) {
                case "logEvent":
                    return Xi(b);
                case "logVideoEvent":
                    return new Oi("logVideoEvent", b[0], Ki[b[2]], b[1]);
                case "updateVideoProgress":
                    return new Wi;
                case "logEventFlushCounters":
                    return b[0] = "Exit", Xi(b, !0);
                case "logExitFlushEventsOpenPopup":
                    return Yi(b, !0);
                case "launchExit":
                    return Yi(b, !1);
                case "reportCustomVariable":
                    return new Qi(b[0], b[1]);
                case "flushCounters":
                    return new N("flushCounters");
                case "conduitInitialized":
                    return a = b[1] && x(b[1]) && 0 != b[1].length ? b[1] : null, new Li("conduitInitialized",
                        null, {
                            features: a
                        });
                case "expandAsset":
                    return new Li("expandAsset", null, 1 < b.length ? b[1] : null);
                case "expandRequested":
                    return new Li("expandRequested", null, 1 < b.length ? b[1] : null);
                case "expandFinished":
                case "collapseAsset":
                case "collapseRequested":
                case "collapseFinished":
                case "tellAssetHide":
                    return new Li(a);
                case "tellCompanionAssetHide":
                    return new Li("tellCompanionAssetHide", b[0]);
                case "tellCompanionAssetShow":
                    return new Li("tellCompanionAssetShow", b[0]);
                case "invokeExternalJSFunction":
                    return new Si(b[0]);
                case "setThrottlingWindow":
                    return new Ti(parseFloat(b[0]));
                case "setTimerAdjustment":
                    return new Ui(Ki[b[0]], parseFloat(b[1]), parseFloat(b[2]));
                case "registerChargeableEventName":
                    return new Vi(b[0]);
                case "fullscreenExpandRequested":
                    return new Li(a, null, b);
                case "setResponsiveBehavior":
                    return new Li(a, null, {
                        behavior: b[0],
                        state: b[1]
                    });
                case "responsiveResize":
                    return new Li(a, null, {
                        width: b[0],
                        height: b[1]
                    });
                case "isFullscreenSupported":
                case "queryFullscreenDimensions":
                case "fullscreenExpandFinished":
                case "fullscreenCollapseRequested":
                case "fullscreenCollapseFinished":
                    return new Li(a);
                case "AD_CLICKED":
                    return new N("AD_CLICKED");
                case "registerEventTypeListenerForType":
                    return new Li(a, null, {
                        type: b[0]
                    })
            }
            return null
        },
        Xi = function(a, b) {
            var c = a[0],
                d = a[1],
                e = $i(a[3]);
            return $i(a[4]) ? new Pi("logEvent", c, d, e, b) : new Ni("logEvent", c, Ki[d], b)
        },
        Yi = function(a, b) {
            return new Ri("logExitFlushEventsOpenPopup", a[1], a[4], a[5] || null, b)
        },
        $i = function(a) {
            return null != a ? "true" == a.toString().toLowerCase() : !1
        };
    var aj = function() {};
    aa(aj);
    aj.prototype.a = 0;
    var bj = function(a) {
        Q.call(this);
        this.X = a || Rc();
        this.R = null;
        this.Aa = !1;
        this.g = null;
        this.F = void 0;
        this.v = this.c = this.o = null
    };
    C(bj, Q);
    bj.prototype.nb = aj.getInstance();
    bj.prototype.za = function() {
        return this.R || (this.R = ":" + (this.nb.a++).toString(36))
    };
    bj.prototype.S = function() {
        return this.g
    };
    var R = function(a) {
            a.F || (a.F = new Lg(a));
            return a.F
        },
        cj = function(a, b) {
            if (a == b) throw Error("Unable to set parent component");
            var c;
            if (c = b && a.o && a.R) {
                c = a.o;
                var d = a.R;
                c = c.v && d ? db(c.v, d) || null : null
            }
            if (c && a.o != b) throw Error("Unable to set parent component");
            a.o = b;
            bj.C.hc.call(a, b)
        };
    bj.prototype.hc = function(a) {
        if (this.o && this.o != a) throw Error("Method not supported");
        bj.C.hc.call(this, a)
    };
    bj.prototype.ab = function() {
        this.g = this.X.a.createElement("DIV")
    };
    var dj = function(a, b, c) {
        if (a.Aa) throw Error("Component already rendered");
        a.g || a.ab();
        b ? b.insertBefore(a.g, c || null) : a.X.a.body.appendChild(a.g);
        a.o && !a.o.Aa || a.Ja()
    };
    bj.prototype.Ia = function(a) {
        this.g = a
    };
    bj.prototype.Ja = function() {
        this.Aa = !0;
        ej(this, function(a) {
            !a.Aa && a.S() && a.Ja()
        })
    };
    bj.prototype.Ra = function() {
        ej(this, function(a) {
            a.Aa && a.Ra()
        });
        this.F && Og(this.F);
        this.Aa = !1
    };
    bj.prototype.D = function() {
        this.Aa && this.Ra();
        this.F && (this.F.dispose(), delete this.F);
        ej(this, function(a) {
            a.dispose()
        });
        this.g && $c(this.g);
        this.o = this.g = this.v = this.c = null;
        bj.C.D.call(this)
    };
    var ej = function(a, b, c) {
        a.c && F(a.c, b, c)
    };
    bj.prototype.removeChild = function(a, b) {
        if (a) {
            var c = y(a) ? a : a.za();
            a = this.v && c ? db(this.v, c) || null : null;
            if (c && a) {
                var d = this.v;
                c in d && delete d[c];
                Ja(this.c, a);
                b && (a.Ra(), a.g && $c(a.g));
                cj(a, null)
            }
        }
        if (!a) throw Error("Child is not in parent component");
        return a
    };
    var fj = function(a) {
            var b;
            a.mozVisibilityState ? b = "mozvisibilitychange" : a.webkitVisibilityState ? b = "webkitvisibilitychange" : a.visibilityState && (b = "visibilitychange");
            return b
        },
        gj = function(a, b) {
            if (3 == ({
                    visible: 1,
                    hidden: 2,
                    prerender: 3,
                    preview: 4
                }[b.webkitVisibilityState || b.mozVisibilityState || b.visibilityState || ""] || 0)) return !1;
            a();
            return !0
        },
        hj = function(a) {
            var b = document;
            if (!gj(a, b)) {
                var c = !1,
                    d = fj(b),
                    e = function() {
                        !c && gj(a, b) && (c = !0, vd(b, d, e))
                    };
                d && ud(b, d, e)
            }
        };
    var ij = function(a) {
        bj.call(this, a);
        this.xa = null
    };
    C(ij, bj);
    g = ij.prototype;
    g.za = function() {
        return this.R || (this.R = (bh || (bh = "200_159_" + Zg)) + "_" + (ah++).toString(36))
    };
    g.toString = function() {
        return this.za()
    };
    g.Lb = function() {
        ej(this, function(a) {
            a.Lb()
        })
    };
    g.Mb = function() {
        ej(this, function(a) {
            a.Mb()
        })
    };
    g.Sa = function(a) {
        ej(this, function(b) {
            b.Sa(a)
        })
    };
    g.rb = function() {
        ej(this, function(a) {
            a.rb()
        })
    };
    g.Kb = function() {
        ej(this, function(a) {
            a.Kb()
        })
    };
    g.wb = function() {
        ej(this, function(a) {
            a.wb()
        })
    };
    g.Qa = function() {
        ej(this, function(a) {
            a.Qa()
        })
    };
    g.Ga = function() {
        ej(this, function(a) {
            a.Ga()
        })
    };
    g.Hb = v;
    g.hb = function(a, b) {
        nd(this.S(), a, b);
        ej(this, function(a) {
            a.hb("100%", "100%")
        })
    };
    g.Fb = v;
    var jj = function(a) {
        if (null !== a.xa) return a.xa;
        var b = Ye();
        a.ec(b);
        return a.xa = b.c
    };
    ij.prototype.ec = function(a) {
        hj(a.a)
    };
    var kj = function(a, b, c) {
        ij.call(this, c);
        this.a = a;
        this.va = b;
        this.la = a.a && a.a.a && Va(a.a.a) || new H(a.width, a.height);
        this.ca = !1;
        this.ga = [];
        this.Ca = null;
        this.bb = !1
    };
    C(kj, ij);
    g = kj.prototype;
    g.Zb = function() {
        for (; 0 < this.ga.length;) {
            var a = this.ga.shift();
            this.ic(a.name, a.value)
        }
    };
    g.me = function() {
        this.ca = !0;
        this.Zb()
    };
    g.Zd = function() {
        this.ca = !1
    };
    g.Ia = function(a) {
        kj.C.Ia.call(this, a);
        a.style.position = "relative";
        Ji(a, this.la);
        "boxSizing" in a.style && (a.style.boxSizing = "content-box");
        var b = this.va.V;
        (null == b ? 0 : b.a && 1 == this.va.j.length) ? Ff(b, a): null != b && b.a && !b.c && Gf(b)
    };
    g.Ja = function() {
        var a = R(this);
        a.I(this, "conduitInitialized", this.me);
        a.I(this, "RESET", this.Zd);
        kj.C.Ja.call(this);
        var b = R(this);
        this.Ca = new Qg(5E3);
        Pg ? this.Tb() : b.I(this.Ca, "ready", this.Tb);
        if (b = this.S()) a.I(b, "mouseover", this.Hd), a.I(b, "mouseout", this.Kc);
        a.I(this, "logEvent", this.Jc);
        a.I(this, "logExitFlushEventsOpenPopup", this.Jc)
    };
    g.Tb = v;
    g.Hd = function() {
        lj(this, "1")
    };
    g.Kc = function() {
        lj(this, "0")
    };
    g.Jc = function(a) {
        "Exit" == Ib(a.c) && this.Kc()
    };
    var lj = function(a, b) {
        a.ca ? a.ic("isMouseOver", b) : a.ga.push({
            name: "isMouseOver",
            value: b
        })
    };
    kj.prototype.ic = v;
    kj.prototype.Gc = v;
    var mj = function(a, b) {
        a.Gc("isMultiDirectional", A(function(a, b, e) {
            a.bb = y(e) && "true" == na(e.toLowerCase());
            b(a.bb)
        }, a, a, b))
    };
    kj.prototype.ad = v;
    kj.prototype.Fb = function(a, b, c, d) {
        this.S().style.clip = ["rect(", a, "px ", b, "px ", c, "px ", d, "px)"].join("");
        this.S().style.position = "absolute"
    };
    kj.prototype.$ = function(a, b) {
        (a = Zi(a, b)) && this.L(a);
        return null
    };
    var nj = function(a, b, c) {
        ij.call(this, c);
        c = a.a;
        this.H = a;
        this.P = c.a;
        this.V = this.m = Ua(this.P);
        this.B = new H(a.width, a.height);
        this.M = (this.$ = c.c) ? 1E3 * c.g : 0;
        this.a = this.j = null;
        this.J = !1;
        this.K = 0;
        this.T = this.m;
        this.A = null;
        this.bb = !1;
        this.Z = "lightbox" == this.H.a.expansionMode;
        this.W = null;
        this.fa = b ? b.c : !1
    };
    C(nj, ij);
    g = nj.prototype;
    g.ab = function() {
        nj.C.ab.call(this);
        this.Ia(this.S())
    };
    g.Ia = function(a) {
        nj.C.Ia.call(this, a);
        nd(a, Va(this.P));
        a.style.position = "relative";
        a.style.willChange = "z-index";
        a.style.display = "block";
        var b = parseInt(this.H.F, 10);
        !isNaN(b) && 0 < b && (a.style.zIndex = this.H.F)
    };
    g.Ja = function() {
        var a = this.B,
            b = this.P,
            c = this.Z,
            d = this.$;
        if (hi) throw Error("Frame manager already initialized.");
        var e = ki();
        (e = mi(e)) && (hi = new e(a, b, c, d));
        if (this.a = hi) this.J = !0, R(this).I(this.a, "b", this.jd), R(this).I(this.a, "f", this.wb), R(this).I(this.a, "d", this.Mb);
        nj.C.Ja.call(this);
        R(this).I(this, "conduitInitialized", this.ie);
        R(this).I(this, "triggerOuterFullscreenExpand", this.Qd);
        R(this).I(this, "fullscreenCollapseFinished", this.he);
        oj(this, this.m, !0);
        a = 2;
        b = this.H.o;
        b.a && (a |= 1);
        b.c && (a |= 4);
        b = this.S();
        if (!b) throw Error("Unable to create Fullscreen Manager, need component element.");
        this.W = new ti(this, b, this.fa);
        this.A = new Bi(this.S(), a, new Ta(-this.m.left, -this.m.top, this.B.width, this.B.height));
        this.$ && (a = this.S().parentNode.parentNode, a.classList ? b = a.classList.contains("dcmads") : (a.classList ? b = a.classList : (b = a.className, b = y(b) && b.match(/\S+/g) || []), b = 0 <= Da(b, "dcmads")), b && (a.style.height = id("auto", !0)));
        this.a && li() && (a = this.a, a.c.enableExpansion(a.j))
    };
    g.Qb = function() {
        return [{
            element: this.S(),
            Na: {
                overflow: "visible"
            }
        }]
    };
    g.Ra = function() {
        nj.C.Ra.call(this);
        pj(this);
        this.A && (this.A.dispose(), this.A = null);
        this.a && (this.a.dispose(), this.a = null, this.J = !1)
    };
    var qj = function(a, b, c, d) {
        ej(a, function(a) {
            a.ad(b, c, d)
        })
    };
    g = nj.prototype;
    g.Fb = function(a, b, c, d) {
        ej(this, function(e) {
            e.Fb(a, b, c, d)
        })
    };
    g.Qd = function(a) {
        Fi(this.A, !0);
        this.W.H(a.data)
    };
    g.he = function() {
        Fi(this.A, !1);
        zi(this.W, !1)
    };
    g.wb = function() {
        this.Qa()
    };
    g.Qa = function() {
        nj.C.Qa.call(this);
        0 < this.M ? rj(this, this.m, this.M, "collapsed") : this.H.A && this.Ga()
    };
    g.Ga = function() {
        this.J && (R(this).Oa(this.a, "e", this.Ac), R(this).Oa(this.a, "a", this.Dc), this.a.sa());
        oj(this, this.m, !1, "collapsed");
        Fi(this.A, !1);
        nj.C.Ga.call(this)
    };
    g.Ac = function() {
        this.Qa()
    };
    g.Lb = function() {
        if (this.J) R(this).I(this.a, "e", this.Ac), R(this).I(this.a, "a", this.Dc), this.a.ta();
        else {
            var a;
            if (this.bb) {
                a = md(ad(this.S()));
                var b = Vc(Xc(this.X.a)),
                    c = Va(this.P),
                    d = a.N + c.width / 2 < b.width / 2;
                a = a.O + c.height / 2 < b.height / 2 ? d ? Bh : Ah : d ? zh : yh
            } else a = void 0;
            this.Sa(a)
        }
    };
    g.Sa = function(a) {
        Fi(this.A, !0);
        this.V = this.bb && a ? xh(a, this.m, this.B) : new Pa(0, this.B.width, this.B.height, 0);
        0 < this.M ? rj(this, this.V, this.M, "expanded") : oj(this, this.V, !1, "expanded");
        nj.C.Sa.call(this, a)
    };
    g.Kb = function() {
        pj(this);
        oj(this, this.V, !1, "expanded")
    };
    g.Hb = function() {
        var a = this.c ? this.c[0] || null : null;
        return a && a.Hb()
    };
    g.ec = function(a) {
        li() && null != this.a && 2 == this.a.c.getConfig().getEngagementState().currentState && !q(window.mraid) ? ke(Hd, "i-creative-view", a.a) : nj.C.ec.call(this, a)
    };
    g.ie = function() {
        Kg(this.kd, 10, this)
    };
    g.kd = function() {
        ej(this, function(a) {
            mj(a, A(this.Vd, this))
        }, this)
    };
    g.Vd = function(a) {
        this.bb = this.Z ? !1 : a
    };
    g.Dc = function(a) {
        this.Sa(a.c)
    };
    g.jd = function() {
        this.rb()
    };
    var oj = function(a, b, c, d) {
            a.T = b;
            qj(a, b, a.Z || !!c, d);
            a.$ && !a.J && (a.S().style.height = b.bottom - a.m.top + "px")
        },
        rj = function(a, b, c, d) {
            var e = Qa(b);
            e.bottom = a.T.bottom;
            oj(a, e);
            e = e.bottom;
            b = b.bottom;
            0 < a.K && 1 > a.K && (c *= a.K);
            pj(a);
            a.j = new Lh([e], [b], c);
            de(a.j, "animate", a.ca, !1, a);
            de(a.j, "end", A(a.ea, a, d));
            a.j.H()
        },
        pj = function(a) {
            a.j && (a.j.A(!1), a.j && (a.j.dispose(), a.j = null))
        };
    nj.prototype.ca = function(a) {
        this.K = a.g;
        a = Fa(a.c, Math.round)[0];
        var b = Qa(this.T);
        b.bottom = a;
        oj(this, b, !1, void 0)
    };
    nj.prototype.ea = function(a, b) {
        b = Fa(b.c, Math.round)[0];
        var c = Qa(this.T);
        c.bottom = b;
        oj(this, c, !1, a);
        this.K = 0;
        this.H.A && "collapsed" == a && this.Ga();
        this.j && (this.j.dispose(), this.j = null)
    };
    nj.prototype.D = function() {
        M(this.W);
        nj.C.D.call(this)
    };
    var sj = {
            Oe: "devicemotion",
            Pe: "deviceorientation"
        },
        tj = {},
        uj;
    for (uj in sj) tj[sj[uj]] = !0;
    var vj = "FLASH_LAYOUTS FLASH_CONFIGURABLE_XML FLASH_CONFIGURABLE_JSON HTML5_LAYOUTS HTML5_CONFIGURABLE HTML5_CONFIGURABLE_DAB".split(" ");
    var wj = function() {},
        xj = function(a, b) {
            if (D(E(b))) return null;
            b = ph(b);
            var c;
            b.Profile && b.Profile[0] ? c = Fa(b.Profile, a.a, a)[0] : c = {};
            Wa(Xa(b, function(a, b) {
                return "_profileid" != b && "Profile" != b
            }), function(a, b) {
                c[b + "Array"] = Fa(a, this.a, this)
            }, a);
            return sh(c)
        };
    wj.prototype.a = function(a) {
        return Ya(Xa(a, function(a, c) {
            return "_index" != c
        }), function(a) {
            if (ea(a)) {
                var b;
                b: {
                    for (b in a)
                        if (!x.call(void 0, a[b])) {
                            b = !1;
                            break b
                        }
                    b = !0
                }
                if (b) {
                    b = 0;
                    for (var d in a) b++;
                    b = 1 == b
                }
                if (b) {
                    b: {
                        for (var e in a) {
                            d = e;
                            break b
                        }
                        d = void 0
                    }
                    a = Fa(a[d], ye(ka(gb, d)))
                }
            }
            return a
        }, this)
    };
    var yj = function() {};
    r("studio.common.Environment", yj, void 0);
    yj.Type = {
        LIVE: 1,
        LOCAL: 2,
        BROWSER: 4,
        IN_APP: 8,
        LAYOUTS_PREVIEW: 16,
        CREATIVE_TOOLSET: 32,
        RENDERING_STUDIO: 64,
        RENDERING_TEST: 128,
        PREVIEW: 256
    };
    var zj = 6,
        Bj = function(a) {
            zj |= a;
            Aj(a)
        };
    yj.addType = Bj;
    yj.setType = function(a) {
        zj = a | 6;
        Aj(zj)
    };
    yj.hasType = function(a) {
        return (zj & a) == a
    };
    yj.getValue = function() {
        return zj
    };
    var Aj = function(a) {
            Cj(a, 2, 1);
            Cj(a, 1, 2);
            Cj(a, 4, 8);
            Cj(a, 8, 4);
            Cj(a, 128, 64);
            Cj(a, 64, 128);
            Cj(a, 256, 2)
        },
        Cj = function(a, b, c) {
            (a & b) == b && (zj |= b, zj &= ~c)
        };
    r("studio.common.Feature.Type", {
        Of: 1,
        SDK_EVENT_FORWARDER: 2,
        RL_EVENT_FORWARDER: 3
    }, void 0);
    var Dj = new Fg,
        Ej = function(a) {
            return Dj.contains(a)
        };
    r("studio.common.Feature.hasFeature", Ej, void 0);
    r("studio.common.Feature.hasFeatures", function(a) {
        a: {
            var b = Dj.contains;
            if ("function" == typeof a.every) a = a.every(b, Dj);
            else if (ca(a) || y(a)) a = Ha(a, b, Dj);
            else {
                var c;
                if (a.Ka && "function" == typeof a.Ka) c = a.Ka();
                else if (a.ha && "function" == typeof a.ha) c = void 0;
                else if (ca(a) || y(a)) {
                    c = [];
                    for (var d = a.length, e = 0; e < d; e++) c.push(e)
                } else c = ab(a);
                for (var d = Dg(a), e = d.length, f = 0; f < e; f++)
                    if (!b.call(Dj, d[f], c && c[f], a)) {
                        a = !1;
                        break a
                    }
                a = !0
            }
        }
        return a
    }, void 0);
    var Fj = function(a, b) {
        this.a = a;
        this.c = null != b ? b : 0
    };
    r("studio.common.Orientation", Fj, void 0);
    Fj.Mode = {
        PORTRAIT: "portrait",
        LANDSCAPE: "landscape"
    };
    Fj.prototype.wd = function() {
        return this.a
    };
    Fj.prototype.getMode = Fj.prototype.wd;
    Fj.prototype.vd = function() {
        return this.c
    };
    Fj.prototype.getDegrees = Fj.prototype.vd;
    Fj.prototype.toString = function() {
        return this.a
    };
    var Gj = function() {
        this.c = La([new wj]);
        this.a = []
    };
    r("studio.common.Visibility.VISIBILITY_PARAMS_KEY", "visibilityParams", void 0);
    r("studio.common.Visibility.VISIBILITY_FRACTION_KEY", "visibilityFraction", void 0);
    r("studio.common.Visibility.VISIBLE_BOX_KEY", "visibleBox", void 0);
    var Hj = function(a, b) {
        return {
            visibilityFraction: a,
            visibleBox: b
        }
    };
    r("studio.common.Visibility.createVisibilityParams", Hj, void 0);
    r("studio.common.WhitelistedExternalObject", {
        CREATIVETOOLSET_CONFIG: "creativeToolsetConfig",
        CREATIVETOOLSET_INTERNALS: "creativeToolsetInternals",
        CREATIVETOOLSET_INTERNALS_GEN204: "creativeToolsetInternalsGen204",
        CREATIVE_REPORTER: "creativeReporter",
        CREATIVE_INNOVATION: "gcreativeinnovation"
    }, void 0);
    var Ij = function(a) {
        try {
            switch (a) {
                case "creativeToolsetConfig":
                    return window.CreativeToolset.getInstance().getConfig();
                case "creativeToolsetInternals":
                    return window.CreativeToolset.internals;
                case "creativeToolsetInternalsGen204":
                    return window.CreativeToolset.internals.gen204;
                case "creativeReporter":
                    return window.googlecreative.reporting.sharedReporter;
                case "gcreativeinnovation":
                    return window.gcreativeinnovation
            }
        } catch (b) {}
        return null
    };
    var Jj = function(a, b, c) {
        Hb.call(this, a, b, "Exit", !1, !0);
        this.url = c;
        this.g = "_blank";
        this.c = null
    };
    C(Jj, Hb);
    var Kj = {
        Kf: "varName",
        Ke: "creativeId",
        Ae: "assetId",
        He: "click",
        Ue: "clickN",
        Fe: "assets",
        Tf: "vcData",
        Te: "exitEvents",
        Qf: "thirdPartyClickRedirect",
        Je: "googleDiscoveryUrl",
        df: "adSiteUrl",
        Pf: "isGCNAd",
        cf: "td",
        Jf: "assetType",
        Ye: "isFlashFullScreenEnabled",
        Ee: "br",
        Ef: "os",
        ye: "sn",
        xe: "sid",
        oe: "adv",
        qe: "buy",
        ve: "pid",
        pe: "aid",
        se: "cid",
        we: "rid",
        ue: "kid",
        te: "geo",
        re: "randomNumber",
        Re: "dcData",
        kf: "ispushdown",
        Ve: "expEnv",
        lf: "layoutsConfig",
        Lf: "rv",
        Le: "customMetaData",
        If: "previewFrameId"
    };
    var Lj = function(a) {
            var b = {};
            F(a.split("&"), function(a) {
                a = a.split("=");
                b[a[0]] = a[1]
            });
            return b
        },
        Mj = function(a) {
            var b = [];
            Wa(a, function(a, d) {
                b.push(d + "=" + a)
            });
            return b.join("&")
        };
    var Nj = function(a, b) {
        if (a && ("video" === a.Type || a.DrmVideoData)) {
            if (b) {
                b = a.DrmVideoData || {};
                var c = a.Progressive_Url || a.Url || "";
                b = {
                    $b: ".flv" === c.substring(c.length - 4).toLowerCase() ? b.flv_progressive_url || c || b.mp4_url || "" : b.flv_progressive_url || b.mp4_url || c,
                    stream: b.flv_stream_url || a.Stream_Url || ""
                }
            } else b = a.DrmVideoData || {}, b = {
                $b: (Uf ? b.hls_url : "") || (Yf ? b.webm_url : "") || (Wf ? b.mp4_url : "") || a.Progressive_Url || a.Url || "",
                stream: ""
            };
            a.Type = "video";
            a.Url = b.$b;
            a.Progressive_Url = b.$b;
            a.Stream_Url = b.stream;
            delete a.DrmVideoData
        } else if (ea(a) &&
            !z(a))
            for (c in a) Nj(a[c], b)
    };
    var Oj = function(a) {
        this.g = a.sourceFilename;
        this.c = a.quality;
        this.j = a.mimetype;
        this.a = a.isTeaser
    };
    var Qj = function(a, b) {
            var c = Array.prototype.slice.call(arguments),
                d = c.shift();
            if ("undefined" == typeof d) throw Error("[goog.string.format] Template required");
            return d.replace(/%([0\-\ \+]*)(\d+)?(\.(\d+))?([%sfdiu])/g, function(a, b, d, k, l, m, p, w) {
                if ("%" == m) return "%";
                var e = c.shift();
                if ("undefined" == typeof e) throw Error("[goog.string.format] Not enough arguments");
                arguments[0] = e;
                return Pj[m].apply(null, arguments)
            })
        },
        Pj = {
            s: function(a, b, c) {
                return isNaN(c) || "" == c || a.length >= Number(c) ? a : a = -1 < b.indexOf("-", 0) ?
                    a + xa(" ", Number(c) - a.length) : xa(" ", Number(c) - a.length) + a
            },
            f: function(a, b, c, d, e) {
                d = a.toString();
                isNaN(e) || "" == e || (d = parseFloat(a).toFixed(e));
                var f;
                f = 0 > Number(a) ? "-" : 0 <= b.indexOf("+") ? "+" : 0 <= b.indexOf(" ") ? " " : "";
                0 <= Number(a) && (d = f + d);
                if (isNaN(c) || d.length >= Number(c)) return d;
                d = isNaN(e) ? Math.abs(Number(a)).toString() : Math.abs(Number(a)).toFixed(e);
                a = Number(c) - d.length - f.length;
                return d = 0 <= b.indexOf("-", 0) ? f + d + xa(" ", a) : f + xa(0 <= b.indexOf("0", 0) ? "0" : " ", a) + d
            },
            d: function(a, b, c, d, e, f, h, k) {
                return Pj.f(parseInt(a,
                    10), b, c, d, 0, f, h, k)
            }
        };
    Pj.i = Pj.d;
    Pj.u = Pj.d;
    var Rj = function(a, b) {
        this.g = this.v = this.c = "";
        this.o = null;
        this.m = this.G = "";
        this.a = !1;
        var c;
        a instanceof Rj ? (this.a = q(b) ? b : a.a, Sj(this, a.c), this.v = a.v, this.g = a.g, Tj(this, a.o), this.G = a.G, b = a.j, c = new Uj, c.g = b.g, b.a && (c.a = new Ag(b.a), c.c = b.c), Vj(this, c), this.m = a.m) : a && (c = String(a).match(hg)) ? (this.a = !!b, Sj(this, c[1] || "", !0), this.v = Wj(c[2] || ""), this.g = Wj(c[3] || "", !0), Tj(this, c[4]), this.G = Wj(c[5] || "", !0), Vj(this, c[6] || "", !0), this.m = Wj(c[7] || "")) : (this.a = !!b, this.j = new Uj(null, 0, this.a))
    };
    Rj.prototype.toString = function() {
        var a = [],
            b = this.c;
        b && a.push(Xj(b, Yj, !0), ":");
        var c = this.g;
        if (c || "file" == b) a.push("//"), (b = this.v) && a.push(Xj(b, Yj, !0), "@"), a.push(encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g, "%$1")), c = this.o, null != c && a.push(":", String(c));
        if (c = this.G) this.g && "/" != c.charAt(0) && a.push("/"), a.push(Xj(c, "/" == c.charAt(0) ? Zj : ak, !0));
        (c = this.j.toString()) && a.push("?", c);
        (c = this.m) && a.push("#", Xj(c, bk));
        return a.join("")
    };
    var Sj = function(a, b, c) {
            a.c = c ? Wj(b, !0) : b;
            a.c && (a.c = a.c.replace(/:$/, ""))
        },
        Tj = function(a, b) {
            if (b) {
                b = Number(b);
                if (isNaN(b) || 0 > b) throw Error("Bad port number " + b);
                a.o = b
            } else a.o = null
        },
        Vj = function(a, b, c) {
            b instanceof Uj ? (a.j = b, ck(a.j, a.a)) : (c || (b = Xj(b, dk)), a.j = new Uj(b, 0, a.a))
        },
        Wj = function(a, b) {
            return a ? b ? decodeURI(a.replace(/%25/g, "%2525")) : decodeURIComponent(a) : ""
        },
        Xj = function(a, b, c) {
            return y(a) ? (a = encodeURI(a).replace(b, ek), c && (a = a.replace(/%25([0-9a-fA-F]{2})/g, "%$1")), a) : null
        },
        ek = function(a) {
            a = a.charCodeAt(0);
            return "%" + (a >> 4 & 15).toString(16) + (a & 15).toString(16)
        },
        Yj = /[#\/\?@]/g,
        ak = /[\#\?:]/g,
        Zj = /[\#\?]/g,
        dk = /[\#\?@]/g,
        bk = /#/g,
        Uj = function(a, b, c) {
            this.c = this.a = null;
            this.g = a || null;
            this.j = !!c
        },
        fk = function(a) {
            a.a || (a.a = new Ag, a.c = 0, a.g && jg(a.g, function(b, c) {
                b = decodeURIComponent(b.replace(/\+/g, " "));
                fk(a);
                a.g = null;
                b = gk(a, b);
                var d = a.a.get(b);
                d || a.a.set(b, d = []);
                d.push(c);
                a.c = a.c + 1
            }))
        },
        hk = function(a, b) {
            fk(a);
            b = gk(a, b);
            Cg(a.a.c, b) && (a.g = null, a.c = a.c - a.a.get(b).length, a = a.a, Cg(a.c, b) && (delete a.c[b], a.g--, a.j++,
                a.a.length > 2 * a.g && Bg(a)))
        },
        ik = function(a, b) {
            fk(a);
            b = gk(a, b);
            return Cg(a.a.c, b)
        };
    g = Uj.prototype;
    g.Ka = function() {
        fk(this);
        for (var a = this.a.ha(), b = this.a.Ka(), c = [], d = 0; d < b.length; d++)
            for (var e = a[d], f = 0; f < e.length; f++) c.push(b[d]);
        return c
    };
    g.ha = function(a) {
        fk(this);
        var b = [];
        if (y(a)) ik(this, a) && (b = Ka(b, this.a.get(gk(this, a))));
        else {
            a = this.a.ha();
            for (var c = 0; c < a.length; c++) b = Ka(b, a[c])
        }
        return b
    };
    g.set = function(a, b) {
        fk(this);
        this.g = null;
        a = gk(this, a);
        ik(this, a) && (this.c = this.c - this.a.get(a).length);
        this.a.set(a, [b]);
        this.c = this.c + 1;
        return this
    };
    g.get = function(a, b) {
        a = a ? this.ha(a) : [];
        return 0 < a.length ? String(a[0]) : b
    };
    g.toString = function() {
        if (this.g) return this.g;
        if (!this.a) return "";
        for (var a = [], b = this.a.Ka(), c = 0; c < b.length; c++)
            for (var d = b[c], e = encodeURIComponent(String(d)), d = this.ha(d), f = 0; f < d.length; f++) {
                var h = e;
                "" !== d[f] && (h += "=" + encodeURIComponent(String(d[f])));
                a.push(h)
            }
        return this.g = a.join("&")
    };
    var gk = function(a, b) {
            b = String(b);
            a.j && (b = b.toLowerCase());
            return b
        },
        ck = function(a, b) {
            b && !a.j && (fk(a), a.g = null, a.a.forEach(function(a, b) {
                var c = b.toLowerCase();
                b != c && (hk(this, b), hk(this, c), 0 < a.length && (this.g = null, this.a.set(gk(this, c), La(a)), this.c = this.c + a.length))
            }, a));
            a.j = b
        };
    var jk = function(a) {
            this.a = a
        },
        kk = function(a) {
            switch (a) {
                case "BANNER":
                    return "Inpage";
                case "FLOATING":
                    return "Floating";
                case "EXPANDABLE":
                    return "Expanding";
                case "OVERLAY":
                    return "Overlay";
                default:
                    return ""
            }
        },
        qk = function(a, b) {
            var c = [],
                d = a.a.W;
            b = lk(b);
            var e = mk(a.a);
            F(d, function(a) {
                a.a && a.a.a && c.push(nk("VT_" + a.a.g, a.url))
            }, a);
            for (var f in e) {
                var h = ok(e, f, b.Xd);
                h || (h = ok(e, f, b.ne));
                var k = h || f,
                    l = null;
                F(d, function(a) {
                    a.name.toLowerCase() === k && (l = a)
                }, a);
                if (l) {
                    pk(a, c, f, l);
                    for (var m in e[f]) {
                        var h = e[f][m],
                            p;
                        for (p in h) {
                            var w =
                                h[p];
                            e[w] || pk(a, c, w, l)
                        }
                    }
                }
            }
            return escape(c.join("&"))
        },
        pk = function(a, b, c, d) {
            d.g ? (b.push(nk("PRO_" + c, d.url)), null != d.c && b.push(nk("STR_" + c, d.c))) : b.push(nk(c, /^https?:/.test(d.url) ? d.url : rk(a.a) + d.url))
        },
        lk = function(a) {
            var b = [],
                c = [];
            "FLASH" == a.g ? (b = ["video/x-flv"], c = ["video/mp4"]) : (Uf && c.push("application/x-mpegurls"), Yf && c.push("video/webm"), Wf && c.push("video/mp4"));
            return {
                Xd: b,
                ne: c
            }
        },
        ok = function(a, b, c) {
            if (c.length && a[b] && !cb(a[b])) a: {
                for (var d = 6; 1 <= d && 6 >= d;) {
                    var e = a[b][d];
                    if (e)
                        for (var f = 0; f < c.length; f++)
                            if (e[c[f]]) {
                                a =
                                    e[c[f]];
                                break a
                            }
                    d += -1
                }
                a = null
            }
            else a = null;
            return a
        };
    jk.prototype.c = function(a) {
        return encodeURIComponent(a).replace(/[!'()*]/g, ye(escape))
    };
    var tk = function(a, b, c) {
            return a.c(b) + "=" + a.c(sk(c))
        },
        S = function(a, b, c) {
            c = sk(c);
            a[b] = c
        },
        uk = function(a, b, c) {
            c && !cb(c) && Wa(c, function(a, c) {
                S(b, c, a)
            }, a)
        },
        nk = function(a, b) {
            return escape(a) + "=" + escape(sk(b))
        },
        sk = function(a) {
            return null != a ? "object" == ba(a) || "array" == ba(a) ? JSON.stringify(a) : String(a) : ""
        };
    var vk = function(a, b) {
        this.g = a;
        this.j = b;
        this.a = new jk(a)
    };
    vk.prototype.c = v;
    var yk = function(a, b, c) {
            var d = a.a,
                e = a.j,
                f = e.G,
                h = f ? 3 == f.c ? escape : d.c : xe,
                f = {};
            S(f, "varName", b);
            S(f, "creativeId", d.a.o);
            S(f, "assetId", e.id);
            S(f, "rv", "200_159");
            S(f, "assetType", kk(e.m));
            S(f, "previewFrameId", "layoutsPreviewFrame");
            S(f, "layoutsConfig", e.layoutsConfig || d.a.ed || "");
            S(f, "click", d.a.v);
            S(f, "clickN", d.a.M);
            b = lh(d.a, "CLICK");
            S(f, "thirdPartyClickRedirect", 1 == b.length ? b[0].a : "");
            S(f, "assets", qk(d, e));
            b = [];
            for (var k = d.a.uc, l = 0; l < k.length; l++) {
                var m = k[l];
                b.push(escape(Qj("name:%s,vfp_low:%s,vfp_mid:%s,vfp_high:%s,pfp_low:%s,pfp_mid:%s,pfp_high:%s",
                    escape(m.o), escape(m.j || ""), escape(m.G || ""), escape(m.c || ""), escape(m.g || ""), escape(m.m || ""), escape(m.a || ""))))
            }
            S(f, "vcData", b.join("{DELIM}"));
            b = [];
            var k = d.a.F,
                p;
            for (p in k) {
                l = k[p];
                m = Qj("name:%s,url:%s,target:%s,reportingId:%s", escape(l.name), escape(l.url).replace(/\+/g, "%2B"), l.c ? "popup" : escape(l.g), l.reportingId ? l.reportingId : "");
                if ("FLASH" == e.g || /,/.test(l.url)) m = escape(m);
                b.push(m)
            }
            S(f, "exitEvents", b.join("{DELIM}"));
            S(f, "sn", d.a.a.sn || "");
            S(f, "sid", d.a.a.sid || "");
            S(f, "adv", d.a.a.adv || "");
            S(f,
                "buy", d.a.a.buy || "");
            S(f, "pid", d.a.a.pid || "");
            S(f, "aid", d.a.a.aid || "");
            S(f, "cid", d.a.a.cid || "");
            S(f, "rid", d.a.a.rid || "");
            p = Lj(d.a.a.geo || "");
            uk(d, f, p);
            S(f, "br", Xb ? "ff" : Qf ? "cr" : Rf ? "sf" : J ? "ie" : "ot");
            p = e.G && e.G.a || "transparent";
            p = 0 <= za(Lf, "9.115") || 0 <= za(Lf, "9.28") && "window" == p;
            S(f, "isFlashFullScreenEnabled", p);
            if (p = !/^http/.test(window.location.href)) {
                b = window.parent;
                k = window;
                try {
                    p = b.document.domain == k.document.domain
                } catch ($a) {
                    p = !1
                }
            }
            p = new Rj(p ? window.parent.location.href : window.location.href);
            S(f,
                "td", p.c + "://" + p.g);
            a: {
                if (d.a.c) {
                    if (!D(E(d.a.oa)) && 0 != d.a.oa.indexOf("%")) {
                        p = d.a.oa;
                        break a
                    }
                    if ((p = document.getElementsByTagName("base")) && p.length && !D(E(p[0].href))) {
                        p = p[0].href;
                        break a
                    }
                }
                p = xg()
            }
            S(f, "adSiteUrl", p);
            S(f, "googleDiscoveryUrl", d.a.c ? "http://pagead2.googlesyndication.com/pagead/ads?client=dclk-3pas-query&output=xml&geo=true&adtest=on" : "http://pagead2.googlesyndication.com/pagead/ads?client=dclk-3pas-query&output=xml&geo=true");
            var w;
            a: {
                p = d.a.g;b = "FLASH" === e.g;
                try {
                    w = ph(p)
                } catch ($a) {
                    w = p;
                    break a
                }
                ea(w) ?
                (Nj(w, b), w = sh(w)) : w = p
            }
            S(f, "dcData", h(w));
            h = wk(d.a);
            w = [];
            for (var sa in h) w.push(tk(d, sa, h[sa]));
            S(f, "customMetaData", w.join("&"));
            S(f, "ispushdown", !(!e.a || !e.a.c));
            S(f, "expEnv", (li() ? "adsense" : "basic").toString());
            uk(d, f, wk(d.a));
            null != c && !cb(c) && fb(f, c);
            return xk(a, f)
        },
        xk = function(a, b) {
            var c = {};
            Wa(b, function(a, b) {
                b = this.a.c(b);
                a = this.a.c(a.toString());
                c[b] = a
            }, a);
            return c
        };
    var zk = function(a, b) {
        vk.call(this, a, b)
    };
    C(zk, vk);
    zk.prototype.c = function(a, b) {
        a = yk(this, a, b);
        b = Ak(this);
        a.exitEvents = b;
        b = Dj.ha();
        a.features = b;
        return sh(a)
    };
    var Ak = function(a) {
        var b = {};
        Wa(a.g.F, function(a, d) {
            var c = {};
            c.name = a.name;
            c.url = a.url;
            c.target = a.c ? "popup" : a.g;
            c.reportingId = a.reportingId ? a.reportingId : "";
            b[d] = c
        }, a);
        return b
    };
    var Bk = function(a, b) {
        vk.call(this, a, b)
    };
    C(Bk, vk);
    Bk.prototype.c = function(a, b) {
        a = yk(this, a, b);
        return Mj(a)
    };
    var Ck = function(a) {
        this.c = a;
        this.a = {}
    };
    Ck.prototype.j = function(a) {
        this.a[a.type] && 50 > B() - this.a[a.type] || (this.a[a.type] = B(), De(A(this.g, this, a)))
    };
    Ck.prototype.g = function(a) {
        a = a.c;
        switch (a.type) {
            case "devicemotion":
                this.c({
                    type: a.type,
                    acceleration: a.acceleration,
                    accelerationIncludingGravity: a.accelerationIncludingGravity,
                    rotationRate: a.rotationRate,
                    interval: a.interval
                });
                break;
            case "deviceorientation":
                this.c({
                    type: a.type,
                    absolute: a.absolute,
                    alpha: a.alpha,
                    beta: a.beta,
                    gamma: a.gamma
                })
        }
    };
    var Dk = function() {
        Q.call(this)
    };
    C(Dk, Q);
    Dk.prototype.pc = v;
    Dk.prototype.send = v;
    Dk.prototype.Pb = v;
    Dk.prototype.gc = v;
    var Ek = function() {
        Q.call(this);
        this.c = this.a = null
    };
    C(Ek, Dk);
    g = Ek.prototype;
    g.pc = ve;
    g.ee = function() {
        this.c = this.a.responseText;
        this.L("success");
        Fk(this)
    };
    g.fe = function() {
        this.L("timeout")
    };
    g.de = function() {
        this.L("error")
    };
    g.send = function(a, b) {
        n.XDomainRequest && J && !K(10) && (this.a = new n.XDomainRequest, this.a.onerror = A(this.de, this), this.a.ontimeout = A(this.fe, this), this.a.onload = A(this.ee, this), this.a.timeout = 6E4);
        this.a && (this.a.open(b, a.toString()), this.a.send())
    };
    g.Pb = function() {
        return this.c
    };
    g.gc = function() {};
    var Fk = function(a) {
        a.a && (a.a.onerror = null, a.a.ontimeout = null, a.a.onload = null, a.a = null)
    };
    Ek.prototype.D = function() {
        Fk(this);
        Ek.C.D.call(this)
    };
    var Gk = function() {};
    Gk.prototype.a = v;
    var Hk = function() {};
    C(Hk, Gk);
    Hk.prototype.a = function() {
        var a;
        a: {
            if (!this.c && "undefined" == typeof XMLHttpRequest && "undefined" != typeof ActiveXObject) {
                for (var b = ["MSXML2.XMLHTTP.6.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"], c = 0; c < b.length; c++) {
                    var d = b[c];
                    try {
                        new ActiveXObject(d);
                        a = this.c = d;
                        break a
                    } catch (e) {}
                }
                throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");
            }
            a = this.c
        }
        return a ? new ActiveXObject(a) : new XMLHttpRequest
    };
    var Ik = function() {
        Q.call(this);
        this.j = this.a = null;
        this.g = !0;
        this.c = -1
    };
    C(Ik, Dk);
    g = Ik.prototype;
    g.pc = we;
    g.Yd = function() {
        if (4 == (this.a ? this.a.readyState : 0)) {
            var a;
            try {
                a = 2 < (this.a ? this.a.readyState : 0) ? this.a.status : -1
            } catch (c) {
                a = -1
            }
            var b;
            a: switch (a) {
                case 200:
                case 201:
                case 202:
                case 204:
                case 206:
                case 304:
                case 1223:
                    b = !0;
                    break a;
                default:
                    b = !1
            }
            b || 0 === a ? (this.j = this.a.responseText, this.L("success"), Jk(this)) : this.L("error")
        }
    };
    g.ge = function() {
        Jk(this);
        this.L("timeout")
    };
    g.send = function(a, b) {
        if (this.a = (new Hk).a()) this.a.onreadystatechange = A(this.Yd, this), this.c = Kg(this.ge, 6E4, this);
        this.a && (this.a.open(b, String(a), this.g), this.a.send(null))
    };
    g.Pb = function() {
        return this.j
    };
    g.gc = function(a) {
        this.g = a
    };
    var Jk = function(a) {
        a.c && (n.clearTimeout(a.c), a.c = -1);
        a.a && (a.a.a = null, a.a = null)
    };
    Ik.prototype.D = function() {
        Jk(this);
        Ik.C.D.call(this)
    };
    var Kk = function(a, b) {
        if (a.j && a.j.a) {
            if ("latest" == a.j.a) return !0;
            a = parseInt(a.j.a.replace("_", ""), 10);
            if (b <= a) return !0
        }
        return !1
    };
    var sg;
    sg = new og(new function() {
        this.j = "http:" === Hd.location.protocol ? "http:" : "https:";
        this.c = "pagead2.googlesyndication.com";
        this.g = "/pagead/gen_204?id=";
        this.a = .01
    }, "jserror", !0);
    if (Gd && Gd.URL) {
        var sd = Gd.URL,
            Lk = !(sd && 0 < td().length);
        sg.a = Lk
    };
    var Mk = function(a, b) {
            this.c = a || 0;
            this.a = b || ""
        },
        Nk = function(a) {
            return !!a.c || !!a.a
        };
    Mk.prototype.toString = function() {
        var a = "" + this.c;
        this.a && (a += "-" + this.a);
        return a
    };
    var Ok = function(a) {
            var b = [];
            Wa(a, function(a, d) {
                d = encodeURIComponent(d);
                y(a) && (a = encodeURIComponent(a));
                b.push(d + "=" + a)
            });
            b.push("24=" + (new Date).getTime());
            return b.join("\n")
        },
        Pk = 0,
        Qk = 0,
        Rk = function(a) {
            var b = 0,
                c = Hd;
            try {
                if (c && c.Goog_AdSense_getAdAdapterInstance) return c
            } catch (e) {}
            var d = c.location && c.location.ancestorOrigins;
            if (q(d) && (!d || !d.length)) return null;
            for (; c && 5 > b;) {
                try {
                    if (c.google_osd_static_frame) return c
                } catch (e) {}
                try {
                    if (c.aswift_0 && c.aswift_0.google_osd_static_frame) return c.aswift_0
                } catch (e) {}
                b++;
                c = a ? 0 < c.location.ancestorOrigins.length && c.location.origin == c.location.ancestorOrigins[0] ? c.parent : null : c != c.parent ? c.parent : null
            }
            return null
        },
        Sk = function(a, b, c, d, e, f, h) {
            h = h || u;
            if (10 < Qk) Hd.clearInterval(Pk), h();
            else if (++Qk, Hd.postMessage && Nk(b)) {
                if (f = Rk(f)) {
                    h = {};
                    b.c && (h[4] = b.c);
                    b.a && (h[12] = b.a);
                    h[0] = "goog_request_monitoring";
                    h[6] = a;
                    h[16] = c;
                    d && d.length && (h[17] = d.join(","));
                    e && (h[19] = e);
                    try {
                        var k = Ok(h);
                        f.postMessage(k, "*")
                    } catch (l) {}
                }
            } else Hd.clearInterval(Pk), h()
        };
    var Tk = function(a) {
        return (a = /[&\?#]exk=([^& ]+)/.exec(a)) && 2 == a.length ? a[1] : null
    };
    var Uk = function(a, b) {
        this.qb = a;
        this.m = b;
        this.o = Tk(a.location.href);
        this.c = new Mk(this.m, this.o);
        this.a = fh.getInstance();
        this.g = []
    };
    C(Uk, L);
    Uk.prototype.v = function(a, b) {
        if ((b = b.c) && b.data) {
            var c;
            var d = b.data;
            if (y(d)) {
                b = {};
                d = d.split("\n");
                for (c = 0; c < d.length; c++) {
                    var e = d[c].indexOf("=");
                    if (!(0 >= e)) {
                        var f = Number(d[c].substr(0, e)),
                            e = d[c].substr(e + 1);
                        switch (f) {
                            case 5:
                            case 8:
                            case 11:
                            case 15:
                            case 16:
                            case 18:
                                e = "true" == e;
                                break;
                            case 4:
                            case 7:
                            case 6:
                            case 14:
                            case 20:
                            case 21:
                            case 22:
                            case 23:
                            case 24:
                            case 25:
                                e = Number(e);
                                break;
                            case 3:
                            case 19:
                                if (z(decodeURIComponent)) try {
                                    e = decodeURIComponent(e)
                                } catch (h) {
                                    throw Error("Error: URI malformed: " + e);
                                }
                                break;
                            case 17:
                                e = Fa(decodeURIComponent(e).split(","), Number)
                        }
                        b[f] = e
                    }
                }
                c = b[0] ? b : null
            } else c = null;
            if (c && "goog_update_data" == c[0]) {
                b = c[7];
                d = null;
                if (c = c[9]) c = c.split("-"), 4 == c.length && (d = new Pa(Aa(c[0]), Aa(c[3]), Aa(c[2]), Aa(c[1])));
                b = Hj(b, d);
                a(b)
            }
        }
    };
    Uk.prototype.j = function(a, b) {
        b = Hj(b ? 100 : 0, null);
        a(b)
    };
    Uk.prototype.D = function() {
        Hd.clearInterval(Pk);
        F(this.g, function(a) {
            le(this.qb, "message", a)
        });
        Uk.C.D.call(this)
    };
    var T = function(a) {
        N.call(this, a)
    };
    C(T, N);
    r("studio.events.StudioEvent", T, void 0);
    T.INIT = "init";
    T.VISIBLE = "visible";
    T.HIDDEN = "hidden";
    T.VISIBILITY_CHANGE = "visibilityChange";
    T.VISIBILITY_CHANGE_WITH_INFO = "visibilityChangeWithInfo";
    T.EXIT = "exit";
    T.INTERACTION = "interaction";
    T.PAGE_LOADED = "pageLoaded";
    T.ORIENTATION = "orientation";
    T.ABOUT_TO_EXPAND = "aboutToExpand";
    T.EXPAND_START = "expandStart";
    T.EXPAND_FINISH = "expandFinish";
    T.COLLAPSE_START = "collapseStart";
    T.COLLAPSE_FINISH = "collapseFinish";
    T.COLLAPSE = "collapse";
    T.FULLSCREEN_SUPPORT = "fullscreenSupport";
    T.FULLSCREEN_DIMENSIONS = "fullscreenDimensions";
    T.FULLSCREEN_EXPAND_START = "fullscreenExpandStart";
    T.FULLSCREEN_EXPAND_FINISH = "fullscreenExpandFinish";
    T.FULLSCREEN_COLLAPSE_START = "fullscreenCollapseStart";
    T.FULLSCREEN_COLLAPSE_FINISH = "fullscreenCollapseFinish";
    T.prototype.sb = function(a, b) {
        this[a] = b;
        return this
    };
    T.prototype.addProperty = T.prototype.sb;
    var Vk = J ? 'javascript:""' : "about:blank";
    var Wk = function(a) {
        L.call(this);
        this.c = a;
        this.a = {};
        this.c.Uc(A(this.g, this))
    };
    C(Wk, L);
    var Yk = function(a, b) {
        if (-1 != b.indexOf(":")) throw Error('Virtual channel name "' + b + '" should not contain colons');
        if (b in a.a) throw Error('Virtual channel "' + b + '" was already created for this multichannel.');
        var c = new Xk(a, b);
        return a.a[b] = c
    };
    Wk.prototype.g = function(a, b) {
        if (a = a.match(/^([^:]*):(.*)/)) {
            var c = a[1];
            a = a[2];
            c in this.a && (c = this.a[c]) && c.g && c.g(a, b)
        }
    };
    Wk.prototype.D = function() {
        Wa(this.a, function(a) {
            M(a)
        });
        M(this.c);
        delete this.a;
        delete this.c
    };
    var Xk = function(a, b) {
        L.call(this);
        this.a = a;
        this.c = b
    };
    C(Xk, L);
    g = Xk.prototype;
    g.connect = function(a) {
        a && a()
    };
    g.ia = function() {
        return !0
    };
    g.yb = function(a, b, c) {
        this.a.c.yb(this.c + ":" + a, A(this.Bc, this, b), c)
    };
    g.Uc = function(a) {
        this.g = A(this.Bc, this, a)
    };
    g.send = function(a, b) {
        if (this.G) throw Error("#send called for disposed VirtualChannel.");
        this.a.c.send(this.c + ":" + a, b)
    };
    g.Bc = function(a, b) {
        this.G || a.apply({}, Array.prototype.slice.call(arguments, 1))
    };
    g.D = function() {
        this.a = this.a.a[this.c] = null
    };
    var Zk = function(a) {
        L.call(this);
        this.a = new Wk(a);
        this.g = {};
        this.c = Yk(this.a, "private");
        this.j = Yk(this.a, "public");
        this.c.yb("mics", A(this.md, this), !0)
    };
    C(Zk, L);
    g = Zk.prototype;
    g.Ud = 0;
    g.D = function() {
        M(this.a);
        delete this.a;
        delete this.j;
        delete this.c
    };
    g.send = function(a, b, c) {
        var d = this.Ud++;
        this.g[d] = c;
        c = {};
        c.signature = d;
        c.data = b;
        this.j.send(a, c)
    };
    g.md = function(a) {
        var b = a.signature;
        a = a.data;
        b in this.g && ((0, this.g[b])(a), delete this.g[b])
    };
    g.ld = function(a, b) {
        var c = {};
        c.data = a(b.data);
        c.signature = b.signature;
        this.c && this.c.send("mics", c)
    };
    var $k = function() {
        L.call(this);
        this.A = {}
    };
    C($k, L);
    g = $k.prototype;
    g.Td = null;
    g.connect = function(a) {
        a && a()
    };
    g.ia = function() {
        return !0
    };
    g.yb = function(a, b, c) {
        this.A[a] = {
            pa: b,
            Rc: !!c
        }
    };
    g.Uc = function(a) {
        this.o = a
    };
    g.send = v;
    var al = function(a, b) {
        if (b && y(a)) try {
            return ph(a)
        } catch (c) {
            return null
        } else if (!b && !y(a)) return sh(a);
        return a
    };
    $k.prototype.D = function() {
        $k.C.D.call(this);
        delete this.Td;
        delete this.A;
        delete this.o
    };
    var bl = ["pu", "lru", "pru", "lpu", "ppu"],
        cl = {},
        el = function() {
            for (var a = 10, b = dl, c = b.length, d = ""; 0 < a--;) d += b.charAt(Math.floor(Math.random() * c));
            return d
        },
        dl = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    var fl = function(a) {
        L.call(this);
        this.X = a || Rc()
    };
    C(fl, L);
    var U = function(a) {
        return Xc(a.X.a)
    };
    fl.prototype.pb = v;
    fl.prototype.connect = v;
    fl.prototype.send = v;
    var il = function(a, b) {
        fl.call(this, b);
        this.a = a;
        this.B = new Lg(this);
        Nd(this, ka(M, this.B));
        this.o = new Ig(100, U(this));
        Nd(this, ka(M, this.o));
        this.j = new P;
        this.m = new P;
        this.c = new P;
        this.A = el();
        this.v = null;
        this.g = {};
        this.H = this.a.name;
        gl(this.a, this.a.name + "_" + hl(this.a));
        this.F = !1;
        tf(this.c, this.j);
        tf(this.c, this.m);
        sf(this.c, this.xd, this);
        this.c.pa(!0);
        this.B.I(this.o, "tick", this.Hc)
    };
    C(il, fl);
    var jl = {},
        ml = function(a) {
            var b = new kl(a.channelName, a.service, a.payload);
            a = b.a;
            var c = b.Eb,
                b = b.eb,
                d = cl[a];
            if (d) return d.c(c, b), !0;
            var d = ll(b)[0],
                e;
            for (e in cl) {
                var f = cl[e];
                if (1 == hl(f) && !f.ia() && "tp" == c && "SETUP" == d) return gl(f, a), f.c(c, b), !0
            }
            return !1
        };
    g = il.prototype;
    g.pb = function(a) {
        a = ll(a);
        var b = a[1];
        switch (a[0]) {
            case "SETUP_ACK":
                this.j.a || this.j.pa(!0);
                break;
            case "SETUP":
                this.send("tp", "SETUP_ACK"), this.m.a || this.m.pa(!0), null != this.v && this.v != b && this.send("tp", "SETUP," + this.A), this.v = b
        }
    };
    g.connect = function() {
        var a = U(this);
        if (a) {
            var b = ha(a);
            0 == (jl[b] || 0) && null == t("crosswindowmessaging.channel", a) && r("crosswindowmessaging.channel", ml, a);
            jl[b]++;
            this.F = !0;
            this.Hc()
        }
    };
    g.Hc = function() {
        this.a.ia() ? Jg(this.o) : (this.o.start(), this.send("tp", "SETUP," + this.A))
    };
    g.send = function(a, b) {
        this.a.ja && (a = new kl(this.H + "_" + (0 == hl(this.a) ? 1 : 0), a, b), this.a.getConfig().directSyncMode ? this.Cc(a) : this.g[ha(a)] = Kg(A(this.Cc, this, a), 0))
    };
    g.Cc = function(a) {
        var b = ha(a);
        this.g[b] && delete this.g[b];
        try {
            var c = t("crosswindowmessaging.channel", this.a.ja)
        } catch (d) {
            return
        }
        if (null !== c) try {
            c({
                channelName: a.a,
                service: a.Eb,
                payload: a.eb
            })
        } catch (d) {}
    };
    g.xd = function() {
        nl(this.a, (this.a.getConfig(), 0))
    };
    g.D = function() {
        if (this.F) {
            var a = U(this),
                b = ha(a);
            1 == --jl[b] && r("crosswindowmessaging.channel", null, a)
        }
        this.g && (Wa(this.g, function(a) {
            n.clearTimeout(a)
        }), this.g = null);
        this.j && (this.j.cancel(), delete this.j);
        this.m && (this.m.cancel(), delete this.m);
        this.c && (this.c.cancel(), delete this.c);
        il.C.D.call(this)
    };
    var ll = function(a) {
            a = a.split(",");
            a[1] = a[1] || null;
            return a
        },
        kl = function(a, b, c) {
            this.a = a;
            this.Eb = b;
            this.eb = c
        };
    var ol = function(a, b) {
        fl.call(this, b);
        this.c = a;
        this.g = [];
        this.o = A(this.od, this)
    };
    C(ol, fl);
    g = ol.prototype;
    g.bc = !1;
    g.connect = function() {
        0 == hl(this.c) ? (this.a = this.c.Za, this.a.XPC_toOuter = A(this.Oc, this)) : this.yc()
    };
    g.yc = function() {
        var a = !0;
        try {
            this.a || (this.a = U(this).frameElement), this.a && this.a.XPC_toOuter && (this.j = this.a.XPC_toOuter, this.a.XPC_toOuter.XPC_toInner = A(this.Oc, this), a = !1, this.send("tp", "SETUP_ACK"), nl(this.c))
        } catch (b) {}
        a && (this.m || (this.m = A(this.yc, this)), U(this).setTimeout(this.m, 100))
    };
    g.pb = function(a) {
        if (0 != hl(this.c) || this.c.ia() || "SETUP_ACK" != a) throw Error("Got unexpected transport message.");
        this.j = this.a.XPC_toOuter.XPC_toInner;
        nl(this.c)
    };
    g.Oc = function(a, b) {
        this.bc || 0 != this.g.length ? (this.g.push({
            be: a,
            eb: b
        }), 1 == this.g.length && U(this).setTimeout(this.o, 1)) : this.c.c(a, b)
    };
    g.od = function() {
        for (; this.g.length;) {
            var a = this.g.shift();
            this.c.c(a.be, a.eb)
        }
    };
    g.send = function(a, b) {
        this.bc = !0;
        this.j(a, b);
        this.bc = !1
    };
    g.D = function() {
        ol.C.D.call(this);
        this.a = this.j = null
    };
    var pl = function(a, b) {
            fl.call(this, b);
            this.a = a;
            this.F = this.a.getConfig().ppu;
            this.da = this.a.getConfig().lpu;
            this.o = []
        },
        ql, rl;
    C(pl, fl);
    g = pl.prototype;
    g.Wd = 5;
    g.Sb = 0;
    g.jb = !1;
    g.zb = !1;
    g.Tc = null;
    var sl = function(a) {
            return "googlexpc_" + a.a.name + "_msg"
        },
        tl = function(a) {
            return "googlexpc_" + a.a.name + "_ack"
        },
        vl = function(a) {
            try {
                if (!a.G && ul(a.a)) return a.a.ja.frames || {}
            } catch (b) {}
            return {}
        };
    pl.prototype.connect = function() {
        if (!this.G && ul(this.a)) {
            if (!this.zb) {
                var a = sl(this);
                this.g = wl(this, a);
                this.A = U(this).frames[a];
                a = tl(this);
                this.c = wl(this, a);
                this.v = U(this).frames[a];
                this.zb = !0
            }
            if (xl(this, sl(this)) && xl(this, tl(this))) this.M = new yl(this, vl(this)[sl(this)], A(this.V, this)), this.H = new yl(this, vl(this)[tl(this)], A(this.T, this)), this.K();
            else {
                if (1 == hl(this.a)) this.Tc || 0 < this.Wd-- || (gl(this.a, el()), zl(this), this.zb = !1, this.Tc = wl(this, "googlexpc_reconnect_" + this.a.name));
                else if (0 == hl(this.a))
                    for (var a =
                            vl(this), b = a.length, c = 0; c < b; c++) {
                        var d;
                        try {
                            a[c] && a[c].name && (d = a[c].name)
                        } catch (f) {}
                        if (d) {
                            var e = d.split("_");
                            if (3 == e.length && "googlexpc" == e[0] && "reconnect" == e[1]) {
                                this.a.name = e[2];
                                zl(this);
                                this.zb = !1;
                                break
                            }
                        }
                    }
                U(this).setTimeout(A(this.connect, this), 100)
            }
        }
    };
    var wl = function(a, b) {
            var c = document.createElement("IFRAME"),
                d = c.style;
            d.position = "absolute";
            d.top = "-10px";
            d.left = "10px";
            d.width = "1px";
            d.height = "1px";
            c.id = c.name = b;
            c.src = a.F + "#INITIAL";
            U(a).document.body.appendChild(c);
            return c
        },
        zl = function(a) {
            a.g && (a.g.parentNode.removeChild(a.g), a.g = null, a.A = null);
            a.c && (a.c.parentNode.removeChild(a.c), a.c = null, a.v = null)
        },
        xl = function(a, b) {
            try {
                var c = vl(a)[b];
                if (!c || 0 != c.location.href.indexOf(a.da)) return !1
            } catch (d) {
                return !1
            }
            return !0
        };
    pl.prototype.K = function() {
        var a = vl(this);
        a[tl(this)] && a[sl(this)] ? (this.R = new Al(this.F, this.A), this.m = new Al(this.F, this.v), U(this).setTimeout(A(function() {
            this.R.send("SETUP");
            this.jb = !0
        }, this), 100)) : (this.J || (this.J = A(this.K, this)), U(this).setTimeout(this.J, 100))
    };
    var Bl = function(a) {
        if (a.P && a.W && (nl(a.a), a.j)) {
            for (var b = 0, c; b < a.j.length; b++) c = a.j[b], a.a.c(c.Eb, c.eb);
            delete a.j
        }
    };
    pl.prototype.V = function(a) {
        if ("SETUP" == a) this.m && (this.m.send("SETUP_ACK"), this.P = !0, Bl(this));
        else if (this.a.ia() || this.P) {
            var b = a.indexOf("|"),
                c = a.substring(0, b);
            a = a.substring(b + 1);
            b = c.indexOf(",");
            if (-1 == b) {
                var d;
                this.m.send("ACK:" + c);
                Cl(this, a)
            } else d = c.substring(0, b), this.m.send("ACK:" + d), c = c.substring(b + 1).split("/"), b = parseInt(c[0], 10), c = parseInt(c[1], 10), 1 == b && (this.B = []), this.B.push(a), b == c && (Cl(this, this.B.join("")), delete this.B)
        }
    };
    pl.prototype.T = function(a) {
        "SETUP_ACK" == a ? (this.jb = !1, this.W = !0, Bl(this)) : this.a.ia() && this.jb && parseInt(a.split(":")[1], 10) == this.Sb && (this.jb = !1, Dl(this))
    };
    var Dl = function(a) {
            if (!a.jb && a.o.length) {
                var b = a.o.shift();
                ++a.Sb;
                a.R.send(a.Sb + b);
                a.jb = !0
            }
        },
        Cl = function(a, b) {
            var c = b.indexOf(":"),
                d = b.substr(0, c);
            b = b.substring(c + 1);
            a.a.ia() ? a.a.c(d, b) : (a.j || (a.j = [])).push({
                Eb: d,
                eb: b
            })
        };
    pl.prototype.send = function(a, b) {
        a = a + ":" + b;
        if (!J || 3800 >= b.length) this.o.push("|" + a);
        else {
            b = b.length;
            for (var c = Math.ceil(b / 3800), d = 0, e = 1; d < b;) this.o.push("," + e + "/" + c + "|" + a.substr(d, 3800)), e++, d += 3800
        }
        Dl(this)
    };
    pl.prototype.D = function() {
        pl.C.D.call(this);
        var a = El;
        Ja(a, this.M);
        Ja(a, this.H);
        this.M = this.H = null;
        $c(this.g);
        $c(this.c);
        this.A = this.v = this.g = this.c = null
    };
    var El = [],
        Fl = A(function() {
            var a = El,
                b, c = !1;
            try {
                for (var d = 0; b = a[d]; d++) {
                    var e;
                    if (!(e = c)) {
                        var f = b,
                            h = f.c.location.href;
                        if (h != f.a) {
                            f.a = h;
                            var k = h.split("#")[1];
                            k && (k = k.substr(1), f.g(decodeURIComponent(k)));
                            e = !0
                        } else e = !1
                    }
                    c = e
                }
            } catch (l) {
                if (b.j.a.close(), !a.length) return
            }
            a = B();
            c && (ql = a);
            rl = window.setTimeout(Fl, 1E3 > a - ql ? 10 : 100)
        }, pl),
        Gl = function() {
            ql = B();
            rl && window.clearTimeout(rl);
            rl = window.setTimeout(Fl, 10)
        },
        Al = function(a, b) {
            if (!/^https?:\/\//.test(a)) throw Error("URL " + a + " is invalid");
            this.g = a;
            this.c = b;
            this.a = 0
        };
    Al.prototype.send = function(a) {
        this.a = ++this.a % 2;
        a = this.g + "#" + this.a + encodeURIComponent(a);
        try {
            Yb ? this.c.location.href = a : this.c.location.replace(a)
        } catch (b) {}
        Gl()
    };
    var yl = function(a, b, c) {
        this.j = a;
        this.c = b;
        this.g = c;
        this.a = this.c.location.href.split("#")[0] + "#INITIAL";
        El.push(this);
        Gl()
    };
    var Il = function(a, b) {
        fl.call(this, b);
        this.a = a;
        this.g = this.a.getConfig().pru;
        this.c = this.a.getConfig().ifrid;
        Yb && Hl()
    };
    C(Il, fl);
    if (Yb) var Jl = [],
        Kl = 0,
        Hl = function() {
            Kl || (Kl = window.setTimeout(function() {
                Ll()
            }, 1E3))
        },
        Ll = function(a) {
            var b = B();
            for (a = a || 3E3; Jl.length && b - Jl[0].timestamp >= a;) {
                var c = Jl.shift().Rd;
                $c(c)
            }
            Kl = window.setTimeout(Ml, 1E3)
        },
        Ml = function() {
            Ll()
        };
    var Nl = {};
    Il.prototype.connect = function() {
        U(this).xpcRelay || (U(this).xpcRelay = Ol);
        this.send("tp", "SETUP")
    };
    var Ol = function(a, b) {
        var c = b.indexOf(":"),
            d = b.substr(0, c);
        b = b.substr(c + 1);
        if (J && -1 != (c = d.indexOf("|"))) {
            var e = d.substr(0, c),
                d = d.substr(c + 1),
                c = d.indexOf("+"),
                f = d.substr(0, c),
                c = parseInt(d.substr(c + 1), 10),
                h = Nl[f];
            h || (h = Nl[f] = {
                Fc: [],
                Sc: 0,
                Ec: 0
            }); - 1 != d.indexOf("++") && (h.Ec = c + 1);
            h.Fc[c] = b;
            h.Sc++;
            if (h.Sc != h.Ec) return;
            b = h.Fc.join("");
            delete Nl[f]
        } else var e = d;
        cl[a].c(e, decodeURIComponent(b))
    };
    Il.prototype.pb = function(a) {
        "SETUP" == a ? (this.send("tp", "SETUP_ACK"), nl(this.a)) : "SETUP_ACK" == a && nl(this.a)
    };
    Il.prototype.send = function(a, b) {
        b = encodeURIComponent(b);
        var c = b.length;
        if (J && 1800 < c)
            for (var d = Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ B()).toString(36), e = 0, f = 0; e < c; f++) {
                var h = b.substr(e, 1800),
                    e = e + 1800;
                Pl(this, a, h, d + (e >= c ? "++" : "+") + f)
            } else Pl(this, a, b)
    };
    var Pl = function(a, b, c, d) {
            if (J) {
                var e = U(a).document.createElement("DIV"),
                    f;
                f = {
                    onload: rc("this.xpcOnload()"),
                    sandbox: null
                };
                var h = {
                        src: null,
                        srcdoc: null
                    },
                    k = {
                        sandbox: ""
                    },
                    l = {},
                    m;
                for (m in h) l[m] = h[m];
                for (m in k) l[m] = k[m];
                for (m in f) {
                    var p = m.toLowerCase();
                    if (p in h) throw Error('Cannot override "' + p + '" attribute, got "' + m + '" with value "' + f[m] + '"');
                    p in k && delete l[p];
                    l[m] = f[m]
                }
                f = Mc("iframe", l);
                e.innerHTML = Gc(f);
                e = e.childNodes[0];
                e.xpcOnload = Ql
            } else e = U(a).document.createElement("IFRAME"), Yb ? Jl.push({
                timestamp: B(),
                Rd: e
            }) : de(e, "load", Ql);
            f = e.style;
            f.visibility = "hidden";
            f.width = e.style.height = "0px";
            f.position = "absolute";
            f = a.g;
            f += "#" + a.a.name;
            a.c && (f += "," + a.c);
            f += "|" + b;
            d && (f += "|" + d);
            e.src = f + (":" + c);
            U(a).document.body.appendChild(e)
        },
        Ql = function() {
            $c(this)
        };
    Il.prototype.D = function() {
        Il.C.D.call(this);
        Yb && Ll(0)
    };
    var Rl = function(a, b, c, d, e) {
        fl.call(this, c);
        this.m = a;
        this.o = e || 2;
        this.M = b || "*";
        this.F = new Lg(this);
        this.v = new Ig(100, U(this));
        this.H = !!d;
        this.g = new P;
        this.j = new P;
        this.c = new P;
        this.K = el();
        this.B = null;
        this.H ? 1 == hl(this.m) ? tf(this.c, this.g) : tf(this.c, this.j) : (tf(this.c, this.g), 2 == this.o && tf(this.c, this.j));
        sf(this.c, this.yd, this);
        this.c.pa(!0);
        this.F.I(this.v, "tick", this.Ic)
    };
    C(Rl, fl);
    Rl.prototype.a = null;
    Rl.prototype.J = !1;
    var Sl = {};
    Rl.prototype.A = 0;
    var Ul = function(a) {
        var b = a.c.data;
        if (!y(b)) return !1;
        var c = b.indexOf("|"),
            d = b.indexOf(":");
        if (-1 == c || -1 == d) return !1;
        var e = b.substring(0, c),
            c = b.substring(c + 1, d),
            b = b.substring(d + 1);
        if (d = cl[e]) return d.c(c, b, a.c.origin), !0;
        a = Tl(b)[0];
        for (var f in cl)
            if (d = cl[f], 1 == hl(d) && !d.ia() && "tp" == c && ("SETUP" == a || "SETUP_NTPV2" == a)) return gl(d, e), d.c(c, b), !0;
        return !1
    };
    Rl.prototype.pb = function(a) {
        var b = Tl(a);
        a = b[1];
        switch (b[0]) {
            case "SETUP_ACK":
                Vl(this, 1);
                this.g.a || this.g.pa(!0);
                break;
            case "SETUP_ACK_NTPV2":
                2 == this.o && (Vl(this, 2), this.g.a || this.g.pa(!0));
                break;
            case "SETUP":
                Vl(this, 1);
                Wl(this, 1);
                break;
            case "SETUP_NTPV2":
                2 == this.o && (b = this.a, Vl(this, 2), Wl(this, 2), 1 != b && null == this.B || this.B == a || Xl(this), this.B = a)
        }
    };
    var Xl = function(a) {
            2 != a.o || null != a.a && 2 != a.a || a.send("tp", "SETUP_NTPV2," + a.K);
            null != a.a && 1 != a.a || a.send("tp", "SETUP")
        },
        Wl = function(a, b) {
            if (2 != a.o || null != a.a && 2 != a.a || 2 != b) {
                if (null != a.a && 1 != a.a || 1 != b) return;
                a.send("tp", "SETUP_ACK")
            } else a.send("tp", "SETUP_ACK_NTPV2");
            a.j.a || a.j.pa(!0)
        },
        Vl = function(a, b) {
            b > a.a && (a.a = b);
            1 == a.a && (a.j.a || a.H || a.j.pa(!0), a.B = null)
        };
    g = Rl.prototype;
    g.connect = function() {
        var a = U(this),
            b = ha(a),
            c = Sl[b];
        da(c) || (c = 0);
        0 == c && de(a.postMessage ? a : a.document, "message", Ul, !1, Rl);
        Sl[b] = c + 1;
        this.J = !0;
        this.Ic()
    };
    g.Ic = function() {
        var a = 0 == hl(this.m);
        this.H && a || this.m.ia() || this.G ? Jg(this.v) : (this.v.start(), Xl(this))
    };
    g.send = function(a, b) {
        var c = this.m.ja;
        c && (this.send = function(a, b) {
            var d = this,
                e = this.m.name;
            this.A = Kg(function() {
                d.A = 0;
                try {
                    var f = c.postMessage ? c : c.document;
                    f.postMessage && f.postMessage(e + "|" + a + ":" + b, d.M)
                } catch (l) {}
            }, 0)
        }, this.send(a, b))
    };
    g.yd = function() {
        nl(this.m, 1 == this.o || 1 == this.a ? 200 : void 0)
    };
    g.D = function() {
        if (this.J) {
            var a = U(this),
                b = ha(a),
                c = Sl[b];
            Sl[b] = c - 1;
            1 == c && le(a.postMessage ? a : a.document, "message", Ul, !1, Rl)
        }
        this.A && (n.clearTimeout(this.A), this.A = 0);
        M(this.F);
        delete this.F;
        M(this.v);
        delete this.v;
        this.g.cancel();
        delete this.g;
        this.j.cancel();
        delete this.j;
        this.c.cancel();
        delete this.c;
        delete this.send;
        Rl.C.D.call(this)
    };
    var Tl = function(a) {
        a = a.split(",");
        a[1] = a[1] || null;
        return a
    };
    var Yl = function(a, b) {
        fl.call(this, b);
        this.a = a;
        this.c = a.at || "";
        this.g = a.rat || "";
        a = U(this);
        if (!a.nix_setup_complete) try {
            a.execScript("Class GCXPC____NIXVBS_wrapper\n Private m_Transport\nPrivate m_Auth\nPublic Sub SetTransport(transport)\nIf isEmpty(m_Transport) Then\nSet m_Transport = transport\nEnd If\nEnd Sub\nPublic Sub SetAuth(auth)\nIf isEmpty(m_Auth) Then\nm_Auth = auth\nEnd If\nEnd Sub\nPublic Function GetAuthToken()\n GetAuthToken = m_Auth\nEnd Function\nPublic Sub SendMessage(service, payload)\n Call m_Transport.GCXPC____NIXJS_handle_message(service, payload)\nEnd Sub\nPublic Sub CreateChannel(channel)\n Call m_Transport.GCXPC____NIXJS_create_channel(channel)\nEnd Sub\nPublic Sub GCXPC____NIXVBS_container()\n End Sub\nEnd Class\n Function GCXPC____NIXVBS_get_wrapper(transport, auth)\nDim wrap\nSet wrap = New GCXPC____NIXVBS_wrapper\nwrap.SetTransport transport\nwrap.SetAuth auth\nSet GCXPC____NIXVBS_get_wrapper = wrap\nEnd Function",
                "vbscript"), a.nix_setup_complete = !0
        } catch (c) {}
        this.GCXPC____NIXJS_handle_message = this.zd;
        this.GCXPC____NIXJS_create_channel = this.nd
    };
    C(Yl, fl);
    g = Yl.prototype;
    g.cb = !1;
    g.Va = null;
    g.connect = function() {
        0 == hl(this.a) ? this.xc() : this.wc()
    };
    g.xc = function() {
        if (!this.cb) {
            var a = this.a.Za;
            try {
                a.contentWindow.opener = (0, U(this).GCXPC____NIXVBS_get_wrapper)(this, this.c), this.cb = !0
            } catch (b) {}
            this.cb || U(this).setTimeout(A(this.xc, this), 100)
        }
    };
    g.wc = function() {
        if (!this.cb) {
            try {
                var a = U(this).opener;
                if (a && "GCXPC____NIXVBS_container" in a) {
                    this.Va = a;
                    if (this.Va.GetAuthToken() != this.g) return;
                    this.Va.CreateChannel((0, U(this).GCXPC____NIXVBS_get_wrapper)(this, this.c));
                    this.cb = !0;
                    nl(this.a)
                }
            } catch (b) {
                return
            }
            this.cb || U(this).setTimeout(A(this.wc, this), 100)
        }
    };
    g.nd = function(a) {
        this.Va = a;
        this.Va.GetAuthToken() == this.g && nl(this.a)
    };
    g.zd = function(a, b) {
        U(this).setTimeout(A(function() {
            this.a.c(a, b)
        }, this), 1)
    };
    g.send = function(a, b) {
        this.Va.SendMessage(a, b)
    };
    g.D = function() {
        Yl.C.D.call(this);
        this.Va = null
    };
    var $l = function(a, b) {
        $k.call(this);
        for (var c = 0, d; d = bl[c]; c++)
            if (d in a && !/^https?:\/\//.test(a[d])) throw Error("URI " + a[d] + " is invalid for field " + d);
        this.a = a;
        this.name = this.a.cn || el();
        this.g = b || Rc();
        this.j = [];
        this.v = new Lg(this);
        a.lpu = a.lpu || ig(Xc(this.g.a).location.href) + "/robots.txt";
        a.ppu = a.ppu || ig(a.pu || "") + "/robots.txt";
        cl[this.name] = this;
        oe(window, "unload", Zl) || ke(window, "unload", Zl)
    };
    C($l, $k);
    var am = /^%*tp$/,
        bm = /^%+tp$/;
    g = $l.prototype;
    g.Ha = null;
    g.Wa = null;
    g.qa = null;
    g.$a = 1;
    g.ia = function() {
        return 2 == this.$a
    };
    g.ja = null;
    g.Za = null;
    g.getConfig = function() {
        return this.a
    };
    var ul = function(a) {
        try {
            return !!a.ja && !a.ja.closed
        } catch (b) {
            return !1
        }
    };
    $l.prototype.connect = function(a) {
        this.m = a || u;
        3 == this.$a && (this.$a = 1);
        this.Wa ? sf(this.Wa, this.B) : this.B()
    };
    $l.prototype.B = function() {
        this.Wa = null;
        this.a.ifrid && (this.Za = this.g.S(this.a.ifrid));
        if (this.Za) {
            var a = this.Za.contentWindow;
            a || (a = window.frames[this.a.ifrid]);
            this.ja = a
        }
        if (!this.ja) {
            if (window == window.top) throw Error("CrossPageChannel: Can't connect, peer window-object not set.");
            this.ja = window.parent
        }
        if (!this.qa) {
            if (!this.a.tp) {
                var a = this.a,
                    b;
                if (z(document.postMessage) || z(window.postMessage) || J && window.postMessage) b = 1;
                else if (Xb) b = 2;
                else if (J && this.a.pru) b = 3;
                else {
                    var c;
                    if (c = J) {
                        c = !1;
                        try {
                            b = window.opener,
                                window.opener = {}, c = Rb(window, "opener"), window.opener = b
                        } catch (d) {}
                    }
                    b = c ? 6 : 4
                }
                a.tp = b
            }
            switch (this.a.tp) {
                case 1:
                    this.qa = new Rl(this, this.a.ph, this.g, !!this.a.osh, this.a.nativeProtocolVersion || 2);
                    break;
                case 6:
                    this.qa = new Yl(this, this.g);
                    break;
                case 2:
                    this.qa = new ol(this, this.g);
                    break;
                case 3:
                    this.qa = new Il(this, this.g);
                    break;
                case 4:
                    this.qa = new pl(this, this.g);
                    break;
                case 7:
                    if (a = this.ja) try {
                        a = window.document.domain == this.ja.document.domain
                    } catch (d) {
                        a = !1
                    }
                    a && (this.qa = new il(this, this.g))
            }
            if (!this.qa) throw Error("CrossPageChannel: No suitable transport found!");
        }
        for (this.qa.connect(); 0 < this.j.length;) this.j.shift()()
    };
    $l.prototype.close = function() {
        this.Wa && (this.Wa.cancel(), this.Wa = null);
        this.j.length = 0;
        Og(this.v);
        this.$a = 3;
        M(this.qa);
        this.m = this.qa = null;
        M(this.Ha);
        this.Ha = null
    };
    var nl = function(a, b) {
        a.ia() || a.Ha && 0 != a.Ha.a || (a.$a = 2, M(a.Ha), q(b) ? (a.Ha = new Ch(a.m, b), a.Ha.start()) : (a.Ha = null, a.m()))
    };
    $l.prototype.send = function(a, b) {
        this.ia() && (ul(this) ? (ea(b) && (b = sh(b)), this.qa.send(cm(a), b)) : this.close())
    };
    $l.prototype.c = function(a, b, c) {
        if (this.Wa) this.j.push(A(this.c, this, a, b, c));
        else {
            var d = this.a.ph;
            !D(E(c)) && !D(E(d)) && c != this.a.ph || this.G || 3 == this.$a || (a && "tp" != a ? this.ia() && (a = a.replace(/%[0-9a-f]{2}/gi, decodeURIComponent), a = bm.test(a) ? a.substring(1) : a, a = (c = this.A[a]) ? c : this.o ? {
                pa: ka(this.o, a),
                Rc: ea(b)
            } : null) && (b = al(b, a.Rc), null != b && a.pa(b)) : this.qa.pb(b))
        }
    };
    var cm = function(a) {
            am.test(a) && (a = "%" + a);
            return a.replace(/[%:|]/g, encodeURIComponent)
        },
        hl = function(a) {
            var b = a.a.role;
            return da(b) ? b : window.parent == a.ja ? 1 : 0
        },
        gl = function(a, b) {
            delete cl[a.name];
            a.name = b;
            cl[b] = a
        };
    $l.prototype.D = function() {
        this.close();
        this.Za = this.ja = null;
        delete cl[this.name];
        M(this.v);
        delete this.v;
        $l.C.D.call(this)
    };
    var Zl = function() {
        for (var a in cl) M(cl[a])
    };
    var V = function(a, b, c) {
        kj.call(this, a, b, c);
        this.Da = this.za() + ".if";
        this.j = null;
        this.Ea = new Bk(b, a);
        this.fa = [];
        this.oa = null;
        this.na = 0;
        this.Ba = el();
        this.B = this.ea = this.P = this.M = null;
        this.K = !1;
        this.H = this.m = null;
        this.Z = "";
        if (b.nb) {
            a = new Gj;
            c = b.g;
            a.a = [];
            for (var d = 0; d < a.c.length; ++d) {
                var e = a.c[d];
                a.a[d] = !1;
                var f;
                f = q(void 0) && y(void 0) ? void 0 : "";
                f = !D(E(f)) && 0 <= Da(vj, f) ? f : null;
                D(E(c)) || null !== f && "HTML5_CONFIGURABLE" != f && "HTML5_CONFIGURABLE_DAB" != f && "HTML5_LAYOUTS" != f && "FLASH_CONFIGURABLE_JSON" != f || (e = xj(e,
                    c), null !== e && (c = e, a.a[d] = !0))
            }
            b.ed = c
        }
        this.V = b;
        this.W = null;
        this.ma = "safe" == ki() && !Kk(this.a, 178);
        this.wa = "safe" == ki() && Kk(this.a, 178) && !0;
        this.J = null;
        this.wa && (this.J = document.getElementById("goog-messaging-iframe") || document.createElement("iframe"), null == this.J.parentNode && (this.J.id = "goog-messaging-iframe", this.J.name = "goog-messaging-iframe", this.J.style.display = "none", document.body.appendChild(this.J)));
        this.Fa = this.T = !1;
        this.A = null;
        Eg(Dj, [3]);
        this.Ua = new Ck(A(this.Xa, this))
    };
    C(V, kj);
    g = V.prototype;
    g.Zb = function() {
        for (; this.fa.length;) {
            var a = this.fa.shift();
            W(this, a.methodName, a.args)
        }
        V.C.Zb.call(this)
    };
    g.Tb = function() {
        this.Xa(new T("pageLoaded"))
    };
    g.Ja = function() {
        V.C.Ja.call(this);
        R(this).I(this, "conduitInitialized", this.Ed);
        R(this).I(window, ["resize", "orientationchange"], this.sc);
        var a = this.S();
        a && (R(this).I(this, "isFullscreenSupported", this.Gd), R(this).I(this, "queryFullscreenDimensions", this.Ub), R(this).I(this, "fullscreenExpandRequested", this.Lc), R(this).I(this, "fullscreenExpandFinished", this.Fd), R(this).I(this, "fullscreenCollapseRequested", this.Ld), R(this).I(this, "fullscreenCollapseFinished", this.je), R(this).I(this, "setResponsiveBehavior",
            this.Md), R(this).I(this, "responsiveResize", this.Nd), this.m = new ti(this, a, this.V.c), this.W = new Bi(a, 56), R(this).I(this.m, "g", A(this.L, this, new Li("fullscreenCollapseRequested"))), R(this).I(this, "registerEventTypeListenerForType", this.Jd));
        a = this.V.a.av_ad_key;
        isFinite(a) && (a = String(a));
        var a = y(a) ? /^\s*-?0x/i.test(a) ? parseInt(a, 16) : parseInt(a, 10) : NaN,
            b;
        if (b = !(!n.IN_ADSENSE_IFRAME || !n.CreativeToolset)) b = Nk(new Mk(a, Tk(window.location.href))) || null != fh.getInstance().a;
        b && (this.ea = new Uk(window, a), a = this.ea,
            b = A(this.le, this), null != a.a.a ? (a.a.I("show", A(a.j, a, b, !0)), a.a.I("hide", A(a.j, a, b, !1))) : Nk(a.c) && (b = ka(a.v, b), a.g.push(b), de(a.qb, "message", b), Pk = Hd.setInterval(tg(ka(Sk, 2, a.c, void 0, void 0, void 0, void 0, void 0)), 500)));
        dm(this, !0)
    };
    g.Qb = function(a) {
        var b = [{
            element: this.S(),
            Na: {
                clip: "auto",
                position: "fixed",
                left: a.left + "px",
                top: a.top + "px",
                overflow: "visible",
                width: a.width + "px",
                height: a.height + "px"
            }
        }];
        this.K || b.push({
            element: this.j,
            Na: {
                position: "fixed",
                left: a.left + "px",
                top: a.top + "px",
                width: a.width + "px",
                height: a.height + "px"
            },
            attributes: {
                width: a.width,
                height: a.height
            }
        });
        return b
    };
    g.Jb = function() {
        var a = {};
        this.ma ? (a.tp = 7, a.directSyncMode = !0) : a.tp = 1;
        this.K || (a.ifrid = this.Da);
        a.cn = this.Ba;
        a.role = 0;
        var b;
        this.wa ? (b = this.J, b = Rc(b.contentDocument || b.contentWindow.document)) : b = Rc();
        this.M = new $l(a, b);
        Nd(this, ka(M, this.M));
        if (a = this.K ? window : this.j.contentWindow) this.M.ja = a;
        this.P = new Zk(this.M);
        Nd(this, ka(M, this.P));
        a = this.P;
        b = A(this.ke, this);
        a.j.yb("general", A(a.ld, a, b), !0);
        this.M.connect()
    };
    g.Ra = function() {
        V.C.Ra.call(this);
        dm(this, !1)
    };
    g.ab = function() {
        V.C.ab.call(this);
        this.Ia(this.S())
    };
    g.Ia = function(a) {
        V.C.Ia.call(this, a);
        this.ma ? (this.B = new(n.XDomainRequest && J && !K(10) ? Ek : Ik), this.va.ma && this.B.pc() ? (this.K = !0, this.B.gc(!1)) : em(this), a = R(this), Ng(a, this.B, "success", this.mb, !1, this), a = R(this), Ng(a, this.B, "error", this.lb, !1, this), this.B.send(this.a.v, "get")) : fm(this)
    };
    var em = function(a) {
            var b = a.S(),
                c;
            c = a.X.c("IFRAME", {
                frameborder: 0,
                style: "border:0;vertical-align:bottom;",
                src: Vk
            });
            b.appendChild(c);
            a.g = b;
            gm(a);
            b.style.position = "relative";
            b.style.margin = "0px";
            b.style.padding = "0px";
            a.j = c;
            Ji(c, a.a.width, a.a.height);
            b = {
                id: a.Da,
                frameborder: "0",
                scrolling: "no"
            };
            a.a.j && a.a.j.c && (b.allowtransparency = "true");
            Uc(c, b);
            c.setAttribute("allowfullscreen", "true");
            jd(c, "0px", "0px")
        },
        gm = function(a) {
            var b = a.S();
            if (null != b) {
                var c = a.a.a && Ua(a.a.a.a);
                Ji(b, c ? c.right - c.left : a.a.width, c ?
                    c.bottom - c.top : a.a.height);
                jd(b, 0, 0);
                b.style.top = "";
                b.style.bottom = "";
                b.style.left = "";
                b.style.right = ""
            }
        },
        fm = function(a) {
            a.K = !1;
            em(a);
            var b = R(a);
            Ng(b, a.j, "load", a.Jb, !1, a);
            a.j.src = hm(a)
        };
    V.prototype.lb = function() {
        fm(this)
    };
    V.prototype.mb = function() {
        var a = this.B.Pb().toString(),
            b;
        this.a.v ? (b = this.a.v, b = b.slice(0, b.lastIndexOf("/") + 1), /^\/+$/.test(b) || (b = b.replace(/\/+$/, ""))) : b = "";
        b = '<base href="' + b + '/">';
        var c = '<script>var STUDIO_ORIGINAL_ASSET_URL = "' + hm(this) + '";\x3c/script>';
        a: {
            b += c;
            for (var c = ["head", "body", "html"], d = 0; d < c.length; d++) {
                var e = a.indexOf("<" + c[d]);
                if (-1 < e && (e = a.indexOf(">", e), -1 < e)) {
                    c = e + 1;
                    a = a.substring(0, c) + b + a.substring(c);
                    break a
                }
            }
            a = b + a
        }
        this.Z = a;
        this.K ? (document.write(this.Z), this.Jb(), this.B.dispose()) :
            this.j && (this.H = new Ig(50), R(this).I(this.H, "tick", this.ya), this.H.start(), this.ya())
    };
    V.prototype.ya = function() {
        if (this.j.contentWindow || this.j.contentDocument) {
            im(this);
            var a = R(this);
            Ng(a, this.j, "load", this.Jb, !1, this);
            var b = this.j,
                a = Kc(this.Z, null),
                b = b.contentDocument || b.contentWindow.document;
            b.open();
            b.write(Gc(a));
            b.close();
            this.B.dispose()
        }
    };
    V.prototype.D = function() {
        im(this);
        M(this.W);
        M(this.m);
        M(this.ea);
        V.C.D.call(this)
    };
    var im = function(a) {
            a.H && (Jg(a.H), R(a).Oa(a.H, "tick", a.ya), a.H.dispose(), a.H = null)
        },
        hm = function(a) {
            var b = a.a.v,
                c = [];
            Kk(a.a, 149) || c.push("liveEnvironment=true");
            Bj(1);
            Bj(64);
            window.layoutsPreview && Bj(16);
            li() && Bj(32);
            a.V.c && Bj(256);
            c.push(["e", zj].join("="));
            c.push("renderingType=2");
            window.layoutsPreview && (Kk(a.a, 149) || c.push("layoutsPreview=true"), c.push(["layoutsRuntime", window.layoutsPreview.layoutsRuntime].join("=")), c.push(["fillerContext", window.layoutsPreview.fillerContext].join("=")));
            var d =
                a.a.a ? a.a.a.a.top : 0;
            c.push(["leftOffset", a.a.a ? a.a.a.a.left : 0].join("="));
            c.push(["topOffset", d].join("="));
            c.push(["c", a.Ba].join("="));
            d = a.wa ? 4 : 1;
            a.ma && (d = a.K ? 3 : 2);
            c.push(["t", d].join("="));
            return b + (c.length ? "?" + c.join("&") : "")
        };
    g = V.prototype;
    g.ad = function(a, b) {
        this.j && (Ji(this.j, a.right - a.left, a.bottom - a.top), b && (a = this.S(), a.style.position = "absolute", a.style.overflow = "hidden", this.j.style.position = "absolute"))
    };
    g.Hb = function() {
        return this.j
    };
    g.hb = function(a, b) {
        V.C.hb.call(this, a, b);
        nd(this.j, "100%", "100%")
    };
    g.ke = function(a) {
        return this.$(a.methodName, a.args)
    };
    g.ic = function(a, b) {
        W(this, "setParameter", [a, b])
    };
    g.Gc = function(a, b) {
        W(this, "getParameter", [a], b)
    };
    var dm = function(a, b) {
        Kk(a.a, 123) ? W(a, "setAdVisibleInternal", [b]) : a.Xa(new T(b ? "visible" : "hidden"))
    };
    g = V.prototype;
    g.Sa = function(a) {
        V.C.Sa.call(this);
        var b = this.a.a,
            c = b && Ua(b.a),
            d = a ? xh(a, c, new H(this.a.width, this.a.height)) : new Pa(0, this.a.width, this.a.height, 0),
            e = this.S();
        nd(e, d.right - d.left, d.bottom - d.top);
        a ? (b = "safe" == ki() && !document.getElementById("sf_align"), d = !(a.a & 2) && !b, e.style.left = a.a & 1 || b ? "0px" : -c.left + "px", e.style.top = d ? -c.top + "px" : "0px") : c && "lightbox" != b.expansionMode && (e.style.left = -c.left + "px", e.style.top = -c.top + "px");
        Kk(this.a, 123) && (c = [], a && c.push(a.toString()), W(this, "startExpandInternal", c))
    };
    g.Mb = function() {
        this.T = !0;
        jm(this)
    };
    g.rb = function() {
        V.C.rb.call(this);
        Kk(this.a, 123) && W(this, "aboutToExpandInternal")
    };
    g.Qa = function() {
        V.C.Qa.call(this);
        Kk(this.a, 123) ? W(this, "startCollapseInternal") : this.Xa(new T("collapse"))
    };
    g.Ga = function() {
        V.C.Ga.call(this);
        gm(this);
        Kk(this.a, 123) && W(this, "finishCollapseInternal")
    };
    g.Xa = function(a) {
        W(this, "dispatchEvent", [a])
    };
    var W = function(a, b, c, d) {
        c = x(c) ? c : [];
        b = {
            methodName: b,
            args: c ? c : []
        };
        a.M && a.M.ia() && a.P ? a.P.send("general", b, d || u) : a.fa.push(b)
    };
    g = V.prototype;
    g.Ed = function(a) {
        a && a.data && a.data.features && Eg(Dj, a.data.features);
        Ej(1) && (this.Ea = new zk(this.V, this.a));
        a = this.Ea.c(this.za());
        W(this, "setAdParameters", [a]);
        this.sc()
    };
    g.Md = function(a) {
        "setResponsiveBehavior" == a.type && a.data && 2 == a.data.state && (this.m.o = 2 == a.data.behavior, ui(this.m, A(this.Ub, this, null)));
        this.Fa = !0;
        jm(this)
    };
    g.Nd = function(a) {
        if ("responsiveResize" == a.type && a.data) {
            var b = this.m,
                c = a.data.width || null,
                d = a.data.height || null;
            if (li() && b.o && b.g) {
                var e = si(b);
                e.c.setExpandProperties && e.c.setExpandProperties("lightbox", c, d);
                c && d && b.a && b.a.ka && (b.a.ka.width = c, b.a.ka.height = d)
            }
            null == this.A && (this.A = Sa(this.la));
            this.A.width = a.data.width || this.A.width;
            this.A.height = a.data.height || this.A.height;
            jm(this)
        }
    };
    g.Gd = function() {
        wi(this.m).then(function(a) {
            W(this, "fullscreenSupportInternal", [a])
        }, void 0, this)
    };
    g.Ub = function() {
        vi(this.m).then(function(a) {
            W(this, "fullscreenDimensionsInternal", Ra(Th, a) ? [] : [a.width, a.height])
        }, function() {
            W(this, "fullscreenDimensionsInternal", [0, 0])
        }, this)
    };
    var jm = function(a) {
        if (a.T && a.Fa) {
            var b = a.m.o;
            b && null == a.A ? b && a.Ub() : (a.T = !1, a.Lc(new Li("fullscreenExpandRequested", null, b ? [a.A.width, a.A.height] : [])))
        }
    };
    g = V.prototype;
    g.Lc = function(a) {
        Fi(this.W, !0);
        a = 2 == a.data.length ? new H(a.data[0], a.data[1]) : null;
        this.T = !1;
        null != a && (this.A = Sa(a));
        bf(xi(this.m, Sa(this.la), a).then(this.m.H, void 0, this.m).then(function(a) {
            this.L(new Li("triggerOuterFullscreenExpand", null, a));
            W(this, "fullscreenExpandStartInternal", [a.Ya.width, a.Ya.height, a.dd.N, a.dd.O])
        }, void 0, this), function() {
            W(this, "fullscreenExpandStartInternal", [0, 0, 0, 0])
        }, this)
    };
    g.Fd = function() {
        W(this, "fullscreenExpandFinishInternal", [])
    };
    g.Ld = function() {
        W(this, "fullscreenCollapseStartInternal", [])
    };
    g.je = function() {
        Fi(this.W, !1);
        zi(this.m, !0);
        W(this, "fullscreenCollapseFinishInternal", []);
        this.sc()
    };
    g.le = function(a) {
        var b = new T("visibilityChangeWithInfo");
        b.sb("visibilityParams", a);
        this.Xa(b)
    };
    g.Jd = function(a) {
        if (a.data.type && (a = a.data.type, a in tj)) {
            var b = this.Ua;
            de(window, a, b.j, !1, b)
        }
    };
    g.sc = function() {
        if (this.oa != km(this) || "onorientationchange" in window && this.na != window.orientation) {
            this.oa = km(this);
            "onorientationchange" in window && (this.na = window.orientation);
            var a = new T("orientation");
            a.sb("mode", this.oa);
            a.sb("degrees", this.na);
            this.Xa(a)
        }
    };
    var km = function(a) {
        a = Xc(a.X.a);
        return a.innerWidth > a.innerHeight ? "landscape" : "portrait"
    };
    V.prototype.$ = function(a, b) {
        switch (a) {
            case "invokeExternalJSFunctionWithReturn":
                return this.ob.apply(this, b);
            default:
                return V.C.$.call(this, a, b)
        }
    };
    V.prototype.ob = function(a, b, c) {
        a = Ij(a);
        if (!a) return null;
        var d = b.lastIndexOf(".");
        if (-1 < d) {
            var e = b.substring(0, d);
            b = b.substring(d + 1);
            a = t(e, a)
        }
        b = t(b, a);
        return null != a || null != b ? z(b) ? b.apply(a, c) : b : null
    };
    var lm = function() {
        return I("iPad") || I("Android") && !I("Mobile") || I("Silk")
    };
    var mm = function(a, b, c, d, e) {
        c && (a = c ? a.replace("[rm_exit_id]", c) : a, b = d ? d + encodeURIComponent(b) : b);
        if (!D(E(a)) && -1 < a.indexOf("?"))
            for (c = da(e) ? e : 1, d = 0; d < c; d++) b = escape(b);
        return a + b
    };
    var nm = function(a, b, c, d) {
        this.a = d;
        d = !1;
        this.a && this.a.tb && (d = Kb(this.a.tb).m);
        Hb.call(this, a, b, c, !1, d)
    };
    C(nm, Hb);
    var om = function(a, b) {
            this.vc = a;
            this.tb = b
        },
        qm = function(a) {
            var b = a.split(":");
            if (2 == b.length && (a = b[0], b = pm[b[1]])) return new om(a, b)
        },
        pm = {
            Complete: "VIDEO_COMPLETE",
            Interaction: "VIDEO_INTERACTION",
            MidPoint: "VIDEO_MIDPOINT",
            Mute: "VIDEO_MUTE",
            Pause: "VIDEO_PAUSE",
            Play: "VIDEO_PLAY",
            Replay: "VIDEO_REPLAY",
            Stop: "VIDEO_STOP",
            Unmute: "VIDEO_UNMUTE",
            ViewTime: "VIDEO_VIEW_TIMER"
        };
    var rm = function(a, b, c, d) {
            this.name = a;
            this.url = b;
            null != d && (this.url = 0 != this.url.indexOf("/") ? d + "/" + this.url : d + this.url);
            c && (this.url = this.url.replace(/^http:\/\//, "https://"));
            this.g = !1;
            this.a = this.c = null
        },
        tm = function(a, b) {
            b = new rm(a.name, a.url, b);
            a.isVideo && sm(b, a.streamingUrl, a.transcodeInformation);
            return b
        },
        sm = function(a, b, c) {
            a.g = !0;
            a.c = b || null;
            a.a = c ? new Oj(c) : null
        };
    var um = function(a) {
        return (a = a.match(/([^:]+):([^:]*):([^:]*):(.+)/)) && 5 == a.length ? {
            type: a[1],
            name: unescape(a[2]),
            videoName: unescape(a[3]),
            trigger: a[4]
        } : null
    };
    var vm = function(a, b) {
        if ("boolean" == typeof a) return a;
        if (y(a)) {
            if ("true" === a) return !0;
            if ("false" === a) return !1
        }
        return b ? b : !1
    };
    var wm = function(a, b, c, d) {
        this.a = a;
        this.c = c;
        this.g = !!d
    };
    wm.prototype.ping = function() {
        if (this.g) {
            var a = this.a;
            if (!this.c.a && !D(E(a)) && null !== a) {
                var b;
                Gd.body ? (Id || (b = Gd.createElement("iframe"), b.style.display = "none", b.id = "anonIframe", Id = b, Gd.body.appendChild(b)), b = !0) : b = !1;
                b && Dd(Id.contentWindow, a, void 0)
            }
        } else Kd(this.c, this.a)
    };
    var xm = function() {
            this.c = this.g = this.G = this.height = this.width = this.a = this.target = this.j = "";
            this.m = []
        },
        ym = function(a) {
            var b = Ia(a.primaryFiles, function(a) {
                return "BACKUP_IMAGE" == a.renderAs
            });
            if (null === b) return null;
            var c = new xm;
            c.a = b.url || c.a;
            c.width = b.width || c.width;
            c.height = b.height || c.height;
            c.G = a.impressionUrl;
            b = Ia(a.exitEvents, function(a) {
                return !!a.backUpExit
            });
            null !== b && (b.destinationUrl && (c.j = a.clickUrl ? mm(a.clickUrl, b.destinationUrl, b.reportingId) : b.destinationUrl), c.target = b.targetWindow || c.target);
            b = Ia(a.thirdPartyUrls, function(a) {
                return "IMPRESSION_IMG" == a.type
            });
            null !== b && (c.c = b.url || c.c);
            if (null != a.thirdPartyUrls)
                for (var b = a.thirdPartyUrls, d = new Jd(a.previewMode || !1), e = 0; e < b.length; e++) "CLICK" == Yg(b[e].type) && c.m.push(new wm(b[e].url, 0, d, "true" == b[e].scrub));
            a = a.eventTrackingBaseUrl;
            null != a && (";" != a.charAt(a.length - 1) && (a += ";"), c.g = a + "met=1;&timestamp=" + +new Date + ";eid1=9;ecn1=1;etm1=0;");
            return c
        },
        bg = function(a) {
            var b = [],
                b = b.concat(['<a target="', a.target, '" href="', a.j, '">']),
                b = b.concat(['<img src="',
                    a.a, '" '
                ]),
                b = b.concat(['width="', a.width, '" height="', a.height, '" ']);
            b.push('border="0"></a>');
            return b.join("")
        };
    var Am = function(a) {
        var b;
        b = a.toLowerCase();
        a = [];
        var c = 0;
        /^https?:\/\//.test(b) ? (a[0] = 0, c = "s" == b.charAt(4) ? 8 : 7) : a[0] = -1;
        a[1] = c;
        b = [b.indexOf(":", c), b.indexOf("/", c), b.indexOf("?", c), b.indexOf("#", c)];
        for (c = 0; c < b.length; ++c)
            if (-1 == b[c]) a[c + 2] = -1;
            else {
                for (var d = !0, e = c + 1; e < b.length; ++e) - 1 < b[e] && b[c] > b[e] && (d = !1);
                a[c + 2] = d ? b[c] : -1
            }
        this.a = a
    };
    var Bm = function() {
        this.Fa = !1;
        this.o = this.G = this.gd = "";
        this.A = new H(0, 0);
        this.nb = !1;
        this.g = "";
        this.ac = !1;
        this.H = new H(0, 0);
        this.c = !1;
        this.R = this.Z = this.fc = "";
        this.fa = [];
        this.mb = this.$ = !1;
        this.oa = "";
        this.a = {};
        this.Ba = this.ya = this.xa = this.J = "";
        this.ma = this.ob = this.P = !1;
        this.ed = null;
        this.X = !1;
        this.va = null;
        this.Da = "";
        this.T = {
            Cb: "",
            Db: ""
        };
        this.m = {};
        this.v = this.la = this.ca = "";
        this.M = 1;
        this.ea = this.Ma = this.ga = "";
        this.wa = null;
        this.Ca = "";
        this.tc = !1;
        this.j = [];
        this.W = [];
        this.uc = [];
        this.Ua = {};
        this.qc = {};
        this.F = {};
        this.rc = {};
        this.lb = {};
        this.B = {};
        this.da = !1;
        this.na = {};
        this.Ea = this.V = this.K = null;
        this.na.Exit = this.F;
        this.na.Timer = this.rc;
        this.na.Counter = this.lb
    };
    Bm.prototype.fd = !1;
    var Em = function(a, b) {
            if (!a.Fa) {
                a.Fa = !0;
                a.gd = b.renderingLibraryData.version;
                var c = b.creativeParameters;
                a.G = c.cid || a.G;
                a.o = c.creative_unique_id || a.o;
                a.A = new H(parseInt(b.width, 10) || a.A.width, parseInt(b.height, 10) || a.A.height);
                a.H = new H(parseInt(b.slotWidth, 10) || a.H.width, parseInt(b.slotHeight, 10) || a.H.height);
                a.c = vm(b.previewMode, a.c);
                a.fc = a.c ? b.previewEventsUrl : "";
                a.Z = c.rv || a.Z;
                a.R = b.flashVersion || a.R;
                x(b.html5Features) && (a.$ = 0 <= Da(b.html5Features, "Modernizr.cssanimations"), a.fa = b.html5Features);
                a.tc =
                    b.translated_layout;
                a.a = c;
                a.J = c.ad_container_id || a.J;
                a.xa = c.as_kw || a.xa;
                a.ya = c.as_lat || a.ya;
                a.Ba = c.as_lng || a.Ba;
                a.P = vm(c.mtfRenderFloatInplace, a.P);
                a.ob = vm(c.generate_ad_slot, a.ob);
                a.ma = vm(c.tryToWriteHtmlInline, a.ma);
                a.ea = c.exit_suffix || a.ea;
                a.Ma = c.swiffy_url || a.Ma;
                a.ac = !!c.swiffy_url;
                var d;
                a: {
                    d = b.primaryFiles;
                    if (null != d)
                        for (var e = 0; e < d.length; ++e)
                            if ("PRE_LOADER" == d[e].renderAs) {
                                d = d[e].url;
                                break a
                            }
                    d = ""
                }
                a.Da = d || a.Da;
                a.X = "https" == ((b.renderingLibraryData.renderingLibrary || "").match(hg)[1] || null);
                d =
                    (d = b.renderingLibraryData.renderingLibrary.match(hg)[3] || null) ? decodeURI(d) : d;
                a.T = {
                    Cb: "http://" + d,
                    Db: "https://" + d
                };
                D(E(b.dynamicData)) || (a.g = b.dynamicData.replace(/\\"/g, '"'), a.g = a.g.replace(/\\\\/g, "\\"), a.g = a.g.replace(/\\\'/g, "'"), a.g = a.g.replace(/:\/\/s(0|1)\.2mdn\.net/g, "://" + d));
                d = new Jd(a.c);
                if (null != b.thirdPartyUrls)
                    for (var e = b.thirdPartyUrls, f = 0; f < e.length; ++f) {
                        var h = Yg(e[f].type);
                        null != h && (h in a.m || (a.m[h] = []), a.m[h].push(new wm(e[f].url, 0, d, "true" == e[f].scrub)))
                    }
                a.ca = Cm(b.eventTrackingBaseUrl,
                    "met") || a.ca;
                a.la = Cm(b.customEventTrackingBaseUrl, "stragg") || a.la;
                a.v = b.clickUrl || a.v;
                e = parseInt(c.clickN, 10);
                a.M = isNaN(e) ? a.M : e;
                a.ga = b.impressionUrl || a.ga;
                a.Ca = c.mtfIFPath || a.Ca;
                a.K = ym(b) || a.K;
                a.tc || (a.V = new Ef(d, b.activeViewUrlPrefix || b.clickString, b.activeViewMetadata));
                a.Ea = Dm(a)
            }
        },
        Dm = function(a) {
            if (!a.g) return null;
            try {
                var b = ph(a.g),
                    c;
                var d, e = null != b ? b.layout : null;
                d = null != e && y(e) ? e : null;
                null != d && "Custom" != d ? a.a.INTEGRATION_TEST ? c = d : (b = "://tpc.googlesyndication.com/pagead/gadgets/dynamic_in_page_V1/" +
                    d + ".html", c = a.X ? "https" + b : "http" + b) : c = null;
                return c
            } catch (f) {}
            return null
        },
        Cm = function(a, b) {
            if (D(E(a))) return "";
            var c = new Am(a),
                d;
            d = c.a[3];
            if (-1 == d) return a;
            a: {
                for (var e = 4; e < c.a.length; ++e)
                    if (-1 != c.a[e]) {
                        c = c.a[e];
                        break a
                    }
                c = -1
            }
            e = -1 == c ? a.substring(d) : a.substring(d, c);
            if (-1 == e.toLowerCase().indexOf(";" + b.toLowerCase() + "=")) e += (";" == e.charAt(e.length - 1) ? "" : ";") + b + "=1;";
            else var f = e.toLowerCase().indexOf(";" + b.toLowerCase() + "="),
                h = e.indexOf("=", f),
                k = e.indexOf(";", f + 1),
                e = e.replace(e.substring(f, h + 1) + (-1 ==
                    k ? e.substring(h + 1) : e.substring(h + 1, k)), ";" + b + "=1");
            return a.substring(0, d) + e + (-1 == c ? "" : a.substring(c))
        };
    Bm.prototype.toString = function() {
        return "Creative_" + this.o
    };
    var wk = function(a) {
            var b = {},
                c;
            for (c in a.a) c in Kj || c in xb || (b[c] = a.a[c]);
            return b
        },
        rk = function(a) {
            return a.X ? a.T.Db : a.T.Cb
        },
        lh = function(a, b) {
            if (q(b)) return b in a.m ? La(a.m[b]) : [];
            b = [];
            for (var c in a.m) b = Ka(b, a.m[c]);
            return b
        },
        Fm = function(a, b) {
            "HTML5" == b.g && (a.fd = !0);
            var c = b.c ? b.c.j : null;
            c && (a.Ua[c] = b);
            a.j.push(b)
        },
        kh = function(a, b) {
            var c = [];
            F(a.j, function(a) {
                a.g == b && c.push(a)
            });
            return c
        },
        Im = function(a, b, c) {
            var d = Gm(a, b);
            d && (d.reportingId = c, a.qc[b] = d, Hm(a, d))
        },
        Km = function(a, b) {
            var c = a.da;
            Jm(a, "EXPAND_TIMER",
                b);
            a.da = c
        },
        Jm = function(a, b, c) {
            return (b = a.B[Lm(b, "Counter") || ""] || a.B[Lm(b, "Timer") || ""] || Gm(a, b)) ? (b.chargeable = c, a.da = !0) : !1
        },
        Hm = function(a, b) {
            if (b) {
                var c;
                (c = b.j ? Mm(a, b.name) : b.a ? Nm(a, b.a.tb, b.a.vc) : Lm(b.name, b.type)) && (a.B[c] = b)
            }
        },
        Om = function(a, b) {
            var c = b.url,
                c = c.replace(/%eaid!/g, a.a.aid || "").replace(/%ebuy!/g, a.a.buy || "").replace(/%epid!/g, a.a.pid || "").replace(/%esid!/g, a.a.sid || "").replace(/%erid!/g, a.a.rid || "").replace(/%ecid!/g, a.a.cid || "").replace(/%ekid!/g, a.a.kid || "").replace(/%eadv!/g,
                    a.a.adv || "").replace(/%erv!/g, a.Z).replace(/%s/g, a.a.sn || "").replace(/%g/g, a.a.geo || "").replace(/%n/g, a.a.randomNumber || ""),
                d;
            for (d in a.wa) var e = a.wa[d],
                f = "(%pKEY=!;|%%PATTERN:KEY%%)".replace(/KEY/g, d),
                c = c.replace(new RegExp(f, "g"), e);
            b.url = c;
            c = a.ea;
            d = E(c);
            if (e = !D(d)) {
                e = b.url;
                a: {
                    for (var f = e.search(lg), h = 0, k = d.length; 0 <= (h = e.indexOf(d, h)) && h < f;) {
                        var l = e.charCodeAt(h - 1);
                        if (38 == l || 63 == l)
                            if (l = e.charCodeAt(h + k), !l || 61 == l || 38 == l || 35 == l) {
                                d = h;
                                break a
                            }
                        h += k + 1
                    }
                    d = -1
                }
                e = !(0 <= d)
            }
            e && (b.url = kg(b.url, c));
            a.F[b.name] =
                b;
            Hm(a, b)
        },
        Pm = function(a, b) {
            a.lb[b.name] = b;
            Hm(a, b)
        },
        Qm = function(a, b) {
            a.rc[b.name] = b;
            Hm(a, b)
        },
        Mm = function(a, b) {
            return (a = Gm(a, b)) ? [b, escape(""), escape(""), a.type].join(":") : null
        },
        Lm = function(a, b) {
            return ["CUSTOM_EVENT", escape(a), escape(""), b].join(":")
        },
        Nm = function(a, b, c) {
            return (a = Gm(a, b)) && [b, escape(""), escape(c), a.type].join(":")
        },
        Sm = function(a, b) {
            if (!b) return null;
            if ("CUSTOM_EVENT" == b.type || b.videoName) {
                if ("CUSTOM_EVENT" == b.type && !b.videoName) {
                    var c = b.trigger;
                    a.na[c] ? (a = a.na[c], b = b.name, a = a[b] && a[b].reportingId ||
                        null) : a = null;
                    return a
                }
                if ("CUSTOM_EVENT" != b.type && b.videoName) {
                    a: switch (c = b.videoName, b = Gm(a, b.type), b.type) {
                        case "Timer":
                            a = Rm(a.rc, b, c);
                            a = null != a ? a.reportingId : null;
                            break a;
                        case "Counter":
                            a = Rm(a.lb, b, c);
                            a = null != a ? a.reportingId : null;
                            break a;
                        default:
                            a = null
                    }
                    return a
                }
            } else return (a = Gm(a, b.type)) ? a.reportingId : null;
            return null
        },
        Gm = function(a, b) {
            return a.qc[b] || (a.qc[b] = Kb(b))
        },
        Rm = function(a, b, c) {
            for (var d in a) {
                var e = a[d];
                if (e.a && e.a.vc == c && e.a.tb == b.name) return e
            }
            return null
        },
        Tm = function(a, b) {
            a.W.push(b);
            a.U = null
        },
        mk = function(a) {
            if (!a.U) {
                a.U = {};
                for (var b = 0; b < a.W.length; b++) {
                    var c = a.W[b],
                        d = c.name.toLowerCase();
                    if (c.a) {
                        if (!c.a.a) {
                            var c = c.a,
                                e = c.g.toLowerCase(),
                                f = a.U[e];
                            f || (f = {}, a.U[e] = f);
                            e = f[c.c];
                            e || (e = {}, f[c.c] = e);
                            e[c.j] = d
                        }
                    } else a.U[d] || (a.U[d] = {})
                }
            }
            return a.U
        };
    var Um = function(a, b, c) {
            this.o = a;
            this.j = b.g;
            this.G = b.a;
            this.c = b.c;
            this.g = c.g;
            this.m = c.a;
            this.a = c.c
        },
        Wm = function(a) {
            return new Um(a.name, new Vm(a.vfp_low, a.vfp_mid, a.vfp_high), new Vm(a.pfp_low, a.pfp_mid, a.pfp_high))
        },
        Vm = function(a, b, c) {
            this.g = a || null;
            this.a = b || null;
            this.c = c || null
        };
    var Xm = function() {};
    Xm.prototype.a = function(a, b, c) {
        var d = null;
        "CREATIVE_PARAMETER_LAYOUT_CONFIG" in a && (d = a.CREATIVE_PARAMETER_LAYOUT_CONFIG);
        for (var e = [], f = a.cid || "", h = 0; h < c.length; h++) {
            var k;
            k = c[h];
            var l = a,
                m = d,
                p = new Bb(f + "_" + h, k.type, k.renderAs, new H(parseInt(k.width, 10) || 0, parseInt(k.height, 10) || 0), k.url);
            p.F = parseInt(k.zIndex, 10);
            p.U = k.customCss;
            p.H = k.location || p.H;
            p.layoutsConfig = m || p.layoutsConfig;
            if (m = k.flashProperties) p.G = new nb(parseInt(m.actionScriptVersion, 10), pb(m.wmode) || "transparent");
            if (m = k.htmlProperties) p.j =
                new rb(m.transparent, m.studioSdkVersion);
            if (m = k.floatingDisplayProperties) {
                var w = new ub(m.top, m.left);
                p.B = ib(m.label);
                p.c = new qb(w, parseInt(m.startTime, 10), parseInt(m.duration, 10), p.B)
            }
            if (m = k.expandingDisplayProperties) {
                var w = new Ta(parseInt(m.collapsedRectLeft, 10), parseInt(m.collapsedRectTop, 10), parseInt(m.collapsedRectWidth, 10), parseInt(m.collapsedRectHeight, 10)),
                    sa = lb(m.expansionMode) || "normal";
                Gb(w.left) && Gb(w.top) && Gb(w.width) && Gb(w.height) && (p.a = new mb(w, sa, parseInt(m.pushdownAnimationTime,
                    10)))
            }
            k.imageGalleryProperties && (p.K = new sb);
            p.o = new wb;
            p.o.a = k.hideFlashObjects;
            p.o.c = !0;
            null != l && Fb(p, l);
            Db(p);
            k = p;
            null != b && !D(E(b)) && Eb(k) && (k.v = b);
            e.push(k)
        }
        return e
    };
    var Zm = function(a, b) {
            var c = new Bm;
            Em(c, b);
            c.nb = !D(E(b.dynamicData));
            c.mb = !D(E(b.impressionUrl));
            c.va = b.creativeParameters.CREATIVE_PARAMETER_CUSTOM_SCRIPT_URL;
            for (var d = 0; d < b.standardEvents.length; d++) {
                var e = b.standardEvents[d];
                Im(c, e.name, e.reportingId)
            }
            for (d = 0; d < b.exitEvents.length; d++)
                if (e = b.exitEvents[d], !e.backUpExit) {
                    var f = new Jj(e.name, e.reportingId, e.destinationUrl);
                    f.g = e.targetWindow;
                    f.c = e.windowProperties;
                    Om(c, f)
                }
                /dfa7banner/.test(b.renderingLibraryData.renderingLibrary) && !D(b.clickUrl) &&
                Wa(c.F, function(a) {
                    a.url = mm(b.clickUrl, a.url, null)
                });
            for (d = 0; d < b.timerEvents.length; d++) e = b.timerEvents[d], f = qm(e.name), e = new nm(e.name, e.reportingId, "Timer", f), Qm(c, e);
            for (d = 0; d < b.counterEvents.length; d++) e = b.counterEvents[d], f = qm(e.name), e = new nm(e.name, e.reportingId, "Counter", f), Pm(c, e);
            e = b.primaryFiles;
            f = {};
            for (d = 0; d < e.length; d++) f[e[d].type] = !0;
            f = Ym({
                Bb: !!f.FLASH,
                flashVersion: c.R,
                Vb: !!f.HTML5,
                html5Features: c.fa,
                gb: c.$
            }, "true" == b.creativeParameters.preferFlash);
            e = !1;
            a = a.a(b.creativeParameters,
                c.Ea, b.primaryFiles);
            for (d = 0; d < a.length; d++) {
                var h = a[d];
                f == h.g && Fm(c, h);
                null != h.K && (e = !0)
            }
            a = c.X;
            var d = e ? rk(c) : null,
                e = (e = b.creativeParameters.CREATIVE_PARAMETER_ASSETS_DATA) ? ph(e.replace(/\\"/g, '"')) : {},
                k;
            for (k in e) Tm(c, new rm(k, e[k], a, d));
            k = (d = b.creativeParameters.CREATIVE_PARAMETER_VIDEO_ASSETS_DATA) ? ph(d.replace(/\\"/g, '"')) : [];
            for (d = 0; d < k.length; ++d) e = k[d], f = new rm(e.name, e.progressiveUrl, a), sm(f, e.streamingUrl, e.transcodeInformation), Tm(c, f);
            k = (d = b.creativeParameters.CREATIVE_PARAMETER_VIDEO_DATA) ?
                ph(d.replace(/\\"/g, '"')) : [];
            for (d = 0; d < k.length; ++d) c.uc.push(Wm(k[d]));
            return c
        },
        Ym = function(a, b) {
            var c = Zf(a.flashVersion),
                d = $f(a.html5Features, a.gb);
            return !a.Vb || !d || b && a.Bb && c ? a.Bb && c ? "FLASH" : null : "HTML5"
        };
    var $m = function() {};
    C($m, Xm);
    var an = function(a) {
        return a ? "desktop" == a ? "desktop" : "mobile" : !lm() && (I("iPod") || I("iPhone") || I("Android") || I("IEMobile")) || lm() ? "mobile" : "desktop"
    };
    $m.prototype.a = function(a, b, c) {
        var d = [],
            e = an(a.device_override);
        F(c, function(a) {
            "BACKDROP" != a.renderAs ? d.push(a) : Wa("desktop" == e ? jb : kb, function(b) {
                var c = {},
                    f;
                for (f in a) c[f] = a[f];
                f = {};
                f.ag = e;
                f.bg = b;
                c.Yf = f;
                d.push(c)
            })
        });
        return $m.C.a.call(this, a, b, d)
    };
    var cn = function(a) {
            this.F = a.eventReportingUrl || "";
            this.W = a.clickUrl || "";
            this.B = a.clickUrlTimesToEscape || "1";
            this.a = a.clickEventTagUrl || "";
            this.j = a.impressionUrl || "";
            this.J = a.geoData || "";
            this.T = a.siteName || "";
            this.X = a.siteId || "";
            this.o = a.adId || "";
            this.A = a.buyId || "";
            this.creativeId = a.creativeId || "";
            this.M = a.placementId || "";
            this.v = a.advertiserId || "";
            this.K = a.keyValueOrdinal || "";
            this.P = a.renderingVersion || "";
            this.R = a.renderingId || "";
            this.randomNumber = a.randomNumber || "";
            this.V = a.stringReportingUrl || "";
            this.g = a.bookingTimeMetaData || {};
            this.m = new bn(a.tag || {});
            this.ca = a.urlToGetKeywordsFor || "";
            this.H = a.exitSuffix || "";
            this.Z = a.dynamicData || "";
            this.U = a.exitUrlPatternMacroValues;
            this.c = a.placementDimensions || {
                w: "0",
                h: "0"
            };
            this.$ = a.swiffyRuntimeUrl || "";
            this.G = a.activeViewClkStr || "";
            this.da = a.activeViewUrlPrefix || ""
        },
        bn = function(a) {
            this.g = a.adContainerElementId;
            this.F = a.hideObjects;
            this.o = a.preferFlash;
            this.j = a.adSenseKeywords;
            this.m = a.adSenseLatitude;
            this.G = a.adSenseLongitude;
            this.v = a.publisherSideFilePath;
            this.c = a.runtimeMetaData || {};
            this.expansionMode = lb(a.expansionMode);
            this.A = !!a.renderFloatInplace;
            this.B = !!a.tryToWriteHtmlInline;
            this.a = {};
            this.a.top = new dn(t("multiFloat.top.duration", a), t("multiFloat.top.wmode", a), t("multiFloat.top.position", a) ? t("multiFloat.top.position", a).split(",") : []);
            this.a.right = new dn(t("multiFloat.right.duration", a), t("multiFloat.right.wmode", a), t("multiFloat.right.position", a) ? t("multiFloat.right.position", a).split(",") : []);
            this.a.bottom = new dn(t("multiFloat.bottom.duration",
                a), t("multiFloat.bottom.wmode", a), t("multiFloat.bottom.position", a) ? t("multiFloat.bottom.position", a).split(",") : []);
            this.a.left = new dn(t("multiFloat.left.duration", a), t("multiFloat.left.wmode", a), t("multiFloat.left.position", a) ? t("multiFloat.left.position", a).split(",") : [])
        },
        dn = function(a, b, c) {
            this.top = 1 < c.length ? c[0] : "";
            this.left = 1 < c.length ? c[1] : ""
        };
    var en = function(a) {
        this.id = a.id;
        this.K = a.uniqueId;
        this.a = new cn(a.adServerData || {});
        this.m = a.isPreviewEnvironment;
        this.c = a.thirdPartyImpressionUrls || [];
        this.G = a.thirdPartyArtworkImpressionUrl;
        this.v = a.hasFlashAsset;
        this.A = a.hasHtmlAsset;
        this.gb = a.requiresCss3Animations;
        this.flashVersion = a.flashVersion;
        this.U = a.renderingLibrary || "";
        this.B = a.httpMediaServer || "";
        this.F = a.httpsMediaServer || "";
        this.g = a.dimensions;
        this.H = a.preloaderUrl;
        this.j = a.html5FeatureChecks;
        var b;
        if (b = a.backupImage) {
            b = a.backupImage;
            var c = this.m,
                d = this.a.a,
                e = this.a.j;
            if (null != b) {
                var f = new xm;
                f.j = b.exitUrl || f.j;
                f.target = b.target || f.target;
                f.a = b.imageUrl || f.a;
                f.width = b.width || f.width;
                f.height = b.height || f.height;
                f.g = b.backupDisplayActivityUrl || f.g;
                f.c = b.thirdPartyBackupImpressionUrl || f.c;
                f.G = e;
                D(E(d)) || (f.m = [new wm(d, 0, new Jd(c))]);
                b = f
            } else b = null
        }
        this.o = b || null;
        this.J = a.hasSwiffyHtmlAsset
    };
    var gn = function(a, b) {
            var c = new Bm,
                d = new en(a.creativeDto);
            if (!c.Fa) {
                c.Fa = !0;
                var e = d.a,
                    f = e.m;
                c.G = d.id || c.G;
                c.o = d.K || c.G || c.o;
                c.A = d.g ? new H(parseInt(d.g.width, 10) || c.A.width, parseInt(d.g.height, 10) || c.A.height) : c.A;
                c.g = e.Z || c.g;
                c.ac = d.J || c.ac;
                c.H = e.c ? new H(parseInt(e.c.w, 10) || c.H.width, parseInt(e.c.h, 10) || c.H.height) : c.H;
                c.c = d.m || c.c;
                c.Z = e.P || c.Z;
                c.R = d.flashVersion || c.R;
                c.fa = d.j || c.fa;
                c.$ = d.gb || c.$;
                c.oa = e.ca || c.oa;
                for (var h in e.g) c.a[h] = e.g[h];
                c.a.sn = e.T;
                c.a.sid = e.X;
                c.a.aid = e.o;
                c.a.cid = e.creativeId;
                c.a.buy = e.A;
                c.a.pid = e.M;
                c.a.adv = e.v;
                c.a.kid = e.K;
                c.a.rid = e.R;
                c.a.geo = e.J;
                c.a.randomNumber = e.randomNumber;
                for (var k in f.c) c.a[k] = f.c[k];
                c.J = f.g || c.J;
                c.xa = f.j || c.xa;
                c.ya = f.m || c.ya;
                c.Ba = f.G || c.Ba;
                c.P = f.A || c.P;
                c.ma = f.B || c.ma;
                c.Da = d.H || c.Da;
                c.X = "https" == (d.U.match(hg)[1] || null);
                c.T = {
                    Cb: d.B || c.T.Cb,
                    Db: d.F || c.T.Db
                };
                h = new Jd(c.c);
                D(E(e.a)) || (c.m.CLICK = [new wm(e.a, 0, h)]);
                if (x(d.c) && 0 < d.c.length)
                    for (c.m.IMPRESSION_IMG = [], k = 0; k < d.c.length; ++k) c.m.IMPRESSION_IMG.push(new wm(d.c[k], 0, h));
                D(E(d.G)) || (c.m.ARTWORK_IMPRESSION = [new wm(d.G, 0, h)]);
                c.ca = e.F || c.ca;
                c.la = e.V || c.la;
                c.v = e.W || c.v;
                k = parseInt(e.B, 10);
                c.M = isNaN(k) ? c.M : k;
                c.ga = e.j || c.ga;
                c.Ma = e.$ || c.Ma;
                c.ea = e.H || c.ea;
                c.wa = e.U || c.wa;
                c.Ca = f.v || c.Ca;
                c.K = d.o || c.K;
                c.V = new Ef(h, e.da || e.G);
                c.Ea = Dm(c)
            }
            c.va = b.customScriptUrl;
            c.nb = b.isDynamic;
            c.mb = b.delayedImpression;
            var e = b.standardEventIds,
                l;
            for (l in e) Im(c, l, e[l]);
            e = b.exitEvents;
            for (l = 0; l < e.length; l++) f = e[l], h = new Jj(f.name, f.reportingId, f.url), h.g = f.targetWindow, h.c = f.windowProperties, Om(c, h);
            f = b.timerEvents;
            for (l = 0; l < f.length; l++) e =
                f[l], Qm(c, fn(e, "Timer"));
            f = b.counterEvents;
            for (l = 0; l < f.length; l++) e = f[l], Pm(c, fn(e, "Counter"));
            e = c.X;
            f = b.childFiles;
            for (l = 0; l < f.length; l++) Tm(c, tm(f[l], e));
            f = b.videoFiles;
            for (l = 0; l < f.length; l++) Tm(c, tm(f[l], e));
            e = b.videoEntries;
            for (l = 0; l < e.length; l++) f = e[l], c.uc.push(new Um(f.reportingIdentifier, new Vm(f.lowBandwidthVideo, f.mediumBandwidthVideo, f.highBandwidthVideo), new Vm(f.lowBandwidthFallbackVideo, f.mediumBandwidthFallbackVideo, f.highBandwidthFallbackVideo)));
            l = d.v;
            e = d.A;
            h = d.j;
            k = d.gb;
            f = d.a.m.o;
            d = Zf(d.flashVersion);
            h = $f(h, k);
            d = !e || !h || f && l && d ? l && d ? "FLASH" : null : "HTML5";
            b = b.primaryAssets;
            l = 0;
            e = c.Ea;
            for (f = 0; f < b.length; ++f) {
                b[f].floatingDisplayTypeData && !D(E(b[f].floatingDisplayTypeData.alignment)) && l++;
                var m = b[f];
                k = a.creativeDto.adServerData.tag;
                h = new Bb(m.id, m.artworkType, m.displayType, new H(parseInt(m.width, 10) || 0, parseInt(m.height, 10) || 0), (rk(c) || "") + m.servingPath);
                h.F = m.zIndex;
                h.U = m.customCss;
                h.H = m.location || h.H;
                h.layoutsConfig = m.layoutsConfig;
                h.R = m.layoutsApi;
                var p = m.flashArtworkTypeData;
                p && (h.G = new nb(p.actionscriptVersion, p.wmode));
                if (p = m.htmlArtworkTypeData) h.j = new rb(p.isTransparent, p.sdkVersion);
                if (p = m.floatingDisplayTypeData) {
                    var w = p.position,
                        w = new ub(w.top + w.topUnit, w.left + w.leftUnit);
                    h.B = ib(p.alignment);
                    h.c = new qb(w, p.startTime, p.endTime, h.B)
                }
                if (p = m.expandingDisplayTypeData) w = p.collapsedRect, h.a = new mb(new Ta(w.left, w.top, w.width, w.height), p.isPushdown ? "push_down" : lb(p.expansionMode) || "normal", p.pushdownAnimationTime);
                m.imageGalleryTypeData && (h.K = new sb);
                m = m.pageSettings;
                p = new wb;
                m && (p.a = m.hideObjects || !1, p.c = m.updateZIndex || !1);
                h.o = p;
                if (null == k) k = {};
                else {
                    m = {};
                    p = void 0;
                    for (p in Cb) w = t(p, k), null === w || (m[Cb[p]] = w + "");
                    k = m
                }
                Fb(h, k);
                Db(h);
                null != e && !D(E(e)) && Eb(h) && (h.v = e);
                h.g == d && Fm(c, h)
            }
            return c
        },
        fn = function(a, b) {
            var c;
            a.videoData && (c = a.videoData, c = new om(c.associatedVideoEntryReportingIdentifier, c.associatedStandardVideoEvent));
            return new nm(a.name, a.reportingId, b, c)
        };
    var hn = function() {},
        hh = function() {
            var a = jn();
            return new O(function(a) {
                var b = [],
                    d = t("studioV2.creatives") || {},
                    e;
                for (e in d) {
                    var f = d[e],
                        h = f.creativeDefinition;
                    if (h)
                        for (f = f.adResponses; 0 < f.length;) {
                            var k = f.shift(),
                                l = k.creativeDto;
                            if (l.rendererName == Zg && "200_159" == l.templateVersion) b.push(gn(k, h));
                            else {
                                f.unshift(k);
                                break
                            }
                        }
                }
                d = [];
                e = t("window.dclkStudioV3.creatives") || [];
                for (h = e.length - 1; 0 <= h; --h) {
                    f = e[h];
                    a: {
                        if (f && "true" !== f.creativeParameters.bow_bd_data)
                            for (k = 0; k < f.primaryFiles.length; ++k)
                                if ("BACKDROP" ==
                                    f.primaryFiles[k].renderAs) {
                                    k = new $m;
                                    break a
                                }
                        k = new Xm
                    }
                    f = Zm(k, f);
                    a: {
                        for (var k = f, l = k.j, m = 0; m < l.length; m++) {
                            var p = l[m];
                            if (Eb(p) && !ch.c(p)) {
                                k = !1;
                                break a
                            }
                        }
                        k = "200_159" == k.gd
                    }
                    k && (Array.prototype.splice.call(e, h, 1), d.push(f))
                }
                a(b.concat(d))
            }, a)
        };
    var kn = function(a, b) {
        N.call(this, a);
        this.c = b
    };
    C(kn, N);
    var ln = "EXPAND EXPAND_REQUEST EXPAND_FINISH COLLAPSE COLLAPSE_REQUEST COLLAPSE_FINISH EXPAND_FULL_SCREEN COLLAPSE_FULL_SCREEN SHOW HIDE".split(" ");
    var X = function(a, b) {
        this.c = b;
        this.J = new Lg(this);
        this.J.I(this.c, ln, this.ea);
        this.a = a;
        this.F = [];
        this.B = [];
        this.o = [];
        this.g = [];
        this.A = [];
        this.v = [];
        this.m = [];
        this.j = []
    };
    C(X, L);
    X.prototype.D = function() {
        this.J.dispose();
        this.j = this.m = this.g = this.v = this.A = this.o = this.B = this.F = null;
        X.C.D.call(this)
    };
    X.prototype.ea = function(a) {
        if (a.c == this.a) {
            var b = null;
            switch (a.type) {
                case "SHOW":
                    b = this.F;
                    break;
                case "HIDE":
                    b = this.B;
                    break;
                case "COLLAPSE_REQUEST":
                    b = this.m;
                    break;
                case "COLLAPSE_FINISH":
                    b = this.j;
                    break;
                case "COLLAPSE":
                    b = this.g;
                    break;
                case "EXPAND":
                    b = this.o;
                    break;
                case "EXPAND_REQUEST":
                    b = this.A;
                    break;
                case "EXPAND_FINISH":
                    b = this.v
            }
            b && mn(this, b)
        }
    };
    var mn = function(a, b) {
            F(b, function(a) {
                a(this)
            }, a)
        },
        nn = function(a) {
            return a.c.c[a.a] || null
        };
    X.prototype.Ca = function() {
        return this.a.m
    };
    X.prototype.getType = X.prototype.Ca;
    X.prototype.za = function() {
        return this.a.id
    };
    X.prototype.getId = X.prototype.za;
    X.prototype.ca = function() {
        var a = nn(this);
        return a && (a = a.S()) ? (a = new G(a.offsetLeft, a.offsetTop), {
            x: a.N,
            y: a.O
        }) : null
    };
    X.prototype.getPosition = X.prototype.ca;
    X.prototype.Fa = function(a, b) {
        var c = nn(this);
        c && jd(c.S(), a, b)
    };
    X.prototype.setPosition = X.prototype.Fa;
    X.prototype.Ma = function(a) {
        var b = nn(this);
        b && dd(b.S(), a)
    };
    X.prototype.setStyle = X.prototype.Ma;
    X.prototype.$ = function() {
        var a = nn(this);
        return a && (a = a.S()) ? (a = ld(a), {
            x: a.N,
            y: a.O
        }) : null
    };
    X.prototype.getPagePosition = X.prototype.$;
    X.prototype.H = function() {
        return {
            width: this.a.width,
            height: this.a.height
        }
    };
    X.prototype.getDimension = X.prototype.H;
    X.prototype.hb = function(a, b) {
        var c = nn(this);
        c && c.hb(a, b)
    };
    X.prototype.setDimension = X.prototype.hb;
    X.prototype.W = function() {
        var a = this.a.a && this.a.a.a;
        return a ? {
            width: a.width,
            height: a.height
        } : this.H()
    };
    X.prototype.getCollapsedDimension = X.prototype.W;
    X.prototype.Ea = function(a, b, c, d) {
        var e = nn(this);
        e && e.Fb(a, b, c, d)
    };
    X.prototype.setClip = X.prototype.Ea;
    X.prototype.Z = function() {
        var a = nn(this);
        return a ? a.S() : null
    };
    X.prototype.getContainerElement = X.prototype.Z;
    X.prototype.Ba = function() {
        var a = nn(this);
        return a ? a.Hb() : null
    };
    X.prototype.getAssetElement = X.prototype.Ba;
    X.prototype.da = function(a) {
        this.F.push(a)
    };
    X.prototype.addShowCallback = X.prototype.da;
    X.prototype.wa = function(a) {
        Ja(this.F, a)
    };
    X.prototype.removeShowCallback = X.prototype.wa;
    X.prototype.V = function(a) {
        this.B.push(a)
    };
    X.prototype.addHideCallback = X.prototype.V;
    X.prototype.va = function(a) {
        Ja(this.B, a)
    };
    X.prototype.removeHideCallback = X.prototype.va;
    X.prototype.P = function(a) {
        this.o.push(a)
    };
    X.prototype.addExpandCallback = X.prototype.P;
    X.prototype.la = function(a) {
        Ja(this.o, a)
    };
    X.prototype.removeExpandCallback = X.prototype.la;
    X.prototype.T = function(a) {
        this.A.push(a)
    };
    X.prototype.addExpandRequestCallback = X.prototype.T;
    X.prototype.oa = function(a) {
        Ja(this.A, a)
    };
    X.prototype.removeExpandRequestCallback = X.prototype.oa;
    X.prototype.X = function(a) {
        this.v.push(a)
    };
    X.prototype.addExpandFinishCallback = X.prototype.X;
    X.prototype.na = function(a) {
        Ja(this.v, a)
    };
    X.prototype.removeExpandFinishCallback = X.prototype.na;
    X.prototype.K = function(a) {
        this.g.push(a)
    };
    X.prototype.addCollapseCallback = X.prototype.K;
    X.prototype.fa = function(a) {
        Ja(this.g, a)
    };
    X.prototype.removeCollapseCallback = X.prototype.fa;
    X.prototype.R = function(a) {
        this.m.push(a)
    };
    X.prototype.addCollapseRequestCallback = X.prototype.R;
    X.prototype.ma = function(a) {
        Ja(this.m, a)
    };
    X.prototype.removeCollapseRequestCallback = X.prototype.ma;
    X.prototype.M = function(a) {
        this.j.push(a)
    };
    X.prototype.addCollapseFinishCallback = X.prototype.M;
    X.prototype.ga = function(a) {
        Ja(this.j, a)
    };
    X.prototype.removeCollapseFinishCallback = X.prototype.ga;
    X.prototype.Ua = function() {
        on(this.c, this.a)
    };
    X.prototype.show = X.prototype.Ua;
    X.prototype.Da = function() {
        this.c.A(this.a)
    };
    X.prototype.hide = X.prototype.Da;
    X.prototype.ya = function() {
        pn(this.c, this.a)
    };
    X.prototype.expand = X.prototype.ya;
    X.prototype.xa = function() {
        qn(this.c, this.a)
    };
    X.prototype.collapse = X.prototype.xa;
    var rn = function(a, b) {
        this.a = a;
        this.c = b
    };
    C(rn, L);
    rn.prototype.j = function() {
        return this.a.name
    };
    rn.prototype.getName = rn.prototype.j;
    rn.prototype.m = function() {
        var a = this.a.url;
        return (/^https?/.test(a) ? "" : this.c) + a
    };
    rn.prototype.getUrl = rn.prototype.m;
    rn.prototype.o = function() {
        return this.a.g
    };
    rn.prototype.isVideo = rn.prototype.o;
    rn.prototype.g = function() {
        return this.a.c
    };
    rn.prototype.getStreamingUrl = rn.prototype.g;
    var sn = function(a, b) {
        this.a = a;
        this.g = b
    };
    sn.prototype.j = function() {
        return this.a.name
    };
    sn.prototype.getName = sn.prototype.j;
    sn.prototype.m = function() {
        return this.a.url
    };
    sn.prototype.getUrl = sn.prototype.m;
    sn.prototype.c = function(a, b) {
        this.g.Yb(new Ri("logExitFlushEventsOpenPopup", this.a.name, a || null, b || null, !0))
    };
    sn.prototype.fireExit = sn.prototype.c;
    var Y = function(a, b) {
        L.call(this);
        this.a = a;
        this.P = b;
        this.c = tn(a.j, b);
        this.m = Oa(this.c, function(a) {
            return a.za()
        });
        this.g = un(a.W, rk(a) || "");
        this.j = vn(a.F, b);
        this.AssetTypes = wn;
        xn(this)
    };
    C(Y, L);
    var tn = function(a, b) {
            return Fa(a, function(a) {
                return new X(a, b)
            })
        },
        un = function(a, b) {
            return Fa(a, function(a) {
                return new rn(a, b)
            })
        },
        vn = function(a, b) {
            return Fa(Za(a), function(a) {
                return new sn(a, b)
            })
        },
        xn = function(a) {
            var b = t("studioV2.api.creatives") || [];
            r("studioV2.api.creatives", b, void 0);
            b.push(a)
        };
    Y.prototype.D = function() {
        var a = t("studioV2.api.creatives");
        a && x(a) && Ja(a, this);
        Od(this.c, this.g, this.j);
        Y.C.D.call(this)
    };
    Y.prototype.v = function() {
        return "1.0"
    };
    Y.prototype.getApiVersion = Y.prototype.v;
    Y.prototype.K = function() {
        return this.a.o
    };
    Y.prototype.getCreativeId = Y.prototype.K;
    Y.prototype.W = function() {
        return this.a.a.sid || ""
    };
    Y.prototype.getSiteId = Y.prototype.W;
    Y.prototype.Z = function() {
        return this.a.a.sn || ""
    };
    Y.prototype.getSiteName = Y.prototype.Z;
    Y.prototype.X = function() {
        return this.a.a.aid || ""
    };
    Y.prototype.getAdId = Y.prototype.X;
    Y.prototype.V = function() {
        return this.a.a.buy || ""
    };
    Y.prototype.getBuyId = Y.prototype.V;
    Y.prototype.o = function() {
        return this.a.a.cid || ""
    };
    Y.prototype.getAdserverCreativeId = Y.prototype.o;
    Y.prototype.da = function() {
        return this.a.a.pid || ""
    };
    Y.prototype.getPlacementId = Y.prototype.da;
    Y.prototype.T = function() {
        return this.a.a.adv || ""
    };
    Y.prototype.getAdvertiserId = Y.prototype.T;
    Y.prototype.F = function() {
        return this.c
    };
    Y.prototype.getAssets = Y.prototype.F;
    Y.prototype.J = function() {
        return this.g
    };
    Y.prototype.getChildAssets = Y.prototype.J;
    Y.prototype.A = function(a) {
        return this.c[a] || null
    };
    Y.prototype.getAssetAt = Y.prototype.A;
    Y.prototype.B = function(a) {
        return this.m[a] || null
    };
    Y.prototype.getAssetById = Y.prototype.B;
    Y.prototype.R = function(a) {
        return Ia(this.c, function(b) {
            return b.a.m == a
        })
    };
    Y.prototype.getFirstAssetByType = Y.prototype.R;
    Y.prototype.H = function(a) {
        return Ea(this.c, function(b) {
            return b.a.m == a
        })
    };
    Y.prototype.getAssetsByType = Y.prototype.H;
    Y.prototype.M = function() {
        return this.j
    };
    Y.prototype.getExits = Y.prototype.M;
    Y.prototype.$ = function() {
        this.P.dispose()
    };
    Y.prototype.unload = Y.prototype.$;
    var wn = {
        INPAGE: "BANNER",
        EXPANDING: "EXPANDABLE",
        FLOAT: "FLOATING",
        OVERLAY: "OVERLAY"
    };
    var yn = function(a) {
        N.call(this, a)
    };
    C(yn, N);
    r("studio.sdk.logger", null, void 0);
    var Z = function() {
        Q.call(this);
        this.g = null;
        this.j = {};
        this.a = {};
        this.a.companions = "";
        this.a.desiredBitrate = 256;
        this.a.duration = 15;
        this.a.remainingTime = 15;
        this.a.expanded = !1;
        this.a.height = 0;
        this.a.icons = "";
        this.a.linear = !1;
        this.a.skippableState = !1;
        this.a.viewMode = "normal";
        this.a.width = 0;
        this.a.volume = 0;
        this.c = null
    };
    C(Z, Q);
    Z.prototype.m = function() {
        this.a.expanded = !1
    };
    Z.prototype.collapseAd = Z.prototype.m;
    Z.prototype.J = function() {
        return this.a.linear
    };
    Z.prototype.getAdLinear = Z.prototype.J;
    Z.prototype.P = function() {
        return this.a.width
    };
    Z.prototype.getAdWidth = Z.prototype.P;
    Z.prototype.F = function() {
        return this.a.height
    };
    Z.prototype.getAdHeight = Z.prototype.F;
    Z.prototype.B = function() {
        return this.a.expanded
    };
    Z.prototype.getAdExpanded = Z.prototype.B;
    Z.prototype.M = function() {
        return this.a.skippableState
    };
    Z.prototype.getAdSkippableState = Z.prototype.M;
    Z.prototype.K = function() {
        return this.a.remainingTime
    };
    Z.prototype.getAdRemainingTime = Z.prototype.K;
    Z.prototype.ea = function(a) {
        this.a.remainingTime = a
    };
    Z.prototype.setAdRemainingTime = Z.prototype.ea;
    Z.prototype.A = function() {
        return this.a.duration
    };
    Z.prototype.getAdDuration = Z.prototype.A;
    Z.prototype.ca = function(a) {
        this.a.duration = a
    };
    Z.prototype.setAdDuration = Z.prototype.ca;
    Z.prototype.R = function() {
        return this.a.volume
    };
    Z.prototype.getAdVolume = Z.prototype.R;
    Z.prototype.fa = function(a) {
        this.a.volume = a;
        this.L(new yn("ChangeVolumeVpaidAd"))
    };
    Z.prototype.setAdVolume = Z.prototype.fa;
    Z.prototype.v = function() {
        return this.a.companions
    };
    Z.prototype.getAdCompanions = Z.prototype.v;
    Z.prototype.H = function() {
        return this.a.icons
    };
    Z.prototype.getAdIcons = Z.prototype.H;
    Z.prototype.X = function() {
        return "2.0"
    };
    Z.prototype.handshakeVersion = Z.prototype.X;
    Z.prototype.T = function(a, b, c, d, e, f) {
        this.a.width = a;
        this.a.height = b;
        this.a.viewMode = c;
        this.a.desiredBitrate = d;
        null != f && (this.g = f.slot);
        try {
            if (this.c = JSON.parse(e.AdParameters), null != this.c) {
                this.c.width = a + "";
                this.c.slotWidth = a + "";
                this.c.height = b + "";
                this.c.slotHeight = b + "";
                D(E(this.g.id)) && (this.g.id = "dclk_video_ad_:" + (aj.getInstance().a++).toString(36));
                this.c.creativeParameters.ad_container_id = this.g.id;
                if (null != this.c.primaryFiles)
                    for (c = 0; c < this.c.primaryFiles.length; c++) this.c.primaryFiles[c].height =
                        b + "", this.c.primaryFiles[c].width = a + "";
                if (null != this.c.ad_creative_def_urls) {
                    var h = this.c.ad_creative_def_urls[this.c.creativeParameters.adId];
                    h ? (h = h.replace("http:", ""), sf(yf(h), A(this.V, this))) : zn(this)
                } else zn(this)
            }
        } catch (k) {}
    };
    Z.prototype.initAd = Z.prototype.T;
    Z.prototype.V = function() {
        var a = window.creativeExitOverrides;
        if (null != a && null != this.c.exitEvents)
            for (var b = 0; b < this.c.exitEvents.length; b++)
                if (null != a.exitEvents)
                    for (b = 0; b < a.exitEvents.length; b++) this.c.exitEvents[b].name == a.exitEvents[b].name && (this.c.exitEvents[b].destinationUrl = a.exitEvents[b].url);
        zn(this)
    };
    var zn = function(a) {
        a.L(An);
        Bn(a, "AdLoaded")
    };
    Z.prototype.Z = function(a, b, c) {
        this.a.width = a;
        this.a.height = b;
        this.a.viewMode = c;
        this.L(new yn("ResizeVpaidAd"));
        Bn(this, "AdSizeChange")
    };
    Z.prototype.resizeAd = Z.prototype.Z;
    Z.prototype.ma = function() {
        Bn(this, "AdStarted")
    };
    Z.prototype.startAd = Z.prototype.ma;
    Z.prototype.la = function() {
        Bn(this, "AdStopped")
    };
    Z.prototype.stopAd = Z.prototype.la;
    Z.prototype.W = function() {
        this.L(new yn("PauseVpaidAd"));
        Bn(this, "AdPaused")
    };
    Z.prototype.pauseAd = Z.prototype.W;
    Z.prototype.$ = function() {
        this.L(new yn("ResumeVpaidAd"));
        Bn(this, "AdPlaying")
    };
    Z.prototype.resumeAd = Z.prototype.$;
    Z.prototype.o = function() {
        this.a.expanded = !0;
        Bn(this, "AdExpandedChange")
    };
    Z.prototype.expandAd = Z.prototype.o;
    Z.prototype.ga = function() {
        this.a.skippableState && Bn(this, "AdSkipped")
    };
    Z.prototype.skipAd = Z.prototype.ga;
    Z.prototype.na = function(a, b, c) {
        a = A(a, c);
        this.j[b] = a
    };
    Z.prototype.subscribe = Z.prototype.na;
    Z.prototype.oa = function() {};
    Z.prototype.unsubscribe = Z.prototype.oa;
    var Bn = function(a, b) {
            if (b in a.j) a.j[b](void 0)
        },
        An = new N("InitVpaidAd");
    var Cn = function() {
        Yh.call(this);
        this.a = new Z
    };
    C(Cn, Yh);
    aa(Cn);
    r("window.getVPAIDAd", function() {
        return Cn.getInstance().a
    }, void 0);
    var Dn = function() {
        this.a = [];
        this.c = []
    };
    g = Dn.prototype;
    g.addReporter = function(a) {
        F(this.a, function(b) {
            b.newReporterCallback(a);
            a.newReporterCallback(b)
        });
        F(this.c, function(b) {
            a.registerChargeableEventName(b)
        });
        this.a.push(a)
    };
    g.reportEvents = function(a) {
        F(this.a, function(b) {
            b.reportEvents(a)
        })
    };
    g.registerChargeableEventName = function(a) {
        F(this.a, function(b) {
            b.registerChargeableEventName(a)
        });
        this.c.push(a)
    };
    g.logCustomVariable = function(a, b) {
        F(this.a, function(c) {
            c.logCustomVariable(a, b)
        })
    };
    g.getType = function() {
        return "UNIFIED_DISPATCHER"
    };
    g.getConfig = function() {
        return {
            reportingApiVersion: 2
        }
    };
    g.newReporterCallback = u;
    g.supportsChargeableEvents = function() {
        var a = !1;
        F(this.a, function(b) {
            b.supportsChargeableEvents() && (a = !0)
        });
        return a
    };
    var En = function(a) {
        this.g = a.ca;
        this.c = a.la;
        this.a = a;
        this.j = new Jd
    };
    g = En.prototype;
    g.reportEvents = function(a) {
        for (var b = [], c = 0; c < a.length; c++) {
            var d = a[c],
                e = Sm(this.a, d.unifiedReportingEvent);
            if (e) {
                var f = b,
                    d = ["eid", c + 1, "=", e, ";ecn", c + 1, "=", d.count, ";etm", c + 1, "=", d.time, ";"].join("");
                0 == f.length && f.push("");
                e = f.pop();
                950 < e.length + d.length && (f.push(e), e = "");
                f.push(e + d)
            }
        }
        if (b.length)
            for (a = B(), c = 0; c < b.length; c++) document.createElement("img").src = this.g + "&timestamp=" + a + ";" + b[c]
    };
    g.registerChargeableEventName = function(a) {
        var b = this.a.da;
        Jm(this.a, a, !0) && !b && Km(this.a, !1)
    };
    g.logCustomVariable = function(a, b) {
        this.c && 0 < this.c.length && (a = [this.c, "&timestamp=", B(), ";str=", a, ";strtype=", b].join(""), Kd(this.j, a))
    };
    g.getType = function() {
        return "STUDIO"
    };
    g.getConfig = function() {
        return {
            reportingApiVersion: 2
        }
    };
    g.newReporterCallback = function(a) {
        a.supportsChargeableEvents() && !this.a.da && Km(this.a, !0)
    };
    g.supportsChargeableEvents = function() {
        return !1
    };
    var Fn = function(a) {
        this.g = {};
        this.a = {};
        this.c = {};
        this.A = {};
        this.j = this.Nb(a);
        this.B = a;
        this.o = {};
        this.v = {};
        this.m = {}
    };
    C(Fn, L);
    var Hn = function(a, b, c, d) {
            if (c || !a.A[b]) a.A[b] || (a.g[b] = 0, a.A[b] = !0), a.g[b]++, d && Gn(a, d)
        },
        Gn = function(a, b) {
            F(b, function(a) {
                F(lh(this.B, a), function(a) {
                    a.ping()
                }, this)
            }, a)
        },
        In = function(a, b, c, d) {
            if (!(b in a.c)) {
                for (var e = B(), f = a.o[b]; f && 0 < f.length;) e += f.pop();
                a.c[b] = e;
                c && (a.m[c] = a.m[c] || [], a.m[c].push(b));
                Hn(a, b, !1, d)
            }
        },
        Jn = function(a, b, c) {
            if (b in a.c) {
                for (var d = a.c[b], e = B(), f = a.v[b]; f && 0 < f.length;) e += f.pop();
                d = e - d;
                0 > d && (d = 0);
                a.a[b] = a.a[b] || 0;
                a.a[b] += d;
                delete a.c[b];
                c && a.m[c] && Ja(a.m[c], b)
            }
        },
        Kn = function(a) {
            for (var b in a.c) Jn(a,
                b)
        },
        Ln = function(a) {
            for (var b in a.c) Jn(a, b), In(a, b);
            var c = [];
            for (b in a.g) {
                var d = 0,
                    e = a.g[b];
                a.a[b] && (d = Math.floor(a.a[b] / 1E3), a.a[b] -= 1E3 * d);
                a.g[b] = 0;
                (0 < e || 0 < d) && c.push({
                    unifiedReportingEvent: um(b),
                    count: e,
                    time: d
                })
            }
            a.j.reportEvents(c)
        };
    g = Fn.prototype;
    g.Nb = v;
    g.nc = v;
    g.mc = v;
    g.lc = v;
    g.bd = v;
    g.D = function() {
        Kn(this);
        Fn.C.D.call(this)
    };
    var Mn = function(a) {
        this.g = a;
        this.c = !1;
        this.a = new Fg
    };
    g = Mn.prototype;
    g.reportEvents = function(a) {
        this.c || F(a, function(a) {
            this.a.contains(a.unifiedReportingEvent.name) && (this.c = !0, F(lh(this.g, "ENGAGEMENT_IMG"), function(a) {
                a.ping()
            }))
        }, this)
    };
    g.registerChargeableEventName = function(a) {
        this.a.a.set(Gg(a), a)
    };
    g.logCustomVariable = function() {};
    g.getType = function() {
        return "THIRD_PARTY"
    };
    g.getConfig = function() {
        return {
            reportingApiVersion: 2
        }
    };
    g.newReporterCallback = function() {};
    g.supportsChargeableEvents = function() {
        return !1
    };
    var Nn = function(a) {
        Fn.call(this, a)
    };
    C(Nn, Fn);
    g = Nn.prototype;
    g.Nb = function(a) {
        var b;
        li() ? (b = t("googlecreative.reporting.sharedReporter"), b || (b = new Dn, r("googlecreative.reporting.sharedReporter", b, void 0)), a.tc || b.addReporter(new En(a)), 0 < lh(a, "ENGAGEMENT_IMG").length && b.addReporter(new Mn(a))) : b = new En(a);
        return b
    };
    g.nc = u;
    g.mc = u;
    g.lc = function(a, b) {
        this.j.logCustomVariable(a, b)
    };
    g.bd = function(a) {
        this.j.registerChargeableEventName(a)
    };
    var On = function(a) {
        this.m = a;
        this.j = null;
        this.o = !1;
        this.g = null;
        this.v = 5E3;
        this.c = []
    };
    C(On, L);
    g = On.prototype;
    g.jc = u;
    g.Mc = u;
    g.ua = function() {
        var a;
        if (a = this.Xb()) {
            var b;
            a: {
                a = this.m;
                for (b in a.g) {
                    var c = a.B.B[b];
                    if (c && c.m) {
                        b = !0;
                        break a
                    }
                }
                b = !1
            }
            a = b || !this.Gb()
        }
        a && (Ln(this.m), this.g = B())
    };
    g.Gb = function() {
        return null != this.g && B() - this.g <= this.v
    };
    g.Xb = function() {
        return null != this.j && 12E5 >= B() - this.j
    };
    g.D = function() {
        for (this.ua(); 0 < this.c.length;) {
            var a = this.c.pop();
            da(a) ? n.clearTimeout(a) : a.dispose()
        }
        On.C.D.call(this)
    };
    var Pn = function(a, b, c) {
        On.call(this, a);
        this.A = b;
        this.B = c;
        this.a = new Ig(1E3 * this.A);
        de(this.a, "tick", A(this.ua, this))
    };
    C(Pn, On);
    g = Pn.prototype;
    g.Mc = function() {
        this.a.g || this.a.start()
    };
    g.ua = function() {
        Jg(this.a);
        Pn.C.ua.call(this)
    };
    g.Xb = function() {
        return null != this.j && this.B || Pn.C.Xb.call(this)
    };
    g.Gb = function() {
        return !1
    };
    g.D = function() {
        Jg(this.a);
        this.a.dispose();
        Pn.C.D.call(this)
    };
    var Qn = function(a, b, c) {
        On.call(this, a);
        this.a = b;
        this.A = c && 0 < this.a.length ? this.a.pop() : null
    };
    C(Qn, On);
    var Rn = [10, 20, 50, 120];
    Qn.prototype.jc = function() {
        for (var a = 0; a < this.a.length; a++) this.c.push(Kg(A(this.ua, this), 1E3 * this.a[a]));
        null != this.A && (a = new Ig(1E3 * this.A), de(a, "tick", A(this.ua, this)), a.start(), this.c.push(a))
    };
    var Sn = function(a) {
        this.a = a;
        this.c = "undefined" != typeof DARTDebugEventHandler && DARTDebugEventHandler ? new DARTDebugEventHandler : null;
        D(E(this.a.fc)) || DARTDebugEventHandler.initPreviewSession(this.a.fc)
    };
    g = Sn.prototype;
    g.reportEvents = function(a) {
        if (this.c)
            for (var b = 0; b < a.length; ++b) {
                var c = a[b],
                    d = c.unifiedReportingEvent,
                    d = this.a.B[[d.type, escape(d.name), escape(d.videoName), d.trigger].join(":")];
                try {
                    this.c.handleEventActivity(d.name, d.type, c.count, c.time, !d.j, this.a.G)
                } catch (e) {}
            }
    };
    g.registerChargeableEventName = u;
    g.logCustomVariable = function(a, b) {
        try {
            this.c.handleCustomVariable(unescape(a), b, this.a.G)
        } catch (c) {}
    };
    g.getType = function() {
        return "OUTPUT_CONSOLE"
    };
    g.getConfig = function() {
        return {
            reportingApiVersion: 2
        }
    };
    g.newReporterCallback = u;
    g.supportsChargeableEvents = function() {
        return !1
    };
    var Tn = function(a) {
        Fn.call(this, a)
    };
    C(Tn, Fn);
    Tn.prototype.Nb = function(a) {
        return new Sn(a)
    };
    Tn.prototype.nc = function(a, b, c) {
        var d = this.j;
        a = d.a.B[a];
        if (d.c) try {
            d.c.handleEventAction(b, a.name, c, a.type, !a.j, d.a.G)
        } catch (e) {}
    };
    Tn.prototype.mc = function(a) {
        var b = this.j;
        try {
            b.c.handleCustomJSExecution(a, b.a.G)
        } catch (c) {}
    };
    Tn.prototype.lc = function(a, b) {
        this.j.logCustomVariable(a, b)
    };
    var Un = function(a, b, c) {
        On.call(this, a);
        this.A = b;
        this.a = c
    };
    C(Un, On);
    Un.prototype.Gb = function() {
        return this.a && Un.C.Gb.call(this)
    };
    Un.prototype.jc = function() {
        var a = new Ig(1E3 * this.A);
        de(a, "tick", A(this.ua, this));
        a.start();
        this.c.push(a)
    };
    var eh = function(a, b, c) {
        Q.call(this);
        this.a = a;
        this.fa = b;
        this.g = a.c ? new Tn(a) : new Nn(a);
        this.j = Vn(a, this.g);
        this.H = c;
        this.c = {};
        this.m = {};
        this.F = new Lg(this);
        this.K = this.M = !1;
        this.o = this.X = 0;
        this.v = [];
        this.B = {};
        this.T = new Y(this.a, this);
        this.P = new Jd(this.a.c);
        this.J = {};
        J && this.F.I(self, "unload", this.dispose);
        this.F.I(n, "pagehide", A(this.j.ua, this.j));
        null != this.H.a && (Bj(8), this.H.Yc())
    };
    C(eh, Q);
    var dh = {},
        Vn = function(a, b) {
            var c = !1;
            F(a.j, function(a) {
                null != a.a && "lightbox" == a.a.expansionMode && (c = !0)
            });
            return a.c ? new Un(b, 2, !1) : c ? new Pn(b, 2, !0) : new Qn(b, Rn, !0)
        };
    eh.prototype.$ = function() {
        this.o++;
        Wn(this)
    };
    eh.prototype.W = function() {
        Xn(this, new Ni("logEvent", "Count", "FULL_SCREEN"))
    };
    eh.prototype.ca = function(a) {
        "boolean" == typeof a.G && a.G ? Xn(this, a) : Yn(this, a);
        a.A && this.j.ua()
    };
    eh.prototype.V = function() {
        this.j.ua()
    };
    var Yn = function(a, b) {
            var c = Ib(b.c),
                c = Lm(b.m, c);
            null != c && Zn(a, c, b.c, b.v, b.a)
        },
        Zn = function(a, b, c, d, e, f) {
            if (null !== b) switch (a.g.nc(b, c, d), c) {
                case "Exit":
                    f || (f = []), f.push("CLICK");
                case "Count":
                    Hn(a.g, b, d, f);
                    b = a.a.B[b];
                    c = !1;
                    b && b.chargeable && (b = a.j, b.o ? c = !1 : (Ln(b.m), b.g = B(), c = b.o = !0));
                    c || a.j.Mc();
                    break;
                case "Start":
                    In(a.g, b, e, f);
                    break;
                case "Stop":
                    Jn(a.g, b, e)
            }
        },
        Xn = function(a, b) {
            if ("DISPLAY_TIMER" == b.g) "Start" == b.c && (a.M || ($n(a).then(a.ga, void 0, a), a.M = !0), 0 == a.X++ && (b = Mm(a.a, "DISPLAY_TIMER")) && Zn(a, b, "Start", !1), a.o--);
            else {
                var c = Mm(a.a, b.g);
                if (c) {
                    var d = [];
                    ("FULL_SCREEN" == b.g || "EXPAND_TIMER" == b.g && "Start" == b.c) && d.push("EXPANSION");
                    Zn(a, c, b.c, !1, b.a, d)
                }
            }
        };
    g = eh.prototype;
    g.Sd = function(a) {
        Xn(this, a);
        var b = Nm(this.a, a.g, a.videoName);
        null != b && Zn(this, b, a.c, !1, a.a)
    };
    g.Xc = function() {
        var a = Mm(this.a, "DISPLAY_TIMER");
        a && Zn(this, a, "Stop", !1)
    };
    g.Yb = function(a) {
        var b = this.a.F[a.m] || {},
            c = null != a.o ? a.o : b.url;
        null != a.g && !D(E(a.g)) && (c = kg(c, a.g));
        var d = this.a.M,
            e = lh(this.a, "CLICK"),
            f = 1 == e.length ? e[0].a : "",
            e = c;
        "market" == (c.match(hg)[1] || null) && ac ? (c = mm(this.a.v, "http://ad.doubleclick.net/viewad/817-grey.gif", b.reportingId || null, f, d), Kd(this.P, c)) : e = mm(this.a.v, c, b.reportingId || null, f, d);
        c = e;
        d = b.g;
        b = null != b.c ? b.c : void 0;
        null != this.H.a ? this.H.Zc(c) : window.open(c, d || "_blank", b || "");
        a.log && -1 == this.a.v.indexOf("[rm_exit_id]") && Yn(this, a);
        this.j.ua()
    };
    g.Kd = function(a) {
        var b = this.m[a.a];
        switch (a.type) {
            case "expandAsset":
                b.A = !0;
                pn(this, b);
                break;
            case "expandRequested":
                b.A = !1;
                pn(this, b);
                break;
            case "expandFinished":
                if (a = this.c[b]) a.Kb(), this.L(new kn("EXPAND_FINISH", b));
                break;
            case "collapseAsset":
                b.A = !0;
                qn(this, b);
                break;
            case "collapseRequested":
                b.A = !1;
                qn(this, b);
                break;
            case "collapseFinished":
                if (a = this.c[b]) a.Ga(), this.L(new kn("COLLAPSE_FINISH", b));
                break;
            case "tellAssetHide":
                this.A(b)
        }
    };
    g.Cd = function(a) {
        var b;
        a: {
            b = this.a;
            var c = a.c;
            if (c && (c = ib(c)) && b.Ua[c]) {
                b = b.Ua[c];
                break a
            }
            for (c = 0; c < b.j.length; c++) {
                var d = b.j[c];
                if (this.m[a.a] != d && Eb(d)) {
                    b = d;
                    break a
                }
            }
            b = null
        }
        if (b) switch (a.type) {
            case "tellCompanionAssetShow":
                on(this, b);
                break;
            case "tellCompanionAssetHide":
                this.A(b)
        }
    };
    g.Bd = function(a) {
        a = unescape(a.c);
        this.a.c && this.g.mc(a);
        try {
            eval(a)
        } catch (b) {}
    };
    g.Od = function(a) {
        a = parseInt(a.c, 10);
        !isNaN(a) && 0 < a && (this.j.v = a)
    };
    g.Ad = function(a) {
        var b = Mm(this.a, a.m);
        if (b) {
            var c = this.g,
                d = a.c;
            a = a.g;
            var e = c.o[b] || (c.o[b] = []),
                b = c.v[b] || (c.v[b] = []);
            0 != d && e.push(d);
            0 != a && b.push(a)
        }
    };
    g.Dd = function(a) {
        this.g.lc(a.c, a.g)
    };
    g.ce = function() {
        this.a.va && yf(this.a.va);
        var a = lh(this.a, "IMPRESSION_JS");
        0 < a.length && (a = Fa(a, function(a) {
            return a.a
        }), dg(a, this.a.J));
        ao(this)
    };
    var ao = function(a) {
            for (var b = a.a.j, c = 0; c < b.length; c++) {
                var d = b[c],
                    e = d.c;
                on(a, d, e && !e.g ? -1 : 1E3 * (e && e.g && 0 < e.m && e.m || 0))
            }
        },
        on = function(a, b, c) {
            c ? 0 < c && (a.o++, a.v.push(Kg(A(a.R, a, b), c))) : (a.o++, a.R(b))
        };
    eh.prototype.R = function(a) {
        if (!(a in this.c)) {
            var b = this.fa.g(a, this.a);
            if (b) {
                this.c[a] = b;
                this.m[b] = a;
                var b = this.c[a],
                    c = this.F;
                c.I(b, "logEvent", this.ca);
                c.I(b, "logVideoEvent", this.Sd);
                c.I(b, "logExitFlushEventsOpenPopup", this.Yb);
                c.I(b, "launchExit", this.Yb);
                c.I(b, "expandAsset expandRequested expandFinished collapseAsset collapseRequested collapseFinished tellAssetHide".split(" "), this.Kd);
                c.I(b, ["tellCompanionAssetShow", "tellCompanionAssetHide"], this.Cd);
                c.I(b, "invokeExternalJSFunction", this.Bd);
                c.I(b,
                    "setThrottlingWindow", this.Od);
                c.I(b, "reportCustomVariable", this.Dd);
                c.I(b, "setTimerAdjustment", this.Ad);
                c.I(b, "flushCounters", this.V);
                c.I(b, "RESET", this.$);
                c.I(b, "registerChargeableEventName", this.Z);
                c.I(b, "fullscreenExpandFinished", this.W);
                if (a.M || this.a.P) {
                    if (b = a.J, c = Sc(document, b)) {
                        var d;
                        if (d = this.a.P) d = !(!D(E(hd(c, "position"))) && "static" != hd(c, "position"));
                        d && (c.style.position = "relative");
                        this.a.ob && (c.style.display = "inline-block");
                        a.a && a.a.c && (this.J[b] = c.style.height, c.style.height = "auto");
                        dj(this.c[a], c);
                        if (a.U)
                            for (b = this.c[a], c = a.U.split(";"), d = 0; d < c.length; d++) {
                                var e = c[d].split(":");
                                2 <= e.length && dd(b.S(), e[0], e[1])
                            }
                    }
                } else document.body && document.body.firstChild ? (b = document.body.firstChild, dj(this.c[a], b.parentNode, b)) : document.body ? dj(this.c[a], document.body) : document.documentElement && dj(this.c[a], document.documentElement);
                this.L(new kn("SHOW", a))
            }
        }
        a.c && (b = a.c, b = 1E3 * (b && b.c && 0 < b.a && b.a || -1), 0 < b && (b = Kg(A(this.A, this, a), b), this.v.push(b), this.B[a] = b));
        this.K || ($n(this).then(this.ea,
            void 0, this), this.K = !0)
    };
    var $n = function(a) {
        var b = [];
        Wa(a.c, function(a, d) {
            b.push(jj(this.c[d]))
        }, a);
        return We(b)
    };
    eh.prototype.A = function(a) {
        var b = this.c[a];
        if (b) {
            for (var c = this.g, d = c.m[b] || []; 0 < d.length;) Jn(c, d.pop(), b);
            delete this.m[b];
            b.dispose();
            delete this.c[a];
            this.B[a] && (n.clearTimeout(this.B[a]), delete this.B[a]);
            this.L(new kn("HIDE", a));
            Wn(this)
        }
    };
    var pn = function(a, b) {
            var c = a.c[b];
            c && (c.Lb(), a.L(new kn("EXPAND", b)), a.L(new kn("EXPAND_REQUEST", b)))
        },
        qn = function(a, b) {
            var c = a.c[b];
            c && (c.wb(), a.L(new kn("COLLAPSE", b)), a.L(new kn("COLLAPSE_REQUEST", b)))
        };
    eh.prototype.ea = function() {
        bo(this)
    };
    var bo = function(a) {
        a.j.j = B();
        a.a.fd && Xn(a, new Ni("logEvent", "Count", "HTML5_CREATIVE_IMPRESSION"));
        a.a.mb && Kd(a.P, a.a.ga);
        F(["IMPRESSION_IMG", "ARTWORK_IMPRESSION"], function(a) {
            F(lh(this.a, a), function(a) {
                a.ping()
            }, this)
        }, a)
    };
    eh.prototype.ga = function() {
        this.j.jc();
        this.v.push(Kg(A(this.Xc, this), 24E4))
    };
    var Wn = function(a) {
        0 == --a.X && (a.Xc(), Kn(a.g), 0 == a.o && a.dispose())
    };
    eh.prototype.Z = function(a) {
        this.g.bd(a.c)
    };
    eh.prototype.D = function() {
        for (var a in this.J) Sc(document, a).style.height = this.J[a];
        this.F.dispose();
        for (this.T.dispose(); 0 < this.v.length;) n.clearTimeout(this.v.pop());
        a = this.a.j;
        for (var b = 0; b < a.length; b++) {
            var c = a[b];
            c in this.c && (this.c[c].dispose(), delete this.c[c])
        }
        this.m = null;
        this.g.dispose();
        this.g = null;
        a = this.a.o;
        q(dh[a]) && delete dh[a];
        eh.C.D.call(this)
    };
    var co = function() {
            this.a = null
        },
        eo = function(a, b) {
            return x(a) ? 0 <= Da(a, b) : a == b
        };
    co.prototype.g = v;
    co.prototype.c = function() {
        return !1
    };
    var jn = function() {
        var a = ch;
        a.a || (a.a = new hn);
        return a.a
    };
    var fo = function() {
        this.a = null
    };
    C(fo, co);
    fo.prototype.g = function(a, b) {
        if (this.c(a)) {
            var c = new nj(a, b);
            a = new V(a, b);
            b = c.c ? c.c.length : 0;
            if (a.Aa) throw Error("Component already rendered");
            if (0 > b || b > (c.c ? c.c.length : 0)) throw Error("Child component index out of bounds");
            c.v && c.c || (c.v = {}, c.c = []);
            if (a.o == c) {
                var d = a.za();
                c.v[d] = a;
                Ja(c.c, a)
            } else {
                var d = c.v,
                    e = a.za();
                if (null !== d && e in d) throw Error('The object already contains the key "' + e + '"');
                d[e] = a
            }
            cj(a, c);
            Na(c.c, b, 0, a);
            a.Aa && c.Aa && a.o == c ? (d = c.g, b = d.childNodes[b] || null, b != a.S() && d.insertBefore(a.S(),
                b)) : (c.g || c.ab(), b = c.c ? c.c[b + 1] || null : null, dj(a, c.g, b ? b.g : null));
            return c
        }
        return null
    };
    fo.prototype.c = function(a) {
        var b = eo("EXPANDABLE", a.m);
        a = q("HTML5") ? eo("HTML5", a.g) : !0;
        return b && a
    };
    for (var ch = new fo, go = document.getElementsByTagName("noscript"), ho = 0; ho < go.length; ho++) go[ho].style.display = "none";
    var io = t("studioV2.loadedLibraries.200_159.html_expanding");
    if (!io || !io.bootstrap) {
        r("studioV2.loadedLibraries.200_159.html_expanding.bootstrap", jh, void 0);
        r("studioV2.loadedLibraries.200_159.html_expanding.unload", nh, void 0);
        var jo;
        a: {
            var ko = t("dclkStudioV3.renderingLibraries");
            if (ko)
                for (var lo = 0; lo < ko.length; ++lo) {
                    var mo = ko[lo];
                    if ("200_159" == mo.version || -1 != mo.url.indexOf("/html_expanding")) {
                        jo = mo;
                        break a
                    }
                }
            jo = null
        }
        null !== jo && (jo.bootstrapFunction = jh, jo.unload = nh);
        var Zg = "html_expanding",
            no = $g();
        if (null != no && !t("dclkStudioV3.rlErrorSampled") && !t("studioV2.rlErrorSampled")) {
            var oo =
                new wg(no);
            if (oo.c.j) {
                oo.a = A(oo.g, oo);
                oo.qb = n;
                n.addEventListener("error", oo.a);
                var po = t("dclkStudioV3");
                po ? po.$d = oo : t("studioV2").$d = oo
            }
        }
        var qo = t("studioV2.defer");
        qo && z(qo) ? qo(jh) : jh()
    };
})();
