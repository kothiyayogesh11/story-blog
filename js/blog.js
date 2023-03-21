(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[9195], {
    4184: function(e, t) {
        var n;
        !function() {
            "use strict";
            var i = {}.hasOwnProperty;
            function r() {
                for (var e = [], t = 0; t < arguments.length; t++) {
                    var n = arguments[t];
                    if (n) {
                        var a = typeof n;
                        if ("string" === a || "number" === a)
                            e.push(n);
                        else if (Array.isArray(n)) {
                            if (n.length) {
                                var s = r.apply(null, n);
                                s && e.push(s)
                            }
                        } else if ("object" === a) {
                            if (n.toString !== Object.prototype.toString && !n.toString.toString().includes("[native code]")) {
                                e.push(n.toString());
                                continue
                            }
                            for (var l in n)
                                i.call(n, l) && n[l] && e.push(l)
                        }
                    }
                }
                return e.join(" ")
            }
            e.exports ? (r.default = r,
            e.exports = r) : void 0 === (n = function() {
                return r
            }
            .apply(t, [])) || (e.exports = n)
        }()
    },
    7286: function(e, t, n) {
        (window.__NEXT_P = window.__NEXT_P || []).push(["/blog", function() {
            return n(1634)
        }
        ])
    },
    1634: function(e, t, n) {
        "use strict";
        n.r(t),
        n.d(t, {
            default: function() {
                return p
            }
        });
        var i = n(5893)
          , r = n(7294)
          , a = n(9608)
          , s = n(7124)
          , l = n(8911)
          , c = n(5675)
          , o = n.n(c)
          , u = n(1664)
          , d = n.n(u)
          , f = n(3214)
          , m = n(3680)
          , h = function() {
            var e = (0,
            r.useState)(9)
              , t = e[0]
              , n = (e[1],
            (0,
            r.useState)(1))
              , a = n[0]
              , s = n[1]
              , l = (0,
            r.useState)(Math.ceil(f.wp.length / (t || 9)))
              , c = l[0]
              , u = (l[1],
            function(e) {
                console.log(e, "pageNumber"),
                s(e)
            }
            );
            (0,
            r.useEffect)((function() {
                return function() {}
            }
            ), [a]);
            return (0,
            i.jsx)("section", {
                className: "masonary-blog-section ptb-120",
                children: (0,
                i.jsxs)("div", {
                    className: "container",
                    children: [(0,
                    i.jsx)("div", {
                        className: "row",
                        children: null === f.wp || void 0 === f.wp ? void 0 : f.wp.slice(t * a - t, t * a).map((function(e, t) {
                            return (0,
                            i.jsx)("div", {
                                className: "col-lg-4 col-md-6",
                                children: (0,
                                i.jsxs)("div", {
                                    className: "single-article rounded-custom my-3",
                                    children: [(0,
                                    i.jsx)(d(), {
                                        href: e.href,
                                        children: (0,
                                        i.jsx)("a", {
                                            className: "article-img",
                                            children: (0,
                                            i.jsx)(o(), {
                                                width: 414,
                                                height: 224,
                                                src: e.image,
                                                alt: "article"
                                            })
                                        })
                                    }), (0,
                                    i.jsxs)("div", {
                                        className: "article-content p-4",
                                        children: [(0,
                                        i.jsx)("div", {
                                            className: "article-category mb-4 d-block",
                                            children: (0,
                                            i.jsx)("a", {
                                                href: "#!",
                                                className: "d-inline-block text-dark badge ".concat(e.class),
                                                children: e.type
                                            })
                                        }), (0,
                                        i.jsx)(d(), {
                                            href: e.href,
                                            children: (0,
                                            i.jsx)("a", {
                                                children: (0,
                                                i.jsx)("h2", {
                                                    className: "h5 article-title limit-2-line-text",
                                                    children: e.header
                                                })
                                            })
                                        }), (0,
                                        i.jsx)("p", {
                                            className: "limit-2-line-text",
                                            children: e.info
                                        }), (0,
                                        i.jsx)("a", {
                                            href: "#!",
                                            children: (0,
                                            i.jsxs)("div", {
                                                className: "d-flex align-items-center pt-4",
                                                children: [(0,
                                                i.jsx)("div", {
                                                    className: "avatar",
                                                    children: (0,
                                                    i.jsx)("img", {
                                                        src: e.profilePic,
                                                        alt: "avatar",
                                                        width: "40",
                                                        className: "img-fluid rounded-circle me-3"
                                                    })
                                                }), (0,
                                                i.jsxs)("div", {
                                                    className: "avatar-info",
                                                    children: [(0,
                                                    i.jsxs)("h6", {
                                                        className: "mb-0 avatar-name",
                                                        children: [e.author, " "]
                                                    }), (0,
                                                    i.jsx)("span", {
                                                        className: "small fw-medium text-muted",
                                                        children: e.data
                                                    })]
                                                })]
                                            })
                                        })]
                                    })]
                                })
                            }, t + 1)
                        }
                        ))
                    }), (0,
                    i.jsxs)("div", {
                        className: "row justify-content-center align-items-center mt-5",
                        children: [(0,
                        i.jsx)("div", {
                            className: "col-auto my-1",
                            children: (0,
                            i.jsx)(m.Z, {
                                type: "button",
                                disabled: a <= 1 || 1 == c,
                                onClick: function() {
                                    return u(a - 1)
                                },
                                className: "btn btn-primary btn-sm",
                                children: "Previous"
                            })
                        }), (0,
                        i.jsx)("div", {
                            className: "col-auto my-1",
                            children: (0,
                            i.jsx)("nav", {
                                children: (0,
                                i.jsx)("ul", {
                                    className: "pagination rounded mb-0",
                                    children: function() {
                                        var e = [];
                                        console.log(c, "totalPage");
                                        for (var t = 0; c > t; t++)
                                            e.push(t + 1);
                                        return console.log(e, "pagNumArray"),
                                        e
                                    }().map((function(e) {
                                        return console.log(e, "num"),
                                        (0,
                                        i.jsx)(i.Fragment, {
                                            children: (0,
                                            i.jsx)("li", {
                                                className: "page-item",
                                                children: (0,
                                                i.jsx)("a", {
                                                    className: "page-link ".concat(e == a ? "active" : ""),
                                                    onClick: function() {
                                                        return u(e)
                                                    },
                                                    href: "javascript:void(0);",
                                                    children: e
                                                })
                                            })
                                        })
                                    }
                                    ))
                                })
                            })
                        }), (0,
                        i.jsx)("div", {
                            className: "col-auto my-1",
                            children: (0,
                            i.jsx)(m.Z, {
                                type: "button",
                                disabled: a >= c || 1 == c,
                                onClick: function() {
                                    return u(a + 1)
                                },
                                className: "btn btn-primary btn-sm",
                                children: "Next"
                            })
                        })]
                    })]
                })
            })
        }
          , x = n(2218)
          , p = function() {
            return (0,
            i.jsxs)(a.Z, {
                title: "Blog",
                desc: "Livefield Blog and Article Page",
                keyword: "construction knowledge, inforamtion, tips",
                author: "Livefield Technologies",
                blogUrl: "/blog",
                ogType: "website",
                children: [(0,
                i.jsx)(l.Z, {}), (0,
                i.jsx)(x.Z, {
                    title: "Blog",
                    desc: "Livefield Updates, Construction News, Tips and more.",
                    blogtags: !0
                }), (0,
                i.jsx)(h, {}), (0,
                i.jsx)(s.Z, {
                    footerLight: !0
                })]
            })
        }
    },
    3680: function(e, t, n) {
        "use strict";
        n.d(t, {
            Z: function() {
                return f
            }
        });
        var i = n(4184)
          , r = n.n(i)
          , a = n(7294)
          , s = n(5893);
        const l = ["as", "disabled"];
        function c({tagName: e, disabled: t, href: n, target: i, rel: r, role: a, onClick: s, tabIndex: l=0, type: c}) {
            e || (e = null != n || null != i || null != r ? "a" : "button");
            const o = {
                tagName: e
            };
            if ("button" === e)
                return [{
                    type: c || "button",
                    disabled: t
                }, o];
            const u = i=>{
                (t || "a" === e && function(e) {
                    return !e || "#" === e.trim()
                }(n)) && i.preventDefault(),
                t ? i.stopPropagation() : null == s || s(i)
            }
            ;
            return "a" === e && (n || (n = "#"),
            t && (n = void 0)),
            [{
                role: null != a ? a : "button",
                disabled: void 0,
                tabIndex: t ? void 0 : l,
                href: n,
                target: "a" === e ? i : void 0,
                "aria-disabled": t || void 0,
                rel: "a" === e ? r : void 0,
                onClick: u,
                onKeyDown: e=>{
                    " " === e.key && (e.preventDefault(),
                    u(e))
                }
            }, o]
        }
        const o = a.forwardRef(((e,t)=>{
            let {as: n, disabled: i} = e
              , r = function(e, t) {
                if (null == e)
                    return {};
                var n, i, r = {}, a = Object.keys(e);
                for (i = 0; i < a.length; i++)
                    n = a[i],
                    t.indexOf(n) >= 0 || (r[n] = e[n]);
                return r
            }(e, l);
            const [a,{tagName: o}] = c(Object.assign({
                tagName: n,
                disabled: i
            }, r));
            return (0,
            s.jsx)(o, Object.assign({}, r, a, {
                ref: t
            }))
        }
        ));
        o.displayName = "Button";
        var u = n(6792);
        const d = a.forwardRef((({as: e, bsPrefix: t, variant: n, size: i, active: a, className: l, ...o},d)=>{
            const f = (0,
            u.vE)(t, "btn")
              , [m,{tagName: h}] = c({
                tagName: e,
                ...o
            })
              , x = h;
            return (0,
            s.jsx)(x, {
                ...m,
                ...o,
                ref: d,
                className: r()(l, f, a && "active", n && `${f}-${n}`, i && `${f}-${i}`, o.href && o.disabled && "disabled")
            })
        }
        ));
        d.displayName = "Button",
        d.defaultProps = {
            variant: "primary",
            active: !1,
            disabled: !1
        };
        var f = d
    },
    6792: function(e, t, n) {
        "use strict";
        n.d(t, {
            SC: function() {
                return d
            },
            pi: function() {
                return o
            },
            vE: function() {
                return c
            },
            zG: function() {
                return u
            }
        });
        var i = n(7294);
        n(5893);
        const r = ["xxl", "xl", "lg", "md", "sm", "xs"]
          , a = i.createContext({
            prefixes: {},
            breakpoints: r,
            minBreakpoint: "xs"
        })
          , {Consumer: s, Provider: l} = a;
        function c(e, t) {
            const {prefixes: n} = (0,
            i.useContext)(a);
            return e || n[t] || t
        }
        function o() {
            const {breakpoints: e} = (0,
            i.useContext)(a);
            return e
        }
        function u() {
            const {minBreakpoint: e} = (0,
            i.useContext)(a);
            return e
        }
        function d() {
            const {dir: e} = (0,
            i.useContext)(a);
            return "rtl" === e
        }
    }
}, function(e) {
    e.O(0, [5445, 2013, 3874, 6556, 8833, 8855, 818, 9774, 2888, 179], (function() {
        return t = 7286,
        e(e.s = t);
        var t
    }
    ));
    var t = e.O();
    _N_E = t
}
]);
