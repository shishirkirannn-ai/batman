/*! For license information please see main.58e7328e.js.LICENSE.txt */
(() => {
    "use strict";
    var e = {
            4(e, t, n) {
                var r = n(853),
                    a = n(43),
                    l = n(950);

                function o(e) {
                    var t = "https://react.dev/errors/" + e;
                    if (1 < arguments.length) {
                        t += "?args[]=" + encodeURIComponent(arguments[1]);
                        for (var n = 2; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n])
                    }
                    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
                }

                function s(e) {
                    return !(!e || 1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType)
                }

                function i(e) {
                    var t = e,
                        n = e;
                    if (e.alternate)
                        for (; t.return;) t = t.return;
                    else {
                        e = t;
                        do {
                            0 !== (4098 & (t = e).flags) && (n = t.return), e = t.return
                        } while (e)
                    }
                    return 3 === t.tag ? n : null
                }

                function c(e) {
                    if (13 === e.tag) {
                        var t = e.memoizedState;
                        if (null === t && (null !== (e = e.alternate) && (t = e.memoizedState)), null !== t) return t.dehydrated
                    }
                    return null
                }

                function u(e) {
                    if (31 === e.tag) {
                        var t = e.memoizedState;
                        if (null === t && (null !== (e = e.alternate) && (t = e.memoizedState)), null !== t) return t.dehydrated
                    }
                    return null
                }

                function d(e) {
                    if (i(e) !== e) throw Error(o(188))
                }

                function f(e) {
                    var t = e.tag;
                    if (5 === t || 26 === t || 27 === t || 6 === t) return e;
                    for (e = e.child; null !== e;) {
                        if (null !== (t = f(e))) return t;
                        e = e.sibling
                    }
                    return null
                }
                var p = Object.assign,
                    m = Symbol.for("react.element"),
                    h = Symbol.for("react.transitional.element"),
                    g = Symbol.for("react.portal"),
                    y = Symbol.for("react.fragment"),
                    v = Symbol.for("react.strict_mode"),
                    b = Symbol.for("react.profiler"),
                    x = Symbol.for("react.consumer"),
                    w = Symbol.for("react.context"),
                    k = Symbol.for("react.forward_ref"),
                    S = Symbol.for("react.suspense"),
                    N = Symbol.for("react.suspense_list"),
                    j = Symbol.for("react.memo"),
                    E = Symbol.for("react.lazy");
                Symbol.for("react.scope");
                var C = Symbol.for("react.activity");
                Symbol.for("react.legacy_hidden"), Symbol.for("react.tracing_marker");
                var _ = Symbol.for("react.memo_cache_sentinel");
                Symbol.for("react.view_transition");
                var T = Symbol.iterator;

                function R(e) {
                    return null === e || "object" !== typeof e ? null : "function" === typeof(e = T && e[T] || e["@@iterator"]) ? e : null
                }
                var P = Symbol.for("react.client.reference");

                function O(e) {
                    if (null == e) return null;
                    if ("function" === typeof e) return e.$$typeof === P ? null : e.displayName || e.name || null;
                    if ("string" === typeof e) return e;
                    switch (e) {
                        case y:
                            return "Fragment";
                        case b:
                            return "Profiler";
                        case v:
                            return "StrictMode";
                        case S:
                            return "Suspense";
                        case N:
                            return "SuspenseList";
                        case C:
                            return "Activity"
                    }
                    if ("object" === typeof e) switch (e.$$typeof) {
                        case g:
                            return "Portal";
                        case w:
                            return e.displayName || "Context";
                        case x:
                            return (e._context.displayName || "Context") + ".Consumer";
                        case k:
                            var t = e.render;
                            return (e = e.displayName) || (e = "" !== (e = t.displayName || t.name || "") ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
                        case j:
                            return null !== (t = e.displayName || null) ? t : O(e.type) || "Memo";
                        case E:
                            t = e._payload, e = e._init;
                            try {
                                return O(e(t))
                            } catch (sa) {}
                    }
                    return null
                }
                var L = Array.isArray,
                    z = a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
                    A = l.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
                    F = {
                        pending: !1,
                        data: null,
                        method: null,
                        action: null
                    },
                    M = [],
                    D = -1;

                function U(e) {
                    return {
                        current: e
                    }
                }

                function I(e) {
                    0 > D || (e.current = M[D], M[D] = null, D--)
                }

                function B(e, t) {
                    D++, M[D] = e.current, e.current = t
                }
                var H, W, q = U(null),
                    V = U(null),
                    $ = U(null),
                    Q = U(null);

                function Y(e, t) {
                    switch (B($, t), B(V, e), B(q, null), t.nodeType) {
                        case 9:
                        case 11:
                            e = (e = t.documentElement) && (e = e.namespaceURI) ? vd(e) : 0;
                            break;
                        default:
                            if (e = t.tagName, t = t.namespaceURI) e = bd(t = vd(t), e);
                            else switch (e) {
                                case "svg":
                                    e = 1;
                                    break;
                                case "math":
                                    e = 2;
                                    break;
                                default:
                                    e = 0
                            }
                    }
                    I(q), B(q, e)
                }

                function K() {
                    I(q), I(V), I($)
                }

                function J(e) {
                    null !== e.memoizedState && B(Q, e);
                    var t = q.current,
                        n = bd(t, e.type);
                    t !== n && (B(V, e), B(q, n))
                }

                function X(e) {
                    V.current === e && (I(q), I(V)), Q.current === e && (I(Q), ff._currentValue = F)
                }

                function G(e) {
                    if (void 0 === H) try {
                        throw Error()
                    } catch (sa) {
                        var t = sa.stack.trim().match(/\n( *(at )?)/);
                        H = t && t[1] || "", W = -1 < sa.stack.indexOf("\n    at") ? " (<anonymous>)" : -1 < sa.stack.indexOf("@") ? "@unknown:0:0" : ""
                    }
                    return "\n" + H + e + W
                }
                var Z = !1;

                function ee(e, t) {
                    if (!e || Z) return "";
                    Z = !0;
                    var n = Error.prepareStackTrace;
                    Error.prepareStackTrace = void 0;
                    try {
                        var r = {
                            DetermineComponentFrameRoot: function() {
                                try {
                                    if (t) {
                                        var n = function() {
                                            throw Error()
                                        };
                                        if (Object.defineProperty(n.prototype, "props", {
                                                set: function() {
                                                    throw Error()
                                                }
                                            }), "object" === typeof Reflect && Reflect.construct) {
                                            try {
                                                Reflect.construct(n, [])
                                            } catch (sa) {
                                                var r = sa
                                            }
                                            Reflect.construct(e, [], n)
                                        } else {
                                            try {
                                                n.call()
                                            } catch (a) {
                                                r = a
                                            }
                                            e.call(n.prototype)
                                        }
                                    } else {
                                        try {
                                            throw Error()
                                        } catch (l) {
                                            r = l
                                        }(n = e()) && "function" === typeof n.catch && n.catch(function() {})
                                    }
                                } catch (o) {
                                    if (o && r && "string" === typeof o.stack) return [o.stack, r.stack]
                                }
                                return [null, null]
                            }
                        };
                        r.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
                        var a = Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot, "name");
                        a && a.configurable && Object.defineProperty(r.DetermineComponentFrameRoot, "name", {
                            value: "DetermineComponentFrameRoot"
                        });
                        var l = r.DetermineComponentFrameRoot(),
                            o = l[0],
                            s = l[1];
                        if (o && s) {
                            var i = o.split("\n"),
                                c = s.split("\n");
                            for (a = r = 0; r < i.length && !i[r].includes("DetermineComponentFrameRoot");) r++;
                            for (; a < c.length && !c[a].includes("DetermineComponentFrameRoot");) a++;
                            if (r === i.length || a === c.length)
                                for (r = i.length - 1, a = c.length - 1; 1 <= r && 0 <= a && i[r] !== c[a];) a--;
                            for (; 1 <= r && 0 <= a; r--, a--)
                                if (i[r] !== c[a]) {
                                    if (1 !== r || 1 !== a)
                                        do {
                                            if (r--, 0 > --a || i[r] !== c[a]) {
                                                var u = "\n" + i[r].replace(" at new ", " at ");
                                                return e.displayName && u.includes("<anonymous>") && (u = u.replace("<anonymous>", e.displayName)), u
                                            }
                                        } while (1 <= r && 0 <= a);
                                    break
                                }
                        }
                    } finally {
                        Z = !1, Error.prepareStackTrace = n
                    }
                    return (n = e ? e.displayName || e.name : "") ? G(n) : ""
                }

                function te(e, t) {
                    switch (e.tag) {
                        case 26:
                        case 27:
                        case 5:
                            return G(e.type);
                        case 16:
                            return G("Lazy");
                        case 13:
                            return e.child !== t && null !== t ? G("Suspense Fallback") : G("Suspense");
                        case 19:
                            return G("SuspenseList");
                        case 0:
                        case 15:
                            return ee(e.type, !1);
                        case 11:
                            return ee(e.type.render, !1);
                        case 1:
                            return ee(e.type, !0);
                        case 31:
                            return G("Activity");
                        default:
                            return ""
                    }
                }

                function ne(e) {
                    try {
                        var t = "",
                            n = null;
                        do {
                            t += te(e, n), n = e, e = e.return
                        } while (e);
                        return t
                    } catch (sa) {
                        return "\nError generating stack: " + sa.message + "\n" + sa.stack
                    }
                }
                var re = Object.prototype.hasOwnProperty,
                    ae = r.unstable_scheduleCallback,
                    le = r.unstable_cancelCallback,
                    oe = r.unstable_shouldYield,
                    se = r.unstable_requestPaint,
                    ie = r.unstable_now,
                    ce = r.unstable_getCurrentPriorityLevel,
                    ue = r.unstable_ImmediatePriority,
                    de = r.unstable_UserBlockingPriority,
                    fe = r.unstable_NormalPriority,
                    pe = r.unstable_LowPriority,
                    me = r.unstable_IdlePriority,
                    he = r.log,
                    ge = r.unstable_setDisableYieldValue,
                    ye = null,
                    ve = null;

                function be(e) {
                    if ("function" === typeof he && ge(e), ve && "function" === typeof ve.setStrictMode) try {
                        ve.setStrictMode(ye, e)
                    } catch (t) {}
                }
                var xe = Math.clz32 ? Math.clz32 : function(e) {
                        return e >>>= 0, 0 === e ? 32 : 31 - (we(e) / ke | 0) | 0
                    },
                    we = Math.log,
                    ke = Math.LN2;
                var Se = 256,
                    Ne = 262144,
                    je = 4194304;

                function Ee(e) {
                    var t = 42 & e;
                    if (0 !== t) return t;
                    switch (e & -e) {
                        case 1:
                            return 1;
                        case 2:
                            return 2;
                        case 4:
                            return 4;
                        case 8:
                            return 8;
                        case 16:
                            return 16;
                        case 32:
                            return 32;
                        case 64:
                            return 64;
                        case 128:
                            return 128;
                        case 256:
                        case 512:
                        case 1024:
                        case 2048:
                        case 4096:
                        case 8192:
                        case 16384:
                        case 32768:
                        case 65536:
                        case 131072:
                            return 261888 & e;
                        case 262144:
                        case 524288:
                        case 1048576:
                        case 2097152:
                            return 3932160 & e;
                        case 4194304:
                        case 8388608:
                        case 16777216:
                        case 33554432:
                            return 62914560 & e;
                        case 67108864:
                            return 67108864;
                        case 134217728:
                            return 134217728;
                        case 268435456:
                            return 268435456;
                        case 536870912:
                            return 536870912;
                        case 1073741824:
                            return 0;
                        default:
                            return e
                    }
                }

                function Ce(e, t, n) {
                    var r = e.pendingLanes;
                    if (0 === r) return 0;
                    var a = 0,
                        l = e.suspendedLanes,
                        o = e.pingedLanes;
                    e = e.warmLanes;
                    var s = 134217727 & r;
                    return 0 !== s ? 0 !== (r = s & ~l) ? a = Ee(r) : 0 !== (o &= s) ? a = Ee(o) : n || 0 !== (n = s & ~e) && (a = Ee(n)) : 0 !== (s = r & ~l) ? a = Ee(s) : 0 !== o ? a = Ee(o) : n || 0 !== (n = r & ~e) && (a = Ee(n)), 0 === a ? 0 : 0 !== t && t !== a && 0 === (t & l) && ((l = a & -a) >= (n = t & -t) || 32 === l && 0 !== (4194048 & n)) ? t : a
                }

                function _e(e, t) {
                    return 0 === (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t)
                }

                function Te(e, t) {
                    switch (e) {
                        case 1:
                        case 2:
                        case 4:
                        case 8:
                        case 64:
                            return t + 250;
                        case 16:
                        case 32:
                        case 128:
                        case 256:
                        case 512:
                        case 1024:
                        case 2048:
                        case 4096:
                        case 8192:
                        case 16384:
                        case 32768:
                        case 65536:
                        case 131072:
                        case 262144:
                        case 524288:
                        case 1048576:
                        case 2097152:
                            return t + 5e3;
                        default:
                            return -1
                    }
                }

                function Re() {
                    var e = je;
                    return 0 === (62914560 & (je <<= 1)) && (je = 4194304), e
                }

                function Pe(e) {
                    for (var t = [], n = 0; 31 > n; n++) t.push(e);
                    return t
                }

                function Oe(e, t) {
                    e.pendingLanes |= t, 268435456 !== t && (e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0)
                }

                function Le(e, t, n) {
                    e.pendingLanes |= t, e.suspendedLanes &= ~t;
                    var r = 31 - xe(t);
                    e.entangledLanes |= t, e.entanglements[r] = 1073741824 | e.entanglements[r] | 261930 & n
                }

                function ze(e, t) {
                    var n = e.entangledLanes |= t;
                    for (e = e.entanglements; n;) {
                        var r = 31 - xe(n),
                            a = 1 << r;
                        a & t | e[r] & t && (e[r] |= t), n &= ~a
                    }
                }

                function Ae(e, t) {
                    var n = t & -t;
                    return 0 !== ((n = 0 !== (42 & n) ? 1 : Fe(n)) & (e.suspendedLanes | t)) ? 0 : n
                }

                function Fe(e) {
                    switch (e) {
                        case 2:
                            e = 1;
                            break;
                        case 8:
                            e = 4;
                            break;
                        case 32:
                            e = 16;
                            break;
                        case 256:
                        case 512:
                        case 1024:
                        case 2048:
                        case 4096:
                        case 8192:
                        case 16384:
                        case 32768:
                        case 65536:
                        case 131072:
                        case 262144:
                        case 524288:
                        case 1048576:
                        case 2097152:
                        case 4194304:
                        case 8388608:
                        case 16777216:
                        case 33554432:
                            e = 128;
                            break;
                        case 268435456:
                            e = 134217728;
                            break;
                        default:
                            e = 0
                    }
                    return e
                }

                function Me(e) {
                    return 2 < (e &= -e) ? 8 < e ? 0 !== (134217727 & e) ? 32 : 268435456 : 8 : 2
                }

                function De() {
                    var e = A.p;
                    return 0 !== e ? e : void 0 === (e = window.event) ? 32 : _f(e.type)
                }

                function Ue(e, t) {
                    var n = A.p;
                    try {
                        return A.p = e, t()
                    } finally {
                        A.p = n
                    }
                }
                var Ie = Math.random().toString(36).slice(2),
                    Be = "__reactFiber$" + Ie,
                    He = "__reactProps$" + Ie,
                    We = "__reactContainer$" + Ie,
                    qe = "__reactEvents$" + Ie,
                    Ve = "__reactListeners$" + Ie,
                    $e = "__reactHandles$" + Ie,
                    Qe = "__reactResources$" + Ie,
                    Ye = "__reactMarker$" + Ie;

                function Ke(e) {
                    delete e[Be], delete e[He], delete e[qe], delete e[Ve], delete e[$e]
                }

                function Je(e) {
                    var t = e[Be];
                    if (t) return t;
                    for (var n = e.parentNode; n;) {
                        if (t = n[We] || n[Be]) {
                            if (n = t.alternate, null !== t.child || null !== n && null !== n.child)
                                for (e = Md(e); null !== e;) {
                                    if (n = e[Be]) return n;
                                    e = Md(e)
                                }
                            return t
                        }
                        n = (e = n).parentNode
                    }
                    return null
                }

                function Xe(e) {
                    if (e = e[Be] || e[We]) {
                        var t = e.tag;
                        if (5 === t || 6 === t || 13 === t || 31 === t || 26 === t || 27 === t || 3 === t) return e
                    }
                    return null
                }

                function Ge(e) {
                    var t = e.tag;
                    if (5 === t || 26 === t || 27 === t || 6 === t) return e.stateNode;
                    throw Error(o(33))
                }

                function Ze(e) {
                    var t = e[Qe];
                    return t || (t = e[Qe] = {
                        hoistableStyles: new Map,
                        hoistableScripts: new Map
                    }), t
                }

                function et(e) {
                    e[Ye] = !0
                }
                var tt = new Set,
                    nt = {};

                function rt(e, t) {
                    at(e, t), at(e + "Capture", t)
                }

                function at(e, t) {
                    for (nt[e] = t, e = 0; e < t.length; e++) tt.add(t[e])
                }
                var lt = RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),
                    ot = {},
                    st = {};

                function it(e, t, n) {
                    if (a = t, re.call(st, a) || !re.call(ot, a) && (lt.test(a) ? st[a] = !0 : (ot[a] = !0, 0)))
                        if (null === n) e.removeAttribute(t);
                        else {
                            switch (typeof n) {
                                case "undefined":
                                case "function":
                                case "symbol":
                                    return void e.removeAttribute(t);
                                case "boolean":
                                    var r = t.toLowerCase().slice(0, 5);
                                    if ("data-" !== r && "aria-" !== r) return void e.removeAttribute(t)
                            }
                            e.setAttribute(t, "" + n)
                        }
                    var a
                }

                function ct(e, t, n) {
                    if (null === n) e.removeAttribute(t);
                    else {
                        switch (typeof n) {
                            case "undefined":
                            case "function":
                            case "symbol":
                            case "boolean":
                                return void e.removeAttribute(t)
                        }
                        e.setAttribute(t, "" + n)
                    }
                }

                function ut(e, t, n, r) {
                    if (null === r) e.removeAttribute(n);
                    else {
                        switch (typeof r) {
                            case "undefined":
                            case "function":
                            case "symbol":
                            case "boolean":
                                return void e.removeAttribute(n)
                        }
                        e.setAttributeNS(t, n, "" + r)
                    }
                }

                function dt(e) {
                    switch (typeof e) {
                        case "bigint":
                        case "boolean":
                        case "number":
                        case "string":
                        case "undefined":
                        case "object":
                            return e;
                        default:
                            return ""
                    }
                }

                function ft(e) {
                    var t = e.type;
                    return (e = e.nodeName) && "input" === e.toLowerCase() && ("checkbox" === t || "radio" === t)
                }

                function pt(e) {
                    if (!e._valueTracker) {
                        var t = ft(e) ? "checked" : "value";
                        e._valueTracker = function(e, t, n) {
                            var r = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
                            if (!e.hasOwnProperty(t) && "undefined" !== typeof r && "function" === typeof r.get && "function" === typeof r.set) {
                                var a = r.get,
                                    l = r.set;
                                return Object.defineProperty(e, t, {
                                    configurable: !0,
                                    get: function() {
                                        return a.call(this)
                                    },
                                    set: function(e) {
                                        n = "" + e, l.call(this, e)
                                    }
                                }), Object.defineProperty(e, t, {
                                    enumerable: r.enumerable
                                }), {
                                    getValue: function() {
                                        return n
                                    },
                                    setValue: function(e) {
                                        n = "" + e
                                    },
                                    stopTracking: function() {
                                        e._valueTracker = null, delete e[t]
                                    }
                                }
                            }
                        }(e, t, "" + e[t])
                    }
                }

                function mt(e) {
                    if (!e) return !1;
                    var t = e._valueTracker;
                    if (!t) return !0;
                    var n = t.getValue(),
                        r = "";
                    return e && (r = ft(e) ? e.checked ? "true" : "false" : e.value), (e = r) !== n && (t.setValue(e), !0)
                }

                function ht(e) {
                    if ("undefined" === typeof(e = e || ("undefined" !== typeof document ? document : void 0))) return null;
                    try {
                        return e.activeElement || e.body
                    } catch (t) {
                        return e.body
                    }
                }
                var gt = /[\n"\\]/g;

                function yt(e) {
                    return e.replace(gt, function(e) {
                        return "\\" + e.charCodeAt(0).toString(16) + " "
                    })
                }

                function vt(e, t, n, r, a, l, o, s) {
                    e.name = "", null != o && "function" !== typeof o && "symbol" !== typeof o && "boolean" !== typeof o ? e.type = o : e.removeAttribute("type"), null != t ? "number" === o ? (0 === t && "" === e.value || e.value != t) && (e.value = "" + dt(t)) : e.value !== "" + dt(t) && (e.value = "" + dt(t)) : "submit" !== o && "reset" !== o || e.removeAttribute("value"), null != t ? xt(e, o, dt(t)) : null != n ? xt(e, o, dt(n)) : null != r && e.removeAttribute("value"), null == a && null != l && (e.defaultChecked = !!l), null != a && (e.checked = a && "function" !== typeof a && "symbol" !== typeof a), null != s && "function" !== typeof s && "symbol" !== typeof s && "boolean" !== typeof s ? e.name = "" + dt(s) : e.removeAttribute("name")
                }

                function bt(e, t, n, r, a, l, o, s) {
                    if (null != l && "function" !== typeof l && "symbol" !== typeof l && "boolean" !== typeof l && (e.type = l), null != t || null != n) {
                        if (!("submit" !== l && "reset" !== l || void 0 !== t && null !== t)) return void pt(e);
                        n = null != n ? "" + dt(n) : "", t = null != t ? "" + dt(t) : n, s || t === e.value || (e.value = t), e.defaultValue = t
                    }
                    r = "function" !== typeof(r = null != r ? r : a) && "symbol" !== typeof r && !!r, e.checked = s ? e.checked : !!r, e.defaultChecked = !!r, null != o && "function" !== typeof o && "symbol" !== typeof o && "boolean" !== typeof o && (e.name = o), pt(e)
                }

                function xt(e, t, n) {
                    "number" === t && ht(e.ownerDocument) === e || e.defaultValue === "" + n || (e.defaultValue = "" + n)
                }

                function wt(e, t, n, r) {
                    if (e = e.options, t) {
                        t = {};
                        for (var a = 0; a < n.length; a++) t["$" + n[a]] = !0;
                        for (n = 0; n < e.length; n++) a = t.hasOwnProperty("$" + e[n].value), e[n].selected !== a && (e[n].selected = a), a && r && (e[n].defaultSelected = !0)
                    } else {
                        for (n = "" + dt(n), t = null, a = 0; a < e.length; a++) {
                            if (e[a].value === n) return e[a].selected = !0, void(r && (e[a].defaultSelected = !0));
                            null !== t || e[a].disabled || (t = e[a])
                        }
                        null !== t && (t.selected = !0)
                    }
                }

                function kt(e, t, n) {
                    null == t || ((t = "" + dt(t)) !== e.value && (e.value = t), null != n) ? e.defaultValue = null != n ? "" + dt(n) : "" : e.defaultValue !== t && (e.defaultValue = t)
                }

                function St(e, t, n, r) {
                    if (null == t) {
                        if (null != r) {
                            if (null != n) throw Error(o(92));
                            if (L(r)) {
                                if (1 < r.length) throw Error(o(93));
                                r = r[0]
                            }
                            n = r
                        }
                        null == n && (n = ""), t = n
                    }
                    n = dt(t), e.defaultValue = n, (r = e.textContent) === n && "" !== r && null !== r && (e.value = r), pt(e)
                }

                function Nt(e, t) {
                    if (t) {
                        var n = e.firstChild;
                        if (n && n === e.lastChild && 3 === n.nodeType) return void(n.nodeValue = t)
                    }
                    e.textContent = t
                }
                var jt = new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));

                function Et(e, t, n) {
                    var r = 0 === t.indexOf("--");
                    null == n || "boolean" === typeof n || "" === n ? r ? e.setProperty(t, "") : "float" === t ? e.cssFloat = "" : e[t] = "" : r ? e.setProperty(t, n) : "number" !== typeof n || 0 === n || jt.has(t) ? "float" === t ? e.cssFloat = n : e[t] = ("" + n).trim() : e[t] = n + "px"
                }

                function Ct(e, t, n) {
                    if (null != t && "object" !== typeof t) throw Error(o(62));
                    if (e = e.style, null != n) {
                        for (var r in n) !n.hasOwnProperty(r) || null != t && t.hasOwnProperty(r) || (0 === r.indexOf("--") ? e.setProperty(r, "") : "float" === r ? e.cssFloat = "" : e[r] = "");
                        for (var a in t) r = t[a], t.hasOwnProperty(a) && n[a] !== r && Et(e, a, r)
                    } else
                        for (var l in t) t.hasOwnProperty(l) && Et(e, l, t[l])
                }

                function _t(e) {
                    if (-1 === e.indexOf("-")) return !1;
                    switch (e) {
                        case "annotation-xml":
                        case "color-profile":
                        case "font-face":
                        case "font-face-src":
                        case "font-face-uri":
                        case "font-face-format":
                        case "font-face-name":
                        case "missing-glyph":
                            return !1;
                        default:
                            return !0
                    }
                }
                var Tt = new Map([
                        ["acceptCharset", "accept-charset"],
                        ["htmlFor", "for"],
                        ["httpEquiv", "http-equiv"],
                        ["crossOrigin", "crossorigin"],
                        ["accentHeight", "accent-height"],
                        ["alignmentBaseline", "alignment-baseline"],
                        ["arabicForm", "arabic-form"],
                        ["baselineShift", "baseline-shift"],
                        ["capHeight", "cap-height"],
                        ["clipPath", "clip-path"],
                        ["clipRule", "clip-rule"],
                        ["colorInterpolation", "color-interpolation"],
                        ["colorInterpolationFilters", "color-interpolation-filters"],
                        ["colorProfile", "color-profile"],
                        ["colorRendering", "color-rendering"],
                        ["dominantBaseline", "dominant-baseline"],
                        ["enableBackground", "enable-background"],
                        ["fillOpacity", "fill-opacity"],
                        ["fillRule", "fill-rule"],
                        ["floodColor", "flood-color"],
                        ["floodOpacity", "flood-opacity"],
                        ["fontFamily", "font-family"],
                        ["fontSize", "font-size"],
                        ["fontSizeAdjust", "font-size-adjust"],
                        ["fontStretch", "font-stretch"],
                        ["fontStyle", "font-style"],
                        ["fontVariant", "font-variant"],
                        ["fontWeight", "font-weight"],
                        ["glyphName", "glyph-name"],
                        ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
                        ["glyphOrientationVertical", "glyph-orientation-vertical"],
                        ["horizAdvX", "horiz-adv-x"],
                        ["horizOriginX", "horiz-origin-x"],
                        ["imageRendering", "image-rendering"],
                        ["letterSpacing", "letter-spacing"],
                        ["lightingColor", "lighting-color"],
                        ["markerEnd", "marker-end"],
                        ["markerMid", "marker-mid"],
                        ["markerStart", "marker-start"],
                        ["overlinePosition", "overline-position"],
                        ["overlineThickness", "overline-thickness"],
                        ["paintOrder", "paint-order"],
                        ["panose-1", "panose-1"],
                        ["pointerEvents", "pointer-events"],
                        ["renderingIntent", "rendering-intent"],
                        ["shapeRendering", "shape-rendering"],
                        ["stopColor", "stop-color"],
                        ["stopOpacity", "stop-opacity"],
                        ["strikethroughPosition", "strikethrough-position"],
                        ["strikethroughThickness", "strikethrough-thickness"],
                        ["strokeDasharray", "stroke-dasharray"],
                        ["strokeDashoffset", "stroke-dashoffset"],
                        ["strokeLinecap", "stroke-linecap"],
                        ["strokeLinejoin", "stroke-linejoin"],
                        ["strokeMiterlimit", "stroke-miterlimit"],
                        ["strokeOpacity", "stroke-opacity"],
                        ["strokeWidth", "stroke-width"],
                        ["textAnchor", "text-anchor"],
                        ["textDecoration", "text-decoration"],
                        ["textRendering", "text-rendering"],
                        ["transformOrigin", "transform-origin"],
                        ["underlinePosition", "underline-position"],
                        ["underlineThickness", "underline-thickness"],
                        ["unicodeBidi", "unicode-bidi"],
                        ["unicodeRange", "unicode-range"],
                        ["unitsPerEm", "units-per-em"],
                        ["vAlphabetic", "v-alphabetic"],
                        ["vHanging", "v-hanging"],
                        ["vIdeographic", "v-ideographic"],
                        ["vMathematical", "v-mathematical"],
                        ["vectorEffect", "vector-effect"],
                        ["vertAdvY", "vert-adv-y"],
                        ["vertOriginX", "vert-origin-x"],
                        ["vertOriginY", "vert-origin-y"],
                        ["wordSpacing", "word-spacing"],
                        ["writingMode", "writing-mode"],
                        ["xmlnsXlink", "xmlns:xlink"],
                        ["xHeight", "x-height"]
                    ]),
                    Rt = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;

                function Pt(e) {
                    return Rt.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e
                }

                function Ot() {}
                var Lt = null;

                function zt(e) {
                    return (e = e.target || e.srcElement || window).correspondingUseElement && (e = e.correspondingUseElement), 3 === e.nodeType ? e.parentNode : e
                }
                var At = null,
                    Ft = null;

                function Mt(e) {
                    var t = Xe(e);
                    if (t && (e = t.stateNode)) {
                        var n = e[He] || null;
                        e: switch (e = t.stateNode, t.type) {
                            case "input":
                                if (vt(e, n.value, n.defaultValue, n.defaultValue, n.checked, n.defaultChecked, n.type, n.name), t = n.name, "radio" === n.type && null != t) {
                                    for (n = e; n.parentNode;) n = n.parentNode;
                                    for (n = n.querySelectorAll('input[name="' + yt("" + t) + '"][type="radio"]'), t = 0; t < n.length; t++) {
                                        var r = n[t];
                                        if (r !== e && r.form === e.form) {
                                            var a = r[He] || null;
                                            if (!a) throw Error(o(90));
                                            vt(r, a.value, a.defaultValue, a.defaultValue, a.checked, a.defaultChecked, a.type, a.name)
                                        }
                                    }
                                    for (t = 0; t < n.length; t++)(r = n[t]).form === e.form && mt(r)
                                }
                                break e;
                            case "textarea":
                                kt(e, n.value, n.defaultValue);
                                break e;
                            case "select":
                                null != (t = n.value) && wt(e, !!n.multiple, t, !1)
                        }
                    }
                }
                var Dt = !1;

                function Ut(e, t, n) {
                    if (Dt) return e(t, n);
                    Dt = !0;
                    try {
                        return e(t)
                    } finally {
                        if (Dt = !1, (null !== At || null !== Ft) && (eu(), At && (t = At, e = Ft, Ft = At = null, Mt(t), e)))
                            for (t = 0; t < e.length; t++) Mt(e[t])
                    }
                }

                function It(e, t) {
                    var n = e.stateNode;
                    if (null === n) return null;
                    var r = n[He] || null;
                    if (null === r) return null;
                    n = r[t];
                    e: switch (t) {
                        case "onClick":
                        case "onClickCapture":
                        case "onDoubleClick":
                        case "onDoubleClickCapture":
                        case "onMouseDown":
                        case "onMouseDownCapture":
                        case "onMouseMove":
                        case "onMouseMoveCapture":
                        case "onMouseUp":
                        case "onMouseUpCapture":
                        case "onMouseEnter":
                            (r = !r.disabled) || (r = !("button" === (e = e.type) || "input" === e || "select" === e || "textarea" === e)), e = !r;
                            break e;
                        default:
                            e = !1
                    }
                    if (e) return null;
                    if (n && "function" !== typeof n) throw Error(o(231, t, typeof n));
                    return n
                }
                var Bt = !("undefined" === typeof window || "undefined" === typeof window.document || "undefined" === typeof window.document.createElement),
                    Ht = !1;
                if (Bt) try {
                    var Wt = {};
                    Object.defineProperty(Wt, "passive", {
                        get: function() {
                            Ht = !0
                        }
                    }), window.addEventListener("test", Wt, Wt), window.removeEventListener("test", Wt, Wt)
                } catch (Zf) {
                    Ht = !1
                }
                var qt = null,
                    Vt = null,
                    $t = null;

                function Qt() {
                    if ($t) return $t;
                    var e, t, n = Vt,
                        r = n.length,
                        a = "value" in qt ? qt.value : qt.textContent,
                        l = a.length;
                    for (e = 0; e < r && n[e] === a[e]; e++);
                    var o = r - e;
                    for (t = 1; t <= o && n[r - t] === a[l - t]; t++);
                    return $t = a.slice(e, 1 < t ? 1 - t : void 0)
                }

                function Yt(e) {
                    var t = e.keyCode;
                    return "charCode" in e ? 0 === (e = e.charCode) && 13 === t && (e = 13) : e = t, 10 === e && (e = 13), 32 <= e || 13 === e ? e : 0
                }

                function Kt() {
                    return !0
                }

                function Jt() {
                    return !1
                }

                function Xt(e) {
                    function t(t, n, r, a, l) {
                        for (var o in this._reactName = t, this._targetInst = r, this.type = n, this.nativeEvent = a, this.target = l, this.currentTarget = null, e) e.hasOwnProperty(o) && (t = e[o], this[o] = t ? t(a) : a[o]);
                        return this.isDefaultPrevented = (null != a.defaultPrevented ? a.defaultPrevented : !1 === a.returnValue) ? Kt : Jt, this.isPropagationStopped = Jt, this
                    }
                    return p(t.prototype, {
                        preventDefault: function() {
                            this.defaultPrevented = !0;
                            var e = this.nativeEvent;
                            e && (e.preventDefault ? e.preventDefault() : "unknown" !== typeof e.returnValue && (e.returnValue = !1), this.isDefaultPrevented = Kt)
                        },
                        stopPropagation: function() {
                            var e = this.nativeEvent;
                            e && (e.stopPropagation ? e.stopPropagation() : "unknown" !== typeof e.cancelBubble && (e.cancelBubble = !0), this.isPropagationStopped = Kt)
                        },
                        persist: function() {},
                        isPersistent: Kt
                    }), t
                }
                var Gt, Zt, en, tn = {
                        eventPhase: 0,
                        bubbles: 0,
                        cancelable: 0,
                        timeStamp: function(e) {
                            return e.timeStamp || Date.now()
                        },
                        defaultPrevented: 0,
                        isTrusted: 0
                    },
                    nn = Xt(tn),
                    rn = p({}, tn, {
                        view: 0,
                        detail: 0
                    }),
                    an = Xt(rn),
                    ln = p({}, rn, {
                        screenX: 0,
                        screenY: 0,
                        clientX: 0,
                        clientY: 0,
                        pageX: 0,
                        pageY: 0,
                        ctrlKey: 0,
                        shiftKey: 0,
                        altKey: 0,
                        metaKey: 0,
                        getModifierState: yn,
                        button: 0,
                        buttons: 0,
                        relatedTarget: function(e) {
                            return void 0 === e.relatedTarget ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
                        },
                        movementX: function(e) {
                            return "movementX" in e ? e.movementX : (e !== en && (en && "mousemove" === e.type ? (Gt = e.screenX - en.screenX, Zt = e.screenY - en.screenY) : Zt = Gt = 0, en = e), Gt)
                        },
                        movementY: function(e) {
                            return "movementY" in e ? e.movementY : Zt
                        }
                    }),
                    on = Xt(ln),
                    sn = Xt(p({}, ln, {
                        dataTransfer: 0
                    })),
                    cn = Xt(p({}, rn, {
                        relatedTarget: 0
                    })),
                    un = Xt(p({}, tn, {
                        animationName: 0,
                        elapsedTime: 0,
                        pseudoElement: 0
                    })),
                    dn = Xt(p({}, tn, {
                        clipboardData: function(e) {
                            return "clipboardData" in e ? e.clipboardData : window.clipboardData
                        }
                    })),
                    fn = Xt(p({}, tn, {
                        data: 0
                    })),
                    pn = {
                        Esc: "Escape",
                        Spacebar: " ",
                        Left: "ArrowLeft",
                        Up: "ArrowUp",
                        Right: "ArrowRight",
                        Down: "ArrowDown",
                        Del: "Delete",
                        Win: "OS",
                        Menu: "ContextMenu",
                        Apps: "ContextMenu",
                        Scroll: "ScrollLock",
                        MozPrintableKey: "Unidentified"
                    },
                    mn = {
                        8: "Backspace",
                        9: "Tab",
                        12: "Clear",
                        13: "Enter",
                        16: "Shift",
                        17: "Control",
                        18: "Alt",
                        19: "Pause",
                        20: "CapsLock",
                        27: "Escape",
                        32: " ",
                        33: "PageUp",
                        34: "PageDown",
                        35: "End",
                        36: "Home",
                        37: "ArrowLeft",
                        38: "ArrowUp",
                        39: "ArrowRight",
                        40: "ArrowDown",
                        45: "Insert",
                        46: "Delete",
                        112: "F1",
                        113: "F2",
                        114: "F3",
                        115: "F4",
                        116: "F5",
                        117: "F6",
                        118: "F7",
                        119: "F8",
                        120: "F9",
                        121: "F10",
                        122: "F11",
                        123: "F12",
                        144: "NumLock",
                        145: "ScrollLock",
                        224: "Meta"
                    },
                    hn = {
                        Alt: "altKey",
                        Control: "ctrlKey",
                        Meta: "metaKey",
                        Shift: "shiftKey"
                    };

                function gn(e) {
                    var t = this.nativeEvent;
                    return t.getModifierState ? t.getModifierState(e) : !!(e = hn[e]) && !!t[e]
                }

                function yn() {
                    return gn
                }
                var vn = Xt(p({}, rn, {
                        key: function(e) {
                            if (e.key) {
                                var t = pn[e.key] || e.key;
                                if ("Unidentified" !== t) return t
                            }
                            return "keypress" === e.type ? 13 === (e = Yt(e)) ? "Enter" : String.fromCharCode(e) : "keydown" === e.type || "keyup" === e.type ? mn[e.keyCode] || "Unidentified" : ""
                        },
                        code: 0,
                        location: 0,
                        ctrlKey: 0,
                        shiftKey: 0,
                        altKey: 0,
                        metaKey: 0,
                        repeat: 0,
                        locale: 0,
                        getModifierState: yn,
                        charCode: function(e) {
                            return "keypress" === e.type ? Yt(e) : 0
                        },
                        keyCode: function(e) {
                            return "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0
                        },
                        which: function(e) {
                            return "keypress" === e.type ? Yt(e) : "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0
                        }
                    })),
                    bn = Xt(p({}, ln, {
                        pointerId: 0,
                        width: 0,
                        height: 0,
                        pressure: 0,
                        tangentialPressure: 0,
                        tiltX: 0,
                        tiltY: 0,
                        twist: 0,
                        pointerType: 0,
                        isPrimary: 0
                    })),
                    xn = Xt(p({}, rn, {
                        touches: 0,
                        targetTouches: 0,
                        changedTouches: 0,
                        altKey: 0,
                        metaKey: 0,
                        ctrlKey: 0,
                        shiftKey: 0,
                        getModifierState: yn
                    })),
                    wn = Xt(p({}, tn, {
                        propertyName: 0,
                        elapsedTime: 0,
                        pseudoElement: 0
                    })),
                    kn = Xt(p({}, ln, {
                        deltaX: function(e) {
                            return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0
                        },
                        deltaY: function(e) {
                            return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0
                        },
                        deltaZ: 0,
                        deltaMode: 0
                    })),
                    Sn = Xt(p({}, tn, {
                        newState: 0,
                        oldState: 0
                    })),
                    Nn = [9, 13, 27, 32],
                    jn = Bt && "CompositionEvent" in window,
                    En = null;
                Bt && "documentMode" in document && (En = document.documentMode);
                var Cn = Bt && "TextEvent" in window && !En,
                    _n = Bt && (!jn || En && 8 < En && 11 >= En),
                    Tn = String.fromCharCode(32),
                    Rn = !1;

                function Pn(e, t) {
                    switch (e) {
                        case "keyup":
                            return -1 !== Nn.indexOf(t.keyCode);
                        case "keydown":
                            return 229 !== t.keyCode;
                        case "keypress":
                        case "mousedown":
                        case "focusout":
                            return !0;
                        default:
                            return !1
                    }
                }

                function On(e) {
                    return "object" === typeof(e = e.detail) && "data" in e ? e.data : null
                }
                var Ln = !1;
                var zn = {
                    color: !0,
                    date: !0,
                    datetime: !0,
                    "datetime-local": !0,
                    email: !0,
                    month: !0,
                    number: !0,
                    password: !0,
                    range: !0,
                    search: !0,
                    tel: !0,
                    text: !0,
                    time: !0,
                    url: !0,
                    week: !0
                };

                function An(e) {
                    var t = e && e.nodeName && e.nodeName.toLowerCase();
                    return "input" === t ? !!zn[e.type] : "textarea" === t
                }

                function Fn(e, t, n, r) {
                    At ? Ft ? Ft.push(r) : Ft = [r] : At = r, 0 < (t = ad(t, "onChange")).length && (n = new nn("onChange", "change", null, n, r), e.push({
                        event: n,
                        listeners: t
                    }))
                }
                var Mn = null,
                    Dn = null;

                function Un(e) {
                    Ju(e, 0)
                }

                function In(e) {
                    if (mt(Ge(e))) return e
                }

                function Bn(e, t) {
                    if ("change" === e) return t
                }
                var Hn = !1;
                if (Bt) {
                    var Wn;
                    if (Bt) {
                        var qn = "oninput" in document;
                        if (!qn) {
                            var Vn = document.createElement("div");
                            Vn.setAttribute("oninput", "return;"), qn = "function" === typeof Vn.oninput
                        }
                        Wn = qn
                    } else Wn = !1;
                    Hn = Wn && (!document.documentMode || 9 < document.documentMode)
                }

                function $n() {
                    Mn && (Mn.detachEvent("onpropertychange", Qn), Dn = Mn = null)
                }

                function Qn(e) {
                    if ("value" === e.propertyName && In(Dn)) {
                        var t = [];
                        Fn(t, Dn, e, zt(e)), Ut(Un, t)
                    }
                }

                function Yn(e, t, n) {
                    "focusin" === e ? ($n(), Dn = n, (Mn = t).attachEvent("onpropertychange", Qn)) : "focusout" === e && $n()
                }

                function Kn(e) {
                    if ("selectionchange" === e || "keyup" === e || "keydown" === e) return In(Dn)
                }

                function Jn(e, t) {
                    if ("click" === e) return In(t)
                }

                function Xn(e, t) {
                    if ("input" === e || "change" === e) return In(t)
                }
                var Gn = "function" === typeof Object.is ? Object.is : function(e, t) {
                    return e === t && (0 !== e || 1 / e === 1 / t) || e !== e && t !== t
                };

                function Zn(e, t) {
                    if (Gn(e, t)) return !0;
                    if ("object" !== typeof e || null === e || "object" !== typeof t || null === t) return !1;
                    var n = Object.keys(e),
                        r = Object.keys(t);
                    if (n.length !== r.length) return !1;
                    for (r = 0; r < n.length; r++) {
                        var a = n[r];
                        if (!re.call(t, a) || !Gn(e[a], t[a])) return !1
                    }
                    return !0
                }

                function er(e) {
                    for (; e && e.firstChild;) e = e.firstChild;
                    return e
                }

                function tr(e, t) {
                    var n, r = er(e);
                    for (e = 0; r;) {
                        if (3 === r.nodeType) {
                            if (n = e + r.textContent.length, e <= t && n >= t) return {
                                node: r,
                                offset: t - e
                            };
                            e = n
                        }
                        e: {
                            for (; r;) {
                                if (r.nextSibling) {
                                    r = r.nextSibling;
                                    break e
                                }
                                r = r.parentNode
                            }
                            r = void 0
                        }
                        r = er(r)
                    }
                }

                function nr(e, t) {
                    return !(!e || !t) && (e === t || (!e || 3 !== e.nodeType) && (t && 3 === t.nodeType ? nr(e, t.parentNode) : "contains" in e ? e.contains(t) : !!e.compareDocumentPosition && !!(16 & e.compareDocumentPosition(t))))
                }

                function rr(e) {
                    for (var t = ht((e = null != e && null != e.ownerDocument && null != e.ownerDocument.defaultView ? e.ownerDocument.defaultView : window).document); t instanceof e.HTMLIFrameElement;) {
                        try {
                            var n = "string" === typeof t.contentWindow.location.href
                        } catch (r) {
                            n = !1
                        }
                        if (!n) break;
                        t = ht((e = t.contentWindow).document)
                    }
                    return t
                }

                function ar(e) {
                    var t = e && e.nodeName && e.nodeName.toLowerCase();
                    return t && ("input" === t && ("text" === e.type || "search" === e.type || "tel" === e.type || "url" === e.type || "password" === e.type) || "textarea" === t || "true" === e.contentEditable)
                }
                var lr = Bt && "documentMode" in document && 11 >= document.documentMode,
                    or = null,
                    sr = null,
                    ir = null,
                    cr = !1;

                function ur(e, t, n) {
                    var r = n.window === n ? n.document : 9 === n.nodeType ? n : n.ownerDocument;
                    cr || null == or || or !== ht(r) || ("selectionStart" in (r = or) && ar(r) ? r = {
                        start: r.selectionStart,
                        end: r.selectionEnd
                    } : r = {
                        anchorNode: (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection()).anchorNode,
                        anchorOffset: r.anchorOffset,
                        focusNode: r.focusNode,
                        focusOffset: r.focusOffset
                    }, ir && Zn(ir, r) || (ir = r, 0 < (r = ad(sr, "onSelect")).length && (t = new nn("onSelect", "select", null, t, n), e.push({
                        event: t,
                        listeners: r
                    }), t.target = or)))
                }

                function dr(e, t) {
                    var n = {};
                    return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n
                }
                var fr = {
                        animationend: dr("Animation", "AnimationEnd"),
                        animationiteration: dr("Animation", "AnimationIteration"),
                        animationstart: dr("Animation", "AnimationStart"),
                        transitionrun: dr("Transition", "TransitionRun"),
                        transitionstart: dr("Transition", "TransitionStart"),
                        transitioncancel: dr("Transition", "TransitionCancel"),
                        transitionend: dr("Transition", "TransitionEnd")
                    },
                    pr = {},
                    mr = {};

                function hr(e) {
                    if (pr[e]) return pr[e];
                    if (!fr[e]) return e;
                    var t, n = fr[e];
                    for (t in n)
                        if (n.hasOwnProperty(t) && t in mr) return pr[e] = n[t];
                    return e
                }
                Bt && (mr = document.createElement("div").style, "AnimationEvent" in window || (delete fr.animationend.animation, delete fr.animationiteration.animation, delete fr.animationstart.animation), "TransitionEvent" in window || delete fr.transitionend.transition);
                var gr = hr("animationend"),
                    yr = hr("animationiteration"),
                    vr = hr("animationstart"),
                    br = hr("transitionrun"),
                    xr = hr("transitionstart"),
                    wr = hr("transitioncancel"),
                    kr = hr("transitionend"),
                    Sr = new Map,
                    Nr = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");

                function jr(e, t) {
                    Sr.set(e, t), rt(t, [e])
                }
                Nr.push("scrollEnd");
                var Er = "function" === typeof reportError ? reportError : function(e) {
                        if ("object" === typeof window && "function" === typeof window.ErrorEvent) {
                            var t = new window.ErrorEvent("error", {
                                bubbles: !0,
                                cancelable: !0,
                                message: "object" === typeof e && null !== e && "string" === typeof e.message ? String(e.message) : String(e),
                                error: e
                            });
                            if (!window.dispatchEvent(t)) return
                        } else if ("object" === typeof process && "function" === typeof process.emit) return void process.emit("uncaughtException", e);
                        console.error(e)
                    },
                    Cr = [],
                    _r = 0,
                    Tr = 0;

                function Rr() {
                    for (var e = _r, t = Tr = _r = 0; t < e;) {
                        var n = Cr[t];
                        Cr[t++] = null;
                        var r = Cr[t];
                        Cr[t++] = null;
                        var a = Cr[t];
                        Cr[t++] = null;
                        var l = Cr[t];
                        if (Cr[t++] = null, null !== r && null !== a) {
                            var o = r.pending;
                            null === o ? a.next = a : (a.next = o.next, o.next = a), r.pending = a
                        }
                        0 !== l && zr(n, a, l)
                    }
                }

                function Pr(e, t, n, r) {
                    Cr[_r++] = e, Cr[_r++] = t, Cr[_r++] = n, Cr[_r++] = r, Tr |= r, e.lanes |= r, null !== (e = e.alternate) && (e.lanes |= r)
                }

                function Or(e, t, n, r) {
                    return Pr(e, t, n, r), Ar(e)
                }

                function Lr(e, t) {
                    return Pr(e, null, null, t), Ar(e)
                }

                function zr(e, t, n) {
                    e.lanes |= n;
                    var r = e.alternate;
                    null !== r && (r.lanes |= n);
                    for (var a = !1, l = e.return; null !== l;) l.childLanes |= n, null !== (r = l.alternate) && (r.childLanes |= n), 22 === l.tag && (null === (e = l.stateNode) || 1 & e._visibility || (a = !0)), e = l, l = l.return;
                    return 3 === e.tag ? (l = e.stateNode, a && null !== t && (a = 31 - xe(n), null === (r = (e = l.hiddenUpdates)[a]) ? e[a] = [t] : r.push(t), t.lane = 536870912 | n), l) : null
                }

                function Ar(e) {
                    if (50 < Vc) throw Vc = 0, $c = null, Error(o(185));
                    for (var t = e.return; null !== t;) t = (e = t).return;
                    return 3 === e.tag ? e.stateNode : null
                }
                var Fr = {};

                function Mr(e, t, n, r) {
                    this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null
                }

                function Dr(e, t, n, r) {
                    return new Mr(e, t, n, r)
                }

                function Ur(e) {
                    return !(!(e = e.prototype) || !e.isReactComponent)
                }

                function Ir(e, t) {
                    var n = e.alternate;
                    return null === n ? ((n = Dr(e.tag, t, e.key, e.mode)).elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = 65011712 & e.flags, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = null === t ? null : {
                        lanes: t.lanes,
                        firstContext: t.firstContext
                    }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n.refCleanup = e.refCleanup, n
                }

                function Br(e, t) {
                    e.flags &= 65011714;
                    var n = e.alternate;
                    return null === n ? (e.childLanes = 0, e.lanes = t, e.child = null, e.subtreeFlags = 0, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null) : (e.childLanes = n.childLanes, e.lanes = n.lanes, e.child = n.child, e.subtreeFlags = 0, e.deletions = null, e.memoizedProps = n.memoizedProps, e.memoizedState = n.memoizedState, e.updateQueue = n.updateQueue, e.type = n.type, t = n.dependencies, e.dependencies = null === t ? null : {
                        lanes: t.lanes,
                        firstContext: t.firstContext
                    }), e
                }

                function Hr(e, t, n, r, a, l) {
                    var s = 0;
                    if (r = e, "function" === typeof e) Ur(e) && (s = 1);
                    else if ("string" === typeof e) s = function(e, t, n) {
                        if (1 === n || null != t.itemProp) return !1;
                        switch (e) {
                            case "meta":
                            case "title":
                                return !0;
                            case "style":
                                if ("string" !== typeof t.precedence || "string" !== typeof t.href || "" === t.href) break;
                                return !0;
                            case "link":
                                if ("string" !== typeof t.rel || "string" !== typeof t.href || "" === t.href || t.onLoad || t.onError) break;
                                return "stylesheet" !== t.rel || (e = t.disabled, "string" === typeof t.precedence && null == e);
                            case "script":
                                if (t.async && "function" !== typeof t.async && "symbol" !== typeof t.async && !t.onLoad && !t.onError && t.src && "string" === typeof t.src) return !0
                        }
                        return !1
                    }(e, n, q.current) ? 26 : "html" === e || "head" === e || "body" === e ? 27 : 5;
                    else e: switch (e) {
                        case C:
                            return (e = Dr(31, n, t, a)).elementType = C, e.lanes = l, e;
                        case y:
                            return Wr(n.children, a, l, t);
                        case v:
                            s = 8, a |= 24;
                            break;
                        case b:
                            return (e = Dr(12, n, t, 2 | a)).elementType = b, e.lanes = l, e;
                        case S:
                            return (e = Dr(13, n, t, a)).elementType = S, e.lanes = l, e;
                        case N:
                            return (e = Dr(19, n, t, a)).elementType = N, e.lanes = l, e;
                        default:
                            if ("object" === typeof e && null !== e) switch (e.$$typeof) {
                                case w:
                                    s = 10;
                                    break e;
                                case x:
                                    s = 9;
                                    break e;
                                case k:
                                    s = 11;
                                    break e;
                                case j:
                                    s = 14;
                                    break e;
                                case E:
                                    s = 16, r = null;
                                    break e
                            }
                            s = 29, n = Error(o(130, null === e ? "null" : typeof e, "")), r = null
                    }
                    return (t = Dr(s, n, t, a)).elementType = e, t.type = r, t.lanes = l, t
                }

                function Wr(e, t, n, r) {
                    return (e = Dr(7, e, r, t)).lanes = n, e
                }

                function qr(e, t, n) {
                    return (e = Dr(6, e, null, t)).lanes = n, e
                }

                function Vr(e) {
                    var t = Dr(18, null, null, 0);
                    return t.stateNode = e, t
                }

                function $r(e, t, n) {
                    return (t = Dr(4, null !== e.children ? e.children : [], e.key, t)).lanes = n, t.stateNode = {
                        containerInfo: e.containerInfo,
                        pendingChildren: null,
                        implementation: e.implementation
                    }, t
                }
                var Qr = new WeakMap;

                function Yr(e, t) {
                    if ("object" === typeof e && null !== e) {
                        var n = Qr.get(e);
                        return void 0 !== n ? n : (t = {
                            value: e,
                            source: t,
                            stack: ne(t)
                        }, Qr.set(e, t), t)
                    }
                    return {
                        value: e,
                        source: t,
                        stack: ne(t)
                    }
                }
                var Kr = [],
                    Jr = 0,
                    Xr = null,
                    Gr = 0,
                    Zr = [],
                    ea = 0,
                    ta = null,
                    na = 1,
                    ra = "";

                function aa(e, t) {
                    Kr[Jr++] = Gr, Kr[Jr++] = Xr, Xr = e, Gr = t
                }

                function la(e, t, n) {
                    Zr[ea++] = na, Zr[ea++] = ra, Zr[ea++] = ta, ta = e;
                    var r = na;
                    e = ra;
                    var a = 32 - xe(r) - 1;
                    r &= ~(1 << a), n += 1;
                    var l = 32 - xe(t) + a;
                    if (30 < l) {
                        var o = a - a % 5;
                        l = (r & (1 << o) - 1).toString(32), r >>= o, a -= o, na = 1 << 32 - xe(t) + a | n << a | r, ra = l + e
                    } else na = 1 << l | n << a | r, ra = e
                }

                function oa(e) {
                    null !== e.return && (aa(e, 1), la(e, 1, 0))
                }

                function ia(e) {
                    for (; e === Xr;) Xr = Kr[--Jr], Kr[Jr] = null, Gr = Kr[--Jr], Kr[Jr] = null;
                    for (; e === ta;) ta = Zr[--ea], Zr[ea] = null, ra = Zr[--ea], Zr[ea] = null, na = Zr[--ea], Zr[ea] = null
                }

                function ca(e, t) {
                    Zr[ea++] = na, Zr[ea++] = ra, Zr[ea++] = ta, na = t.id, ra = t.overflow, ta = e
                }
                var ua = null,
                    da = null,
                    fa = !1,
                    pa = null,
                    ma = !1,
                    ha = Error(o(519));

                function ga(e) {
                    throw ka(Yr(Error(o(418, 1 < arguments.length && void 0 !== arguments[1] && arguments[1] ? "text" : "HTML", "")), e)), ha
                }

                function ya(e) {
                    var t = e.stateNode,
                        n = e.type,
                        r = e.memoizedProps;
                    switch (t[Be] = e, t[He] = r, n) {
                        case "dialog":
                            Xu("cancel", t), Xu("close", t);
                            break;
                        case "iframe":
                        case "object":
                        case "embed":
                            Xu("load", t);
                            break;
                        case "video":
                        case "audio":
                            for (n = 0; n < Yu.length; n++) Xu(Yu[n], t);
                            break;
                        case "source":
                            Xu("error", t);
                            break;
                        case "img":
                        case "image":
                        case "link":
                            Xu("error", t), Xu("load", t);
                            break;
                        case "details":
                            Xu("toggle", t);
                            break;
                        case "input":
                            Xu("invalid", t), bt(t, r.value, r.defaultValue, r.checked, r.defaultChecked, r.type, r.name, !0);
                            break;
                        case "select":
                            Xu("invalid", t);
                            break;
                        case "textarea":
                            Xu("invalid", t), St(t, r.value, r.defaultValue, r.children)
                    }
                    "string" !== typeof(n = r.children) && "number" !== typeof n && "bigint" !== typeof n || t.textContent === "" + n || !0 === r.suppressHydrationWarning || ud(t.textContent, n) ? (null != r.popover && (Xu("beforetoggle", t), Xu("toggle", t)), null != r.onScroll && Xu("scroll", t), null != r.onScrollEnd && Xu("scrollend", t), null != r.onClick && (t.onclick = Ot), t = !0) : t = !1, t || ga(e, !0)
                }

                function va(e) {
                    for (ua = e.return; ua;) switch (ua.tag) {
                        case 5:
                        case 31:
                        case 13:
                            return void(ma = !1);
                        case 27:
                        case 3:
                            return void(ma = !0);
                        default:
                            ua = ua.return
                    }
                }

                function ba(e) {
                    if (e !== ua) return !1;
                    if (!fa) return va(e), fa = !0, !1;
                    var t, n = e.tag;
                    if ((t = 3 !== n && 27 !== n) && ((t = 5 === n) && (t = !("form" !== (t = e.type) && "button" !== t) || xd(e.type, e.memoizedProps)), t = !t), t && da && ga(e), va(e), 13 === n) {
                        if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null)) throw Error(o(317));
                        da = Fd(e)
                    } else if (31 === n) {
                        if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null)) throw Error(o(317));
                        da = Fd(e)
                    } else 27 === n ? (n = da, Cd(e.type) ? (e = Ad, Ad = null, da = e) : da = n) : da = ua ? zd(e.stateNode.nextSibling) : null;
                    return !0
                }

                function xa() {
                    da = ua = null, fa = !1
                }

                function wa() {
                    var e = pa;
                    return null !== e && (null === Pc ? Pc = e : Pc.push.apply(Pc, e), pa = null), e
                }

                function ka(e) {
                    null === pa ? pa = [e] : pa.push(e)
                }
                var Sa = U(null),
                    Na = null,
                    ja = null;

                function Ea(e, t, n) {
                    B(Sa, t._currentValue), t._currentValue = n
                }

                function Ca(e) {
                    e._currentValue = Sa.current, I(Sa)
                }

                function _a(e, t, n) {
                    for (; null !== e;) {
                        var r = e.alternate;
                        if ((e.childLanes & t) !== t ? (e.childLanes |= t, null !== r && (r.childLanes |= t)) : null !== r && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
                        e = e.return
                    }
                }

                function Ta(e, t, n, r) {
                    var a = e.child;
                    for (null !== a && (a.return = e); null !== a;) {
                        var l = a.dependencies;
                        if (null !== l) {
                            var s = a.child;
                            l = l.firstContext;
                            e: for (; null !== l;) {
                                var i = l;
                                l = a;
                                for (var c = 0; c < t.length; c++)
                                    if (i.context === t[c]) {
                                        l.lanes |= n, null !== (i = l.alternate) && (i.lanes |= n), _a(l.return, n, e), r || (s = null);
                                        break e
                                    }
                                l = i.next
                            }
                        } else if (18 === a.tag) {
                            if (null === (s = a.return)) throw Error(o(341));
                            s.lanes |= n, null !== (l = s.alternate) && (l.lanes |= n), _a(s, n, e), s = null
                        } else s = a.child;
                        if (null !== s) s.return = a;
                        else
                            for (s = a; null !== s;) {
                                if (s === e) {
                                    s = null;
                                    break
                                }
                                if (null !== (a = s.sibling)) {
                                    a.return = s.return, s = a;
                                    break
                                }
                                s = s.return
                            }
                        a = s
                    }
                }

                function Ra(e, t, n, r) {
                    e = null;
                    for (var a = t, l = !1; null !== a;) {
                        if (!l)
                            if (0 !== (524288 & a.flags)) l = !0;
                            else if (0 !== (262144 & a.flags)) break;
                        if (10 === a.tag) {
                            var s = a.alternate;
                            if (null === s) throw Error(o(387));
                            if (null !== (s = s.memoizedProps)) {
                                var i = a.type;
                                Gn(a.pendingProps.value, s.value) || (null !== e ? e.push(i) : e = [i])
                            }
                        } else if (a === Q.current) {
                            if (null === (s = a.alternate)) throw Error(o(387));
                            s.memoizedState.memoizedState !== a.memoizedState.memoizedState && (null !== e ? e.push(ff) : e = [ff])
                        }
                        a = a.return
                    }
                    null !== e && Ta(t, e, n, r), t.flags |= 262144
                }

                function Pa(e) {
                    for (e = e.firstContext; null !== e;) {
                        if (!Gn(e.context._currentValue, e.memoizedValue)) return !0;
                        e = e.next
                    }
                    return !1
                }

                function Oa(e) {
                    Na = e, ja = null, null !== (e = e.dependencies) && (e.firstContext = null)
                }

                function La(e) {
                    return Aa(Na, e)
                }

                function za(e, t) {
                    return null === Na && Oa(e), Aa(e, t)
                }

                function Aa(e, t) {
                    var n = t._currentValue;
                    if (t = {
                            context: t,
                            memoizedValue: n,
                            next: null
                        }, null === ja) {
                        if (null === e) throw Error(o(308));
                        ja = t, e.dependencies = {
                            lanes: 0,
                            firstContext: t
                        }, e.flags |= 524288
                    } else ja = ja.next = t;
                    return n
                }
                var Fa = "undefined" !== typeof AbortController ? AbortController : function() {
                        var e = [],
                            t = this.signal = {
                                aborted: !1,
                                addEventListener: function(t, n) {
                                    e.push(n)
                                }
                            };
                        this.abort = function() {
                            t.aborted = !0, e.forEach(function(e) {
                                return e()
                            })
                        }
                    },
                    Ma = r.unstable_scheduleCallback,
                    Da = r.unstable_NormalPriority,
                    Ua = {
                        $$typeof: w,
                        Consumer: null,
                        Provider: null,
                        _currentValue: null,
                        _currentValue2: null,
                        _threadCount: 0
                    };

                function Ia() {
                    return {
                        controller: new Fa,
                        data: new Map,
                        refCount: 0
                    }
                }

                function Ba(e) {
                    e.refCount--, 0 === e.refCount && Ma(Da, function() {
                        e.controller.abort()
                    })
                }
                var Ha = null,
                    Wa = 0,
                    qa = 0,
                    Va = null;

                function $a() {
                    if (0 === --Wa && null !== Ha) {
                        null !== Va && (Va.status = "fulfilled");
                        var e = Ha;
                        Ha = null, qa = 0, Va = null;
                        for (var t = 0; t < e.length; t++)(0, e[t])()
                    }
                }
                var Qa = z.S;
                z.S = function(e, t) {
                    zc = ie(), "object" === typeof t && null !== t && "function" === typeof t.then && function(e, t) {
                        if (null === Ha) {
                            var n = Ha = [];
                            Wa = 0, qa = Wu(), Va = {
                                status: "pending",
                                value: void 0,
                                then: function(e) {
                                    n.push(e)
                                }
                            }
                        }
                        Wa++, t.then($a, $a)
                    }(0, t), null !== Qa && Qa(e, t)
                };
                var Ya = U(null);

                function Ka() {
                    var e = Ya.current;
                    return null !== e ? e : hc.pooledCache
                }

                function Ja(e, t) {
                    B(Ya, null === t ? Ya.current : t.pool)
                }

                function Xa() {
                    var e = Ka();
                    return null === e ? null : {
                        parent: Ua._currentValue,
                        pool: e
                    }
                }
                var Ga = Error(o(460)),
                    Za = Error(o(474)),
                    el = Error(o(542)),
                    tl = {
                        then: function() {}
                    };

                function nl(e) {
                    return "fulfilled" === (e = e.status) || "rejected" === e
                }

                function rl(e, t, n) {
                    switch (void 0 === (n = e[n]) ? e.push(t) : n !== t && (t.then(Ot, Ot), t = n), t.status) {
                        case "fulfilled":
                            return t.value;
                        case "rejected":
                            throw sl(e = t.reason), e;
                        default:
                            if ("string" === typeof t.status) t.then(Ot, Ot);
                            else {
                                if (null !== (e = hc) && 100 < e.shellSuspendCounter) throw Error(o(482));
                                (e = t).status = "pending", e.then(function(e) {
                                    if ("pending" === t.status) {
                                        var n = t;
                                        n.status = "fulfilled", n.value = e
                                    }
                                }, function(e) {
                                    if ("pending" === t.status) {
                                        var n = t;
                                        n.status = "rejected", n.reason = e
                                    }
                                })
                            }
                            switch (t.status) {
                                case "fulfilled":
                                    return t.value;
                                case "rejected":
                                    throw sl(e = t.reason), e
                            }
                            throw ll = t, Ga
                    }
                }

                function al(e) {
                    try {
                        return (0, e._init)(e._payload)
                    } catch (sa) {
                        if (null !== sa && "object" === typeof sa && "function" === typeof sa.then) throw ll = sa, Ga;
                        throw sa
                    }
                }
                var ll = null;

                function ol() {
                    if (null === ll) throw Error(o(459));
                    var e = ll;
                    return ll = null, e
                }

                function sl(e) {
                    if (e === Ga || e === el) throw Error(o(483))
                }
                var il = null,
                    cl = 0;

                function ul(e) {
                    var t = cl;
                    return cl += 1, null === il && (il = []), rl(il, e, t)
                }

                function dl(e, t) {
                    t = t.props.ref, e.ref = void 0 !== t ? t : null
                }

                function fl(e, t) {
                    if (t.$$typeof === m) throw Error(o(525));
                    throw e = Object.prototype.toString.call(t), Error(o(31, "[object Object]" === e ? "object with keys {" + Object.keys(t).join(", ") + "}" : e))
                }

                function pl(e) {
                    function t(t, n) {
                        if (e) {
                            var r = t.deletions;
                            null === r ? (t.deletions = [n], t.flags |= 16) : r.push(n)
                        }
                    }

                    function n(n, r) {
                        if (!e) return null;
                        for (; null !== r;) t(n, r), r = r.sibling;
                        return null
                    }

                    function r(e) {
                        for (var t = new Map; null !== e;) null !== e.key ? t.set(e.key, e) : t.set(e.index, e), e = e.sibling;
                        return t
                    }

                    function a(e, t) {
                        return (e = Ir(e, t)).index = 0, e.sibling = null, e
                    }

                    function l(t, n, r) {
                        return t.index = r, e ? null !== (r = t.alternate) ? (r = r.index) < n ? (t.flags |= 67108866, n) : r : (t.flags |= 67108866, n) : (t.flags |= 1048576, n)
                    }

                    function s(t) {
                        return e && null === t.alternate && (t.flags |= 67108866), t
                    }

                    function i(e, t, n, r) {
                        return null === t || 6 !== t.tag ? ((t = qr(n, e.mode, r)).return = e, t) : ((t = a(t, n)).return = e, t)
                    }

                    function c(e, t, n, r) {
                        var l = n.type;
                        return l === y ? d(e, t, n.props.children, r, n.key) : null !== t && (t.elementType === l || "object" === typeof l && null !== l && l.$$typeof === E && al(l) === t.type) ? (dl(t = a(t, n.props), n), t.return = e, t) : (dl(t = Hr(n.type, n.key, n.props, null, e.mode, r), n), t.return = e, t)
                    }

                    function u(e, t, n, r) {
                        return null === t || 4 !== t.tag || t.stateNode.containerInfo !== n.containerInfo || t.stateNode.implementation !== n.implementation ? ((t = $r(n, e.mode, r)).return = e, t) : ((t = a(t, n.children || [])).return = e, t)
                    }

                    function d(e, t, n, r, l) {
                        return null === t || 7 !== t.tag ? ((t = Wr(n, e.mode, r, l)).return = e, t) : ((t = a(t, n)).return = e, t)
                    }

                    function f(e, t, n) {
                        if ("string" === typeof t && "" !== t || "number" === typeof t || "bigint" === typeof t) return (t = qr("" + t, e.mode, n)).return = e, t;
                        if ("object" === typeof t && null !== t) {
                            switch (t.$$typeof) {
                                case h:
                                    return dl(n = Hr(t.type, t.key, t.props, null, e.mode, n), t), n.return = e, n;
                                case g:
                                    return (t = $r(t, e.mode, n)).return = e, t;
                                case E:
                                    return f(e, t = al(t), n)
                            }
                            if (L(t) || R(t)) return (t = Wr(t, e.mode, n, null)).return = e, t;
                            if ("function" === typeof t.then) return f(e, ul(t), n);
                            if (t.$$typeof === w) return f(e, za(e, t), n);
                            fl(e, t)
                        }
                        return null
                    }

                    function p(e, t, n, r) {
                        var a = null !== t ? t.key : null;
                        if ("string" === typeof n && "" !== n || "number" === typeof n || "bigint" === typeof n) return null !== a ? null : i(e, t, "" + n, r);
                        if ("object" === typeof n && null !== n) {
                            switch (n.$$typeof) {
                                case h:
                                    return n.key === a ? c(e, t, n, r) : null;
                                case g:
                                    return n.key === a ? u(e, t, n, r) : null;
                                case E:
                                    return p(e, t, n = al(n), r)
                            }
                            if (L(n) || R(n)) return null !== a ? null : d(e, t, n, r, null);
                            if ("function" === typeof n.then) return p(e, t, ul(n), r);
                            if (n.$$typeof === w) return p(e, t, za(e, n), r);
                            fl(e, n)
                        }
                        return null
                    }

                    function m(e, t, n, r, a) {
                        if ("string" === typeof r && "" !== r || "number" === typeof r || "bigint" === typeof r) return i(t, e = e.get(n) || null, "" + r, a);
                        if ("object" === typeof r && null !== r) {
                            switch (r.$$typeof) {
                                case h:
                                    return c(t, e = e.get(null === r.key ? n : r.key) || null, r, a);
                                case g:
                                    return u(t, e = e.get(null === r.key ? n : r.key) || null, r, a);
                                case E:
                                    return m(e, t, n, r = al(r), a)
                            }
                            if (L(r) || R(r)) return d(t, e = e.get(n) || null, r, a, null);
                            if ("function" === typeof r.then) return m(e, t, n, ul(r), a);
                            if (r.$$typeof === w) return m(e, t, n, za(t, r), a);
                            fl(t, r)
                        }
                        return null
                    }

                    function v(i, c, u, d) {
                        if ("object" === typeof u && null !== u && u.type === y && null === u.key && (u = u.props.children), "object" === typeof u && null !== u) {
                            switch (u.$$typeof) {
                                case h:
                                    e: {
                                        for (var b = u.key; null !== c;) {
                                            if (c.key === b) {
                                                if ((b = u.type) === y) {
                                                    if (7 === c.tag) {
                                                        n(i, c.sibling), (d = a(c, u.props.children)).return = i, i = d;
                                                        break e
                                                    }
                                                } else if (c.elementType === b || "object" === typeof b && null !== b && b.$$typeof === E && al(b) === c.type) {
                                                    n(i, c.sibling), dl(d = a(c, u.props), u), d.return = i, i = d;
                                                    break e
                                                }
                                                n(i, c);
                                                break
                                            }
                                            t(i, c), c = c.sibling
                                        }
                                        u.type === y ? ((d = Wr(u.props.children, i.mode, d, u.key)).return = i, i = d) : (dl(d = Hr(u.type, u.key, u.props, null, i.mode, d), u), d.return = i, i = d)
                                    }
                                    return s(i);
                                case g:
                                    e: {
                                        for (b = u.key; null !== c;) {
                                            if (c.key === b) {
                                                if (4 === c.tag && c.stateNode.containerInfo === u.containerInfo && c.stateNode.implementation === u.implementation) {
                                                    n(i, c.sibling), (d = a(c, u.children || [])).return = i, i = d;
                                                    break e
                                                }
                                                n(i, c);
                                                break
                                            }
                                            t(i, c), c = c.sibling
                                        }(d = $r(u, i.mode, d)).return = i,
                                        i = d
                                    }
                                    return s(i);
                                case E:
                                    return v(i, c, u = al(u), d)
                            }
                            if (L(u)) return function(a, o, s, i) {
                                for (var c = null, u = null, d = o, h = o = 0, g = null; null !== d && h < s.length; h++) {
                                    d.index > h ? (g = d, d = null) : g = d.sibling;
                                    var y = p(a, d, s[h], i);
                                    if (null === y) {
                                        null === d && (d = g);
                                        break
                                    }
                                    e && d && null === y.alternate && t(a, d), o = l(y, o, h), null === u ? c = y : u.sibling = y, u = y, d = g
                                }
                                if (h === s.length) return n(a, d), fa && aa(a, h), c;
                                if (null === d) {
                                    for (; h < s.length; h++) null !== (d = f(a, s[h], i)) && (o = l(d, o, h), null === u ? c = d : u.sibling = d, u = d);
                                    return fa && aa(a, h), c
                                }
                                for (d = r(d); h < s.length; h++) null !== (g = m(d, a, h, s[h], i)) && (e && null !== g.alternate && d.delete(null === g.key ? h : g.key), o = l(g, o, h), null === u ? c = g : u.sibling = g, u = g);
                                return e && d.forEach(function(e) {
                                    return t(a, e)
                                }), fa && aa(a, h), c
                            }(i, c, u, d);
                            if (R(u)) {
                                if ("function" !== typeof(b = R(u))) throw Error(o(150));
                                return function(a, s, i, c) {
                                    if (null == i) throw Error(o(151));
                                    for (var u = null, d = null, h = s, g = s = 0, y = null, v = i.next(); null !== h && !v.done; g++, v = i.next()) {
                                        h.index > g ? (y = h, h = null) : y = h.sibling;
                                        var b = p(a, h, v.value, c);
                                        if (null === b) {
                                            null === h && (h = y);
                                            break
                                        }
                                        e && h && null === b.alternate && t(a, h), s = l(b, s, g), null === d ? u = b : d.sibling = b, d = b, h = y
                                    }
                                    if (v.done) return n(a, h), fa && aa(a, g), u;
                                    if (null === h) {
                                        for (; !v.done; g++, v = i.next()) null !== (v = f(a, v.value, c)) && (s = l(v, s, g), null === d ? u = v : d.sibling = v, d = v);
                                        return fa && aa(a, g), u
                                    }
                                    for (h = r(h); !v.done; g++, v = i.next()) null !== (v = m(h, a, g, v.value, c)) && (e && null !== v.alternate && h.delete(null === v.key ? g : v.key), s = l(v, s, g), null === d ? u = v : d.sibling = v, d = v);
                                    return e && h.forEach(function(e) {
                                        return t(a, e)
                                    }), fa && aa(a, g), u
                                }(i, c, u = b.call(u), d)
                            }
                            if ("function" === typeof u.then) return v(i, c, ul(u), d);
                            if (u.$$typeof === w) return v(i, c, za(i, u), d);
                            fl(i, u)
                        }
                        return "string" === typeof u && "" !== u || "number" === typeof u || "bigint" === typeof u ? (u = "" + u, null !== c && 6 === c.tag ? (n(i, c.sibling), (d = a(c, u)).return = i, i = d) : (n(i, c), (d = qr(u, i.mode, d)).return = i, i = d), s(i)) : n(i, c)
                    }
                    return function(e, t, n, r) {
                        try {
                            cl = 0;
                            var a = v(e, t, n, r);
                            return il = null, a
                        } catch (sa) {
                            if (sa === Ga || sa === el) throw sa;
                            var l = Dr(29, sa, null, e.mode);
                            return l.lanes = r, l.return = e, l
                        }
                    }
                }
                var ml = pl(!0),
                    hl = pl(!1),
                    gl = !1;

                function yl(e) {
                    e.updateQueue = {
                        baseState: e.memoizedState,
                        firstBaseUpdate: null,
                        lastBaseUpdate: null,
                        shared: {
                            pending: null,
                            lanes: 0,
                            hiddenCallbacks: null
                        },
                        callbacks: null
                    }
                }

                function vl(e, t) {
                    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
                        baseState: e.baseState,
                        firstBaseUpdate: e.firstBaseUpdate,
                        lastBaseUpdate: e.lastBaseUpdate,
                        shared: e.shared,
                        callbacks: null
                    })
                }

                function bl(e) {
                    return {
                        lane: e,
                        tag: 0,
                        payload: null,
                        callback: null,
                        next: null
                    }
                }

                function xl(e, t, n) {
                    var r = e.updateQueue;
                    if (null === r) return null;
                    if (r = r.shared, 0 !== (2 & mc)) {
                        var a = r.pending;
                        return null === a ? t.next = t : (t.next = a.next, a.next = t), r.pending = t, t = Ar(e), zr(e, null, n), t
                    }
                    return Pr(e, r, t, n), Ar(e)
                }

                function wl(e, t, n) {
                    if (null !== (t = t.updateQueue) && (t = t.shared, 0 !== (4194048 & n))) {
                        var r = t.lanes;
                        n |= r &= e.pendingLanes, t.lanes = n, ze(e, n)
                    }
                }

                function kl(e, t) {
                    var n = e.updateQueue,
                        r = e.alternate;
                    if (null !== r && n === (r = r.updateQueue)) {
                        var a = null,
                            l = null;
                        if (null !== (n = n.firstBaseUpdate)) {
                            do {
                                var o = {
                                    lane: n.lane,
                                    tag: n.tag,
                                    payload: n.payload,
                                    callback: null,
                                    next: null
                                };
                                null === l ? a = l = o : l = l.next = o, n = n.next
                            } while (null !== n);
                            null === l ? a = l = t : l = l.next = t
                        } else a = l = t;
                        return n = {
                            baseState: r.baseState,
                            firstBaseUpdate: a,
                            lastBaseUpdate: l,
                            shared: r.shared,
                            callbacks: r.callbacks
                        }, void(e.updateQueue = n)
                    }
                    null === (e = n.lastBaseUpdate) ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t
                }
                var Sl = !1;

                function Nl() {
                    if (Sl) {
                        if (null !== Va) throw Va
                    }
                }

                function jl(e, t, n, r) {
                    Sl = !1;
                    var a = e.updateQueue;
                    gl = !1;
                    var l = a.firstBaseUpdate,
                        o = a.lastBaseUpdate,
                        s = a.shared.pending;
                    if (null !== s) {
                        a.shared.pending = null;
                        var i = s,
                            c = i.next;
                        i.next = null, null === o ? l = c : o.next = c, o = i;
                        var u = e.alternate;
                        null !== u && ((s = (u = u.updateQueue).lastBaseUpdate) !== o && (null === s ? u.firstBaseUpdate = c : s.next = c, u.lastBaseUpdate = i))
                    }
                    if (null !== l) {
                        var d = a.baseState;
                        for (o = 0, u = c = i = null, s = l;;) {
                            var f = -536870913 & s.lane,
                                m = f !== s.lane;
                            if (m ? (yc & f) === f : (r & f) === f) {
                                0 !== f && f === qa && (Sl = !0), null !== u && (u = u.next = {
                                    lane: 0,
                                    tag: s.tag,
                                    payload: s.payload,
                                    callback: null,
                                    next: null
                                });
                                e: {
                                    var h = e,
                                        g = s;f = t;
                                    var y = n;
                                    switch (g.tag) {
                                        case 1:
                                            if ("function" === typeof(h = g.payload)) {
                                                d = h.call(y, d, f);
                                                break e
                                            }
                                            d = h;
                                            break e;
                                        case 3:
                                            h.flags = -65537 & h.flags | 128;
                                        case 0:
                                            if (null === (f = "function" === typeof(h = g.payload) ? h.call(y, d, f) : h) || void 0 === f) break e;
                                            d = p({}, d, f);
                                            break e;
                                        case 2:
                                            gl = !0
                                    }
                                }
                                null !== (f = s.callback) && (e.flags |= 64, m && (e.flags |= 8192), null === (m = a.callbacks) ? a.callbacks = [f] : m.push(f))
                            } else m = {
                                lane: f,
                                tag: s.tag,
                                payload: s.payload,
                                callback: s.callback,
                                next: null
                            }, null === u ? (c = u = m, i = d) : u = u.next = m, o |= f;
                            if (null === (s = s.next)) {
                                if (null === (s = a.shared.pending)) break;
                                s = (m = s).next, m.next = null, a.lastBaseUpdate = m, a.shared.pending = null
                            }
                        }
                        null === u && (i = d), a.baseState = i, a.firstBaseUpdate = c, a.lastBaseUpdate = u, null === l && (a.shared.lanes = 0), jc |= o, e.lanes = o, e.memoizedState = d
                    }
                }

                function El(e, t) {
                    if ("function" !== typeof e) throw Error(o(191, e));
                    e.call(t)
                }

                function Cl(e, t) {
                    var n = e.callbacks;
                    if (null !== n)
                        for (e.callbacks = null, e = 0; e < n.length; e++) El(n[e], t)
                }
                var _l = U(null),
                    Tl = U(0);

                function Rl(e, t) {
                    B(Tl, e = Sc), B(_l, t), Sc = e | t.baseLanes
                }

                function Pl() {
                    B(Tl, Sc), B(_l, _l.current)
                }

                function Ol() {
                    Sc = Tl.current, I(_l), I(Tl)
                }
                var Ll = U(null),
                    zl = null;

                function Al(e) {
                    var t = e.alternate;
                    B(Il, 1 & Il.current), B(Ll, e), null === zl && (null === t || null !== _l.current || null !== t.memoizedState) && (zl = e)
                }

                function Fl(e) {
                    B(Il, Il.current), B(Ll, e), null === zl && (zl = e)
                }

                function Ml(e) {
                    22 === e.tag ? (B(Il, Il.current), B(Ll, e), null === zl && (zl = e)) : Dl()
                }

                function Dl() {
                    B(Il, Il.current), B(Ll, Ll.current)
                }

                function Ul(e) {
                    I(Ll), zl === e && (zl = null), I(Il)
                }
                var Il = U(0);

                function Bl(e) {
                    for (var t = e; null !== t;) {
                        if (13 === t.tag) {
                            var n = t.memoizedState;
                            if (null !== n && (null === (n = n.dehydrated) || Od(n) || Ld(n))) return t
                        } else if (19 !== t.tag || "forwards" !== t.memoizedProps.revealOrder && "backwards" !== t.memoizedProps.revealOrder && "unstable_legacy-backwards" !== t.memoizedProps.revealOrder && "together" !== t.memoizedProps.revealOrder) {
                            if (null !== t.child) {
                                t.child.return = t, t = t.child;
                                continue
                            }
                        } else if (0 !== (128 & t.flags)) return t;
                        if (t === e) break;
                        for (; null === t.sibling;) {
                            if (null === t.return || t.return === e) return null;
                            t = t.return
                        }
                        t.sibling.return = t.return, t = t.sibling
                    }
                    return null
                }
                var Hl = 0,
                    Wl = null,
                    ql = null,
                    Vl = null,
                    $l = !1,
                    Ql = !1,
                    Yl = !1,
                    Kl = 0,
                    Jl = 0,
                    Xl = null,
                    Gl = 0;

                function Zl() {
                    throw Error(o(321))
                }

                function eo(e, t) {
                    if (null === t) return !1;
                    for (var n = 0; n < t.length && n < e.length; n++)
                        if (!Gn(e[n], t[n])) return !1;
                    return !0
                }

                function to(e, t, n, r, a, l) {
                    return Hl = l, Wl = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, z.H = null === e || null === e.memoizedState ? ys : vs, Yl = !1, l = n(r, a), Yl = !1, Ql && (l = ro(t, n, r, a)), no(e), l
                }

                function no(e) {
                    z.H = gs;
                    var t = null !== ql && null !== ql.next;
                    if (Hl = 0, Vl = ql = Wl = null, $l = !1, Jl = 0, Xl = null, t) throw Error(o(300));
                    null === e || zs || null !== (e = e.dependencies) && Pa(e) && (zs = !0)
                }

                function ro(e, t, n, r) {
                    Wl = e;
                    var a = 0;
                    do {
                        if (Ql && (Xl = null), Jl = 0, Ql = !1, 25 <= a) throw Error(o(301));
                        if (a += 1, Vl = ql = null, null != e.updateQueue) {
                            var l = e.updateQueue;
                            l.lastEffect = null, l.events = null, l.stores = null, null != l.memoCache && (l.memoCache.index = 0)
                        }
                        z.H = bs, l = t(n, r)
                    } while (Ql);
                    return l
                }

                function ao() {
                    var e = z.H,
                        t = e.useState()[0];
                    return t = "function" === typeof t.then ? uo(t) : t, e = e.useState()[0], (null !== ql ? ql.memoizedState : null) !== e && (Wl.flags |= 1024), t
                }

                function lo() {
                    var e = 0 !== Kl;
                    return Kl = 0, e
                }

                function oo(e, t, n) {
                    t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~n
                }

                function so(e) {
                    if ($l) {
                        for (e = e.memoizedState; null !== e;) {
                            var t = e.queue;
                            null !== t && (t.pending = null), e = e.next
                        }
                        $l = !1
                    }
                    Hl = 0, Vl = ql = Wl = null, Ql = !1, Jl = Kl = 0, Xl = null
                }

                function io() {
                    var e = {
                        memoizedState: null,
                        baseState: null,
                        baseQueue: null,
                        queue: null,
                        next: null
                    };
                    return null === Vl ? Wl.memoizedState = Vl = e : Vl = Vl.next = e, Vl
                }

                function co() {
                    if (null === ql) {
                        var e = Wl.alternate;
                        e = null !== e ? e.memoizedState : null
                    } else e = ql.next;
                    var t = null === Vl ? Wl.memoizedState : Vl.next;
                    if (null !== t) Vl = t, ql = e;
                    else {
                        if (null === e) {
                            if (null === Wl.alternate) throw Error(o(467));
                            throw Error(o(310))
                        }
                        e = {
                            memoizedState: (ql = e).memoizedState,
                            baseState: ql.baseState,
                            baseQueue: ql.baseQueue,
                            queue: ql.queue,
                            next: null
                        }, null === Vl ? Wl.memoizedState = Vl = e : Vl = Vl.next = e
                    }
                    return Vl
                }

                function uo(e) {
                    var t = Jl;
                    return Jl += 1, null === Xl && (Xl = []), e = rl(Xl, e, t), t = Wl, null === (null === Vl ? t.memoizedState : Vl.next) && (t = t.alternate, z.H = null === t || null === t.memoizedState ? ys : vs), e
                }

                function fo(e) {
                    if (null !== e && "object" === typeof e) {
                        if ("function" === typeof e.then) return uo(e);
                        if (e.$$typeof === w) return La(e)
                    }
                    throw Error(o(438, String(e)))
                }

                function po(e) {
                    var t = null,
                        n = Wl.updateQueue;
                    if (null !== n && (t = n.memoCache), null == t) {
                        var r = Wl.alternate;
                        null !== r && (null !== (r = r.updateQueue) && (null != (r = r.memoCache) && (t = {
                            data: r.data.map(function(e) {
                                return e.slice()
                            }),
                            index: 0
                        })))
                    }
                    if (null == t && (t = {
                            data: [],
                            index: 0
                        }), null === n && (n = {
                            lastEffect: null,
                            events: null,
                            stores: null,
                            memoCache: null
                        }, Wl.updateQueue = n), n.memoCache = t, void 0 === (n = t.data[t.index]))
                        for (n = t.data[t.index] = Array(e), r = 0; r < e; r++) n[r] = _;
                    return t.index++, n
                }

                function mo(e, t) {
                    return "function" === typeof t ? t(e) : t
                }

                function ho(e) {
                    return go(co(), ql, e)
                }

                function go(e, t, n) {
                    var r = e.queue;
                    if (null === r) throw Error(o(311));
                    r.lastRenderedReducer = n;
                    var a = e.baseQueue,
                        l = r.pending;
                    if (null !== l) {
                        if (null !== a) {
                            var s = a.next;
                            a.next = l.next, l.next = s
                        }
                        t.baseQueue = a = l, r.pending = null
                    }
                    if (l = e.baseState, null === a) e.memoizedState = l;
                    else {
                        var i = s = null,
                            c = null,
                            u = t = a.next,
                            d = !1;
                        do {
                            var f = -536870913 & u.lane;
                            if (f !== u.lane ? (yc & f) === f : (Hl & f) === f) {
                                var p = u.revertLane;
                                if (0 === p) null !== c && (c = c.next = {
                                    lane: 0,
                                    revertLane: 0,
                                    gesture: null,
                                    action: u.action,
                                    hasEagerState: u.hasEagerState,
                                    eagerState: u.eagerState,
                                    next: null
                                }), f === qa && (d = !0);
                                else {
                                    if ((Hl & p) === p) {
                                        u = u.next, p === qa && (d = !0);
                                        continue
                                    }
                                    f = {
                                        lane: 0,
                                        revertLane: u.revertLane,
                                        gesture: null,
                                        action: u.action,
                                        hasEagerState: u.hasEagerState,
                                        eagerState: u.eagerState,
                                        next: null
                                    }, null === c ? (i = c = f, s = l) : c = c.next = f, Wl.lanes |= p, jc |= p
                                }
                                f = u.action, Yl && n(l, f), l = u.hasEagerState ? u.eagerState : n(l, f)
                            } else p = {
                                lane: f,
                                revertLane: u.revertLane,
                                gesture: u.gesture,
                                action: u.action,
                                hasEagerState: u.hasEagerState,
                                eagerState: u.eagerState,
                                next: null
                            }, null === c ? (i = c = p, s = l) : c = c.next = p, Wl.lanes |= f, jc |= f;
                            u = u.next
                        } while (null !== u && u !== t);
                        if (null === c ? s = l : c.next = i, !Gn(l, e.memoizedState) && (zs = !0, d && null !== (n = Va))) throw n;
                        e.memoizedState = l, e.baseState = s, e.baseQueue = c, r.lastRenderedState = l
                    }
                    return null === a && (r.lanes = 0), [e.memoizedState, r.dispatch]
                }

                function yo(e) {
                    var t = co(),
                        n = t.queue;
                    if (null === n) throw Error(o(311));
                    n.lastRenderedReducer = e;
                    var r = n.dispatch,
                        a = n.pending,
                        l = t.memoizedState;
                    if (null !== a) {
                        n.pending = null;
                        var s = a = a.next;
                        do {
                            l = e(l, s.action), s = s.next
                        } while (s !== a);
                        Gn(l, t.memoizedState) || (zs = !0), t.memoizedState = l, null === t.baseQueue && (t.baseState = l), n.lastRenderedState = l
                    }
                    return [l, r]
                }

                function vo(e, t, n) {
                    var r = Wl,
                        a = co(),
                        l = fa;
                    if (l) {
                        if (void 0 === n) throw Error(o(407));
                        n = n()
                    } else n = t();
                    var s = !Gn((ql || a).memoizedState, n);
                    if (s && (a.memoizedState = n, zs = !0), a = a.queue, Wo(wo.bind(null, r, a, e), [e]), a.getSnapshot !== t || s || null !== Vl && 1 & Vl.memoizedState.tag) {
                        if (r.flags |= 2048, Do(9, {
                                destroy: void 0
                            }, xo.bind(null, r, a, n, t), null), null === hc) throw Error(o(349));
                        l || 0 !== (127 & Hl) || bo(r, t, n)
                    }
                    return n
                }

                function bo(e, t, n) {
                    e.flags |= 16384, e = {
                        getSnapshot: t,
                        value: n
                    }, null === (t = Wl.updateQueue) ? (t = {
                        lastEffect: null,
                        events: null,
                        stores: null,
                        memoCache: null
                    }, Wl.updateQueue = t, t.stores = [e]) : null === (n = t.stores) ? t.stores = [e] : n.push(e)
                }

                function xo(e, t, n, r) {
                    t.value = n, t.getSnapshot = r, ko(t) && So(e)
                }

                function wo(e, t, n) {
                    return n(function() {
                        ko(t) && So(e)
                    })
                }

                function ko(e) {
                    var t = e.getSnapshot;
                    e = e.value;
                    try {
                        var n = t();
                        return !Gn(e, n)
                    } catch (r) {
                        return !0
                    }
                }

                function So(e) {
                    var t = Lr(e, 2);
                    null !== t && Kc(t, e, 2)
                }

                function No(e) {
                    var t = io();
                    if ("function" === typeof e) {
                        var n = e;
                        if (e = n(), Yl) {
                            be(!0);
                            try {
                                n()
                            } finally {
                                be(!1)
                            }
                        }
                    }
                    return t.memoizedState = t.baseState = e, t.queue = {
                        pending: null,
                        lanes: 0,
                        dispatch: null,
                        lastRenderedReducer: mo,
                        lastRenderedState: e
                    }, t
                }

                function jo(e, t, n, r) {
                    return e.baseState = n, go(e, ql, "function" === typeof r ? r : mo)
                }

                function Eo(e, t, n, r, a) {
                    if (ps(e)) throw Error(o(485));
                    if (null !== (e = t.action)) {
                        var l = {
                            payload: a,
                            action: e,
                            next: null,
                            isTransition: !0,
                            status: "pending",
                            value: null,
                            reason: null,
                            listeners: [],
                            then: function(e) {
                                l.listeners.push(e)
                            }
                        };
                        null !== z.T ? n(!0) : l.isTransition = !1, r(l), null === (n = t.pending) ? (l.next = t.pending = l, Co(t, l)) : (l.next = n.next, t.pending = n.next = l)
                    }
                }

                function Co(e, t) {
                    var n = t.action,
                        r = t.payload,
                        a = e.state;
                    if (t.isTransition) {
                        var l = z.T,
                            o = {};
                        z.T = o;
                        try {
                            var s = n(a, r),
                                i = z.S;
                            null !== i && i(o, s), _o(e, t, s)
                        } catch (c) {
                            Ro(e, t, c)
                        } finally {
                            null !== l && null !== o.types && (l.types = o.types), z.T = l
                        }
                    } else try {
                        _o(e, t, l = n(a, r))
                    } catch (u) {
                        Ro(e, t, u)
                    }
                }

                function _o(e, t, n) {
                    null !== n && "object" === typeof n && "function" === typeof n.then ? n.then(function(n) {
                        To(e, t, n)
                    }, function(n) {
                        return Ro(e, t, n)
                    }) : To(e, t, n)
                }

                function To(e, t, n) {
                    t.status = "fulfilled", t.value = n, Po(t), e.state = n, null !== (t = e.pending) && ((n = t.next) === t ? e.pending = null : (n = n.next, t.next = n, Co(e, n)))
                }

                function Ro(e, t, n) {
                    var r = e.pending;
                    if (e.pending = null, null !== r) {
                        r = r.next;
                        do {
                            t.status = "rejected", t.reason = n, Po(t), t = t.next
                        } while (t !== r)
                    }
                    e.action = null
                }

                function Po(e) {
                    e = e.listeners;
                    for (var t = 0; t < e.length; t++)(0, e[t])()
                }

                function Oo(e, t) {
                    return t
                }

                function Lo(e, t) {
                    if (fa) {
                        var n = hc.formState;
                        if (null !== n) {
                            e: {
                                var r = Wl;
                                if (fa) {
                                    if (da) {
                                        t: {
                                            for (var a = da, l = ma; 8 !== a.nodeType;) {
                                                if (!l) {
                                                    a = null;
                                                    break t
                                                }
                                                if (null === (a = zd(a.nextSibling))) {
                                                    a = null;
                                                    break t
                                                }
                                            }
                                            a = "F!" === (l = a.data) || "F" === l ? a : null
                                        }
                                        if (a) {
                                            da = zd(a.nextSibling), r = "F!" === a.data;
                                            break e
                                        }
                                    }
                                    ga(r)
                                }
                                r = !1
                            }
                            r && (t = n[0])
                        }
                    }
                    return (n = io()).memoizedState = n.baseState = t, r = {
                        pending: null,
                        lanes: 0,
                        dispatch: null,
                        lastRenderedReducer: Oo,
                        lastRenderedState: t
                    }, n.queue = r, n = us.bind(null, Wl, r), r.dispatch = n, r = No(!1), l = fs.bind(null, Wl, !1, r.queue), a = {
                        state: t,
                        dispatch: null,
                        action: e,
                        pending: null
                    }, (r = io()).queue = a, n = Eo.bind(null, Wl, a, l, n), a.dispatch = n, r.memoizedState = e, [t, n, !1]
                }

                function zo(e) {
                    return Ao(co(), ql, e)
                }

                function Ao(e, t, n) {
                    if (t = go(e, t, Oo)[0], e = ho(mo)[0], "object" === typeof t && null !== t && "function" === typeof t.then) try {
                        var r = uo(t)
                    } catch (sa) {
                        if (sa === Ga) throw el;
                        throw sa
                    } else r = t;
                    var a = (t = co()).queue,
                        l = a.dispatch;
                    return n !== t.memoizedState && (Wl.flags |= 2048, Do(9, {
                        destroy: void 0
                    }, Fo.bind(null, a, n), null)), [r, l, e]
                }

                function Fo(e, t) {
                    e.action = t
                }

                function Mo(e) {
                    var t = co(),
                        n = ql;
                    if (null !== n) return Ao(t, n, e);
                    co(), t = t.memoizedState;
                    var r = (n = co()).queue.dispatch;
                    return n.memoizedState = e, [t, r, !1]
                }

                function Do(e, t, n, r) {
                    return e = {
                        tag: e,
                        create: n,
                        deps: r,
                        inst: t,
                        next: null
                    }, null === (t = Wl.updateQueue) && (t = {
                        lastEffect: null,
                        events: null,
                        stores: null,
                        memoCache: null
                    }, Wl.updateQueue = t), null === (n = t.lastEffect) ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e), e
                }

                function Uo() {
                    return co().memoizedState
                }

                function Io(e, t, n, r) {
                    var a = io();
                    Wl.flags |= e, a.memoizedState = Do(1 | t, {
                        destroy: void 0
                    }, n, void 0 === r ? null : r)
                }

                function Bo(e, t, n, r) {
                    var a = co();
                    r = void 0 === r ? null : r;
                    var l = a.memoizedState.inst;
                    null !== ql && null !== r && eo(r, ql.memoizedState.deps) ? a.memoizedState = Do(t, l, n, r) : (Wl.flags |= e, a.memoizedState = Do(1 | t, l, n, r))
                }

                function Ho(e, t) {
                    Io(8390656, 8, e, t)
                }

                function Wo(e, t) {
                    Bo(2048, 8, e, t)
                }

                function qo(e) {
                    var t = co().memoizedState;
                    return function(e) {
                            Wl.flags |= 4;
                            var t = Wl.updateQueue;
                            if (null === t) t = {
                                lastEffect: null,
                                events: null,
                                stores: null,
                                memoCache: null
                            }, Wl.updateQueue = t, t.events = [e];
                            else {
                                var n = t.events;
                                null === n ? t.events = [e] : n.push(e)
                            }
                        }({
                            ref: t,
                            nextImpl: e
                        }),
                        function() {
                            if (0 !== (2 & mc)) throw Error(o(440));
                            return t.impl.apply(void 0, arguments)
                        }
                }

                function Vo(e, t) {
                    return Bo(4, 2, e, t)
                }

                function $o(e, t) {
                    return Bo(4, 4, e, t)
                }

                function Qo(e, t) {
                    if ("function" === typeof t) {
                        e = e();
                        var n = t(e);
                        return function() {
                            "function" === typeof n ? n() : t(null)
                        }
                    }
                    if (null !== t && void 0 !== t) return e = e(), t.current = e,
                        function() {
                            t.current = null
                        }
                }

                function Yo(e, t, n) {
                    n = null !== n && void 0 !== n ? n.concat([e]) : null, Bo(4, 4, Qo.bind(null, t, e), n)
                }

                function Ko() {}

                function Jo(e, t) {
                    var n = co();
                    t = void 0 === t ? null : t;
                    var r = n.memoizedState;
                    return null !== t && eo(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e)
                }

                function Xo(e, t) {
                    var n = co();
                    t = void 0 === t ? null : t;
                    var r = n.memoizedState;
                    if (null !== t && eo(t, r[1])) return r[0];
                    if (r = e(), Yl) {
                        be(!0);
                        try {
                            e()
                        } finally {
                            be(!1)
                        }
                    }
                    return n.memoizedState = [r, t], r
                }

                function Go(e, t, n) {
                    return void 0 === n || 0 !== (1073741824 & Hl) && 0 === (261930 & yc) ? e.memoizedState = t : (e.memoizedState = n, e = Yc(), Wl.lanes |= e, jc |= e, n)
                }

                function Zo(e, t, n, r) {
                    return Gn(n, t) ? n : null !== _l.current ? (e = Go(e, n, r), Gn(e, t) || (zs = !0), e) : 0 === (42 & Hl) || 0 !== (1073741824 & Hl) && 0 === (261930 & yc) ? (zs = !0, e.memoizedState = n) : (e = Yc(), Wl.lanes |= e, jc |= e, t)
                }

                function es(e, t, n, r, a) {
                    var l = A.p;
                    A.p = 0 !== l && 8 > l ? l : 8;
                    var o = z.T,
                        s = {};
                    z.T = s, fs(e, !1, t, n);
                    try {
                        var i = a(),
                            c = z.S;
                        if (null !== c && c(s, i), null !== i && "object" === typeof i && "function" === typeof i.then) ds(e, t, function(e, t) {
                            var n = [],
                                r = {
                                    status: "pending",
                                    value: null,
                                    reason: null,
                                    then: function(e) {
                                        n.push(e)
                                    }
                                };
                            return e.then(function() {
                                r.status = "fulfilled", r.value = t;
                                for (var e = 0; e < n.length; e++)(0, n[e])(t)
                            }, function(e) {
                                for (r.status = "rejected", r.reason = e, e = 0; e < n.length; e++)(0, n[e])(void 0)
                            }), r
                        }(i, r), Qc());
                        else ds(e, t, r, Qc())
                    } catch (u) {
                        ds(e, t, {
                            then: function() {},
                            status: "rejected",
                            reason: u
                        }, Qc())
                    } finally {
                        A.p = l, null !== o && null !== s.types && (o.types = s.types), z.T = o
                    }
                }

                function ts() {}

                function ns(e, t, n, r) {
                    if (5 !== e.tag) throw Error(o(476));
                    var a = rs(e).queue;
                    es(e, a, t, F, null === n ? ts : function() {
                        return as(e), n(r)
                    })
                }

                function rs(e) {
                    var t = e.memoizedState;
                    if (null !== t) return t;
                    var n = {};
                    return (t = {
                        memoizedState: F,
                        baseState: F,
                        baseQueue: null,
                        queue: {
                            pending: null,
                            lanes: 0,
                            dispatch: null,
                            lastRenderedReducer: mo,
                            lastRenderedState: F
                        },
                        next: null
                    }).next = {
                        memoizedState: n,
                        baseState: n,
                        baseQueue: null,
                        queue: {
                            pending: null,
                            lanes: 0,
                            dispatch: null,
                            lastRenderedReducer: mo,
                            lastRenderedState: n
                        },
                        next: null
                    }, e.memoizedState = t, null !== (e = e.alternate) && (e.memoizedState = t), t
                }

                function as(e) {
                    var t = rs(e);
                    null === t.next && (t = e.alternate.memoizedState), ds(e, t.next.queue, {}, Qc())
                }

                function ls() {
                    return La(ff)
                }

                function os() {
                    return co().memoizedState
                }

                function ss() {
                    return co().memoizedState
                }

                function is(e) {
                    for (var t = e.return; null !== t;) {
                        switch (t.tag) {
                            case 24:
                            case 3:
                                var n = Qc(),
                                    r = xl(t, e = bl(n), n);
                                return null !== r && (Kc(r, t, n), wl(r, t, n)), t = {
                                    cache: Ia()
                                }, void(e.payload = t)
                        }
                        t = t.return
                    }
                }

                function cs(e, t, n) {
                    var r = Qc();
                    n = {
                        lane: r,
                        revertLane: 0,
                        gesture: null,
                        action: n,
                        hasEagerState: !1,
                        eagerState: null,
                        next: null
                    }, ps(e) ? ms(t, n) : null !== (n = Or(e, t, n, r)) && (Kc(n, e, r), hs(n, t, r))
                }

                function us(e, t, n) {
                    ds(e, t, n, Qc())
                }

                function ds(e, t, n, r) {
                    var a = {
                        lane: r,
                        revertLane: 0,
                        gesture: null,
                        action: n,
                        hasEagerState: !1,
                        eagerState: null,
                        next: null
                    };
                    if (ps(e)) ms(t, a);
                    else {
                        var l = e.alternate;
                        if (0 === e.lanes && (null === l || 0 === l.lanes) && null !== (l = t.lastRenderedReducer)) try {
                            var o = t.lastRenderedState,
                                s = l(o, n);
                            if (a.hasEagerState = !0, a.eagerState = s, Gn(s, o)) return Pr(e, t, a, 0), null === hc && Rr(), !1
                        } catch (i) {}
                        if (null !== (n = Or(e, t, a, r))) return Kc(n, e, r), hs(n, t, r), !0
                    }
                    return !1
                }

                function fs(e, t, n, r) {
                    if (r = {
                            lane: 2,
                            revertLane: Wu(),
                            gesture: null,
                            action: r,
                            hasEagerState: !1,
                            eagerState: null,
                            next: null
                        }, ps(e)) {
                        if (t) throw Error(o(479))
                    } else null !== (t = Or(e, n, r, 2)) && Kc(t, e, 2)
                }

                function ps(e) {
                    var t = e.alternate;
                    return e === Wl || null !== t && t === Wl
                }

                function ms(e, t) {
                    Ql = $l = !0;
                    var n = e.pending;
                    null === n ? t.next = t : (t.next = n.next, n.next = t), e.pending = t
                }

                function hs(e, t, n) {
                    if (0 !== (4194048 & n)) {
                        var r = t.lanes;
                        n |= r &= e.pendingLanes, t.lanes = n, ze(e, n)
                    }
                }
                var gs = {
                    readContext: La,
                    use: fo,
                    useCallback: Zl,
                    useContext: Zl,
                    useEffect: Zl,
                    useImperativeHandle: Zl,
                    useLayoutEffect: Zl,
                    useInsertionEffect: Zl,
                    useMemo: Zl,
                    useReducer: Zl,
                    useRef: Zl,
                    useState: Zl,
                    useDebugValue: Zl,
                    useDeferredValue: Zl,
                    useTransition: Zl,
                    useSyncExternalStore: Zl,
                    useId: Zl,
                    useHostTransitionStatus: Zl,
                    useFormState: Zl,
                    useActionState: Zl,
                    useOptimistic: Zl,
                    useMemoCache: Zl,
                    useCacheRefresh: Zl
                };
                gs.useEffectEvent = Zl;
                var ys = {
                        readContext: La,
                        use: fo,
                        useCallback: function(e, t) {
                            return io().memoizedState = [e, void 0 === t ? null : t], e
                        },
                        useContext: La,
                        useEffect: Ho,
                        useImperativeHandle: function(e, t, n) {
                            n = null !== n && void 0 !== n ? n.concat([e]) : null, Io(4194308, 4, Qo.bind(null, t, e), n)
                        },
                        useLayoutEffect: function(e, t) {
                            return Io(4194308, 4, e, t)
                        },
                        useInsertionEffect: function(e, t) {
                            Io(4, 2, e, t)
                        },
                        useMemo: function(e, t) {
                            var n = io();
                            t = void 0 === t ? null : t;
                            var r = e();
                            if (Yl) {
                                be(!0);
                                try {
                                    e()
                                } finally {
                                    be(!1)
                                }
                            }
                            return n.memoizedState = [r, t], r
                        },
                        useReducer: function(e, t, n) {
                            var r = io();
                            if (void 0 !== n) {
                                var a = n(t);
                                if (Yl) {
                                    be(!0);
                                    try {
                                        n(t)
                                    } finally {
                                        be(!1)
                                    }
                                }
                            } else a = t;
                            return r.memoizedState = r.baseState = a, e = {
                                pending: null,
                                lanes: 0,
                                dispatch: null,
                                lastRenderedReducer: e,
                                lastRenderedState: a
                            }, r.queue = e, e = e.dispatch = cs.bind(null, Wl, e), [r.memoizedState, e]
                        },
                        useRef: function(e) {
                            return e = {
                                current: e
                            }, io().memoizedState = e
                        },
                        useState: function(e) {
                            var t = (e = No(e)).queue,
                                n = us.bind(null, Wl, t);
                            return t.dispatch = n, [e.memoizedState, n]
                        },
                        useDebugValue: Ko,
                        useDeferredValue: function(e, t) {
                            return Go(io(), e, t)
                        },
                        useTransition: function() {
                            var e = No(!1);
                            return e = es.bind(null, Wl, e.queue, !0, !1), io().memoizedState = e, [!1, e]
                        },
                        useSyncExternalStore: function(e, t, n) {
                            var r = Wl,
                                a = io();
                            if (fa) {
                                if (void 0 === n) throw Error(o(407));
                                n = n()
                            } else {
                                if (n = t(), null === hc) throw Error(o(349));
                                0 !== (127 & yc) || bo(r, t, n)
                            }
                            a.memoizedState = n;
                            var l = {
                                value: n,
                                getSnapshot: t
                            };
                            return a.queue = l, Ho(wo.bind(null, r, l, e), [e]), r.flags |= 2048, Do(9, {
                                destroy: void 0
                            }, xo.bind(null, r, l, n, t), null), n
                        },
                        useId: function() {
                            var e = io(),
                                t = hc.identifierPrefix;
                            if (fa) {
                                var n = ra;
                                t = "_" + t + "R_" + (n = (na & ~(1 << 32 - xe(na) - 1)).toString(32) + n), 0 < (n = Kl++) && (t += "H" + n.toString(32)), t += "_"
                            } else t = "_" + t + "r_" + (n = Gl++).toString(32) + "_";
                            return e.memoizedState = t
                        },
                        useHostTransitionStatus: ls,
                        useFormState: Lo,
                        useActionState: Lo,
                        useOptimistic: function(e) {
                            var t = io();
                            t.memoizedState = t.baseState = e;
                            var n = {
                                pending: null,
                                lanes: 0,
                                dispatch: null,
                                lastRenderedReducer: null,
                                lastRenderedState: null
                            };
                            return t.queue = n, t = fs.bind(null, Wl, !0, n), n.dispatch = t, [e, t]
                        },
                        useMemoCache: po,
                        useCacheRefresh: function() {
                            return io().memoizedState = is.bind(null, Wl)
                        },
                        useEffectEvent: function(e) {
                            var t = io(),
                                n = {
                                    impl: e
                                };
                            return t.memoizedState = n,
                                function() {
                                    if (0 !== (2 & mc)) throw Error(o(440));
                                    return n.impl.apply(void 0, arguments)
                                }
                        }
                    },
                    vs = {
                        readContext: La,
                        use: fo,
                        useCallback: Jo,
                        useContext: La,
                        useEffect: Wo,
                        useImperativeHandle: Yo,
                        useInsertionEffect: Vo,
                        useLayoutEffect: $o,
                        useMemo: Xo,
                        useReducer: ho,
                        useRef: Uo,
                        useState: function() {
                            return ho(mo)
                        },
                        useDebugValue: Ko,
                        useDeferredValue: function(e, t) {
                            return Zo(co(), ql.memoizedState, e, t)
                        },
                        useTransition: function() {
                            var e = ho(mo)[0],
                                t = co().memoizedState;
                            return ["boolean" === typeof e ? e : uo(e), t]
                        },
                        useSyncExternalStore: vo,
                        useId: os,
                        useHostTransitionStatus: ls,
                        useFormState: zo,
                        useActionState: zo,
                        useOptimistic: function(e, t) {
                            return jo(co(), 0, e, t)
                        },
                        useMemoCache: po,
                        useCacheRefresh: ss
                    };
                vs.useEffectEvent = qo;
                var bs = {
                    readContext: La,
                    use: fo,
                    useCallback: Jo,
                    useContext: La,
                    useEffect: Wo,
                    useImperativeHandle: Yo,
                    useInsertionEffect: Vo,
                    useLayoutEffect: $o,
                    useMemo: Xo,
                    useReducer: yo,
                    useRef: Uo,
                    useState: function() {
                        return yo(mo)
                    },
                    useDebugValue: Ko,
                    useDeferredValue: function(e, t) {
                        var n = co();
                        return null === ql ? Go(n, e, t) : Zo(n, ql.memoizedState, e, t)
                    },
                    useTransition: function() {
                        var e = yo(mo)[0],
                            t = co().memoizedState;
                        return ["boolean" === typeof e ? e : uo(e), t]
                    },
                    useSyncExternalStore: vo,
                    useId: os,
                    useHostTransitionStatus: ls,
                    useFormState: Mo,
                    useActionState: Mo,
                    useOptimistic: function(e, t) {
                        var n = co();
                        return null !== ql ? jo(n, 0, e, t) : (n.baseState = e, [e, n.queue.dispatch])
                    },
                    useMemoCache: po,
                    useCacheRefresh: ss
                };

                function xs(e, t, n, r) {
                    n = null === (n = n(r, t = e.memoizedState)) || void 0 === n ? t : p({}, t, n), e.memoizedState = n, 0 === e.lanes && (e.updateQueue.baseState = n)
                }
                bs.useEffectEvent = qo;
                var ws = {
                    enqueueSetState: function(e, t, n) {
                        e = e._reactInternals;
                        var r = Qc(),
                            a = bl(r);
                        a.payload = t, void 0 !== n && null !== n && (a.callback = n), null !== (t = xl(e, a, r)) && (Kc(t, e, r), wl(t, e, r))
                    },
                    enqueueReplaceState: function(e, t, n) {
                        e = e._reactInternals;
                        var r = Qc(),
                            a = bl(r);
                        a.tag = 1, a.payload = t, void 0 !== n && null !== n && (a.callback = n), null !== (t = xl(e, a, r)) && (Kc(t, e, r), wl(t, e, r))
                    },
                    enqueueForceUpdate: function(e, t) {
                        e = e._reactInternals;
                        var n = Qc(),
                            r = bl(n);
                        r.tag = 2, void 0 !== t && null !== t && (r.callback = t), null !== (t = xl(e, r, n)) && (Kc(t, e, n), wl(t, e, n))
                    }
                };

                function ks(e, t, n, r, a, l, o) {
                    return "function" === typeof(e = e.stateNode).shouldComponentUpdate ? e.shouldComponentUpdate(r, l, o) : !t.prototype || !t.prototype.isPureReactComponent || (!Zn(n, r) || !Zn(a, l))
                }

                function Ss(e, t, n, r) {
                    e = t.state, "function" === typeof t.componentWillReceiveProps && t.componentWillReceiveProps(n, r), "function" === typeof t.UNSAFE_componentWillReceiveProps && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && ws.enqueueReplaceState(t, t.state, null)
                }

                function Ns(e, t) {
                    var n = t;
                    if ("ref" in t)
                        for (var r in n = {}, t) "ref" !== r && (n[r] = t[r]);
                    if (e = e.defaultProps)
                        for (var a in n === t && (n = p({}, n)), e) void 0 === n[a] && (n[a] = e[a]);
                    return n
                }

                function js(e) {
                    Er(e)
                }

                function Es(e) {
                    console.error(e)
                }

                function Cs(e) {
                    Er(e)
                }

                function _s(e, t) {
                    try {
                        (0, e.onUncaughtError)(t.value, {
                            componentStack: t.stack
                        })
                    } catch (n) {
                        setTimeout(function() {
                            throw n
                        })
                    }
                }

                function Ts(e, t, n) {
                    try {
                        (0, e.onCaughtError)(n.value, {
                            componentStack: n.stack,
                            errorBoundary: 1 === t.tag ? t.stateNode : null
                        })
                    } catch (r) {
                        setTimeout(function() {
                            throw r
                        })
                    }
                }

                function Rs(e, t, n) {
                    return (n = bl(n)).tag = 3, n.payload = {
                        element: null
                    }, n.callback = function() {
                        _s(e, t)
                    }, n
                }

                function Ps(e) {
                    return (e = bl(e)).tag = 3, e
                }

                function Os(e, t, n, r) {
                    var a = n.type.getDerivedStateFromError;
                    if ("function" === typeof a) {
                        var l = r.value;
                        e.payload = function() {
                            return a(l)
                        }, e.callback = function() {
                            Ts(t, n, r)
                        }
                    }
                    var o = n.stateNode;
                    null !== o && "function" === typeof o.componentDidCatch && (e.callback = function() {
                        Ts(t, n, r), "function" !== typeof a && (null === Mc ? Mc = new Set([this]) : Mc.add(this));
                        var e = r.stack;
                        this.componentDidCatch(r.value, {
                            componentStack: null !== e ? e : ""
                        })
                    })
                }
                var Ls = Error(o(461)),
                    zs = !1;

                function As(e, t, n, r) {
                    t.child = null === e ? hl(t, null, n, r) : ml(t, e.child, n, r)
                }

                function Fs(e, t, n, r, a) {
                    n = n.render;
                    var l = t.ref;
                    if ("ref" in r) {
                        var o = {};
                        for (var s in r) "ref" !== s && (o[s] = r[s])
                    } else o = r;
                    return Oa(t), r = to(e, t, n, o, l, a), s = lo(), null === e || zs ? (fa && s && oa(t), t.flags |= 1, As(e, t, r, a), t.child) : (oo(e, t, a), li(e, t, a))
                }

                function Ms(e, t, n, r, a) {
                    if (null === e) {
                        var l = n.type;
                        return "function" !== typeof l || Ur(l) || void 0 !== l.defaultProps || null !== n.compare ? ((e = Hr(n.type, null, r, t, t.mode, a)).ref = t.ref, e.return = t, t.child = e) : (t.tag = 15, t.type = l, Ds(e, t, l, r, a))
                    }
                    if (l = e.child, !oi(e, a)) {
                        var o = l.memoizedProps;
                        if ((n = null !== (n = n.compare) ? n : Zn)(o, r) && e.ref === t.ref) return li(e, t, a)
                    }
                    return t.flags |= 1, (e = Ir(l, r)).ref = t.ref, e.return = t, t.child = e
                }

                function Ds(e, t, n, r, a) {
                    if (null !== e) {
                        var l = e.memoizedProps;
                        if (Zn(l, r) && e.ref === t.ref) {
                            if (zs = !1, t.pendingProps = r = l, !oi(e, a)) return t.lanes = e.lanes, li(e, t, a);
                            0 !== (131072 & e.flags) && (zs = !0)
                        }
                    }
                    return Vs(e, t, n, r, a)
                }

                function Us(e, t, n, r) {
                    var a = r.children,
                        l = null !== e ? e.memoizedState : null;
                    if (null === e && null === t.stateNode && (t.stateNode = {
                            _visibility: 1,
                            _pendingMarkers: null,
                            _retryCache: null,
                            _transitions: null
                        }), "hidden" === r.mode) {
                        if (0 !== (128 & t.flags)) {
                            if (l = null !== l ? l.baseLanes | n : n, null !== e) {
                                for (r = t.child = e.child, a = 0; null !== r;) a = a | r.lanes | r.childLanes, r = r.sibling;
                                r = a & ~l
                            } else r = 0, t.child = null;
                            return Bs(e, t, l, n, r)
                        }
                        if (0 === (536870912 & n)) return r = t.lanes = 536870912, Bs(e, t, null !== l ? l.baseLanes | n : n, n, r);
                        t.memoizedState = {
                            baseLanes: 0,
                            cachePool: null
                        }, null !== e && Ja(0, null !== l ? l.cachePool : null), null !== l ? Rl(t, l) : Pl(), Ml(t)
                    } else null !== l ? (Ja(0, l.cachePool), Rl(t, l), Dl(), t.memoizedState = null) : (null !== e && Ja(0, null), Pl(), Dl());
                    return As(e, t, a, n), t.child
                }

                function Is(e, t) {
                    return null !== e && 22 === e.tag || null !== t.stateNode || (t.stateNode = {
                        _visibility: 1,
                        _pendingMarkers: null,
                        _retryCache: null,
                        _transitions: null
                    }), t.sibling
                }

                function Bs(e, t, n, r, a) {
                    var l = Ka();
                    return l = null === l ? null : {
                        parent: Ua._currentValue,
                        pool: l
                    }, t.memoizedState = {
                        baseLanes: n,
                        cachePool: l
                    }, null !== e && Ja(0, null), Pl(), Ml(t), null !== e && Ra(e, t, r, !0), t.childLanes = a, null
                }

                function Hs(e, t) {
                    return (t = ei({
                        mode: t.mode,
                        children: t.children
                    }, e.mode)).ref = e.ref, e.child = t, t.return = e, t
                }

                function Ws(e, t, n) {
                    return ml(t, e.child, null, n), (e = Hs(t, t.pendingProps)).flags |= 2, Ul(t), t.memoizedState = null, e
                }

                function qs(e, t) {
                    var n = t.ref;
                    if (null === n) null !== e && null !== e.ref && (t.flags |= 4194816);
                    else {
                        if ("function" !== typeof n && "object" !== typeof n) throw Error(o(284));
                        null !== e && e.ref === n || (t.flags |= 4194816)
                    }
                }

                function Vs(e, t, n, r, a) {
                    return Oa(t), n = to(e, t, n, r, void 0, a), r = lo(), null === e || zs ? (fa && r && oa(t), t.flags |= 1, As(e, t, n, a), t.child) : (oo(e, t, a), li(e, t, a))
                }

                function $s(e, t, n, r, a, l) {
                    return Oa(t), t.updateQueue = null, n = ro(t, r, n, a), no(e), r = lo(), null === e || zs ? (fa && r && oa(t), t.flags |= 1, As(e, t, n, l), t.child) : (oo(e, t, l), li(e, t, l))
                }

                function Qs(e, t, n, r, a) {
                    if (Oa(t), null === t.stateNode) {
                        var l = Fr,
                            o = n.contextType;
                        "object" === typeof o && null !== o && (l = La(o)), l = new n(r, l), t.memoizedState = null !== l.state && void 0 !== l.state ? l.state : null, l.updater = ws, t.stateNode = l, l._reactInternals = t, (l = t.stateNode).props = r, l.state = t.memoizedState, l.refs = {}, yl(t), o = n.contextType, l.context = "object" === typeof o && null !== o ? La(o) : Fr, l.state = t.memoizedState, "function" === typeof(o = n.getDerivedStateFromProps) && (xs(t, n, o, r), l.state = t.memoizedState), "function" === typeof n.getDerivedStateFromProps || "function" === typeof l.getSnapshotBeforeUpdate || "function" !== typeof l.UNSAFE_componentWillMount && "function" !== typeof l.componentWillMount || (o = l.state, "function" === typeof l.componentWillMount && l.componentWillMount(), "function" === typeof l.UNSAFE_componentWillMount && l.UNSAFE_componentWillMount(), o !== l.state && ws.enqueueReplaceState(l, l.state, null), jl(t, r, l, a), Nl(), l.state = t.memoizedState), "function" === typeof l.componentDidMount && (t.flags |= 4194308), r = !0
                    } else if (null === e) {
                        l = t.stateNode;
                        var s = t.memoizedProps,
                            i = Ns(n, s);
                        l.props = i;
                        var c = l.context,
                            u = n.contextType;
                        o = Fr, "object" === typeof u && null !== u && (o = La(u));
                        var d = n.getDerivedStateFromProps;
                        u = "function" === typeof d || "function" === typeof l.getSnapshotBeforeUpdate, s = t.pendingProps !== s, u || "function" !== typeof l.UNSAFE_componentWillReceiveProps && "function" !== typeof l.componentWillReceiveProps || (s || c !== o) && Ss(t, l, r, o), gl = !1;
                        var f = t.memoizedState;
                        l.state = f, jl(t, r, l, a), Nl(), c = t.memoizedState, s || f !== c || gl ? ("function" === typeof d && (xs(t, n, d, r), c = t.memoizedState), (i = gl || ks(t, n, i, r, f, c, o)) ? (u || "function" !== typeof l.UNSAFE_componentWillMount && "function" !== typeof l.componentWillMount || ("function" === typeof l.componentWillMount && l.componentWillMount(), "function" === typeof l.UNSAFE_componentWillMount && l.UNSAFE_componentWillMount()), "function" === typeof l.componentDidMount && (t.flags |= 4194308)) : ("function" === typeof l.componentDidMount && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = c), l.props = r, l.state = c, l.context = o, r = i) : ("function" === typeof l.componentDidMount && (t.flags |= 4194308), r = !1)
                    } else {
                        l = t.stateNode, vl(e, t), u = Ns(n, o = t.memoizedProps), l.props = u, d = t.pendingProps, f = l.context, c = n.contextType, i = Fr, "object" === typeof c && null !== c && (i = La(c)), (c = "function" === typeof(s = n.getDerivedStateFromProps) || "function" === typeof l.getSnapshotBeforeUpdate) || "function" !== typeof l.UNSAFE_componentWillReceiveProps && "function" !== typeof l.componentWillReceiveProps || (o !== d || f !== i) && Ss(t, l, r, i), gl = !1, f = t.memoizedState, l.state = f, jl(t, r, l, a), Nl();
                        var p = t.memoizedState;
                        o !== d || f !== p || gl || null !== e && null !== e.dependencies && Pa(e.dependencies) ? ("function" === typeof s && (xs(t, n, s, r), p = t.memoizedState), (u = gl || ks(t, n, u, r, f, p, i) || null !== e && null !== e.dependencies && Pa(e.dependencies)) ? (c || "function" !== typeof l.UNSAFE_componentWillUpdate && "function" !== typeof l.componentWillUpdate || ("function" === typeof l.componentWillUpdate && l.componentWillUpdate(r, p, i), "function" === typeof l.UNSAFE_componentWillUpdate && l.UNSAFE_componentWillUpdate(r, p, i)), "function" === typeof l.componentDidUpdate && (t.flags |= 4), "function" === typeof l.getSnapshotBeforeUpdate && (t.flags |= 1024)) : ("function" !== typeof l.componentDidUpdate || o === e.memoizedProps && f === e.memoizedState || (t.flags |= 4), "function" !== typeof l.getSnapshotBeforeUpdate || o === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = p), l.props = r, l.state = p, l.context = i, r = u) : ("function" !== typeof l.componentDidUpdate || o === e.memoizedProps && f === e.memoizedState || (t.flags |= 4), "function" !== typeof l.getSnapshotBeforeUpdate || o === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024), r = !1)
                    }
                    return l = r, qs(e, t), r = 0 !== (128 & t.flags), l || r ? (l = t.stateNode, n = r && "function" !== typeof n.getDerivedStateFromError ? null : l.render(), t.flags |= 1, null !== e && r ? (t.child = ml(t, e.child, null, a), t.child = ml(t, null, n, a)) : As(e, t, n, a), t.memoizedState = l.state, e = t.child) : e = li(e, t, a), e
                }

                function Ys(e, t, n, r) {
                    return xa(), t.flags |= 256, As(e, t, n, r), t.child
                }
                var Ks = {
                    dehydrated: null,
                    treeContext: null,
                    retryLane: 0,
                    hydrationErrors: null
                };

                function Js(e) {
                    return {
                        baseLanes: e,
                        cachePool: Xa()
                    }
                }

                function Xs(e, t, n) {
                    return e = null !== e ? e.childLanes & ~n : 0, t && (e |= _c), e
                }

                function Gs(e, t, n) {
                    var r, a = t.pendingProps,
                        l = !1,
                        s = 0 !== (128 & t.flags);
                    if ((r = s) || (r = (null === e || null !== e.memoizedState) && 0 !== (2 & Il.current)), r && (l = !0, t.flags &= -129), r = 0 !== (32 & t.flags), t.flags &= -33, null === e) {
                        if (fa) {
                            if (l ? Al(t) : Dl(), (e = da) ? null !== (e = null !== (e = Pd(e, ma)) && "&" !== e.data ? e : null) && (t.memoizedState = {
                                    dehydrated: e,
                                    treeContext: null !== ta ? {
                                        id: na,
                                        overflow: ra
                                    } : null,
                                    retryLane: 536870912,
                                    hydrationErrors: null
                                }, (n = Vr(e)).return = t, t.child = n, ua = t, da = null) : e = null, null === e) throw ga(t);
                            return Ld(e) ? t.lanes = 32 : t.lanes = 536870912, null
                        }
                        var i = a.children;
                        return a = a.fallback, l ? (Dl(), i = ei({
                            mode: "hidden",
                            children: i
                        }, l = t.mode), a = Wr(a, l, n, null), i.return = t, a.return = t, i.sibling = a, t.child = i, (a = t.child).memoizedState = Js(n), a.childLanes = Xs(e, r, n), t.memoizedState = Ks, Is(null, a)) : (Al(t), Zs(t, i))
                    }
                    var c = e.memoizedState;
                    if (null !== c && null !== (i = c.dehydrated)) {
                        if (s) 256 & t.flags ? (Al(t), t.flags &= -257, t = ti(e, t, n)) : null !== t.memoizedState ? (Dl(), t.child = e.child, t.flags |= 128, t = null) : (Dl(), i = a.fallback, l = t.mode, a = ei({
                            mode: "visible",
                            children: a.children
                        }, l), (i = Wr(i, l, n, null)).flags |= 2, a.return = t, i.return = t, a.sibling = i, t.child = a, ml(t, e.child, null, n), (a = t.child).memoizedState = Js(n), a.childLanes = Xs(e, r, n), t.memoizedState = Ks, t = Is(null, a));
                        else if (Al(t), Ld(i)) {
                            if (r = i.nextSibling && i.nextSibling.dataset) var u = r.dgst;
                            r = u, (a = Error(o(419))).stack = "", a.digest = r, ka({
                                value: a,
                                source: null,
                                stack: null
                            }), t = ti(e, t, n)
                        } else if (zs || Ra(e, t, n, !1), r = 0 !== (n & e.childLanes), zs || r) {
                            if (null !== (r = hc) && (0 !== (a = Ae(r, n)) && a !== c.retryLane)) throw c.retryLane = a, Lr(e, a), Kc(r, e, a), Ls;
                            Od(i) || su(), t = ti(e, t, n)
                        } else Od(i) ? (t.flags |= 192, t.child = e.child, t = null) : (e = c.treeContext, da = zd(i.nextSibling), ua = t, fa = !0, pa = null, ma = !1, null !== e && ca(t, e), (t = Zs(t, a.children)).flags |= 4096);
                        return t
                    }
                    return l ? (Dl(), i = a.fallback, l = t.mode, u = (c = e.child).sibling, (a = Ir(c, {
                        mode: "hidden",
                        children: a.children
                    })).subtreeFlags = 65011712 & c.subtreeFlags, null !== u ? i = Ir(u, i) : (i = Wr(i, l, n, null)).flags |= 2, i.return = t, a.return = t, a.sibling = i, t.child = a, Is(null, a), a = t.child, null === (i = e.child.memoizedState) ? i = Js(n) : (null !== (l = i.cachePool) ? (c = Ua._currentValue, l = l.parent !== c ? {
                        parent: c,
                        pool: c
                    } : l) : l = Xa(), i = {
                        baseLanes: i.baseLanes | n,
                        cachePool: l
                    }), a.memoizedState = i, a.childLanes = Xs(e, r, n), t.memoizedState = Ks, Is(e.child, a)) : (Al(t), e = (n = e.child).sibling, (n = Ir(n, {
                        mode: "visible",
                        children: a.children
                    })).return = t, n.sibling = null, null !== e && (null === (r = t.deletions) ? (t.deletions = [e], t.flags |= 16) : r.push(e)), t.child = n, t.memoizedState = null, n)
                }

                function Zs(e, t) {
                    return (t = ei({
                        mode: "visible",
                        children: t
                    }, e.mode)).return = e, e.child = t
                }

                function ei(e, t) {
                    return (e = Dr(22, e, null, t)).lanes = 0, e
                }

                function ti(e, t, n) {
                    return ml(t, e.child, null, n), (e = Zs(t, t.pendingProps.children)).flags |= 2, t.memoizedState = null, e
                }

                function ni(e, t, n) {
                    e.lanes |= t;
                    var r = e.alternate;
                    null !== r && (r.lanes |= t), _a(e.return, t, n)
                }

                function ri(e, t, n, r, a, l) {
                    var o = e.memoizedState;
                    null === o ? e.memoizedState = {
                        isBackwards: t,
                        rendering: null,
                        renderingStartTime: 0,
                        last: r,
                        tail: n,
                        tailMode: a,
                        treeForkCount: l
                    } : (o.isBackwards = t, o.rendering = null, o.renderingStartTime = 0, o.last = r, o.tail = n, o.tailMode = a, o.treeForkCount = l)
                }

                function ai(e, t, n) {
                    var r = t.pendingProps,
                        a = r.revealOrder,
                        l = r.tail;
                    r = r.children;
                    var o = Il.current,
                        s = 0 !== (2 & o);
                    if (s ? (o = 1 & o | 2, t.flags |= 128) : o &= 1, B(Il, o), As(e, t, r, n), r = fa ? Gr : 0, !s && null !== e && 0 !== (128 & e.flags)) e: for (e = t.child; null !== e;) {
                        if (13 === e.tag) null !== e.memoizedState && ni(e, n, t);
                        else if (19 === e.tag) ni(e, n, t);
                        else if (null !== e.child) {
                            e.child.return = e, e = e.child;
                            continue
                        }
                        if (e === t) break e;
                        for (; null === e.sibling;) {
                            if (null === e.return || e.return === t) break e;
                            e = e.return
                        }
                        e.sibling.return = e.return, e = e.sibling
                    }
                    switch (a) {
                        case "forwards":
                            for (n = t.child, a = null; null !== n;) null !== (e = n.alternate) && null === Bl(e) && (a = n), n = n.sibling;
                            null === (n = a) ? (a = t.child, t.child = null) : (a = n.sibling, n.sibling = null), ri(t, !1, a, n, l, r);
                            break;
                        case "backwards":
                        case "unstable_legacy-backwards":
                            for (n = null, a = t.child, t.child = null; null !== a;) {
                                if (null !== (e = a.alternate) && null === Bl(e)) {
                                    t.child = a;
                                    break
                                }
                                e = a.sibling, a.sibling = n, n = a, a = e
                            }
                            ri(t, !0, n, null, l, r);
                            break;
                        case "together":
                            ri(t, !1, null, null, void 0, r);
                            break;
                        default:
                            t.memoizedState = null
                    }
                    return t.child
                }

                function li(e, t, n) {
                    if (null !== e && (t.dependencies = e.dependencies), jc |= t.lanes, 0 === (n & t.childLanes)) {
                        if (null === e) return null;
                        if (Ra(e, t, n, !1), 0 === (n & t.childLanes)) return null
                    }
                    if (null !== e && t.child !== e.child) throw Error(o(153));
                    if (null !== t.child) {
                        for (n = Ir(e = t.child, e.pendingProps), t.child = n, n.return = t; null !== e.sibling;) e = e.sibling, (n = n.sibling = Ir(e, e.pendingProps)).return = t;
                        n.sibling = null
                    }
                    return t.child
                }

                function oi(e, t) {
                    return 0 !== (e.lanes & t) || !(null === (e = e.dependencies) || !Pa(e))
                }

                function si(e, t, n) {
                    if (null !== e)
                        if (e.memoizedProps !== t.pendingProps) zs = !0;
                        else {
                            if (!oi(e, n) && 0 === (128 & t.flags)) return zs = !1,
                                function(e, t, n) {
                                    switch (t.tag) {
                                        case 3:
                                            Y(t, t.stateNode.containerInfo), Ea(0, Ua, e.memoizedState.cache), xa();
                                            break;
                                        case 27:
                                        case 5:
                                            J(t);
                                            break;
                                        case 4:
                                            Y(t, t.stateNode.containerInfo);
                                            break;
                                        case 10:
                                            Ea(0, t.type, t.memoizedProps.value);
                                            break;
                                        case 31:
                                            if (null !== t.memoizedState) return t.flags |= 128, Fl(t), null;
                                            break;
                                        case 13:
                                            var r = t.memoizedState;
                                            if (null !== r) return null !== r.dehydrated ? (Al(t), t.flags |= 128, null) : 0 !== (n & t.child.childLanes) ? Gs(e, t, n) : (Al(t), null !== (e = li(e, t, n)) ? e.sibling : null);
                                            Al(t);
                                            break;
                                        case 19:
                                            var a = 0 !== (128 & e.flags);
                                            if ((r = 0 !== (n & t.childLanes)) || (Ra(e, t, n, !1), r = 0 !== (n & t.childLanes)), a) {
                                                if (r) return ai(e, t, n);
                                                t.flags |= 128
                                            }
                                            if (null !== (a = t.memoizedState) && (a.rendering = null, a.tail = null, a.lastEffect = null), B(Il, Il.current), r) break;
                                            return null;
                                        case 22:
                                            return t.lanes = 0, Us(e, t, n, t.pendingProps);
                                        case 24:
                                            Ea(0, Ua, e.memoizedState.cache)
                                    }
                                    return li(e, t, n)
                                }(e, t, n);
                            zs = 0 !== (131072 & e.flags)
                        }
                    else zs = !1, fa && 0 !== (1048576 & t.flags) && la(t, Gr, t.index);
                    switch (t.lanes = 0, t.tag) {
                        case 16:
                            e: {
                                var r = t.pendingProps;
                                if (e = al(t.elementType), t.type = e, "function" !== typeof e) {
                                    if (void 0 !== e && null !== e) {
                                        var a = e.$$typeof;
                                        if (a === k) {
                                            t.tag = 11, t = Fs(null, t, e, r, n);
                                            break e
                                        }
                                        if (a === j) {
                                            t.tag = 14, t = Ms(null, t, e, r, n);
                                            break e
                                        }
                                    }
                                    throw t = O(e) || e, Error(o(306, t, ""))
                                }
                                Ur(e) ? (r = Ns(e, r), t.tag = 1, t = Qs(null, t, e, r, n)) : (t.tag = 0, t = Vs(null, t, e, r, n))
                            }
                            return t;
                        case 0:
                            return Vs(e, t, t.type, t.pendingProps, n);
                        case 1:
                            return Qs(e, t, r = t.type, a = Ns(r, t.pendingProps), n);
                        case 3:
                            e: {
                                if (Y(t, t.stateNode.containerInfo), null === e) throw Error(o(387));r = t.pendingProps;
                                var l = t.memoizedState;a = l.element,
                                vl(e, t),
                                jl(t, r, null, n);
                                var s = t.memoizedState;
                                if (r = s.cache, Ea(0, Ua, r), r !== l.cache && Ta(t, [Ua], n, !0), Nl(), r = s.element, l.isDehydrated) {
                                    if (l = {
                                            element: r,
                                            isDehydrated: !1,
                                            cache: s.cache
                                        }, t.updateQueue.baseState = l, t.memoizedState = l, 256 & t.flags) {
                                        t = Ys(e, t, r, n);
                                        break e
                                    }
                                    if (r !== a) {
                                        ka(a = Yr(Error(o(424)), t)), t = Ys(e, t, r, n);
                                        break e
                                    }
                                    if (9 === (e = t.stateNode.containerInfo).nodeType) e = e.body;
                                    else e = "HTML" === e.nodeName ? e.ownerDocument.body : e;
                                    for (da = zd(e.firstChild), ua = t, fa = !0, pa = null, ma = !0, n = hl(t, null, r, n), t.child = n; n;) n.flags = -3 & n.flags | 4096, n = n.sibling
                                } else {
                                    if (xa(), r === a) {
                                        t = li(e, t, n);
                                        break e
                                    }
                                    As(e, t, r, n)
                                }
                                t = t.child
                            }
                            return t;
                        case 26:
                            return qs(e, t), null === e ? (n = $d(t.type, null, t.pendingProps, null)) ? t.memoizedState = n : fa || (n = t.type, e = t.pendingProps, (r = yd($.current).createElement(n))[Be] = t, r[He] = e, pd(r, n, e), et(r), t.stateNode = r) : t.memoizedState = $d(t.type, e.memoizedProps, t.pendingProps, e.memoizedState), null;
                        case 27:
                            return J(t), null === e && fa && (r = t.stateNode = Dd(t.type, t.pendingProps, $.current), ua = t, ma = !0, a = da, Cd(t.type) ? (Ad = a, da = zd(r.firstChild)) : da = a), As(e, t, t.pendingProps.children, n), qs(e, t), null === e && (t.flags |= 4194304), t.child;
                        case 5:
                            return null === e && fa && ((a = r = da) && (null !== (r = function(e, t, n, r) {
                                for (; 1 === e.nodeType;) {
                                    var a = n;
                                    if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
                                        if (!r && ("INPUT" !== e.nodeName || "hidden" !== e.type)) break
                                    } else if (r) {
                                        if (!e[Ye]) switch (t) {
                                            case "meta":
                                                if (!e.hasAttribute("itemprop")) break;
                                                return e;
                                            case "link":
                                                if ("stylesheet" === (l = e.getAttribute("rel")) && e.hasAttribute("data-precedence")) break;
                                                if (l !== a.rel || e.getAttribute("href") !== (null == a.href || "" === a.href ? null : a.href) || e.getAttribute("crossorigin") !== (null == a.crossOrigin ? null : a.crossOrigin) || e.getAttribute("title") !== (null == a.title ? null : a.title)) break;
                                                return e;
                                            case "style":
                                                if (e.hasAttribute("data-precedence")) break;
                                                return e;
                                            case "script":
                                                if (((l = e.getAttribute("src")) !== (null == a.src ? null : a.src) || e.getAttribute("type") !== (null == a.type ? null : a.type) || e.getAttribute("crossorigin") !== (null == a.crossOrigin ? null : a.crossOrigin)) && l && e.hasAttribute("async") && !e.hasAttribute("itemprop")) break;
                                                return e;
                                            default:
                                                return e
                                        }
                                    } else {
                                        if ("input" !== t || "hidden" !== e.type) return e;
                                        var l = null == a.name ? null : "" + a.name;
                                        if ("hidden" === a.type && e.getAttribute("name") === l) return e
                                    }
                                    if (null === (e = zd(e.nextSibling))) break
                                }
                                return null
                            }(r, t.type, t.pendingProps, ma)) ? (t.stateNode = r, ua = t, da = zd(r.firstChild), ma = !1, a = !0) : a = !1), a || ga(t)), J(t), a = t.type, l = t.pendingProps, s = null !== e ? e.memoizedProps : null, r = l.children, xd(a, l) ? r = null : null !== s && xd(a, s) && (t.flags |= 32), null !== t.memoizedState && (a = to(e, t, ao, null, null, n), ff._currentValue = a), qs(e, t), As(e, t, r, n), t.child;
                        case 6:
                            return null === e && fa && ((e = n = da) && (null !== (n = function(e, t, n) {
                                if ("" === t) return null;
                                for (; 3 !== e.nodeType;) {
                                    if ((1 !== e.nodeType || "INPUT" !== e.nodeName || "hidden" !== e.type) && !n) return null;
                                    if (null === (e = zd(e.nextSibling))) return null
                                }
                                return e
                            }(n, t.pendingProps, ma)) ? (t.stateNode = n, ua = t, da = null, e = !0) : e = !1), e || ga(t)), null;
                        case 13:
                            return Gs(e, t, n);
                        case 4:
                            return Y(t, t.stateNode.containerInfo), r = t.pendingProps, null === e ? t.child = ml(t, null, r, n) : As(e, t, r, n), t.child;
                        case 11:
                            return Fs(e, t, t.type, t.pendingProps, n);
                        case 7:
                            return As(e, t, t.pendingProps, n), t.child;
                        case 8:
                        case 12:
                            return As(e, t, t.pendingProps.children, n), t.child;
                        case 10:
                            return r = t.pendingProps, Ea(0, t.type, r.value), As(e, t, r.children, n), t.child;
                        case 9:
                            return a = t.type._context, r = t.pendingProps.children, Oa(t), r = r(a = La(a)), t.flags |= 1, As(e, t, r, n), t.child;
                        case 14:
                            return Ms(e, t, t.type, t.pendingProps, n);
                        case 15:
                            return Ds(e, t, t.type, t.pendingProps, n);
                        case 19:
                            return ai(e, t, n);
                        case 31:
                            return function(e, t, n) {
                                var r = t.pendingProps,
                                    a = 0 !== (128 & t.flags);
                                if (t.flags &= -129, null === e) {
                                    if (fa) {
                                        if ("hidden" === r.mode) return e = Hs(t, r), t.lanes = 536870912, Is(null, e);
                                        if (Fl(t), (e = da) ? null !== (e = null !== (e = Pd(e, ma)) && "&" === e.data ? e : null) && (t.memoizedState = {
                                                dehydrated: e,
                                                treeContext: null !== ta ? {
                                                    id: na,
                                                    overflow: ra
                                                } : null,
                                                retryLane: 536870912,
                                                hydrationErrors: null
                                            }, (n = Vr(e)).return = t, t.child = n, ua = t, da = null) : e = null, null === e) throw ga(t);
                                        return t.lanes = 536870912, null
                                    }
                                    return Hs(t, r)
                                }
                                var l = e.memoizedState;
                                if (null !== l) {
                                    var s = l.dehydrated;
                                    if (Fl(t), a)
                                        if (256 & t.flags) t.flags &= -257, t = Ws(e, t, n);
                                        else {
                                            if (null === t.memoizedState) throw Error(o(558));
                                            t.child = e.child, t.flags |= 128, t = null
                                        }
                                    else if (zs || Ra(e, t, n, !1), a = 0 !== (n & e.childLanes), zs || a) {
                                        if (null !== (r = hc) && 0 !== (s = Ae(r, n)) && s !== l.retryLane) throw l.retryLane = s, Lr(e, s), Kc(r, e, s), Ls;
                                        su(), t = Ws(e, t, n)
                                    } else e = l.treeContext, da = zd(s.nextSibling), ua = t, fa = !0, pa = null, ma = !1, null !== e && ca(t, e), (t = Hs(t, r)).flags |= 4096;
                                    return t
                                }
                                return (e = Ir(e.child, {
                                    mode: r.mode,
                                    children: r.children
                                })).ref = t.ref, t.child = e, e.return = t, e
                            }(e, t, n);
                        case 22:
                            return Us(e, t, n, t.pendingProps);
                        case 24:
                            return Oa(t), r = La(Ua), null === e ? (null === (a = Ka()) && (a = hc, l = Ia(), a.pooledCache = l, l.refCount++, null !== l && (a.pooledCacheLanes |= n), a = l), t.memoizedState = {
                                parent: r,
                                cache: a
                            }, yl(t), Ea(0, Ua, a)) : (0 !== (e.lanes & n) && (vl(e, t), jl(t, null, null, n), Nl()), a = e.memoizedState, l = t.memoizedState, a.parent !== r ? (a = {
                                parent: r,
                                cache: r
                            }, t.memoizedState = a, 0 === t.lanes && (t.memoizedState = t.updateQueue.baseState = a), Ea(0, Ua, r)) : (r = l.cache, Ea(0, Ua, r), r !== a.cache && Ta(t, [Ua], n, !0))), As(e, t, t.pendingProps.children, n), t.child;
                        case 29:
                            throw t.pendingProps
                    }
                    throw Error(o(156, t.tag))
                }

                function ii(e) {
                    e.flags |= 4
                }

                function ci(e, t, n, r, a) {
                    if ((t = 0 !== (32 & e.mode)) && (t = !1), t) {
                        if (e.flags |= 16777216, (335544128 & a) === a)
                            if (e.stateNode.complete) e.flags |= 8192;
                            else {
                                if (!au()) throw ll = tl, Za;
                                e.flags |= 8192
                            }
                    } else e.flags &= -16777217
                }

                function ui(e, t) {
                    if ("stylesheet" !== t.type || 0 !== (4 & t.state.loading)) e.flags &= -16777217;
                    else if (e.flags |= 16777216, !lf(t)) {
                        if (!au()) throw ll = tl, Za;
                        e.flags |= 8192
                    }
                }

                function di(e, t) {
                    null !== t && (e.flags |= 4), 16384 & e.flags && (t = 22 !== e.tag ? Re() : 536870912, e.lanes |= t, Tc |= t)
                }

                function fi(e, t) {
                    if (!fa) switch (e.tailMode) {
                        case "hidden":
                            t = e.tail;
                            for (var n = null; null !== t;) null !== t.alternate && (n = t), t = t.sibling;
                            null === n ? e.tail = null : n.sibling = null;
                            break;
                        case "collapsed":
                            n = e.tail;
                            for (var r = null; null !== n;) null !== n.alternate && (r = n), n = n.sibling;
                            null === r ? t || null === e.tail ? e.tail = null : e.tail.sibling = null : r.sibling = null
                    }
                }

                function pi(e) {
                    var t = null !== e.alternate && e.alternate.child === e.child,
                        n = 0,
                        r = 0;
                    if (t)
                        for (var a = e.child; null !== a;) n |= a.lanes | a.childLanes, r |= 65011712 & a.subtreeFlags, r |= 65011712 & a.flags, a.return = e, a = a.sibling;
                    else
                        for (a = e.child; null !== a;) n |= a.lanes | a.childLanes, r |= a.subtreeFlags, r |= a.flags, a.return = e, a = a.sibling;
                    return e.subtreeFlags |= r, e.childLanes = n, t
                }

                function mi(e, t, n) {
                    var r = t.pendingProps;
                    switch (ia(t), t.tag) {
                        case 16:
                        case 15:
                        case 0:
                        case 11:
                        case 7:
                        case 8:
                        case 12:
                        case 9:
                        case 14:
                        case 1:
                            return pi(t), null;
                        case 3:
                            return n = t.stateNode, r = null, null !== e && (r = e.memoizedState.cache), t.memoizedState.cache !== r && (t.flags |= 2048), Ca(Ua), K(), n.pendingContext && (n.context = n.pendingContext, n.pendingContext = null), null !== e && null !== e.child || (ba(t) ? ii(t) : null === e || e.memoizedState.isDehydrated && 0 === (256 & t.flags) || (t.flags |= 1024, wa())), pi(t), null;
                        case 26:
                            var a = t.type,
                                l = t.memoizedState;
                            return null === e ? (ii(t), null !== l ? (pi(t), ui(t, l)) : (pi(t), ci(t, a, 0, 0, n))) : l ? l !== e.memoizedState ? (ii(t), pi(t), ui(t, l)) : (pi(t), t.flags &= -16777217) : ((e = e.memoizedProps) !== r && ii(t), pi(t), ci(t, a, 0, 0, n)), null;
                        case 27:
                            if (X(t), n = $.current, a = t.type, null !== e && null != t.stateNode) e.memoizedProps !== r && ii(t);
                            else {
                                if (!r) {
                                    if (null === t.stateNode) throw Error(o(166));
                                    return pi(t), null
                                }
                                e = q.current, ba(t) ? ya(t) : (e = Dd(a, r, n), t.stateNode = e, ii(t))
                            }
                            return pi(t), null;
                        case 5:
                            if (X(t), a = t.type, null !== e && null != t.stateNode) e.memoizedProps !== r && ii(t);
                            else {
                                if (!r) {
                                    if (null === t.stateNode) throw Error(o(166));
                                    return pi(t), null
                                }
                                if (l = q.current, ba(t)) ya(t);
                                else {
                                    var s = yd($.current);
                                    switch (l) {
                                        case 1:
                                            l = s.createElementNS("http://www.w3.org/2000/svg", a);
                                            break;
                                        case 2:
                                            l = s.createElementNS("http://www.w3.org/1998/Math/MathML", a);
                                            break;
                                        default:
                                            switch (a) {
                                                case "svg":
                                                    l = s.createElementNS("http://www.w3.org/2000/svg", a);
                                                    break;
                                                case "math":
                                                    l = s.createElementNS("http://www.w3.org/1998/Math/MathML", a);
                                                    break;
                                                case "script":
                                                    (l = s.createElement("div")).innerHTML = "<script><\/script>", l = l.removeChild(l.firstChild);
                                                    break;
                                                case "select":
                                                    l = "string" === typeof r.is ? s.createElement("select", {
                                                        is: r.is
                                                    }) : s.createElement("select"), r.multiple ? l.multiple = !0 : r.size && (l.size = r.size);
                                                    break;
                                                default:
                                                    l = "string" === typeof r.is ? s.createElement(a, {
                                                        is: r.is
                                                    }) : s.createElement(a)
                                            }
                                    }
                                    l[Be] = t, l[He] = r;
                                    e: for (s = t.child; null !== s;) {
                                        if (5 === s.tag || 6 === s.tag) l.appendChild(s.stateNode);
                                        else if (4 !== s.tag && 27 !== s.tag && null !== s.child) {
                                            s.child.return = s, s = s.child;
                                            continue
                                        }
                                        if (s === t) break e;
                                        for (; null === s.sibling;) {
                                            if (null === s.return || s.return === t) break e;
                                            s = s.return
                                        }
                                        s.sibling.return = s.return, s = s.sibling
                                    }
                                    t.stateNode = l;
                                    e: switch (pd(l, a, r), a) {
                                        case "button":
                                        case "input":
                                        case "select":
                                        case "textarea":
                                            r = !!r.autoFocus;
                                            break e;
                                        case "img":
                                            r = !0;
                                            break e;
                                        default:
                                            r = !1
                                    }
                                    r && ii(t)
                                }
                            }
                            return pi(t), ci(t, t.type, null === e || e.memoizedProps, t.pendingProps, n), null;
                        case 6:
                            if (e && null != t.stateNode) e.memoizedProps !== r && ii(t);
                            else {
                                if ("string" !== typeof r && null === t.stateNode) throw Error(o(166));
                                if (e = $.current, ba(t)) {
                                    if (e = t.stateNode, n = t.memoizedProps, r = null, null !== (a = ua)) switch (a.tag) {
                                        case 27:
                                        case 5:
                                            r = a.memoizedProps
                                    }
                                    e[Be] = t, (e = !!(e.nodeValue === n || null !== r && !0 === r.suppressHydrationWarning || ud(e.nodeValue, n))) || ga(t, !0)
                                } else(e = yd(e).createTextNode(r))[Be] = t, t.stateNode = e
                            }
                            return pi(t), null;
                        case 31:
                            if (n = t.memoizedState, null === e || null !== e.memoizedState) {
                                if (r = ba(t), null !== n) {
                                    if (null === e) {
                                        if (!r) throw Error(o(318));
                                        if (!(e = null !== (e = t.memoizedState) ? e.dehydrated : null)) throw Error(o(557));
                                        e[Be] = t
                                    } else xa(), 0 === (128 & t.flags) && (t.memoizedState = null), t.flags |= 4;
                                    pi(t), e = !1
                                } else n = wa(), null !== e && null !== e.memoizedState && (e.memoizedState.hydrationErrors = n), e = !0;
                                if (!e) return 256 & t.flags ? (Ul(t), t) : (Ul(t), null);
                                if (0 !== (128 & t.flags)) throw Error(o(558))
                            }
                            return pi(t), null;
                        case 13:
                            if (r = t.memoizedState, null === e || null !== e.memoizedState && null !== e.memoizedState.dehydrated) {
                                if (a = ba(t), null !== r && null !== r.dehydrated) {
                                    if (null === e) {
                                        if (!a) throw Error(o(318));
                                        if (!(a = null !== (a = t.memoizedState) ? a.dehydrated : null)) throw Error(o(317));
                                        a[Be] = t
                                    } else xa(), 0 === (128 & t.flags) && (t.memoizedState = null), t.flags |= 4;
                                    pi(t), a = !1
                                } else a = wa(), null !== e && null !== e.memoizedState && (e.memoizedState.hydrationErrors = a), a = !0;
                                if (!a) return 256 & t.flags ? (Ul(t), t) : (Ul(t), null)
                            }
                            return Ul(t), 0 !== (128 & t.flags) ? (t.lanes = n, t) : (n = null !== r, e = null !== e && null !== e.memoizedState, n && (a = null, null !== (r = t.child).alternate && null !== r.alternate.memoizedState && null !== r.alternate.memoizedState.cachePool && (a = r.alternate.memoizedState.cachePool.pool), l = null, null !== r.memoizedState && null !== r.memoizedState.cachePool && (l = r.memoizedState.cachePool.pool), l !== a && (r.flags |= 2048)), n !== e && n && (t.child.flags |= 8192), di(t, t.updateQueue), pi(t), null);
                        case 4:
                            return K(), null === e && ed(t.stateNode.containerInfo), pi(t), null;
                        case 10:
                            return Ca(t.type), pi(t), null;
                        case 19:
                            if (I(Il), null === (r = t.memoizedState)) return pi(t), null;
                            if (a = 0 !== (128 & t.flags), null === (l = r.rendering))
                                if (a) fi(r, !1);
                                else {
                                    if (0 !== Nc || null !== e && 0 !== (128 & e.flags))
                                        for (e = t.child; null !== e;) {
                                            if (null !== (l = Bl(e))) {
                                                for (t.flags |= 128, fi(r, !1), e = l.updateQueue, t.updateQueue = e, di(t, e), t.subtreeFlags = 0, e = n, n = t.child; null !== n;) Br(n, e), n = n.sibling;
                                                return B(Il, 1 & Il.current | 2), fa && aa(t, r.treeForkCount), t.child
                                            }
                                            e = e.sibling
                                        }
                                    null !== r.tail && ie() > Ac && (t.flags |= 128, a = !0, fi(r, !1), t.lanes = 4194304)
                                }
                            else {
                                if (!a)
                                    if (null !== (e = Bl(l))) {
                                        if (t.flags |= 128, a = !0, e = e.updateQueue, t.updateQueue = e, di(t, e), fi(r, !0), null === r.tail && "hidden" === r.tailMode && !l.alternate && !fa) return pi(t), null
                                    } else 2 * ie() - r.renderingStartTime > Ac && 536870912 !== n && (t.flags |= 128, a = !0, fi(r, !1), t.lanes = 4194304);
                                r.isBackwards ? (l.sibling = t.child, t.child = l) : (null !== (e = r.last) ? e.sibling = l : t.child = l, r.last = l)
                            }
                            return null !== r.tail ? (e = r.tail, r.rendering = e, r.tail = e.sibling, r.renderingStartTime = ie(), e.sibling = null, n = Il.current, B(Il, a ? 1 & n | 2 : 1 & n), fa && aa(t, r.treeForkCount), e) : (pi(t), null);
                        case 22:
                        case 23:
                            return Ul(t), Ol(), r = null !== t.memoizedState, null !== e ? null !== e.memoizedState !== r && (t.flags |= 8192) : r && (t.flags |= 8192), r ? 0 !== (536870912 & n) && 0 === (128 & t.flags) && (pi(t), 6 & t.subtreeFlags && (t.flags |= 8192)) : pi(t), null !== (n = t.updateQueue) && di(t, n.retryQueue), n = null, null !== e && null !== e.memoizedState && null !== e.memoizedState.cachePool && (n = e.memoizedState.cachePool.pool), r = null, null !== t.memoizedState && null !== t.memoizedState.cachePool && (r = t.memoizedState.cachePool.pool), r !== n && (t.flags |= 2048), null !== e && I(Ya), null;
                        case 24:
                            return n = null, null !== e && (n = e.memoizedState.cache), t.memoizedState.cache !== n && (t.flags |= 2048), Ca(Ua), pi(t), null;
                        case 25:
                        case 30:
                            return null
                    }
                    throw Error(o(156, t.tag))
                }

                function hi(e, t) {
                    switch (ia(t), t.tag) {
                        case 1:
                            return 65536 & (e = t.flags) ? (t.flags = -65537 & e | 128, t) : null;
                        case 3:
                            return Ca(Ua), K(), 0 !== (65536 & (e = t.flags)) && 0 === (128 & e) ? (t.flags = -65537 & e | 128, t) : null;
                        case 26:
                        case 27:
                        case 5:
                            return X(t), null;
                        case 31:
                            if (null !== t.memoizedState) {
                                if (Ul(t), null === t.alternate) throw Error(o(340));
                                xa()
                            }
                            return 65536 & (e = t.flags) ? (t.flags = -65537 & e | 128, t) : null;
                        case 13:
                            if (Ul(t), null !== (e = t.memoizedState) && null !== e.dehydrated) {
                                if (null === t.alternate) throw Error(o(340));
                                xa()
                            }
                            return 65536 & (e = t.flags) ? (t.flags = -65537 & e | 128, t) : null;
                        case 19:
                            return I(Il), null;
                        case 4:
                            return K(), null;
                        case 10:
                            return Ca(t.type), null;
                        case 22:
                        case 23:
                            return Ul(t), Ol(), null !== e && I(Ya), 65536 & (e = t.flags) ? (t.flags = -65537 & e | 128, t) : null;
                        case 24:
                            return Ca(Ua), null;
                        default:
                            return null
                    }
                }

                function gi(e, t) {
                    switch (ia(t), t.tag) {
                        case 3:
                            Ca(Ua), K();
                            break;
                        case 26:
                        case 27:
                        case 5:
                            X(t);
                            break;
                        case 4:
                            K();
                            break;
                        case 31:
                            null !== t.memoizedState && Ul(t);
                            break;
                        case 13:
                            Ul(t);
                            break;
                        case 19:
                            I(Il);
                            break;
                        case 10:
                            Ca(t.type);
                            break;
                        case 22:
                        case 23:
                            Ul(t), Ol(), null !== e && I(Ya);
                            break;
                        case 24:
                            Ca(Ua)
                    }
                }

                function yi(e, t) {
                    try {
                        var n = t.updateQueue,
                            r = null !== n ? n.lastEffect : null;
                        if (null !== r) {
                            var a = r.next;
                            n = a;
                            do {
                                if ((n.tag & e) === e) {
                                    r = void 0;
                                    var l = n.create,
                                        o = n.inst;
                                    r = l(), o.destroy = r
                                }
                                n = n.next
                            } while (n !== a)
                        }
                    } catch (s) {
                        Nu(t, t.return, s)
                    }
                }

                function vi(e, t, n) {
                    try {
                        var r = t.updateQueue,
                            a = null !== r ? r.lastEffect : null;
                        if (null !== a) {
                            var l = a.next;
                            r = l;
                            do {
                                if ((r.tag & e) === e) {
                                    var o = r.inst,
                                        s = o.destroy;
                                    if (void 0 !== s) {
                                        o.destroy = void 0, a = t;
                                        var i = n,
                                            c = s;
                                        try {
                                            c()
                                        } catch (u) {
                                            Nu(a, i, u)
                                        }
                                    }
                                }
                                r = r.next
                            } while (r !== l)
                        }
                    } catch (u) {
                        Nu(t, t.return, u)
                    }
                }

                function bi(e) {
                    var t = e.updateQueue;
                    if (null !== t) {
                        var n = e.stateNode;
                        try {
                            Cl(t, n)
                        } catch (r) {
                            Nu(e, e.return, r)
                        }
                    }
                }

                function xi(e, t, n) {
                    n.props = Ns(e.type, e.memoizedProps), n.state = e.memoizedState;
                    try {
                        n.componentWillUnmount()
                    } catch (r) {
                        Nu(e, t, r)
                    }
                }

                function wi(e, t) {
                    try {
                        var n = e.ref;
                        if (null !== n) {
                            switch (e.tag) {
                                case 26:
                                case 27:
                                case 5:
                                    var r = e.stateNode;
                                    break;
                                default:
                                    r = e.stateNode
                            }
                            "function" === typeof n ? e.refCleanup = n(r) : n.current = r
                        }
                    } catch (a) {
                        Nu(e, t, a)
                    }
                }

                function ki(e, t) {
                    var n = e.ref,
                        r = e.refCleanup;
                    if (null !== n)
                        if ("function" === typeof r) try {
                            r()
                        } catch (a) {
                            Nu(e, t, a)
                        } finally {
                            e.refCleanup = null, null != (e = e.alternate) && (e.refCleanup = null)
                        } else if ("function" === typeof n) try {
                            n(null)
                        } catch (l) {
                            Nu(e, t, l)
                        } else n.current = null
                }

                function Si(e) {
                    var t = e.type,
                        n = e.memoizedProps,
                        r = e.stateNode;
                    try {
                        e: switch (t) {
                            case "button":
                            case "input":
                            case "select":
                            case "textarea":
                                n.autoFocus && r.focus();
                                break e;
                            case "img":
                                n.src ? r.src = n.src : n.srcSet && (r.srcset = n.srcSet)
                        }
                    }
                    catch (a) {
                        Nu(e, e.return, a)
                    }
                }

                function Ni(e, t, n) {
                    try {
                        var r = e.stateNode;
                        ! function(e, t, n, r) {
                            switch (t) {
                                case "div":
                                case "span":
                                case "svg":
                                case "path":
                                case "a":
                                case "g":
                                case "p":
                                case "li":
                                    break;
                                case "input":
                                    var a = null,
                                        l = null,
                                        s = null,
                                        i = null,
                                        c = null,
                                        u = null,
                                        d = null;
                                    for (m in n) {
                                        var f = n[m];
                                        if (n.hasOwnProperty(m) && null != f) switch (m) {
                                            case "checked":
                                            case "value":
                                                break;
                                            case "defaultValue":
                                                c = f;
                                            default:
                                                r.hasOwnProperty(m) || dd(e, t, m, null, r, f)
                                        }
                                    }
                                    for (var p in r) {
                                        var m = r[p];
                                        if (f = n[p], r.hasOwnProperty(p) && (null != m || null != f)) switch (p) {
                                            case "type":
                                                l = m;
                                                break;
                                            case "name":
                                                a = m;
                                                break;
                                            case "checked":
                                                u = m;
                                                break;
                                            case "defaultChecked":
                                                d = m;
                                                break;
                                            case "value":
                                                s = m;
                                                break;
                                            case "defaultValue":
                                                i = m;
                                                break;
                                            case "children":
                                            case "dangerouslySetInnerHTML":
                                                if (null != m) throw Error(o(137, t));
                                                break;
                                            default:
                                                m !== f && dd(e, t, p, m, r, f)
                                        }
                                    }
                                    return void vt(e, s, i, c, u, d, l, a);
                                case "select":
                                    for (l in m = s = i = p = null, n)
                                        if (c = n[l], n.hasOwnProperty(l) && null != c) switch (l) {
                                            case "value":
                                                break;
                                            case "multiple":
                                                m = c;
                                            default:
                                                r.hasOwnProperty(l) || dd(e, t, l, null, r, c)
                                        }
                                    for (a in r)
                                        if (l = r[a], c = n[a], r.hasOwnProperty(a) && (null != l || null != c)) switch (a) {
                                            case "value":
                                                p = l;
                                                break;
                                            case "defaultValue":
                                                i = l;
                                                break;
                                            case "multiple":
                                                s = l;
                                            default:
                                                l !== c && dd(e, t, a, l, r, c)
                                        }
                                    return t = i, n = s, r = m, void(null != p ? wt(e, !!n, p, !1) : !!r !== !!n && (null != t ? wt(e, !!n, t, !0) : wt(e, !!n, n ? [] : "", !1)));
                                case "textarea":
                                    for (i in m = p = null, n)
                                        if (a = n[i], n.hasOwnProperty(i) && null != a && !r.hasOwnProperty(i)) switch (i) {
                                            case "value":
                                            case "children":
                                                break;
                                            default:
                                                dd(e, t, i, null, r, a)
                                        }
                                    for (s in r)
                                        if (a = r[s], l = n[s], r.hasOwnProperty(s) && (null != a || null != l)) switch (s) {
                                            case "value":
                                                p = a;
                                                break;
                                            case "defaultValue":
                                                m = a;
                                                break;
                                            case "children":
                                                break;
                                            case "dangerouslySetInnerHTML":
                                                if (null != a) throw Error(o(91));
                                                break;
                                            default:
                                                a !== l && dd(e, t, s, a, r, l)
                                        }
                                    return void kt(e, p, m);
                                case "option":
                                    for (var h in n)
                                        if (p = n[h], n.hasOwnProperty(h) && null != p && !r.hasOwnProperty(h))
                                            if ("selected" === h) e.selected = !1;
                                            else dd(e, t, h, null, r, p);
                                    for (c in r)
                                        if (p = r[c], m = n[c], r.hasOwnProperty(c) && p !== m && (null != p || null != m))
                                            if ("selected" === c) e.selected = p && "function" !== typeof p && "symbol" !== typeof p;
                                            else dd(e, t, c, p, r, m);
                                    return;
                                case "img":
                                case "link":
                                case "area":
                                case "base":
                                case "br":
                                case "col":
                                case "embed":
                                case "hr":
                                case "keygen":
                                case "meta":
                                case "param":
                                case "source":
                                case "track":
                                case "wbr":
                                case "menuitem":
                                    for (var g in n) p = n[g], n.hasOwnProperty(g) && null != p && !r.hasOwnProperty(g) && dd(e, t, g, null, r, p);
                                    for (u in r)
                                        if (p = r[u], m = n[u], r.hasOwnProperty(u) && p !== m && (null != p || null != m)) switch (u) {
                                            case "children":
                                            case "dangerouslySetInnerHTML":
                                                if (null != p) throw Error(o(137, t));
                                                break;
                                            default:
                                                dd(e, t, u, p, r, m)
                                        }
                                    return;
                                default:
                                    if (_t(t)) {
                                        for (var y in n) p = n[y], n.hasOwnProperty(y) && void 0 !== p && !r.hasOwnProperty(y) && fd(e, t, y, void 0, r, p);
                                        for (d in r) p = r[d], m = n[d], !r.hasOwnProperty(d) || p === m || void 0 === p && void 0 === m || fd(e, t, d, p, r, m);
                                        return
                                    }
                            }
                            for (var v in n) p = n[v], n.hasOwnProperty(v) && null != p && !r.hasOwnProperty(v) && dd(e, t, v, null, r, p);
                            for (f in r) p = r[f], m = n[f], !r.hasOwnProperty(f) || p === m || null == p && null == m || dd(e, t, f, p, r, m)
                        }(r, e.type, n, t), r[He] = t
                    } catch (a) {
                        Nu(e, e.return, a)
                    }
                }

                function ji(e) {
                    return 5 === e.tag || 3 === e.tag || 26 === e.tag || 27 === e.tag && Cd(e.type) || 4 === e.tag
                }

                function Ei(e) {
                    e: for (;;) {
                        for (; null === e.sibling;) {
                            if (null === e.return || ji(e.return)) return null;
                            e = e.return
                        }
                        for (e.sibling.return = e.return, e = e.sibling; 5 !== e.tag && 6 !== e.tag && 18 !== e.tag;) {
                            if (27 === e.tag && Cd(e.type)) continue e;
                            if (2 & e.flags) continue e;
                            if (null === e.child || 4 === e.tag) continue e;
                            e.child.return = e, e = e.child
                        }
                        if (!(2 & e.flags)) return e.stateNode
                    }
                }

                function Ci(e, t, n) {
                    var r = e.tag;
                    if (5 === r || 6 === r) e = e.stateNode, t ? (9 === n.nodeType ? n.body : "HTML" === n.nodeName ? n.ownerDocument.body : n).insertBefore(e, t) : ((t = 9 === n.nodeType ? n.body : "HTML" === n.nodeName ? n.ownerDocument.body : n).appendChild(e), null !== (n = n._reactRootContainer) && void 0 !== n || null !== t.onclick || (t.onclick = Ot));
                    else if (4 !== r && (27 === r && Cd(e.type) && (n = e.stateNode, t = null), null !== (e = e.child)))
                        for (Ci(e, t, n), e = e.sibling; null !== e;) Ci(e, t, n), e = e.sibling
                }

                function _i(e, t, n) {
                    var r = e.tag;
                    if (5 === r || 6 === r) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
                    else if (4 !== r && (27 === r && Cd(e.type) && (n = e.stateNode), null !== (e = e.child)))
                        for (_i(e, t, n), e = e.sibling; null !== e;) _i(e, t, n), e = e.sibling
                }

                function Ti(e) {
                    var t = e.stateNode,
                        n = e.memoizedProps;
                    try {
                        for (var r = e.type, a = t.attributes; a.length;) t.removeAttributeNode(a[0]);
                        pd(t, r, n), t[Be] = e, t[He] = n
                    } catch (l) {
                        Nu(e, e.return, l)
                    }
                }
                var Ri = !1,
                    Pi = !1,
                    Oi = !1,
                    Li = "function" === typeof WeakSet ? WeakSet : Set,
                    zi = null;

                function Ai(e, t, n) {
                    var r = n.flags;
                    switch (n.tag) {
                        case 0:
                        case 11:
                        case 15:
                            Ki(e, n), 4 & r && yi(5, n);
                            break;
                        case 1:
                            if (Ki(e, n), 4 & r)
                                if (e = n.stateNode, null === t) try {
                                    e.componentDidMount()
                                } catch (o) {
                                    Nu(n, n.return, o)
                                } else {
                                    var a = Ns(n.type, t.memoizedProps);
                                    t = t.memoizedState;
                                    try {
                                        e.componentDidUpdate(a, t, e.__reactInternalSnapshotBeforeUpdate)
                                    } catch (s) {
                                        Nu(n, n.return, s)
                                    }
                                }
                            64 & r && bi(n), 512 & r && wi(n, n.return);
                            break;
                        case 3:
                            if (Ki(e, n), 64 & r && null !== (e = n.updateQueue)) {
                                if (t = null, null !== n.child) switch (n.child.tag) {
                                    case 27:
                                    case 5:
                                    case 1:
                                        t = n.child.stateNode
                                }
                                try {
                                    Cl(e, t)
                                } catch (o) {
                                    Nu(n, n.return, o)
                                }
                            }
                            break;
                        case 27:
                            null === t && 4 & r && Ti(n);
                        case 26:
                        case 5:
                            Ki(e, n), null === t && 4 & r && Si(n), 512 & r && wi(n, n.return);
                            break;
                        case 12:
                            Ki(e, n);
                            break;
                        case 31:
                            Ki(e, n), 4 & r && Bi(e, n);
                            break;
                        case 13:
                            Ki(e, n), 4 & r && Hi(e, n), 64 & r && (null !== (e = n.memoizedState) && (null !== (e = e.dehydrated) && function(e, t) {
                                var n = e.ownerDocument;
                                if ("$~" === e.data) e._reactRetry = t;
                                else if ("$?" !== e.data || "loading" !== n.readyState) t();
                                else {
                                    var r = function() {
                                        t(), n.removeEventListener("DOMContentLoaded", r)
                                    };
                                    n.addEventListener("DOMContentLoaded", r), e._reactRetry = r
                                }
                            }(e, n = _u.bind(null, n))));
                            break;
                        case 22:
                            if (!(r = null !== n.memoizedState || Ri)) {
                                t = null !== t && null !== t.memoizedState || Pi, a = Ri;
                                var l = Pi;
                                Ri = r, (Pi = t) && !l ? Xi(e, n, 0 !== (8772 & n.subtreeFlags)) : Ki(e, n), Ri = a, Pi = l
                            }
                            break;
                        case 30:
                            break;
                        default:
                            Ki(e, n)
                    }
                }

                function Fi(e) {
                    var t = e.alternate;
                    null !== t && (e.alternate = null, Fi(t)), e.child = null, e.deletions = null, e.sibling = null, 5 === e.tag && (null !== (t = e.stateNode) && Ke(t)), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null
                }
                var Mi = null,
                    Di = !1;

                function Ui(e, t, n) {
                    for (n = n.child; null !== n;) Ii(e, t, n), n = n.sibling
                }

                function Ii(e, t, n) {
                    if (ve && "function" === typeof ve.onCommitFiberUnmount) try {
                        ve.onCommitFiberUnmount(ye, n)
                    } catch (l) {}
                    switch (n.tag) {
                        case 26:
                            Pi || ki(n, t), Ui(e, t, n), n.memoizedState ? n.memoizedState.count-- : n.stateNode && (n = n.stateNode).parentNode.removeChild(n);
                            break;
                        case 27:
                            Pi || ki(n, t);
                            var r = Mi,
                                a = Di;
                            Cd(n.type) && (Mi = n.stateNode, Di = !1), Ui(e, t, n), Ud(n.stateNode), Mi = r, Di = a;
                            break;
                        case 5:
                            Pi || ki(n, t);
                        case 6:
                            if (r = Mi, a = Di, Mi = null, Ui(e, t, n), Di = a, null !== (Mi = r))
                                if (Di) try {
                                    (9 === Mi.nodeType ? Mi.body : "HTML" === Mi.nodeName ? Mi.ownerDocument.body : Mi).removeChild(n.stateNode)
                                } catch (o) {
                                    Nu(n, t, o)
                                } else try {
                                    Mi.removeChild(n.stateNode)
                                } catch (o) {
                                    Nu(n, t, o)
                                }
                            break;
                        case 18:
                            null !== Mi && (Di ? (_d(9 === (e = Mi).nodeType ? e.body : "HTML" === e.nodeName ? e.ownerDocument.body : e, n.stateNode), $f(e)) : _d(Mi, n.stateNode));
                            break;
                        case 4:
                            r = Mi, a = Di, Mi = n.stateNode.containerInfo, Di = !0, Ui(e, t, n), Mi = r, Di = a;
                            break;
                        case 0:
                        case 11:
                        case 14:
                        case 15:
                            vi(2, n, t), Pi || vi(4, n, t), Ui(e, t, n);
                            break;
                        case 1:
                            Pi || (ki(n, t), "function" === typeof(r = n.stateNode).componentWillUnmount && xi(n, t, r)), Ui(e, t, n);
                            break;
                        case 21:
                            Ui(e, t, n);
                            break;
                        case 22:
                            Pi = (r = Pi) || null !== n.memoizedState, Ui(e, t, n), Pi = r;
                            break;
                        default:
                            Ui(e, t, n)
                    }
                }

                function Bi(e, t) {
                    if (null === t.memoizedState && (null !== (e = t.alternate) && null !== (e = e.memoizedState))) {
                        e = e.dehydrated;
                        try {
                            $f(e)
                        } catch (n) {
                            Nu(t, t.return, n)
                        }
                    }
                }

                function Hi(e, t) {
                    if (null === t.memoizedState && (null !== (e = t.alternate) && (null !== (e = e.memoizedState) && null !== (e = e.dehydrated)))) try {
                        $f(e)
                    } catch (n) {
                        Nu(t, t.return, n)
                    }
                }

                function Wi(e, t) {
                    var n = function(e) {
                        switch (e.tag) {
                            case 31:
                            case 13:
                            case 19:
                                var t = e.stateNode;
                                return null === t && (t = e.stateNode = new Li), t;
                            case 22:
                                return null === (t = (e = e.stateNode)._retryCache) && (t = e._retryCache = new Li), t;
                            default:
                                throw Error(o(435, e.tag))
                        }
                    }(e);
                    t.forEach(function(t) {
                        if (!n.has(t)) {
                            n.add(t);
                            var r = Tu.bind(null, e, t);
                            t.then(r, r)
                        }
                    })
                }

                function qi(e, t) {
                    var n = t.deletions;
                    if (null !== n)
                        for (var r = 0; r < n.length; r++) {
                            var a = n[r],
                                l = e,
                                s = t,
                                i = s;
                            e: for (; null !== i;) {
                                switch (i.tag) {
                                    case 27:
                                        if (Cd(i.type)) {
                                            Mi = i.stateNode, Di = !1;
                                            break e
                                        }
                                        break;
                                    case 5:
                                        Mi = i.stateNode, Di = !1;
                                        break e;
                                    case 3:
                                    case 4:
                                        Mi = i.stateNode.containerInfo, Di = !0;
                                        break e
                                }
                                i = i.return
                            }
                            if (null === Mi) throw Error(o(160));
                            Ii(l, s, a), Mi = null, Di = !1, null !== (l = a.alternate) && (l.return = null), a.return = null
                        }
                    if (13886 & t.subtreeFlags)
                        for (t = t.child; null !== t;) $i(t, e), t = t.sibling
                }
                var Vi = null;

                function $i(e, t) {
                    var n = e.alternate,
                        r = e.flags;
                    switch (e.tag) {
                        case 0:
                        case 11:
                        case 14:
                        case 15:
                            qi(t, e), Qi(e), 4 & r && (vi(3, e, e.return), yi(3, e), vi(5, e, e.return));
                            break;
                        case 1:
                            qi(t, e), Qi(e), 512 & r && (Pi || null === n || ki(n, n.return)), 64 & r && Ri && (null !== (e = e.updateQueue) && (null !== (r = e.callbacks) && (n = e.shared.hiddenCallbacks, e.shared.hiddenCallbacks = null === n ? r : n.concat(r))));
                            break;
                        case 26:
                            var a = Vi;
                            if (qi(t, e), Qi(e), 512 & r && (Pi || null === n || ki(n, n.return)), 4 & r) {
                                var l = null !== n ? n.memoizedState : null;
                                if (r = e.memoizedState, null === n)
                                    if (null === r)
                                        if (null === e.stateNode) {
                                            e: {
                                                r = e.type,
                                                n = e.memoizedProps,
                                                a = a.ownerDocument || a;t: switch (r) {
                                                    case "title":
                                                        (!(l = a.getElementsByTagName("title")[0]) || l[Ye] || l[Be] || "http://www.w3.org/2000/svg" === l.namespaceURI || l.hasAttribute("itemprop")) && (l = a.createElement(r), a.head.insertBefore(l, a.querySelector("head > title"))), pd(l, r, n), l[Be] = e, et(l), r = l;
                                                        break e;
                                                    case "link":
                                                        var s = rf("link", "href", a).get(r + (n.href || ""));
                                                        if (s)
                                                            for (var i = 0; i < s.length; i++)
                                                                if ((l = s[i]).getAttribute("href") === (null == n.href || "" === n.href ? null : n.href) && l.getAttribute("rel") === (null == n.rel ? null : n.rel) && l.getAttribute("title") === (null == n.title ? null : n.title) && l.getAttribute("crossorigin") === (null == n.crossOrigin ? null : n.crossOrigin)) {
                                                                    s.splice(i, 1);
                                                                    break t
                                                                }
                                                        pd(l = a.createElement(r), r, n), a.head.appendChild(l);
                                                        break;
                                                    case "meta":
                                                        if (s = rf("meta", "content", a).get(r + (n.content || "")))
                                                            for (i = 0; i < s.length; i++)
                                                                if ((l = s[i]).getAttribute("content") === (null == n.content ? null : "" + n.content) && l.getAttribute("name") === (null == n.name ? null : n.name) && l.getAttribute("property") === (null == n.property ? null : n.property) && l.getAttribute("http-equiv") === (null == n.httpEquiv ? null : n.httpEquiv) && l.getAttribute("charset") === (null == n.charSet ? null : n.charSet)) {
                                                                    s.splice(i, 1);
                                                                    break t
                                                                }
                                                        pd(l = a.createElement(r), r, n), a.head.appendChild(l);
                                                        break;
                                                    default:
                                                        throw Error(o(468, r))
                                                }
                                                l[Be] = e,
                                                et(l),
                                                r = l
                                            }
                                            e.stateNode = r
                                        }
                                else af(a, e.type, e.stateNode);
                                else e.stateNode = Gd(a, r, e.memoizedProps);
                                else l !== r ? (null === l ? null !== n.stateNode && (n = n.stateNode).parentNode.removeChild(n) : l.count--, null === r ? af(a, e.type, e.stateNode) : Gd(a, r, e.memoizedProps)) : null === r && null !== e.stateNode && Ni(e, e.memoizedProps, n.memoizedProps)
                            }
                            break;
                        case 27:
                            qi(t, e), Qi(e), 512 & r && (Pi || null === n || ki(n, n.return)), null !== n && 4 & r && Ni(e, e.memoizedProps, n.memoizedProps);
                            break;
                        case 5:
                            if (qi(t, e), Qi(e), 512 & r && (Pi || null === n || ki(n, n.return)), 32 & e.flags) {
                                a = e.stateNode;
                                try {
                                    Nt(a, "")
                                } catch (h) {
                                    Nu(e, e.return, h)
                                }
                            }
                            4 & r && null != e.stateNode && Ni(e, a = e.memoizedProps, null !== n ? n.memoizedProps : a), 1024 & r && (Oi = !0);
                            break;
                        case 6:
                            if (qi(t, e), Qi(e), 4 & r) {
                                if (null === e.stateNode) throw Error(o(162));
                                r = e.memoizedProps, n = e.stateNode;
                                try {
                                    n.nodeValue = r
                                } catch (h) {
                                    Nu(e, e.return, h)
                                }
                            }
                            break;
                        case 3:
                            if (nf = null, a = Vi, Vi = Hd(t.containerInfo), qi(t, e), Vi = a, Qi(e), 4 & r && null !== n && n.memoizedState.isDehydrated) try {
                                $f(t.containerInfo)
                            } catch (h) {
                                Nu(e, e.return, h)
                            }
                            Oi && (Oi = !1, Yi(e));
                            break;
                        case 4:
                            r = Vi, Vi = Hd(e.stateNode.containerInfo), qi(t, e), Qi(e), Vi = r;
                            break;
                        case 12:
                        default:
                            qi(t, e), Qi(e);
                            break;
                        case 31:
                        case 19:
                            qi(t, e), Qi(e), 4 & r && (null !== (r = e.updateQueue) && (e.updateQueue = null, Wi(e, r)));
                            break;
                        case 13:
                            qi(t, e), Qi(e), 8192 & e.child.flags && null !== e.memoizedState !== (null !== n && null !== n.memoizedState) && (Lc = ie()), 4 & r && (null !== (r = e.updateQueue) && (e.updateQueue = null, Wi(e, r)));
                            break;
                        case 22:
                            a = null !== e.memoizedState;
                            var c = null !== n && null !== n.memoizedState,
                                u = Ri,
                                d = Pi;
                            if (Ri = u || a, Pi = d || c, qi(t, e), Pi = d, Ri = u, Qi(e), 8192 & r) e: for (t = e.stateNode, t._visibility = a ? -2 & t._visibility : 1 | t._visibility, a && (null === n || c || Ri || Pi || Ji(e)), n = null, t = e;;) {
                                if (5 === t.tag || 26 === t.tag) {
                                    if (null === n) {
                                        c = n = t;
                                        try {
                                            if (l = c.stateNode, a) "function" === typeof(s = l.style).setProperty ? s.setProperty("display", "none", "important") : s.display = "none";
                                            else {
                                                i = c.stateNode;
                                                var f = c.memoizedProps.style,
                                                    p = void 0 !== f && null !== f && f.hasOwnProperty("display") ? f.display : null;
                                                i.style.display = null == p || "boolean" === typeof p ? "" : ("" + p).trim()
                                            }
                                        } catch (h) {
                                            Nu(c, c.return, h)
                                        }
                                    }
                                } else if (6 === t.tag) {
                                    if (null === n) {
                                        c = t;
                                        try {
                                            c.stateNode.nodeValue = a ? "" : c.memoizedProps
                                        } catch (h) {
                                            Nu(c, c.return, h)
                                        }
                                    }
                                } else if (18 === t.tag) {
                                    if (null === n) {
                                        c = t;
                                        try {
                                            var m = c.stateNode;
                                            a ? Td(m, !0) : Td(c.stateNode, !1)
                                        } catch (h) {
                                            Nu(c, c.return, h)
                                        }
                                    }
                                } else if ((22 !== t.tag && 23 !== t.tag || null === t.memoizedState || t === e) && null !== t.child) {
                                    t.child.return = t, t = t.child;
                                    continue
                                }
                                if (t === e) break e;
                                for (; null === t.sibling;) {
                                    if (null === t.return || t.return === e) break e;
                                    n === t && (n = null), t = t.return
                                }
                                n === t && (n = null), t.sibling.return = t.return, t = t.sibling
                            }
                            4 & r && (null !== (r = e.updateQueue) && (null !== (n = r.retryQueue) && (r.retryQueue = null, Wi(e, n))));
                        case 30:
                        case 21:
                    }
                }

                function Qi(e) {
                    var t = e.flags;
                    if (2 & t) {
                        try {
                            for (var n, r = e.return; null !== r;) {
                                if (ji(r)) {
                                    n = r;
                                    break
                                }
                                r = r.return
                            }
                            if (null == n) throw Error(o(160));
                            switch (n.tag) {
                                case 27:
                                    var a = n.stateNode;
                                    _i(e, Ei(e), a);
                                    break;
                                case 5:
                                    var l = n.stateNode;
                                    32 & n.flags && (Nt(l, ""), n.flags &= -33), _i(e, Ei(e), l);
                                    break;
                                case 3:
                                case 4:
                                    var s = n.stateNode.containerInfo;
                                    Ci(e, Ei(e), s);
                                    break;
                                default:
                                    throw Error(o(161))
                            }
                        } catch (i) {
                            Nu(e, e.return, i)
                        }
                        e.flags &= -3
                    }
                    4096 & t && (e.flags &= -4097)
                }

                function Yi(e) {
                    if (1024 & e.subtreeFlags)
                        for (e = e.child; null !== e;) {
                            var t = e;
                            Yi(t), 5 === t.tag && 1024 & t.flags && t.stateNode.reset(), e = e.sibling
                        }
                }

                function Ki(e, t) {
                    if (8772 & t.subtreeFlags)
                        for (t = t.child; null !== t;) Ai(e, t.alternate, t), t = t.sibling
                }

                function Ji(e) {
                    for (e = e.child; null !== e;) {
                        var t = e;
                        switch (t.tag) {
                            case 0:
                            case 11:
                            case 14:
                            case 15:
                                vi(4, t, t.return), Ji(t);
                                break;
                            case 1:
                                ki(t, t.return);
                                var n = t.stateNode;
                                "function" === typeof n.componentWillUnmount && xi(t, t.return, n), Ji(t);
                                break;
                            case 27:
                                Ud(t.stateNode);
                            case 26:
                            case 5:
                                ki(t, t.return), Ji(t);
                                break;
                            case 22:
                                null === t.memoizedState && Ji(t);
                                break;
                            default:
                                Ji(t)
                        }
                        e = e.sibling
                    }
                }

                function Xi(e, t, n) {
                    for (n = n && 0 !== (8772 & t.subtreeFlags), t = t.child; null !== t;) {
                        var r = t.alternate,
                            a = e,
                            l = t,
                            o = l.flags;
                        switch (l.tag) {
                            case 0:
                            case 11:
                            case 15:
                                Xi(a, l, n), yi(4, l);
                                break;
                            case 1:
                                if (Xi(a, l, n), "function" === typeof(a = (r = l).stateNode).componentDidMount) try {
                                    a.componentDidMount()
                                } catch (c) {
                                    Nu(r, r.return, c)
                                }
                                if (null !== (a = (r = l).updateQueue)) {
                                    var s = r.stateNode;
                                    try {
                                        var i = a.shared.hiddenCallbacks;
                                        if (null !== i)
                                            for (a.shared.hiddenCallbacks = null, a = 0; a < i.length; a++) El(i[a], s)
                                    } catch (c) {
                                        Nu(r, r.return, c)
                                    }
                                }
                                n && 64 & o && bi(l), wi(l, l.return);
                                break;
                            case 27:
                                Ti(l);
                            case 26:
                            case 5:
                                Xi(a, l, n), n && null === r && 4 & o && Si(l), wi(l, l.return);
                                break;
                            case 12:
                                Xi(a, l, n);
                                break;
                            case 31:
                                Xi(a, l, n), n && 4 & o && Bi(a, l);
                                break;
                            case 13:
                                Xi(a, l, n), n && 4 & o && Hi(a, l);
                                break;
                            case 22:
                                null === l.memoizedState && Xi(a, l, n), wi(l, l.return);
                                break;
                            case 30:
                                break;
                            default:
                                Xi(a, l, n)
                        }
                        t = t.sibling
                    }
                }

                function Gi(e, t) {
                    var n = null;
                    null !== e && null !== e.memoizedState && null !== e.memoizedState.cachePool && (n = e.memoizedState.cachePool.pool), e = null, null !== t.memoizedState && null !== t.memoizedState.cachePool && (e = t.memoizedState.cachePool.pool), e !== n && (null != e && e.refCount++, null != n && Ba(n))
                }

                function Zi(e, t) {
                    e = null, null !== t.alternate && (e = t.alternate.memoizedState.cache), (t = t.memoizedState.cache) !== e && (t.refCount++, null != e && Ba(e))
                }

                function ec(e, t, n, r) {
                    if (10256 & t.subtreeFlags)
                        for (t = t.child; null !== t;) tc(e, t, n, r), t = t.sibling
                }

                function tc(e, t, n, r) {
                    var a = t.flags;
                    switch (t.tag) {
                        case 0:
                        case 11:
                        case 15:
                            ec(e, t, n, r), 2048 & a && yi(9, t);
                            break;
                        case 1:
                        case 31:
                        case 13:
                        default:
                            ec(e, t, n, r);
                            break;
                        case 3:
                            ec(e, t, n, r), 2048 & a && (e = null, null !== t.alternate && (e = t.alternate.memoizedState.cache), (t = t.memoizedState.cache) !== e && (t.refCount++, null != e && Ba(e)));
                            break;
                        case 12:
                            if (2048 & a) {
                                ec(e, t, n, r), e = t.stateNode;
                                try {
                                    var l = t.memoizedProps,
                                        o = l.id,
                                        s = l.onPostCommit;
                                    "function" === typeof s && s(o, null === t.alternate ? "mount" : "update", e.passiveEffectDuration, -0)
                                } catch (i) {
                                    Nu(t, t.return, i)
                                }
                            } else ec(e, t, n, r);
                            break;
                        case 23:
                            break;
                        case 22:
                            l = t.stateNode, o = t.alternate, null !== t.memoizedState ? 2 & l._visibility ? ec(e, t, n, r) : rc(e, t) : 2 & l._visibility ? ec(e, t, n, r) : (l._visibility |= 2, nc(e, t, n, r, 0 !== (10256 & t.subtreeFlags) || !1)), 2048 & a && Gi(o, t);
                            break;
                        case 24:
                            ec(e, t, n, r), 2048 & a && Zi(t.alternate, t)
                    }
                }

                function nc(e, t, n, r, a) {
                    for (a = a && (0 !== (10256 & t.subtreeFlags) || !1), t = t.child; null !== t;) {
                        var l = e,
                            o = t,
                            s = n,
                            i = r,
                            c = o.flags;
                        switch (o.tag) {
                            case 0:
                            case 11:
                            case 15:
                                nc(l, o, s, i, a), yi(8, o);
                                break;
                            case 23:
                                break;
                            case 22:
                                var u = o.stateNode;
                                null !== o.memoizedState ? 2 & u._visibility ? nc(l, o, s, i, a) : rc(l, o) : (u._visibility |= 2, nc(l, o, s, i, a)), a && 2048 & c && Gi(o.alternate, o);
                                break;
                            case 24:
                                nc(l, o, s, i, a), a && 2048 & c && Zi(o.alternate, o);
                                break;
                            default:
                                nc(l, o, s, i, a)
                        }
                        t = t.sibling
                    }
                }

                function rc(e, t) {
                    if (10256 & t.subtreeFlags)
                        for (t = t.child; null !== t;) {
                            var n = e,
                                r = t,
                                a = r.flags;
                            switch (r.tag) {
                                case 22:
                                    rc(n, r), 2048 & a && Gi(r.alternate, r);
                                    break;
                                case 24:
                                    rc(n, r), 2048 & a && Zi(r.alternate, r);
                                    break;
                                default:
                                    rc(n, r)
                            }
                            t = t.sibling
                        }
                }
                var ac = 8192;

                function lc(e, t, n) {
                    if (e.subtreeFlags & ac)
                        for (e = e.child; null !== e;) oc(e, t, n), e = e.sibling
                }

                function oc(e, t, n) {
                    switch (e.tag) {
                        case 26:
                            lc(e, t, n), e.flags & ac && null !== e.memoizedState && function(e, t, n, r) {
                                if ("stylesheet" === n.type && ("string" !== typeof r.media || !1 !== matchMedia(r.media).matches) && 0 === (4 & n.state.loading)) {
                                    if (null === n.instance) {
                                        var a = Qd(r.href),
                                            l = t.querySelector(Yd(a));
                                        if (l) return null !== (t = l._p) && "object" === typeof t && "function" === typeof t.then && (e.count++, e = sf.bind(e), t.then(e, e)), n.state.loading |= 4, n.instance = l, void et(l);
                                        l = t.ownerDocument || t, r = Kd(r), (a = Id.get(a)) && ef(r, a), et(l = l.createElement("link"));
                                        var o = l;
                                        o._p = new Promise(function(e, t) {
                                            o.onload = e, o.onerror = t
                                        }), pd(l, "link", r), n.instance = l
                                    }
                                    null === e.stylesheets && (e.stylesheets = new Map), e.stylesheets.set(n, t), (t = n.state.preload) && 0 === (3 & n.state.loading) && (e.count++, n = sf.bind(e), t.addEventListener("load", n), t.addEventListener("error", n))
                                }
                            }(n, Vi, e.memoizedState, e.memoizedProps);
                            break;
                        case 5:
                        default:
                            lc(e, t, n);
                            break;
                        case 3:
                        case 4:
                            var r = Vi;
                            Vi = Hd(e.stateNode.containerInfo), lc(e, t, n), Vi = r;
                            break;
                        case 22:
                            null === e.memoizedState && (null !== (r = e.alternate) && null !== r.memoizedState ? (r = ac, ac = 16777216, lc(e, t, n), ac = r) : lc(e, t, n))
                    }
                }

                function sc(e) {
                    var t = e.alternate;
                    if (null !== t && null !== (e = t.child)) {
                        t.child = null;
                        do {
                            t = e.sibling, e.sibling = null, e = t
                        } while (null !== e)
                    }
                }

                function ic(e) {
                    var t = e.deletions;
                    if (0 !== (16 & e.flags)) {
                        if (null !== t)
                            for (var n = 0; n < t.length; n++) {
                                var r = t[n];
                                zi = r, dc(r, e)
                            }
                        sc(e)
                    }
                    if (10256 & e.subtreeFlags)
                        for (e = e.child; null !== e;) cc(e), e = e.sibling
                }

                function cc(e) {
                    switch (e.tag) {
                        case 0:
                        case 11:
                        case 15:
                            ic(e), 2048 & e.flags && vi(9, e, e.return);
                            break;
                        case 3:
                        case 12:
                        default:
                            ic(e);
                            break;
                        case 22:
                            var t = e.stateNode;
                            null !== e.memoizedState && 2 & t._visibility && (null === e.return || 13 !== e.return.tag) ? (t._visibility &= -3, uc(e)) : ic(e)
                    }
                }

                function uc(e) {
                    var t = e.deletions;
                    if (0 !== (16 & e.flags)) {
                        if (null !== t)
                            for (var n = 0; n < t.length; n++) {
                                var r = t[n];
                                zi = r, dc(r, e)
                            }
                        sc(e)
                    }
                    for (e = e.child; null !== e;) {
                        switch ((t = e).tag) {
                            case 0:
                            case 11:
                            case 15:
                                vi(8, t, t.return), uc(t);
                                break;
                            case 22:
                                2 & (n = t.stateNode)._visibility && (n._visibility &= -3, uc(t));
                                break;
                            default:
                                uc(t)
                        }
                        e = e.sibling
                    }
                }

                function dc(e, t) {
                    for (; null !== zi;) {
                        var n = zi;
                        switch (n.tag) {
                            case 0:
                            case 11:
                            case 15:
                                vi(8, n, t);
                                break;
                            case 23:
                            case 22:
                                if (null !== n.memoizedState && null !== n.memoizedState.cachePool) {
                                    var r = n.memoizedState.cachePool.pool;
                                    null != r && r.refCount++
                                }
                                break;
                            case 24:
                                Ba(n.memoizedState.cache)
                        }
                        if (null !== (r = n.child)) r.return = n, zi = r;
                        else e: for (n = e; null !== zi;) {
                            var a = (r = zi).sibling,
                                l = r.return;
                            if (Fi(r), r === n) {
                                zi = null;
                                break e
                            }
                            if (null !== a) {
                                a.return = l, zi = a;
                                break e
                            }
                            zi = l
                        }
                    }
                }
                var fc = {
                        getCacheForType: function(e) {
                            var t = La(Ua),
                                n = t.data.get(e);
                            return void 0 === n && (n = e(), t.data.set(e, n)), n
                        },
                        cacheSignal: function() {
                            return La(Ua).controller.signal
                        }
                    },
                    pc = "function" === typeof WeakMap ? WeakMap : Map,
                    mc = 0,
                    hc = null,
                    gc = null,
                    yc = 0,
                    vc = 0,
                    bc = null,
                    xc = !1,
                    wc = !1,
                    kc = !1,
                    Sc = 0,
                    Nc = 0,
                    jc = 0,
                    Ec = 0,
                    Cc = 0,
                    _c = 0,
                    Tc = 0,
                    Rc = null,
                    Pc = null,
                    Oc = !1,
                    Lc = 0,
                    zc = 0,
                    Ac = 1 / 0,
                    Fc = null,
                    Mc = null,
                    Dc = 0,
                    Uc = null,
                    Ic = null,
                    Bc = 0,
                    Hc = 0,
                    Wc = null,
                    qc = null,
                    Vc = 0,
                    $c = null;

                function Qc() {
                    return 0 !== (2 & mc) && 0 !== yc ? yc & -yc : null !== z.T ? Wu() : De()
                }

                function Yc() {
                    if (0 === _c)
                        if (0 === (536870912 & yc) || fa) {
                            var e = Ne;
                            0 === (3932160 & (Ne <<= 1)) && (Ne = 262144), _c = e
                        } else _c = 536870912;
                    return null !== (e = Ll.current) && (e.flags |= 32), _c
                }

                function Kc(e, t, n) {
                    (e !== hc || 2 !== vc && 9 !== vc) && null === e.cancelPendingCommit || (nu(e, 0), Zc(e, yc, _c, !1)), Oe(e, n), 0 !== (2 & mc) && e === hc || (e === hc && (0 === (2 & mc) && (Ec |= n), 4 === Nc && Zc(e, yc, _c, !1)), Fu(e))
                }

                function Jc(e, t, n) {
                    if (0 !== (6 & mc)) throw Error(o(327));
                    for (var r = !n && 0 === (127 & t) && 0 === (t & e.expiredLanes) || _e(e, t), a = r ? function(e, t) {
                            var n = mc;
                            mc |= 2;
                            var r = lu(),
                                a = ou();
                            hc !== e || yc !== t ? (Fc = null, Ac = ie() + 500, nu(e, t)) : wc = _e(e, t);
                            e: for (;;) try {
                                if (0 !== vc && null !== gc) {
                                    t = gc;
                                    var l = bc;
                                    t: switch (vc) {
                                        case 1:
                                            vc = 0, bc = null, pu(e, t, l, 1);
                                            break;
                                        case 2:
                                        case 9:
                                            if (nl(l)) {
                                                vc = 0, bc = null, fu(t);
                                                break
                                            }
                                            t = function() {
                                                2 !== vc && 9 !== vc || hc !== e || (vc = 7), Fu(e)
                                            }, l.then(t, t);
                                            break e;
                                        case 3:
                                            vc = 7;
                                            break e;
                                        case 4:
                                            vc = 5;
                                            break e;
                                        case 7:
                                            nl(l) ? (vc = 0, bc = null, fu(t)) : (vc = 0, bc = null, pu(e, t, l, 7));
                                            break;
                                        case 5:
                                            var s = null;
                                            switch (gc.tag) {
                                                case 26:
                                                    s = gc.memoizedState;
                                                case 5:
                                                case 27:
                                                    var i = gc;
                                                    if (s ? lf(s) : i.stateNode.complete) {
                                                        vc = 0, bc = null;
                                                        var c = i.sibling;
                                                        if (null !== c) gc = c;
                                                        else {
                                                            var u = i.return;
                                                            null !== u ? (gc = u, mu(u)) : gc = null
                                                        }
                                                        break t
                                                    }
                                            }
                                            vc = 0, bc = null, pu(e, t, l, 5);
                                            break;
                                        case 6:
                                            vc = 0, bc = null, pu(e, t, l, 6);
                                            break;
                                        case 8:
                                            tu(), Nc = 6;
                                            break e;
                                        default:
                                            throw Error(o(462))
                                    }
                                }
                                uu();
                                break
                            } catch (d) {
                                ru(e, d)
                            }
                            return ja = Na = null, z.H = r, z.A = a, mc = n, null !== gc ? 0 : (hc = null, yc = 0, Rr(), Nc)
                        }(e, t) : iu(e, t, !0), l = r;;) {
                        if (0 === a) {
                            wc && !r && Zc(e, t, 0, !1);
                            break
                        }
                        if (n = e.current.alternate, !l || Gc(n)) {
                            if (2 === a) {
                                if (l = t, e.errorRecoveryDisabledLanes & l) var s = 0;
                                else s = 0 !== (s = -536870913 & e.pendingLanes) ? s : 536870912 & s ? 536870912 : 0;
                                if (0 !== s) {
                                    t = s;
                                    e: {
                                        var i = e;a = Rc;
                                        var c = i.current.memoizedState.isDehydrated;
                                        if (c && (nu(i, s).flags |= 256), 2 !== (s = iu(i, s, !1))) {
                                            if (kc && !c) {
                                                i.errorRecoveryDisabledLanes |= l, Ec |= l, a = 4;
                                                break e
                                            }
                                            l = Pc, Pc = a, null !== l && (null === Pc ? Pc = l : Pc.push.apply(Pc, l))
                                        }
                                        a = s
                                    }
                                    if (l = !1, 2 !== a) continue
                                }
                            }
                            if (1 === a) {
                                nu(e, 0), Zc(e, t, 0, !0);
                                break
                            }
                            e: {
                                switch (r = e, l = a) {
                                    case 0:
                                    case 1:
                                        throw Error(o(345));
                                    case 4:
                                        if ((4194048 & t) !== t) break;
                                    case 6:
                                        Zc(r, t, _c, !xc);
                                        break e;
                                    case 2:
                                        Pc = null;
                                        break;
                                    case 3:
                                    case 5:
                                        break;
                                    default:
                                        throw Error(o(329))
                                }
                                if ((62914560 & t) === t && 10 < (a = Lc + 300 - ie())) {
                                    if (Zc(r, t, _c, !xc), 0 !== Ce(r, 0, !0)) break e;
                                    Bc = t, r.timeoutHandle = kd(Xc.bind(null, r, n, Pc, Fc, Oc, t, _c, Ec, Tc, xc, l, "Throttled", -0, 0), a)
                                } else Xc(r, n, Pc, Fc, Oc, t, _c, Ec, Tc, xc, l, null, -0, 0)
                            }
                            break
                        }
                        a = iu(e, t, !1), l = !1
                    }
                    Fu(e)
                }

                function Xc(e, t, n, r, a, l, o, s, i, c, u, d, f, p) {
                    if (e.timeoutHandle = -1, 8192 & (d = t.subtreeFlags) || 16785408 === (16785408 & d)) {
                        oc(t, l, d = {
                            stylesheets: null,
                            count: 0,
                            imgCount: 0,
                            imgBytes: 0,
                            suspenseyImages: [],
                            waitingForImages: !0,
                            waitingForViewTransition: !1,
                            unsuspend: Ot
                        });
                        var m = (62914560 & l) === l ? Lc - ie() : (4194048 & l) === l ? zc - ie() : 0;
                        if (null !== (m = function(e, t) {
                                return e.stylesheets && 0 === e.count && uf(e, e.stylesheets), 0 < e.count || 0 < e.imgCount ? function(n) {
                                    var r = setTimeout(function() {
                                        if (e.stylesheets && uf(e, e.stylesheets), e.unsuspend) {
                                            var t = e.unsuspend;
                                            e.unsuspend = null, t()
                                        }
                                    }, 6e4 + t);
                                    0 < e.imgBytes && 0 === of && ( of = 62500 * function() {
                                        if ("function" === typeof performance.getEntriesByType) {
                                            for (var e = 0, t = 0, n = performance.getEntriesByType("resource"), r = 0; r < n.length; r++) {
                                                var a = n[r],
                                                    l = a.transferSize,
                                                    o = a.initiatorType,
                                                    s = a.duration;
                                                if (l && s && md(o)) {
                                                    for (o = 0, s = a.responseEnd, r += 1; r < n.length; r++) {
                                                        var i = n[r],
                                                            c = i.startTime;
                                                        if (c > s) break;
                                                        var u = i.transferSize,
                                                            d = i.initiatorType;
                                                        u && md(d) && (o += u * ((i = i.responseEnd) < s ? 1 : (s - c) / (i - c)))
                                                    }
                                                    if (--r, t += 8 * (l + o) / (a.duration / 1e3), 10 < ++e) break
                                                }
                                            }
                                            if (0 < e) return t / e / 1e6
                                        }
                                        return navigator.connection && "number" === typeof(e = navigator.connection.downlink) ? e : 5
                                    }());
                                    var a = setTimeout(function() {
                                        if (e.waitingForImages = !1, 0 === e.count && (e.stylesheets && uf(e, e.stylesheets), e.unsuspend)) {
                                            var t = e.unsuspend;
                                            e.unsuspend = null, t()
                                        }
                                    }, (e.imgBytes > of ? 50 : 800) + t);
                                    return e.unsuspend = n,
                                        function() {
                                            e.unsuspend = null, clearTimeout(r), clearTimeout(a)
                                        }
                                } : null
                            }(d, m))) return Bc = l, e.cancelPendingCommit = m(gu.bind(null, e, t, l, n, r, a, o, s, i, u, d, null, f, p)), void Zc(e, l, o, !c)
                    }
                    gu(e, t, l, n, r, a, o, s, i)
                }

                function Gc(e) {
                    for (var t = e;;) {
                        var n = t.tag;
                        if ((0 === n || 11 === n || 15 === n) && 16384 & t.flags && (null !== (n = t.updateQueue) && null !== (n = n.stores)))
                            for (var r = 0; r < n.length; r++) {
                                var a = n[r],
                                    l = a.getSnapshot;
                                a = a.value;
                                try {
                                    if (!Gn(l(), a)) return !1
                                } catch (o) {
                                    return !1
                                }
                            }
                        if (n = t.child, 16384 & t.subtreeFlags && null !== n) n.return = t, t = n;
                        else {
                            if (t === e) break;
                            for (; null === t.sibling;) {
                                if (null === t.return || t.return === e) return !0;
                                t = t.return
                            }
                            t.sibling.return = t.return, t = t.sibling
                        }
                    }
                    return !0
                }

                function Zc(e, t, n, r) {
                    t &= ~Cc, t &= ~Ec, e.suspendedLanes |= t, e.pingedLanes &= ~t, r && (e.warmLanes |= t), r = e.expirationTimes;
                    for (var a = t; 0 < a;) {
                        var l = 31 - xe(a),
                            o = 1 << l;
                        r[l] = -1, a &= ~o
                    }
                    0 !== n && Le(e, n, t)
                }

                function eu() {
                    return 0 !== (6 & mc) || (Mu(0, !1), !1)
                }

                function tu() {
                    if (null !== gc) {
                        if (0 === vc) var e = gc.return;
                        else ja = Na = null, so(e = gc), il = null, cl = 0, e = gc;
                        for (; null !== e;) gi(e.alternate, e), e = e.return;
                        gc = null
                    }
                }

                function nu(e, t) {
                    var n = e.timeoutHandle; - 1 !== n && (e.timeoutHandle = -1, Sd(n)), null !== (n = e.cancelPendingCommit) && (e.cancelPendingCommit = null, n()), Bc = 0, tu(), hc = e, gc = n = Ir(e.current, null), yc = t, vc = 0, bc = null, xc = !1, wc = _e(e, t), kc = !1, Tc = _c = Cc = Ec = jc = Nc = 0, Pc = Rc = null, Oc = !1, 0 !== (8 & t) && (t |= 32 & t);
                    var r = e.entangledLanes;
                    if (0 !== r)
                        for (e = e.entanglements, r &= t; 0 < r;) {
                            var a = 31 - xe(r),
                                l = 1 << a;
                            t |= e[a], r &= ~l
                        }
                    return Sc = t, Rr(), n
                }

                function ru(e, t) {
                    Wl = null, z.H = gs, t === Ga || t === el ? (t = ol(), vc = 3) : t === Za ? (t = ol(), vc = 4) : vc = t === Ls ? 8 : null !== t && "object" === typeof t && "function" === typeof t.then ? 6 : 1, bc = t, null === gc && (Nc = 1, _s(e, Yr(t, e.current)))
                }

                function au() {
                    var e = Ll.current;
                    return null === e || ((4194048 & yc) === yc ? null === zl : ((62914560 & yc) === yc || 0 !== (536870912 & yc)) && e === zl)
                }

                function lu() {
                    var e = z.H;
                    return z.H = gs, null === e ? gs : e
                }

                function ou() {
                    var e = z.A;
                    return z.A = fc, e
                }

                function su() {
                    Nc = 4, xc || (4194048 & yc) !== yc && null !== Ll.current || (wc = !0), 0 === (134217727 & jc) && 0 === (134217727 & Ec) || null === hc || Zc(hc, yc, _c, !1)
                }

                function iu(e, t, n) {
                    var r = mc;
                    mc |= 2;
                    var a = lu(),
                        l = ou();
                    hc === e && yc === t || (Fc = null, nu(e, t)), t = !1;
                    var o = Nc;
                    e: for (;;) try {
                        if (0 !== vc && null !== gc) {
                            var s = gc,
                                i = bc;
                            switch (vc) {
                                case 8:
                                    tu(), o = 6;
                                    break e;
                                case 3:
                                case 2:
                                case 9:
                                case 6:
                                    null === Ll.current && (t = !0);
                                    var c = vc;
                                    if (vc = 0, bc = null, pu(e, s, i, c), n && wc) {
                                        o = 0;
                                        break e
                                    }
                                    break;
                                default:
                                    c = vc, vc = 0, bc = null, pu(e, s, i, c)
                            }
                        }
                        cu(), o = Nc;
                        break
                    } catch (u) {
                        ru(e, u)
                    }
                    return t && e.shellSuspendCounter++, ja = Na = null, mc = r, z.H = a, z.A = l, null === gc && (hc = null, yc = 0, Rr()), o
                }

                function cu() {
                    for (; null !== gc;) du(gc)
                }

                function uu() {
                    for (; null !== gc && !oe();) du(gc)
                }

                function du(e) {
                    var t = si(e.alternate, e, Sc);
                    e.memoizedProps = e.pendingProps, null === t ? mu(e) : gc = t
                }

                function fu(e) {
                    var t = e,
                        n = t.alternate;
                    switch (t.tag) {
                        case 15:
                        case 0:
                            t = $s(n, t, t.pendingProps, t.type, void 0, yc);
                            break;
                        case 11:
                            t = $s(n, t, t.pendingProps, t.type.render, t.ref, yc);
                            break;
                        case 5:
                            so(t);
                        default:
                            gi(n, t), t = si(n, t = gc = Br(t, Sc), Sc)
                    }
                    e.memoizedProps = e.pendingProps, null === t ? mu(e) : gc = t
                }

                function pu(e, t, n, r) {
                    ja = Na = null, so(t), il = null, cl = 0;
                    var a = t.return;
                    try {
                        if (function(e, t, n, r, a) {
                                if (n.flags |= 32768, null !== r && "object" === typeof r && "function" === typeof r.then) {
                                    if (null !== (t = n.alternate) && Ra(t, n, a, !0), null !== (n = Ll.current)) {
                                        switch (n.tag) {
                                            case 31:
                                            case 13:
                                                return null === zl ? su() : null === n.alternate && 0 === Nc && (Nc = 3), n.flags &= -257, n.flags |= 65536, n.lanes = a, r === tl ? n.flags |= 16384 : (null === (t = n.updateQueue) ? n.updateQueue = new Set([r]) : t.add(r), ju(e, r, a)), !1;
                                            case 22:
                                                return n.flags |= 65536, r === tl ? n.flags |= 16384 : (null === (t = n.updateQueue) ? (t = {
                                                    transitions: null,
                                                    markerInstances: null,
                                                    retryQueue: new Set([r])
                                                }, n.updateQueue = t) : null === (n = t.retryQueue) ? t.retryQueue = new Set([r]) : n.add(r), ju(e, r, a)), !1
                                        }
                                        throw Error(o(435, n.tag))
                                    }
                                    return ju(e, r, a), su(), !1
                                }
                                if (fa) return null !== (t = Ll.current) ? (0 === (65536 & t.flags) && (t.flags |= 256), t.flags |= 65536, t.lanes = a, r !== ha && ka(Yr(e = Error(o(422), {
                                    cause: r
                                }), n))) : (r !== ha && ka(Yr(t = Error(o(423), {
                                    cause: r
                                }), n)), (e = e.current.alternate).flags |= 65536, a &= -a, e.lanes |= a, r = Yr(r, n), kl(e, a = Rs(e.stateNode, r, a)), 4 !== Nc && (Nc = 2)), !1;
                                var l = Error(o(520), {
                                    cause: r
                                });
                                if (l = Yr(l, n), null === Rc ? Rc = [l] : Rc.push(l), 4 !== Nc && (Nc = 2), null === t) return !0;
                                r = Yr(r, n), n = t;
                                do {
                                    switch (n.tag) {
                                        case 3:
                                            return n.flags |= 65536, e = a & -a, n.lanes |= e, kl(n, e = Rs(n.stateNode, r, e)), !1;
                                        case 1:
                                            if (t = n.type, l = n.stateNode, 0 === (128 & n.flags) && ("function" === typeof t.getDerivedStateFromError || null !== l && "function" === typeof l.componentDidCatch && (null === Mc || !Mc.has(l)))) return n.flags |= 65536, a &= -a, n.lanes |= a, Os(a = Ps(a), e, n, r), kl(n, a), !1
                                    }
                                    n = n.return
                                } while (null !== n);
                                return !1
                            }(e, a, t, n, yc)) return Nc = 1, _s(e, Yr(n, e.current)), void(gc = null)
                    } catch (l) {
                        if (null !== a) throw gc = a, l;
                        return Nc = 1, _s(e, Yr(n, e.current)), void(gc = null)
                    }
                    32768 & t.flags ? (fa || 1 === r ? e = !0 : wc || 0 !== (536870912 & yc) ? e = !1 : (xc = e = !0, (2 === r || 9 === r || 3 === r || 6 === r) && (null !== (r = Ll.current) && 13 === r.tag && (r.flags |= 16384))), hu(t, e)) : mu(t)
                }

                function mu(e) {
                    var t = e;
                    do {
                        if (0 !== (32768 & t.flags)) return void hu(t, xc);
                        e = t.return;
                        var n = mi(t.alternate, t, Sc);
                        if (null !== n) return void(gc = n);
                        if (null !== (t = t.sibling)) return void(gc = t);
                        gc = t = e
                    } while (null !== t);
                    0 === Nc && (Nc = 5)
                }

                function hu(e, t) {
                    do {
                        var n = hi(e.alternate, e);
                        if (null !== n) return n.flags &= 32767, void(gc = n);
                        if (null !== (n = e.return) && (n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null), !t && null !== (e = e.sibling)) return void(gc = e);
                        gc = e = n
                    } while (null !== e);
                    Nc = 6, gc = null
                }

                function gu(e, t, n, r, a, l, s, i, c) {
                    e.cancelPendingCommit = null;
                    do {
                        wu()
                    } while (0 !== Dc);
                    if (0 !== (6 & mc)) throw Error(o(327));
                    if (null !== t) {
                        if (t === e.current) throw Error(o(177));
                        if (l = t.lanes | t.childLanes, function(e, t, n, r, a, l) {
                                var o = e.pendingLanes;
                                e.pendingLanes = n, e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0, e.expiredLanes &= n, e.entangledLanes &= n, e.errorRecoveryDisabledLanes &= n, e.shellSuspendCounter = 0;
                                var s = e.entanglements,
                                    i = e.expirationTimes,
                                    c = e.hiddenUpdates;
                                for (n = o & ~n; 0 < n;) {
                                    var u = 31 - xe(n),
                                        d = 1 << u;
                                    s[u] = 0, i[u] = -1;
                                    var f = c[u];
                                    if (null !== f)
                                        for (c[u] = null, u = 0; u < f.length; u++) {
                                            var p = f[u];
                                            null !== p && (p.lane &= -536870913)
                                        }
                                    n &= ~d
                                }
                                0 !== r && Le(e, r, 0), 0 !== l && 0 === a && 0 !== e.tag && (e.suspendedLanes |= l & ~(o & ~t))
                            }(e, n, l |= Tr, s, i, c), e === hc && (gc = hc = null, yc = 0), Ic = t, Uc = e, Bc = n, Hc = l, Wc = a, qc = r, 0 !== (10256 & t.subtreeFlags) || 0 !== (10256 & t.flags) ? (e.callbackNode = null, e.callbackPriority = 0, ae(fe, function() {
                                return ku(), null
                            })) : (e.callbackNode = null, e.callbackPriority = 0), r = 0 !== (13878 & t.flags), 0 !== (13878 & t.subtreeFlags) || r) {
                            r = z.T, z.T = null, a = A.p, A.p = 2, s = mc, mc |= 4;
                            try {
                                ! function(e, t) {
                                    if (e = e.containerInfo, hd = wf, ar(e = rr(e))) {
                                        if ("selectionStart" in e) var n = {
                                            start: e.selectionStart,
                                            end: e.selectionEnd
                                        };
                                        else e: {
                                            var r = (n = (n = e.ownerDocument) && n.defaultView || window).getSelection && n.getSelection();
                                            if (r && 0 !== r.rangeCount) {
                                                n = r.anchorNode;
                                                var a = r.anchorOffset,
                                                    l = r.focusNode;
                                                r = r.focusOffset;
                                                try {
                                                    n.nodeType, l.nodeType
                                                } catch (g) {
                                                    n = null;
                                                    break e
                                                }
                                                var s = 0,
                                                    i = -1,
                                                    c = -1,
                                                    u = 0,
                                                    d = 0,
                                                    f = e,
                                                    p = null;
                                                t: for (;;) {
                                                    for (var m; f !== n || 0 !== a && 3 !== f.nodeType || (i = s + a), f !== l || 0 !== r && 3 !== f.nodeType || (c = s + r), 3 === f.nodeType && (s += f.nodeValue.length), null !== (m = f.firstChild);) p = f, f = m;
                                                    for (;;) {
                                                        if (f === e) break t;
                                                        if (p === n && ++u === a && (i = s), p === l && ++d === r && (c = s), null !== (m = f.nextSibling)) break;
                                                        p = (f = p).parentNode
                                                    }
                                                    f = m
                                                }
                                                n = -1 === i || -1 === c ? null : {
                                                    start: i,
                                                    end: c
                                                }
                                            } else n = null
                                        }
                                        n = n || {
                                            start: 0,
                                            end: 0
                                        }
                                    } else n = null;
                                    for (gd = {
                                            focusedElem: e,
                                            selectionRange: n
                                        }, wf = !1, zi = t; null !== zi;)
                                        if (e = (t = zi).child, 0 !== (1028 & t.subtreeFlags) && null !== e) e.return = t, zi = e;
                                        else
                                            for (; null !== zi;) {
                                                switch (l = (t = zi).alternate, e = t.flags, t.tag) {
                                                    case 0:
                                                        if (0 !== (4 & e) && null !== (e = null !== (e = t.updateQueue) ? e.events : null))
                                                            for (n = 0; n < e.length; n++)(a = e[n]).ref.impl = a.nextImpl;
                                                        break;
                                                    case 11:
                                                    case 15:
                                                    case 5:
                                                    case 26:
                                                    case 27:
                                                    case 6:
                                                    case 4:
                                                    case 17:
                                                        break;
                                                    case 1:
                                                        if (0 !== (1024 & e) && null !== l) {
                                                            e = void 0, n = t, a = l.memoizedProps, l = l.memoizedState, r = n.stateNode;
                                                            try {
                                                                var h = Ns(n.type, a);
                                                                e = r.getSnapshotBeforeUpdate(h, l), r.__reactInternalSnapshotBeforeUpdate = e
                                                            } catch (y) {
                                                                Nu(n, n.return, y)
                                                            }
                                                        }
                                                        break;
                                                    case 3:
                                                        if (0 !== (1024 & e))
                                                            if (9 === (n = (e = t.stateNode.containerInfo).nodeType)) Rd(e);
                                                            else if (1 === n) switch (e.nodeName) {
                                                            case "HEAD":
                                                            case "HTML":
                                                            case "BODY":
                                                                Rd(e);
                                                                break;
                                                            default:
                                                                e.textContent = ""
                                                        }
                                                        break;
                                                    default:
                                                        if (0 !== (1024 & e)) throw Error(o(163))
                                                }
                                                if (null !== (e = t.sibling)) {
                                                    e.return = t.return, zi = e;
                                                    break
                                                }
                                                zi = t.return
                                            }
                                }(e, t)
                            } finally {
                                mc = s, A.p = a, z.T = r
                            }
                        }
                        Dc = 1, yu(), vu(), bu()
                    }
                }

                function yu() {
                    if (1 === Dc) {
                        Dc = 0;
                        var e = Uc,
                            t = Ic,
                            n = 0 !== (13878 & t.flags);
                        if (0 !== (13878 & t.subtreeFlags) || n) {
                            n = z.T, z.T = null;
                            var r = A.p;
                            A.p = 2;
                            var a = mc;
                            mc |= 4;
                            try {
                                $i(t, e);
                                var l = gd,
                                    o = rr(e.containerInfo),
                                    s = l.focusedElem,
                                    i = l.selectionRange;
                                if (o !== s && s && s.ownerDocument && nr(s.ownerDocument.documentElement, s)) {
                                    if (null !== i && ar(s)) {
                                        var c = i.start,
                                            u = i.end;
                                        if (void 0 === u && (u = c), "selectionStart" in s) s.selectionStart = c, s.selectionEnd = Math.min(u, s.value.length);
                                        else {
                                            var d = s.ownerDocument || document,
                                                f = d && d.defaultView || window;
                                            if (f.getSelection) {
                                                var p = f.getSelection(),
                                                    m = s.textContent.length,
                                                    h = Math.min(i.start, m),
                                                    g = void 0 === i.end ? h : Math.min(i.end, m);
                                                !p.extend && h > g && (o = g, g = h, h = o);
                                                var y = tr(s, h),
                                                    v = tr(s, g);
                                                if (y && v && (1 !== p.rangeCount || p.anchorNode !== y.node || p.anchorOffset !== y.offset || p.focusNode !== v.node || p.focusOffset !== v.offset)) {
                                                    var b = d.createRange();
                                                    b.setStart(y.node, y.offset), p.removeAllRanges(), h > g ? (p.addRange(b), p.extend(v.node, v.offset)) : (b.setEnd(v.node, v.offset), p.addRange(b))
                                                }
                                            }
                                        }
                                    }
                                    for (d = [], p = s; p = p.parentNode;) 1 === p.nodeType && d.push({
                                        element: p,
                                        left: p.scrollLeft,
                                        top: p.scrollTop
                                    });
                                    for ("function" === typeof s.focus && s.focus(), s = 0; s < d.length; s++) {
                                        var x = d[s];
                                        x.element.scrollLeft = x.left, x.element.scrollTop = x.top
                                    }
                                }
                                wf = !!hd, gd = hd = null
                            } finally {
                                mc = a, A.p = r, z.T = n
                            }
                        }
                        e.current = t, Dc = 2
                    }
                }

                function vu() {
                    if (2 === Dc) {
                        Dc = 0;
                        var e = Uc,
                            t = Ic,
                            n = 0 !== (8772 & t.flags);
                        if (0 !== (8772 & t.subtreeFlags) || n) {
                            n = z.T, z.T = null;
                            var r = A.p;
                            A.p = 2;
                            var a = mc;
                            mc |= 4;
                            try {
                                Ai(e, t.alternate, t)
                            } finally {
                                mc = a, A.p = r, z.T = n
                            }
                        }
                        Dc = 3
                    }
                }

                function bu() {
                    if (4 === Dc || 3 === Dc) {
                        Dc = 0, se();
                        var e = Uc,
                            t = Ic,
                            n = Bc,
                            r = qc;
                        0 !== (10256 & t.subtreeFlags) || 0 !== (10256 & t.flags) ? Dc = 5 : (Dc = 0, Ic = Uc = null, xu(e, e.pendingLanes));
                        var a = e.pendingLanes;
                        if (0 === a && (Mc = null), Me(n), t = t.stateNode, ve && "function" === typeof ve.onCommitFiberRoot) try {
                            ve.onCommitFiberRoot(ye, t, void 0, 128 === (128 & t.current.flags))
                        } catch (i) {}
                        if (null !== r) {
                            t = z.T, a = A.p, A.p = 2, z.T = null;
                            try {
                                for (var l = e.onRecoverableError, o = 0; o < r.length; o++) {
                                    var s = r[o];
                                    l(s.value, {
                                        componentStack: s.stack
                                    })
                                }
                            } finally {
                                z.T = t, A.p = a
                            }
                        }
                        0 !== (3 & Bc) && wu(), Fu(e), a = e.pendingLanes, 0 !== (261930 & n) && 0 !== (42 & a) ? e === $c ? Vc++ : (Vc = 0, $c = e) : Vc = 0, Mu(0, !1)
                    }
                }

                function xu(e, t) {
                    0 === (e.pooledCacheLanes &= t) && (null != (t = e.pooledCache) && (e.pooledCache = null, Ba(t)))
                }

                function wu() {
                    return yu(), vu(), bu(), ku()
                }

                function ku() {
                    if (5 !== Dc) return !1;
                    var e = Uc,
                        t = Hc;
                    Hc = 0;
                    var n = Me(Bc),
                        r = z.T,
                        a = A.p;
                    try {
                        A.p = 32 > n ? 32 : n, z.T = null, n = Wc, Wc = null;
                        var l = Uc,
                            s = Bc;
                        if (Dc = 0, Ic = Uc = null, Bc = 0, 0 !== (6 & mc)) throw Error(o(331));
                        var i = mc;
                        if (mc |= 4, cc(l.current), tc(l, l.current, s, n), mc = i, Mu(0, !1), ve && "function" === typeof ve.onPostCommitFiberRoot) try {
                            ve.onPostCommitFiberRoot(ye, l)
                        } catch (c) {}
                        return !0
                    } finally {
                        A.p = a, z.T = r, xu(e, t)
                    }
                }

                function Su(e, t, n) {
                    t = Yr(n, t), null !== (e = xl(e, t = Rs(e.stateNode, t, 2), 2)) && (Oe(e, 2), Fu(e))
                }

                function Nu(e, t, n) {
                    if (3 === e.tag) Su(e, e, n);
                    else
                        for (; null !== t;) {
                            if (3 === t.tag) {
                                Su(t, e, n);
                                break
                            }
                            if (1 === t.tag) {
                                var r = t.stateNode;
                                if ("function" === typeof t.type.getDerivedStateFromError || "function" === typeof r.componentDidCatch && (null === Mc || !Mc.has(r))) {
                                    e = Yr(n, e), null !== (r = xl(t, n = Ps(2), 2)) && (Os(n, r, t, e), Oe(r, 2), Fu(r));
                                    break
                                }
                            }
                            t = t.return
                        }
                }

                function ju(e, t, n) {
                    var r = e.pingCache;
                    if (null === r) {
                        r = e.pingCache = new pc;
                        var a = new Set;
                        r.set(t, a)
                    } else void 0 === (a = r.get(t)) && (a = new Set, r.set(t, a));
                    a.has(n) || (kc = !0, a.add(n), e = Eu.bind(null, e, t, n), t.then(e, e))
                }

                function Eu(e, t, n) {
                    var r = e.pingCache;
                    null !== r && r.delete(t), e.pingedLanes |= e.suspendedLanes & n, e.warmLanes &= ~n, hc === e && (yc & n) === n && (4 === Nc || 3 === Nc && (62914560 & yc) === yc && 300 > ie() - Lc ? 0 === (2 & mc) && nu(e, 0) : Cc |= n, Tc === yc && (Tc = 0)), Fu(e)
                }

                function Cu(e, t) {
                    0 === t && (t = Re()), null !== (e = Lr(e, t)) && (Oe(e, t), Fu(e))
                }

                function _u(e) {
                    var t = e.memoizedState,
                        n = 0;
                    null !== t && (n = t.retryLane), Cu(e, n)
                }

                function Tu(e, t) {
                    var n = 0;
                    switch (e.tag) {
                        case 31:
                        case 13:
                            var r = e.stateNode,
                                a = e.memoizedState;
                            null !== a && (n = a.retryLane);
                            break;
                        case 19:
                            r = e.stateNode;
                            break;
                        case 22:
                            r = e.stateNode._retryCache;
                            break;
                        default:
                            throw Error(o(314))
                    }
                    null !== r && r.delete(t), Cu(e, n)
                }
                var Ru = null,
                    Pu = null,
                    Ou = !1,
                    Lu = !1,
                    zu = !1,
                    Au = 0;

                function Fu(e) {
                    e !== Pu && null === e.next && (null === Pu ? Ru = Pu = e : Pu = Pu.next = e), Lu = !0, Ou || (Ou = !0, jd(function() {
                        0 !== (6 & mc) ? ae(ue, Du) : Uu()
                    }))
                }

                function Mu(e, t) {
                    if (!zu && Lu) {
                        zu = !0;
                        do {
                            for (var n = !1, r = Ru; null !== r;) {
                                if (!t)
                                    if (0 !== e) {
                                        var a = r.pendingLanes;
                                        if (0 === a) var l = 0;
                                        else {
                                            var o = r.suspendedLanes,
                                                s = r.pingedLanes;
                                            l = (1 << 31 - xe(42 | e) + 1) - 1, l = 201326741 & (l &= a & ~(o & ~s)) ? 201326741 & l | 1 : l ? 2 | l : 0
                                        }
                                        0 !== l && (n = !0, Hu(r, l))
                                    } else l = yc, 0 === (3 & (l = Ce(r, r === hc ? l : 0, null !== r.cancelPendingCommit || -1 !== r.timeoutHandle))) || _e(r, l) || (n = !0, Hu(r, l));
                                r = r.next
                            }
                        } while (n);
                        zu = !1
                    }
                }

                function Du() {
                    Uu()
                }

                function Uu() {
                    Lu = Ou = !1;
                    var e = 0;
                    0 !== Au && function() {
                        var e = window.event;
                        if (e && "popstate" === e.type) return e !== wd && (wd = e, !0);
                        return wd = null, !1
                    }() && (e = Au);
                    for (var t = ie(), n = null, r = Ru; null !== r;) {
                        var a = r.next,
                            l = Iu(r, t);
                        0 === l ? (r.next = null, null === n ? Ru = a : n.next = a, null === a && (Pu = n)) : (n = r, (0 !== e || 0 !== (3 & l)) && (Lu = !0)), r = a
                    }
                    0 !== Dc && 5 !== Dc || Mu(e, !1), 0 !== Au && (Au = 0)
                }

                function Iu(e, t) {
                    for (var n = e.suspendedLanes, r = e.pingedLanes, a = e.expirationTimes, l = -62914561 & e.pendingLanes; 0 < l;) {
                        var o = 31 - xe(l),
                            s = 1 << o,
                            i = a[o]; - 1 === i ? 0 !== (s & n) && 0 === (s & r) || (a[o] = Te(s, t)) : i <= t && (e.expiredLanes |= s), l &= ~s
                    }
                    if (n = yc, n = Ce(e, e === (t = hc) ? n : 0, null !== e.cancelPendingCommit || -1 !== e.timeoutHandle), r = e.callbackNode, 0 === n || e === t && (2 === vc || 9 === vc) || null !== e.cancelPendingCommit) return null !== r && null !== r && le(r), e.callbackNode = null, e.callbackPriority = 0;
                    if (0 === (3 & n) || _e(e, n)) {
                        if ((t = n & -n) === e.callbackPriority) return t;
                        switch (null !== r && le(r), Me(n)) {
                            case 2:
                            case 8:
                                n = de;
                                break;
                            case 32:
                            default:
                                n = fe;
                                break;
                            case 268435456:
                                n = me
                        }
                        return r = Bu.bind(null, e), n = ae(n, r), e.callbackPriority = t, e.callbackNode = n, t
                    }
                    return null !== r && null !== r && le(r), e.callbackPriority = 2, e.callbackNode = null, 2
                }

                function Bu(e, t) {
                    if (0 !== Dc && 5 !== Dc) return e.callbackNode = null, e.callbackPriority = 0, null;
                    var n = e.callbackNode;
                    if (wu() && e.callbackNode !== n) return null;
                    var r = yc;
                    return 0 === (r = Ce(e, e === hc ? r : 0, null !== e.cancelPendingCommit || -1 !== e.timeoutHandle)) ? null : (Jc(e, r, t), Iu(e, ie()), null != e.callbackNode && e.callbackNode === n ? Bu.bind(null, e) : null)
                }

                function Hu(e, t) {
                    if (wu()) return null;
                    Jc(e, t, !0)
                }

                function Wu() {
                    if (0 === Au) {
                        var e = qa;
                        0 === e && (e = Se, 0 === (261888 & (Se <<= 1)) && (Se = 256)), Au = e
                    }
                    return Au
                }

                function qu(e) {
                    return null == e || "symbol" === typeof e || "boolean" === typeof e ? null : "function" === typeof e ? e : Pt("" + e)
                }

                function Vu(e, t) {
                    var n = t.ownerDocument.createElement("input");
                    return n.name = t.name, n.value = t.value, e.id && n.setAttribute("form", e.id), t.parentNode.insertBefore(n, t), e = new FormData(e), n.parentNode.removeChild(n), e
                }
                for (var $u = 0; $u < Nr.length; $u++) {
                    var Qu = Nr[$u];
                    jr(Qu.toLowerCase(), "on" + (Qu[0].toUpperCase() + Qu.slice(1)))
                }
                jr(gr, "onAnimationEnd"), jr(yr, "onAnimationIteration"), jr(vr, "onAnimationStart"), jr("dblclick", "onDoubleClick"), jr("focusin", "onFocus"), jr("focusout", "onBlur"), jr(br, "onTransitionRun"), jr(xr, "onTransitionStart"), jr(wr, "onTransitionCancel"), jr(kr, "onTransitionEnd"), at("onMouseEnter", ["mouseout", "mouseover"]), at("onMouseLeave", ["mouseout", "mouseover"]), at("onPointerEnter", ["pointerout", "pointerover"]), at("onPointerLeave", ["pointerout", "pointerover"]), rt("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), rt("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), rt("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), rt("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), rt("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), rt("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
                var Yu = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),
                    Ku = new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Yu));

                function Ju(e, t) {
                    t = 0 !== (4 & t);
                    for (var n = 0; n < e.length; n++) {
                        var r = e[n],
                            a = r.event;
                        r = r.listeners;
                        e: {
                            var l = void 0;
                            if (t)
                                for (var o = r.length - 1; 0 <= o; o--) {
                                    var s = r[o],
                                        i = s.instance,
                                        c = s.currentTarget;
                                    if (s = s.listener, i !== l && a.isPropagationStopped()) break e;
                                    l = s, a.currentTarget = c;
                                    try {
                                        l(a)
                                    } catch (u) {
                                        Er(u)
                                    }
                                    a.currentTarget = null, l = i
                                } else
                                    for (o = 0; o < r.length; o++) {
                                        if (i = (s = r[o]).instance, c = s.currentTarget, s = s.listener, i !== l && a.isPropagationStopped()) break e;
                                        l = s, a.currentTarget = c;
                                        try {
                                            l(a)
                                        } catch (u) {
                                            Er(u)
                                        }
                                        a.currentTarget = null, l = i
                                    }
                        }
                    }
                }

                function Xu(e, t) {
                    var n = t[qe];
                    void 0 === n && (n = t[qe] = new Set);
                    var r = e + "__bubble";
                    n.has(r) || (td(t, e, 2, !1), n.add(r))
                }

                function Gu(e, t, n) {
                    var r = 0;
                    t && (r |= 4), td(n, e, r, t)
                }
                var Zu = "_reactListening" + Math.random().toString(36).slice(2);

                function ed(e) {
                    if (!e[Zu]) {
                        e[Zu] = !0, tt.forEach(function(t) {
                            "selectionchange" !== t && (Ku.has(t) || Gu(t, !1, e), Gu(t, !0, e))
                        });
                        var t = 9 === e.nodeType ? e : e.ownerDocument;
                        null === t || t[Zu] || (t[Zu] = !0, Gu("selectionchange", !1, t))
                    }
                }

                function td(e, t, n, r) {
                    switch (_f(t)) {
                        case 2:
                            var a = kf;
                            break;
                        case 8:
                            a = Sf;
                            break;
                        default:
                            a = Nf
                    }
                    n = a.bind(null, t, n, e), a = void 0, !Ht || "touchstart" !== t && "touchmove" !== t && "wheel" !== t || (a = !0), r ? void 0 !== a ? e.addEventListener(t, n, {
                        capture: !0,
                        passive: a
                    }) : e.addEventListener(t, n, !0) : void 0 !== a ? e.addEventListener(t, n, {
                        passive: a
                    }) : e.addEventListener(t, n, !1)
                }

                function nd(e, t, n, r, a) {
                    var l = r;
                    if (0 === (1 & t) && 0 === (2 & t) && null !== r) e: for (;;) {
                        if (null === r) return;
                        var o = r.tag;
                        if (3 === o || 4 === o) {
                            var s = r.stateNode.containerInfo;
                            if (s === a) break;
                            if (4 === o)
                                for (o = r.return; null !== o;) {
                                    var c = o.tag;
                                    if ((3 === c || 4 === c) && o.stateNode.containerInfo === a) return;
                                    o = o.return
                                }
                            for (; null !== s;) {
                                if (null === (o = Je(s))) return;
                                if (5 === (c = o.tag) || 6 === c || 26 === c || 27 === c) {
                                    r = l = o;
                                    continue e
                                }
                                s = s.parentNode
                            }
                        }
                        r = r.return
                    }
                    Ut(function() {
                        var r = l,
                            a = zt(n),
                            o = [];
                        e: {
                            var s = Sr.get(e);
                            if (void 0 !== s) {
                                var c = nn,
                                    u = e;
                                switch (e) {
                                    case "keypress":
                                        if (0 === Yt(n)) break e;
                                    case "keydown":
                                    case "keyup":
                                        c = vn;
                                        break;
                                    case "focusin":
                                        u = "focus", c = cn;
                                        break;
                                    case "focusout":
                                        u = "blur", c = cn;
                                        break;
                                    case "beforeblur":
                                    case "afterblur":
                                        c = cn;
                                        break;
                                    case "click":
                                        if (2 === n.button) break e;
                                    case "auxclick":
                                    case "dblclick":
                                    case "mousedown":
                                    case "mousemove":
                                    case "mouseup":
                                    case "mouseout":
                                    case "mouseover":
                                    case "contextmenu":
                                        c = on;
                                        break;
                                    case "drag":
                                    case "dragend":
                                    case "dragenter":
                                    case "dragexit":
                                    case "dragleave":
                                    case "dragover":
                                    case "dragstart":
                                    case "drop":
                                        c = sn;
                                        break;
                                    case "touchcancel":
                                    case "touchend":
                                    case "touchmove":
                                    case "touchstart":
                                        c = xn;
                                        break;
                                    case gr:
                                    case yr:
                                    case vr:
                                        c = un;
                                        break;
                                    case kr:
                                        c = wn;
                                        break;
                                    case "scroll":
                                    case "scrollend":
                                        c = an;
                                        break;
                                    case "wheel":
                                        c = kn;
                                        break;
                                    case "copy":
                                    case "cut":
                                    case "paste":
                                        c = dn;
                                        break;
                                    case "gotpointercapture":
                                    case "lostpointercapture":
                                    case "pointercancel":
                                    case "pointerdown":
                                    case "pointermove":
                                    case "pointerout":
                                    case "pointerover":
                                    case "pointerup":
                                        c = bn;
                                        break;
                                    case "toggle":
                                    case "beforetoggle":
                                        c = Sn
                                }
                                var d = 0 !== (4 & t),
                                    f = !d && ("scroll" === e || "scrollend" === e),
                                    p = d ? null !== s ? s + "Capture" : null : s;
                                d = [];
                                for (var m, h = r; null !== h;) {
                                    var g = h;
                                    if (m = g.stateNode, 5 !== (g = g.tag) && 26 !== g && 27 !== g || null === m || null === p || null != (g = It(h, p)) && d.push(rd(h, g, m)), f) break;
                                    h = h.return
                                }
                                0 < d.length && (s = new c(s, u, null, n, a), o.push({
                                    event: s,
                                    listeners: d
                                }))
                            }
                        }
                        if (0 === (7 & t)) {
                            if (c = "mouseout" === e || "pointerout" === e, (!(s = "mouseover" === e || "pointerover" === e) || n === Lt || !(u = n.relatedTarget || n.fromElement) || !Je(u) && !u[We]) && (c || s) && (s = a.window === a ? a : (s = a.ownerDocument) ? s.defaultView || s.parentWindow : window, c ? (c = r, null !== (u = (u = n.relatedTarget || n.toElement) ? Je(u) : null) && (f = i(u), d = u.tag, u !== f || 5 !== d && 27 !== d && 6 !== d) && (u = null)) : (c = null, u = r), c !== u)) {
                                if (d = on, g = "onMouseLeave", p = "onMouseEnter", h = "mouse", "pointerout" !== e && "pointerover" !== e || (d = bn, g = "onPointerLeave", p = "onPointerEnter", h = "pointer"), f = null == c ? s : Ge(c), m = null == u ? s : Ge(u), (s = new d(g, h + "leave", c, n, a)).target = f, s.relatedTarget = m, g = null, Je(a) === r && ((d = new d(p, h + "enter", u, n, a)).target = m, d.relatedTarget = f, g = d), f = g, c && u) e: {
                                    for (d = ld, h = u, m = 0, g = p = c; g; g = d(g)) m++;g = 0;
                                    for (var y = h; y; y = d(y)) g++;
                                    for (; 0 < m - g;) p = d(p),
                                    m--;
                                    for (; 0 < g - m;) h = d(h),
                                    g--;
                                    for (; m--;) {
                                        if (p === h || null !== h && p === h.alternate) {
                                            d = p;
                                            break e
                                        }
                                        p = d(p), h = d(h)
                                    }
                                    d = null
                                }
                                else d = null;
                                null !== c && od(o, s, c, d, !1), null !== u && null !== f && od(o, f, u, d, !0)
                            }
                            if ("select" === (c = (s = r ? Ge(r) : window).nodeName && s.nodeName.toLowerCase()) || "input" === c && "file" === s.type) var v = Bn;
                            else if (An(s))
                                if (Hn) v = Xn;
                                else {
                                    v = Kn;
                                    var b = Yn
                                }
                            else !(c = s.nodeName) || "input" !== c.toLowerCase() || "checkbox" !== s.type && "radio" !== s.type ? r && _t(r.elementType) && (v = Bn) : v = Jn;
                            switch (v && (v = v(e, r)) ? Fn(o, v, n, a) : (b && b(e, s, r), "focusout" === e && r && "number" === s.type && null != r.memoizedProps.value && xt(s, "number", s.value)), b = r ? Ge(r) : window, e) {
                                case "focusin":
                                    (An(b) || "true" === b.contentEditable) && (or = b, sr = r, ir = null);
                                    break;
                                case "focusout":
                                    ir = sr = or = null;
                                    break;
                                case "mousedown":
                                    cr = !0;
                                    break;
                                case "contextmenu":
                                case "mouseup":
                                case "dragend":
                                    cr = !1, ur(o, n, a);
                                    break;
                                case "selectionchange":
                                    if (lr) break;
                                case "keydown":
                                case "keyup":
                                    ur(o, n, a)
                            }
                            var x;
                            if (jn) e: {
                                switch (e) {
                                    case "compositionstart":
                                        var w = "onCompositionStart";
                                        break e;
                                    case "compositionend":
                                        w = "onCompositionEnd";
                                        break e;
                                    case "compositionupdate":
                                        w = "onCompositionUpdate";
                                        break e
                                }
                                w = void 0
                            }
                            else Ln ? Pn(e, n) && (w = "onCompositionEnd") : "keydown" === e && 229 === n.keyCode && (w = "onCompositionStart");
                            w && (_n && "ko" !== n.locale && (Ln || "onCompositionStart" !== w ? "onCompositionEnd" === w && Ln && (x = Qt()) : (Vt = "value" in (qt = a) ? qt.value : qt.textContent, Ln = !0)), 0 < (b = ad(r, w)).length && (w = new fn(w, e, null, n, a), o.push({
                                    event: w,
                                    listeners: b
                                }), x ? w.data = x : null !== (x = On(n)) && (w.data = x))), (x = Cn ? function(e, t) {
                                    switch (e) {
                                        case "compositionend":
                                            return On(t);
                                        case "keypress":
                                            return 32 !== t.which ? null : (Rn = !0, Tn);
                                        case "textInput":
                                            return (e = t.data) === Tn && Rn ? null : e;
                                        default:
                                            return null
                                    }
                                }(e, n) : function(e, t) {
                                    if (Ln) return "compositionend" === e || !jn && Pn(e, t) ? (e = Qt(), $t = Vt = qt = null, Ln = !1, e) : null;
                                    switch (e) {
                                        case "paste":
                                        default:
                                            return null;
                                        case "keypress":
                                            if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
                                                if (t.char && 1 < t.char.length) return t.char;
                                                if (t.which) return String.fromCharCode(t.which)
                                            }
                                            return null;
                                        case "compositionend":
                                            return _n && "ko" !== t.locale ? null : t.data
                                    }
                                }(e, n)) && (0 < (w = ad(r, "onBeforeInput")).length && (b = new fn("onBeforeInput", "beforeinput", null, n, a), o.push({
                                    event: b,
                                    listeners: w
                                }), b.data = x)),
                                function(e, t, n, r, a) {
                                    if ("submit" === t && n && n.stateNode === a) {
                                        var l = qu((a[He] || null).action),
                                            o = r.submitter;
                                        o && null !== (t = (t = o[He] || null) ? qu(t.formAction) : o.getAttribute("formAction")) && (l = t, o = null);
                                        var s = new nn("action", "action", null, r, a);
                                        e.push({
                                            event: s,
                                            listeners: [{
                                                instance: null,
                                                listener: function() {
                                                    if (r.defaultPrevented) {
                                                        if (0 !== Au) {
                                                            var e = o ? Vu(a, o) : new FormData(a);
                                                            ns(n, {
                                                                pending: !0,
                                                                data: e,
                                                                method: a.method,
                                                                action: l
                                                            }, null, e)
                                                        }
                                                    } else "function" === typeof l && (s.preventDefault(), e = o ? Vu(a, o) : new FormData(a), ns(n, {
                                                        pending: !0,
                                                        data: e,
                                                        method: a.method,
                                                        action: l
                                                    }, l, e))
                                                },
                                                currentTarget: a
                                            }]
                                        })
                                    }
                                }(o, e, r, n, a)
                        }
                        Ju(o, t)
                    })
                }

                function rd(e, t, n) {
                    return {
                        instance: e,
                        listener: t,
                        currentTarget: n
                    }
                }

                function ad(e, t) {
                    for (var n = t + "Capture", r = []; null !== e;) {
                        var a = e,
                            l = a.stateNode;
                        if (5 !== (a = a.tag) && 26 !== a && 27 !== a || null === l || (null != (a = It(e, n)) && r.unshift(rd(e, a, l)), null != (a = It(e, t)) && r.push(rd(e, a, l))), 3 === e.tag) return r;
                        e = e.return
                    }
                    return []
                }

                function ld(e) {
                    if (null === e) return null;
                    do {
                        e = e.return
                    } while (e && 5 !== e.tag && 27 !== e.tag);
                    return e || null
                }

                function od(e, t, n, r, a) {
                    for (var l = t._reactName, o = []; null !== n && n !== r;) {
                        var s = n,
                            i = s.alternate,
                            c = s.stateNode;
                        if (s = s.tag, null !== i && i === r) break;
                        5 !== s && 26 !== s && 27 !== s || null === c || (i = c, a ? null != (c = It(n, l)) && o.unshift(rd(n, c, i)) : a || null != (c = It(n, l)) && o.push(rd(n, c, i))), n = n.return
                    }
                    0 !== o.length && e.push({
                        event: t,
                        listeners: o
                    })
                }
                var sd = /\r\n?/g,
                    id = /\u0000|\uFFFD/g;

                function cd(e) {
                    return ("string" === typeof e ? e : "" + e).replace(sd, "\n").replace(id, "")
                }

                function ud(e, t) {
                    return t = cd(t), cd(e) === t
                }

                function dd(e, t, n, r, a, l) {
                    switch (n) {
                        case "children":
                            "string" === typeof r ? "body" === t || "textarea" === t && "" === r || Nt(e, r) : ("number" === typeof r || "bigint" === typeof r) && "body" !== t && Nt(e, "" + r);
                            break;
                        case "className":
                            ct(e, "class", r);
                            break;
                        case "tabIndex":
                            ct(e, "tabindex", r);
                            break;
                        case "dir":
                        case "role":
                        case "viewBox":
                        case "width":
                        case "height":
                            ct(e, n, r);
                            break;
                        case "style":
                            Ct(e, r, l);
                            break;
                        case "data":
                            if ("object" !== t) {
                                ct(e, "data", r);
                                break
                            }
                        case "src":
                        case "href":
                            if ("" === r && ("a" !== t || "href" !== n)) {
                                e.removeAttribute(n);
                                break
                            }
                            if (null == r || "function" === typeof r || "symbol" === typeof r || "boolean" === typeof r) {
                                e.removeAttribute(n);
                                break
                            }
                            r = Pt("" + r), e.setAttribute(n, r);
                            break;
                        case "action":
                        case "formAction":
                            if ("function" === typeof r) {
                                e.setAttribute(n, "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");
                                break
                            }
                            if ("function" === typeof l && ("formAction" === n ? ("input" !== t && dd(e, t, "name", a.name, a, null), dd(e, t, "formEncType", a.formEncType, a, null), dd(e, t, "formMethod", a.formMethod, a, null), dd(e, t, "formTarget", a.formTarget, a, null)) : (dd(e, t, "encType", a.encType, a, null), dd(e, t, "method", a.method, a, null), dd(e, t, "target", a.target, a, null))), null == r || "symbol" === typeof r || "boolean" === typeof r) {
                                e.removeAttribute(n);
                                break
                            }
                            r = Pt("" + r), e.setAttribute(n, r);
                            break;
                        case "onClick":
                            null != r && (e.onclick = Ot);
                            break;
                        case "onScroll":
                            null != r && Xu("scroll", e);
                            break;
                        case "onScrollEnd":
                            null != r && Xu("scrollend", e);
                            break;
                        case "dangerouslySetInnerHTML":
                            if (null != r) {
                                if ("object" !== typeof r || !("__html" in r)) throw Error(o(61));
                                if (null != (n = r.__html)) {
                                    if (null != a.children) throw Error(o(60));
                                    e.innerHTML = n
                                }
                            }
                            break;
                        case "multiple":
                            e.multiple = r && "function" !== typeof r && "symbol" !== typeof r;
                            break;
                        case "muted":
                            e.muted = r && "function" !== typeof r && "symbol" !== typeof r;
                            break;
                        case "suppressContentEditableWarning":
                        case "suppressHydrationWarning":
                        case "defaultValue":
                        case "defaultChecked":
                        case "innerHTML":
                        case "ref":
                        case "autoFocus":
                            break;
                        case "xlinkHref":
                            if (null == r || "function" === typeof r || "boolean" === typeof r || "symbol" === typeof r) {
                                e.removeAttribute("xlink:href");
                                break
                            }
                            n = Pt("" + r), e.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", n);
                            break;
                        case "contentEditable":
                        case "spellCheck":
                        case "draggable":
                        case "value":
                        case "autoReverse":
                        case "externalResourcesRequired":
                        case "focusable":
                        case "preserveAlpha":
                            null != r && "function" !== typeof r && "symbol" !== typeof r ? e.setAttribute(n, "" + r) : e.removeAttribute(n);
                            break;
                        case "inert":
                        case "allowFullScreen":
                        case "async":
                        case "autoPlay":
                        case "controls":
                        case "default":
                        case "defer":
                        case "disabled":
                        case "disablePictureInPicture":
                        case "disableRemotePlayback":
                        case "formNoValidate":
                        case "hidden":
                        case "loop":
                        case "noModule":
                        case "noValidate":
                        case "open":
                        case "playsInline":
                        case "readOnly":
                        case "required":
                        case "reversed":
                        case "scoped":
                        case "seamless":
                        case "itemScope":
                            r && "function" !== typeof r && "symbol" !== typeof r ? e.setAttribute(n, "") : e.removeAttribute(n);
                            break;
                        case "capture":
                        case "download":
                            !0 === r ? e.setAttribute(n, "") : !1 !== r && null != r && "function" !== typeof r && "symbol" !== typeof r ? e.setAttribute(n, r) : e.removeAttribute(n);
                            break;
                        case "cols":
                        case "rows":
                        case "size":
                        case "span":
                            null != r && "function" !== typeof r && "symbol" !== typeof r && !isNaN(r) && 1 <= r ? e.setAttribute(n, r) : e.removeAttribute(n);
                            break;
                        case "rowSpan":
                        case "start":
                            null == r || "function" === typeof r || "symbol" === typeof r || isNaN(r) ? e.removeAttribute(n) : e.setAttribute(n, r);
                            break;
                        case "popover":
                            Xu("beforetoggle", e), Xu("toggle", e), it(e, "popover", r);
                            break;
                        case "xlinkActuate":
                            ut(e, "http://www.w3.org/1999/xlink", "xlink:actuate", r);
                            break;
                        case "xlinkArcrole":
                            ut(e, "http://www.w3.org/1999/xlink", "xlink:arcrole", r);
                            break;
                        case "xlinkRole":
                            ut(e, "http://www.w3.org/1999/xlink", "xlink:role", r);
                            break;
                        case "xlinkShow":
                            ut(e, "http://www.w3.org/1999/xlink", "xlink:show", r);
                            break;
                        case "xlinkTitle":
                            ut(e, "http://www.w3.org/1999/xlink", "xlink:title", r);
                            break;
                        case "xlinkType":
                            ut(e, "http://www.w3.org/1999/xlink", "xlink:type", r);
                            break;
                        case "xmlBase":
                            ut(e, "http://www.w3.org/XML/1998/namespace", "xml:base", r);
                            break;
                        case "xmlLang":
                            ut(e, "http://www.w3.org/XML/1998/namespace", "xml:lang", r);
                            break;
                        case "xmlSpace":
                            ut(e, "http://www.w3.org/XML/1998/namespace", "xml:space", r);
                            break;
                        case "is":
                            it(e, "is", r);
                            break;
                        case "innerText":
                        case "textContent":
                            break;
                        default:
                            (!(2 < n.length) || "o" !== n[0] && "O" !== n[0] || "n" !== n[1] && "N" !== n[1]) && it(e, n = Tt.get(n) || n, r)
                    }
                }

                function fd(e, t, n, r, a, l) {
                    switch (n) {
                        case "style":
                            Ct(e, r, l);
                            break;
                        case "dangerouslySetInnerHTML":
                            if (null != r) {
                                if ("object" !== typeof r || !("__html" in r)) throw Error(o(61));
                                if (null != (n = r.__html)) {
                                    if (null != a.children) throw Error(o(60));
                                    e.innerHTML = n
                                }
                            }
                            break;
                        case "children":
                            "string" === typeof r ? Nt(e, r) : ("number" === typeof r || "bigint" === typeof r) && Nt(e, "" + r);
                            break;
                        case "onScroll":
                            null != r && Xu("scroll", e);
                            break;
                        case "onScrollEnd":
                            null != r && Xu("scrollend", e);
                            break;
                        case "onClick":
                            null != r && (e.onclick = Ot);
                            break;
                        case "suppressContentEditableWarning":
                        case "suppressHydrationWarning":
                        case "innerHTML":
                        case "ref":
                        case "innerText":
                        case "textContent":
                            break;
                        default:
                            nt.hasOwnProperty(n) || ("o" !== n[0] || "n" !== n[1] || (a = n.endsWith("Capture"), t = n.slice(2, a ? n.length - 7 : void 0), "function" === typeof(l = null != (l = e[He] || null) ? l[n] : null) && e.removeEventListener(t, l, a), "function" !== typeof r) ? n in e ? e[n] = r : !0 === r ? e.setAttribute(n, "") : it(e, n, r) : ("function" !== typeof l && null !== l && (n in e ? e[n] = null : e.hasAttribute(n) && e.removeAttribute(n)), e.addEventListener(t, r, a)))
                    }
                }

                function pd(e, t, n) {
                    switch (t) {
                        case "div":
                        case "span":
                        case "svg":
                        case "path":
                        case "a":
                        case "g":
                        case "p":
                        case "li":
                            break;
                        case "img":
                            Xu("error", e), Xu("load", e);
                            var r, a = !1,
                                l = !1;
                            for (r in n)
                                if (n.hasOwnProperty(r)) {
                                    var s = n[r];
                                    if (null != s) switch (r) {
                                        case "src":
                                            a = !0;
                                            break;
                                        case "srcSet":
                                            l = !0;
                                            break;
                                        case "children":
                                        case "dangerouslySetInnerHTML":
                                            throw Error(o(137, t));
                                        default:
                                            dd(e, t, r, s, n, null)
                                    }
                                }
                            return l && dd(e, t, "srcSet", n.srcSet, n, null), void(a && dd(e, t, "src", n.src, n, null));
                        case "input":
                            Xu("invalid", e);
                            var i = r = s = l = null,
                                c = null,
                                u = null;
                            for (a in n)
                                if (n.hasOwnProperty(a)) {
                                    var d = n[a];
                                    if (null != d) switch (a) {
                                        case "name":
                                            l = d;
                                            break;
                                        case "type":
                                            s = d;
                                            break;
                                        case "checked":
                                            c = d;
                                            break;
                                        case "defaultChecked":
                                            u = d;
                                            break;
                                        case "value":
                                            r = d;
                                            break;
                                        case "defaultValue":
                                            i = d;
                                            break;
                                        case "children":
                                        case "dangerouslySetInnerHTML":
                                            if (null != d) throw Error(o(137, t));
                                            break;
                                        default:
                                            dd(e, t, a, d, n, null)
                                    }
                                }
                            return void bt(e, r, i, c, u, s, l, !1);
                        case "select":
                            for (l in Xu("invalid", e), a = s = r = null, n)
                                if (n.hasOwnProperty(l) && null != (i = n[l])) switch (l) {
                                    case "value":
                                        r = i;
                                        break;
                                    case "defaultValue":
                                        s = i;
                                        break;
                                    case "multiple":
                                        a = i;
                                    default:
                                        dd(e, t, l, i, n, null)
                                }
                            return t = r, n = s, e.multiple = !!a, void(null != t ? wt(e, !!a, t, !1) : null != n && wt(e, !!a, n, !0));
                        case "textarea":
                            for (s in Xu("invalid", e), r = l = a = null, n)
                                if (n.hasOwnProperty(s) && null != (i = n[s])) switch (s) {
                                    case "value":
                                        a = i;
                                        break;
                                    case "defaultValue":
                                        l = i;
                                        break;
                                    case "children":
                                        r = i;
                                        break;
                                    case "dangerouslySetInnerHTML":
                                        if (null != i) throw Error(o(91));
                                        break;
                                    default:
                                        dd(e, t, s, i, n, null)
                                }
                            return void St(e, a, l, r);
                        case "option":
                            for (c in n)
                                if (n.hasOwnProperty(c) && null != (a = n[c]))
                                    if ("selected" === c) e.selected = a && "function" !== typeof a && "symbol" !== typeof a;
                                    else dd(e, t, c, a, n, null);
                            return;
                        case "dialog":
                            Xu("beforetoggle", e), Xu("toggle", e), Xu("cancel", e), Xu("close", e);
                            break;
                        case "iframe":
                        case "object":
                            Xu("load", e);
                            break;
                        case "video":
                        case "audio":
                            for (a = 0; a < Yu.length; a++) Xu(Yu[a], e);
                            break;
                        case "image":
                            Xu("error", e), Xu("load", e);
                            break;
                        case "details":
                            Xu("toggle", e);
                            break;
                        case "embed":
                        case "source":
                        case "link":
                            Xu("error", e), Xu("load", e);
                        case "area":
                        case "base":
                        case "br":
                        case "col":
                        case "hr":
                        case "keygen":
                        case "meta":
                        case "param":
                        case "track":
                        case "wbr":
                        case "menuitem":
                            for (u in n)
                                if (n.hasOwnProperty(u) && null != (a = n[u])) switch (u) {
                                    case "children":
                                    case "dangerouslySetInnerHTML":
                                        throw Error(o(137, t));
                                    default:
                                        dd(e, t, u, a, n, null)
                                }
                            return;
                        default:
                            if (_t(t)) {
                                for (d in n) n.hasOwnProperty(d) && (void 0 !== (a = n[d]) && fd(e, t, d, a, n, void 0));
                                return
                            }
                    }
                    for (i in n) n.hasOwnProperty(i) && (null != (a = n[i]) && dd(e, t, i, a, n, null))
                }

                function md(e) {
                    switch (e) {
                        case "css":
                        case "script":
                        case "font":
                        case "img":
                        case "image":
                        case "input":
                        case "link":
                            return !0;
                        default:
                            return !1
                    }
                }
                var hd = null,
                    gd = null;

                function yd(e) {
                    return 9 === e.nodeType ? e : e.ownerDocument
                }

                function vd(e) {
                    switch (e) {
                        case "http://www.w3.org/2000/svg":
                            return 1;
                        case "http://www.w3.org/1998/Math/MathML":
                            return 2;
                        default:
                            return 0
                    }
                }

                function bd(e, t) {
                    if (0 === e) switch (t) {
                        case "svg":
                            return 1;
                        case "math":
                            return 2;
                        default:
                            return 0
                    }
                    return 1 === e && "foreignObject" === t ? 0 : e
                }

                function xd(e, t) {
                    return "textarea" === e || "noscript" === e || "string" === typeof t.children || "number" === typeof t.children || "bigint" === typeof t.children || "object" === typeof t.dangerouslySetInnerHTML && null !== t.dangerouslySetInnerHTML && null != t.dangerouslySetInnerHTML.__html
                }
                var wd = null;
                var kd = "function" === typeof setTimeout ? setTimeout : void 0,
                    Sd = "function" === typeof clearTimeout ? clearTimeout : void 0,
                    Nd = "function" === typeof Promise ? Promise : void 0,
                    jd = "function" === typeof queueMicrotask ? queueMicrotask : "undefined" !== typeof Nd ? function(e) {
                        return Nd.resolve(null).then(e).catch(Ed)
                    } : kd;

                function Ed(e) {
                    setTimeout(function() {
                        throw e
                    })
                }

                function Cd(e) {
                    return "head" === e
                }

                function _d(e, t) {
                    var n = t,
                        r = 0;
                    do {
                        var a = n.nextSibling;
                        if (e.removeChild(n), a && 8 === a.nodeType)
                            if ("/$" === (n = a.data) || "/&" === n) {
                                if (0 === r) return e.removeChild(a), void $f(t);
                                r--
                            } else if ("$" === n || "$?" === n || "$~" === n || "$!" === n || "&" === n) r++;
                        else if ("html" === n) Ud(e.ownerDocument.documentElement);
                        else if ("head" === n) {
                            Ud(n = e.ownerDocument.head);
                            for (var l = n.firstChild; l;) {
                                var o = l.nextSibling,
                                    s = l.nodeName;
                                l[Ye] || "SCRIPT" === s || "STYLE" === s || "LINK" === s && "stylesheet" === l.rel.toLowerCase() || n.removeChild(l), l = o
                            }
                        } else "body" === n && Ud(e.ownerDocument.body);
                        n = a
                    } while (n);
                    $f(t)
                }

                function Td(e, t) {
                    var n = e;
                    e = 0;
                    do {
                        var r = n.nextSibling;
                        if (1 === n.nodeType ? t ? (n._stashedDisplay = n.style.display, n.style.display = "none") : (n.style.display = n._stashedDisplay || "", "" === n.getAttribute("style") && n.removeAttribute("style")) : 3 === n.nodeType && (t ? (n._stashedText = n.nodeValue, n.nodeValue = "") : n.nodeValue = n._stashedText || ""), r && 8 === r.nodeType)
                            if ("/$" === (n = r.data)) {
                                if (0 === e) break;
                                e--
                            } else "$" !== n && "$?" !== n && "$~" !== n && "$!" !== n || e++;
                        n = r
                    } while (n)
                }

                function Rd(e) {
                    var t = e.firstChild;
                    for (t && 10 === t.nodeType && (t = t.nextSibling); t;) {
                        var n = t;
                        switch (t = t.nextSibling, n.nodeName) {
                            case "HTML":
                            case "HEAD":
                            case "BODY":
                                Rd(n), Ke(n);
                                continue;
                            case "SCRIPT":
                            case "STYLE":
                                continue;
                            case "LINK":
                                if ("stylesheet" === n.rel.toLowerCase()) continue
                        }
                        e.removeChild(n)
                    }
                }

                function Pd(e, t) {
                    for (; 8 !== e.nodeType;) {
                        if ((1 !== e.nodeType || "INPUT" !== e.nodeName || "hidden" !== e.type) && !t) return null;
                        if (null === (e = zd(e.nextSibling))) return null
                    }
                    return e
                }

                function Od(e) {
                    return "$?" === e.data || "$~" === e.data
                }

                function Ld(e) {
                    return "$!" === e.data || "$?" === e.data && "loading" !== e.ownerDocument.readyState
                }

                function zd(e) {
                    for (; null != e; e = e.nextSibling) {
                        var t = e.nodeType;
                        if (1 === t || 3 === t) break;
                        if (8 === t) {
                            if ("$" === (t = e.data) || "$!" === t || "$?" === t || "$~" === t || "&" === t || "F!" === t || "F" === t) break;
                            if ("/$" === t || "/&" === t) return null
                        }
                    }
                    return e
                }
                var Ad = null;

                function Fd(e) {
                    e = e.nextSibling;
                    for (var t = 0; e;) {
                        if (8 === e.nodeType) {
                            var n = e.data;
                            if ("/$" === n || "/&" === n) {
                                if (0 === t) return zd(e.nextSibling);
                                t--
                            } else "$" !== n && "$!" !== n && "$?" !== n && "$~" !== n && "&" !== n || t++
                        }
                        e = e.nextSibling
                    }
                    return null
                }

                function Md(e) {
                    e = e.previousSibling;
                    for (var t = 0; e;) {
                        if (8 === e.nodeType) {
                            var n = e.data;
                            if ("$" === n || "$!" === n || "$?" === n || "$~" === n || "&" === n) {
                                if (0 === t) return e;
                                t--
                            } else "/$" !== n && "/&" !== n || t++
                        }
                        e = e.previousSibling
                    }
                    return null
                }

                function Dd(e, t, n) {
                    switch (t = yd(n), e) {
                        case "html":
                            if (!(e = t.documentElement)) throw Error(o(452));
                            return e;
                        case "head":
                            if (!(e = t.head)) throw Error(o(453));
                            return e;
                        case "body":
                            if (!(e = t.body)) throw Error(o(454));
                            return e;
                        default:
                            throw Error(o(451))
                    }
                }

                function Ud(e) {
                    for (var t = e.attributes; t.length;) e.removeAttributeNode(t[0]);
                    Ke(e)
                }
                var Id = new Map,
                    Bd = new Set;

                function Hd(e) {
                    return "function" === typeof e.getRootNode ? e.getRootNode() : 9 === e.nodeType ? e : e.ownerDocument
                }
                var Wd = A.d;
                A.d = {
                    f: function() {
                        var e = Wd.f(),
                            t = eu();
                        return e || t
                    },
                    r: function(e) {
                        var t = Xe(e);
                        null !== t && 5 === t.tag && "form" === t.type ? as(t) : Wd.r(e)
                    },
                    D: function(e) {
                        Wd.D(e), Vd("dns-prefetch", e, null)
                    },
                    C: function(e, t) {
                        Wd.C(e, t), Vd("preconnect", e, t)
                    },
                    L: function(e, t, n) {
                        Wd.L(e, t, n);
                        var r = qd;
                        if (r && e && t) {
                            var a = 'link[rel="preload"][as="' + yt(t) + '"]';
                            "image" === t && n && n.imageSrcSet ? (a += '[imagesrcset="' + yt(n.imageSrcSet) + '"]', "string" === typeof n.imageSizes && (a += '[imagesizes="' + yt(n.imageSizes) + '"]')) : a += '[href="' + yt(e) + '"]';
                            var l = a;
                            switch (t) {
                                case "style":
                                    l = Qd(e);
                                    break;
                                case "script":
                                    l = Jd(e)
                            }
                            Id.has(l) || (e = p({
                                rel: "preload",
                                href: "image" === t && n && n.imageSrcSet ? void 0 : e,
                                as: t
                            }, n), Id.set(l, e), null !== r.querySelector(a) || "style" === t && r.querySelector(Yd(l)) || "script" === t && r.querySelector(Xd(l)) || (pd(t = r.createElement("link"), "link", e), et(t), r.head.appendChild(t)))
                        }
                    },
                    m: function(e, t) {
                        Wd.m(e, t);
                        var n = qd;
                        if (n && e) {
                            var r = t && "string" === typeof t.as ? t.as : "script",
                                a = 'link[rel="modulepreload"][as="' + yt(r) + '"][href="' + yt(e) + '"]',
                                l = a;
                            switch (r) {
                                case "audioworklet":
                                case "paintworklet":
                                case "serviceworker":
                                case "sharedworker":
                                case "worker":
                                case "script":
                                    l = Jd(e)
                            }
                            if (!Id.has(l) && (e = p({
                                    rel: "modulepreload",
                                    href: e
                                }, t), Id.set(l, e), null === n.querySelector(a))) {
                                switch (r) {
                                    case "audioworklet":
                                    case "paintworklet":
                                    case "serviceworker":
                                    case "sharedworker":
                                    case "worker":
                                    case "script":
                                        if (n.querySelector(Xd(l))) return
                                }
                                pd(r = n.createElement("link"), "link", e), et(r), n.head.appendChild(r)
                            }
                        }
                    },
                    X: function(e, t) {
                        Wd.X(e, t);
                        var n = qd;
                        if (n && e) {
                            var r = Ze(n).hoistableScripts,
                                a = Jd(e),
                                l = r.get(a);
                            l || ((l = n.querySelector(Xd(a))) || (e = p({
                                src: e,
                                async: !0
                            }, t), (t = Id.get(a)) && tf(e, t), et(l = n.createElement("script")), pd(l, "link", e), n.head.appendChild(l)), l = {
                                type: "script",
                                instance: l,
                                count: 1,
                                state: null
                            }, r.set(a, l))
                        }
                    },
                    S: function(e, t, n) {
                        Wd.S(e, t, n);
                        var r = qd;
                        if (r && e) {
                            var a = Ze(r).hoistableStyles,
                                l = Qd(e);
                            t = t || "default";
                            var o = a.get(l);
                            if (!o) {
                                var s = {
                                    loading: 0,
                                    preload: null
                                };
                                if (o = r.querySelector(Yd(l))) s.loading = 5;
                                else {
                                    e = p({
                                        rel: "stylesheet",
                                        href: e,
                                        "data-precedence": t
                                    }, n), (n = Id.get(l)) && ef(e, n);
                                    var i = o = r.createElement("link");
                                    et(i), pd(i, "link", e), i._p = new Promise(function(e, t) {
                                        i.onload = e, i.onerror = t
                                    }), i.addEventListener("load", function() {
                                        s.loading |= 1
                                    }), i.addEventListener("error", function() {
                                        s.loading |= 2
                                    }), s.loading |= 4, Zd(o, t, r)
                                }
                                o = {
                                    type: "stylesheet",
                                    instance: o,
                                    count: 1,
                                    state: s
                                }, a.set(l, o)
                            }
                        }
                    },
                    M: function(e, t) {
                        Wd.M(e, t);
                        var n = qd;
                        if (n && e) {
                            var r = Ze(n).hoistableScripts,
                                a = Jd(e),
                                l = r.get(a);
                            l || ((l = n.querySelector(Xd(a))) || (e = p({
                                src: e,
                                async: !0,
                                type: "module"
                            }, t), (t = Id.get(a)) && tf(e, t), et(l = n.createElement("script")), pd(l, "link", e), n.head.appendChild(l)), l = {
                                type: "script",
                                instance: l,
                                count: 1,
                                state: null
                            }, r.set(a, l))
                        }
                    }
                };
                var qd = "undefined" === typeof document ? null : document;

                function Vd(e, t, n) {
                    var r = qd;
                    if (r && "string" === typeof t && t) {
                        var a = yt(t);
                        a = 'link[rel="' + e + '"][href="' + a + '"]', "string" === typeof n && (a += '[crossorigin="' + n + '"]'), Bd.has(a) || (Bd.add(a), e = {
                            rel: e,
                            crossOrigin: n,
                            href: t
                        }, null === r.querySelector(a) && (pd(t = r.createElement("link"), "link", e), et(t), r.head.appendChild(t)))
                    }
                }

                function $d(e, t, n, r) {
                    var a, l, s, i, c = (c = $.current) ? Hd(c) : null;
                    if (!c) throw Error(o(446));
                    switch (e) {
                        case "meta":
                        case "title":
                            return null;
                        case "style":
                            return "string" === typeof n.precedence && "string" === typeof n.href ? (t = Qd(n.href), (r = (n = Ze(c).hoistableStyles).get(t)) || (r = {
                                type: "style",
                                instance: null,
                                count: 0,
                                state: null
                            }, n.set(t, r)), r) : {
                                type: "void",
                                instance: null,
                                count: 0,
                                state: null
                            };
                        case "link":
                            if ("stylesheet" === n.rel && "string" === typeof n.href && "string" === typeof n.precedence) {
                                e = Qd(n.href);
                                var u = Ze(c).hoistableStyles,
                                    d = u.get(e);
                                if (d || (c = c.ownerDocument || c, d = {
                                        type: "stylesheet",
                                        instance: null,
                                        count: 0,
                                        state: {
                                            loading: 0,
                                            preload: null
                                        }
                                    }, u.set(e, d), (u = c.querySelector(Yd(e))) && !u._p && (d.instance = u, d.state.loading = 5), Id.has(e) || (n = {
                                        rel: "preload",
                                        as: "style",
                                        href: n.href,
                                        crossOrigin: n.crossOrigin,
                                        integrity: n.integrity,
                                        media: n.media,
                                        hrefLang: n.hrefLang,
                                        referrerPolicy: n.referrerPolicy
                                    }, Id.set(e, n), u || (a = c, l = e, s = n, i = d.state, a.querySelector('link[rel="preload"][as="style"][' + l + "]") ? i.loading = 1 : (l = a.createElement("link"), i.preload = l, l.addEventListener("load", function() {
                                        return i.loading |= 1
                                    }), l.addEventListener("error", function() {
                                        return i.loading |= 2
                                    }), pd(l, "link", s), et(l), a.head.appendChild(l))))), t && null === r) throw Error(o(528, ""));
                                return d
                            }
                            if (t && null !== r) throw Error(o(529, ""));
                            return null;
                        case "script":
                            return t = n.async, "string" === typeof(n = n.src) && t && "function" !== typeof t && "symbol" !== typeof t ? (t = Jd(n), (r = (n = Ze(c).hoistableScripts).get(t)) || (r = {
                                type: "script",
                                instance: null,
                                count: 0,
                                state: null
                            }, n.set(t, r)), r) : {
                                type: "void",
                                instance: null,
                                count: 0,
                                state: null
                            };
                        default:
                            throw Error(o(444, e))
                    }
                }

                function Qd(e) {
                    return 'href="' + yt(e) + '"'
                }

                function Yd(e) {
                    return 'link[rel="stylesheet"][' + e + "]"
                }

                function Kd(e) {
                    return p({}, e, {
                        "data-precedence": e.precedence,
                        precedence: null
                    })
                }

                function Jd(e) {
                    return '[src="' + yt(e) + '"]'
                }

                function Xd(e) {
                    return "script[async]" + e
                }

                function Gd(e, t, n) {
                    if (t.count++, null === t.instance) switch (t.type) {
                        case "style":
                            var r = e.querySelector('style[data-href~="' + yt(n.href) + '"]');
                            if (r) return t.instance = r, et(r), r;
                            var a = p({}, n, {
                                "data-href": n.href,
                                "data-precedence": n.precedence,
                                href: null,
                                precedence: null
                            });
                            return et(r = (e.ownerDocument || e).createElement("style")), pd(r, "style", a), Zd(r, n.precedence, e), t.instance = r;
                        case "stylesheet":
                            a = Qd(n.href);
                            var l = e.querySelector(Yd(a));
                            if (l) return t.state.loading |= 4, t.instance = l, et(l), l;
                            r = Kd(n), (a = Id.get(a)) && ef(r, a), et(l = (e.ownerDocument || e).createElement("link"));
                            var s = l;
                            return s._p = new Promise(function(e, t) {
                                s.onload = e, s.onerror = t
                            }), pd(l, "link", r), t.state.loading |= 4, Zd(l, n.precedence, e), t.instance = l;
                        case "script":
                            return l = Jd(n.src), (a = e.querySelector(Xd(l))) ? (t.instance = a, et(a), a) : (r = n, (a = Id.get(l)) && tf(r = p({}, n), a), et(a = (e = e.ownerDocument || e).createElement("script")), pd(a, "link", r), e.head.appendChild(a), t.instance = a);
                        case "void":
                            return null;
                        default:
                            throw Error(o(443, t.type))
                    } else "stylesheet" === t.type && 0 === (4 & t.state.loading) && (r = t.instance, t.state.loading |= 4, Zd(r, n.precedence, e));
                    return t.instance
                }

                function Zd(e, t, n) {
                    for (var r = n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'), a = r.length ? r[r.length - 1] : null, l = a, o = 0; o < r.length; o++) {
                        var s = r[o];
                        if (s.dataset.precedence === t) l = s;
                        else if (l !== a) break
                    }
                    l ? l.parentNode.insertBefore(e, l.nextSibling) : (t = 9 === n.nodeType ? n.head : n).insertBefore(e, t.firstChild)
                }

                function ef(e, t) {
                    null == e.crossOrigin && (e.crossOrigin = t.crossOrigin), null == e.referrerPolicy && (e.referrerPolicy = t.referrerPolicy), null == e.title && (e.title = t.title)
                }

                function tf(e, t) {
                    null == e.crossOrigin && (e.crossOrigin = t.crossOrigin), null == e.referrerPolicy && (e.referrerPolicy = t.referrerPolicy), null == e.integrity && (e.integrity = t.integrity)
                }
                var nf = null;

                function rf(e, t, n) {
                    if (null === nf) {
                        var r = new Map,
                            a = nf = new Map;
                        a.set(n, r)
                    } else(r = (a = nf).get(n)) || (r = new Map, a.set(n, r));
                    if (r.has(e)) return r;
                    for (r.set(e, null), n = n.getElementsByTagName(e), a = 0; a < n.length; a++) {
                        var l = n[a];
                        if (!(l[Ye] || l[Be] || "link" === e && "stylesheet" === l.getAttribute("rel")) && "http://www.w3.org/2000/svg" !== l.namespaceURI) {
                            var o = l.getAttribute(t) || "";
                            o = e + o;
                            var s = r.get(o);
                            s ? s.push(l) : r.set(o, [l])
                        }
                    }
                    return r
                }

                function af(e, t, n) {
                    (e = e.ownerDocument || e).head.insertBefore(n, "title" === t ? e.querySelector("head > title") : null)
                }

                function lf(e) {
                    return "stylesheet" !== e.type || 0 !== (3 & e.state.loading)
                }
                var of = 0;

                function sf() {
                    if (this.count--, 0 === this.count && (0 === this.imgCount || !this.waitingForImages))
                        if (this.stylesheets) uf(this, this.stylesheets);
                        else if (this.unsuspend) {
                        var e = this.unsuspend;
                        this.unsuspend = null, e()
                    }
                }
                var cf = null;

                function uf(e, t) {
                    e.stylesheets = null, null !== e.unsuspend && (e.count++, cf = new Map, t.forEach(df, e), cf = null, sf.call(e))
                }

                function df(e, t) {
                    if (!(4 & t.state.loading)) {
                        var n = cf.get(e);
                        if (n) var r = n.get(null);
                        else {
                            n = new Map, cf.set(e, n);
                            for (var a = e.querySelectorAll("link[data-precedence],style[data-precedence]"), l = 0; l < a.length; l++) {
                                var o = a[l];
                                "LINK" !== o.nodeName && "not all" === o.getAttribute("media") || (n.set(o.dataset.precedence, o), r = o)
                            }
                            r && n.set(null, r)
                        }
                        o = (a = t.instance).getAttribute("data-precedence"), (l = n.get(o) || r) === r && n.set(null, a), n.set(o, a), this.count++, r = sf.bind(this), a.addEventListener("load", r), a.addEventListener("error", r), l ? l.parentNode.insertBefore(a, l.nextSibling) : (e = 9 === e.nodeType ? e.head : e).insertBefore(a, e.firstChild), t.state.loading |= 4
                    }
                }
                var ff = {
                    $$typeof: w,
                    Provider: null,
                    Consumer: null,
                    _currentValue: F,
                    _currentValue2: F,
                    _threadCount: 0
                };

                function pf(e, t, n, r, a, l, o, s, i) {
                    this.tag = 1, this.containerInfo = e, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Pe(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Pe(0), this.hiddenUpdates = Pe(null), this.identifierPrefix = r, this.onUncaughtError = a, this.onCaughtError = l, this.onRecoverableError = o, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = i, this.incompleteTransitions = new Map
                }

                function mf(e, t, n, r, a, l, o, s, i, c, u, d) {
                    return e = new pf(e, t, n, o, i, c, u, d, s), t = 1, !0 === l && (t |= 24), l = Dr(3, null, null, t), e.current = l, l.stateNode = e, (t = Ia()).refCount++, e.pooledCache = t, t.refCount++, l.memoizedState = {
                        element: r,
                        isDehydrated: n,
                        cache: t
                    }, yl(l), e
                }

                function hf(e) {
                    return e ? e = Fr : Fr
                }

                function gf(e, t, n, r, a, l) {
                    a = hf(a), null === r.context ? r.context = a : r.pendingContext = a, (r = bl(t)).payload = {
                        element: n
                    }, null !== (l = void 0 === l ? null : l) && (r.callback = l), null !== (n = xl(e, r, t)) && (Kc(n, 0, t), wl(n, e, t))
                }

                function yf(e, t) {
                    if (null !== (e = e.memoizedState) && null !== e.dehydrated) {
                        var n = e.retryLane;
                        e.retryLane = 0 !== n && n < t ? n : t
                    }
                }

                function vf(e, t) {
                    yf(e, t), (e = e.alternate) && yf(e, t)
                }

                function bf(e) {
                    if (13 === e.tag || 31 === e.tag) {
                        var t = Lr(e, 67108864);
                        null !== t && Kc(t, 0, 67108864), vf(e, 67108864)
                    }
                }

                function xf(e) {
                    if (13 === e.tag || 31 === e.tag) {
                        var t = Qc(),
                            n = Lr(e, t = Fe(t));
                        null !== n && Kc(n, 0, t), vf(e, t)
                    }
                }
                var wf = !0;

                function kf(e, t, n, r) {
                    var a = z.T;
                    z.T = null;
                    var l = A.p;
                    try {
                        A.p = 2, Nf(e, t, n, r)
                    } finally {
                        A.p = l, z.T = a
                    }
                }

                function Sf(e, t, n, r) {
                    var a = z.T;
                    z.T = null;
                    var l = A.p;
                    try {
                        A.p = 8, Nf(e, t, n, r)
                    } finally {
                        A.p = l, z.T = a
                    }
                }

                function Nf(e, t, n, r) {
                    if (wf) {
                        var a = jf(r);
                        if (null === a) nd(e, t, r, Ef, n), Mf(e, r);
                        else if (function(e, t, n, r, a) {
                                switch (t) {
                                    case "focusin":
                                        return Rf = Df(Rf, e, t, n, r, a), !0;
                                    case "dragenter":
                                        return Pf = Df(Pf, e, t, n, r, a), !0;
                                    case "mouseover":
                                        return Of = Df(Of, e, t, n, r, a), !0;
                                    case "pointerover":
                                        var l = a.pointerId;
                                        return Lf.set(l, Df(Lf.get(l) || null, e, t, n, r, a)), !0;
                                    case "gotpointercapture":
                                        return l = a.pointerId, zf.set(l, Df(zf.get(l) || null, e, t, n, r, a)), !0
                                }
                                return !1
                            }(a, e, t, n, r)) r.stopPropagation();
                        else if (Mf(e, r), 4 & t && -1 < Ff.indexOf(e)) {
                            for (; null !== a;) {
                                var l = Xe(a);
                                if (null !== l) switch (l.tag) {
                                    case 3:
                                        if ((l = l.stateNode).current.memoizedState.isDehydrated) {
                                            var o = Ee(l.pendingLanes);
                                            if (0 !== o) {
                                                var s = l;
                                                for (s.pendingLanes |= 2, s.entangledLanes |= 2; o;) {
                                                    var i = 1 << 31 - xe(o);
                                                    s.entanglements[1] |= i, o &= ~i
                                                }
                                                Fu(l), 0 === (6 & mc) && (Ac = ie() + 500, Mu(0, !1))
                                            }
                                        }
                                        break;
                                    case 31:
                                    case 13:
                                        null !== (s = Lr(l, 2)) && Kc(s, 0, 2), eu(), vf(l, 2)
                                }
                                if (null === (l = jf(r)) && nd(e, t, r, Ef, n), l === a) break;
                                a = l
                            }
                            null !== a && r.stopPropagation()
                        } else nd(e, t, r, null, n)
                    }
                }

                function jf(e) {
                    return Cf(e = zt(e))
                }
                var Ef = null;

                function Cf(e) {
                    if (Ef = null, null !== (e = Je(e))) {
                        var t = i(e);
                        if (null === t) e = null;
                        else {
                            var n = t.tag;
                            if (13 === n) {
                                if (null !== (e = c(t))) return e;
                                e = null
                            } else if (31 === n) {
                                if (null !== (e = u(t))) return e;
                                e = null
                            } else if (3 === n) {
                                if (t.stateNode.current.memoizedState.isDehydrated) return 3 === t.tag ? t.stateNode.containerInfo : null;
                                e = null
                            } else t !== e && (e = null)
                        }
                    }
                    return Ef = e, null
                }

                function _f(e) {
                    switch (e) {
                        case "beforetoggle":
                        case "cancel":
                        case "click":
                        case "close":
                        case "contextmenu":
                        case "copy":
                        case "cut":
                        case "auxclick":
                        case "dblclick":
                        case "dragend":
                        case "dragstart":
                        case "drop":
                        case "focusin":
                        case "focusout":
                        case "input":
                        case "invalid":
                        case "keydown":
                        case "keypress":
                        case "keyup":
                        case "mousedown":
                        case "mouseup":
                        case "paste":
                        case "pause":
                        case "play":
                        case "pointercancel":
                        case "pointerdown":
                        case "pointerup":
                        case "ratechange":
                        case "reset":
                        case "resize":
                        case "seeked":
                        case "submit":
                        case "toggle":
                        case "touchcancel":
                        case "touchend":
                        case "touchstart":
                        case "volumechange":
                        case "change":
                        case "selectionchange":
                        case "textInput":
                        case "compositionstart":
                        case "compositionend":
                        case "compositionupdate":
                        case "beforeblur":
                        case "afterblur":
                        case "beforeinput":
                        case "blur":
                        case "fullscreenchange":
                        case "focus":
                        case "hashchange":
                        case "popstate":
                        case "select":
                        case "selectstart":
                            return 2;
                        case "drag":
                        case "dragenter":
                        case "dragexit":
                        case "dragleave":
                        case "dragover":
                        case "mousemove":
                        case "mouseout":
                        case "mouseover":
                        case "pointermove":
                        case "pointerout":
                        case "pointerover":
                        case "scroll":
                        case "touchmove":
                        case "wheel":
                        case "mouseenter":
                        case "mouseleave":
                        case "pointerenter":
                        case "pointerleave":
                            return 8;
                        case "message":
                            switch (ce()) {
                                case ue:
                                    return 2;
                                case de:
                                    return 8;
                                case fe:
                                case pe:
                                    return 32;
                                case me:
                                    return 268435456;
                                default:
                                    return 32
                            }
                        default:
                            return 32
                    }
                }
                var Tf = !1,
                    Rf = null,
                    Pf = null,
                    Of = null,
                    Lf = new Map,
                    zf = new Map,
                    Af = [],
                    Ff = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");

                function Mf(e, t) {
                    switch (e) {
                        case "focusin":
                        case "focusout":
                            Rf = null;
                            break;
                        case "dragenter":
                        case "dragleave":
                            Pf = null;
                            break;
                        case "mouseover":
                        case "mouseout":
                            Of = null;
                            break;
                        case "pointerover":
                        case "pointerout":
                            Lf.delete(t.pointerId);
                            break;
                        case "gotpointercapture":
                        case "lostpointercapture":
                            zf.delete(t.pointerId)
                    }
                }

                function Df(e, t, n, r, a, l) {
                    return null === e || e.nativeEvent !== l ? (e = {
                        blockedOn: t,
                        domEventName: n,
                        eventSystemFlags: r,
                        nativeEvent: l,
                        targetContainers: [a]
                    }, null !== t && (null !== (t = Xe(t)) && bf(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, null !== a && -1 === t.indexOf(a) && t.push(a), e)
                }

                function Uf(e) {
                    var t = Je(e.target);
                    if (null !== t) {
                        var n = i(t);
                        if (null !== n)
                            if (13 === (t = n.tag)) {
                                if (null !== (t = c(n))) return e.blockedOn = t, void Ue(e.priority, function() {
                                    xf(n)
                                })
                            } else if (31 === t) {
                            if (null !== (t = u(n))) return e.blockedOn = t, void Ue(e.priority, function() {
                                xf(n)
                            })
                        } else if (3 === t && n.stateNode.current.memoizedState.isDehydrated) return void(e.blockedOn = 3 === n.tag ? n.stateNode.containerInfo : null)
                    }
                    e.blockedOn = null
                }

                function If(e) {
                    if (null !== e.blockedOn) return !1;
                    for (var t = e.targetContainers; 0 < t.length;) {
                        var n = jf(e.nativeEvent);
                        if (null !== n) return null !== (t = Xe(n)) && bf(t), e.blockedOn = n, !1;
                        var r = new(n = e.nativeEvent).constructor(n.type, n);
                        Lt = r, n.target.dispatchEvent(r), Lt = null, t.shift()
                    }
                    return !0
                }

                function Bf(e, t, n) {
                    If(e) && n.delete(t)
                }

                function Hf() {
                    Tf = !1, null !== Rf && If(Rf) && (Rf = null), null !== Pf && If(Pf) && (Pf = null), null !== Of && If(Of) && (Of = null), Lf.forEach(Bf), zf.forEach(Bf)
                }

                function Wf(e, t) {
                    e.blockedOn === t && (e.blockedOn = null, Tf || (Tf = !0, r.unstable_scheduleCallback(r.unstable_NormalPriority, Hf)))
                }
                var qf = null;

                function Vf(e) {
                    qf !== e && (qf = e, r.unstable_scheduleCallback(r.unstable_NormalPriority, function() {
                        qf === e && (qf = null);
                        for (var t = 0; t < e.length; t += 3) {
                            var n = e[t],
                                r = e[t + 1],
                                a = e[t + 2];
                            if ("function" !== typeof r) {
                                if (null === Cf(r || n)) continue;
                                break
                            }
                            var l = Xe(n);
                            null !== l && (e.splice(t, 3), t -= 3, ns(l, {
                                pending: !0,
                                data: a,
                                method: n.method,
                                action: r
                            }, r, a))
                        }
                    }))
                }

                function $f(e) {
                    function t(t) {
                        return Wf(t, e)
                    }
                    null !== Rf && Wf(Rf, e), null !== Pf && Wf(Pf, e), null !== Of && Wf(Of, e), Lf.forEach(t), zf.forEach(t);
                    for (var n = 0; n < Af.length; n++) {
                        var r = Af[n];
                        r.blockedOn === e && (r.blockedOn = null)
                    }
                    for (; 0 < Af.length && null === (n = Af[0]).blockedOn;) Uf(n), null === n.blockedOn && Af.shift();
                    if (null != (n = (e.ownerDocument || e).$$reactFormReplay))
                        for (r = 0; r < n.length; r += 3) {
                            var a = n[r],
                                l = n[r + 1],
                                o = a[He] || null;
                            if ("function" === typeof l) o || Vf(n);
                            else if (o) {
                                var s = null;
                                if (l && l.hasAttribute("formAction")) {
                                    if (a = l, o = l[He] || null) s = o.formAction;
                                    else if (null !== Cf(a)) continue
                                } else s = o.action;
                                "function" === typeof s ? n[r + 1] = s : (n.splice(r, 3), r -= 3), Vf(n)
                            }
                        }
                }

                function Qf() {
                    function e(e) {
                        e.canIntercept && "react-transition" === e.info && e.intercept({
                            handler: function() {
                                return new Promise(function(e) {
                                    return a = e
                                })
                            },
                            focusReset: "manual",
                            scroll: "manual"
                        })
                    }

                    function t() {
                        null !== a && (a(), a = null), r || setTimeout(n, 20)
                    }

                    function n() {
                        if (!r && !navigation.transition) {
                            var e = navigation.currentEntry;
                            e && null != e.url && navigation.navigate(e.url, {
                                state: e.getState(),
                                info: "react-transition",
                                history: "replace"
                            })
                        }
                    }
                    if ("object" === typeof navigation) {
                        var r = !1,
                            a = null;
                        return navigation.addEventListener("navigate", e), navigation.addEventListener("navigatesuccess", t), navigation.addEventListener("navigateerror", t), setTimeout(n, 100),
                            function() {
                                r = !0, navigation.removeEventListener("navigate", e), navigation.removeEventListener("navigatesuccess", t), navigation.removeEventListener("navigateerror", t), null !== a && (a(), a = null)
                            }
                    }
                }

                function Yf(e) {
                    this._internalRoot = e
                }

                function Kf(e) {
                    this._internalRoot = e
                }
                Kf.prototype.render = Yf.prototype.render = function(e) {
                    var t = this._internalRoot;
                    if (null === t) throw Error(o(409));
                    gf(t.current, Qc(), e, t, null, null)
                }, Kf.prototype.unmount = Yf.prototype.unmount = function() {
                    var e = this._internalRoot;
                    if (null !== e) {
                        this._internalRoot = null;
                        var t = e.containerInfo;
                        gf(e.current, 2, null, e, null, null), eu(), t[We] = null
                    }
                }, Kf.prototype.unstable_scheduleHydration = function(e) {
                    if (e) {
                        var t = De();
                        e = {
                            blockedOn: null,
                            target: e,
                            priority: t
                        };
                        for (var n = 0; n < Af.length && 0 !== t && t < Af[n].priority; n++);
                        Af.splice(n, 0, e), 0 === n && Uf(e)
                    }
                };
                var Jf = a.version;
                if ("19.2.3" !== Jf) throw Error(o(527, Jf, "19.2.3"));
                A.findDOMNode = function(e) {
                    var t = e._reactInternals;
                    if (void 0 === t) {
                        if ("function" === typeof e.render) throw Error(o(188));
                        throw e = Object.keys(e).join(","), Error(o(268, e))
                    }
                    return e = function(e) {
                        var t = e.alternate;
                        if (!t) {
                            if (null === (t = i(e))) throw Error(o(188));
                            return t !== e ? null : e
                        }
                        for (var n = e, r = t;;) {
                            var a = n.return;
                            if (null === a) break;
                            var l = a.alternate;
                            if (null === l) {
                                if (null !== (r = a.return)) {
                                    n = r;
                                    continue
                                }
                                break
                            }
                            if (a.child === l.child) {
                                for (l = a.child; l;) {
                                    if (l === n) return d(a), e;
                                    if (l === r) return d(a), t;
                                    l = l.sibling
                                }
                                throw Error(o(188))
                            }
                            if (n.return !== r.return) n = a, r = l;
                            else {
                                for (var s = !1, c = a.child; c;) {
                                    if (c === n) {
                                        s = !0, n = a, r = l;
                                        break
                                    }
                                    if (c === r) {
                                        s = !0, r = a, n = l;
                                        break
                                    }
                                    c = c.sibling
                                }
                                if (!s) {
                                    for (c = l.child; c;) {
                                        if (c === n) {
                                            s = !0, n = l, r = a;
                                            break
                                        }
                                        if (c === r) {
                                            s = !0, r = l, n = a;
                                            break
                                        }
                                        c = c.sibling
                                    }
                                    if (!s) throw Error(o(189))
                                }
                            }
                            if (n.alternate !== r) throw Error(o(190))
                        }
                        if (3 !== n.tag) throw Error(o(188));
                        return n.stateNode.current === n ? e : t
                    }(t), e = null === (e = null !== e ? f(e) : null) ? null : e.stateNode
                };
                var Xf = {
                    bundleType: 0,
                    version: "19.2.3",
                    rendererPackageName: "react-dom",
                    currentDispatcherRef: z,
                    reconcilerVersion: "19.2.3"
                };
                if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
                    var Gf = __REACT_DEVTOOLS_GLOBAL_HOOK__;
                    if (!Gf.isDisabled && Gf.supportsFiber) try {
                        ye = Gf.inject(Xf), ve = Gf
                    } catch (ep) {}
                }
                t.createRoot = function(e, t) {
                    if (!s(e)) throw Error(o(299));
                    var n = !1,
                        r = "",
                        a = js,
                        l = Es,
                        i = Cs;
                    return null !== t && void 0 !== t && (!0 === t.unstable_strictMode && (n = !0), void 0 !== t.identifierPrefix && (r = t.identifierPrefix), void 0 !== t.onUncaughtError && (a = t.onUncaughtError), void 0 !== t.onCaughtError && (l = t.onCaughtError), void 0 !== t.onRecoverableError && (i = t.onRecoverableError)), t = mf(e, 1, !1, null, 0, n, r, null, a, l, i, Qf), e[We] = t.current, ed(e), new Yf(t)
                }, t.hydrateRoot = function(e, t, n) {
                    if (!s(e)) throw Error(o(299));
                    var r = !1,
                        a = "",
                        l = js,
                        i = Es,
                        c = Cs,
                        u = null;
                    return null !== n && void 0 !== n && (!0 === n.unstable_strictMode && (r = !0), void 0 !== n.identifierPrefix && (a = n.identifierPrefix), void 0 !== n.onUncaughtError && (l = n.onUncaughtError), void 0 !== n.onCaughtError && (i = n.onCaughtError), void 0 !== n.onRecoverableError && (c = n.onRecoverableError), void 0 !== n.formState && (u = n.formState)), (t = mf(e, 1, !0, t, 0, r, a, u, l, i, c, Qf)).context = hf(null), n = t.current, (a = bl(r = Fe(r = Qc()))).callback = null, xl(n, a, r), n = r, t.current.lanes = n, Oe(t, n), Fu(t), e[We] = t.current, ed(e), new Kf(t)
                }, t.version = "19.2.3"
            },
            43(e, t, n) {
                e.exports = n(288)
            },
            288(e, t) {
                var n = Symbol.for("react.transitional.element"),
                    r = Symbol.for("react.portal"),
                    a = Symbol.for("react.fragment"),
                    l = Symbol.for("react.strict_mode"),
                    o = Symbol.for("react.profiler"),
                    s = Symbol.for("react.consumer"),
                    i = Symbol.for("react.context"),
                    c = Symbol.for("react.forward_ref"),
                    u = Symbol.for("react.suspense"),
                    d = Symbol.for("react.memo"),
                    f = Symbol.for("react.lazy"),
                    p = Symbol.for("react.activity"),
                    m = Symbol.iterator;
                var h = {
                        isMounted: function() {
                            return !1
                        },
                        enqueueForceUpdate: function() {},
                        enqueueReplaceState: function() {},
                        enqueueSetState: function() {}
                    },
                    g = Object.assign,
                    y = {};

                function v(e, t, n) {
                    this.props = e, this.context = t, this.refs = y, this.updater = n || h
                }

                function b() {}

                function x(e, t, n) {
                    this.props = e, this.context = t, this.refs = y, this.updater = n || h
                }
                v.prototype.isReactComponent = {}, v.prototype.setState = function(e, t) {
                    if ("object" !== typeof e && "function" !== typeof e && null != e) throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
                    this.updater.enqueueSetState(this, e, t, "setState")
                }, v.prototype.forceUpdate = function(e) {
                    this.updater.enqueueForceUpdate(this, e, "forceUpdate")
                }, b.prototype = v.prototype;
                var w = x.prototype = new b;
                w.constructor = x, g(w, v.prototype), w.isPureReactComponent = !0;
                var k = Array.isArray;

                function S() {}
                var N = {
                        H: null,
                        A: null,
                        T: null,
                        S: null
                    },
                    j = Object.prototype.hasOwnProperty;

                function E(e, t, r) {
                    var a = r.ref;
                    return {
                        $$typeof: n,
                        type: e,
                        key: t,
                        ref: void 0 !== a ? a : null,
                        props: r
                    }
                }

                function C(e) {
                    return "object" === typeof e && null !== e && e.$$typeof === n
                }
                var _ = /\/+/g;

                function T(e, t) {
                    return "object" === typeof e && null !== e && null != e.key ? function(e) {
                        var t = {
                            "=": "=0",
                            ":": "=2"
                        };
                        return "$" + e.replace(/[=:]/g, function(e) {
                            return t[e]
                        })
                    }("" + e.key) : t.toString(36)
                }

                function R(e, t, a, l, o) {
                    var s = typeof e;
                    "undefined" !== s && "boolean" !== s || (e = null);
                    var i, c, u = !1;
                    if (null === e) u = !0;
                    else switch (s) {
                        case "bigint":
                        case "string":
                        case "number":
                            u = !0;
                            break;
                        case "object":
                            switch (e.$$typeof) {
                                case n:
                                case r:
                                    u = !0;
                                    break;
                                case f:
                                    return R((u = e._init)(e._payload), t, a, l, o)
                            }
                    }
                    if (u) return o = o(e), u = "" === l ? "." + T(e, 0) : l, k(o) ? (a = "", null != u && (a = u.replace(_, "$&/") + "/"), R(o, t, a, "", function(e) {
                        return e
                    })) : null != o && (C(o) && (i = o, c = a + (null == o.key || e && e.key === o.key ? "" : ("" + o.key).replace(_, "$&/") + "/") + u, o = E(i.type, c, i.props)), t.push(o)), 1;
                    u = 0;
                    var d, p = "" === l ? "." : l + ":";
                    if (k(e))
                        for (var h = 0; h < e.length; h++) u += R(l = e[h], t, a, s = p + T(l, h), o);
                    else if ("function" === typeof(h = null === (d = e) || "object" !== typeof d ? null : "function" === typeof(d = m && d[m] || d["@@iterator"]) ? d : null))
                        for (e = h.call(e), h = 0; !(l = e.next()).done;) u += R(l = l.value, t, a, s = p + T(l, h++), o);
                    else if ("object" === s) {
                        if ("function" === typeof e.then) return R(function(e) {
                            switch (e.status) {
                                case "fulfilled":
                                    return e.value;
                                case "rejected":
                                    throw e.reason;
                                default:
                                    switch ("string" === typeof e.status ? e.then(S, S) : (e.status = "pending", e.then(function(t) {
                                        "pending" === e.status && (e.status = "fulfilled", e.value = t)
                                    }, function(t) {
                                        "pending" === e.status && (e.status = "rejected", e.reason = t)
                                    })), e.status) {
                                        case "fulfilled":
                                            return e.value;
                                        case "rejected":
                                            throw e.reason
                                    }
                            }
                            throw e
                        }(e), t, a, l, o);
                        throw t = String(e), Error("Objects are not valid as a React child (found: " + ("[object Object]" === t ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.")
                    }
                    return u
                }

                function P(e, t, n) {
                    if (null == e) return e;
                    var r = [],
                        a = 0;
                    return R(e, r, "", "", function(e) {
                        return t.call(n, e, a++)
                    }), r
                }

                function O(e) {
                    if (-1 === e._status) {
                        var t = e._result;
                        (t = t()).then(function(t) {
                            0 !== e._status && -1 !== e._status || (e._status = 1, e._result = t)
                        }, function(t) {
                            0 !== e._status && -1 !== e._status || (e._status = 2, e._result = t)
                        }), -1 === e._status && (e._status = 0, e._result = t)
                    }
                    if (1 === e._status) return e._result.default;
                    throw e._result
                }
                var L = "function" === typeof reportError ? reportError : function(e) {
                        if ("object" === typeof window && "function" === typeof window.ErrorEvent) {
                            var t = new window.ErrorEvent("error", {
                                bubbles: !0,
                                cancelable: !0,
                                message: "object" === typeof e && null !== e && "string" === typeof e.message ? String(e.message) : String(e),
                                error: e
                            });
                            if (!window.dispatchEvent(t)) return
                        } else if ("object" === typeof process && "function" === typeof process.emit) return void process.emit("uncaughtException", e);
                        console.error(e)
                    },
                    z = {
                        map: P,
                        forEach: function(e, t, n) {
                            P(e, function() {
                                t.apply(this, arguments)
                            }, n)
                        },
                        count: function(e) {
                            var t = 0;
                            return P(e, function() {
                                t++
                            }), t
                        },
                        toArray: function(e) {
                            return P(e, function(e) {
                                return e
                            }) || []
                        },
                        only: function(e) {
                            if (!C(e)) throw Error("React.Children.only expected to receive a single React element child.");
                            return e
                        }
                    };
                t.Activity = p, t.Children = z, t.Component = v, t.Fragment = a, t.Profiler = o, t.PureComponent = x, t.StrictMode = l, t.Suspense = u, t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = N, t.__COMPILER_RUNTIME = {
                    __proto__: null,
                    c: function(e) {
                        return N.H.useMemoCache(e)
                    }
                }, t.cache = function(e) {
                    return function() {
                        return e.apply(null, arguments)
                    }
                }, t.cacheSignal = function() {
                    return null
                }, t.cloneElement = function(e, t, n) {
                    if (null === e || void 0 === e) throw Error("The argument must be a React element, but you passed " + e + ".");
                    var r = g({}, e.props),
                        a = e.key;
                    if (null != t)
                        for (l in void 0 !== t.key && (a = "" + t.key), t) !j.call(t, l) || "key" === l || "__self" === l || "__source" === l || "ref" === l && void 0 === t.ref || (r[l] = t[l]);
                    var l = arguments.length - 2;
                    if (1 === l) r.children = n;
                    else if (1 < l) {
                        for (var o = Array(l), s = 0; s < l; s++) o[s] = arguments[s + 2];
                        r.children = o
                    }
                    return E(e.type, a, r)
                }, t.createContext = function(e) {
                    return (e = {
                        $$typeof: i,
                        _currentValue: e,
                        _currentValue2: e,
                        _threadCount: 0,
                        Provider: null,
                        Consumer: null
                    }).Provider = e, e.Consumer = {
                        $$typeof: s,
                        _context: e
                    }, e
                }, t.createElement = function(e, t, n) {
                    var r, a = {},
                        l = null;
                    if (null != t)
                        for (r in void 0 !== t.key && (l = "" + t.key), t) j.call(t, r) && "key" !== r && "__self" !== r && "__source" !== r && (a[r] = t[r]);
                    var o = arguments.length - 2;
                    if (1 === o) a.children = n;
                    else if (1 < o) {
                        for (var s = Array(o), i = 0; i < o; i++) s[i] = arguments[i + 2];
                        a.children = s
                    }
                    if (e && e.defaultProps)
                        for (r in o = e.defaultProps) void 0 === a[r] && (a[r] = o[r]);
                    return E(e, l, a)
                }, t.createRef = function() {
                    return {
                        current: null
                    }
                }, t.forwardRef = function(e) {
                    return {
                        $$typeof: c,
                        render: e
                    }
                }, t.isValidElement = C, t.lazy = function(e) {
                    return {
                        $$typeof: f,
                        _payload: {
                            _status: -1,
                            _result: e
                        },
                        _init: O
                    }
                }, t.memo = function(e, t) {
                    return {
                        $$typeof: d,
                        type: e,
                        compare: void 0 === t ? null : t
                    }
                }, t.startTransition = function(e) {
                    var t = N.T,
                        n = {};
                    N.T = n;
                    try {
                        var r = e(),
                            a = N.S;
                        null !== a && a(n, r), "object" === typeof r && null !== r && "function" === typeof r.then && r.then(S, L)
                    } catch (l) {
                        L(l)
                    } finally {
                        null !== t && null !== n.types && (t.types = n.types), N.T = t
                    }
                }, t.unstable_useCacheRefresh = function() {
                    return N.H.useCacheRefresh()
                }, t.use = function(e) {
                    return N.H.use(e)
                }, t.useActionState = function(e, t, n) {
                    return N.H.useActionState(e, t, n)
                }, t.useCallback = function(e, t) {
                    return N.H.useCallback(e, t)
                }, t.useContext = function(e) {
                    return N.H.useContext(e)
                }, t.useDebugValue = function() {}, t.useDeferredValue = function(e, t) {
                    return N.H.useDeferredValue(e, t)
                }, t.useEffect = function(e, t) {
                    return N.H.useEffect(e, t)
                }, t.useEffectEvent = function(e) {
                    return N.H.useEffectEvent(e)
                }, t.useId = function() {
                    return N.H.useId()
                }, t.useImperativeHandle = function(e, t, n) {
                    return N.H.useImperativeHandle(e, t, n)
                }, t.useInsertionEffect = function(e, t) {
                    return N.H.useInsertionEffect(e, t)
                }, t.useLayoutEffect = function(e, t) {
                    return N.H.useLayoutEffect(e, t)
                }, t.useMemo = function(e, t) {
                    return N.H.useMemo(e, t)
                }, t.useOptimistic = function(e, t) {
                    return N.H.useOptimistic(e, t)
                }, t.useReducer = function(e, t, n) {
                    return N.H.useReducer(e, t, n)
                }, t.useRef = function(e) {
                    return N.H.useRef(e)
                }, t.useState = function(e) {
                    return N.H.useState(e)
                }, t.useSyncExternalStore = function(e, t, n) {
                    return N.H.useSyncExternalStore(e, t, n)
                }, t.useTransition = function() {
                    return N.H.useTransition()
                }, t.version = "19.2.3"
            },
            391(e, t, n) {
                ! function e() {
                    if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE) try {
                        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)
                    } catch (t) {
                        console.error(t)
                    }
                }(), e.exports = n(4)
            },
            579(e, t, n) {
                e.exports = n(799)
            },
            672(e, t, n) {
                var r = n(43);

                function a(e) {
                    var t = "https://react.dev/errors/" + e;
                    if (1 < arguments.length) {
                        t += "?args[]=" + encodeURIComponent(arguments[1]);
                        for (var n = 2; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n])
                    }
                    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
                }

                function l() {}
                var o = {
                        d: {
                            f: l,
                            r: function() {
                                throw Error(a(522))
                            },
                            D: l,
                            C: l,
                            L: l,
                            m: l,
                            X: l,
                            S: l,
                            M: l
                        },
                        p: 0,
                        findDOMNode: null
                    },
                    s = Symbol.for("react.portal");
                var i = r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;

                function c(e, t) {
                    return "font" === e ? "" : "string" === typeof t ? "use-credentials" === t ? t : "" : void 0
                }
                t.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = o, t.createPortal = function(e, t) {
                    var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
                    if (!t || 1 !== t.nodeType && 9 !== t.nodeType && 11 !== t.nodeType) throw Error(a(299));
                    return function(e, t, n) {
                        var r = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
                        return {
                            $$typeof: s,
                            key: null == r ? null : "" + r,
                            children: e,
                            containerInfo: t,
                            implementation: n
                        }
                    }(e, t, null, n)
                }, t.flushSync = function(e) {
                    var t = i.T,
                        n = o.p;
                    try {
                        if (i.T = null, o.p = 2, e) return e()
                    } finally {
                        i.T = t, o.p = n, o.d.f()
                    }
                }, t.preconnect = function(e, t) {
                    "string" === typeof e && (t ? t = "string" === typeof(t = t.crossOrigin) ? "use-credentials" === t ? t : "" : void 0 : t = null, o.d.C(e, t))
                }, t.prefetchDNS = function(e) {
                    "string" === typeof e && o.d.D(e)
                }, t.preinit = function(e, t) {
                    if ("string" === typeof e && t && "string" === typeof t.as) {
                        var n = t.as,
                            r = c(n, t.crossOrigin),
                            a = "string" === typeof t.integrity ? t.integrity : void 0,
                            l = "string" === typeof t.fetchPriority ? t.fetchPriority : void 0;
                        "style" === n ? o.d.S(e, "string" === typeof t.precedence ? t.precedence : void 0, {
                            crossOrigin: r,
                            integrity: a,
                            fetchPriority: l
                        }) : "script" === n && o.d.X(e, {
                            crossOrigin: r,
                            integrity: a,
                            fetchPriority: l,
                            nonce: "string" === typeof t.nonce ? t.nonce : void 0
                        })
                    }
                }, t.preinitModule = function(e, t) {
                    if ("string" === typeof e)
                        if ("object" === typeof t && null !== t) {
                            if (null == t.as || "script" === t.as) {
                                var n = c(t.as, t.crossOrigin);
                                o.d.M(e, {
                                    crossOrigin: n,
                                    integrity: "string" === typeof t.integrity ? t.integrity : void 0,
                                    nonce: "string" === typeof t.nonce ? t.nonce : void 0
                                })
                            }
                        } else null == t && o.d.M(e)
                }, t.preload = function(e, t) {
                    if ("string" === typeof e && "object" === typeof t && null !== t && "string" === typeof t.as) {
                        var n = t.as,
                            r = c(n, t.crossOrigin);
                        o.d.L(e, n, {
                            crossOrigin: r,
                            integrity: "string" === typeof t.integrity ? t.integrity : void 0,
                            nonce: "string" === typeof t.nonce ? t.nonce : void 0,
                            type: "string" === typeof t.type ? t.type : void 0,
                            fetchPriority: "string" === typeof t.fetchPriority ? t.fetchPriority : void 0,
                            referrerPolicy: "string" === typeof t.referrerPolicy ? t.referrerPolicy : void 0,
                            imageSrcSet: "string" === typeof t.imageSrcSet ? t.imageSrcSet : void 0,
                            imageSizes: "string" === typeof t.imageSizes ? t.imageSizes : void 0,
                            media: "string" === typeof t.media ? t.media : void 0
                        })
                    }
                }, t.preloadModule = function(e, t) {
                    if ("string" === typeof e)
                        if (t) {
                            var n = c(t.as, t.crossOrigin);
                            o.d.m(e, {
                                as: "string" === typeof t.as && "script" !== t.as ? t.as : void 0,
                                crossOrigin: n,
                                integrity: "string" === typeof t.integrity ? t.integrity : void 0
                            })
                        } else o.d.m(e)
                }, t.requestFormReset = function(e) {
                    o.d.r(e)
                }, t.unstable_batchedUpdates = function(e, t) {
                    return e(t)
                }, t.useFormState = function(e, t, n) {
                    return i.H.useFormState(e, t, n)
                }, t.useFormStatus = function() {
                    return i.H.useHostTransitionStatus()
                }, t.version = "19.2.3"
            },
            799(e, t) {
                var n = Symbol.for("react.transitional.element"),
                    r = Symbol.for("react.fragment");

                function a(e, t, r) {
                    var a = null;
                    if (void 0 !== r && (a = "" + r), void 0 !== t.key && (a = "" + t.key), "key" in t)
                        for (var l in r = {}, t) "key" !== l && (r[l] = t[l]);
                    else r = t;
                    return t = r.ref, {
                        $$typeof: n,
                        type: e,
                        key: a,
                        ref: void 0 !== t ? t : null,
                        props: r
                    }
                }
                t.Fragment = r, t.jsx = a, t.jsxs = a
            },
            853(e, t, n) {
                e.exports = n(896)
            },
            896(e, t) {
                function n(e, t) {
                    var n = e.length;
                    e.push(t);
                    e: for (; 0 < n;) {
                        var r = n - 1 >>> 1,
                            a = e[r];
                        if (!(0 < l(a, t))) break e;
                        e[r] = t, e[n] = a, n = r
                    }
                }

                function r(e) {
                    return 0 === e.length ? null : e[0]
                }

                function a(e) {
                    if (0 === e.length) return null;
                    var t = e[0],
                        n = e.pop();
                    if (n !== t) {
                        e[0] = n;
                        e: for (var r = 0, a = e.length, o = a >>> 1; r < o;) {
                            var s = 2 * (r + 1) - 1,
                                i = e[s],
                                c = s + 1,
                                u = e[c];
                            if (0 > l(i, n)) c < a && 0 > l(u, i) ? (e[r] = u, e[c] = n, r = c) : (e[r] = i, e[s] = n, r = s);
                            else {
                                if (!(c < a && 0 > l(u, n))) break e;
                                e[r] = u, e[c] = n, r = c
                            }
                        }
                    }
                    return t
                }

                function l(e, t) {
                    var n = e.sortIndex - t.sortIndex;
                    return 0 !== n ? n : e.id - t.id
                }
                if (t.unstable_now = void 0, "object" === typeof performance && "function" === typeof performance.now) {
                    var o = performance;
                    t.unstable_now = function() {
                        return o.now()
                    }
                } else {
                    var s = Date,
                        i = s.now();
                    t.unstable_now = function() {
                        return s.now() - i
                    }
                }
                var c = [],
                    u = [],
                    d = 1,
                    f = null,
                    p = 3,
                    m = !1,
                    h = !1,
                    g = !1,
                    y = !1,
                    v = "function" === typeof setTimeout ? setTimeout : null,
                    b = "function" === typeof clearTimeout ? clearTimeout : null,
                    x = "undefined" !== typeof setImmediate ? setImmediate : null;

                function w(e) {
                    for (var t = r(u); null !== t;) {
                        if (null === t.callback) a(u);
                        else {
                            if (!(t.startTime <= e)) break;
                            a(u), t.sortIndex = t.expirationTime, n(c, t)
                        }
                        t = r(u)
                    }
                }

                function k(e) {
                    if (g = !1, w(e), !h)
                        if (null !== r(c)) h = !0, N || (N = !0, S());
                        else {
                            var t = r(u);
                            null !== t && O(k, t.startTime - e)
                        }
                }
                var S, N = !1,
                    j = -1,
                    E = 5,
                    C = -1;

                function _() {
                    return !!y || !(t.unstable_now() - C < E)
                }

                function T() {
                    if (y = !1, N) {
                        var e = t.unstable_now();
                        C = e;
                        var n = !0;
                        try {
                            e: {
                                h = !1,
                                g && (g = !1, b(j), j = -1),
                                m = !0;
                                var l = p;
                                try {
                                    t: {
                                        for (w(e), f = r(c); null !== f && !(f.expirationTime > e && _());) {
                                            var o = f.callback;
                                            if ("function" === typeof o) {
                                                f.callback = null, p = f.priorityLevel;
                                                var s = o(f.expirationTime <= e);
                                                if (e = t.unstable_now(), "function" === typeof s) {
                                                    f.callback = s, w(e), n = !0;
                                                    break t
                                                }
                                                f === r(c) && a(c), w(e)
                                            } else a(c);
                                            f = r(c)
                                        }
                                        if (null !== f) n = !0;
                                        else {
                                            var i = r(u);
                                            null !== i && O(k, i.startTime - e), n = !1
                                        }
                                    }
                                    break e
                                }
                                finally {
                                    f = null, p = l, m = !1
                                }
                                n = void 0
                            }
                        }
                        finally {
                            n ? S() : N = !1
                        }
                    }
                }
                if ("function" === typeof x) S = function() {
                    x(T)
                };
                else if ("undefined" !== typeof MessageChannel) {
                    var R = new MessageChannel,
                        P = R.port2;
                    R.port1.onmessage = T, S = function() {
                        P.postMessage(null)
                    }
                } else S = function() {
                    v(T, 0)
                };

                function O(e, n) {
                    j = v(function() {
                        e(t.unstable_now())
                    }, n)
                }
                t.unstable_IdlePriority = 5, t.unstable_ImmediatePriority = 1, t.unstable_LowPriority = 4, t.unstable_NormalPriority = 3, t.unstable_Profiling = null, t.unstable_UserBlockingPriority = 2, t.unstable_cancelCallback = function(e) {
                    e.callback = null
                }, t.unstable_forceFrameRate = function(e) {
                    0 > e || 125 < e ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : E = 0 < e ? Math.floor(1e3 / e) : 5
                }, t.unstable_getCurrentPriorityLevel = function() {
                    return p
                }, t.unstable_next = function(e) {
                    switch (p) {
                        case 1:
                        case 2:
                        case 3:
                            var t = 3;
                            break;
                        default:
                            t = p
                    }
                    var n = p;
                    p = t;
                    try {
                        return e()
                    } finally {
                        p = n
                    }
                }, t.unstable_requestPaint = function() {
                    y = !0
                }, t.unstable_runWithPriority = function(e, t) {
                    switch (e) {
                        case 1:
                        case 2:
                        case 3:
                        case 4:
                        case 5:
                            break;
                        default:
                            e = 3
                    }
                    var n = p;
                    p = e;
                    try {
                        return t()
                    } finally {
                        p = n
                    }
                }, t.unstable_scheduleCallback = function(e, a, l) {
                    var o = t.unstable_now();
                    switch ("object" === typeof l && null !== l ? l = "number" === typeof(l = l.delay) && 0 < l ? o + l : o : l = o, e) {
                        case 1:
                            var s = -1;
                            break;
                        case 2:
                            s = 250;
                            break;
                        case 5:
                            s = 1073741823;
                            break;
                        case 4:
                            s = 1e4;
                            break;
                        default:
                            s = 5e3
                    }
                    return e = {
                        id: d++,
                        callback: a,
                        priorityLevel: e,
                        startTime: l,
                        expirationTime: s = l + s,
                        sortIndex: -1
                    }, l > o ? (e.sortIndex = l, n(u, e), null === r(c) && e === r(u) && (g ? (b(j), j = -1) : g = !0, O(k, l - o))) : (e.sortIndex = s, n(c, e), h || m || (h = !0, N || (N = !0, S()))), e
                }, t.unstable_shouldYield = _, t.unstable_wrapCallback = function(e) {
                    var t = p;
                    return function() {
                        var n = p;
                        p = t;
                        try {
                            return e.apply(this, arguments)
                        } finally {
                            p = n
                        }
                    }
                }
            },
            950(e, t, n) {
                ! function e() {
                    if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE) try {
                        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)
                    } catch (t) {
                        console.error(t)
                    }
                }(), e.exports = n(672)
            }
        },
        t = {};

    function n(r) {
        var a = t[r];
        if (void 0 !== a) return a.exports;
        var l = t[r] = {
            exports: {}
        };
        return e[r](l, l.exports, n), l.exports
    }(() => {
        var e, t = Object.getPrototypeOf ? e => Object.getPrototypeOf(e) : e => e.__proto__;
        n.t = function(r, a) {
            if (1 & a && (r = this(r)), 8 & a) return r;
            if ("object" === typeof r && r) {
                if (4 & a && r.__esModule) return r;
                if (16 & a && "function" === typeof r.then) return r
            }
            var l = Object.create(null);
            n.r(l);
            var o = {};
            e = e || [null, t({}), t([]), t(t)];
            for (var s = 2 & a && r;
                ("object" == typeof s || "function" == typeof s) && !~e.indexOf(s); s = t(s)) Object.getOwnPropertyNames(s).forEach(e => o[e] = () => r[e]);
            return o.default = () => r, n.d(l, o), l
        }
    })(), n.d = (e, t) => {
        for (var r in t) n.o(t, r) && !n.o(e, r) && Object.defineProperty(e, r, {
            enumerable: !0,
            get: t[r]
        })
    }, n.g = function() {
        if ("object" === typeof globalThis) return globalThis;
        try {
            return this || new Function("return this")()
        } catch (e) {
            if ("object" === typeof window) return window
        }
    }(), n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), n.r = e => {
        "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    };
    var r = {};
    n.r(r), n.d(r, {
        hasBrowserEnv: () => Hn,
        hasStandardBrowserEnv: () => qn,
        hasStandardBrowserWebWorkerEnv: () => Vn,
        navigator: () => Wn,
        origin: () => $n
    });
    var a = n(43),
        l = n.t(a, 2),
        o = n(391);

    function s(e, t) {
        if (null == e) return {};
        var n, r, a = function(e, t) {
            if (null == e) return {};
            var n = {};
            for (var r in e)
                if ({}.hasOwnProperty.call(e, r)) {
                    if (-1 !== t.indexOf(r)) continue;
                    n[r] = e[r]
                }
            return n
        }(e, t);
        if (Object.getOwnPropertySymbols) {
            var l = Object.getOwnPropertySymbols(e);
            for (r = 0; r < l.length; r++) n = l[r], -1 === t.indexOf(n) && {}.propertyIsEnumerable.call(e, n) && (a[n] = e[n])
        }
        return a
    }

    function i(e) {
        return i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }, i(e)
    }

    function c(e) {
        var t = function(e, t) {
            if ("object" != i(e) || !e) return e;
            var n = e[Symbol.toPrimitive];
            if (void 0 !== n) {
                var r = n.call(e, t || "default");
                if ("object" != i(r)) return r;
                throw new TypeError("@@toPrimitive must return a primitive value.")
            }
            return ("string" === t ? String : Number)(e)
        }(e, "string");
        return "symbol" == i(t) ? t : t + ""
    }

    function u(e, t, n) {
        return (t = c(t)) in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function d(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t && (r = r.filter(function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            })), n.push.apply(n, r)
        }
        return n
    }

    function f(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2 ? d(Object(n), !0).forEach(function(t) {
                u(e, t, n[t])
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : d(Object(n)).forEach(function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
            })
        }
        return e
    }
    const p = ["sri"],
        m = ["page"],
        h = ["page", "matches"],
        g = ["onClick", "discover", "prefetch", "relative", "reloadDocument", "replace", "state", "target", "to", "preventScrollReset", "viewTransition", "unstable_defaultShouldRevalidate"],
        y = ["aria-current", "caseSensitive", "className", "end", "style", "to", "viewTransition", "children"],
        v = ["discover", "fetcherKey", "navigate", "reloadDocument", "replace", "state", "method", "action", "onSubmit", "relative", "preventScrollReset", "viewTransition", "unstable_defaultShouldRevalidate"];
    var b = "popstate";

    function x() {
        return C(function(e, t) {
            let {
                pathname: n,
                search: r,
                hash: a
            } = e.location;
            return N("", {
                pathname: n,
                search: r,
                hash: a
            }, t.state && t.state.usr || null, t.state && t.state.key || "default")
        }, function(e, t) {
            return "string" === typeof t ? t : j(t)
        }, null, arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {})
    }

    function w(e, t) {
        if (!1 === e || null === e || "undefined" === typeof e) throw new Error(t)
    }

    function k(e, t) {
        if (!e) {
            "undefined" !== typeof console && console.warn(t);
            try {
                throw new Error(t)
            } catch (n) {}
        }
    }

    function S(e, t) {
        return {
            usr: e.state,
            key: e.key,
            idx: t
        }
    }

    function N(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
            r = arguments.length > 3 ? arguments[3] : void 0;
        return f(f({
            pathname: "string" === typeof e ? e : e.pathname,
            search: "",
            hash: ""
        }, "string" === typeof t ? E(t) : t), {}, {
            state: n,
            key: t && t.key || r || Math.random().toString(36).substring(2, 10)
        })
    }

    function j(e) {
        let {
            pathname: t = "/",
            search: n = "",
            hash: r = ""
        } = e;
        return n && "?" !== n && (t += "?" === n.charAt(0) ? n : "?" + n), r && "#" !== r && (t += "#" === r.charAt(0) ? r : "#" + r), t
    }

    function E(e) {
        let t = {};
        if (e) {
            let n = e.indexOf("#");
            n >= 0 && (t.hash = e.substring(n), e = e.substring(0, n));
            let r = e.indexOf("?");
            r >= 0 && (t.search = e.substring(r), e = e.substring(0, r)), e && (t.pathname = e)
        }
        return t
    }

    function C(e, t, n) {
        let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
            {
                window: a = document.defaultView,
                v5Compat: l = !1
            } = r,
            o = a.history,
            s = "POP",
            i = null,
            c = u();

        function u() {
            return (o.state || {
                idx: null
            }).idx
        }

        function d() {
            s = "POP";
            let e = u(),
                t = null == e ? null : e - c;
            c = e, i && i({
                action: s,
                location: m.location,
                delta: t
            })
        }

        function p(e) {
            return _(e)
        }
        null == c && (c = 0, o.replaceState(f(f({}, o.state), {}, {
            idx: c
        }), ""));
        let m = {
            get action() {
                return s
            },
            get location() {
                return e(a, o)
            },
            listen(e) {
                if (i) throw new Error("A history only accepts one active listener");
                return a.addEventListener(b, d), i = e, () => {
                    a.removeEventListener(b, d), i = null
                }
            },
            createHref: e => t(a, e),
            createURL: p,
            encodeLocation(e) {
                let t = p(e);
                return {
                    pathname: t.pathname,
                    search: t.search,
                    hash: t.hash
                }
            },
            push: function(e, t) {
                s = "PUSH";
                let r = N(m.location, e, t);
                n && n(r, e), c = u() + 1;
                let d = S(r, c),
                    f = m.createHref(r);
                try {
                    o.pushState(d, "", f)
                } catch (p) {
                    if (p instanceof DOMException && "DataCloneError" === p.name) throw p;
                    a.location.assign(f)
                }
                l && i && i({
                    action: s,
                    location: m.location,
                    delta: 1
                })
            },
            replace: function(e, t) {
                s = "REPLACE";
                let r = N(m.location, e, t);
                n && n(r, e), c = u();
                let a = S(r, c),
                    d = m.createHref(r);
                o.replaceState(a, "", d), l && i && i({
                    action: s,
                    location: m.location,
                    delta: 0
                })
            },
            go: e => o.go(e)
        };
        return m
    }

    function _(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = "http://localhost";
        "undefined" !== typeof window && (n = "null" !== window.location.origin ? window.location.origin : window.location.href), w(n, "No window.location.(origin|href) available to create URL");
        let r = "string" === typeof e ? e : j(e);
        return r = r.replace(/ $/, "%20"), !t && r.startsWith("//") && (r = n + r), new URL(r, n)
    }
    new WeakMap;

    function T(e, t) {
        return R(e, t, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "/", !1)
    }

    function R(e, t, n, r) {
        let a = V(("string" === typeof t ? E(t) : t).pathname || "/", n);
        if (null == a) return null;
        let l = P(e);
        ! function(e) {
            e.sort((e, t) => e.score !== t.score ? t.score - e.score : function(e, t) {
                let n = e.length === t.length && e.slice(0, -1).every((e, n) => e === t[n]);
                return n ? e[e.length - 1] - t[t.length - 1] : 0
            }(e.routesMeta.map(e => e.childrenIndex), t.routesMeta.map(e => e.childrenIndex)))
        }(l);
        let o = null;
        for (let s = 0; null == o && s < l.length; ++s) {
            let e = q(a);
            o = B(l[s], e, r)
        }
        return o
    }

    function P(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
            r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "",
            a = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
            l = function(e, l) {
                let o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : a,
                    s = arguments.length > 3 ? arguments[3] : void 0,
                    i = {
                        relativePath: void 0 === s ? e.path || "" : s,
                        caseSensitive: !0 === e.caseSensitive,
                        childrenIndex: l,
                        route: e
                    };
                if (i.relativePath.startsWith("/")) {
                    if (!i.relativePath.startsWith(r) && o) return;
                    w(i.relativePath.startsWith(r), 'Absolute route path "'.concat(i.relativePath, '" nested under path "').concat(r, '" is not valid. An absolute child route path must start with the combined path of all its parent routes.')), i.relativePath = i.relativePath.slice(r.length)
                }
                let c = Z([r, i.relativePath]),
                    u = n.concat(i);
                e.children && e.children.length > 0 && (w(!0 !== e.index, 'Index routes must not have child routes. Please remove all child routes from route path "'.concat(c, '".')), P(e.children, t, u, c, o)), (null != e.path || e.index) && t.push({
                    path: c,
                    score: I(c, e.index),
                    routesMeta: u
                })
            };
        return e.forEach((e, t) => {
            var n;
            if ("" !== e.path && null !== (n = e.path) && void 0 !== n && n.includes("?"))
                for (let r of O(e.path)) l(e, t, !0, r);
            else l(e, t)
        }), t
    }

    function O(e) {
        let t = e.split("/");
        if (0 === t.length) return [];
        let [n, ...r] = t, a = n.endsWith("?"), l = n.replace(/\?$/, "");
        if (0 === r.length) return a ? [l, ""] : [l];
        let o = O(r.join("/")),
            s = [];
        return s.push(...o.map(e => "" === e ? l : [l, e].join("/"))), a && s.push(...o), s.map(t => e.startsWith("/") && "" === t ? "/" : t)
    }
    var L = /^:[\w-]+$/,
        z = 3,
        A = 2,
        F = 1,
        M = 10,
        D = -2,
        U = e => "*" === e;

    function I(e, t) {
        let n = e.split("/"),
            r = n.length;
        return n.some(U) && (r += D), t && (r += A), n.filter(e => !U(e)).reduce((e, t) => e + (L.test(t) ? z : "" === t ? F : M), r)
    }

    function B(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            {
                routesMeta: r
            } = e,
            a = {},
            l = "/",
            o = [];
        for (let s = 0; s < r.length; ++s) {
            let e = r[s],
                i = s === r.length - 1,
                c = "/" === l ? t : t.slice(l.length) || "/",
                u = H({
                    path: e.relativePath,
                    caseSensitive: e.caseSensitive,
                    end: i
                }, c),
                d = e.route;
            if (!u && i && n && !r[r.length - 1].route.index && (u = H({
                    path: e.relativePath,
                    caseSensitive: e.caseSensitive,
                    end: !1
                }, c)), !u) return null;
            Object.assign(a, u.params), o.push({
                params: a,
                pathname: Z([l, u.pathname]),
                pathnameBase: ee(Z([l, u.pathnameBase])),
                route: d
            }), "/" !== u.pathnameBase && (l = Z([l, u.pathnameBase]))
        }
        return o
    }

    function H(e, t) {
        "string" === typeof e && (e = {
            path: e,
            caseSensitive: !1,
            end: !0
        });
        let [n, r] = W(e.path, e.caseSensitive, e.end), a = t.match(n);
        if (!a) return null;
        let l = a[0],
            o = l.replace(/(.)\/+$/, "$1"),
            s = a.slice(1);
        return {
            params: r.reduce((e, t, n) => {
                let {
                    paramName: r,
                    isOptional: a
                } = t;
                if ("*" === r) {
                    let e = s[n] || "";
                    o = l.slice(0, l.length - e.length).replace(/(.)\/+$/, "$1")
                }
                const i = s[n];
                return e[r] = a && !i ? void 0 : (i || "").replace(/%2F/g, "/"), e
            }, {}),
            pathname: l,
            pathnameBase: o,
            pattern: e
        }
    }

    function W(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        k("*" === e || !e.endsWith("*") || e.endsWith("/*"), 'Route path "'.concat(e, '" will be treated as if it were "').concat(e.replace(/\*$/, "/*"), '" because the `*` character must always follow a `/` in the pattern. To get rid of this warning, please change the route path to "').concat(e.replace(/\*$/, "/*"), '".'));
        let r = [],
            a = "^" + e.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(/\/:([\w-]+)(\?)?/g, (e, t, n) => (r.push({
                paramName: t,
                isOptional: null != n
            }), n ? "/?([^\\/]+)?" : "/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g, "(/$1)?$2");
        return e.endsWith("*") ? (r.push({
            paramName: "*"
        }), a += "*" === e || "/*" === e ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : n ? a += "\\/*$" : "" !== e && "/" !== e && (a += "(?:(?=\\/|$))"), [new RegExp(a, t ? void 0 : "i"), r]
    }

    function q(e) {
        try {
            return e.split("/").map(e => decodeURIComponent(e).replace(/\//g, "%2F")).join("/")
        } catch (t) {
            return k(!1, 'The URL path "'.concat(e, '" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (').concat(t, ").")), e
        }
    }

    function V(e, t) {
        if ("/" === t) return e;
        if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
        let n = t.endsWith("/") ? t.length - 1 : t.length,
            r = e.charAt(n);
        return r && "/" !== r ? null : e.slice(n) || "/"
    }
    var $ = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
        Q = e => $.test(e);

    function Y(e, t) {
        let n = t.replace(/\/+$/, "").split("/");
        return e.split("/").forEach(e => {
            ".." === e ? n.length > 1 && n.pop() : "." !== e && n.push(e)
        }), n.length > 1 ? n.join("/") : "/"
    }

    function K(e, t, n, r) {
        return "Cannot include a '".concat(e, "' character in a manually specified `to.").concat(t, "` field [").concat(JSON.stringify(r), "].  Please separate it out to the `to.").concat(n, '` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.')
    }

    function J(e) {
        return e.filter((e, t) => 0 === t || e.route.path && e.route.path.length > 0)
    }

    function X(e) {
        let t = J(e);
        return t.map((e, n) => n === t.length - 1 ? e.pathname : e.pathnameBase)
    }

    function G(e, t, n) {
        let r, a = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        "string" === typeof e ? r = E(e) : (r = f({}, e), w(!r.pathname || !r.pathname.includes("?"), K("?", "pathname", "search", r)), w(!r.pathname || !r.pathname.includes("#"), K("#", "pathname", "hash", r)), w(!r.search || !r.search.includes("#"), K("#", "search", "hash", r)));
        let l, o = "" === e || "" === r.pathname,
            s = o ? "/" : r.pathname;
        if (null == s) l = n;
        else {
            let e = t.length - 1;
            if (!a && s.startsWith("..")) {
                let t = s.split("/");
                for (;
                    ".." === t[0];) t.shift(), e -= 1;
                r.pathname = t.join("/")
            }
            l = e >= 0 ? t[e] : "/"
        }
        let i = function(e) {
                let t, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "/",
                    {
                        pathname: r,
                        search: a = "",
                        hash: l = ""
                    } = "string" === typeof e ? E(e) : e;
                if (r)
                    if (Q(r)) t = r;
                    else {
                        if (r.includes("//")) {
                            let e = r;
                            r = r.replace(/\/\/+/g, "/"), k(!1, "Pathnames cannot have embedded double slashes - normalizing ".concat(e, " -> ").concat(r))
                        }
                        t = r.startsWith("/") ? Y(r.substring(1), "/") : Y(r, n)
                    }
                else t = n;
                return {
                    pathname: t,
                    search: te(a),
                    hash: ne(l)
                }
            }(r, l),
            c = s && "/" !== s && s.endsWith("/"),
            u = (o || "." === s) && n.endsWith("/");
        return i.pathname.endsWith("/") || !c && !u || (i.pathname += "/"), i
    }
    var Z = e => e.join("/").replace(/\/\/+/g, "/"),
        ee = e => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
        te = e => e && "?" !== e ? e.startsWith("?") ? e : "?" + e : "",
        ne = e => e && "#" !== e ? e.startsWith("#") ? e : "#" + e : "";
    var re = class {
        constructor(e, t, n) {
            let r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
            this.status = e, this.statusText = t || "", this.internal = r, n instanceof Error ? (this.data = n.toString(), this.error = n) : this.data = n
        }
    };

    function ae(e) {
        return null != e && "number" === typeof e.status && "string" === typeof e.statusText && "boolean" === typeof e.internal && "data" in e
    }

    function le(e) {
        return e.map(e => e.route.path).filter(Boolean).join("/").replace(/\/\/*/g, "/") || "/"
    }
    var oe = "undefined" !== typeof window && "undefined" !== typeof window.document && "undefined" !== typeof window.document.createElement;

    function se(e, t) {
        let n = e;
        if ("string" !== typeof n || !$.test(n)) return {
            absoluteURL: void 0,
            isExternal: !1,
            to: n
        };
        let r = n,
            a = !1;
        if (oe) try {
            let e = new URL(window.location.href),
                r = n.startsWith("//") ? new URL(e.protocol + n) : new URL(n),
                l = V(r.pathname, t);
            r.origin === e.origin && null != l ? n = l + r.search + r.hash : a = !0
        } catch (l) {
            k(!1, '<Link to="'.concat(n, '"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.'))
        }
        return {
            absoluteURL: r,
            isExternal: a,
            to: n
        }
    }
    Symbol("Uninstrumented");
    Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
    var ie = ["POST", "PUT", "PATCH", "DELETE"],
        ce = (new Set(ie), ["GET", ...ie]);
    new Set(ce), Symbol("ResetLoaderData");
    var ue = a.createContext(null);
    ue.displayName = "DataRouter";
    var de = a.createContext(null);
    de.displayName = "DataRouterState";
    var fe = a.createContext(!1);

    function pe() {
        return a.useContext(fe)
    }
    var me = a.createContext({
        isTransitioning: !1
    });
    me.displayName = "ViewTransition";
    var he = a.createContext(new Map);
    he.displayName = "Fetchers";
    var ge = a.createContext(null);
    ge.displayName = "Await";
    var ye = a.createContext(null);
    ye.displayName = "Navigation";
    var ve = a.createContext(null);
    ve.displayName = "Location";
    var be = a.createContext({
        outlet: null,
        matches: [],
        isDataRoute: !1
    });
    be.displayName = "Route";
    var xe = a.createContext(null);
    xe.displayName = "RouteError";
    var we = "REACT_ROUTER_ERROR";

    function ke() {
        return null != a.useContext(ve)
    }

    function Se() {
        return w(ke(), "useLocation() may be used only in the context of a <Router> component."), a.useContext(ve).location
    }
    var Ne = "You should call navigate() in a React.useEffect(), not when your component is first rendered.";

    function je(e) {
        a.useContext(ye).static || a.useLayoutEffect(e)
    }

    function Ee() {
        let {
            isDataRoute: e
        } = a.useContext(be);
        return e ? function() {
            let {
                router: e
            } = Me("useNavigate"), t = Ue("useNavigate"), n = a.useRef(!1);
            je(() => {
                n.current = !0
            });
            let r = a.useCallback(async function(r) {
                let a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                k(n.current, Ne), n.current && ("number" === typeof r ? await e.navigate(r) : await e.navigate(r, f({
                    fromRouteId: t
                }, a)))
            }, [e, t]);
            return r
        }() : function() {
            w(ke(), "useNavigate() may be used only in the context of a <Router> component.");
            let e = a.useContext(ue),
                {
                    basename: t,
                    navigator: n
                } = a.useContext(ye),
                {
                    matches: r
                } = a.useContext(be),
                {
                    pathname: l
                } = Se(),
                o = JSON.stringify(X(r)),
                s = a.useRef(!1);
            je(() => {
                s.current = !0
            });
            let i = a.useCallback(function(r) {
                let a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                if (k(s.current, Ne), !s.current) return;
                if ("number" === typeof r) return void n.go(r);
                let i = G(r, JSON.parse(o), l, "path" === a.relative);
                null == e && "/" !== t && (i.pathname = "/" === i.pathname ? t : Z([t, i.pathname])), (a.replace ? n.replace : n.push)(i, a.state, a)
            }, [t, n, o, l, e]);
            return i
        }()
    }
    a.createContext(null);

    function Ce(e) {
        let {
            relative: t
        } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, {
            matches: n
        } = a.useContext(be), {
            pathname: r
        } = Se(), l = JSON.stringify(X(n));
        return a.useMemo(() => G(e, JSON.parse(l), r, "path" === t), [e, l, r, t])
    }

    function _e(e, t, n, r, l) {
        w(ke(), "useRoutes() may be used only in the context of a <Router> component.");
        let {
            navigator: o
        } = a.useContext(ye), {
            matches: s
        } = a.useContext(be), i = s[s.length - 1], c = i ? i.params : {}, u = i ? i.pathname : "/", d = i ? i.pathnameBase : "/", p = i && i.route; {
            let e = p && p.path || "";
            He(u, !p || e.endsWith("*") || e.endsWith("*?"), 'You rendered descendant <Routes> (or called `useRoutes()`) at "'.concat(u, '" (under <Route path="').concat(e, '">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won\'t match anymore and therefore the child routes will never render.\n\nPlease change the parent <Route path="').concat(e, '"> to <Route path="').concat("/" === e ? "*" : "".concat(e, "/*"), '">.'))
        }
        let m, h = Se();
        if (t) {
            var g;
            let e = "string" === typeof t ? E(t) : t;
            w("/" === d || (null === (g = e.pathname) || void 0 === g ? void 0 : g.startsWith(d)), 'When overriding the location using `<Routes location>` or `useRoutes(routes, location)`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "'.concat(d, '" but pathname "').concat(e.pathname, '" was given in the `location` prop.')), m = e
        } else m = h;
        let y = m.pathname || "/",
            v = y;
        if ("/" !== d) {
            let e = d.replace(/^\//, "").split("/");
            v = "/" + y.replace(/^\//, "").split("/").slice(e.length).join("/")
        }
        let b = T(e, {
            pathname: v
        });
        k(p || null != b, 'No routes matched location "'.concat(m.pathname).concat(m.search).concat(m.hash, '" ')), k(null == b || void 0 !== b[b.length - 1].route.element || void 0 !== b[b.length - 1].route.Component || void 0 !== b[b.length - 1].route.lazy, 'Matched leaf route at location "'.concat(m.pathname).concat(m.search).concat(m.hash, '" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.'));
        let x = Ae(b && b.map(e => Object.assign({}, e, {
            params: Object.assign({}, c, e.params),
            pathname: Z([d, o.encodeLocation ? o.encodeLocation(e.pathname.replace(/\?/g, "%3F").replace(/#/g, "%23")).pathname : e.pathname]),
            pathnameBase: "/" === e.pathnameBase ? d : Z([d, o.encodeLocation ? o.encodeLocation(e.pathnameBase.replace(/\?/g, "%3F").replace(/#/g, "%23")).pathname : e.pathnameBase])
        })), s, n, r, l);
        return t && x ? a.createElement(ve.Provider, {
            value: {
                location: f({
                    pathname: "/",
                    search: "",
                    hash: "",
                    state: null,
                    key: "default"
                }, m),
                navigationType: "POP"
            }
        }, x) : x
    }

    function Te() {
        let e = Ie(),
            t = ae(e) ? "".concat(e.status, " ").concat(e.statusText) : e instanceof Error ? e.message : JSON.stringify(e),
            n = e instanceof Error ? e.stack : null,
            r = "rgba(200,200,200, 0.5)",
            l = {
                padding: "0.5rem",
                backgroundColor: r
            },
            o = {
                padding: "2px 4px",
                backgroundColor: r
            },
            s = null;
        return console.error("Error handled by React Router default ErrorBoundary:", e), s = a.createElement(a.Fragment, null, a.createElement("p", null, "\ud83d\udcbf Hey developer \ud83d\udc4b"), a.createElement("p", null, "You can provide a way better UX than this when your app throws errors by providing your own ", a.createElement("code", {
            style: o
        }, "ErrorBoundary"), " or", " ", a.createElement("code", {
            style: o
        }, "errorElement"), " prop on your route.")), a.createElement(a.Fragment, null, a.createElement("h2", null, "Unexpected Application Error!"), a.createElement("h3", {
            style: {
                fontStyle: "italic"
            }
        }, t), n ? a.createElement("pre", {
            style: l
        }, n) : null, s)
    }
    var Re = a.createElement(Te, null),
        Pe = class extends a.Component {
            constructor(e) {
                super(e), this.state = {
                    location: e.location,
                    revalidation: e.revalidation,
                    error: e.error
                }
            }
            static getDerivedStateFromError(e) {
                return {
                    error: e
                }
            }
            static getDerivedStateFromProps(e, t) {
                return t.location !== e.location || "idle" !== t.revalidation && "idle" === e.revalidation ? {
                    error: e.error,
                    location: e.location,
                    revalidation: e.revalidation
                } : {
                    error: void 0 !== e.error ? e.error : t.error,
                    location: t.location,
                    revalidation: e.revalidation || t.revalidation
                }
            }
            componentDidCatch(e, t) {
                this.props.onError ? this.props.onError(e, t) : console.error("React Router caught the following error during render", e)
            }
            render() {
                let e = this.state.error;
                if (this.context && "object" === typeof e && e && "digest" in e && "string" === typeof e.digest) {
                    const t = function(e) {
                        if (e.startsWith("".concat(we, ":").concat("ROUTE_ERROR_RESPONSE", ":{"))) try {
                            let t = JSON.parse(e.slice(40));
                            if ("object" === typeof t && t && "number" === typeof t.status && "string" === typeof t.statusText) return new re(t.status, t.statusText, t.data)
                        } catch (t) {}
                    }(e.digest);
                    t && (e = t)
                }
                let t = void 0 !== e ? a.createElement(be.Provider, {
                    value: this.props.routeContext
                }, a.createElement(xe.Provider, {
                    value: e,
                    children: this.props.component
                })) : this.props.children;
                return this.context ? a.createElement(Le, {
                    error: e
                }, t) : t
            }
        };
    Pe.contextType = fe;
    var Oe = new WeakMap;

    function Le(e) {
        let {
            children: t,
            error: n
        } = e, {
            basename: r
        } = a.useContext(ye);
        if ("object" === typeof n && n && "digest" in n && "string" === typeof n.digest) {
            let e = function(e) {
                if (e.startsWith("".concat(we, ":").concat("REDIRECT", ":{"))) try {
                    let t = JSON.parse(e.slice(28));
                    if ("object" === typeof t && t && "number" === typeof t.status && "string" === typeof t.statusText && "string" === typeof t.location && "boolean" === typeof t.reloadDocument && "boolean" === typeof t.replace) return t
                } catch (t) {}
            }(n.digest);
            if (e) {
                let t = Oe.get(n);
                if (t) throw t;
                let l = se(e.location, r);
                if (oe && !Oe.get(n)) {
                    if (!l.isExternal && !e.reloadDocument) {
                        const t = Promise.resolve().then(() => window.__reactRouterDataRouter.navigate(l.to, {
                            replace: e.replace
                        }));
                        throw Oe.set(n, t), t
                    }
                    window.location.href = l.absoluteURL || l.to
                }
                return a.createElement("meta", {
                    httpEquiv: "refresh",
                    content: "0;url=".concat(l.absoluteURL || l.to)
                })
            }
        }
        return t
    }

    function ze(e) {
        let {
            routeContext: t,
            match: n,
            children: r
        } = e, l = a.useContext(ue);
        return l && l.static && l.staticContext && (n.route.errorElement || n.route.ErrorBoundary) && (l.staticContext._deepestRenderedBoundaryId = n.route.id), a.createElement(be.Provider, {
            value: t
        }, r)
    }

    function Ae(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
            r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        if (null == e) {
            if (!n) return null;
            if (n.errors) e = n.matches;
            else {
                if (0 !== t.length || n.initialized || !(n.matches.length > 0)) return null;
                e = n.matches
            }
        }
        let l = e,
            o = null === n || void 0 === n ? void 0 : n.errors;
        if (null != o) {
            let e = l.findIndex(e => e.route.id && void 0 !== (null === o || void 0 === o ? void 0 : o[e.route.id]));
            w(e >= 0, "Could not find a matching route for errors on route IDs: ".concat(Object.keys(o).join(","))), l = l.slice(0, Math.min(l.length, e + 1))
        }
        let s = !1,
            i = -1;
        if (n)
            for (let a = 0; a < l.length; a++) {
                let e = l[a];
                if ((e.route.HydrateFallback || e.route.hydrateFallbackElement) && (i = a), e.route.id) {
                    let {
                        loaderData: t,
                        errors: r
                    } = n, a = e.route.loader && !t.hasOwnProperty(e.route.id) && (!r || void 0 === r[e.route.id]);
                    if (e.route.lazy || a) {
                        s = !0, l = i >= 0 ? l.slice(0, i + 1) : [l[0]];
                        break
                    }
                }
            }
        let c = n && r ? (e, t) => {
            var a, l;
            r(e, {
                location: n.location,
                params: null !== (a = null === (l = n.matches) || void 0 === l || null === (l = l[0]) || void 0 === l ? void 0 : l.params) && void 0 !== a ? a : {},
                unstable_pattern: le(n.matches),
                errorInfo: t
            })
        } : void 0;
        return l.reduceRight((e, r, u) => {
            let d, f = !1,
                p = null,
                m = null;
            n && (d = o && r.route.id ? o[r.route.id] : void 0, p = r.route.errorElement || Re, s && (i < 0 && 0 === u ? (He("route-fallback", !1, "No `HydrateFallback` element provided to render during initial hydration"), f = !0, m = null) : i === u && (f = !0, m = r.route.hydrateFallbackElement || null)));
            let h = t.concat(l.slice(0, u + 1)),
                g = () => {
                    let t;
                    return t = d ? p : f ? m : r.route.Component ? a.createElement(r.route.Component, null) : r.route.element ? r.route.element : e, a.createElement(ze, {
                        match: r,
                        routeContext: {
                            outlet: e,
                            matches: h,
                            isDataRoute: null != n
                        },
                        children: t
                    })
                };
            return n && (r.route.ErrorBoundary || r.route.errorElement || 0 === u) ? a.createElement(Pe, {
                location: n.location,
                revalidation: n.revalidation,
                component: p,
                error: d,
                children: g(),
                routeContext: {
                    outlet: null,
                    matches: h,
                    isDataRoute: !0
                },
                onError: c
            }) : g()
        }, null)
    }

    function Fe(e) {
        return "".concat(e, " must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.")
    }

    function Me(e) {
        let t = a.useContext(ue);
        return w(t, Fe(e)), t
    }

    function De(e) {
        let t = a.useContext(de);
        return w(t, Fe(e)), t
    }

    function Ue(e) {
        let t = function(e) {
                let t = a.useContext(be);
                return w(t, Fe(e)), t
            }(e),
            n = t.matches[t.matches.length - 1];
        return w(n.route.id, "".concat(e, ' can only be used on routes that contain a unique "id"')), n.route.id
    }

    function Ie() {
        var e;
        let t = a.useContext(xe),
            n = De("useRouteError"),
            r = Ue("useRouteError");
        return void 0 !== t ? t : null === (e = n.errors) || void 0 === e ? void 0 : e[r]
    }
    var Be = {};

    function He(e, t, n) {
        t || Be[e] || (Be[e] = !0, k(!1, n))
    }
    var We = {};

    function qe(e, t) {
        e || We[t] || (We[t] = !0, console.warn(t))
    }
    l.useOptimistic;
    a.memo(function(e) {
        let {
            routes: t,
            future: n,
            state: r,
            onError: a
        } = e;
        return _e(t, void 0, r, a, n)
    });

    function Ve(e) {
        let {
            to: t,
            replace: n,
            state: r,
            relative: l
        } = e;
        w(ke(), "<Navigate> may be used only in the context of a <Router> component.");
        let {
            static: o
        } = a.useContext(ye);
        k(!o, "<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");
        let {
            matches: s
        } = a.useContext(be), {
            pathname: i
        } = Se(), c = Ee(), u = G(t, X(s), i, "path" === l), d = JSON.stringify(u);
        return a.useEffect(() => {
            c(JSON.parse(d), {
                replace: n,
                state: r,
                relative: l
            })
        }, [c, d, l, n, r]), null
    }

    function $e(e) {
        w(!1, "A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")
    }

    function Qe(e) {
        let {
            basename: t = "/",
            children: n = null,
            location: r,
            navigationType: l = "POP",
            navigator: o,
            static: s = !1,
            unstable_useTransitions: i
        } = e;
        w(!ke(), "You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");
        let c = t.replace(/^\/*/, "/"),
            u = a.useMemo(() => ({
                basename: c,
                navigator: o,
                static: s,
                unstable_useTransitions: i,
                future: {}
            }), [c, o, s, i]);
        "string" === typeof r && (r = E(r));
        let {
            pathname: d = "/",
            search: f = "",
            hash: p = "",
            state: m = null,
            key: h = "default"
        } = r, g = a.useMemo(() => {
            let e = V(d, c);
            return null == e ? null : {
                location: {
                    pathname: e,
                    search: f,
                    hash: p,
                    state: m,
                    key: h
                },
                navigationType: l
            }
        }, [c, d, f, p, m, h, l]);
        return k(null != g, '<Router basename="'.concat(c, '"> is not able to match the URL "').concat(d).concat(f).concat(p, "\" because it does not start with the basename, so the <Router> won't render anything.")), null == g ? null : a.createElement(ye.Provider, {
            value: u
        }, a.createElement(ve.Provider, {
            children: n,
            value: g
        }))
    }

    function Ye(e) {
        let {
            children: t,
            location: n
        } = e;
        return _e(Ke(t), n)
    }
    a.Component;

    function Ke(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
            n = [];
        return a.Children.forEach(e, (e, r) => {
            if (!a.isValidElement(e)) return;
            let l = [...t, r];
            if (e.type === a.Fragment) return void n.push.apply(n, Ke(e.props.children, l));
            w(e.type === $e, "[".concat("string" === typeof e.type ? e.type : e.type.name, "] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>")), w(!e.props.index || !e.props.children, "An index route cannot have child routes.");
            let o = {
                id: e.props.id || l.join("-"),
                caseSensitive: e.props.caseSensitive,
                element: e.props.element,
                Component: e.props.Component,
                index: e.props.index,
                path: e.props.path,
                middleware: e.props.middleware,
                loader: e.props.loader,
                action: e.props.action,
                hydrateFallbackElement: e.props.hydrateFallbackElement,
                HydrateFallback: e.props.HydrateFallback,
                errorElement: e.props.errorElement,
                ErrorBoundary: e.props.ErrorBoundary,
                hasErrorBoundary: !0 === e.props.hasErrorBoundary || null != e.props.ErrorBoundary || null != e.props.errorElement,
                shouldRevalidate: e.props.shouldRevalidate,
                handle: e.props.handle,
                lazy: e.props.lazy
            };
            e.props.children && (o.children = Ke(e.props.children, l)), n.push(o)
        }), n
    }
    var Je = "get",
        Xe = "application/x-www-form-urlencoded";

    function Ge(e) {
        return "undefined" !== typeof HTMLElement && e instanceof HTMLElement
    }
    var Ze = null;
    var et = new Set(["application/x-www-form-urlencoded", "multipart/form-data", "text/plain"]);

    function tt(e) {
        return null == e || et.has(e) ? e : (k(!1, '"'.concat(e, '" is not a valid `encType` for `<Form>`/`<fetcher.Form>` and will default to "').concat(Xe, '"')), null)
    }

    function nt(e, t) {
        let n, r, a, l, o;
        if (Ge(s = e) && "form" === s.tagName.toLowerCase()) {
            let o = e.getAttribute("action");
            r = o ? V(o, t) : null, n = e.getAttribute("method") || Je, a = tt(e.getAttribute("enctype")) || Xe, l = new FormData(e)
        } else if (function(e) {
                return Ge(e) && "button" === e.tagName.toLowerCase()
            }(e) || function(e) {
                return Ge(e) && "input" === e.tagName.toLowerCase()
            }(e) && ("submit" === e.type || "image" === e.type)) {
            let o = e.form;
            if (null == o) throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');
            let s = e.getAttribute("formaction") || o.getAttribute("action");
            if (r = s ? V(s, t) : null, n = e.getAttribute("formmethod") || o.getAttribute("method") || Je, a = tt(e.getAttribute("formenctype")) || tt(o.getAttribute("enctype")) || Xe, l = new FormData(o, e), ! function() {
                    if (null === Ze) try {
                        new FormData(document.createElement("form"), 0), Ze = !1
                    } catch (e) {
                        Ze = !0
                    }
                    return Ze
                }()) {
                let {
                    name: t,
                    type: n,
                    value: r
                } = e;
                if ("image" === n) {
                    let e = t ? "".concat(t, ".") : "";
                    l.append("".concat(e, "x"), "0"), l.append("".concat(e, "y"), "0")
                } else t && l.append(t, r)
            }
        } else {
            if (Ge(e)) throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');
            n = Je, r = null, a = Xe, o = e
        }
        var s;
        return l && "text/plain" === a && (o = l, l = void 0), {
            action: r,
            method: n.toLowerCase(),
            encType: a,
            formData: l,
            body: o
        }
    }
    Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
    "undefined" !== typeof window ? window : "undefined" !== typeof globalThis && globalThis;

    function rt(e, t) {
        if (!1 === e || null === e || "undefined" === typeof e) throw new Error(t)
    }
    Symbol("SingleFetchRedirect");

    function at(e, t, n) {
        let r = "string" === typeof e ? new URL(e, "undefined" === typeof window ? "server://singlefetch/" : window.location.origin) : e;
        return "/" === r.pathname ? r.pathname = "_root.".concat(n) : t && "/" === V(r.pathname, t) ? r.pathname = "".concat(t.replace(/\/$/, ""), "/_root.").concat(n) : r.pathname = "".concat(r.pathname.replace(/\/$/, ""), ".").concat(n), r
    }
    async function lt(e, t) {
        if (e.id in t) return t[e.id];
        try {
            let n = await
            import (e.module);
            return t[e.id] = n, n
        } catch (n) {
            return console.error("Error loading route module `".concat(e.module, "`, reloading page...")), console.error(n), window.__reactRouterContext && window.__reactRouterContext.isSpaMode, window.location.reload(), new Promise(() => {})
        }
    }

    function ot(e) {
        return null != e && "string" === typeof e.page
    }

    function st(e) {
        return null != e && (null == e.href ? "preload" === e.rel && "string" === typeof e.imageSrcSet && "string" === typeof e.imageSizes : "string" === typeof e.rel && "string" === typeof e.href)
    }

    function it(e, t, n, r, a, l) {
        let o = (e, t) => !n[t] || e.route.id !== n[t].route.id,
            s = (e, t) => {
                var r;
                return n[t].pathname !== e.pathname || (null === (r = n[t].route.path) || void 0 === r ? void 0 : r.endsWith("*")) && n[t].params["*"] !== e.params["*"]
            };
        return "assets" === l ? t.filter((e, t) => o(e, t) || s(e, t)) : "data" === l ? t.filter((t, l) => {
            let i = r.routes[t.route.id];
            if (!i || !i.hasLoader) return !1;
            if (o(t, l) || s(t, l)) return !0;
            if (t.route.shouldRevalidate) {
                var c;
                let r = t.route.shouldRevalidate({
                    currentUrl: new URL(a.pathname + a.search + a.hash, window.origin),
                    currentParams: (null === (c = n[0]) || void 0 === c ? void 0 : c.params) || {},
                    nextUrl: new URL(e, window.origin),
                    nextParams: t.params,
                    defaultShouldRevalidate: !0
                });
                if ("boolean" === typeof r) return r
            }
            return !0
        }) : []
    }

    function ct(e, t) {
        let {
            includeHydrateFallback: n
        } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        return r = e.map(e => {
            let r = t.routes[e.route.id];
            if (!r) return [];
            let a = [r.module];
            return r.clientActionModule && (a = a.concat(r.clientActionModule)), r.clientLoaderModule && (a = a.concat(r.clientLoaderModule)), n && r.hydrateFallbackModule && (a = a.concat(r.hydrateFallbackModule)), r.imports && (a = a.concat(r.imports)), a
        }).flat(1), [...new Set(r)];
        var r
    }

    function ut(e, t) {
        let n = new Set,
            r = new Set(t);
        return e.reduce((e, a) => {
            if (t && !ot(a) && "script" === a.as && a.href && r.has(a.href)) return e;
            let l = JSON.stringify(function(e) {
                let t = {},
                    n = Object.keys(e).sort();
                for (let r of n) t[r] = e[r];
                return t
            }(a));
            return n.has(l) || (n.add(l), e.push({
                key: l,
                link: a
            })), e
        }, [])
    }

    function dt(e, t) {
        return "lazy" === e.mode && !0 === t
    }

    function ft() {
        let e = a.useContext(ue);
        return rt(e, "You must render this element inside a <DataRouterContext.Provider> element"), e
    }

    function pt() {
        let e = a.useContext(de);
        return rt(e, "You must render this element inside a <DataRouterStateContext.Provider> element"), e
    }
    var mt = a.createContext(void 0);

    function ht() {
        let e = a.useContext(mt);
        return rt(e, "You must render this element inside a <HydratedRouter> element"), e
    }

    function gt(e, t) {
        return n => {
            e && e(n), n.defaultPrevented || t(n)
        }
    }

    function yt(e, t, n) {
        if (n && !wt) return [e[0]];
        if (t) {
            let n = e.findIndex(e => void 0 !== t[e.route.id]);
            return e.slice(0, n + 1)
        }
        return e
    }
    mt.displayName = "FrameworkContext";

    function vt(e) {
        let {
            page: t
        } = e, n = s(e, m), {
            router: r
        } = ft(), l = a.useMemo(() => T(r.routes, t, r.basename), [r.routes, t, r.basename]);
        return l ? a.createElement(xt, f({
            page: t,
            matches: l
        }, n)) : null
    }

    function bt(e) {
        let {
            manifest: t,
            routeModules: n
        } = ht(), [r, l] = a.useState([]);
        return a.useEffect(() => {
            let r = !1;
            return async function(e, t, n) {
                return ut((await Promise.all(e.map(async e => {
                    let r = t.routes[e.route.id];
                    if (r) {
                        let e = await lt(r, n);
                        return e.links ? e.links() : []
                    }
                    return []
                }))).flat(1).filter(st).filter(e => "stylesheet" === e.rel || "preload" === e.rel).map(e => "stylesheet" === e.rel ? f(f({}, e), {}, {
                    rel: "prefetch",
                    as: "style"
                }) : f(f({}, e), {}, {
                    rel: "prefetch"
                })))
            }(e, t, n).then(e => {
                r || l(e)
            }), () => {
                r = !0
            }
        }, [e, t, n]), r
    }

    function xt(e) {
        let {
            page: t,
            matches: n
        } = e, r = s(e, h), l = Se(), {
            manifest: o,
            routeModules: i
        } = ht(), {
            basename: c
        } = ft(), {
            loaderData: u,
            matches: d
        } = pt(), p = a.useMemo(() => it(t, n, d, o, l, "data"), [t, n, d, o, l]), m = a.useMemo(() => it(t, n, d, o, l, "assets"), [t, n, d, o, l]), g = a.useMemo(() => {
            if (t === l.pathname + l.search + l.hash) return [];
            let e = new Set,
                r = !1;
            if (n.forEach(t => {
                    var n;
                    let a = o.routes[t.route.id];
                    a && a.hasLoader && (!p.some(e => e.route.id === t.route.id) && t.route.id in u && null !== (n = i[t.route.id]) && void 0 !== n && n.shouldRevalidate || a.hasClientLoader ? r = !0 : e.add(t.route.id))
                }), 0 === e.size) return [];
            let a = at(t, c, "data");
            return r && e.size > 0 && a.searchParams.set("_routes", n.filter(t => e.has(t.route.id)).map(e => e.route.id).join(",")), [a.pathname + a.search]
        }, [c, u, l, o, p, n, t, i]), y = a.useMemo(() => ct(m, o), [m, o]), v = bt(m);
        return a.createElement(a.Fragment, null, g.map(e => a.createElement("link", f({
            key: e,
            rel: "prefetch",
            as: "fetch",
            href: e
        }, r))), y.map(e => a.createElement("link", f({
            key: e,
            rel: "modulepreload",
            href: e
        }, r))), v.map(e => {
            let {
                key: t,
                link: n
            } = e;
            return a.createElement("link", f({
                key: t,
                nonce: r.nonce
            }, n))
        }))
    }
    var wt = !1;

    function kt(e) {
        let {
            manifest: t,
            serverHandoffString: n,
            isSpaMode: r,
            renderMeta: l,
            routeDiscovery: o,
            ssr: i
        } = ht(), {
            router: c,
            static: u,
            staticContext: d
        } = ft(), {
            matches: m
        } = pt(), h = pe(), g = dt(o, i);
        l && (l.didRenderScripts = !0);
        let y = yt(m, null, r);
        a.useEffect(() => {
            wt = !0
        }, []);
        let v = a.useMemo(() => {
                var r;
                if (h) return null;
                let l = d ? "window.__reactRouterContext = ".concat(n, ";").concat("window.__reactRouterContext.stream = new ReadableStream({start(controller){window.__reactRouterContext.streamController = controller;}}).pipeThrough(new TextEncoderStream());") : " ",
                    o = u ? "".concat(null !== (r = t.hmr) && void 0 !== r && r.runtime ? "import ".concat(JSON.stringify(t.hmr.runtime), ";") : "").concat(g ? "" : "import ".concat(JSON.stringify(t.url)), ";\n").concat(y.map((e, n) => {
                        let r = "route".concat(n),
                            a = t.routes[e.route.id];
                        rt(a, "Route ".concat(e.route.id, " not found in manifest"));
                        let {
                            clientActionModule: l,
                            clientLoaderModule: o,
                            clientMiddlewareModule: s,
                            hydrateFallbackModule: i,
                            module: c
                        } = a, u = [...l ? [{
                            module: l,
                            varName: "".concat(r, "_clientAction")
                        }] : [], ...o ? [{
                            module: o,
                            varName: "".concat(r, "_clientLoader")
                        }] : [], ...s ? [{
                            module: s,
                            varName: "".concat(r, "_clientMiddleware")
                        }] : [], ...i ? [{
                            module: i,
                            varName: "".concat(r, "_HydrateFallback")
                        }] : [], {
                            module: c,
                            varName: "".concat(r, "_main")
                        }];
                        return 1 === u.length ? "import * as ".concat(r, " from ").concat(JSON.stringify(c), ";") : [u.map(e => "import * as ".concat(e.varName, ' from "').concat(e.module, '";')).join("\n"), "const ".concat(r, " = {").concat(u.map(e => "...".concat(e.varName)).join(","), "};")].join("\n")
                    }).join("\n"), "\n  ").concat(g ? "window.__reactRouterManifest = ".concat(JSON.stringify(function(e, t) {
                        let {
                            sri: n
                        } = e, r = s(e, p), a = new Set(t.state.matches.map(e => e.route.id)), l = t.state.location.pathname.split("/").filter(Boolean), o = ["/"];
                        for (l.pop(); l.length > 0;) o.push("/".concat(l.join("/"))), l.pop();
                        o.forEach(e => {
                            let n = T(t.routes, e, t.basename);
                            n && n.forEach(e => a.add(e.route.id))
                        });
                        let i = [...a].reduce((e, t) => Object.assign(e, {
                            [t]: r.routes[t]
                        }), {});
                        return f(f({}, r), {}, {
                            routes: i,
                            sri: !!n || void 0
                        })
                    }(t, c), null, 2), ";") : "", "\n  window.__reactRouterRouteModules = {").concat(y.map((e, t) => "".concat(JSON.stringify(e.route.id), ":route").concat(t)).join(","), "};\n\nimport(").concat(JSON.stringify(t.entry.module), ");") : " ";
                return a.createElement(a.Fragment, null, a.createElement("script", f(f({}, e), {}, {
                    suppressHydrationWarning: !0,
                    dangerouslySetInnerHTML: {
                        __html: l
                    },
                    type: void 0
                })), a.createElement("script", f(f({}, e), {}, {
                    suppressHydrationWarning: !0,
                    dangerouslySetInnerHTML: {
                        __html: o
                    },
                    type: "module",
                    async: !0
                })))
            }, []),
            b = wt || h ? [] : (x = t.entry.imports.concat(ct(y, t, {
                includeHydrateFallback: !0
            })), [...new Set(x)]);
        var x;
        let w = "object" === typeof t.sri ? t.sri : {};
        return qe(!h, "The <Scripts /> element is a no-op when using RSC and can be safely removed."), wt || h ? null : a.createElement(a.Fragment, null, "object" === typeof t.sri ? a.createElement("script", {
            "rr-importmap": "",
            type: "importmap",
            suppressHydrationWarning: !0,
            dangerouslySetInnerHTML: {
                __html: JSON.stringify({
                    integrity: w
                })
            }
        }) : null, g ? null : a.createElement("link", {
            rel: "modulepreload",
            href: t.url,
            crossOrigin: e.crossOrigin,
            integrity: w[t.url],
            suppressHydrationWarning: !0
        }), a.createElement("link", {
            rel: "modulepreload",
            href: t.entry.module,
            crossOrigin: e.crossOrigin,
            integrity: w[t.entry.module],
            suppressHydrationWarning: !0
        }), b.map(t => a.createElement("link", {
            key: t,
            rel: "modulepreload",
            href: t,
            crossOrigin: e.crossOrigin,
            integrity: w[t],
            suppressHydrationWarning: !0
        })), v)
    }

    function St() {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
        return e => {
            t.forEach(t => {
                "function" === typeof t ? t(e) : null != t && (t.current = e)
            })
        }
    }
    a.Component;

    function Nt(e) {
        let {
            error: t,
            isOutsideRemixApp: n
        } = e;
        console.error(t);
        let r, l = a.createElement("script", {
            dangerouslySetInnerHTML: {
                __html: '\n        console.log(\n          "\ud83d\udcbf Hey developer \ud83d\udc4b. You can provide a way better UX than this when your app throws errors. Check out https://reactrouter.com/how-to/error-boundary for more information."\n        );\n      '
            }
        });
        if (ae(t)) return a.createElement(jt, {
            title: "Unhandled Thrown Response!"
        }, a.createElement("h1", {
            style: {
                fontSize: "24px"
            }
        }, t.status, " ", t.statusText), l);
        if (t instanceof Error) r = t;
        else {
            let e = null == t ? "Unknown Error" : "object" === typeof t && "toString" in t ? t.toString() : JSON.stringify(t);
            r = new Error(e)
        }
        return a.createElement(jt, {
            title: "Application Error!",
            isOutsideRemixApp: n
        }, a.createElement("h1", {
            style: {
                fontSize: "24px"
            }
        }, "Application Error"), a.createElement("pre", {
            style: {
                padding: "2rem",
                background: "hsla(10, 50%, 50%, 0.1)",
                color: "red",
                overflow: "auto"
            }
        }, r.stack), l)
    }

    function jt(e) {
        var t;
        let {
            title: n,
            renderScripts: r,
            isOutsideRemixApp: l,
            children: o
        } = e, {
            routeModules: s
        } = ht();
        return null !== (t = s.root) && void 0 !== t && t.Layout && !l ? o : a.createElement("html", {
            lang: "en"
        }, a.createElement("head", null, a.createElement("meta", {
            charSet: "utf-8"
        }), a.createElement("meta", {
            name: "viewport",
            content: "width=device-width,initial-scale=1,viewport-fit=cover"
        }), a.createElement("title", null, n)), a.createElement("body", null, a.createElement("main", {
            style: {
                fontFamily: "system-ui, sans-serif",
                padding: "2rem"
            }
        }, o, r ? a.createElement(kt, null) : null)))
    }
    var Et = "undefined" !== typeof window && "undefined" !== typeof window.document && "undefined" !== typeof window.document.createElement;
    try {
        Et && (window.__reactRouterVersion = "7.11.0")
    } catch (Ll) {}

    function Ct(e) {
        let {
            basename: t,
            children: n,
            unstable_useTransitions: r,
            window: l
        } = e, o = a.useRef();
        null == o.current && (o.current = x({
            window: l,
            v5Compat: !0
        }));
        let s = o.current,
            [i, c] = a.useState({
                action: s.action,
                location: s.location
            }),
            u = a.useCallback(e => {
                !1 === r ? c(e) : a.startTransition(() => c(e))
            }, [r]);
        return a.useLayoutEffect(() => s.listen(u), [s, u]), a.createElement(Qe, {
            basename: t,
            children: n,
            location: i.location,
            navigationType: i.action,
            navigator: s,
            unstable_useTransitions: r
        })
    }
    var _t = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
        Tt = a.forwardRef(function(e, t) {
            let {
                onClick: n,
                discover: r = "render",
                prefetch: l = "none",
                relative: o,
                reloadDocument: i,
                replace: c,
                state: u,
                target: d,
                to: p,
                preventScrollReset: m,
                viewTransition: h,
                unstable_defaultShouldRevalidate: y
            } = e, v = s(e, g), {
                basename: b,
                unstable_useTransitions: x
            } = a.useContext(ye), k = "string" === typeof p && _t.test(p), S = se(p, b);
            p = S.to;
            let N = function(e) {
                    let {
                        relative: t
                    } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    w(ke(), "useHref() may be used only in the context of a <Router> component.");
                    let {
                        basename: n,
                        navigator: r
                    } = a.useContext(ye), {
                        hash: l,
                        pathname: o,
                        search: s
                    } = Ce(e, {
                        relative: t
                    }), i = o;
                    return "/" !== n && (i = "/" === o ? n : Z([n, o])), r.createHref({
                        pathname: i,
                        search: s,
                        hash: l
                    })
                }(p, {
                    relative: o
                }),
                [E, C, _] = function(e, t) {
                    let n = a.useContext(mt),
                        [r, l] = a.useState(!1),
                        [o, s] = a.useState(!1),
                        {
                            onFocus: i,
                            onBlur: c,
                            onMouseEnter: u,
                            onMouseLeave: d,
                            onTouchStart: f
                        } = t,
                        p = a.useRef(null);
                    a.useEffect(() => {
                        if ("render" === e && s(!0), "viewport" === e) {
                            let e = new IntersectionObserver(e => {
                                e.forEach(e => {
                                    s(e.isIntersecting)
                                })
                            }, {
                                threshold: .5
                            });
                            return p.current && e.observe(p.current), () => {
                                e.disconnect()
                            }
                        }
                    }, [e]), a.useEffect(() => {
                        if (r) {
                            let e = setTimeout(() => {
                                s(!0)
                            }, 100);
                            return () => {
                                clearTimeout(e)
                            }
                        }
                    }, [r]);
                    let m = () => {
                            l(!0)
                        },
                        h = () => {
                            l(!1), s(!1)
                        };
                    return n ? "intent" !== e ? [o, p, {}] : [o, p, {
                        onFocus: gt(i, m),
                        onBlur: gt(c, h),
                        onMouseEnter: gt(u, m),
                        onMouseLeave: gt(d, h),
                        onTouchStart: gt(f, m)
                    }] : [!1, p, {}]
                }(l, v),
                T = function(e) {
                    let {
                        target: t,
                        replace: n,
                        state: r,
                        preventScrollReset: l,
                        relative: o,
                        viewTransition: s,
                        unstable_defaultShouldRevalidate: i,
                        unstable_useTransitions: c
                    } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, u = Ee(), d = Se(), f = Ce(e, {
                        relative: o
                    });
                    return a.useCallback(p => {
                        if (function(e, t) {
                                return 0 === e.button && (!t || "_self" === t) && ! function(e) {
                                    return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey)
                                }(e)
                            }(p, t)) {
                            p.preventDefault();
                            let t = void 0 !== n ? n : j(d) === j(f),
                                m = () => u(e, {
                                    replace: t,
                                    state: r,
                                    preventScrollReset: l,
                                    relative: o,
                                    viewTransition: s,
                                    unstable_defaultShouldRevalidate: i
                                });
                            c ? a.startTransition(() => m()) : m()
                        }
                    }, [d, u, f, n, r, t, e, l, o, s, i, c])
                }(p, {
                    replace: c,
                    state: u,
                    target: d,
                    preventScrollReset: m,
                    relative: o,
                    viewTransition: h,
                    unstable_defaultShouldRevalidate: y,
                    unstable_useTransitions: x
                });
            let R = a.createElement("a", f(f(f({}, v), _), {}, {
                href: S.absoluteURL || N,
                onClick: S.isExternal || i ? n : function(e) {
                    n && n(e), e.defaultPrevented || T(e)
                },
                ref: St(t, C),
                target: d,
                "data-discover": k || "render" !== r ? void 0 : "true"
            }));
            return E && !k ? a.createElement(a.Fragment, null, R, a.createElement(vt, {
                page: N
            })) : R
        });
    Tt.displayName = "Link", a.forwardRef(function(e, t) {
        let {
            "aria-current": n = "page",
            caseSensitive: r = !1,
            className: l = "",
            end: o = !1,
            style: i,
            to: c,
            viewTransition: u,
            children: d
        } = e, p = s(e, y), m = Ce(c, {
            relative: p.relative
        }), h = Se(), g = a.useContext(de), {
            navigator: v,
            basename: b
        } = a.useContext(ye), x = null != g && function(e) {
            let {
                relative: t
            } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, n = a.useContext(me);
            w(null != n, "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");
            let {
                basename: r
            } = Ot("useViewTransitionState"), l = Ce(e, {
                relative: t
            });
            if (!n.isTransitioning) return !1;
            let o = V(n.currentLocation.pathname, r) || n.currentLocation.pathname,
                s = V(n.nextLocation.pathname, r) || n.nextLocation.pathname;
            return null != H(l.pathname, s) || null != H(l.pathname, o)
        }(m) && !0 === u, k = v.encodeLocation ? v.encodeLocation(m).pathname : m.pathname, S = h.pathname, N = g && g.navigation && g.navigation.location ? g.navigation.location.pathname : null;
        r || (S = S.toLowerCase(), N = N ? N.toLowerCase() : null, k = k.toLowerCase()), N && b && (N = V(N, b) || N);
        const j = "/" !== k && k.endsWith("/") ? k.length - 1 : k.length;
        let E, C = S === k || !o && S.startsWith(k) && "/" === S.charAt(j),
            _ = null != N && (N === k || !o && N.startsWith(k) && "/" === N.charAt(k.length)),
            T = {
                isActive: C,
                isPending: _,
                isTransitioning: x
            },
            R = C ? n : void 0;
        E = "function" === typeof l ? l(T) : [l, C ? "active" : null, _ ? "pending" : null, x ? "transitioning" : null].filter(Boolean).join(" ");
        let P = "function" === typeof i ? i(T) : i;
        return a.createElement(Tt, f(f({}, p), {}, {
            "aria-current": R,
            className: E,
            ref: t,
            style: P,
            to: c,
            viewTransition: u
        }), "function" === typeof d ? d(T) : d)
    }).displayName = "NavLink";
    var Rt = a.forwardRef((e, t) => {
        let {
            discover: n = "render",
            fetcherKey: r,
            navigate: l,
            reloadDocument: o,
            replace: i,
            state: c,
            method: u = Je,
            action: d,
            onSubmit: p,
            relative: m,
            preventScrollReset: h,
            viewTransition: g,
            unstable_defaultShouldRevalidate: y
        } = e, b = s(e, v), {
            unstable_useTransitions: x
        } = a.useContext(ye), k = At(), S = function(e) {
            let {
                relative: t
            } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, {
                basename: n
            } = a.useContext(ye), r = a.useContext(be);
            w(r, "useFormAction must be used inside a RouteContext");
            let [l] = r.matches.slice(-1), o = f({}, Ce(e || ".", {
                relative: t
            })), s = Se();
            if (null == e) {
                o.search = s.search;
                let e = new URLSearchParams(o.search),
                    t = e.getAll("index");
                if (t.some(e => "" === e)) {
                    e.delete("index"), t.filter(e => e).forEach(t => e.append("index", t));
                    let n = e.toString();
                    o.search = n ? "?".concat(n) : ""
                }
            }
            e && "." !== e || !l.route.index || (o.search = o.search ? o.search.replace(/^\?/, "?index&") : "?index");
            "/" !== n && (o.pathname = "/" === o.pathname ? n : Z([n, o.pathname]));
            return j(o)
        }(d, {
            relative: m
        }), N = "get" === u.toLowerCase() ? "get" : "post", E = "string" === typeof d && _t.test(d);
        return a.createElement("form", f(f({
            ref: t,
            method: N,
            action: S,
            onSubmit: o ? p : e => {
                if (p && p(e), e.defaultPrevented) return;
                e.preventDefault();
                let t = e.nativeEvent.submitter,
                    n = (null === t || void 0 === t ? void 0 : t.getAttribute("formmethod")) || u,
                    o = () => k(t || e.currentTarget, {
                        fetcherKey: r,
                        method: n,
                        navigate: l,
                        replace: i,
                        state: c,
                        relative: m,
                        preventScrollReset: h,
                        viewTransition: g,
                        unstable_defaultShouldRevalidate: y
                    });
                x && !1 !== l ? a.startTransition(() => o()) : o()
            }
        }, b), {}, {
            "data-discover": E || "render" !== n ? void 0 : "true"
        }))
    });

    function Pt(e) {
        return "".concat(e, " must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.")
    }

    function Ot(e) {
        let t = a.useContext(ue);
        return w(t, Pt(e)), t
    }
    Rt.displayName = "Form";
    var Lt = 0,
        zt = () => "__".concat(String(++Lt), "__");

    function At() {
        let {
            router: e
        } = Ot("useSubmit"), {
            basename: t
        } = a.useContext(ye), n = Ue("useRouteId"), r = e.fetch, l = e.navigate;
        return a.useCallback(async function(e) {
            let a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                {
                    action: o,
                    method: s,
                    encType: i,
                    formData: c,
                    body: u
                } = nt(e, t);
            if (!1 === a.navigate) {
                let e = a.fetcherKey || zt();
                await r(e, n, a.action || o, {
                    unstable_defaultShouldRevalidate: a.unstable_defaultShouldRevalidate,
                    preventScrollReset: a.preventScrollReset,
                    formData: c,
                    body: u,
                    formMethod: a.method || s,
                    formEncType: a.encType || i,
                    flushSync: a.flushSync
                })
            } else await l(a.action || o, {
                unstable_defaultShouldRevalidate: a.unstable_defaultShouldRevalidate,
                preventScrollReset: a.preventScrollReset,
                formData: c,
                body: u,
                formMethod: a.method || s,
                formEncType: a.encType || i,
                replace: a.replace,
                state: a.state,
                fromRouteId: n,
                flushSync: a.flushSync,
                viewTransition: a.viewTransition
            })
        }, [r, l, t, n])
    }

    function Ft(e, t) {
        return function() {
            return e.apply(t, arguments)
        }
    }
    const {
        toString: Mt
    } = Object.prototype, {
        getPrototypeOf: Dt
    } = Object, {
        iterator: Ut,
        toStringTag: It
    } = Symbol, Bt = (Ht = Object.create(null), e => {
        const t = Mt.call(e);
        return Ht[t] || (Ht[t] = t.slice(8, -1).toLowerCase())
    });
    var Ht;
    const Wt = e => (e = e.toLowerCase(), t => Bt(t) === e),
        qt = e => t => typeof t === e,
        {
            isArray: Vt
        } = Array,
        $t = qt("undefined");

    function Qt(e) {
        return null !== e && !$t(e) && null !== e.constructor && !$t(e.constructor) && Jt(e.constructor.isBuffer) && e.constructor.isBuffer(e)
    }
    const Yt = Wt("ArrayBuffer");
    const Kt = qt("string"),
        Jt = qt("function"),
        Xt = qt("number"),
        Gt = e => null !== e && "object" === typeof e,
        Zt = e => {
            if ("object" !== Bt(e)) return !1;
            const t = Dt(e);
            return (null === t || t === Object.prototype || null === Object.getPrototypeOf(t)) && !(It in e) && !(Ut in e)
        },
        en = Wt("Date"),
        tn = Wt("File"),
        nn = Wt("Blob"),
        rn = Wt("FileList"),
        an = Wt("URLSearchParams"),
        [ln, on, sn, cn] = ["ReadableStream", "Request", "Response", "Headers"].map(Wt);

    function un(e, t) {
        let n, r, {
            allOwnKeys: a = !1
        } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        if (null !== e && "undefined" !== typeof e)
            if ("object" !== typeof e && (e = [e]), Vt(e))
                for (n = 0, r = e.length; n < r; n++) t.call(null, e[n], n, e);
            else {
                if (Qt(e)) return;
                const r = a ? Object.getOwnPropertyNames(e) : Object.keys(e),
                    l = r.length;
                let o;
                for (n = 0; n < l; n++) o = r[n], t.call(null, e[o], o, e)
            }
    }

    function dn(e, t) {
        if (Qt(e)) return null;
        t = t.toLowerCase();
        const n = Object.keys(e);
        let r, a = n.length;
        for (; a-- > 0;)
            if (r = n[a], t === r.toLowerCase()) return r;
        return null
    }
    const fn = "undefined" !== typeof globalThis ? globalThis : "undefined" !== typeof self ? self : "undefined" !== typeof window ? window : n.g,
        pn = e => !$t(e) && e !== fn;
    const mn = (hn = "undefined" !== typeof Uint8Array && Dt(Uint8Array), e => hn && e instanceof hn);
    var hn;
    const gn = Wt("HTMLFormElement"),
        yn = (e => {
            let {
                hasOwnProperty: t
            } = e;
            return (e, n) => t.call(e, n)
        })(Object.prototype),
        vn = Wt("RegExp"),
        bn = (e, t) => {
            const n = Object.getOwnPropertyDescriptors(e),
                r = {};
            un(n, (n, a) => {
                let l;
                !1 !== (l = t(n, a, e)) && (r[a] = l || n)
            }), Object.defineProperties(e, r)
        };
    const xn = Wt("AsyncFunction"),
        wn = ((e, t) => {
            return e ? setImmediate : t ? (n = "axios@".concat(Math.random()), r = [], fn.addEventListener("message", e => {
                let {
                    source: t,
                    data: a
                } = e;
                t === fn && a === n && r.length && r.shift()()
            }, !1), e => {
                r.push(e), fn.postMessage(n, "*")
            }) : e => setTimeout(e);
            var n, r
        })("function" === typeof setImmediate, Jt(fn.postMessage)),
        kn = "undefined" !== typeof queueMicrotask ? queueMicrotask.bind(fn) : "undefined" !== typeof process && process.nextTick || wn,
        Sn = {
            isArray: Vt,
            isArrayBuffer: Yt,
            isBuffer: Qt,
            isFormData: e => {
                let t;
                return e && ("function" === typeof FormData && e instanceof FormData || Jt(e.append) && ("formdata" === (t = Bt(e)) || "object" === t && Jt(e.toString) && "[object FormData]" === e.toString()))
            },
            isArrayBufferView: function(e) {
                let t;
                return t = "undefined" !== typeof ArrayBuffer && ArrayBuffer.isView ? ArrayBuffer.isView(e) : e && e.buffer && Yt(e.buffer), t
            },
            isString: Kt,
            isNumber: Xt,
            isBoolean: e => !0 === e || !1 === e,
            isObject: Gt,
            isPlainObject: Zt,
            isEmptyObject: e => {
                if (!Gt(e) || Qt(e)) return !1;
                try {
                    return 0 === Object.keys(e).length && Object.getPrototypeOf(e) === Object.prototype
                } catch (Ll) {
                    return !1
                }
            },
            isReadableStream: ln,
            isRequest: on,
            isResponse: sn,
            isHeaders: cn,
            isUndefined: $t,
            isDate: en,
            isFile: tn,
            isBlob: nn,
            isRegExp: vn,
            isFunction: Jt,
            isStream: e => Gt(e) && Jt(e.pipe),
            isURLSearchParams: an,
            isTypedArray: mn,
            isFileList: rn,
            forEach: un,
            merge: function e() {
                const {
                    caseless: t,
                    skipUndefined: n
                } = pn(this) && this || {}, r = {}, a = (a, l) => {
                    const o = t && dn(r, l) || l;
                    Zt(r[o]) && Zt(a) ? r[o] = e(r[o], a) : Zt(a) ? r[o] = e({}, a) : Vt(a) ? r[o] = a.slice() : n && $t(a) || (r[o] = a)
                };
                for (let l = 0, o = arguments.length; l < o; l++) arguments[l] && un(arguments[l], a);
                return r
            },
            extend: function(e, t, n) {
                let {
                    allOwnKeys: r
                } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
                return un(t, (t, r) => {
                    n && Jt(t) ? e[r] = Ft(t, n) : e[r] = t
                }, {
                    allOwnKeys: r
                }), e
            },
            trim: e => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, ""),
            stripBOM: e => (65279 === e.charCodeAt(0) && (e = e.slice(1)), e),
            inherits: (e, t, n, r) => {
                e.prototype = Object.create(t.prototype, r), e.prototype.constructor = e, Object.defineProperty(e, "super", {
                    value: t.prototype
                }), n && Object.assign(e.prototype, n)
            },
            toFlatObject: (e, t, n, r) => {
                let a, l, o;
                const s = {};
                if (t = t || {}, null == e) return t;
                do {
                    for (a = Object.getOwnPropertyNames(e), l = a.length; l-- > 0;) o = a[l], r && !r(o, e, t) || s[o] || (t[o] = e[o], s[o] = !0);
                    e = !1 !== n && Dt(e)
                } while (e && (!n || n(e, t)) && e !== Object.prototype);
                return t
            },
            kindOf: Bt,
            kindOfTest: Wt,
            endsWith: (e, t, n) => {
                e = String(e), (void 0 === n || n > e.length) && (n = e.length), n -= t.length;
                const r = e.indexOf(t, n);
                return -1 !== r && r === n
            },
            toArray: e => {
                if (!e) return null;
                if (Vt(e)) return e;
                let t = e.length;
                if (!Xt(t)) return null;
                const n = new Array(t);
                for (; t-- > 0;) n[t] = e[t];
                return n
            },
            forEachEntry: (e, t) => {
                const n = (e && e[Ut]).call(e);
                let r;
                for (;
                    (r = n.next()) && !r.done;) {
                    const n = r.value;
                    t.call(e, n[0], n[1])
                }
            },
            matchAll: (e, t) => {
                let n;
                const r = [];
                for (; null !== (n = e.exec(t));) r.push(n);
                return r
            },
            isHTMLForm: gn,
            hasOwnProperty: yn,
            hasOwnProp: yn,
            reduceDescriptors: bn,
            freezeMethods: e => {
                bn(e, (t, n) => {
                    if (Jt(e) && -1 !== ["arguments", "caller", "callee"].indexOf(n)) return !1;
                    const r = e[n];
                    Jt(r) && (t.enumerable = !1, "writable" in t ? t.writable = !1 : t.set || (t.set = () => {
                        throw Error("Can not rewrite read-only method '" + n + "'")
                    }))
                })
            },
            toObjectSet: (e, t) => {
                const n = {},
                    r = e => {
                        e.forEach(e => {
                            n[e] = !0
                        })
                    };
                return Vt(e) ? r(e) : r(String(e).split(t)), n
            },
            toCamelCase: e => e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function(e, t, n) {
                return t.toUpperCase() + n
            }),
            noop: () => {},
            toFiniteNumber: (e, t) => null != e && Number.isFinite(e = +e) ? e : t,
            findKey: dn,
            global: fn,
            isContextDefined: pn,
            isSpecCompliantForm: function(e) {
                return !!(e && Jt(e.append) && "FormData" === e[It] && e[Ut])
            },
            toJSONObject: e => {
                const t = new Array(10),
                    n = (e, r) => {
                        if (Gt(e)) {
                            if (t.indexOf(e) >= 0) return;
                            if (Qt(e)) return e;
                            if (!("toJSON" in e)) {
                                t[r] = e;
                                const a = Vt(e) ? [] : {};
                                return un(e, (e, t) => {
                                    const l = n(e, r + 1);
                                    !$t(l) && (a[t] = l)
                                }), t[r] = void 0, a
                            }
                        }
                        return e
                    };
                return n(e, 0)
            },
            isAsyncFn: xn,
            isThenable: e => e && (Gt(e) || Jt(e)) && Jt(e.then) && Jt(e.catch),
            setImmediate: wn,
            asap: kn,
            isIterable: e => null != e && Jt(e[Ut])
        };

    function Nn(e, t, n, r, a) {
        Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = (new Error).stack, this.message = e, this.name = "AxiosError", t && (this.code = t), n && (this.config = n), r && (this.request = r), a && (this.response = a, this.status = a.status ? a.status : null)
    }
    Sn.inherits(Nn, Error, {
        toJSON: function() {
            return {
                message: this.message,
                name: this.name,
                description: this.description,
                number: this.number,
                fileName: this.fileName,
                lineNumber: this.lineNumber,
                columnNumber: this.columnNumber,
                stack: this.stack,
                config: Sn.toJSONObject(this.config),
                code: this.code,
                status: this.status
            }
        }
    });
    const jn = Nn.prototype,
        En = {};
    ["ERR_BAD_OPTION_VALUE", "ERR_BAD_OPTION", "ECONNABORTED", "ETIMEDOUT", "ERR_NETWORK", "ERR_FR_TOO_MANY_REDIRECTS", "ERR_DEPRECATED", "ERR_BAD_RESPONSE", "ERR_BAD_REQUEST", "ERR_CANCELED", "ERR_NOT_SUPPORT", "ERR_INVALID_URL"].forEach(e => {
        En[e] = {
            value: e
        }
    }), Object.defineProperties(Nn, En), Object.defineProperty(jn, "isAxiosError", {
        value: !0
    }), Nn.from = (e, t, n, r, a, l) => {
        const o = Object.create(jn);
        Sn.toFlatObject(e, o, function(e) {
            return e !== Error.prototype
        }, e => "isAxiosError" !== e);
        const s = e && e.message ? e.message : "Error",
            i = null == t && e ? e.code : t;
        return Nn.call(o, s, i, n, r, a), e && null == o.cause && Object.defineProperty(o, "cause", {
            value: e,
            configurable: !0
        }), o.name = e && e.name || "Error", l && Object.assign(o, l), o
    };
    const Cn = Nn;

    function _n(e) {
        return Sn.isPlainObject(e) || Sn.isArray(e)
    }

    function Tn(e) {
        return Sn.endsWith(e, "[]") ? e.slice(0, -2) : e
    }

    function Rn(e, t, n) {
        return e ? e.concat(t).map(function(e, t) {
            return e = Tn(e), !n && t ? "[" + e + "]" : e
        }).join(n ? "." : "") : t
    }
    const Pn = Sn.toFlatObject(Sn, {}, null, function(e) {
        return /^is[A-Z]/.test(e)
    });
    const On = function(e, t, n) {
        if (!Sn.isObject(e)) throw new TypeError("target must be an object");
        t = t || new FormData;
        const r = (n = Sn.toFlatObject(n, {
                metaTokens: !0,
                dots: !1,
                indexes: !1
            }, !1, function(e, t) {
                return !Sn.isUndefined(t[e])
            })).metaTokens,
            a = n.visitor || c,
            l = n.dots,
            o = n.indexes,
            s = (n.Blob || "undefined" !== typeof Blob && Blob) && Sn.isSpecCompliantForm(t);
        if (!Sn.isFunction(a)) throw new TypeError("visitor must be a function");

        function i(e) {
            if (null === e) return "";
            if (Sn.isDate(e)) return e.toISOString();
            if (Sn.isBoolean(e)) return e.toString();
            if (!s && Sn.isBlob(e)) throw new Cn("Blob is not supported. Use a Buffer instead.");
            return Sn.isArrayBuffer(e) || Sn.isTypedArray(e) ? s && "function" === typeof Blob ? new Blob([e]) : Buffer.from(e) : e
        }

        function c(e, n, a) {
            let s = e;
            if (e && !a && "object" === typeof e)
                if (Sn.endsWith(n, "{}")) n = r ? n : n.slice(0, -2), e = JSON.stringify(e);
                else if (Sn.isArray(e) && function(e) {
                    return Sn.isArray(e) && !e.some(_n)
                }(e) || (Sn.isFileList(e) || Sn.endsWith(n, "[]")) && (s = Sn.toArray(e))) return n = Tn(n), s.forEach(function(e, r) {
                !Sn.isUndefined(e) && null !== e && t.append(!0 === o ? Rn([n], r, l) : null === o ? n : n + "[]", i(e))
            }), !1;
            return !!_n(e) || (t.append(Rn(a, n, l), i(e)), !1)
        }
        const u = [],
            d = Object.assign(Pn, {
                defaultVisitor: c,
                convertValue: i,
                isVisitable: _n
            });
        if (!Sn.isObject(e)) throw new TypeError("data must be an object");
        return function e(n, r) {
            if (!Sn.isUndefined(n)) {
                if (-1 !== u.indexOf(n)) throw Error("Circular reference detected in " + r.join("."));
                u.push(n), Sn.forEach(n, function(n, l) {
                    !0 === (!(Sn.isUndefined(n) || null === n) && a.call(t, n, Sn.isString(l) ? l.trim() : l, r, d)) && e(n, r ? r.concat(l) : [l])
                }), u.pop()
            }
        }(e), t
    };

    function Ln(e) {
        const t = {
            "!": "%21",
            "'": "%27",
            "(": "%28",
            ")": "%29",
            "~": "%7E",
            "%20": "+",
            "%00": "\0"
        };
        return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function(e) {
            return t[e]
        })
    }

    function zn(e, t) {
        this._pairs = [], e && On(e, this, t)
    }
    const An = zn.prototype;
    An.append = function(e, t) {
        this._pairs.push([e, t])
    }, An.toString = function(e) {
        const t = e ? function(t) {
            return e.call(this, t, Ln)
        } : Ln;
        return this._pairs.map(function(e) {
            return t(e[0]) + "=" + t(e[1])
        }, "").join("&")
    };
    const Fn = zn;

    function Mn(e) {
        return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+")
    }

    function Dn(e, t, n) {
        if (!t) return e;
        const r = n && n.encode || Mn;
        Sn.isFunction(n) && (n = {
            serialize: n
        });
        const a = n && n.serialize;
        let l;
        if (l = a ? a(t, n) : Sn.isURLSearchParams(t) ? t.toString() : new Fn(t, n).toString(r), l) {
            const t = e.indexOf("#"); - 1 !== t && (e = e.slice(0, t)), e += (-1 === e.indexOf("?") ? "?" : "&") + l
        }
        return e
    }
    const Un = class {
            constructor() {
                this.handlers = []
            }
            use(e, t, n) {
                return this.handlers.push({
                    fulfilled: e,
                    rejected: t,
                    synchronous: !!n && n.synchronous,
                    runWhen: n ? n.runWhen : null
                }), this.handlers.length - 1
            }
            eject(e) {
                this.handlers[e] && (this.handlers[e] = null)
            }
            clear() {
                this.handlers && (this.handlers = [])
            }
            forEach(e) {
                Sn.forEach(this.handlers, function(t) {
                    null !== t && e(t)
                })
            }
        },
        In = {
            silentJSONParsing: !0,
            forcedJSONParsing: !0,
            clarifyTimeoutError: !1
        },
        Bn = {
            isBrowser: !0,
            classes: {
                URLSearchParams: "undefined" !== typeof URLSearchParams ? URLSearchParams : Fn,
                FormData: "undefined" !== typeof FormData ? FormData : null,
                Blob: "undefined" !== typeof Blob ? Blob : null
            },
            protocols: ["http", "https", "file", "blob", "url", "data"]
        },
        Hn = "undefined" !== typeof window && "undefined" !== typeof document,
        Wn = "object" === typeof navigator && navigator || void 0,
        qn = Hn && (!Wn || ["ReactNative", "NativeScript", "NS"].indexOf(Wn.product) < 0),
        Vn = "undefined" !== typeof WorkerGlobalScope && self instanceof WorkerGlobalScope && "function" === typeof self.importScripts,
        $n = Hn && window.location.href || "http://localhost",
        Qn = f(f({}, r), Bn);
    const Yn = function(e) {
        function t(e, n, r, a) {
            let l = e[a++];
            if ("__proto__" === l) return !0;
            const o = Number.isFinite(+l),
                s = a >= e.length;
            if (l = !l && Sn.isArray(r) ? r.length : l, s) return Sn.hasOwnProp(r, l) ? r[l] = [r[l], n] : r[l] = n, !o;
            r[l] && Sn.isObject(r[l]) || (r[l] = []);
            return t(e, n, r[l], a) && Sn.isArray(r[l]) && (r[l] = function(e) {
                const t = {},
                    n = Object.keys(e);
                let r;
                const a = n.length;
                let l;
                for (r = 0; r < a; r++) l = n[r], t[l] = e[l];
                return t
            }(r[l])), !o
        }
        if (Sn.isFormData(e) && Sn.isFunction(e.entries)) {
            const n = {};
            return Sn.forEachEntry(e, (e, r) => {
                t(function(e) {
                    return Sn.matchAll(/\w+|\[(\w*)]/g, e).map(e => "[]" === e[0] ? "" : e[1] || e[0])
                }(e), r, n, 0)
            }), n
        }
        return null
    };
    const Kn = {
        transitional: In,
        adapter: ["xhr", "http", "fetch"],
        transformRequest: [function(e, t) {
            const n = t.getContentType() || "",
                r = n.indexOf("application/json") > -1,
                a = Sn.isObject(e);
            a && Sn.isHTMLForm(e) && (e = new FormData(e));
            if (Sn.isFormData(e)) return r ? JSON.stringify(Yn(e)) : e;
            if (Sn.isArrayBuffer(e) || Sn.isBuffer(e) || Sn.isStream(e) || Sn.isFile(e) || Sn.isBlob(e) || Sn.isReadableStream(e)) return e;
            if (Sn.isArrayBufferView(e)) return e.buffer;
            if (Sn.isURLSearchParams(e)) return t.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), e.toString();
            let l;
            if (a) {
                if (n.indexOf("application/x-www-form-urlencoded") > -1) return function(e, t) {
                    return On(e, new Qn.classes.URLSearchParams, f({
                        visitor: function(e, t, n, r) {
                            return Qn.isNode && Sn.isBuffer(e) ? (this.append(t, e.toString("base64")), !1) : r.defaultVisitor.apply(this, arguments)
                        }
                    }, t))
                }(e, this.formSerializer).toString();
                if ((l = Sn.isFileList(e)) || n.indexOf("multipart/form-data") > -1) {
                    const t = this.env && this.env.FormData;
                    return On(l ? {
                        "files[]": e
                    } : e, t && new t, this.formSerializer)
                }
            }
            return a || r ? (t.setContentType("application/json", !1), function(e, t, n) {
                if (Sn.isString(e)) try {
                    return (t || JSON.parse)(e), Sn.trim(e)
                } catch (Ll) {
                    if ("SyntaxError" !== Ll.name) throw Ll
                }
                return (n || JSON.stringify)(e)
            }(e)) : e
        }],
        transformResponse: [function(e) {
            const t = this.transitional || Kn.transitional,
                n = t && t.forcedJSONParsing,
                r = "json" === this.responseType;
            if (Sn.isResponse(e) || Sn.isReadableStream(e)) return e;
            if (e && Sn.isString(e) && (n && !this.responseType || r)) {
                const n = !(t && t.silentJSONParsing) && r;
                try {
                    return JSON.parse(e, this.parseReviver)
                } catch (Ll) {
                    if (n) {
                        if ("SyntaxError" === Ll.name) throw Cn.from(Ll, Cn.ERR_BAD_RESPONSE, this, null, this.response);
                        throw Ll
                    }
                }
            }
            return e
        }],
        timeout: 0,
        xsrfCookieName: "XSRF-TOKEN",
        xsrfHeaderName: "X-XSRF-TOKEN",
        maxContentLength: -1,
        maxBodyLength: -1,
        env: {
            FormData: Qn.classes.FormData,
            Blob: Qn.classes.Blob
        },
        validateStatus: function(e) {
            return e >= 200 && e < 300
        },
        headers: {
            common: {
                Accept: "application/json, text/plain, */*",
                "Content-Type": void 0
            }
        }
    };
    Sn.forEach(["delete", "get", "head", "post", "put", "patch"], e => {
        Kn.headers[e] = {}
    });
    const Jn = Kn,
        Xn = Sn.toObjectSet(["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"]),
        Gn = Symbol("internals");

    function Zn(e) {
        return e && String(e).trim().toLowerCase()
    }

    function er(e) {
        return !1 === e || null == e ? e : Sn.isArray(e) ? e.map(er) : String(e)
    }

    function tr(e, t, n, r, a) {
        return Sn.isFunction(r) ? r.call(this, t, n) : (a && (t = n), Sn.isString(t) ? Sn.isString(r) ? -1 !== t.indexOf(r) : Sn.isRegExp(r) ? r.test(t) : void 0 : void 0)
    }
    class nr {
        constructor(e) {
            e && this.set(e)
        }
        set(e, t, n) {
            const r = this;

            function a(e, t, n) {
                const a = Zn(t);
                if (!a) throw new Error("header name must be a non-empty string");
                const l = Sn.findKey(r, a);
                (!l || void 0 === r[l] || !0 === n || void 0 === n && !1 !== r[l]) && (r[l || t] = er(e))
            }
            const l = (e, t) => Sn.forEach(e, (e, n) => a(e, n, t));
            if (Sn.isPlainObject(e) || e instanceof this.constructor) l(e, t);
            else if (Sn.isString(e) && (e = e.trim()) && !/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim())) l((e => {
                const t = {};
                let n, r, a;
                return e && e.split("\n").forEach(function(e) {
                    a = e.indexOf(":"), n = e.substring(0, a).trim().toLowerCase(), r = e.substring(a + 1).trim(), !n || t[n] && Xn[n] || ("set-cookie" === n ? t[n] ? t[n].push(r) : t[n] = [r] : t[n] = t[n] ? t[n] + ", " + r : r)
                }), t
            })(e), t);
            else if (Sn.isObject(e) && Sn.isIterable(e)) {
                let n, r, a = {};
                for (const t of e) {
                    if (!Sn.isArray(t)) throw TypeError("Object iterator must return a key-value pair");
                    a[r = t[0]] = (n = a[r]) ? Sn.isArray(n) ? [...n, t[1]] : [n, t[1]] : t[1]
                }
                l(a, t)
            } else null != e && a(t, e, n);
            return this
        }
        get(e, t) {
            if (e = Zn(e)) {
                const n = Sn.findKey(this, e);
                if (n) {
                    const e = this[n];
                    if (!t) return e;
                    if (!0 === t) return function(e) {
                        const t = Object.create(null),
                            n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
                        let r;
                        for (; r = n.exec(e);) t[r[1]] = r[2];
                        return t
                    }(e);
                    if (Sn.isFunction(t)) return t.call(this, e, n);
                    if (Sn.isRegExp(t)) return t.exec(e);
                    throw new TypeError("parser must be boolean|regexp|function")
                }
            }
        }
        has(e, t) {
            if (e = Zn(e)) {
                const n = Sn.findKey(this, e);
                return !(!n || void 0 === this[n] || t && !tr(0, this[n], n, t))
            }
            return !1
        }
        delete(e, t) {
            const n = this;
            let r = !1;

            function a(e) {
                if (e = Zn(e)) {
                    const a = Sn.findKey(n, e);
                    !a || t && !tr(0, n[a], a, t) || (delete n[a], r = !0)
                }
            }
            return Sn.isArray(e) ? e.forEach(a) : a(e), r
        }
        clear(e) {
            const t = Object.keys(this);
            let n = t.length,
                r = !1;
            for (; n--;) {
                const a = t[n];
                e && !tr(0, this[a], a, e, !0) || (delete this[a], r = !0)
            }
            return r
        }
        normalize(e) {
            const t = this,
                n = {};
            return Sn.forEach(this, (r, a) => {
                const l = Sn.findKey(n, a);
                if (l) return t[l] = er(r), void delete t[a];
                const o = e ? function(e) {
                    return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (e, t, n) => t.toUpperCase() + n)
                }(a) : String(a).trim();
                o !== a && delete t[a], t[o] = er(r), n[o] = !0
            }), this
        }
        concat() {
            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            return this.constructor.concat(this, ...t)
        }
        toJSON(e) {
            const t = Object.create(null);
            return Sn.forEach(this, (n, r) => {
                null != n && !1 !== n && (t[r] = e && Sn.isArray(n) ? n.join(", ") : n)
            }), t
        }[Symbol.iterator]() {
            return Object.entries(this.toJSON())[Symbol.iterator]()
        }
        toString() {
            return Object.entries(this.toJSON()).map(e => {
                let [t, n] = e;
                return t + ": " + n
            }).join("\n")
        }
        getSetCookie() {
            return this.get("set-cookie") || []
        }
        get[Symbol.toStringTag]() {
            return "AxiosHeaders"
        }
        static from(e) {
            return e instanceof this ? e : new this(e)
        }
        static concat(e) {
            const t = new this(e);
            for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++) r[a - 1] = arguments[a];
            return r.forEach(e => t.set(e)), t
        }
        static accessor(e) {
            const t = (this[Gn] = this[Gn] = {
                    accessors: {}
                }).accessors,
                n = this.prototype;

            function r(e) {
                const r = Zn(e);
                t[r] || (! function(e, t) {
                    const n = Sn.toCamelCase(" " + t);
                    ["get", "set", "has"].forEach(r => {
                        Object.defineProperty(e, r + n, {
                            value: function(e, n, a) {
                                return this[r].call(this, t, e, n, a)
                            },
                            configurable: !0
                        })
                    })
                }(n, e), t[r] = !0)
            }
            return Sn.isArray(e) ? e.forEach(r) : r(e), this
        }
    }
    nr.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]), Sn.reduceDescriptors(nr.prototype, (e, t) => {
        let {
            value: n
        } = e, r = t[0].toUpperCase() + t.slice(1);
        return {
            get: () => n,
            set(e) {
                this[r] = e
            }
        }
    }), Sn.freezeMethods(nr);
    const rr = nr;

    function ar(e, t) {
        const n = this || Jn,
            r = t || n,
            a = rr.from(r.headers);
        let l = r.data;
        return Sn.forEach(e, function(e) {
            l = e.call(n, l, a.normalize(), t ? t.status : void 0)
        }), a.normalize(), l
    }

    function lr(e) {
        return !(!e || !e.__CANCEL__)
    }

    function or(e, t, n) {
        Cn.call(this, null == e ? "canceled" : e, Cn.ERR_CANCELED, t, n), this.name = "CanceledError"
    }
    Sn.inherits(or, Cn, {
        __CANCEL__: !0
    });
    const sr = or;

    function ir(e, t, n) {
        const r = n.config.validateStatus;
        n.status && r && !r(n.status) ? t(new Cn("Request failed with status code " + n.status, [Cn.ERR_BAD_REQUEST, Cn.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4], n.config, n.request, n)) : e(n)
    }
    const cr = function(e, t) {
        e = e || 10;
        const n = new Array(e),
            r = new Array(e);
        let a, l = 0,
            o = 0;
        return t = void 0 !== t ? t : 1e3,
            function(s) {
                const i = Date.now(),
                    c = r[o];
                a || (a = i), n[l] = s, r[l] = i;
                let u = o,
                    d = 0;
                for (; u !== l;) d += n[u++], u %= e;
                if (l = (l + 1) % e, l === o && (o = (o + 1) % e), i - a < t) return;
                const f = c && i - c;
                return f ? Math.round(1e3 * d / f) : void 0
            }
    };
    const ur = function(e, t) {
            let n, r, a = 0,
                l = 1e3 / t;
            const o = function(t) {
                let l = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
                a = l, n = null, r && (clearTimeout(r), r = null), e(...t)
            };
            return [function() {
                const e = Date.now(),
                    t = e - a;
                for (var s = arguments.length, i = new Array(s), c = 0; c < s; c++) i[c] = arguments[c];
                t >= l ? o(i, e) : (n = i, r || (r = setTimeout(() => {
                    r = null, o(n)
                }, l - t)))
            }, () => n && o(n)]
        },
        dr = function(e, t) {
            let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 3,
                r = 0;
            const a = cr(50, 250);
            return ur(n => {
                const l = n.loaded,
                    o = n.lengthComputable ? n.total : void 0,
                    s = l - r,
                    i = a(s);
                r = l;
                e({
                    loaded: l,
                    total: o,
                    progress: o ? l / o : void 0,
                    bytes: s,
                    rate: i || void 0,
                    estimated: i && o && l <= o ? (o - l) / i : void 0,
                    event: n,
                    lengthComputable: null != o,
                    [t ? "download" : "upload"]: !0
                })
            }, n)
        },
        fr = (e, t) => {
            const n = null != e;
            return [r => t[0]({
                lengthComputable: n,
                total: e,
                loaded: r
            }), t[1]]
        },
        pr = e => function() {
            for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
            return Sn.asap(() => e(...n))
        },
        mr = Qn.hasStandardBrowserEnv ? ((e, t) => n => (n = new URL(n, Qn.origin), e.protocol === n.protocol && e.host === n.host && (t || e.port === n.port)))(new URL(Qn.origin), Qn.navigator && /(msie|trident)/i.test(Qn.navigator.userAgent)) : () => !0,
        hr = Qn.hasStandardBrowserEnv ? {
            write(e, t, n, r, a, l, o) {
                if ("undefined" === typeof document) return;
                const s = ["".concat(e, "=").concat(encodeURIComponent(t))];
                Sn.isNumber(n) && s.push("expires=".concat(new Date(n).toUTCString())), Sn.isString(r) && s.push("path=".concat(r)), Sn.isString(a) && s.push("domain=".concat(a)), !0 === l && s.push("secure"), Sn.isString(o) && s.push("SameSite=".concat(o)), document.cookie = s.join("; ")
            },
            read(e) {
                if ("undefined" === typeof document) return null;
                const t = document.cookie.match(new RegExp("(?:^|; )" + e + "=([^;]*)"));
                return t ? decodeURIComponent(t[1]) : null
            },
            remove(e) {
                this.write(e, "", Date.now() - 864e5, "/")
            }
        } : {
            write() {},
            read: () => null,
            remove() {}
        };

    function gr(e, t, n) {
        let r = !/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t);
        return e && (r || 0 == n) ? function(e, t) {
            return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e
        }(e, t) : t
    }
    const yr = e => e instanceof rr ? f({}, e) : e;

    function vr(e, t) {
        t = t || {};
        const n = {};

        function r(e, t, n, r) {
            return Sn.isPlainObject(e) && Sn.isPlainObject(t) ? Sn.merge.call({
                caseless: r
            }, e, t) : Sn.isPlainObject(t) ? Sn.merge({}, t) : Sn.isArray(t) ? t.slice() : t
        }

        function a(e, t, n, a) {
            return Sn.isUndefined(t) ? Sn.isUndefined(e) ? void 0 : r(void 0, e, 0, a) : r(e, t, 0, a)
        }

        function l(e, t) {
            if (!Sn.isUndefined(t)) return r(void 0, t)
        }

        function o(e, t) {
            return Sn.isUndefined(t) ? Sn.isUndefined(e) ? void 0 : r(void 0, e) : r(void 0, t)
        }

        function s(n, a, l) {
            return l in t ? r(n, a) : l in e ? r(void 0, n) : void 0
        }
        const i = {
            url: l,
            method: l,
            data: l,
            baseURL: o,
            transformRequest: o,
            transformResponse: o,
            paramsSerializer: o,
            timeout: o,
            timeoutMessage: o,
            withCredentials: o,
            withXSRFToken: o,
            adapter: o,
            responseType: o,
            xsrfCookieName: o,
            xsrfHeaderName: o,
            onUploadProgress: o,
            onDownloadProgress: o,
            decompress: o,
            maxContentLength: o,
            maxBodyLength: o,
            beforeRedirect: o,
            transport: o,
            httpAgent: o,
            httpsAgent: o,
            cancelToken: o,
            socketPath: o,
            responseEncoding: o,
            validateStatus: s,
            headers: (e, t, n) => a(yr(e), yr(t), 0, !0)
        };
        return Sn.forEach(Object.keys(f(f({}, e), t)), function(r) {
            const l = i[r] || a,
                o = l(e[r], t[r], r);
            Sn.isUndefined(o) && l !== s || (n[r] = o)
        }), n
    }
    const br = e => {
            const t = vr({}, e);
            let {
                data: n,
                withXSRFToken: r,
                xsrfHeaderName: a,
                xsrfCookieName: l,
                headers: o,
                auth: s
            } = t;
            if (t.headers = o = rr.from(o), t.url = Dn(gr(t.baseURL, t.url, t.allowAbsoluteUrls), e.params, e.paramsSerializer), s && o.set("Authorization", "Basic " + btoa((s.username || "") + ":" + (s.password ? unescape(encodeURIComponent(s.password)) : ""))), Sn.isFormData(n))
                if (Qn.hasStandardBrowserEnv || Qn.hasStandardBrowserWebWorkerEnv) o.setContentType(void 0);
                else if (Sn.isFunction(n.getHeaders)) {
                const e = n.getHeaders(),
                    t = ["content-type", "content-length"];
                Object.entries(e).forEach(e => {
                    let [n, r] = e;
                    t.includes(n.toLowerCase()) && o.set(n, r)
                })
            }
            if (Qn.hasStandardBrowserEnv && (r && Sn.isFunction(r) && (r = r(t)), r || !1 !== r && mr(t.url))) {
                const e = a && l && hr.read(l);
                e && o.set(a, e)
            }
            return t
        },
        xr = "undefined" !== typeof XMLHttpRequest && function(e) {
            return new Promise(function(t, n) {
                const r = br(e);
                let a = r.data;
                const l = rr.from(r.headers).normalize();
                let o, s, i, c, u, {
                    responseType: d,
                    onUploadProgress: f,
                    onDownloadProgress: p
                } = r;

                function m() {
                    c && c(), u && u(), r.cancelToken && r.cancelToken.unsubscribe(o), r.signal && r.signal.removeEventListener("abort", o)
                }
                let h = new XMLHttpRequest;

                function g() {
                    if (!h) return;
                    const r = rr.from("getAllResponseHeaders" in h && h.getAllResponseHeaders());
                    ir(function(e) {
                        t(e), m()
                    }, function(e) {
                        n(e), m()
                    }, {
                        data: d && "text" !== d && "json" !== d ? h.response : h.responseText,
                        status: h.status,
                        statusText: h.statusText,
                        headers: r,
                        config: e,
                        request: h
                    }), h = null
                }
                h.open(r.method.toUpperCase(), r.url, !0), h.timeout = r.timeout, "onloadend" in h ? h.onloadend = g : h.onreadystatechange = function() {
                    h && 4 === h.readyState && (0 !== h.status || h.responseURL && 0 === h.responseURL.indexOf("file:")) && setTimeout(g)
                }, h.onabort = function() {
                    h && (n(new Cn("Request aborted", Cn.ECONNABORTED, e, h)), h = null)
                }, h.onerror = function(t) {
                    const r = t && t.message ? t.message : "Network Error",
                        a = new Cn(r, Cn.ERR_NETWORK, e, h);
                    a.event = t || null, n(a), h = null
                }, h.ontimeout = function() {
                    let t = r.timeout ? "timeout of " + r.timeout + "ms exceeded" : "timeout exceeded";
                    const a = r.transitional || In;
                    r.timeoutErrorMessage && (t = r.timeoutErrorMessage), n(new Cn(t, a.clarifyTimeoutError ? Cn.ETIMEDOUT : Cn.ECONNABORTED, e, h)), h = null
                }, void 0 === a && l.setContentType(null), "setRequestHeader" in h && Sn.forEach(l.toJSON(), function(e, t) {
                    h.setRequestHeader(t, e)
                }), Sn.isUndefined(r.withCredentials) || (h.withCredentials = !!r.withCredentials), d && "json" !== d && (h.responseType = r.responseType), p && ([i, u] = dr(p, !0), h.addEventListener("progress", i)), f && h.upload && ([s, c] = dr(f), h.upload.addEventListener("progress", s), h.upload.addEventListener("loadend", c)), (r.cancelToken || r.signal) && (o = t => {
                    h && (n(!t || t.type ? new sr(null, e, h) : t), h.abort(), h = null)
                }, r.cancelToken && r.cancelToken.subscribe(o), r.signal && (r.signal.aborted ? o() : r.signal.addEventListener("abort", o)));
                const y = function(e) {
                    const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
                    return t && t[1] || ""
                }(r.url);
                y && -1 === Qn.protocols.indexOf(y) ? n(new Cn("Unsupported protocol " + y + ":", Cn.ERR_BAD_REQUEST, e)) : h.send(a || null)
            })
        },
        wr = (e, t) => {
            const {
                length: n
            } = e = e ? e.filter(Boolean) : [];
            if (t || n) {
                let n, r = new AbortController;
                const a = function(e) {
                    if (!n) {
                        n = !0, o();
                        const t = e instanceof Error ? e : this.reason;
                        r.abort(t instanceof Cn ? t : new sr(t instanceof Error ? t.message : t))
                    }
                };
                let l = t && setTimeout(() => {
                    l = null, a(new Cn("timeout ".concat(t, " of ms exceeded"), Cn.ETIMEDOUT))
                }, t);
                const o = () => {
                    e && (l && clearTimeout(l), l = null, e.forEach(e => {
                        e.unsubscribe ? e.unsubscribe(a) : e.removeEventListener("abort", a)
                    }), e = null)
                };
                e.forEach(e => e.addEventListener("abort", a));
                const {
                    signal: s
                } = r;
                return s.unsubscribe = () => Sn.asap(o), s
            }
        };

    function kr(e, t) {
        this.v = e, this.k = t
    }

    function Sr(e) {
        return function() {
            return new Nr(e.apply(this, arguments))
        }
    }

    function Nr(e) {
        var t, n;

        function r(t, n) {
            try {
                var l = e[t](n),
                    o = l.value,
                    s = o instanceof kr;
                Promise.resolve(s ? o.v : o).then(function(n) {
                    if (s) {
                        var i = "return" === t ? "return" : "next";
                        if (!o.k || n.done) return r(i, n);
                        n = e[i](n).value
                    }
                    a(l.done ? "return" : "normal", n)
                }, function(e) {
                    r("throw", e)
                })
            } catch (e) {
                a("throw", e)
            }
        }

        function a(e, a) {
            switch (e) {
                case "return":
                    t.resolve({
                        value: a,
                        done: !0
                    });
                    break;
                case "throw":
                    t.reject(a);
                    break;
                default:
                    t.resolve({
                        value: a,
                        done: !1
                    })
            }(t = t.next) ? r(t.key, t.arg): n = null
        }
        this._invoke = function(e, a) {
            return new Promise(function(l, o) {
                var s = {
                    key: e,
                    arg: a,
                    resolve: l,
                    reject: o,
                    next: null
                };
                n ? n = n.next = s : (t = n = s, r(e, a))
            })
        }, "function" != typeof e.return && (this.return = void 0)
    }

    function jr(e) {
        return new kr(e, 0)
    }

    function Er(e) {
        var t = {},
            n = !1;

        function r(t, r) {
            return n = !0, r = new Promise(function(n) {
                n(e[t](r))
            }), {
                done: !1,
                value: new kr(r, 1)
            }
        }
        return t["undefined" != typeof Symbol && Symbol.iterator || "@@iterator"] = function() {
            return this
        }, t.next = function(e) {
            return n ? (n = !1, e) : r("next", e)
        }, "function" == typeof e.throw && (t.throw = function(e) {
            if (n) throw n = !1, e;
            return r("throw", e)
        }), "function" == typeof e.return && (t.return = function(e) {
            return n ? (n = !1, e) : r("return", e)
        }), t
    }

    function Cr(e) {
        var t, n, r, a = 2;
        for ("undefined" != typeof Symbol && (n = Symbol.asyncIterator, r = Symbol.iterator); a--;) {
            if (n && null != (t = e[n])) return t.call(e);
            if (r && null != (t = e[r])) return new _r(t.call(e));
            n = "@@asyncIterator", r = "@@iterator"
        }
        throw new TypeError("Object is not async iterable")
    }

    function _r(e) {
        function t(e) {
            if (Object(e) !== e) return Promise.reject(new TypeError(e + " is not an object."));
            var t = e.done;
            return Promise.resolve(e.value).then(function(e) {
                return {
                    value: e,
                    done: t
                }
            })
        }
        return _r = function(e) {
            this.s = e, this.n = e.next
        }, _r.prototype = {
            s: null,
            n: null,
            next: function() {
                return t(this.n.apply(this.s, arguments))
            },
            return: function(e) {
                var n = this.s.return;
                return void 0 === n ? Promise.resolve({
                    value: e,
                    done: !0
                }) : t(n.apply(this.s, arguments))
            },
            throw: function(e) {
                var n = this.s.return;
                return void 0 === n ? Promise.reject(e) : t(n.apply(this.s, arguments))
            }
        }, new _r(e)
    }
    Nr.prototype["function" == typeof Symbol && Symbol.asyncIterator || "@@asyncIterator"] = function() {
        return this
    }, Nr.prototype.next = function(e) {
        return this._invoke("next", e)
    }, Nr.prototype.throw = function(e) {
        return this._invoke("throw", e)
    }, Nr.prototype.return = function(e) {
        return this._invoke("return", e)
    };
    const Tr = function*(e, t) {
            let n = e.byteLength;
            if (!t || n < t) return void(yield e);
            let r, a = 0;
            for (; a < n;) r = a + t, yield e.slice(a, r), a = r
        },
        Rr = function() {
            var e = Sr(function*(e, t) {
                var n, r = !1,
                    a = !1;
                try {
                    for (var l, o = Cr(Pr(e)); r = !(l = yield jr(o.next())).done; r = !1) {
                        const e = l.value;
                        yield* Er(Cr(Tr(e, t)))
                    }
                } catch (s) {
                    a = !0, n = s
                } finally {
                    try {
                        r && null != o.return && (yield jr(o.return()))
                    } finally {
                        if (a) throw n
                    }
                }
            });
            return function(t, n) {
                return e.apply(this, arguments)
            }
        }(),
        Pr = function() {
            var e = Sr(function*(e) {
                if (e[Symbol.asyncIterator]) return void(yield* Er(Cr(e)));
                const t = e.getReader();
                try {
                    for (;;) {
                        const {
                            done: e,
                            value: n
                        } = yield jr(t.read());
                        if (e) break;
                        yield n
                    }
                } finally {
                    yield jr(t.cancel())
                }
            });
            return function(t) {
                return e.apply(this, arguments)
            }
        }(),
        Or = (e, t, n, r) => {
            const a = Rr(e, t);
            let l, o = 0,
                s = e => {
                    l || (l = !0, r && r(e))
                };
            return new ReadableStream({
                async pull(e) {
                    try {
                        const {
                            done: t,
                            value: r
                        } = await a.next();
                        if (t) return s(), void e.close();
                        let l = r.byteLength;
                        if (n) {
                            let e = o += l;
                            n(e)
                        }
                        e.enqueue(new Uint8Array(r))
                    } catch (t) {
                        throw s(t), t
                    }
                },
                cancel: e => (s(e), a.return())
            }, {
                highWaterMark: 2
            })
        },
        {
            isFunction: Lr
        } = Sn,
        zr = (e => {
            let {
                Request: t,
                Response: n
            } = e;
            return {
                Request: t,
                Response: n
            }
        })(Sn.global),
        {
            ReadableStream: Ar,
            TextEncoder: Fr
        } = Sn.global,
        Mr = function(e) {
            try {
                for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
                return !!e(...n)
            } catch (Ll) {
                return !1
            }
        },
        Dr = e => {
            e = Sn.merge.call({
                skipUndefined: !0
            }, zr, e);
            const {
                fetch: t,
                Request: n,
                Response: r
            } = e, a = t ? Lr(t) : "function" === typeof fetch, l = Lr(n), o = Lr(r);
            if (!a) return !1;
            const s = a && Lr(Ar),
                i = a && ("function" === typeof Fr ? (c = new Fr, e => c.encode(e)) : async e => new Uint8Array(await new n(e).arrayBuffer()));
            var c;
            const u = l && s && Mr(() => {
                    let e = !1;
                    const t = new n(Qn.origin, {
                        body: new Ar,
                        method: "POST",
                        get duplex() {
                            return e = !0, "half"
                        }
                    }).headers.has("Content-Type");
                    return e && !t
                }),
                d = o && s && Mr(() => Sn.isReadableStream(new r("").body)),
                p = {
                    stream: d && (e => e.body)
                };
            a && ["text", "arrayBuffer", "blob", "formData", "stream"].forEach(e => {
                !p[e] && (p[e] = (t, n) => {
                    let r = t && t[e];
                    if (r) return r.call(t);
                    throw new Cn("Response type '".concat(e, "' is not supported"), Cn.ERR_NOT_SUPPORT, n)
                })
            });
            const m = async (e, t) => {
                const r = Sn.toFiniteNumber(e.getContentLength());
                return null == r ? (async e => {
                    if (null == e) return 0;
                    if (Sn.isBlob(e)) return e.size;
                    if (Sn.isSpecCompliantForm(e)) {
                        const t = new n(Qn.origin, {
                            method: "POST",
                            body: e
                        });
                        return (await t.arrayBuffer()).byteLength
                    }
                    return Sn.isArrayBufferView(e) || Sn.isArrayBuffer(e) ? e.byteLength : (Sn.isURLSearchParams(e) && (e += ""), Sn.isString(e) ? (await i(e)).byteLength : void 0)
                })(t) : r
            };
            return async e => {
                let {
                    url: a,
                    method: o,
                    data: s,
                    signal: i,
                    cancelToken: c,
                    timeout: h,
                    onDownloadProgress: g,
                    onUploadProgress: y,
                    responseType: v,
                    headers: b,
                    withCredentials: x = "same-origin",
                    fetchOptions: w
                } = br(e), k = t || fetch;
                v = v ? (v + "").toLowerCase() : "text";
                let S = wr([i, c && c.toAbortSignal()], h),
                    N = null;
                const j = S && S.unsubscribe && (() => {
                    S.unsubscribe()
                });
                let E;
                try {
                    if (y && u && "get" !== o && "head" !== o && 0 !== (E = await m(b, s))) {
                        let e, t = new n(a, {
                            method: "POST",
                            body: s,
                            duplex: "half"
                        });
                        if (Sn.isFormData(s) && (e = t.headers.get("content-type")) && b.setContentType(e), t.body) {
                            const [e, n] = fr(E, dr(pr(y)));
                            s = Or(t.body, 65536, e, n)
                        }
                    }
                    Sn.isString(x) || (x = x ? "include" : "omit");
                    const t = l && "credentials" in n.prototype,
                        i = f(f({}, w), {}, {
                            signal: S,
                            method: o.toUpperCase(),
                            headers: b.normalize().toJSON(),
                            body: s,
                            duplex: "half",
                            credentials: t ? x : void 0
                        });
                    N = l && new n(a, i);
                    let c = await (l ? k(N, w) : k(a, i));
                    const h = d && ("stream" === v || "response" === v);
                    if (d && (g || h && j)) {
                        const e = {};
                        ["status", "statusText", "headers"].forEach(t => {
                            e[t] = c[t]
                        });
                        const t = Sn.toFiniteNumber(c.headers.get("content-length")),
                            [n, a] = g && fr(t, dr(pr(g), !0)) || [];
                        c = new r(Or(c.body, 65536, n, () => {
                            a && a(), j && j()
                        }), e)
                    }
                    v = v || "text";
                    let C = await p[Sn.findKey(p, v) || "text"](c, e);
                    return !h && j && j(), await new Promise((t, n) => {
                        ir(t, n, {
                            data: C,
                            headers: rr.from(c.headers),
                            status: c.status,
                            statusText: c.statusText,
                            config: e,
                            request: N
                        })
                    })
                } catch (C) {
                    if (j && j(), C && "TypeError" === C.name && /Load failed|fetch/i.test(C.message)) throw Object.assign(new Cn("Network Error", Cn.ERR_NETWORK, e, N), {
                        cause: C.cause || C
                    });
                    throw Cn.from(C, C && C.code, e, N)
                }
            }
        },
        Ur = new Map,
        Ir = e => {
            let t = e && e.env || {};
            const {
                fetch: n,
                Request: r,
                Response: a
            } = t, l = [r, a, n];
            let o, s, i = l.length,
                c = Ur;
            for (; i--;) o = l[i], s = c.get(o), void 0 === s && c.set(o, s = i ? new Map : Dr(t)), c = s;
            return s
        },
        Br = (Ir(), {
            http: null,
            xhr: xr,
            fetch: {
                get: Ir
            }
        });
    Sn.forEach(Br, (e, t) => {
        if (e) {
            try {
                Object.defineProperty(e, "name", {
                    value: t
                })
            } catch (Ll) {}
            Object.defineProperty(e, "adapterName", {
                value: t
            })
        }
    });
    const Hr = e => "- ".concat(e),
        Wr = e => Sn.isFunction(e) || null === e || !1 === e;
    const qr = {
        getAdapter: function(e, t) {
            e = Sn.isArray(e) ? e : [e];
            const {
                length: n
            } = e;
            let r, a;
            const l = {};
            for (let o = 0; o < n; o++) {
                let n;
                if (r = e[o], a = r, !Wr(r) && (a = Br[(n = String(r)).toLowerCase()], void 0 === a)) throw new Cn("Unknown adapter '".concat(n, "'"));
                if (a && (Sn.isFunction(a) || (a = a.get(t)))) break;
                l[n || "#" + o] = a
            }
            if (!a) {
                const e = Object.entries(l).map(e => {
                    let [t, n] = e;
                    return "adapter ".concat(t, " ") + (!1 === n ? "is not supported by the environment" : "is not available in the build")
                });
                let t = n ? e.length > 1 ? "since :\n" + e.map(Hr).join("\n") : " " + Hr(e[0]) : "as no adapter specified";
                throw new Cn("There is no suitable adapter to dispatch the request " + t, "ERR_NOT_SUPPORT")
            }
            return a
        },
        adapters: Br
    };

    function Vr(e) {
        if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted) throw new sr(null, e)
    }

    function $r(e) {
        Vr(e), e.headers = rr.from(e.headers), e.data = ar.call(e, e.transformRequest), -1 !== ["post", "put", "patch"].indexOf(e.method) && e.headers.setContentType("application/x-www-form-urlencoded", !1);
        return qr.getAdapter(e.adapter || Jn.adapter, e)(e).then(function(t) {
            return Vr(e), t.data = ar.call(e, e.transformResponse, t), t.headers = rr.from(t.headers), t
        }, function(t) {
            return lr(t) || (Vr(e), t && t.response && (t.response.data = ar.call(e, e.transformResponse, t.response), t.response.headers = rr.from(t.response.headers))), Promise.reject(t)
        })
    }
    const Qr = "1.13.2",
        Yr = {};
    ["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
        Yr[e] = function(n) {
            return typeof n === e || "a" + (t < 1 ? "n " : " ") + e
        }
    });
    const Kr = {};
    Yr.transitional = function(e, t, n) {
        function r(e, t) {
            return "[Axios v" + Qr + "] Transitional option '" + e + "'" + t + (n ? ". " + n : "")
        }
        return (n, a, l) => {
            if (!1 === e) throw new Cn(r(a, " has been removed" + (t ? " in " + t : "")), Cn.ERR_DEPRECATED);
            return t && !Kr[a] && (Kr[a] = !0, console.warn(r(a, " has been deprecated since v" + t + " and will be removed in the near future"))), !e || e(n, a, l)
        }
    }, Yr.spelling = function(e) {
        return (t, n) => (console.warn("".concat(n, " is likely a misspelling of ").concat(e)), !0)
    };
    const Jr = {
            assertOptions: function(e, t, n) {
                if ("object" !== typeof e) throw new Cn("options must be an object", Cn.ERR_BAD_OPTION_VALUE);
                const r = Object.keys(e);
                let a = r.length;
                for (; a-- > 0;) {
                    const l = r[a],
                        o = t[l];
                    if (o) {
                        const t = e[l],
                            n = void 0 === t || o(t, l, e);
                        if (!0 !== n) throw new Cn("option " + l + " must be " + n, Cn.ERR_BAD_OPTION_VALUE);
                        continue
                    }
                    if (!0 !== n) throw new Cn("Unknown option " + l, Cn.ERR_BAD_OPTION)
                }
            },
            validators: Yr
        },
        Xr = Jr.validators;
    class Gr {
        constructor(e) {
            this.defaults = e || {}, this.interceptors = {
                request: new Un,
                response: new Un
            }
        }
        async request(e, t) {
            try {
                return await this._request(e, t)
            } catch (n) {
                if (n instanceof Error) {
                    let e = {};
                    Error.captureStackTrace ? Error.captureStackTrace(e) : e = new Error;
                    const t = e.stack ? e.stack.replace(/^.+\n/, "") : "";
                    try {
                        n.stack ? t && !String(n.stack).endsWith(t.replace(/^.+\n.+\n/, "")) && (n.stack += "\n" + t) : n.stack = t
                    } catch (Ll) {}
                }
                throw n
            }
        }
        _request(e, t) {
            "string" === typeof e ? (t = t || {}).url = e : t = e || {}, t = vr(this.defaults, t);
            const {
                transitional: n,
                paramsSerializer: r,
                headers: a
            } = t;
            void 0 !== n && Jr.assertOptions(n, {
                silentJSONParsing: Xr.transitional(Xr.boolean),
                forcedJSONParsing: Xr.transitional(Xr.boolean),
                clarifyTimeoutError: Xr.transitional(Xr.boolean)
            }, !1), null != r && (Sn.isFunction(r) ? t.paramsSerializer = {
                serialize: r
            } : Jr.assertOptions(r, {
                encode: Xr.function,
                serialize: Xr.function
            }, !0)), void 0 !== t.allowAbsoluteUrls || (void 0 !== this.defaults.allowAbsoluteUrls ? t.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : t.allowAbsoluteUrls = !0), Jr.assertOptions(t, {
                baseUrl: Xr.spelling("baseURL"),
                withXsrfToken: Xr.spelling("withXSRFToken")
            }, !0), t.method = (t.method || this.defaults.method || "get").toLowerCase();
            let l = a && Sn.merge(a.common, a[t.method]);
            a && Sn.forEach(["delete", "get", "head", "post", "put", "patch", "common"], e => {
                delete a[e]
            }), t.headers = rr.concat(l, a);
            const o = [];
            let s = !0;
            this.interceptors.request.forEach(function(e) {
                "function" === typeof e.runWhen && !1 === e.runWhen(t) || (s = s && e.synchronous, o.unshift(e.fulfilled, e.rejected))
            });
            const i = [];
            let c;
            this.interceptors.response.forEach(function(e) {
                i.push(e.fulfilled, e.rejected)
            });
            let u, d = 0;
            if (!s) {
                const e = [$r.bind(this), void 0];
                for (e.unshift(...o), e.push(...i), u = e.length, c = Promise.resolve(t); d < u;) c = c.then(e[d++], e[d++]);
                return c
            }
            u = o.length;
            let f = t;
            for (; d < u;) {
                const e = o[d++],
                    t = o[d++];
                try {
                    f = e(f)
                } catch (p) {
                    t.call(this, p);
                    break
                }
            }
            try {
                c = $r.call(this, f)
            } catch (p) {
                return Promise.reject(p)
            }
            for (d = 0, u = i.length; d < u;) c = c.then(i[d++], i[d++]);
            return c
        }
        getUri(e) {
            return Dn(gr((e = vr(this.defaults, e)).baseURL, e.url, e.allowAbsoluteUrls), e.params, e.paramsSerializer)
        }
    }
    Sn.forEach(["delete", "get", "head", "options"], function(e) {
        Gr.prototype[e] = function(t, n) {
            return this.request(vr(n || {}, {
                method: e,
                url: t,
                data: (n || {}).data
            }))
        }
    }), Sn.forEach(["post", "put", "patch"], function(e) {
        function t(t) {
            return function(n, r, a) {
                return this.request(vr(a || {}, {
                    method: e,
                    headers: t ? {
                        "Content-Type": "multipart/form-data"
                    } : {},
                    url: n,
                    data: r
                }))
            }
        }
        Gr.prototype[e] = t(), Gr.prototype[e + "Form"] = t(!0)
    });
    const Zr = Gr;
    class ea {
        constructor(e) {
            if ("function" !== typeof e) throw new TypeError("executor must be a function.");
            let t;
            this.promise = new Promise(function(e) {
                t = e
            });
            const n = this;
            this.promise.then(e => {
                if (!n._listeners) return;
                let t = n._listeners.length;
                for (; t-- > 0;) n._listeners[t](e);
                n._listeners = null
            }), this.promise.then = e => {
                let t;
                const r = new Promise(e => {
                    n.subscribe(e), t = e
                }).then(e);
                return r.cancel = function() {
                    n.unsubscribe(t)
                }, r
            }, e(function(e, r, a) {
                n.reason || (n.reason = new sr(e, r, a), t(n.reason))
            })
        }
        throwIfRequested() {
            if (this.reason) throw this.reason
        }
        subscribe(e) {
            this.reason ? e(this.reason) : this._listeners ? this._listeners.push(e) : this._listeners = [e]
        }
        unsubscribe(e) {
            if (!this._listeners) return;
            const t = this._listeners.indexOf(e); - 1 !== t && this._listeners.splice(t, 1)
        }
        toAbortSignal() {
            const e = new AbortController,
                t = t => {
                    e.abort(t)
                };
            return this.subscribe(t), e.signal.unsubscribe = () => this.unsubscribe(t), e.signal
        }
        static source() {
            let e;
            return {
                token: new ea(function(t) {
                    e = t
                }),
                cancel: e
            }
        }
    }
    const ta = ea;
    const na = {
        Continue: 100,
        SwitchingProtocols: 101,
        Processing: 102,
        EarlyHints: 103,
        Ok: 200,
        Created: 201,
        Accepted: 202,
        NonAuthoritativeInformation: 203,
        NoContent: 204,
        ResetContent: 205,
        PartialContent: 206,
        MultiStatus: 207,
        AlreadyReported: 208,
        ImUsed: 226,
        MultipleChoices: 300,
        MovedPermanently: 301,
        Found: 302,
        SeeOther: 303,
        NotModified: 304,
        UseProxy: 305,
        Unused: 306,
        TemporaryRedirect: 307,
        PermanentRedirect: 308,
        BadRequest: 400,
        Unauthorized: 401,
        PaymentRequired: 402,
        Forbidden: 403,
        NotFound: 404,
        MethodNotAllowed: 405,
        NotAcceptable: 406,
        ProxyAuthenticationRequired: 407,
        RequestTimeout: 408,
        Conflict: 409,
        Gone: 410,
        LengthRequired: 411,
        PreconditionFailed: 412,
        PayloadTooLarge: 413,
        UriTooLong: 414,
        UnsupportedMediaType: 415,
        RangeNotSatisfiable: 416,
        ExpectationFailed: 417,
        ImATeapot: 418,
        MisdirectedRequest: 421,
        UnprocessableEntity: 422,
        Locked: 423,
        FailedDependency: 424,
        TooEarly: 425,
        UpgradeRequired: 426,
        PreconditionRequired: 428,
        TooManyRequests: 429,
        RequestHeaderFieldsTooLarge: 431,
        UnavailableForLegalReasons: 451,
        InternalServerError: 500,
        NotImplemented: 501,
        BadGateway: 502,
        ServiceUnavailable: 503,
        GatewayTimeout: 504,
        HttpVersionNotSupported: 505,
        VariantAlsoNegotiates: 506,
        InsufficientStorage: 507,
        LoopDetected: 508,
        NotExtended: 510,
        NetworkAuthenticationRequired: 511,
        WebServerIsDown: 521,
        ConnectionTimedOut: 522,
        OriginIsUnreachable: 523,
        TimeoutOccurred: 524,
        SslHandshakeFailed: 525,
        InvalidSslCertificate: 526
    };
    Object.entries(na).forEach(e => {
        let [t, n] = e;
        na[n] = t
    });
    const ra = na;
    const aa = function e(t) {
        const n = new Zr(t),
            r = Ft(Zr.prototype.request, n);
        return Sn.extend(r, Zr.prototype, n, {
            allOwnKeys: !0
        }), Sn.extend(r, n, null, {
            allOwnKeys: !0
        }), r.create = function(n) {
            return e(vr(t, n))
        }, r
    }(Jn);
    aa.Axios = Zr, aa.CanceledError = sr, aa.CancelToken = ta, aa.isCancel = lr, aa.VERSION = Qr, aa.toFormData = On, aa.AxiosError = Cn, aa.Cancel = aa.CanceledError, aa.all = function(e) {
        return Promise.all(e)
    }, aa.spread = function(e) {
        return function(t) {
            return e.apply(null, t)
        }
    }, aa.isAxiosError = function(e) {
        return Sn.isObject(e) && !0 === e.isAxiosError
    }, aa.mergeConfig = vr, aa.AxiosHeaders = rr, aa.formToJSON = e => Yn(Sn.isHTMLForm(e) ? new FormData(e) : e), aa.getAdapter = qr.getAdapter, aa.HttpStatusCode = ra, aa.default = aa;
    const la = aa;
    var oa = (e, t, n, r, a, l, o, s) => {
            let i = document.documentElement,
                c = ["light", "dark"];

            function u(t) {
                (Array.isArray(e) ? e : [e]).forEach(e => {
                        let n = "class" === e,
                            r = n && l ? a.map(e => l[e] || e) : a;
                        n ? (i.classList.remove(...r), i.classList.add(l && l[t] ? l[t] : t)) : i.setAttribute(e, t)
                    }),
                    function(e) {
                        s && c.includes(e) && (i.style.colorScheme = e)
                    }(t)
            }
            if (r) u(r);
            else try {
                let e = localStorage.getItem(t) || n;
                u(o && "system" === e ? window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light" : e)
            } catch (d) {}
        },
        sa = a.createContext(void 0),
        ia = {
            setTheme: e => {},
            themes: []
        },
        ca = (a.memo(e => {
            let {
                forcedTheme: t,
                storageKey: n,
                attribute: r,
                enableSystem: l,
                enableColorScheme: o,
                defaultTheme: s,
                value: i,
                themes: c,
                nonce: u,
                scriptProps: d
            } = e, p = JSON.stringify([r, n, s, t, c, i, l, o]).slice(1, -1);
            return a.createElement("script", f(f({}, d), {}, {
                suppressHydrationWarning: !0,
                nonce: "undefined" == typeof window ? u : "",
                dangerouslySetInnerHTML: {
                    __html: "(".concat(oa.toString(), ")(").concat(p, ")")
                }
            }))
        }), n(950));
    const ua = ["message"];
    const da = Array(12).fill(0),
        fa = e => {
            let {
                visible: t,
                className: n
            } = e;
            return a.createElement("div", {
                className: ["sonner-loading-wrapper", n].filter(Boolean).join(" "),
                "data-visible": t
            }, a.createElement("div", {
                className: "sonner-spinner"
            }, da.map((e, t) => a.createElement("div", {
                className: "sonner-loading-bar",
                key: "spinner-bar-".concat(t)
            }))))
        },
        pa = a.createElement("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 20 20",
            fill: "currentColor",
            height: "20",
            width: "20"
        }, a.createElement("path", {
            fillRule: "evenodd",
            d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",
            clipRule: "evenodd"
        })),
        ma = a.createElement("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 24 24",
            fill: "currentColor",
            height: "20",
            width: "20"
        }, a.createElement("path", {
            fillRule: "evenodd",
            d: "M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",
            clipRule: "evenodd"
        })),
        ha = a.createElement("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 20 20",
            fill: "currentColor",
            height: "20",
            width: "20"
        }, a.createElement("path", {
            fillRule: "evenodd",
            d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",
            clipRule: "evenodd"
        })),
        ga = a.createElement("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 20 20",
            fill: "currentColor",
            height: "20",
            width: "20"
        }, a.createElement("path", {
            fillRule: "evenodd",
            d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z",
            clipRule: "evenodd"
        })),
        ya = a.createElement("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "12",
            height: "12",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round"
        }, a.createElement("line", {
            x1: "18",
            y1: "6",
            x2: "6",
            y2: "18"
        }), a.createElement("line", {
            x1: "6",
            y1: "6",
            x2: "18",
            y2: "18"
        }));
    let va = 1;
    const ba = new class {
            constructor() {
                this.subscribe = e => (this.subscribers.push(e), () => {
                    const t = this.subscribers.indexOf(e);
                    this.subscribers.splice(t, 1)
                }), this.publish = e => {
                    this.subscribers.forEach(t => t(e))
                }, this.addToast = e => {
                    this.publish(e), this.toasts = [...this.toasts, e]
                }, this.create = e => {
                    var t;
                    const {
                        message: n
                    } = e, r = s(e, ua), a = "number" === typeof(null == e ? void 0 : e.id) || (null == (t = e.id) ? void 0 : t.length) > 0 ? e.id : va++, l = this.toasts.find(e => e.id === a), o = void 0 === e.dismissible || e.dismissible;
                    return this.dismissedToasts.has(a) && this.dismissedToasts.delete(a), l ? this.toasts = this.toasts.map(t => t.id === a ? (this.publish(f(f(f({}, t), e), {}, {
                        id: a,
                        title: n
                    })), f(f(f({}, t), e), {}, {
                        id: a,
                        dismissible: o,
                        title: n
                    })) : t) : this.addToast(f(f({
                        title: n
                    }, r), {}, {
                        dismissible: o,
                        id: a
                    })), a
                }, this.dismiss = e => (e ? (this.dismissedToasts.add(e), requestAnimationFrame(() => this.subscribers.forEach(t => t({
                    id: e,
                    dismiss: !0
                })))) : this.toasts.forEach(e => {
                    this.subscribers.forEach(t => t({
                        id: e.id,
                        dismiss: !0
                    }))
                }), e), this.message = (e, t) => this.create(f(f({}, t), {}, {
                    message: e
                })), this.error = (e, t) => this.create(f(f({}, t), {}, {
                    message: e,
                    type: "error"
                })), this.success = (e, t) => this.create(f(f({}, t), {}, {
                    type: "success",
                    message: e
                })), this.info = (e, t) => this.create(f(f({}, t), {}, {
                    type: "info",
                    message: e
                })), this.warning = (e, t) => this.create(f(f({}, t), {}, {
                    type: "warning",
                    message: e
                })), this.loading = (e, t) => this.create(f(f({}, t), {}, {
                    type: "loading",
                    message: e
                })), this.promise = (e, t) => {
                    if (!t) return;
                    let n;
                    void 0 !== t.loading && (n = this.create(f(f({}, t), {}, {
                        promise: e,
                        type: "loading",
                        message: t.loading,
                        description: "function" !== typeof t.description ? t.description : void 0
                    })));
                    const r = Promise.resolve(e instanceof Function ? e() : e);
                    let l, o = void 0 !== n;
                    const s = r.then(async e => {
                            l = ["resolve", e];
                            if (a.isValidElement(e)) o = !1, this.create({
                                id: n,
                                type: "default",
                                message: e
                            });
                            else if (xa(e) && !e.ok) {
                                o = !1;
                                const r = "function" === typeof t.error ? await t.error("HTTP error! status: ".concat(e.status)) : t.error,
                                    l = "function" === typeof t.description ? await t.description("HTTP error! status: ".concat(e.status)) : t.description,
                                    s = "object" === typeof r && !a.isValidElement(r) ? r : {
                                        message: r
                                    };
                                this.create(f({
                                    id: n,
                                    type: "error",
                                    description: l
                                }, s))
                            } else if (e instanceof Error) {
                                o = !1;
                                const r = "function" === typeof t.error ? await t.error(e) : t.error,
                                    l = "function" === typeof t.description ? await t.description(e) : t.description,
                                    s = "object" === typeof r && !a.isValidElement(r) ? r : {
                                        message: r
                                    };
                                this.create(f({
                                    id: n,
                                    type: "error",
                                    description: l
                                }, s))
                            } else if (void 0 !== t.success) {
                                o = !1;
                                const r = "function" === typeof t.success ? await t.success(e) : t.success,
                                    l = "function" === typeof t.description ? await t.description(e) : t.description,
                                    s = "object" === typeof r && !a.isValidElement(r) ? r : {
                                        message: r
                                    };
                                this.create(f({
                                    id: n,
                                    type: "success",
                                    description: l
                                }, s))
                            }
                        }).catch(async e => {
                            if (l = ["reject", e], void 0 !== t.error) {
                                o = !1;
                                const r = "function" === typeof t.error ? await t.error(e) : t.error,
                                    l = "function" === typeof t.description ? await t.description(e) : t.description,
                                    s = "object" === typeof r && !a.isValidElement(r) ? r : {
                                        message: r
                                    };
                                this.create(f({
                                    id: n,
                                    type: "error",
                                    description: l
                                }, s))
                            }
                        }).finally(() => {
                            o && (this.dismiss(n), n = void 0), null == t.finally || t.finally.call(t)
                        }),
                        i = () => new Promise((e, t) => s.then(() => "reject" === l[0] ? t(l[1]) : e(l[1])).catch(t));
                    return "string" !== typeof n && "number" !== typeof n ? {
                        unwrap: i
                    } : Object.assign(n, {
                        unwrap: i
                    })
                }, this.custom = (e, t) => {
                    const n = (null == t ? void 0 : t.id) || va++;
                    return this.create(f({
                        jsx: e(n),
                        id: n
                    }, t)), n
                }, this.getActiveToasts = () => this.toasts.filter(e => !this.dismissedToasts.has(e.id)), this.subscribers = [], this.toasts = [], this.dismissedToasts = new Set
            }
        },
        xa = e => e && "object" === typeof e && "ok" in e && "boolean" === typeof e.ok && "status" in e && "number" === typeof e.status,
        wa = (e, t) => {
            const n = (null == t ? void 0 : t.id) || va++;
            return ba.addToast(f(f({
                title: e
            }, t), {}, {
                id: n
            })), n
        },
        ka = Object.assign(wa, {
            success: ba.success,
            info: ba.info,
            warning: ba.warning,
            error: ba.error,
            custom: ba.custom,
            message: ba.message,
            promise: ba.promise,
            dismiss: ba.dismiss,
            loading: ba.loading
        }, {
            getHistory: () => ba.toasts,
            getToasts: () => ba.getActiveToasts()
        });

    function Sa(e) {
        return void 0 !== e.label
    }! function(e) {
        if (!e || "undefined" == typeof document) return;
        let t = document.head || document.getElementsByTagName("head")[0],
            n = document.createElement("style");
        n.type = "text/css", t.appendChild(n), n.styleSheet ? n.styleSheet.cssText = e : n.appendChild(document.createTextNode(e))
    }("[data-sonner-toaster][dir=ltr],html[dir=ltr]{--toast-icon-margin-start:-3px;--toast-icon-margin-end:4px;--toast-svg-margin-start:-1px;--toast-svg-margin-end:0px;--toast-button-margin-start:auto;--toast-button-margin-end:0;--toast-close-button-start:0;--toast-close-button-end:unset;--toast-close-button-transform:translate(-35%, -35%)}[data-sonner-toaster][dir=rtl],html[dir=rtl]{--toast-icon-margin-start:4px;--toast-icon-margin-end:-3px;--toast-svg-margin-start:0px;--toast-svg-margin-end:-1px;--toast-button-margin-start:0;--toast-button-margin-end:auto;--toast-close-button-start:unset;--toast-close-button-end:0;--toast-close-button-transform:translate(35%, -35%)}[data-sonner-toaster]{position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1:hsl(0, 0%, 99%);--gray2:hsl(0, 0%, 97.3%);--gray3:hsl(0, 0%, 95.1%);--gray4:hsl(0, 0%, 93%);--gray5:hsl(0, 0%, 90.9%);--gray6:hsl(0, 0%, 88.7%);--gray7:hsl(0, 0%, 85.8%);--gray8:hsl(0, 0%, 78%);--gray9:hsl(0, 0%, 56.1%);--gray10:hsl(0, 0%, 52.3%);--gray11:hsl(0, 0%, 43.5%);--gray12:hsl(0, 0%, 9%);--border-radius:8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:0;z-index:999999999;transition:transform .4s ease}@media (hover:none) and (pointer:coarse){[data-sonner-toaster][data-lifted=true]{transform:none}}[data-sonner-toaster][data-x-position=right]{right:var(--offset-right)}[data-sonner-toaster][data-x-position=left]{left:var(--offset-left)}[data-sonner-toaster][data-x-position=center]{left:50%;transform:translateX(-50%)}[data-sonner-toaster][data-y-position=top]{top:var(--offset-top)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--offset-bottom)}[data-sonner-toast]{--y:translateY(100%);--lift-amount:calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:0;overflow-wrap:anywhere}[data-sonner-toast][data-styled=true]{padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px rgba(0,0,0,.1);width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}[data-sonner-toast]:focus-visible{box-shadow:0 4px 12px rgba(0,0,0,.1),0 0 0 2px rgba(0,0,0,.2)}[data-sonner-toast][data-y-position=top]{top:0;--y:translateY(-100%);--lift:1;--lift-amount:calc(1 * var(--gap))}[data-sonner-toast][data-y-position=bottom]{bottom:0;--y:translateY(100%);--lift:-1;--lift-amount:calc(var(--lift) * var(--gap))}[data-sonner-toast][data-styled=true] [data-description]{font-weight:400;line-height:1.4;color:#3f3f3f}[data-rich-colors=true][data-sonner-toast][data-styled=true] [data-description]{color:inherit}[data-sonner-toaster][data-sonner-theme=dark] [data-description]{color:#e8e8e8}[data-sonner-toast][data-styled=true] [data-title]{font-weight:500;line-height:1.5;color:inherit}[data-sonner-toast][data-styled=true] [data-icon]{display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}[data-sonner-toast][data-promise=true] [data-icon]>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}[data-sonner-toast][data-styled=true] [data-icon]>*{flex-shrink:0}[data-sonner-toast][data-styled=true] [data-icon] svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}[data-sonner-toast][data-styled=true] [data-content]{display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;font-weight:500;cursor:pointer;outline:0;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}[data-sonner-toast][data-styled=true] [data-button]:focus-visible{box-shadow:0 0 0 2px rgba(0,0,0,.4)}[data-sonner-toast][data-styled=true] [data-button]:first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}[data-sonner-toast][data-styled=true] [data-cancel]{color:var(--normal-text);background:rgba(0,0,0,.08)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast][data-styled=true] [data-cancel]{background:rgba(255,255,255,.3)}[data-sonner-toast][data-styled=true] [data-close-button]{position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;color:var(--gray12);background:var(--normal-bg);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast][data-styled=true] [data-close-button]:focus-visible{box-shadow:0 4px 12px rgba(0,0,0,.1),0 0 0 2px rgba(0,0,0,.2)}[data-sonner-toast][data-styled=true] [data-disabled=true]{cursor:not-allowed}[data-sonner-toast][data-styled=true]:hover [data-close-button]:hover{background:var(--gray2);border-color:var(--gray5)}[data-sonner-toast][data-swiping=true]::before{content:'';position:absolute;left:-100%;right:-100%;height:100%;z-index:-1}[data-sonner-toast][data-y-position=top][data-swiping=true]::before{bottom:50%;transform:scaleY(3) translateY(50%)}[data-sonner-toast][data-y-position=bottom][data-swiping=true]::before{top:50%;transform:scaleY(3) translateY(-50%)}[data-sonner-toast][data-swiping=false][data-removed=true]::before{content:'';position:absolute;inset:0;transform:scaleY(2)}[data-sonner-toast][data-expanded=true]::after{content:'';position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}[data-sonner-toast][data-mounted=true]{--y:translateY(0);opacity:1}[data-sonner-toast][data-expanded=false][data-front=false]{--scale:var(--toasts-before) * 0.05 + 1;--y:translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}[data-sonner-toast]>*{transition:opacity .4s}[data-sonner-toast][data-x-position=right]{right:0}[data-sonner-toast][data-x-position=left]{left:0}[data-sonner-toast][data-expanded=false][data-front=false][data-styled=true]>*{opacity:0}[data-sonner-toast][data-visible=false]{opacity:0;pointer-events:none}[data-sonner-toast][data-mounted=true][data-expanded=true]{--y:translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}[data-sonner-toast][data-removed=true][data-front=true][data-swipe-out=false]{--y:translateY(calc(var(--lift) * -100%));opacity:0}[data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=true]{--y:translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}[data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=false]{--y:translateY(40%);opacity:0;transition:transform .5s,opacity .2s}[data-sonner-toast][data-removed=true][data-front=false]::before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount-y,0)) translateX(var(--swipe-amount-x,0));transition:none}[data-sonner-toast][data-swiped=true]{user-select:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation-duration:.2s;animation-timing-function:ease-out;animation-fill-mode:forwards}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=left]{animation-name:swipe-out-left}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=right]{animation-name:swipe-out-right}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=up]{animation-name:swipe-out-up}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=down]{animation-name:swipe-out-down}@keyframes swipe-out-left{from{transform:var(--y) translateX(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translateX(calc(var(--swipe-amount-x) - 100%));opacity:0}}@keyframes swipe-out-right{from{transform:var(--y) translateX(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translateX(calc(var(--swipe-amount-x) + 100%));opacity:0}}@keyframes swipe-out-up{from{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) - 100%));opacity:0}}@keyframes swipe-out-down{from{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) + 100%));opacity:0}}@media (max-width:600px){[data-sonner-toaster]{position:fixed;right:var(--mobile-offset-right);left:var(--mobile-offset-left);width:100%}[data-sonner-toaster][dir=rtl]{left:calc(var(--mobile-offset-left) * -1)}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset-left) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset-left)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--mobile-offset-bottom)}[data-sonner-toaster][data-y-position=top]{top:var(--mobile-offset-top)}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset-left);right:var(--mobile-offset-right);transform:none}}[data-sonner-toaster][data-sonner-theme=light]{--normal-bg:#fff;--normal-border:var(--gray4);--normal-text:var(--gray12);--success-bg:hsl(143, 85%, 96%);--success-border:hsl(145, 92%, 87%);--success-text:hsl(140, 100%, 27%);--info-bg:hsl(208, 100%, 97%);--info-border:hsl(221, 91%, 93%);--info-text:hsl(210, 92%, 45%);--warning-bg:hsl(49, 100%, 97%);--warning-border:hsl(49, 91%, 84%);--warning-text:hsl(31, 92%, 45%);--error-bg:hsl(359, 100%, 97%);--error-border:hsl(359, 100%, 94%);--error-text:hsl(360, 100%, 45%)}[data-sonner-toaster][data-sonner-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg:#000;--normal-border:hsl(0, 0%, 20%);--normal-text:var(--gray1)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg:#fff;--normal-border:var(--gray3);--normal-text:var(--gray12)}[data-sonner-toaster][data-sonner-theme=dark]{--normal-bg:#000;--normal-bg-hover:hsl(0, 0%, 12%);--normal-border:hsl(0, 0%, 20%);--normal-border-hover:hsl(0, 0%, 25%);--normal-text:var(--gray1);--success-bg:hsl(150, 100%, 6%);--success-border:hsl(147, 100%, 12%);--success-text:hsl(150, 86%, 65%);--info-bg:hsl(215, 100%, 6%);--info-border:hsl(223, 43%, 17%);--info-text:hsl(216, 87%, 65%);--warning-bg:hsl(64, 100%, 6%);--warning-border:hsl(60, 100%, 9%);--warning-text:hsl(46, 87%, 65%);--error-bg:hsl(358, 76%, 10%);--error-border:hsl(357, 89%, 16%);--error-text:hsl(358, 100%, 81%)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast] [data-close-button]{background:var(--normal-bg);border-color:var(--normal-border);color:var(--normal-text)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast] [data-close-button]:hover{background:var(--normal-bg-hover);border-color:var(--normal-border-hover)}[data-rich-colors=true][data-sonner-toast][data-type=success]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size:16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:first-child{animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}100%{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}100%{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}100%{opacity:.15}}@media (prefers-reduced-motion){.sonner-loading-bar,[data-sonner-toast],[data-sonner-toast]>*{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}");
    const Na = 3,
        ja = 14;

    function Ea() {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
        return t.filter(Boolean).join(" ")
    }
    const Ca = e => {
        var t, n, r, l, o, s, i, c, u;
        const {
            invert: d,
            toast: p,
            unstyled: m,
            interacting: h,
            setHeights: g,
            visibleToasts: y,
            heights: v,
            index: b,
            toasts: x,
            expanded: w,
            removeToast: k,
            defaultRichColors: S,
            closeButton: N,
            style: j,
            cancelButtonStyle: E,
            actionButtonStyle: C,
            className: _ = "",
            descriptionClassName: T = "",
            duration: R,
            position: P,
            gap: O,
            expandByDefault: L,
            classNames: z,
            icons: A,
            closeButtonAriaLabel: F = "Close toast"
        } = e, [M, D] = a.useState(null), [U, I] = a.useState(null), [B, H] = a.useState(!1), [W, q] = a.useState(!1), [V, $] = a.useState(!1), [Q, Y] = a.useState(!1), [K, J] = a.useState(!1), [X, G] = a.useState(0), [Z, ee] = a.useState(0), te = a.useRef(p.duration || R || 4e3), ne = a.useRef(null), re = a.useRef(null), ae = 0 === b, le = b + 1 <= y, oe = p.type, se = !1 !== p.dismissible, ie = p.className || "", ce = p.descriptionClassName || "", ue = a.useMemo(() => v.findIndex(e => e.toastId === p.id) || 0, [v, p.id]), de = a.useMemo(() => {
            var e;
            return null != (e = p.closeButton) ? e : N
        }, [p.closeButton, N]), fe = a.useMemo(() => p.duration || R || 4e3, [p.duration, R]), pe = a.useRef(0), me = a.useRef(0), he = a.useRef(0), ge = a.useRef(null), [ye, ve] = P.split("-"), be = a.useMemo(() => v.reduce((e, t, n) => n >= ue ? e : e + t.height, 0), [v, ue]), xe = (() => {
            const [e, t] = a.useState(document.hidden);
            return a.useEffect(() => {
                const e = () => {
                    t(document.hidden)
                };
                return document.addEventListener("visibilitychange", e), () => window.removeEventListener("visibilitychange", e)
            }, []), e
        })(), we = p.invert || d, ke = "loading" === oe;
        me.current = a.useMemo(() => ue * O + be, [ue, be]), a.useEffect(() => {
            te.current = fe
        }, [fe]), a.useEffect(() => {
            H(!0)
        }, []), a.useEffect(() => {
            const e = re.current;
            if (e) {
                const t = e.getBoundingClientRect().height;
                return ee(t), g(e => [{
                    toastId: p.id,
                    height: t,
                    position: p.position
                }, ...e]), () => g(e => e.filter(e => e.toastId !== p.id))
            }
        }, [g, p.id]), a.useLayoutEffect(() => {
            if (!B) return;
            const e = re.current,
                t = e.style.height;
            e.style.height = "auto";
            const n = e.getBoundingClientRect().height;
            e.style.height = t, ee(n), g(e => e.find(e => e.toastId === p.id) ? e.map(e => e.toastId === p.id ? f(f({}, e), {}, {
                height: n
            }) : e) : [{
                toastId: p.id,
                height: n,
                position: p.position
            }, ...e])
        }, [B, p.title, p.description, g, p.id, p.jsx, p.action, p.cancel]);
        const Se = a.useCallback(() => {
            q(!0), G(me.current), g(e => e.filter(e => e.toastId !== p.id)), setTimeout(() => {
                k(p)
            }, 200)
        }, [p, k, g, me]);
        a.useEffect(() => {
            if (p.promise && "loading" === oe || p.duration === 1 / 0 || "loading" === p.type) return;
            let e;
            return w || h || xe ? (() => {
                if (he.current < pe.current) {
                    const e = (new Date).getTime() - pe.current;
                    te.current = te.current - e
                }
                he.current = (new Date).getTime()
            })() : te.current !== 1 / 0 && (pe.current = (new Date).getTime(), e = setTimeout(() => {
                null == p.onAutoClose || p.onAutoClose.call(p, p), Se()
            }, te.current)), () => clearTimeout(e)
        }, [w, h, p, oe, xe, Se]), a.useEffect(() => {
            p.delete && (Se(), null == p.onDismiss || p.onDismiss.call(p, p))
        }, [Se, p.delete]);
        const Ne = p.icon || (null == A ? void 0 : A[oe]) || (e => {
            switch (e) {
                case "success":
                    return pa;
                case "info":
                    return ha;
                case "warning":
                    return ma;
                case "error":
                    return ga;
                default:
                    return null
            }
        })(oe);
        var je, Ee;
        return a.createElement("li", {
            tabIndex: 0,
            ref: re,
            className: Ea(_, ie, null == z ? void 0 : z.toast, null == p || null == (t = p.classNames) ? void 0 : t.toast, null == z ? void 0 : z.default, null == z ? void 0 : z[oe], null == p || null == (n = p.classNames) ? void 0 : n[oe]),
            "data-sonner-toast": "",
            "data-rich-colors": null != (je = p.richColors) ? je : S,
            "data-styled": !Boolean(p.jsx || p.unstyled || m),
            "data-mounted": B,
            "data-promise": Boolean(p.promise),
            "data-swiped": K,
            "data-removed": W,
            "data-visible": le,
            "data-y-position": ye,
            "data-x-position": ve,
            "data-index": b,
            "data-front": ae,
            "data-swiping": V,
            "data-dismissible": se,
            "data-type": oe,
            "data-invert": we,
            "data-swipe-out": Q,
            "data-swipe-direction": U,
            "data-expanded": Boolean(w || L && B),
            "data-testid": p.testId,
            style: f(f({
                "--index": b,
                "--toasts-before": b,
                "--z-index": x.length - b,
                "--offset": "".concat(W ? X : me.current, "px"),
                "--initial-height": L ? "auto" : "".concat(Z, "px")
            }, j), p.style),
            onDragEnd: () => {
                $(!1), D(null), ge.current = null
            },
            onPointerDown: e => {
                2 !== e.button && !ke && se && (ne.current = new Date, G(me.current), e.target.setPointerCapture(e.pointerId), "BUTTON" !== e.target.tagName && ($(!0), ge.current = {
                    x: e.clientX,
                    y: e.clientY
                }))
            },
            onPointerUp: () => {
                var e, t, n;
                if (Q || !se) return;
                ge.current = null;
                const r = Number((null == (e = re.current) ? void 0 : e.style.getPropertyValue("--swipe-amount-x").replace("px", "")) || 0),
                    a = Number((null == (t = re.current) ? void 0 : t.style.getPropertyValue("--swipe-amount-y").replace("px", "")) || 0),
                    l = (new Date).getTime() - (null == (n = ne.current) ? void 0 : n.getTime()),
                    o = "x" === M ? r : a,
                    s = Math.abs(o) / l;
                if (Math.abs(o) >= 45 || s > .11) return G(me.current), null == p.onDismiss || p.onDismiss.call(p, p), I("x" === M ? r > 0 ? "right" : "left" : a > 0 ? "down" : "up"), Se(), void Y(!0);
                var i, c;
                null == (i = re.current) || i.style.setProperty("--swipe-amount-x", "0px"), null == (c = re.current) || c.style.setProperty("--swipe-amount-y", "0px"), J(!1), $(!1), D(null)
            },
            onPointerMove: t => {
                var n, r, a;
                if (!ge.current || !se) return;
                if ((null == (n = window.getSelection()) ? void 0 : n.toString().length) > 0) return;
                const l = t.clientY - ge.current.y,
                    o = t.clientX - ge.current.x;
                var s;
                const i = null != (s = e.swipeDirections) ? s : function(e) {
                    const [t, n] = e.split("-"), r = [];
                    return t && r.push(t), n && r.push(n), r
                }(P);
                !M && (Math.abs(o) > 1 || Math.abs(l) > 1) && D(Math.abs(o) > Math.abs(l) ? "x" : "y");
                let c = {
                    x: 0,
                    y: 0
                };
                const u = e => 1 / (1.5 + Math.abs(e) / 20);
                if ("y" === M) {
                    if (i.includes("top") || i.includes("bottom"))
                        if (i.includes("top") && l < 0 || i.includes("bottom") && l > 0) c.y = l;
                        else {
                            const e = l * u(l);
                            c.y = Math.abs(e) < Math.abs(l) ? e : l
                        }
                } else if ("x" === M && (i.includes("left") || i.includes("right")))
                    if (i.includes("left") && o < 0 || i.includes("right") && o > 0) c.x = o;
                    else {
                        const e = o * u(o);
                        c.x = Math.abs(e) < Math.abs(o) ? e : o
                    }(Math.abs(c.x) > 0 || Math.abs(c.y) > 0) && J(!0), null == (r = re.current) || r.style.setProperty("--swipe-amount-x", "".concat(c.x, "px")), null == (a = re.current) || a.style.setProperty("--swipe-amount-y", "".concat(c.y, "px"))
            }
        }, de && !p.jsx && "loading" !== oe ? a.createElement("button", {
            "aria-label": F,
            "data-disabled": ke,
            "data-close-button": !0,
            onClick: ke || !se ? () => {} : () => {
                Se(), null == p.onDismiss || p.onDismiss.call(p, p)
            },
            className: Ea(null == z ? void 0 : z.closeButton, null == p || null == (r = p.classNames) ? void 0 : r.closeButton)
        }, null != (Ee = null == A ? void 0 : A.close) ? Ee : ya) : null, (oe || p.icon || p.promise) && null !== p.icon && (null !== (null == A ? void 0 : A[oe]) || p.icon) ? a.createElement("div", {
            "data-icon": "",
            className: Ea(null == z ? void 0 : z.icon, null == p || null == (l = p.classNames) ? void 0 : l.icon)
        }, p.promise || "loading" === p.type && !p.icon ? p.icon || function() {
            var e, t;
            return (null == A ? void 0 : A.loading) ? a.createElement("div", {
                className: Ea(null == z ? void 0 : z.loader, null == p || null == (t = p.classNames) ? void 0 : t.loader, "sonner-loader"),
                "data-visible": "loading" === oe
            }, A.loading) : a.createElement(fa, {
                className: Ea(null == z ? void 0 : z.loader, null == p || null == (e = p.classNames) ? void 0 : e.loader),
                visible: "loading" === oe
            })
        }() : null, "loading" !== p.type ? Ne : null) : null, a.createElement("div", {
            "data-content": "",
            className: Ea(null == z ? void 0 : z.content, null == p || null == (o = p.classNames) ? void 0 : o.content)
        }, a.createElement("div", {
            "data-title": "",
            className: Ea(null == z ? void 0 : z.title, null == p || null == (s = p.classNames) ? void 0 : s.title)
        }, p.jsx ? p.jsx : "function" === typeof p.title ? p.title() : p.title), p.description ? a.createElement("div", {
            "data-description": "",
            className: Ea(T, ce, null == z ? void 0 : z.description, null == p || null == (i = p.classNames) ? void 0 : i.description)
        }, "function" === typeof p.description ? p.description() : p.description) : null), a.isValidElement(p.cancel) ? p.cancel : p.cancel && Sa(p.cancel) ? a.createElement("button", {
            "data-button": !0,
            "data-cancel": !0,
            style: p.cancelButtonStyle || E,
            onClick: e => {
                Sa(p.cancel) && se && (null == p.cancel.onClick || p.cancel.onClick.call(p.cancel, e), Se())
            },
            className: Ea(null == z ? void 0 : z.cancelButton, null == p || null == (c = p.classNames) ? void 0 : c.cancelButton)
        }, p.cancel.label) : null, a.isValidElement(p.action) ? p.action : p.action && Sa(p.action) ? a.createElement("button", {
            "data-button": !0,
            "data-action": !0,
            style: p.actionButtonStyle || C,
            onClick: e => {
                Sa(p.action) && (null == p.action.onClick || p.action.onClick.call(p.action, e), e.defaultPrevented || Se())
            },
            className: Ea(null == z ? void 0 : z.actionButton, null == p || null == (u = p.classNames) ? void 0 : u.actionButton)
        }, p.action.label) : null)
    };

    function _a() {
        if ("undefined" === typeof window) return "ltr";
        if ("undefined" === typeof document) return "ltr";
        const e = document.documentElement.getAttribute("dir");
        return "auto" !== e && e ? e : window.getComputedStyle(document.documentElement).direction
    }

    function Ta(e, t) {
        const n = {};
        return [e, t].forEach((e, t) => {
            const r = 1 === t,
                a = r ? "--mobile-offset" : "--offset",
                l = r ? "16px" : "24px";

            function o(e) {
                ["top", "right", "bottom", "left"].forEach(t => {
                    n["".concat(a, "-").concat(t)] = "number" === typeof e ? "".concat(e, "px") : e
                })
            }
            "number" === typeof e || "string" === typeof e ? o(e) : "object" === typeof e ? ["top", "right", "bottom", "left"].forEach(t => {
                void 0 === e[t] ? n["".concat(a, "-").concat(t)] = l : n["".concat(a, "-").concat(t)] = "number" === typeof e[t] ? "".concat(e[t], "px") : e[t]
            }) : o(l)
        }), n
    }
    const Ra = a.forwardRef(function(e, t) {
        const {
            id: n,
            invert: r,
            position: l = "bottom-right",
            hotkey: o = ["altKey", "KeyT"],
            expand: s,
            closeButton: i,
            className: c,
            offset: u,
            mobileOffset: d,
            theme: p = "light",
            richColors: m,
            duration: h,
            style: g,
            visibleToasts: y = Na,
            toastOptions: v,
            dir: b = _a(),
            gap: x = ja,
            icons: w,
            containerAriaLabel: k = "Notifications"
        } = e, [S, N] = a.useState([]), j = a.useMemo(() => n ? S.filter(e => e.toasterId === n) : S.filter(e => !e.toasterId), [S, n]), E = a.useMemo(() => Array.from(new Set([l].concat(j.filter(e => e.position).map(e => e.position)))), [j, l]), [C, _] = a.useState([]), [T, R] = a.useState(!1), [P, O] = a.useState(!1), [L, z] = a.useState("system" !== p ? p : "undefined" !== typeof window && window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"), A = a.useRef(null), F = o.join("+").replace(/Key/g, "").replace(/Digit/g, ""), M = a.useRef(null), D = a.useRef(!1), U = a.useCallback(e => {
            N(t => {
                var n;
                return (null == (n = t.find(t => t.id === e.id)) ? void 0 : n.delete) || ba.dismiss(e.id), t.filter(t => {
                    let {
                        id: n
                    } = t;
                    return n !== e.id
                })
            })
        }, []);
        return a.useEffect(() => ba.subscribe(e => {
            e.dismiss ? requestAnimationFrame(() => {
                N(t => t.map(t => t.id === e.id ? f(f({}, t), {}, {
                    delete: !0
                }) : t))
            }) : setTimeout(() => {
                ca.flushSync(() => {
                    N(t => {
                        const n = t.findIndex(t => t.id === e.id);
                        return -1 !== n ? [...t.slice(0, n), f(f({}, t[n]), e), ...t.slice(n + 1)] : [e, ...t]
                    })
                })
            })
        }), [S]), a.useEffect(() => {
            if ("system" !== p) return void z(p);
            if ("system" === p && (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? z("dark") : z("light")), "undefined" === typeof window) return;
            const e = window.matchMedia("(prefers-color-scheme: dark)");
            try {
                e.addEventListener("change", e => {
                    let {
                        matches: t
                    } = e;
                    z(t ? "dark" : "light")
                })
            } catch (t) {
                e.addListener(e => {
                    let {
                        matches: t
                    } = e;
                    try {
                        z(t ? "dark" : "light")
                    } catch (Ll) {
                        console.error(Ll)
                    }
                })
            }
        }, [p]), a.useEffect(() => {
            S.length <= 1 && R(!1)
        }, [S]), a.useEffect(() => {
            const e = e => {
                var t;
                var n;
                o.every(t => e[t] || e.code === t) && (R(!0), null == (n = A.current) || n.focus());
                "Escape" !== e.code || document.activeElement !== A.current && !(null == (t = A.current) ? void 0 : t.contains(document.activeElement)) || R(!1)
            };
            return document.addEventListener("keydown", e), () => document.removeEventListener("keydown", e)
        }, [o]), a.useEffect(() => {
            if (A.current) return () => {
                M.current && (M.current.focus({
                    preventScroll: !0
                }), M.current = null, D.current = !1)
            }
        }, [A.current]), a.createElement("section", {
            ref: t,
            "aria-label": "".concat(k, " ").concat(F),
            tabIndex: -1,
            "aria-live": "polite",
            "aria-relevant": "additions text",
            "aria-atomic": "false",
            suppressHydrationWarning: !0
        }, E.map((t, n) => {
            var l;
            const [o, p] = t.split("-");
            return j.length ? a.createElement("ol", {
                key: t,
                dir: "auto" === b ? _a() : b,
                tabIndex: -1,
                ref: A,
                className: c,
                "data-sonner-toaster": !0,
                "data-sonner-theme": L,
                "data-y-position": o,
                "data-x-position": p,
                style: f(f({
                    "--front-toast-height": "".concat((null == (l = C[0]) ? void 0 : l.height) || 0, "px"),
                    "--width": "".concat(356, "px"),
                    "--gap": "".concat(x, "px")
                }, g), Ta(u, d)),
                onBlur: e => {
                    D.current && !e.currentTarget.contains(e.relatedTarget) && (D.current = !1, M.current && (M.current.focus({
                        preventScroll: !0
                    }), M.current = null))
                },
                onFocus: e => {
                    e.target instanceof HTMLElement && "false" === e.target.dataset.dismissible || D.current || (D.current = !0, M.current = e.relatedTarget)
                },
                onMouseEnter: () => R(!0),
                onMouseMove: () => R(!0),
                onMouseLeave: () => {
                    P || R(!1)
                },
                onDragEnd: () => R(!1),
                onPointerDown: e => {
                    e.target instanceof HTMLElement && "false" === e.target.dataset.dismissible || O(!0)
                },
                onPointerUp: () => O(!1)
            }, j.filter(e => !e.position && 0 === n || e.position === t).map((n, l) => {
                var o, c;
                return a.createElement(Ca, {
                    key: n.id,
                    icons: w,
                    index: l,
                    toast: n,
                    defaultRichColors: m,
                    duration: null != (o = null == v ? void 0 : v.duration) ? o : h,
                    className: null == v ? void 0 : v.className,
                    descriptionClassName: null == v ? void 0 : v.descriptionClassName,
                    invert: r,
                    visibleToasts: y,
                    closeButton: null != (c = null == v ? void 0 : v.closeButton) ? c : i,
                    interacting: P,
                    position: t,
                    style: null == v ? void 0 : v.style,
                    unstyled: null == v ? void 0 : v.unstyled,
                    classNames: null == v ? void 0 : v.classNames,
                    cancelButtonStyle: null == v ? void 0 : v.cancelButtonStyle,
                    actionButtonStyle: null == v ? void 0 : v.actionButtonStyle,
                    closeButtonAriaLabel: null == v ? void 0 : v.closeButtonAriaLabel,
                    removeToast: U,
                    toasts: j.filter(e => e.position == n.position),
                    heights: C.filter(e => e.position == n.position),
                    setHeights: _,
                    expandByDefault: s,
                    gap: x,
                    expanded: T,
                    swipeDirections: e.swipeDirections
                })
            })) : null
        }))
    });
    var Pa = n(579);
    const Oa = e => {
            let t = Object.assign({}, (function(e) {
                if (null == e) throw new TypeError("Cannot destructure " + e)
            }(e), e));
            const {
                theme: n = "system"
            } = (() => {
                var e;
                return null != (e = a.useContext(sa)) ? e : ia
            })();
            return (0, Pa.jsx)(Ra, f({
                theme: n,
                className: "toaster group",
                toastOptions: {
                    classNames: {
                        toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
                        description: "group-[.toast]:text-muted-foreground",
                        actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
                        cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
                    }
                }
            }, t))
        },
        La = e => {
            const t = (e => e.replace(/^([A-Z])|[\s-_]+(\w)/g, (e, t, n) => n ? n.toUpperCase() : t.toLowerCase()))(e);
            return t.charAt(0).toUpperCase() + t.slice(1)
        },
        za = function() {
            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            return t.filter((e, t, n) => Boolean(e) && "" !== e.trim() && n.indexOf(e) === t).join(" ").trim()
        };
    var Aa = {
        xmlns: "http://www.w3.org/2000/svg",
        width: 24,
        height: 24,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: 2,
        strokeLinecap: "round",
        strokeLinejoin: "round"
    };
    const Fa = ["color", "size", "strokeWidth", "absoluteStrokeWidth", "className", "children", "iconNode"],
        Ma = (0, a.forwardRef)((e, t) => {
            let {
                color: n = "currentColor",
                size: r = 24,
                strokeWidth: l = 2,
                absoluteStrokeWidth: o,
                className: i = "",
                children: c,
                iconNode: u
            } = e, d = s(e, Fa);
            return (0, a.createElement)("svg", f(f(f({
                ref: t
            }, Aa), {}, {
                width: r,
                height: r,
                stroke: n,
                strokeWidth: o ? 24 * Number(l) / Number(r) : l,
                className: za("lucide", i)
            }, !c && !(e => {
                for (const t in e)
                    if (t.startsWith("aria-") || "role" === t || "title" === t) return !0
            })(d) && {
                "aria-hidden": "true"
            }), d), [...u.map(e => {
                let [t, n] = e;
                return (0, a.createElement)(t, n)
            }), ...Array.isArray(c) ? c : [c]])
        }),
        Da = ["className"],
        Ua = (e, t) => {
            const n = (0, a.forwardRef)((n, r) => {
                let {
                    className: l
                } = n, o = s(n, Da);
                return (0, a.createElement)(Ma, f({
                    ref: r,
                    iconNode: t,
                    className: za("lucide-".concat((i = La(e), i.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase())), "lucide-".concat(e), l)
                }, o));
                var i
            });
            return n.displayName = La(e), n
        },
        Ia = Ua("book-open", [
            ["path", {
                d: "M12 7v14",
                key: "1akyts"
            }],
            ["path", {
                d: "M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",
                key: "ruj8y"
            }]
        ]),
        Ba = Ua("arrow-right", [
            ["path", {
                d: "M5 12h14",
                key: "1ays0h"
            }],
            ["path", {
                d: "m12 5 7 7-7 7",
                key: "xquz4c"
            }]
        ]),
        Ha = Ua("file-text", [
            ["path", {
                d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",
                key: "1rqfz7"
            }],
            ["path", {
                d: "M14 2v4a2 2 0 0 0 2 2h4",
                key: "tnqrlb"
            }],
            ["path", {
                d: "M10 9H8",
                key: "b1mrlr"
            }],
            ["path", {
                d: "M16 13H8",
                key: "t4e002"
            }],
            ["path", {
                d: "M16 17H8",
                key: "z1uh3a"
            }]
        ]),
        Wa = Ua("shield", [
            ["path", {
                d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
                key: "oel41y"
            }]
        ]),
        qa = Ua("search", [
            ["path", {
                d: "m21 21-4.34-4.34",
                key: "14j7rj"
            }],
            ["circle", {
                cx: "11",
                cy: "11",
                r: "8",
                key: "4ej97u"
            }]
        ]),
        Va = Ua("bell", [
            ["path", {
                d: "M10.268 21a2 2 0 0 0 3.464 0",
                key: "vwvbt9"
            }],
            ["path", {
                d: "M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326",
                key: "11g9vi"
            }]
        ]),
        $a = Ua("upload", [
            ["path", {
                d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",
                key: "ih7n3h"
            }],
            ["polyline", {
                points: "17 8 12 3 7 8",
                key: "t8dd8p"
            }],
            ["line", {
                x1: "12",
                x2: "12",
                y1: "3",
                y2: "15",
                key: "widbto"
            }]
        ]),
        Qa = Ua("users", [
            ["path", {
                d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",
                key: "1yyitq"
            }],
            ["path", {
                d: "M16 3.128a4 4 0 0 1 0 7.744",
                key: "16gr8j"
            }],
            ["path", {
                d: "M22 21v-2a4 4 0 0 0-3-3.87",
                key: "kshegd"
            }],
            ["circle", {
                cx: "9",
                cy: "7",
                r: "4",
                key: "nufk8"
            }]
        ]);

    function Ya() {
        return (0, Pa.jsxs)("div", {
            className: "min-h-screen",
            children: [(0, Pa.jsx)("header", {
                className: "bg-white border-b border-slate-200",
                children: (0, Pa.jsxs)("div", {
                    className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center",
                    children: [(0, Pa.jsxs)("div", {
                        className: "flex items-center gap-3",
                        children: [(0, Pa.jsx)("div", {
                            className: "w-10 h-10 bg-slate-900 rounded-lg flex items-center justify-center",
                            children: (0, Pa.jsx)(Ia, {
                                className: "w-6 h-6 text-white"
                            })
                        }), (0, Pa.jsx)("h1", {
                            className: "text-2xl font-bold text-slate-900",
                            children: "Nexus Academic"
                        })]
                    }), (0, Pa.jsxs)("div", {
                        className: "flex gap-3",
                        children: [(0, Pa.jsx)(Tt, {
                            to: "/login",
                            "data-testid": "header-login-btn",
                            children: (0, Pa.jsx)("button", {
                                className: "text-slate-600 hover:text-slate-900 px-4 py-2 rounded-lg hover:bg-slate-100 font-medium transition-colors",
                                children: "Login"
                            })
                        }), (0, Pa.jsx)(Tt, {
                            to: "/register",
                            "data-testid": "header-register-btn",
                            children: (0, Pa.jsx)("button", {
                                className: "bg-slate-900 text-white hover:bg-slate-800 px-6 py-2.5 rounded-lg font-medium shadow-sm hover:shadow-md transition-all",
                                children: "Get Started"
                            })
                        })]
                    })]
                })
            }), (0, Pa.jsx)("section", {
                className: "relative bg-gradient-to-b from-slate-50 to-white py-20 lg:py-32",
                children: (0, Pa.jsx)("div", {
                    className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
                    children: (0, Pa.jsxs)("div", {
                        className: "grid grid-cols-1 lg:grid-cols-12 gap-12 items-center",
                        children: [(0, Pa.jsxs)("div", {
                            className: "lg:col-span-7",
                            children: [(0, Pa.jsx)("div", {
                                className: "inline-block px-4 py-1.5 bg-orange-50 text-orange-600 rounded-full text-sm font-semibold mb-6",
                                children: "Academic Resource Portal"
                            }), (0, Pa.jsx)("h1", {
                                className: "text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 tracking-tight mb-6",
                                children: "Your Central Hub for Academic Excellence"
                            }), (0, Pa.jsx)("p", {
                                className: "text-lg text-slate-600 leading-relaxed mb-8 max-w-2xl",
                                children: "Access verified study materials, official notices, and collaborate with peers. Everything you need for your academic journey, organized and approved by faculty."
                            }), (0, Pa.jsxs)("div", {
                                className: "flex flex-col sm:flex-row gap-4",
                                children: [(0, Pa.jsx)(Tt, {
                                    to: "/register",
                                    "data-testid": "hero-get-started-btn",
                                    children: (0, Pa.jsxs)("button", {
                                        className: "bg-slate-900 text-white hover:bg-slate-800 px-8 py-3.5 rounded-lg font-semibold shadow-sm hover:shadow-md transition-all flex items-center gap-2 justify-center",
                                        children: ["Get Started ", (0, Pa.jsx)(Ba, {
                                            className: "w-5 h-5"
                                        })]
                                    })
                                }), (0, Pa.jsx)(Tt, {
                                    to: "/login",
                                    "data-testid": "hero-login-btn",
                                    children: (0, Pa.jsx)("button", {
                                        className: "bg-white text-slate-900 border border-slate-200 hover:bg-slate-50 px-8 py-3.5 rounded-lg font-semibold transition-all",
                                        children: "Login to Portal"
                                    })
                                })]
                            })]
                        }), (0, Pa.jsx)("div", {
                            className: "lg:col-span-5",
                            children: (0, Pa.jsx)("div", {
                                className: "relative",
                                children: (0, Pa.jsx)("img", {
                                    src: "hi.jpeg",
                                    alt: "St Aloysius university architecture",
                                    className: "rounded-2xl shadow-2xl w-full h-auto"
                                })
                            })
                        })]
                    })
                })
            }), (0, Pa.jsx)("section", {
                className: "py-20 bg-white",
                children: (0, Pa.jsxs)("div", {
                    className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
                    children: [(0, Pa.jsxs)("div", {
                        className: "text-center mb-16",
                        children: [(0, Pa.jsx)("h2", {
                            className: "text-3xl md:text-4xl font-bold text-slate-900 mb-4",
                            children: "Everything You Need in One Place"
                        }), (0, Pa.jsx)("p", {
                            className: "text-lg text-slate-600 max-w-2xl mx-auto",
                            children: "A comprehensive platform designed for students, faculty, and administrators."
                        })]
                    }), (0, Pa.jsx)("div", {
                        className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",
                        children: [{
                            icon: (0, Pa.jsx)(Ha, {
                                className: "w-8 h-8"
                            }),
                            title: "Smart Repository",
                            description: "Organized by semester, subject, and unit. Find exactly what you need, when you need it."
                        }, {
                            icon: (0, Pa.jsx)(Wa, {
                                className: "w-8 h-8"
                            }),
                            title: "Quality Approved",
                            description: "All student uploads are reviewed by faculty before going live. No spam, only quality content."
                        }, {
                            icon: (0, Pa.jsx)(qa, {
                                className: "w-8 h-8"
                            }),
                            title: "Advanced Search",
                            description: "Filter by subject code, semester, professor, or file type. Lightning-fast results."
                        }, {
                            icon: (0, Pa.jsx)(Va, {
                                className: "w-8 h-8"
                            }),
                            title: "Official Notices",
                            description: "Get department circulars and urgent announcements. Never miss important updates."
                        }, {
                            icon: (0, Pa.jsx)($a, {
                                className: "w-8 h-8"
                            }),
                            title: "Easy Uploads",
                            description: "Share your notes with peers. Support for PDF, PPT, DOC, and images."
                        }, {
                            icon: (0, Pa.jsx)(Qa, {
                                className: "w-8 h-8"
                            }),
                            title: "Role-Based Access",
                            description: "Different dashboards for students, faculty, and admins. Everyone gets what they need."
                        }].map((e, t) => (0, Pa.jsxs)("div", {
                            className: "bg-slate-50 rounded-xl p-8 hover-lift",
                            "data-testid": "feature-card-".concat(t),
                            children: [(0, Pa.jsx)("div", {
                                className: "w-14 h-14 bg-slate-900 rounded-lg flex items-center justify-center text-white mb-6",
                                children: e.icon
                            }), (0, Pa.jsx)("h3", {
                                className: "text-xl font-semibold text-slate-900 mb-3",
                                children: e.title
                            }), (0, Pa.jsx)("p", {
                                className: "text-slate-600 leading-relaxed",
                                children: e.description
                            })]
                        }, t))
                    })]
                })
            }), (0, Pa.jsx)("section", {
                className: "py-20 bg-slate-900",
                children: (0, Pa.jsxs)("div", {
                    className: "max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center",
                    children: [(0, Pa.jsx)("h2", {
                        className: "text-3xl md:text-4xl font-bold text-white mb-6",
                        children: "Ready to Get Started?"
                    }), (0, Pa.jsx)("p", {
                        className: "text-lg text-slate-300 mb-8 max-w-2xl mx-auto",
                        children: "Join your peers and faculty on the platform that's transforming academic resource management."
                    }), (0, Pa.jsx)(Tt, {
                        to: "/register",
                        "data-testid": "cta-register-btn",
                        children: (0, Pa.jsx)("button", {
                            className: "bg-orange-600 text-white hover:bg-orange-500 px-8 py-3.5 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all",
                            children: "Create Your Account"
                        })
                    })]
                })
            }), (0, Pa.jsx)("footer", {
                className: "bg-white border-t border-slate-200 py-8",
                children: (0, Pa.jsx)("div", {
                    className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-slate-600",
                    children: (0, Pa.jsx)("p", {
                        children: "\xa9 2026 Nexus Academic. All rights reserved."
                    })
                })
            })]
        })
    }
    const Ka = Ua("mail", [
            ["path", {
                d: "m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",
                key: "132q7q"
            }],
            ["rect", {
                x: "2",
                y: "4",
                width: "20",
                height: "16",
                rx: "2",
                key: "izxlao"
            }]
        ]),
        Ja = Ua("lock", [
            ["rect", {
                width: "18",
                height: "11",
                x: "3",
                y: "11",
                rx: "2",
                ry: "2",
                key: "1w4ew1"
            }],
            ["path", {
                d: "M7 11V7a5 5 0 0 1 10 0v4",
                key: "fwvmzm"
            }]
        ]),
        Xa = Ua("log-in", [
            ["path", {
                d: "M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4",
                key: "u53s6r"
            }],
            ["polyline", {
                points: "10 17 15 12 10 7",
                key: "1ail0h"
            }],
            ["line", {
                x1: "15",
                x2: "3",
                y1: "12",
                y2: "12",
                key: "v6grx8"
            }]
        ]),
        Ga = "".concat("https://study-hub-196.preview.emergentagent.com", "/api");

    function Za() {
        const [e, t] = (0, a.useState)(""), [n, r] = (0, a.useState)(""), [l, o] = (0, a.useState)(!1), {
            login: s
        } = (0, a.useContext)(Pl), i = Ee();
        return (0, Pa.jsxs)("div", {
            className: "min-h-screen flex",
            children: [(0, Pa.jsx)("div", {
                className: "flex-1 flex items-center justify-center p-8",
                children: (0, Pa.jsxs)("div", {
                    className: "w-full max-w-md",
                    children: [(0, Pa.jsxs)(Tt, {
                        to: "/",
                        className: "flex items-center gap-3 mb-8",
                        "data-testid": "logo-link",
                        children: [(0, Pa.jsx)("div", {
                            className: "w-10 h-10 bg-slate-900 rounded-lg flex items-center justify-center",
                            children: (0, Pa.jsx)(Ia, {
                                className: "w-6 h-6 text-white"
                            })
                        }), (0, Pa.jsx)("h1", {
                            className: "text-2xl font-bold text-slate-900",
                            children: "Nexus Academic"
                        })]
                    }), (0, Pa.jsxs)("div", {
                        className: "mb-8",
                        children: [(0, Pa.jsx)("h2", {
                            className: "text-3xl font-bold text-slate-900 mb-2",
                            children: "Welcome Back"
                        }), (0, Pa.jsx)("p", {
                            className: "text-slate-600",
                            children: "Login to access your academic portal"
                        })]
                    }), (0, Pa.jsxs)("form", {
                        onSubmit: async t => {
                            t.preventDefault(), o(!0);
                            try {
                                const t = await la.post("".concat(Ga, "/auth/login"), {
                                    email: e,
                                    password: n
                                });
                                s(t.data.access_token, t.data.user), ka.success("Login successful!"), i("/".concat(t.data.user.role, "-dashboard"))
                            } catch (l) {
                                var r, a;
                                ka.error((null === (r = l.response) || void 0 === r || null === (a = r.data) || void 0 === a ? void 0 : a.detail) || "Login failed")
                            } finally {
                                o(!1)
                            }
                        },
                        className: "space-y-6",
                        "data-testid": "login-form",
                        children: [(0, Pa.jsxs)("div", {
                            children: [(0, Pa.jsx)("label", {
                                className: "block text-sm font-medium text-slate-700 mb-2",
                                children: "Email Address"
                            }), (0, Pa.jsxs)("div", {
                                className: "relative",
                                children: [(0, Pa.jsx)(Ka, {
                                    className: "absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400"
                                }), (0, Pa.jsx)("input", {
                                    type: "email",
                                    value: e,
                                    onChange: e => t(e.target.value),
                                    className: "w-full pl-11 pr-4 py-2.5 border border-slate-200 rounded-lg focus:ring-2 focus:ring-slate-900 focus:border-transparent",
                                    placeholder: "you@college.edu",
                                    required: !0,
                                    "data-testid": "email-input"
                                })]
                            })]
                        }), (0, Pa.jsxs)("div", {
                            children: [(0, Pa.jsx)("label", {
                                className: "block text-sm font-medium text-slate-700 mb-2",
                                children: "Password"
                            }), (0, Pa.jsxs)("div", {
                                className: "relative",
                                children: [(0, Pa.jsx)(Ja, {
                                    className: "absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400"
                                }), (0, Pa.jsx)("input", {
                                    type: "password",
                                    value: n,
                                    onChange: e => r(e.target.value),
                                    className: "w-full pl-11 pr-4 py-2.5 border border-slate-200 rounded-lg focus:ring-2 focus:ring-slate-900 focus:border-transparent",
                                    placeholder: "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022",
                                    required: !0,
                                    "data-testid": "password-input"
                                })]
                            })]
                        }), (0, Pa.jsx)("button", {
                            type: "submit",
                            disabled: l,
                            className: "w-full bg-slate-900 text-white hover:bg-slate-800 py-3 rounded-lg font-semibold shadow-sm hover:shadow-md transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2",
                            "data-testid": "login-submit-btn",
                            children: l ? "Logging in..." : (0, Pa.jsxs)(Pa.Fragment, {
                                children: [(0, Pa.jsx)(Xa, {
                                    className: "w-5 h-5"
                                }), "Login"]
                            })
                        })]
                    }), (0, Pa.jsxs)("p", {
                        className: "mt-6 text-center text-slate-600",
                        children: ["Don't have an account?", " ", (0, Pa.jsx)(Tt, {
                            to: "/register",
                            className: "text-orange-600 hover:text-orange-700 font-semibold",
                            "data-testid": "register-link",
                            children: "Register here"
                        })]
                    })]
                })
            }), (0, Pa.jsxs)("div", {
                className: "hidden lg:block flex-1 relative",
                children: [(0, Pa.jsx)("img", {
                    src: "https://images.pexels.com/photos/6283211/pexels-photo-6283211.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
                    alt: "Students collaborating",
                    className: "absolute inset-0 w-full h-full object-cover"
                }), (0, Pa.jsx)("div", {
                    className: "absolute inset-0 bg-slate-900/50 flex items-center justify-center p-12",
                    children: (0, Pa.jsxs)("div", {
                        className: "text-white text-center",
                        children: [(0, Pa.jsx)("h3", {
                            className: "text-3xl font-bold mb-4",
                            children: "Access Your Academic Hub"
                        }), (0, Pa.jsx)("p", {
                            className: "text-lg text-slate-200",
                            children: "Your gateway to organized learning resources and official updates"
                        })]
                    })
                })]
            })]
        })
    }
    const el = Ua("user", [
            ["path", {
                d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",
                key: "975kel"
            }],
            ["circle", {
                cx: "12",
                cy: "7",
                r: "4",
                key: "17ys0d"
            }]
        ]),
        tl = Ua("circle-user", [
            ["circle", {
                cx: "12",
                cy: "12",
                r: "10",
                key: "1mglay"
            }],
            ["circle", {
                cx: "12",
                cy: "10",
                r: "3",
                key: "ilqhr7"
            }],
            ["path", {
                d: "M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662",
                key: "154egf"
            }]
        ]),
        nl = Ua("graduation-cap", [
            ["path", {
                d: "M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",
                key: "j76jl0"
            }],
            ["path", {
                d: "M22 10v6",
                key: "1lu8f3"
            }],
            ["path", {
                d: "M6 12.5V16a6 3 0 0 0 12 0v-3.5",
                key: "1r8lef"
            }]
        ]),
        rl = "".concat("https://study-hub-196.preview.emergentagent.com", "/api");

    function al() {
        const [e, t] = (0, a.useState)({
            name: "",
            email: "",
            password: "",
            role: "student",
            usn: "",
            semester: ""
        }), [n, r] = (0, a.useState)(!1), l = Ee(), o = n => {
            t(f(f({}, e), {}, {
                [n.target.name]: n.target.value
            }))
        };
        return (0, Pa.jsxs)("div", {
            className: "min-h-screen flex",
            children: [(0, Pa.jsxs)("div", {
                className: "hidden lg:block flex-1 relative",
                children: [(0, Pa.jsx)("img", {
                    src: "https://images.pexels.com/photos/8199765/pexels-photo-8199765.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
                    alt: "Student focused",
                    className: "absolute inset-0 w-full h-full object-cover"
                }), (0, Pa.jsx)("div", {
                    className: "absolute inset-0 bg-slate-900/50 flex items-center justify-center p-12",
                    children: (0, Pa.jsxs)("div", {
                        className: "text-white text-center",
                        children: [(0, Pa.jsx)("h3", {
                            className: "text-3xl font-bold mb-4",
                            children: "Join Nexus Academic"
                        }), (0, Pa.jsx)("p", {
                            className: "text-lg text-slate-200",
                            children: "Create your account and start accessing verified study materials"
                        })]
                    })
                })]
            }), (0, Pa.jsx)("div", {
                className: "flex-1 flex items-center justify-center p-8 overflow-y-auto",
                children: (0, Pa.jsxs)("div", {
                    className: "w-full max-w-md",
                    children: [(0, Pa.jsxs)(Tt, {
                        to: "/",
                        className: "flex items-center gap-3 mb-8",
                        "data-testid": "logo-link",
                        children: [(0, Pa.jsx)("div", {
                            className: "w-10 h-10 bg-slate-900 rounded-lg flex items-center justify-center",
                            children: (0, Pa.jsx)(Ia, {
                                className: "w-6 h-6 text-white"
                            })
                        }), (0, Pa.jsx)("h1", {
                            className: "text-2xl font-bold text-slate-900",
                            children: "Nexus Academic"
                        })]
                    }), (0, Pa.jsxs)("div", {
                        className: "mb-8",
                        children: [(0, Pa.jsx)("h2", {
                            className: "text-3xl font-bold text-slate-900 mb-2",
                            children: "Create Account"
                        }), (0, Pa.jsx)("p", {
                            className: "text-slate-600",
                            children: "Get started with your academic portal"
                        })]
                    }), (0, Pa.jsxs)("form", {
                        onSubmit: async t => {
                            t.preventDefault(), r(!0);
                            try {
                                const t = {
                                    name: e.name,
                                    email: e.email,
                                    password: e.password,
                                    role: e.role
                                };
                                "student" === e.role && (t.usn = e.usn, t.semester = parseInt(e.semester));
                                const n = await la.post("".concat(rl, "/auth/register"), t);
                                ka.success("Registration successful!"), localStorage.setItem("token", n.data.access_token), la.defaults.headers.common.Authorization = "Bearer ".concat(n.data.access_token), l("/".concat(n.data.user.role, "-dashboard"))
                            } catch (o) {
                                var n, a;
                                ka.error((null === (n = o.response) || void 0 === n || null === (a = n.data) || void 0 === a ? void 0 : a.detail) || "Registration failed")
                            } finally {
                                r(!1)
                            }
                        },
                        className: "space-y-5",
                        "data-testid": "register-form",
                        children: [(0, Pa.jsxs)("div", {
                            children: [(0, Pa.jsx)("label", {
                                className: "block text-sm font-medium text-slate-700 mb-2",
                                children: "I am a"
                            }), (0, Pa.jsx)("div", {
                                className: "grid grid-cols-3 gap-3",
                                children: ["student", "faculty", "admin"].map(n => (0, Pa.jsx)("button", {
                                    type: "button",
                                    onClick: () => t(f(f({}, e), {}, {
                                        role: n
                                    })),
                                    className: "py-2.5 px-4 rounded-lg border-2 font-medium transition-all capitalize ".concat(e.role === n ? "border-slate-900 bg-slate-900 text-white" : "border-slate-200 text-slate-700 hover:border-slate-300"),
                                    "data-testid": "role-".concat(n, "-btn"),
                                    children: n
                                }, n))
                            })]
                        }), (0, Pa.jsxs)("div", {
                            children: [(0, Pa.jsx)("label", {
                                className: "block text-sm font-medium text-slate-700 mb-2",
                                children: "Full Name"
                            }), (0, Pa.jsxs)("div", {
                                className: "relative",
                                children: [(0, Pa.jsx)(el, {
                                    className: "absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400"
                                }), (0, Pa.jsx)("input", {
                                    type: "text",
                                    name: "name",
                                    value: e.name,
                                    onChange: o,
                                    className: "w-full pl-11 pr-4 py-2.5 border border-slate-200 rounded-lg focus:ring-2 focus:ring-slate-900 focus:border-transparent",
                                    placeholder: "John Doe",
                                    required: !0,
                                    "data-testid": "name-input"
                                })]
                            })]
                        }), (0, Pa.jsxs)("div", {
                            children: [(0, Pa.jsx)("label", {
                                className: "block text-sm font-medium text-slate-700 mb-2",
                                children: "Email Address"
                            }), (0, Pa.jsxs)("div", {
                                className: "relative",
                                children: [(0, Pa.jsx)(Ka, {
                                    className: "absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400"
                                }), (0, Pa.jsx)("input", {
                                    type: "email",
                                    name: "email",
                                    value: e.email,
                                    onChange: o,
                                    className: "w-full pl-11 pr-4 py-2.5 border border-slate-200 rounded-lg focus:ring-2 focus:ring-slate-900 focus:border-transparent",
                                    placeholder: "you@college.edu",
                                    required: !0,
                                    "data-testid": "email-input"
                                })]
                            })]
                        }), (0, Pa.jsxs)("div", {
                            children: [(0, Pa.jsx)("label", {
                                className: "block text-sm font-medium text-slate-700 mb-2",
                                children: "Password"
                            }), (0, Pa.jsxs)("div", {
                                className: "relative",
                                children: [(0, Pa.jsx)(Ja, {
                                    className: "absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400"
                                }), (0, Pa.jsx)("input", {
                                    type: "password",
                                    name: "password",
                                    value: e.password,
                                    onChange: o,
                                    className: "w-full pl-11 pr-4 py-2.5 border border-slate-200 rounded-lg focus:ring-2 focus:ring-slate-900 focus:border-transparent",
                                    placeholder: "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022",
                                    required: !0,
                                    minLength: 6,
                                    "data-testid": "password-input"
                                })]
                            })]
                        }), "student" === e.role && (0, Pa.jsxs)(Pa.Fragment, {
                            children: [(0, Pa.jsxs)("div", {
                                children: [(0, Pa.jsx)("label", {
                                    className: "block text-sm font-medium text-slate-700 mb-2",
                                    children: "USN (University Seat Number)"
                                }), (0, Pa.jsxs)("div", {
                                    className: "relative",
                                    children: [(0, Pa.jsx)(tl, {
                                        className: "absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400"
                                    }), (0, Pa.jsx)("input", {
                                        type: "text",
                                        name: "usn",
                                        value: e.usn,
                                        onChange: o,
                                        className: "w-full pl-11 pr-4 py-2.5 border border-slate-200 rounded-lg focus:ring-2 focus:ring-slate-900 focus:border-transparent",
                                        placeholder: "1MS22CS001",
                                        required: "student" === e.role,
                                        "data-testid": "usn-input"
                                    })]
                                })]
                            }), (0, Pa.jsxs)("div", {
                                children: [(0, Pa.jsx)("label", {
                                    className: "block text-sm font-medium text-slate-700 mb-2",
                                    children: "Semester"
                                }), (0, Pa.jsxs)("div", {
                                    className: "relative",
                                    children: [(0, Pa.jsx)(nl, {
                                        className: "absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400"
                                    }), (0, Pa.jsxs)("select", {
                                        name: "semester",
                                        value: e.semester,
                                        onChange: o,
                                        className: "w-full pl-11 pr-4 py-2.5 border border-slate-200 rounded-lg focus:ring-2 focus:ring-slate-900 focus:border-transparent appearance-none",
                                        required: "student" === e.role,
                                        "data-testid": "semester-select",
                                        children: [(0, Pa.jsx)("option", {
                                            value: "",
                                            children: "Select Semester"
                                        }), [1, 2, 3, 4, 5, 6, 7, 8].map(e => (0, Pa.jsxs)("option", {
                                            value: e,
                                            children: [e, 1 === e ? "st" : 2 === e ? "nd" : 3 === e ? "rd" : "th", " Semester"]
                                        }, e))]
                                    })]
                                })]
                            })]
                        }), (0, Pa.jsx)("button", {
                            type: "submit",
                            disabled: n,
                            className: "w-full bg-slate-900 text-white hover:bg-slate-800 py-3 rounded-lg font-semibold shadow-sm hover:shadow-md transition-all disabled:opacity-50 disabled:cursor-not-allowed",
                            "data-testid": "register-submit-btn",
                            children: n ? "Creating Account..." : "Create Account"
                        })]
                    }), (0, Pa.jsxs)("p", {
                        className: "mt-6 text-center text-slate-600",
                        children: ["Already have an account?", " ", (0, Pa.jsx)(Tt, {
                            to: "/login",
                            className: "text-orange-600 hover:text-orange-700 font-semibold",
                            "data-testid": "login-link",
                            children: "Login here"
                        })]
                    })]
                })
            })]
        })
    }
    const ll = Ua("layout-dashboard", [
            ["rect", {
                width: "7",
                height: "9",
                x: "3",
                y: "3",
                rx: "1",
                key: "10lvy0"
            }],
            ["rect", {
                width: "7",
                height: "5",
                x: "14",
                y: "3",
                rx: "1",
                key: "16une8"
            }],
            ["rect", {
                width: "7",
                height: "9",
                x: "14",
                y: "12",
                rx: "1",
                key: "1hutg5"
            }],
            ["rect", {
                width: "7",
                height: "5",
                x: "3",
                y: "16",
                rx: "1",
                key: "ldoo1y"
            }]
        ]),
        ol = Ua("library", [
            ["path", {
                d: "m16 6 4 14",
                key: "ji33uf"
            }],
            ["path", {
                d: "M12 6v14",
                key: "1n7gus"
            }],
            ["path", {
                d: "M8 8v12",
                key: "1gg7y9"
            }],
            ["path", {
                d: "M4 4v16",
                key: "6qkkli"
            }]
        ]),
        sl = Ua("log-out", [
            ["path", {
                d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",
                key: "1uf3rs"
            }],
            ["polyline", {
                points: "16 17 21 12 16 7",
                key: "1gabdz"
            }],
            ["line", {
                x1: "21",
                x2: "9",
                y1: "12",
                y2: "12",
                key: "1uyos4"
            }]
        ]);

    function il(e) {
        let {
            children: t
        } = e;
        const {
            user: n,
            logout: r
        } = (0, a.useContext)(Pl), l = Se(), o = Ee(), s = [{
            name: "Dashboard",
            href: "/".concat(null === n || void 0 === n ? void 0 : n.role, "-dashboard"),
            icon: ll
        }, {
            name: "Repository",
            href: "/repository",
            icon: ol
        }, {
            name: "Notices",
            href: "/notices",
            icon: Va
        }, {
            name: "Profile",
            href: "/profile",
            icon: el
        }];
        return (0, Pa.jsxs)("div", {
            className: "min-h-screen bg-slate-50",
            children: [(0, Pa.jsx)("header", {
                className: "bg-white border-b border-slate-200 sticky top-0 z-10",
                children: (0, Pa.jsx)("div", {
                    className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
                    children: (0, Pa.jsxs)("div", {
                        className: "flex items-center justify-between h-16",
                        children: [(0, Pa.jsxs)("div", {
                            className: "flex items-center gap-3",
                            children: [(0, Pa.jsx)("div", {
                                className: "w-10 h-10 bg-slate-900 rounded-lg flex items-center justify-center",
                                children: (0, Pa.jsx)(Ia, {
                                    className: "w-6 h-6 text-white"
                                })
                            }), (0, Pa.jsxs)("div", {
                                children: [(0, Pa.jsx)("h1", {
                                    className: "text-xl font-bold text-slate-900",
                                    children: "Nexus Academic"
                                }), (0, Pa.jsxs)("p", {
                                    className: "text-xs text-slate-500 capitalize",
                                    children: [null === n || void 0 === n ? void 0 : n.role, " Portal"]
                                })]
                            })]
                        }), (0, Pa.jsxs)("div", {
                            className: "flex items-center gap-4",
                            children: [(0, Pa.jsxs)("div", {
                                className: "hidden md:block text-right",
                                children: [(0, Pa.jsx)("p", {
                                    className: "text-sm font-medium text-slate-900",
                                    children: null === n || void 0 === n ? void 0 : n.name
                                }), (0, Pa.jsx)("p", {
                                    className: "text-xs text-slate-500",
                                    children: null === n || void 0 === n ? void 0 : n.email
                                })]
                            }), (0, Pa.jsxs)("button", {
                                onClick: () => {
                                    r(), o("/login")
                                },
                                className: "flex items-center gap-2 px-4 py-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors",
                                "data-testid": "logout-btn",
                                children: [(0, Pa.jsx)(sl, {
                                    className: "w-5 h-5"
                                }), (0, Pa.jsx)("span", {
                                    className: "hidden sm:inline",
                                    children: "Logout"
                                })]
                            })]
                        })]
                    })
                })
            }), (0, Pa.jsx)("div", {
                className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8",
                children: (0, Pa.jsxs)("div", {
                    className: "flex gap-8",
                    children: [(0, Pa.jsxs)("aside", {
                        className: "hidden lg:block w-64 flex-shrink-0",
                        children: [(0, Pa.jsx)("nav", {
                            className: "space-y-1",
                            children: s.map(e => {
                                const t = e.icon,
                                    n = l.pathname === e.href;
                                return (0, Pa.jsxs)(Tt, {
                                    to: e.href,
                                    className: "flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-colors ".concat(n ? "bg-slate-900 text-white" : "text-slate-600 hover:bg-white hover:text-slate-900"),
                                    "data-testid": "nav-".concat(e.name.toLowerCase()),
                                    children: [(0, Pa.jsx)(t, {
                                        className: "w-5 h-5"
                                    }), e.name]
                                }, e.name)
                            })
                        }), ("student" === (null === n || void 0 === n ? void 0 : n.role) || "faculty" === (null === n || void 0 === n ? void 0 : n.role)) && (0, Pa.jsxs)("div", {
                            className: "mt-6 p-4 bg-orange-50 border border-orange-200 rounded-lg",
                            children: [(0, Pa.jsxs)("h3", {
                                className: "font-semibold text-slate-900 mb-2 flex items-center gap-2",
                                children: [(0, Pa.jsx)($a, {
                                    className: "w-4 h-4"
                                }), "Quick Upload"]
                            }), (0, Pa.jsx)("p", {
                                className: "text-sm text-slate-600 mb-3",
                                children: "Share your notes with the community"
                            }), (0, Pa.jsx)(Tt, {
                                to: "/repository",
                                children: (0, Pa.jsx)("button", {
                                    className: "w-full bg-slate-900 text-white hover:bg-slate-800 py-2 rounded-lg text-sm font-medium transition-colors",
                                    "data-testid": "quick-upload-btn",
                                    children: "Upload File"
                                })
                            })]
                        })]
                    }), (0, Pa.jsx)("main", {
                        className: "flex-1 min-w-0",
                        children: t
                    })]
                })
            }), (0, Pa.jsx)("nav", {
                className: "lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 z-10",
                children: (0, Pa.jsx)("div", {
                    className: "grid grid-cols-4 gap-1 p-2",
                    children: s.map(e => {
                        const t = e.icon,
                            n = l.pathname === e.href;
                        return (0, Pa.jsxs)(Tt, {
                            to: e.href,
                            className: "flex flex-col items-center gap-1 py-2 px-3 rounded-lg text-xs font-medium transition-colors ".concat(n ? "bg-slate-900 text-white" : "text-slate-600"),
                            children: [(0, Pa.jsx)(t, {
                                className: "w-5 h-5"
                            }), e.name]
                        }, e.name)
                    })
                })
            })]
        })
    }
    const cl = Ua("clock", [
            ["circle", {
                cx: "12",
                cy: "12",
                r: "10",
                key: "1mglay"
            }],
            ["polyline", {
                points: "12 6 12 12 16 14",
                key: "68esgv"
            }]
        ]),
        ul = Ua("circle-check-big", [
            ["path", {
                d: "M21.801 10A10 10 0 1 1 17 3.335",
                key: "yps3ct"
            }],
            ["path", {
                d: "m9 11 3 3L22 4",
                key: "1pflzl"
            }]
        ]),
        dl = Ua("circle-x", [
            ["circle", {
                cx: "12",
                cy: "12",
                r: "10",
                key: "1mglay"
            }],
            ["path", {
                d: "m15 9-6 6",
                key: "1uzhvr"
            }],
            ["path", {
                d: "m9 9 6 6",
                key: "z0biqf"
            }]
        ]),
        fl = Ua("download", [
            ["path", {
                d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",
                key: "ih7n3h"
            }],
            ["polyline", {
                points: "7 10 12 15 17 10",
                key: "2ggqvy"
            }],
            ["line", {
                x1: "12",
                x2: "12",
                y1: "15",
                y2: "3",
                key: "1vk2je"
            }]
        ]),
        pl = "".concat("https://study-hub-196.preview.emergentagent.com", "/api");

    function ml() {
        const {
            user: e
        } = (0, a.useContext)(Pl), [t, n] = (0, a.useState)(null), [r, l] = (0, a.useState)([]), [o, s] = (0, a.useState)([]), [i, c] = (0, a.useState)([]), [u, d] = (0, a.useState)(!0);
        (0, a.useEffect)(() => {
            f()
        }, []);
        const f = async () => {
                try {
                    const [e, t, r, a] = await Promise.all([la.get("".concat(pl, "/stats")), la.get("".concat(pl, "/files?status_filter=my_uploads")), la.get("".concat(pl, "/files")), la.get("".concat(pl, "/notices"))]);
                    n(e.data), l(t.data.slice(0, 5)), s(r.data.slice(0, 6)), c(a.data.slice(0, 3))
                } catch (e) {
                    ka.error("Failed to load dashboard data")
                } finally {
                    d(!1)
                }
            },
            p = e => {
                const t = {
                        pending: {
                            icon: cl,
                            color: "bg-yellow-100 text-yellow-700",
                            text: "Pending"
                        },
                        approved: {
                            icon: ul,
                            color: "bg-green-100 text-green-700",
                            text: "Approved"
                        },
                        rejected: {
                            icon: dl,
                            color: "bg-red-100 text-red-700",
                            text: "Rejected"
                        }
                    }[e],
                    n = t.icon;
                return (0, Pa.jsxs)("span", {
                    className: "inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold ".concat(t.color),
                    children: [(0, Pa.jsx)(n, {
                        className: "w-3 h-3"
                    }), t.text]
                })
            },
            m = e => {
                const t = new Date(e);
                return (new Date - t) / 36e5 < 24
            };
        return u ? (0, Pa.jsx)(il, {
            children: (0, Pa.jsx)("div", {
                className: "flex items-center justify-center h-96",
                children: (0, Pa.jsx)("div", {
                    className: "text-lg font-medium text-slate-600",
                    children: "Loading..."
                })
            })
        }) : (0, Pa.jsx)(il, {
            children: (0, Pa.jsxs)("div", {
                className: "space-y-8",
                "data-testid": "student-dashboard",
                children: [(0, Pa.jsxs)("div", {
                    children: [(0, Pa.jsxs)("h1", {
                        className: "text-3xl font-bold text-slate-900",
                        children: ["Welcome back, ", null === e || void 0 === e ? void 0 : e.name, "!"]
                    }), (0, Pa.jsxs)("p", {
                        className: "text-slate-600 mt-2",
                        children: ["Semester ", null === e || void 0 === e ? void 0 : e.semester, " | USN: ", null === e || void 0 === e ? void 0 : e.usn]
                    })]
                }), (0, Pa.jsxs)("div", {
                    className: "grid grid-cols-1 md:grid-cols-3 gap-6",
                    children: [(0, Pa.jsx)("div", {
                        className: "bg-white rounded-xl border border-slate-200 p-6",
                        "data-testid": "total-files-stat",
                        children: (0, Pa.jsxs)("div", {
                            className: "flex items-center justify-between",
                            children: [(0, Pa.jsxs)("div", {
                                children: [(0, Pa.jsx)("p", {
                                    className: "text-sm text-slate-600 mb-1",
                                    children: "Total Resources"
                                }), (0, Pa.jsx)("p", {
                                    className: "text-3xl font-bold text-slate-900",
                                    children: (null === t || void 0 === t ? void 0 : t.total_files) || 0
                                })]
                            }), (0, Pa.jsx)("div", {
                                className: "w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center",
                                children: (0, Pa.jsx)(Ha, {
                                    className: "w-6 h-6 text-slate-600"
                                })
                            })]
                        })
                    }), (0, Pa.jsx)("div", {
                        className: "bg-white rounded-xl border border-slate-200 p-6",
                        "data-testid": "my-uploads-stat",
                        children: (0, Pa.jsxs)("div", {
                            className: "flex items-center justify-between",
                            children: [(0, Pa.jsxs)("div", {
                                children: [(0, Pa.jsx)("p", {
                                    className: "text-sm text-slate-600 mb-1",
                                    children: "My Uploads"
                                }), (0, Pa.jsx)("p", {
                                    className: "text-3xl font-bold text-slate-900",
                                    children: (null === t || void 0 === t ? void 0 : t.my_uploads) || 0
                                })]
                            }), (0, Pa.jsx)("div", {
                                className: "w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center",
                                children: (0, Pa.jsx)($a, {
                                    className: "w-6 h-6 text-blue-600"
                                })
                            })]
                        })
                    }), (0, Pa.jsx)("div", {
                        className: "bg-white rounded-xl border border-slate-200 p-6",
                        "data-testid": "notices-stat",
                        children: (0, Pa.jsxs)("div", {
                            className: "flex items-center justify-between",
                            children: [(0, Pa.jsxs)("div", {
                                children: [(0, Pa.jsx)("p", {
                                    className: "text-sm text-slate-600 mb-1",
                                    children: "Active Notices"
                                }), (0, Pa.jsx)("p", {
                                    className: "text-3xl font-bold text-slate-900",
                                    children: (null === t || void 0 === t ? void 0 : t.total_notices) || 0
                                })]
                            }), (0, Pa.jsx)("div", {
                                className: "w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center",
                                children: (0, Pa.jsx)(Ha, {
                                    className: "w-6 h-6 text-orange-600"
                                })
                            })]
                        })
                    })]
                }), (0, Pa.jsxs)("div", {
                    className: "grid grid-cols-1 lg:grid-cols-3 gap-6",
                    children: [(0, Pa.jsxs)("div", {
                        className: "lg:col-span-2 bg-white rounded-xl border border-slate-200 p-6",
                        children: [(0, Pa.jsxs)("div", {
                            className: "flex items-center justify-between mb-6",
                            children: [(0, Pa.jsx)("h2", {
                                className: "text-xl font-semibold text-slate-900",
                                children: "Recent Resources"
                            }), (0, Pa.jsx)(Tt, {
                                to: "/repository",
                                className: "text-sm text-orange-600 hover:text-orange-700 font-medium",
                                "data-testid": "view-all-link",
                                children: "View All"
                            })]
                        }), (0, Pa.jsx)("div", {
                            className: "space-y-3",
                            children: 0 === o.length ? (0, Pa.jsx)("p", {
                                className: "text-slate-500 text-center py-8",
                                children: "No resources available yet"
                            }) : o.map(e => (0, Pa.jsxs)("div", {
                                className: "flex items-center justify-between p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors",
                                "data-testid": "file-item-".concat(e.id),
                                children: [(0, Pa.jsxs)("div", {
                                    className: "flex items-center gap-3 flex-1",
                                    children: [(0, Pa.jsx)("div", {
                                        className: "w-10 h-10 bg-white rounded-lg flex items-center justify-center border border-slate-200",
                                        children: (0, Pa.jsx)(Ha, {
                                            className: "w-5 h-5 text-slate-600"
                                        })
                                    }), (0, Pa.jsxs)("div", {
                                        className: "flex-1 min-w-0",
                                        children: [(0, Pa.jsx)("p", {
                                            className: "font-medium text-slate-900 truncate",
                                            children: e.original_filename
                                        }), (0, Pa.jsxs)("p", {
                                            className: "text-sm text-slate-600",
                                            children: [e.subject_code, " | ", e.uploader_name]
                                        })]
                                    })]
                                }), (0, Pa.jsx)("button", {
                                    onClick: () => (async (e, t) => {
                                        try {
                                            const n = await la.get("".concat(pl, "/files/").concat(e, "/download"), {
                                                    responseType: "blob"
                                                }),
                                                r = window.URL.createObjectURL(new Blob([n.data])),
                                                a = document.createElement("a");
                                            a.href = r, a.setAttribute("download", t), document.body.appendChild(a), a.click(), a.remove(), ka.success("File downloaded successfully")
                                        } catch (n) {
                                            ka.error("Failed to download file")
                                        }
                                    })(e.id, e.original_filename),
                                    className: "text-slate-600 hover:text-slate-900 p-2 hover:bg-white rounded-lg transition-colors",
                                    "data-testid": "download-btn-".concat(e.id),
                                    children: (0, Pa.jsx)(fl, {
                                        className: "w-5 h-5"
                                    })
                                })]
                            }, e.id))
                        })]
                    }), (0, Pa.jsxs)("div", {
                        className: "bg-white rounded-xl border border-slate-200 p-6",
                        children: [(0, Pa.jsxs)("div", {
                            className: "flex items-center justify-between mb-6",
                            children: [(0, Pa.jsx)("h2", {
                                className: "text-xl font-semibold text-slate-900",
                                children: "Latest Notices"
                            }), (0, Pa.jsx)(Tt, {
                                to: "/notices",
                                className: "text-sm text-orange-600 hover:text-orange-700 font-medium",
                                "data-testid": "view-notices-link",
                                children: "View All"
                            })]
                        }), (0, Pa.jsx)("div", {
                            className: "space-y-4",
                            children: 0 === i.length ? (0, Pa.jsx)("p", {
                                className: "text-slate-500 text-center py-8",
                                children: "No notices yet"
                            }) : i.map(e => (0, Pa.jsxs)("div", {
                                className: "pb-4 border-b border-slate-100 last:border-0",
                                "data-testid": "notice-item-".concat(e.id),
                                children: [(0, Pa.jsxs)("div", {
                                    className: "flex items-start gap-2 mb-2",
                                    children: [(0, Pa.jsx)("h3", {
                                        className: "font-medium text-slate-900 flex-1",
                                        children: e.title
                                    }), m(e.created_at) && (0, Pa.jsx)("span", {
                                        className: "px-2 py-0.5 bg-orange-100 text-orange-600 text-xs font-semibold rounded",
                                        children: "NEW"
                                    })]
                                }), (0, Pa.jsx)("p", {
                                    className: "text-sm text-slate-600 mb-2 line-clamp-2",
                                    children: e.content
                                }), (0, Pa.jsxs)("p", {
                                    className: "text-xs text-slate-500",
                                    children: ["By ", e.creator_name]
                                })]
                            }, e.id))
                        })]
                    })]
                }), r.length > 0 && (0, Pa.jsxs)("div", {
                    className: "bg-white rounded-xl border border-slate-200 p-6",
                    children: [(0, Pa.jsx)("h2", {
                        className: "text-xl font-semibold text-slate-900 mb-6",
                        children: "My Recent Uploads"
                    }), (0, Pa.jsx)("div", {
                        className: "space-y-3",
                        children: r.map(e => (0, Pa.jsxs)("div", {
                            className: "flex items-center justify-between p-4 bg-slate-50 rounded-lg",
                            "data-testid": "my-upload-".concat(e.id),
                            children: [(0, Pa.jsxs)("div", {
                                className: "flex items-center gap-3 flex-1",
                                children: [(0, Pa.jsx)("div", {
                                    className: "w-10 h-10 bg-white rounded-lg flex items-center justify-center border border-slate-200",
                                    children: (0, Pa.jsx)(Ha, {
                                        className: "w-5 h-5 text-slate-600"
                                    })
                                }), (0, Pa.jsxs)("div", {
                                    className: "flex-1",
                                    children: [(0, Pa.jsx)("p", {
                                        className: "font-medium text-slate-900",
                                        children: e.original_filename
                                    }), (0, Pa.jsxs)("p", {
                                        className: "text-sm text-slate-600",
                                        children: [e.subject_code, " | Semester ", e.semester]
                                    })]
                                })]
                            }), p(e.status)]
                        }, e.id))
                    })]
                })]
            })
        })
    }
    const hl = Ua("eye", [
            ["path", {
                d: "M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",
                key: "1nclc0"
            }],
            ["circle", {
                cx: "12",
                cy: "12",
                r: "3",
                key: "1v7zrd"
            }]
        ]),
        gl = "".concat("https://study-hub-196.preview.emergentagent.com", "/api");

    function yl() {
        const {
            user: e
        } = (0, a.useContext)(Pl), [t, n] = (0, a.useState)(null), [r, l] = (0, a.useState)([]), [o, s] = (0, a.useState)(!0);
        (0, a.useEffect)(() => {
            i()
        }, []);
        const i = async () => {
            try {
                const [e, t] = await Promise.all([la.get("".concat(gl, "/stats")), la.get("".concat(gl, "/files?status_filter=pending"))]);
                n(e.data), l(t.data)
            } catch (e) {
                ka.error("Failed to load dashboard data")
            } finally {
                s(!1)
            }
        };
        return o ? (0, Pa.jsx)(il, {
            children: (0, Pa.jsx)("div", {
                className: "flex items-center justify-center h-96",
                children: (0, Pa.jsx)("div", {
                    className: "text-lg font-medium text-slate-600",
                    children: "Loading..."
                })
            })
        }) : (0, Pa.jsx)(il, {
            children: (0, Pa.jsxs)("div", {
                className: "space-y-8",
                "data-testid": "faculty-dashboard",
                children: [(0, Pa.jsxs)("div", {
                    children: [(0, Pa.jsx)("h1", {
                        className: "text-3xl font-bold text-slate-900",
                        children: "Faculty Dashboard"
                    }), (0, Pa.jsxs)("p", {
                        className: "text-slate-600 mt-2",
                        children: ["Welcome, Prof. ", null === e || void 0 === e ? void 0 : e.name]
                    })]
                }), (0, Pa.jsxs)("div", {
                    className: "grid grid-cols-1 md:grid-cols-3 gap-6",
                    children: [(0, Pa.jsx)("div", {
                        className: "bg-white rounded-xl border border-slate-200 p-6",
                        "data-testid": "total-files-stat",
                        children: (0, Pa.jsxs)("div", {
                            className: "flex items-center justify-between",
                            children: [(0, Pa.jsxs)("div", {
                                children: [(0, Pa.jsx)("p", {
                                    className: "text-sm text-slate-600 mb-1",
                                    children: "Total Resources"
                                }), (0, Pa.jsx)("p", {
                                    className: "text-3xl font-bold text-slate-900",
                                    children: (null === t || void 0 === t ? void 0 : t.total_files) || 0
                                })]
                            }), (0, Pa.jsx)("div", {
                                className: "w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center",
                                children: (0, Pa.jsx)(Ha, {
                                    className: "w-6 h-6 text-slate-600"
                                })
                            })]
                        })
                    }), (0, Pa.jsx)("div", {
                        className: "bg-white rounded-xl border border-slate-200 p-6",
                        "data-testid": "pending-files-stat",
                        children: (0, Pa.jsxs)("div", {
                            className: "flex items-center justify-between",
                            children: [(0, Pa.jsxs)("div", {
                                children: [(0, Pa.jsx)("p", {
                                    className: "text-sm text-slate-600 mb-1",
                                    children: "Pending Review"
                                }), (0, Pa.jsx)("p", {
                                    className: "text-3xl font-bold text-slate-900",
                                    children: (null === t || void 0 === t ? void 0 : t.pending_files) || 0
                                })]
                            }), (0, Pa.jsx)("div", {
                                className: "w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center",
                                children: (0, Pa.jsx)(cl, {
                                    className: "w-6 h-6 text-yellow-600"
                                })
                            })]
                        })
                    }), (0, Pa.jsx)("div", {
                        className: "bg-white rounded-xl border border-slate-200 p-6",
                        "data-testid": "users-stat",
                        children: (0, Pa.jsxs)("div", {
                            className: "flex items-center justify-between",
                            children: [(0, Pa.jsxs)("div", {
                                children: [(0, Pa.jsx)("p", {
                                    className: "text-sm text-slate-600 mb-1",
                                    children: "Total Users"
                                }), (0, Pa.jsx)("p", {
                                    className: "text-3xl font-bold text-slate-900",
                                    children: (null === t || void 0 === t ? void 0 : t.total_users) || 0
                                })]
                            }), (0, Pa.jsx)("div", {
                                className: "w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center",
                                children: (0, Pa.jsx)(ul, {
                                    className: "w-6 h-6 text-blue-600"
                                })
                            })]
                        })
                    })]
                }), (0, Pa.jsxs)("div", {
                    className: "bg-white rounded-xl border border-slate-200 p-6",
                    children: [(0, Pa.jsx)("h2", {
                        className: "text-xl font-semibold text-slate-900 mb-6",
                        children: "Pending Approvals"
                    }), 0 === r.length ? (0, Pa.jsxs)("div", {
                        className: "text-center py-12",
                        children: [(0, Pa.jsx)(ul, {
                            className: "w-12 h-12 text-green-500 mx-auto mb-3"
                        }), (0, Pa.jsx)("p", {
                            className: "text-slate-600",
                            children: "No pending files to review"
                        })]
                    }) : (0, Pa.jsx)("div", {
                        className: "space-y-4",
                        children: r.map(e => (0, Pa.jsxs)("div", {
                            className: "border border-slate-200 rounded-lg p-5",
                            "data-testid": "pending-file-".concat(e.id),
                            children: [(0, Pa.jsxs)("div", {
                                className: "flex items-start justify-between mb-4",
                                children: [(0, Pa.jsxs)("div", {
                                    className: "flex items-start gap-4 flex-1",
                                    children: [(0, Pa.jsx)("div", {
                                        className: "w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center flex-shrink-0",
                                        children: (0, Pa.jsx)(Ha, {
                                            className: "w-6 h-6 text-slate-600"
                                        })
                                    }), (0, Pa.jsxs)("div", {
                                        className: "flex-1",
                                        children: [(0, Pa.jsx)("h3", {
                                            className: "font-semibold text-slate-900 mb-1",
                                            children: e.original_filename
                                        }), (0, Pa.jsxs)("div", {
                                            className: "flex flex-wrap gap-3 text-sm text-slate-600",
                                            children: [(0, Pa.jsxs)("span", {
                                                children: ["Subject: ", e.subject_code]
                                            }), (0, Pa.jsx)("span", {
                                                children: "\u2022"
                                            }), (0, Pa.jsxs)("span", {
                                                children: ["Semester: ", e.semester]
                                            }), e.unit && (0, Pa.jsxs)(Pa.Fragment, {
                                                children: [(0, Pa.jsx)("span", {
                                                    children: "\u2022"
                                                }), (0, Pa.jsxs)("span", {
                                                    children: ["Unit: ", e.unit]
                                                })]
                                            })]
                                        }), (0, Pa.jsxs)("p", {
                                            className: "text-sm text-slate-500 mt-1",
                                            children: ["Uploaded by: ", e.uploader_name]
                                        })]
                                    })]
                                }), (0, Pa.jsx)("span", {
                                    className: "px-2.5 py-1 bg-yellow-100 text-yellow-700 text-xs font-semibold rounded-full",
                                    children: "Pending"
                                })]
                            }), (0, Pa.jsxs)("div", {
                                className: "flex gap-3",
                                children: [(0, Pa.jsxs)("button", {
                                    onClick: () => (async (e, t) => {
                                        try {
                                            const n = await la.get("".concat(gl, "/files/").concat(e, "/download"), {
                                                    responseType: "blob"
                                                }),
                                                r = window.URL.createObjectURL(new Blob([n.data])),
                                                a = document.createElement("a");
                                            a.href = r, a.setAttribute("download", t), document.body.appendChild(a), a.click(), a.remove()
                                        } catch (n) {
                                            ka.error("Failed to download file")
                                        }
                                    })(e.id, e.original_filename),
                                    className: "flex-1 bg-slate-100 text-slate-700 hover:bg-slate-200 py-2.5 px-4 rounded-lg font-medium transition-colors flex items-center justify-center gap-2",
                                    "data-testid": "preview-btn-".concat(e.id),
                                    children: [(0, Pa.jsx)(hl, {
                                        className: "w-4 h-4"
                                    }), "Preview/Download"]
                                }), (0, Pa.jsxs)("button", {
                                    onClick: () => (async e => {
                                        try {
                                            await la.put("".concat(gl, "/files/").concat(e, "/approve")), ka.success("File approved successfully"), i()
                                        } catch (t) {
                                            ka.error("Failed to approve file")
                                        }
                                    })(e.id),
                                    className: "flex-1 bg-green-600 text-white hover:bg-green-700 py-2.5 px-4 rounded-lg font-medium transition-colors flex items-center justify-center gap-2",
                                    "data-testid": "approve-btn-".concat(e.id),
                                    children: [(0, Pa.jsx)(ul, {
                                        className: "w-4 h-4"
                                    }), "Approve"]
                                }), (0, Pa.jsx)("button", {
                                    onClick: () => (async e => {
                                        try {
                                            await la.delete("".concat(gl, "/files/").concat(e, "/reject")), ka.success("File rejected and deleted"), i()
                                        } catch (t) {
                                            ka.error("Failed to reject file")
                                        }
                                    })(e.id),
                                    className: "flex-1 bg-red-50 text-red-600 hover:bg-red-100 py-2.5 px-4 rounded-lg font-medium transition-colors",
                                    "data-testid": "reject-btn-".concat(e.id),
                                    children: "Reject"
                                })]
                            })]
                        }, e.id))
                    })]
                })]
            })
        })
    }
    const vl = "".concat("https://study-hub-196.preview.emergentagent.com", "/api");

    function bl() {
        const {
            user: e
        } = (0, a.useContext)(Pl), [t, n] = (0, a.useState)(null), [r, l] = (0, a.useState)([]), [o, s] = (0, a.useState)(!0);
        (0, a.useEffect)(() => {
            i()
        }, []);
        const i = async () => {
            try {
                const [e, t] = await Promise.all([la.get("".concat(vl, "/stats")), la.get("".concat(vl, "/files?status_filter=pending"))]);
                n(e.data), l(t.data)
            } catch (e) {
                ka.error("Failed to load dashboard data")
            } finally {
                s(!1)
            }
        };
        return o ? (0, Pa.jsx)(il, {
            children: (0, Pa.jsx)("div", {
                className: "flex items-center justify-center h-96",
                children: (0, Pa.jsx)("div", {
                    className: "text-lg font-medium text-slate-600",
                    children: "Loading..."
                })
            })
        }) : (0, Pa.jsx)(il, {
            children: (0, Pa.jsxs)("div", {
                className: "space-y-8",
                "data-testid": "admin-dashboard",
                children: [(0, Pa.jsxs)("div", {
                    children: [(0, Pa.jsx)("h1", {
                        className: "text-3xl font-bold text-slate-900",
                        children: "Admin Dashboard"
                    }), (0, Pa.jsxs)("p", {
                        className: "text-slate-600 mt-2",
                        children: ["Welcome, ", null === e || void 0 === e ? void 0 : e.name, " (HOD)"]
                    })]
                }), (0, Pa.jsxs)("div", {
                    className: "grid grid-cols-1 md:grid-cols-4 gap-6",
                    children: [(0, Pa.jsx)("div", {
                        className: "bg-white rounded-xl border border-slate-200 p-6",
                        "data-testid": "total-files-stat",
                        children: (0, Pa.jsxs)("div", {
                            className: "flex items-center justify-between",
                            children: [(0, Pa.jsxs)("div", {
                                children: [(0, Pa.jsx)("p", {
                                    className: "text-sm text-slate-600 mb-1",
                                    children: "Total Resources"
                                }), (0, Pa.jsx)("p", {
                                    className: "text-3xl font-bold text-slate-900",
                                    children: (null === t || void 0 === t ? void 0 : t.total_files) || 0
                                })]
                            }), (0, Pa.jsx)("div", {
                                className: "w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center",
                                children: (0, Pa.jsx)(Ha, {
                                    className: "w-6 h-6 text-slate-600"
                                })
                            })]
                        })
                    }), (0, Pa.jsx)("div", {
                        className: "bg-white rounded-xl border border-slate-200 p-6",
                        "data-testid": "pending-files-stat",
                        children: (0, Pa.jsxs)("div", {
                            className: "flex items-center justify-between",
                            children: [(0, Pa.jsxs)("div", {
                                children: [(0, Pa.jsx)("p", {
                                    className: "text-sm text-slate-600 mb-1",
                                    children: "Pending Review"
                                }), (0, Pa.jsx)("p", {
                                    className: "text-3xl font-bold text-slate-900",
                                    children: (null === t || void 0 === t ? void 0 : t.pending_files) || 0
                                })]
                            }), (0, Pa.jsx)("div", {
                                className: "w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center",
                                children: (0, Pa.jsx)(cl, {
                                    className: "w-6 h-6 text-yellow-600"
                                })
                            })]
                        })
                    }), (0, Pa.jsx)("div", {
                        className: "bg-white rounded-xl border border-slate-200 p-6",
                        "data-testid": "users-stat",
                        children: (0, Pa.jsxs)("div", {
                            className: "flex items-center justify-between",
                            children: [(0, Pa.jsxs)("div", {
                                children: [(0, Pa.jsx)("p", {
                                    className: "text-sm text-slate-600 mb-1",
                                    children: "Total Users"
                                }), (0, Pa.jsx)("p", {
                                    className: "text-3xl font-bold text-slate-900",
                                    children: (null === t || void 0 === t ? void 0 : t.total_users) || 0
                                })]
                            }), (0, Pa.jsx)("div", {
                                className: "w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center",
                                children: (0, Pa.jsx)(Qa, {
                                    className: "w-6 h-6 text-blue-600"
                                })
                            })]
                        })
                    }), (0, Pa.jsx)("div", {
                        className: "bg-white rounded-xl border border-slate-200 p-6",
                        "data-testid": "notices-stat",
                        children: (0, Pa.jsxs)("div", {
                            className: "flex items-center justify-between",
                            children: [(0, Pa.jsxs)("div", {
                                children: [(0, Pa.jsx)("p", {
                                    className: "text-sm text-slate-600 mb-1",
                                    children: "Active Notices"
                                }), (0, Pa.jsx)("p", {
                                    className: "text-3xl font-bold text-slate-900",
                                    children: (null === t || void 0 === t ? void 0 : t.total_notices) || 0
                                })]
                            }), (0, Pa.jsx)("div", {
                                className: "w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center",
                                children: (0, Pa.jsx)(Va, {
                                    className: "w-6 h-6 text-orange-600"
                                })
                            })]
                        })
                    })]
                }), (0, Pa.jsxs)("div", {
                    className: "bg-white rounded-xl border border-slate-200 p-6",
                    children: [(0, Pa.jsx)("h2", {
                        className: "text-xl font-semibold text-slate-900 mb-6",
                        children: "Pending Approvals"
                    }), 0 === r.length ? (0, Pa.jsxs)("div", {
                        className: "text-center py-12",
                        children: [(0, Pa.jsx)(ul, {
                            className: "w-12 h-12 text-green-500 mx-auto mb-3"
                        }), (0, Pa.jsx)("p", {
                            className: "text-slate-600",
                            children: "No pending files to review"
                        })]
                    }) : (0, Pa.jsx)("div", {
                        className: "space-y-4",
                        children: r.map(e => (0, Pa.jsxs)("div", {
                            className: "border border-slate-200 rounded-lg p-5",
                            "data-testid": "pending-file-".concat(e.id),
                            children: [(0, Pa.jsxs)("div", {
                                className: "flex items-start justify-between mb-4",
                                children: [(0, Pa.jsxs)("div", {
                                    className: "flex items-start gap-4 flex-1",
                                    children: [(0, Pa.jsx)("div", {
                                        className: "w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center flex-shrink-0",
                                        children: (0, Pa.jsx)(Ha, {
                                            className: "w-6 h-6 text-slate-600"
                                        })
                                    }), (0, Pa.jsxs)("div", {
                                        className: "flex-1",
                                        children: [(0, Pa.jsx)("h3", {
                                            className: "font-semibold text-slate-900 mb-1",
                                            children: e.original_filename
                                        }), (0, Pa.jsxs)("div", {
                                            className: "flex flex-wrap gap-3 text-sm text-slate-600",
                                            children: [(0, Pa.jsxs)("span", {
                                                children: ["Subject: ", e.subject_code]
                                            }), (0, Pa.jsx)("span", {
                                                children: "\u2022"
                                            }), (0, Pa.jsxs)("span", {
                                                children: ["Semester: ", e.semester]
                                            }), e.unit && (0, Pa.jsxs)(Pa.Fragment, {
                                                children: [(0, Pa.jsx)("span", {
                                                    children: "\u2022"
                                                }), (0, Pa.jsxs)("span", {
                                                    children: ["Unit: ", e.unit]
                                                })]
                                            })]
                                        }), (0, Pa.jsxs)("p", {
                                            className: "text-sm text-slate-500 mt-1",
                                            children: ["Uploaded by: ", e.uploader_name]
                                        })]
                                    })]
                                }), (0, Pa.jsx)("span", {
                                    className: "px-2.5 py-1 bg-yellow-100 text-yellow-700 text-xs font-semibold rounded-full",
                                    children: "Pending"
                                })]
                            }), (0, Pa.jsxs)("div", {
                                className: "flex gap-3",
                                children: [(0, Pa.jsxs)("button", {
                                    onClick: () => (async (e, t) => {
                                        try {
                                            const n = await la.get("".concat(vl, "/files/").concat(e, "/download"), {
                                                    responseType: "blob"
                                                }),
                                                r = window.URL.createObjectURL(new Blob([n.data])),
                                                a = document.createElement("a");
                                            a.href = r, a.setAttribute("download", t), document.body.appendChild(a), a.click(), a.remove()
                                        } catch (n) {
                                            ka.error("Failed to download file")
                                        }
                                    })(e.id, e.original_filename),
                                    className: "flex-1 bg-slate-100 text-slate-700 hover:bg-slate-200 py-2.5 px-4 rounded-lg font-medium transition-colors flex items-center justify-center gap-2",
                                    "data-testid": "preview-btn-".concat(e.id),
                                    children: [(0, Pa.jsx)(hl, {
                                        className: "w-4 h-4"
                                    }), "Preview/Download"]
                                }), (0, Pa.jsxs)("button", {
                                    onClick: () => (async e => {
                                        try {
                                            await la.put("".concat(vl, "/files/").concat(e, "/approve")), ka.success("File approved successfully"), i()
                                        } catch (t) {
                                            ka.error("Failed to approve file")
                                        }
                                    })(e.id),
                                    className: "flex-1 bg-green-600 text-white hover:bg-green-700 py-2.5 px-4 rounded-lg font-medium transition-colors flex items-center justify-center gap-2",
                                    "data-testid": "approve-btn-".concat(e.id),
                                    children: [(0, Pa.jsx)(ul, {
                                        className: "w-4 h-4"
                                    }), "Approve"]
                                }), (0, Pa.jsx)("button", {
                                    onClick: () => (async e => {
                                        try {
                                            await la.delete("".concat(vl, "/files/").concat(e, "/reject")), ka.success("File rejected and deleted"), i()
                                        } catch (t) {
                                            ka.error("Failed to reject file")
                                        }
                                    })(e.id),
                                    className: "flex-1 bg-red-50 text-red-600 hover:bg-red-100 py-2.5 px-4 rounded-lg font-medium transition-colors",
                                    "data-testid": "reject-btn-".concat(e.id),
                                    children: "Reject"
                                })]
                            })]
                        }, e.id))
                    })]
                })]
            })
        })
    }
    const xl = Ua("funnel", [
            ["path", {
                d: "M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z",
                key: "sc7q7i"
            }]
        ]),
        wl = Ua("x", [
            ["path", {
                d: "M18 6 6 18",
                key: "1bl5f8"
            }],
            ["path", {
                d: "m6 6 12 12",
                key: "d8bk6v"
            }]
        ]),
        kl = "".concat("https://study-hub-196.preview.emergentagent.com", "/api");

    function Sl() {
        const {
            user: e
        } = (0, a.useContext)(Pl), [t, n] = (0, a.useState)([]), [r, l] = (0, a.useState)([]), [o, s] = (0, a.useState)(!0), [i, c] = (0, a.useState)(!1), [u, d] = (0, a.useState)({
            semester: "",
            subject_code: "",
            search: ""
        }), [p, m] = (0, a.useState)({
            file: null,
            subject_code: "",
            subject_name: "",
            semester: "",
            unit: "",
            professor_name: ""
        }), [h, g] = (0, a.useState)(!1);
        (0, a.useEffect)(() => {
            y()
        }, []), (0, a.useEffect)(() => {
            v()
        }, [t, u]);
        const y = async () => {
                try {
                    const e = await la.get("".concat(kl, "/files"));
                    n(e.data)
                } catch (e) {
                    ka.error("Failed to load files")
                } finally {
                    s(!1)
                }
            },
            v = () => {
                let e = [...t];
                u.semester && (e = e.filter(e => e.semester === parseInt(u.semester))), u.subject_code && (e = e.filter(e => e.subject_code.toLowerCase().includes(u.subject_code.toLowerCase()))), u.search && (e = e.filter(e => e.original_filename.toLowerCase().includes(u.search.toLowerCase()) || e.subject_name.toLowerCase().includes(u.search.toLowerCase()))), l(e)
            };
        return (0, Pa.jsxs)(il, {
            children: [(0, Pa.jsxs)("div", {
                className: "space-y-6",
                "data-testid": "repository-page",
                children: [(0, Pa.jsxs)("div", {
                    className: "flex items-center justify-between",
                    children: [(0, Pa.jsxs)("div", {
                        children: [(0, Pa.jsx)("h1", {
                            className: "text-3xl font-bold text-slate-900",
                            children: "Resource Repository"
                        }), (0, Pa.jsxs)("p", {
                            className: "text-slate-600 mt-1",
                            children: [r.length, " resources available"]
                        })]
                    }), ("student" === (null === e || void 0 === e ? void 0 : e.role) || "faculty" === (null === e || void 0 === e ? void 0 : e.role) || "admin" === (null === e || void 0 === e ? void 0 : e.role)) && (0, Pa.jsxs)("button", {
                        onClick: () => c(!0),
                        className: "bg-slate-900 text-white hover:bg-slate-800 px-6 py-2.5 rounded-lg font-medium shadow-sm hover:shadow-md transition-all flex items-center gap-2",
                        "data-testid": "open-upload-modal-btn",
                        children: [(0, Pa.jsx)($a, {
                            className: "w-5 h-5"
                        }), "Upload File"]
                    })]
                }), (0, Pa.jsxs)("div", {
                    className: "bg-white rounded-xl border border-slate-200 p-6",
                    children: [(0, Pa.jsxs)("div", {
                        className: "flex items-center gap-2 mb-4",
                        children: [(0, Pa.jsx)(xl, {
                            className: "w-5 h-5 text-slate-600"
                        }), (0, Pa.jsx)("h2", {
                            className: "text-lg font-semibold text-slate-900",
                            children: "Filters"
                        })]
                    }), (0, Pa.jsxs)("div", {
                        className: "grid grid-cols-1 md:grid-cols-3 gap-4",
                        children: [(0, Pa.jsxs)("div", {
                            children: [(0, Pa.jsx)("label", {
                                className: "block text-sm font-medium text-slate-700 mb-2",
                                children: "Search"
                            }), (0, Pa.jsxs)("div", {
                                className: "relative",
                                children: [(0, Pa.jsx)(qa, {
                                    className: "absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400"
                                }), (0, Pa.jsx)("input", {
                                    type: "text",
                                    value: u.search,
                                    onChange: e => d(f(f({}, u), {}, {
                                        search: e.target.value
                                    })),
                                    className: "w-full pl-11 pr-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-slate-900 focus:border-transparent",
                                    placeholder: "Search files...",
                                    "data-testid": "search-input"
                                })]
                            })]
                        }), (0, Pa.jsxs)("div", {
                            children: [(0, Pa.jsx)("label", {
                                className: "block text-sm font-medium text-slate-700 mb-2",
                                children: "Semester"
                            }), (0, Pa.jsxs)("select", {
                                value: u.semester,
                                onChange: e => d(f(f({}, u), {}, {
                                    semester: e.target.value
                                })),
                                className: "w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-slate-900 focus:border-transparent",
                                "data-testid": "semester-filter",
                                children: [(0, Pa.jsx)("option", {
                                    value: "",
                                    children: "All Semesters"
                                }), [1, 2, 3, 4, 5, 6, 7, 8].map(e => (0, Pa.jsxs)("option", {
                                    value: e,
                                    children: ["Semester ", e]
                                }, e))]
                            })]
                        }), (0, Pa.jsxs)("div", {
                            children: [(0, Pa.jsx)("label", {
                                className: "block text-sm font-medium text-slate-700 mb-2",
                                children: "Subject Code"
                            }), (0, Pa.jsx)("input", {
                                type: "text",
                                value: u.subject_code,
                                onChange: e => d(f(f({}, u), {}, {
                                    subject_code: e.target.value
                                })),
                                className: "w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-slate-900 focus:border-transparent",
                                placeholder: "e.g., BCA401",
                                "data-testid": "subject-code-filter"
                            })]
                        })]
                    })]
                }), o ? (0, Pa.jsx)("div", {
                    className: "flex items-center justify-center h-64",
                    children: (0, Pa.jsx)("div", {
                        className: "text-lg font-medium text-slate-600",
                        children: "Loading..."
                    })
                }) : 0 === r.length ? (0, Pa.jsxs)("div", {
                    className: "bg-white rounded-xl border border-slate-200 p-12 text-center",
                    children: [(0, Pa.jsx)(Ha, {
                        className: "w-12 h-12 text-slate-400 mx-auto mb-3"
                    }), (0, Pa.jsx)("p", {
                        className: "text-slate-600",
                        children: "No files found matching your criteria"
                    })]
                }) : (0, Pa.jsx)("div", {
                    className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
                    children: r.map(e => {
                        return (0, Pa.jsxs)("div", {
                            className: "bg-white rounded-xl border border-slate-200 p-6 hover-lift file-card",
                            "data-testid": "file-card-".concat(e.id),
                            children: [(0, Pa.jsxs)("div", {
                                className: "flex items-start gap-4 mb-4",
                                children: [(0, Pa.jsx)("div", {
                                    className: "w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center flex-shrink-0",
                                    children: (e.file_type, (0, Pa.jsx)(Ha, {
                                        className: "w-6 h-6 text-slate-600"
                                    }))
                                }), (0, Pa.jsxs)("div", {
                                    className: "flex-1 min-w-0",
                                    children: [(0, Pa.jsx)("h3", {
                                        className: "font-semibold text-slate-900 mb-1 truncate",
                                        title: e.original_filename,
                                        children: e.original_filename
                                    }), (0, Pa.jsx)("p", {
                                        className: "text-sm text-slate-600",
                                        children: e.subject_code
                                    })]
                                })]
                            }), (0, Pa.jsxs)("div", {
                                className: "space-y-2 mb-4 text-sm text-slate-600",
                                children: [(0, Pa.jsxs)("p", {
                                    children: [(0, Pa.jsx)("span", {
                                        className: "font-medium",
                                        children: "Subject:"
                                    }), " ", e.subject_name]
                                }), (0, Pa.jsxs)("p", {
                                    children: [(0, Pa.jsx)("span", {
                                        className: "font-medium",
                                        children: "Semester:"
                                    }), " ", e.semester]
                                }), e.unit && (0, Pa.jsxs)("p", {
                                    children: [(0, Pa.jsx)("span", {
                                        className: "font-medium",
                                        children: "Unit:"
                                    }), " ", e.unit]
                                }), (0, Pa.jsxs)("p", {
                                    children: [(0, Pa.jsx)("span", {
                                        className: "font-medium",
                                        children: "Uploaded by:"
                                    }), " ", e.uploader_name]
                                }), (0, Pa.jsxs)("p", {
                                    children: [(0, Pa.jsx)("span", {
                                        className: "font-medium",
                                        children: "Size:"
                                    }), " ", (t = e.file_size, t < 1024 ? t + " B" : t < 1048576 ? (t / 1024).toFixed(1) + " KB" : (t / 1048576).toFixed(1) + " MB")]
                                })]
                            }), (0, Pa.jsxs)("button", {
                                onClick: () => (async (e, t) => {
                                    try {
                                        const n = await la.get("".concat(kl, "/files/").concat(e, "/download"), {
                                                responseType: "blob"
                                            }),
                                            r = window.URL.createObjectURL(new Blob([n.data])),
                                            a = document.createElement("a");
                                        a.href = r, a.setAttribute("download", t), document.body.appendChild(a), a.click(), a.remove(), ka.success("File downloaded successfully")
                                    } catch (n) {
                                        ka.error("Failed to download file")
                                    }
                                })(e.id, e.original_filename),
                                className: "w-full bg-slate-900 text-white hover:bg-slate-800 py-2.5 rounded-lg font-medium transition-colors flex items-center justify-center gap-2",
                                "data-testid": "download-file-btn-".concat(e.id),
                                children: [(0, Pa.jsx)(fl, {
                                    className: "w-4 h-4"
                                }), "Download"]
                            })]
                        }, e.id);
                        var t
                    })
                })]
            }), i && (0, Pa.jsx)("div", {
                className: "fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4",
                "data-testid": "upload-modal",
                children: (0, Pa.jsxs)("div", {
                    className: "bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto",
                    children: [(0, Pa.jsxs)("div", {
                        className: "sticky top-0 bg-white border-b border-slate-200 px-6 py-4 flex items-center justify-between",
                        children: [(0, Pa.jsx)("h2", {
                            className: "text-2xl font-bold text-slate-900",
                            children: "Upload File"
                        }), (0, Pa.jsx)("button", {
                            onClick: () => c(!1),
                            className: "text-slate-400 hover:text-slate-600 p-1",
                            "data-testid": "close-modal-btn",
                            children: (0, Pa.jsx)(wl, {
                                className: "w-6 h-6"
                            })
                        })]
                    }), (0, Pa.jsxs)("form", {
                        onSubmit: async t => {
                            if (t.preventDefault(), !p.file) return void ka.error("Please select a file");
                            g(!0);
                            const n = new FormData;
                            n.append("file", p.file), n.append("subject_code", p.subject_code), n.append("subject_name", p.subject_name), n.append("semester", p.semester), p.unit && n.append("unit", p.unit), p.professor_name && n.append("professor_name", p.professor_name);
                            try {
                                await la.post("".concat(kl, "/files/upload"), n, {
                                    headers: {
                                        "Content-Type": "multipart/form-data"
                                    }
                                }), ka.success("student" === (null === e || void 0 === e ? void 0 : e.role) ? "File uploaded! Pending approval." : "File uploaded successfully!"), c(!1), m({
                                    file: null,
                                    subject_code: "",
                                    subject_name: "",
                                    semester: "",
                                    unit: "",
                                    professor_name: ""
                                }), y()
                            } catch (l) {
                                var r, a;
                                ka.error((null === (r = l.response) || void 0 === r || null === (a = r.data) || void 0 === a ? void 0 : a.detail) || "Failed to upload file")
                            } finally {
                                g(!1)
                            }
                        },
                        className: "p-6 space-y-5",
                        children: [(0, Pa.jsxs)("div", {
                            children: [(0, Pa.jsx)("label", {
                                className: "block text-sm font-medium text-slate-700 mb-2",
                                children: "File (PDF, PPT, DOC, JPG, PNG)"
                            }), (0, Pa.jsx)("input", {
                                type: "file",
                                accept: ".pdf,.ppt,.pptx,.doc,.docx,.jpg,.jpeg,.png",
                                onChange: e => m(f(f({}, p), {}, {
                                    file: e.target.files[0]
                                })),
                                className: "w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-slate-900 focus:border-transparent",
                                required: !0,
                                "data-testid": "file-input"
                            })]
                        }), (0, Pa.jsxs)("div", {
                            className: "grid grid-cols-2 gap-4",
                            children: [(0, Pa.jsxs)("div", {
                                children: [(0, Pa.jsx)("label", {
                                    className: "block text-sm font-medium text-slate-700 mb-2",
                                    children: "Subject Code"
                                }), (0, Pa.jsx)("input", {
                                    type: "text",
                                    value: p.subject_code,
                                    onChange: e => m(f(f({}, p), {}, {
                                        subject_code: e.target.value
                                    })),
                                    className: "w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-slate-900 focus:border-transparent",
                                    placeholder: "e.g., BCA401",
                                    required: !0,
                                    "data-testid": "upload-subject-code-input"
                                })]
                            }), (0, Pa.jsxs)("div", {
                                children: [(0, Pa.jsx)("label", {
                                    className: "block text-sm font-medium text-slate-700 mb-2",
                                    children: "Subject Name"
                                }), (0, Pa.jsx)("input", {
                                    type: "text",
                                    value: p.subject_name,
                                    onChange: e => m(f(f({}, p), {}, {
                                        subject_name: e.target.value
                                    })),
                                    className: "w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-slate-900 focus:border-transparent",
                                    placeholder: "e.g., Data Structures",
                                    required: !0,
                                    "data-testid": "upload-subject-name-input"
                                })]
                            })]
                        }), (0, Pa.jsxs)("div", {
                            className: "grid grid-cols-2 gap-4",
                            children: [(0, Pa.jsxs)("div", {
                                children: [(0, Pa.jsx)("label", {
                                    className: "block text-sm font-medium text-slate-700 mb-2",
                                    children: "Semester"
                                }), (0, Pa.jsxs)("select", {
                                    value: p.semester,
                                    onChange: e => m(f(f({}, p), {}, {
                                        semester: e.target.value
                                    })),
                                    className: "w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-slate-900 focus:border-transparent",
                                    required: !0,
                                    "data-testid": "upload-semester-select",
                                    children: [(0, Pa.jsx)("option", {
                                        value: "",
                                        children: "Select Semester"
                                    }), [1, 2, 3, 4, 5, 6, 7, 8].map(e => (0, Pa.jsxs)("option", {
                                        value: e,
                                        children: ["Semester ", e]
                                    }, e))]
                                })]
                            }), (0, Pa.jsxs)("div", {
                                children: [(0, Pa.jsx)("label", {
                                    className: "block text-sm font-medium text-slate-700 mb-2",
                                    children: "Unit (Optional)"
                                }), (0, Pa.jsx)("input", {
                                    type: "text",
                                    value: p.unit,
                                    onChange: e => m(f(f({}, p), {}, {
                                        unit: e.target.value
                                    })),
                                    className: "w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-slate-900 focus:border-transparent",
                                    placeholder: "e.g., Unit 1",
                                    "data-testid": "upload-unit-input"
                                })]
                            })]
                        }), (0, Pa.jsxs)("div", {
                            children: [(0, Pa.jsx)("label", {
                                className: "block text-sm font-medium text-slate-700 mb-2",
                                children: "Professor Name (Optional)"
                            }), (0, Pa.jsx)("input", {
                                type: "text",
                                value: p.professor_name,
                                onChange: e => m(f(f({}, p), {}, {
                                    professor_name: e.target.value
                                })),
                                className: "w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-slate-900 focus:border-transparent",
                                placeholder: "e.g., Prof. Sharma",
                                "data-testid": "upload-professor-input"
                            })]
                        }), "student" === (null === e || void 0 === e ? void 0 : e.role) && (0, Pa.jsx)("div", {
                            className: "bg-yellow-50 border border-yellow-200 rounded-lg p-4",
                            children: (0, Pa.jsxs)("p", {
                                className: "text-sm text-yellow-800",
                                children: [(0, Pa.jsx)("strong", {
                                    children: "Note:"
                                }), " Your file will be pending approval from faculty before it becomes visible to everyone."]
                            })
                        }), (0, Pa.jsxs)("div", {
                            className: "flex gap-3 pt-4",
                            children: [(0, Pa.jsx)("button", {
                                type: "button",
                                onClick: () => c(!1),
                                className: "flex-1 bg-slate-100 text-slate-700 hover:bg-slate-200 py-2.5 rounded-lg font-medium transition-colors",
                                "data-testid": "cancel-upload-btn",
                                children: "Cancel"
                            }), (0, Pa.jsx)("button", {
                                type: "submit",
                                disabled: h,
                                className: "flex-1 bg-slate-900 text-white hover:bg-slate-800 py-2.5 rounded-lg font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
                                "data-testid": "submit-upload-btn",
                                children: h ? "Uploading..." : "Upload"
                            })]
                        })]
                    })]
                })
            })]
        })
    }
    const Nl = Ua("plus", [
            ["path", {
                d: "M5 12h14",
                key: "1ays0h"
            }],
            ["path", {
                d: "M12 5v14",
                key: "s699le"
            }]
        ]),
        jl = Ua("circle-alert", [
            ["circle", {
                cx: "12",
                cy: "12",
                r: "10",
                key: "1mglay"
            }],
            ["line", {
                x1: "12",
                x2: "12",
                y1: "8",
                y2: "12",
                key: "1pkeuh"
            }],
            ["line", {
                x1: "12",
                x2: "12.01",
                y1: "16",
                y2: "16",
                key: "4dfq90"
            }]
        ]),
        El = "".concat("https://study-hub-196.preview.emergentagent.com", "/api");

    function Cl() {
        const {
            user: e
        } = (0, a.useContext)(Pl), [t, n] = (0, a.useState)([]), [r, l] = (0, a.useState)(!0), [o, s] = (0, a.useState)(!1), [i, c] = (0, a.useState)({
            title: "",
            content: "",
            is_urgent: !1
        }), [u, d] = (0, a.useState)(!1);
        (0, a.useEffect)(() => {
            p()
        }, []);
        const p = async () => {
                try {
                    const e = await la.get("".concat(El, "/notices"));
                    n(e.data)
                } catch (e) {
                    ka.error("Failed to load notices")
                } finally {
                    l(!1)
                }
            },
            m = e => {
                const t = new Date(e);
                return (new Date - t) / 36e5 < 24
            };
        return (0, Pa.jsxs)(il, {
            children: [(0, Pa.jsxs)("div", {
                className: "space-y-6",
                "data-testid": "notices-page",
                children: [(0, Pa.jsxs)("div", {
                    className: "flex items-center justify-between",
                    children: [(0, Pa.jsxs)("div", {
                        children: [(0, Pa.jsx)("h1", {
                            className: "text-3xl font-bold text-slate-900",
                            children: "Department Notices"
                        }), (0, Pa.jsxs)("p", {
                            className: "text-slate-600 mt-1",
                            children: [t.length, " active notices"]
                        })]
                    }), ("faculty" === (null === e || void 0 === e ? void 0 : e.role) || "admin" === (null === e || void 0 === e ? void 0 : e.role)) && (0, Pa.jsxs)("button", {
                        onClick: () => s(!0),
                        className: "bg-orange-600 text-white hover:bg-orange-700 px-6 py-2.5 rounded-lg font-medium shadow-sm hover:shadow-md transition-all flex items-center gap-2",
                        "data-testid": "create-notice-btn",
                        children: [(0, Pa.jsx)(Nl, {
                            className: "w-5 h-5"
                        }), "Create Notice"]
                    })]
                }), r ? (0, Pa.jsx)("div", {
                    className: "flex items-center justify-center h-64",
                    children: (0, Pa.jsx)("div", {
                        className: "text-lg font-medium text-slate-600",
                        children: "Loading..."
                    })
                }) : 0 === t.length ? (0, Pa.jsxs)("div", {
                    className: "bg-white rounded-xl border border-slate-200 p-12 text-center",
                    children: [(0, Pa.jsx)(Va, {
                        className: "w-12 h-12 text-slate-400 mx-auto mb-3"
                    }), (0, Pa.jsx)("p", {
                        className: "text-slate-600",
                        children: "No notices posted yet"
                    })]
                }) : (0, Pa.jsx)("div", {
                    className: "space-y-4",
                    children: t.map(e => {
                        return (0, Pa.jsxs)("div", {
                            className: "bg-white rounded-xl border p-6 ".concat(e.is_urgent ? "border-orange-300 bg-orange-50" : "border-slate-200"),
                            "data-testid": "notice-".concat(e.id),
                            children: [(0, Pa.jsx)("div", {
                                className: "flex items-start justify-between mb-4",
                                children: (0, Pa.jsxs)("div", {
                                    className: "flex-1",
                                    children: [(0, Pa.jsxs)("div", {
                                        className: "flex items-start gap-3 mb-2",
                                        children: [e.is_urgent && (0, Pa.jsx)("div", {
                                            className: "flex-shrink-0",
                                            children: (0, Pa.jsx)(jl, {
                                                className: "w-6 h-6 text-orange-600"
                                            })
                                        }), (0, Pa.jsx)("div", {
                                            className: "flex-1",
                                            children: (0, Pa.jsx)("h2", {
                                                className: "text-xl font-semibold text-slate-900",
                                                children: e.title
                                            })
                                        }), m(e.created_at) && (0, Pa.jsx)("span", {
                                            className: "px-3 py-1 bg-orange-600 text-white text-xs font-bold rounded-full uppercase",
                                            children: "NEW"
                                        })]
                                    }), e.is_urgent && (0, Pa.jsx)("span", {
                                        className: "inline-block px-3 py-1 bg-orange-600 text-white text-xs font-semibold rounded-full mb-3",
                                        children: "URGENT"
                                    })]
                                })
                            }), (0, Pa.jsx)("p", {
                                className: "text-slate-700 leading-relaxed mb-4 whitespace-pre-wrap",
                                children: e.content
                            }), (0, Pa.jsxs)("div", {
                                className: "flex items-center justify-between text-sm text-slate-500 pt-4 border-t border-slate-200",
                                children: [(0, Pa.jsxs)("span", {
                                    children: ["Posted by: ", (0, Pa.jsx)("strong", {
                                        children: e.creator_name
                                    })]
                                }), (0, Pa.jsx)("span", {
                                    children: (t = e.created_at, new Date(t).toLocaleDateString("en-US", {
                                        year: "numeric",
                                        month: "long",
                                        day: "numeric",
                                        hour: "2-digit",
                                        minute: "2-digit"
                                    }))
                                })]
                            })]
                        }, e.id);
                        var t
                    })
                })]
            }), o && (0, Pa.jsx)("div", {
                className: "fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4",
                "data-testid": "create-notice-modal",
                children: (0, Pa.jsxs)("div", {
                    className: "bg-white rounded-xl max-w-2xl w-full",
                    children: [(0, Pa.jsxs)("div", {
                        className: "border-b border-slate-200 px-6 py-4 flex items-center justify-between",
                        children: [(0, Pa.jsx)("h2", {
                            className: "text-2xl font-bold text-slate-900",
                            children: "Create Notice"
                        }), (0, Pa.jsx)("button", {
                            onClick: () => s(!1),
                            className: "text-slate-400 hover:text-slate-600 p-1",
                            "data-testid": "close-create-modal-btn",
                            children: (0, Pa.jsx)(wl, {
                                className: "w-6 h-6"
                            })
                        })]
                    }), (0, Pa.jsxs)("form", {
                        onSubmit: async e => {
                            e.preventDefault(), d(!0);
                            try {
                                await la.post("".concat(El, "/notices"), i), ka.success("Notice created successfully"), s(!1), c({
                                    title: "",
                                    content: "",
                                    is_urgent: !1
                                }), p()
                            } catch (r) {
                                var t, n;
                                ka.error((null === (t = r.response) || void 0 === t || null === (n = t.data) || void 0 === n ? void 0 : n.detail) || "Failed to create notice")
                            } finally {
                                d(!1)
                            }
                        },
                        className: "p-6 space-y-5",
                        children: [(0, Pa.jsxs)("div", {
                            children: [(0, Pa.jsx)("label", {
                                className: "block text-sm font-medium text-slate-700 mb-2",
                                children: "Title"
                            }), (0, Pa.jsx)("input", {
                                type: "text",
                                value: i.title,
                                onChange: e => c(f(f({}, i), {}, {
                                    title: e.target.value
                                })),
                                className: "w-full px-4 py-2.5 border border-slate-200 rounded-lg focus:ring-2 focus:ring-slate-900 focus:border-transparent",
                                placeholder: "Notice title",
                                required: !0,
                                "data-testid": "notice-title-input"
                            })]
                        }), (0, Pa.jsxs)("div", {
                            children: [(0, Pa.jsx)("label", {
                                className: "block text-sm font-medium text-slate-700 mb-2",
                                children: "Content"
                            }), (0, Pa.jsx)("textarea", {
                                value: i.content,
                                onChange: e => c(f(f({}, i), {}, {
                                    content: e.target.value
                                })),
                                className: "w-full px-4 py-2.5 border border-slate-200 rounded-lg focus:ring-2 focus:ring-slate-900 focus:border-transparent min-h-[150px]",
                                placeholder: "Write your notice here...",
                                required: !0,
                                "data-testid": "notice-content-textarea"
                            })]
                        }), (0, Pa.jsxs)("div", {
                            className: "flex items-center gap-3",
                            children: [(0, Pa.jsx)("input", {
                                type: "checkbox",
                                id: "is_urgent",
                                checked: i.is_urgent,
                                onChange: e => c(f(f({}, i), {}, {
                                    is_urgent: e.target.checked
                                })),
                                className: "w-5 h-5 rounded border-slate-300 text-orange-600 focus:ring-orange-600",
                                "data-testid": "notice-urgent-checkbox"
                            }), (0, Pa.jsx)("label", {
                                htmlFor: "is_urgent",
                                className: "text-sm font-medium text-slate-700",
                                children: "Mark as Urgent"
                            })]
                        }), (0, Pa.jsxs)("div", {
                            className: "flex gap-3 pt-4",
                            children: [(0, Pa.jsx)("button", {
                                type: "button",
                                onClick: () => s(!1),
                                className: "flex-1 bg-slate-100 text-slate-700 hover:bg-slate-200 py-2.5 rounded-lg font-medium transition-colors",
                                "data-testid": "cancel-notice-btn",
                                children: "Cancel"
                            }), (0, Pa.jsx)("button", {
                                type: "submit",
                                disabled: u,
                                className: "flex-1 bg-orange-600 text-white hover:bg-orange-700 py-2.5 rounded-lg font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
                                "data-testid": "submit-notice-btn",
                                children: u ? "Creating..." : "Post Notice"
                            })]
                        })]
                    })]
                })
            })]
        })
    }
    const _l = Ua("calendar", [
        ["path", {
            d: "M8 2v4",
            key: "1cmpym"
        }],
        ["path", {
            d: "M16 2v4",
            key: "4m81vk"
        }],
        ["rect", {
            width: "18",
            height: "18",
            x: "3",
            y: "4",
            rx: "2",
            key: "1hopcy"
        }],
        ["path", {
            d: "M3 10h18",
            key: "8toen8"
        }]
    ]);

    function Tl() {
        const {
            user: e
        } = (0, a.useContext)(Pl);
        return (0, Pa.jsx)(il, {
            children: (0, Pa.jsxs)("div", {
                className: "space-y-6",
                "data-testid": "profile-page",
                children: [(0, Pa.jsxs)("div", {
                    children: [(0, Pa.jsx)("h1", {
                        className: "text-3xl font-bold text-slate-900",
                        children: "Profile"
                    }), (0, Pa.jsx)("p", {
                        className: "text-slate-600 mt-1",
                        children: "Manage your account information"
                    })]
                }), (0, Pa.jsxs)("div", {
                    className: "bg-white rounded-xl border border-slate-200 overflow-hidden",
                    children: [(0, Pa.jsx)("div", {
                        className: "bg-gradient-to-r from-slate-900 to-slate-700 px-6 py-12",
                        children: (0, Pa.jsxs)("div", {
                            className: "flex items-center gap-4",
                            children: [(0, Pa.jsx)("div", {
                                className: "w-20 h-20 bg-white rounded-full flex items-center justify-center",
                                children: (0, Pa.jsx)(el, {
                                    className: "w-10 h-10 text-slate-900"
                                })
                            }), (0, Pa.jsxs)("div", {
                                className: "text-white",
                                children: [(0, Pa.jsx)("h2", {
                                    className: "text-2xl font-bold",
                                    children: null === e || void 0 === e ? void 0 : e.name
                                }), (0, Pa.jsx)("p", {
                                    className: "text-slate-300 capitalize",
                                    children: null === e || void 0 === e ? void 0 : e.role
                                })]
                            })]
                        })
                    }), (0, Pa.jsx)("div", {
                        className: "p-6 space-y-6",
                        children: (0, Pa.jsxs)("div", {
                            className: "grid grid-cols-1 md:grid-cols-2 gap-6",
                            children: [(0, Pa.jsxs)("div", {
                                className: "flex items-start gap-4",
                                children: [(0, Pa.jsx)("div", {
                                    className: "w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center flex-shrink-0",
                                    children: (0, Pa.jsx)(Ka, {
                                        className: "w-6 h-6 text-slate-600"
                                    })
                                }), (0, Pa.jsxs)("div", {
                                    children: [(0, Pa.jsx)("p", {
                                        className: "text-sm text-slate-500 mb-1",
                                        children: "Email Address"
                                    }), (0, Pa.jsx)("p", {
                                        className: "font-medium text-slate-900",
                                        children: null === e || void 0 === e ? void 0 : e.email
                                    })]
                                })]
                            }), (0, Pa.jsxs)("div", {
                                className: "flex items-start gap-4",
                                children: [(0, Pa.jsx)("div", {
                                    className: "w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center flex-shrink-0",
                                    children: (0, Pa.jsx)(Wa, {
                                        className: "w-6 h-6 text-slate-600"
                                    })
                                }), (0, Pa.jsxs)("div", {
                                    children: [(0, Pa.jsx)("p", {
                                        className: "text-sm text-slate-500 mb-1",
                                        children: "Role"
                                    }), (0, Pa.jsx)("p", {
                                        className: "font-medium text-slate-900 capitalize",
                                        children: null === e || void 0 === e ? void 0 : e.role
                                    })]
                                })]
                            }), "student" === (null === e || void 0 === e ? void 0 : e.role) && (0, Pa.jsxs)(Pa.Fragment, {
                                children: [(0, Pa.jsxs)("div", {
                                    className: "flex items-start gap-4",
                                    children: [(0, Pa.jsx)("div", {
                                        className: "w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center flex-shrink-0",
                                        children: (0, Pa.jsx)(el, {
                                            className: "w-6 h-6 text-slate-600"
                                        })
                                    }), (0, Pa.jsxs)("div", {
                                        children: [(0, Pa.jsx)("p", {
                                            className: "text-sm text-slate-500 mb-1",
                                            children: "USN"
                                        }), (0, Pa.jsx)("p", {
                                            className: "font-medium text-slate-900",
                                            children: null === e || void 0 === e ? void 0 : e.usn
                                        })]
                                    })]
                                }), (0, Pa.jsxs)("div", {
                                    className: "flex items-start gap-4",
                                    children: [(0, Pa.jsx)("div", {
                                        className: "w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center flex-shrink-0",
                                        children: (0, Pa.jsx)(nl, {
                                            className: "w-6 h-6 text-slate-600"
                                        })
                                    }), (0, Pa.jsxs)("div", {
                                        children: [(0, Pa.jsx)("p", {
                                            className: "text-sm text-slate-500 mb-1",
                                            children: "Semester"
                                        }), (0, Pa.jsxs)("p", {
                                            className: "font-medium text-slate-900",
                                            children: ["Semester ", null === e || void 0 === e ? void 0 : e.semester]
                                        })]
                                    })]
                                })]
                            }), (null === e || void 0 === e ? void 0 : e.department) && (0, Pa.jsxs)("div", {
                                className: "flex items-start gap-4",
                                children: [(0, Pa.jsx)("div", {
                                    className: "w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center flex-shrink-0",
                                    children: (0, Pa.jsx)(nl, {
                                        className: "w-6 h-6 text-slate-600"
                                    })
                                }), (0, Pa.jsxs)("div", {
                                    children: [(0, Pa.jsx)("p", {
                                        className: "text-sm text-slate-500 mb-1",
                                        children: "Department"
                                    }), (0, Pa.jsx)("p", {
                                        className: "font-medium text-slate-900",
                                        children: null === e || void 0 === e ? void 0 : e.department
                                    })]
                                })]
                            }), (0, Pa.jsxs)("div", {
                                className: "flex items-start gap-4",
                                children: [(0, Pa.jsx)("div", {
                                    className: "w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center flex-shrink-0",
                                    children: (0, Pa.jsx)(_l, {
                                        className: "w-6 h-6 text-slate-600"
                                    })
                                }), (0, Pa.jsxs)("div", {
                                    children: [(0, Pa.jsx)("p", {
                                        className: "text-sm text-slate-500 mb-1",
                                        children: "Member Since"
                                    }), (0, Pa.jsx)("p", {
                                        className: "font-medium text-slate-900",
                                        children: (t = null === e || void 0 === e ? void 0 : e.created_at, new Date(t).toLocaleDateString("en-US", {
                                            year: "numeric",
                                            month: "long",
                                            day: "numeric"
                                        }))
                                    })]
                                })]
                            })]
                        })
                    })]
                }), (0, Pa.jsxs)("div", {
                    className: "bg-blue-50 border border-blue-200 rounded-xl p-6",
                    children: [(0, Pa.jsx)("h3", {
                        className: "font-semibold text-slate-900 mb-2",
                        children: "Account Information"
                    }), (0, Pa.jsx)("p", {
                        className: "text-sm text-slate-600",
                        children: "Your account is active and in good standing. If you need to update any information, please contact the department administrator."
                    })]
                })]
            })
        });
        var t
    }
    const Rl = "".concat("https://study-hub-196.preview.emergentagent.com", "/api"),
        Pl = (0, a.createContext)(null);
    const Ol = function() {
        const [e, t] = (0, a.useState)(null), [n, r] = (0, a.useState)(!0);
        (0, a.useEffect)(() => {
            const e = localStorage.getItem("token");
            e ? (la.defaults.headers.common.Authorization = "Bearer ".concat(e), l()) : r(!1)
        }, []);
        const l = async () => {
            try {
                const e = await la.get("".concat(Rl, "/auth/me"));
                t(e.data)
            } catch (e) {
                console.error("Failed to fetch user:", e), localStorage.removeItem("token"), delete la.defaults.headers.common.Authorization
            } finally {
                r(!1)
            }
        };
        if (n) return (0, Pa.jsx)("div", {
            className: "min-h-screen flex items-center justify-center",
            children: (0, Pa.jsx)("div", {
                className: "text-lg font-medium text-slate-600",
                children: "Loading..."
            })
        });
        const o = t => {
            let {
                children: n,
                allowedRoles: r
            } = t;
            return e ? r && !r.includes(e.role) ? (0, Pa.jsx)(Ve, {
                to: "/",
                replace: !0
            }) : n : (0, Pa.jsx)(Ve, {
                to: "/login",
                replace: !0
            })
        };
        return (0, Pa.jsx)(Pl.Provider, {
            value: {
                user: e,
                login: (e, n) => {
                    localStorage.setItem("token", e), la.defaults.headers.common.Authorization = "Bearer ".concat(e), t(n)
                },
                logout: () => {
                    localStorage.removeItem("token"), delete la.defaults.headers.common.Authorization, t(null)
                }
            },
            children: (0, Pa.jsxs)("div", {
                className: "App",
                children: [(0, Pa.jsx)(Ct, {
                    children: (0, Pa.jsxs)(Ye, {
                        children: [(0, Pa.jsx)($e, {
                            path: "/",
                            element: e ? (0, Pa.jsx)(Ve, {
                                to: "/".concat(e.role, "-dashboard"),
                                replace: !0
                            }) : (0, Pa.jsx)(Ya, {})
                        }), (0, Pa.jsx)($e, {
                            path: "/login",
                            element: e ? (0, Pa.jsx)(Ve, {
                                to: "/".concat(e.role, "-dashboard"),
                                replace: !0
                            }) : (0, Pa.jsx)(Za, {})
                        }), (0, Pa.jsx)($e, {
                            path: "/register",
                            element: e ? (0, Pa.jsx)(Ve, {
                                to: "/".concat(e.role, "-dashboard"),
                                replace: !0
                            }) : (0, Pa.jsx)(al, {})
                        }), (0, Pa.jsx)($e, {
                            path: "/student-dashboard",
                            element: (0, Pa.jsx)(o, {
                                allowedRoles: ["student"],
                                children: (0, Pa.jsx)(ml, {})
                            })
                        }), (0, Pa.jsx)($e, {
                            path: "/faculty-dashboard",
                            element: (0, Pa.jsx)(o, {
                                allowedRoles: ["faculty"],
                                children: (0, Pa.jsx)(yl, {})
                            })
                        }), (0, Pa.jsx)($e, {
                            path: "/admin-dashboard",
                            element: (0, Pa.jsx)(o, {
                                allowedRoles: ["admin"],
                                children: (0, Pa.jsx)(bl, {})
                            })
                        }), (0, Pa.jsx)($e, {
                            path: "/repository",
                            element: (0, Pa.jsx)(o, {
                                children: (0, Pa.jsx)(Sl, {})
                            })
                        }), (0, Pa.jsx)($e, {
                            path: "/notices",
                            element: (0, Pa.jsx)(o, {
                                children: (0, Pa.jsx)(Cl, {})
                            })
                        }), (0, Pa.jsx)($e, {
                            path: "/profile",
                            element: (0, Pa.jsx)(o, {
                                children: (0, Pa.jsx)(Tl, {})
                            })
                        })]
                    })
                }), (0, Pa.jsx)(Oa, {})]
            })
        })
    };
    o.createRoot(document.getElementById("root")).render((0, Pa.jsx)(a.StrictMode, {
        children: (0, Pa.jsx)(Ol, {})
    }))
})();
//# sourceMappingURL=main.58e7328e.js.map