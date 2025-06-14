import {
  require_react
} from "./chunk-MXDPTFRY.js";
import {
  __toESM
} from "./chunk-4B2QHNJT.js";

// node_modules/react-countdown-circle-timer/lib/index.module.js
var import_react = __toESM(require_react());
var import_react2 = __toESM(require_react());
var import_react3 = __toESM(require_react());
var import_react4 = __toESM(require_react());
var G = typeof window == "undefined" ? import_react4.useEffect : import_react4.useLayoutEffect;
var I = ({ isPlaying: o, duration: e, startAt: n = 0, updateInterval: t = 0, onComplete: s, onUpdate: r }) => {
  let [i, c] = (0, import_react3.useState)(n), m = (0, import_react3.useRef)(0), p = (0, import_react3.useRef)(n), f = (0, import_react3.useRef)(n * -1e3), u = (0, import_react3.useRef)(null), a = (0, import_react3.useRef)(null), h = (0, import_react3.useRef)(null), w = (g) => {
    let l = g / 1e3;
    if (a.current === null) {
      a.current = l, u.current = requestAnimationFrame(w);
      return;
    }
    let d = l - a.current, C = m.current + d;
    a.current = l, m.current = C;
    let k = p.current + (t === 0 ? C : (C / t | 0) * t), R = p.current + C, v = typeof e == "number" && R >= e;
    c(v ? e : k), v || (u.current = requestAnimationFrame(w));
  }, $ = () => {
    u.current && cancelAnimationFrame(u.current), h.current && clearTimeout(h.current), a.current = null;
  }, y = (0, import_react3.useCallback)((g) => {
    $(), m.current = 0;
    let l = typeof g == "number" ? g : n;
    p.current = l, c(l), o && (u.current = requestAnimationFrame(w));
  }, [o, n]);
  return G(() => {
    if (r == null || r(i), e && i >= e) {
      f.current += e * 1e3;
      let { shouldRepeat: g = false, delay: l = 0, newStartAt: d } = (s == null ? void 0 : s(f.current / 1e3)) || {};
      g && (h.current = setTimeout(() => y(d), l * 1e3));
    }
  }, [i, e]), G(() => (o && (u.current = requestAnimationFrame(w)), $), [o, e, t]), { elapsedTime: i, reset: y };
};
var A = (o, e, n) => {
  let t = o / 2, s = e / 2, r = t - s, i = 2 * r, c = n === "clockwise" ? "1,0" : "0,1", m = 2 * Math.PI * r;
  return { path: `m ${t},${s} a ${r},${r} 0 ${c} 0,${i} a ${r},${r} 0 ${c} 0,-${i}`, pathLength: m };
};
var T = (o, e) => o === 0 || o === e ? 0 : typeof e == "number" ? o - e : 0;
var B = (o) => ({ position: "relative", width: o, height: o });
var P = { display: "flex", justifyContent: "center", alignItems: "center", position: "absolute", left: 0, top: 0, width: "100%", height: "100%" };
var F = (o, e, n, t, s) => {
  if (t === 0) return e;
  let r = (s ? t - o : o) / t;
  return e + n * r;
};
var W = (o) => {
  var e, n;
  return (n = (e = o.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, (t, s, r, i) => `#${s}${s}${r}${r}${i}${i}`).substring(1).match(/.{2}/g)) == null ? void 0 : e.map((t) => parseInt(t, 16))) != null ? n : [];
};
var j = (o, e) => {
  var u;
  let { colors: n, colorsTime: t, isSmoothColorTransition: s = true } = o;
  if (typeof n == "string") return n;
  let r = (u = t == null ? void 0 : t.findIndex((a, h) => a >= e && e >= t[h + 1])) != null ? u : -1;
  if (!t || r === -1) return n[0];
  if (!s) return n[r];
  let i = t[r] - e, c = t[r] - t[r + 1], m = W(n[r]), p = W(n[r + 1]), f = !!o.isGrowing;
  return `rgb(${m.map((a, h) => F(i, a, p[h] - a, c, f) | 0).join(",")})`;
};
var S = (o) => {
  let { duration: e, initialRemainingTime: n, updateInterval: t, size: s = 180, strokeWidth: r = 12, trailStrokeWidth: i, isPlaying: c = false, isGrowing: m = false, rotation: p = "clockwise", onComplete: f, onUpdate: u } = o, a = (0, import_react2.useRef)(), h = Math.max(r, i != null ? i : 0), { path: w, pathLength: $ } = A(s, h, p), { elapsedTime: y } = I({ isPlaying: c, duration: e, startAt: T(e, n), updateInterval: t, onUpdate: typeof u == "function" ? (l) => {
    let d = Math.ceil(e - l);
    d !== a.current && (a.current = d, u(d));
  } : void 0, onComplete: typeof f == "function" ? (l) => {
    var R;
    let { shouldRepeat: d, delay: C, newInitialRemainingTime: k } = (R = f(l)) != null ? R : {};
    if (d) return { shouldRepeat: d, delay: C, newStartAt: T(e, k) };
  } : void 0 }), g = e - y;
  return { elapsedTime: y, path: w, pathLength: $, remainingTime: Math.ceil(g), rotation: p, size: s, stroke: j(o, g), strokeDashoffset: F(y, 0, $, e, m), strokeWidth: r };
};
var D = (o) => {
  let { children: e, strokeLinecap: n, trailColor: t, trailStrokeWidth: s } = o, { path: r, pathLength: i, stroke: c, strokeDashoffset: m, remainingTime: p, elapsedTime: f, size: u, strokeWidth: a } = S(o);
  return import_react.default.createElement("div", { style: B(u) }, import_react.default.createElement("svg", { viewBox: `0 0 ${u} ${u}`, width: u, height: u, xmlns: "http://www.w3.org/2000/svg" }, import_react.default.createElement("path", { d: r, fill: "none", stroke: t != null ? t : "#d9d9d9", strokeWidth: s != null ? s : a }), import_react.default.createElement("path", { d: r, fill: "none", stroke: c, strokeLinecap: n != null ? n : "round", strokeWidth: a, strokeDasharray: i, strokeDashoffset: m })), typeof e == "function" && import_react.default.createElement("div", { style: P }, e({ remainingTime: p, elapsedTime: f, color: c })));
};
D.displayName = "CountdownCircleTimer";
export {
  D as CountdownCircleTimer,
  S as useCountdown
};
//# sourceMappingURL=react-countdown-circle-timer.js.map
