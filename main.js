/* CYRUST CORE ENGINE - No License, No Tracker */
(function(window, document) {
    "use strict";

    const cAel = (t) => typeof t === "string" ? document.querySelector(t) : (t instanceof Node ? t : null);
    
    window.geId = (id) => document.getElementById(id);
    window.gCls = (cls) => document.getElementsByClassName(cls);
    window.qSel = (sel) => document.querySelector(sel);
    window.qSell = (sel) => document.querySelectorAll(sel);
    
    window.aCls = (t, ...e) => { const el = cAel(t); if (el && e.length > 0) el.classList.add(...e); return el; };
    window.rCls = (t, ...e) => { const el = cAel(t); if (el && e.length > 0) el.classList.remove(...e); return el; };
    window.cCls = (t, e) => { const el = cAel(t); return el ? el.classList.contains(e) : false; };
    
    window.sAttr = (t, e, r) => { const el = cAel(t); if (el && e) el.setAttribute(e, r); return el; };
    window.gAttr = (t, e) => { const el = cAel(t); return el && e ? el.getAttribute(e) : null; };
    window.rAttr = (t, ...e) => { const el = cAel(t); if (el && e.length > 0) e.forEach(attr => el.removeAttribute(attr)); return el; };
    window.sAtd = (t, e, n) => { const el = cAel(t); if (el && e) el.dataset[e] = n; return el; };
    window.gAtd = (t, e) => { const el = cAel(t); return el && e ? el.dataset[e] : null; };
    window.rAtd = (t, ...e) => { const el = cAel(t); if (el && e.length > 0) e.forEach(attr => delete el.dataset[attr]); return el; };
    
    window.aCss = (css, id) => { if (!css) return null; const style = document.createElement("style"); if (id) style.id = id; style.textContent = css; document.head.appendChild(style); };
    window.ldJs = (t) => { if (!t || !t.url) return null; const script = document.createElement("script"); script.src = t.url; script.async = true; document.body.appendChild(script); };
    
    window.jOs = (t) => JSON.stringify(t);
    window.jOp = (t) => JSON.parse(t);
    window.isObj = (t) => typeof t === "object" && t !== null && !Array.isArray(t);
    window.eFcs = (t, e, n) => { const el = cAel(t); if(el) el.scrollIntoView({behavior: "smooth"}); return true; };
    window.rszI = (t, e) => typeof t === "string" ? t.replace(/=[swh][0-9]+.*?/g, "=" + e) : t;
    window.domCL = (t) => { if(document.readyState === "loading") document.addEventListener("DOMContentLoaded", t); else t(); };
    
    window.toastNotif = () => {};
    window.fixedNotif = () => {};

    window.xCur = {
        _f: (t, e, o, i) => { if (!isNaN(Number(o))) { return Number(o).toLocaleString(t, { style: "currency", currency: e, minimumFractionDigits: i || 0 }); } return ""; },
        USD: function(t, e) { return this._f("en-US", "USD", t, e); },
        IDR: function(t, e) { return this._f("id-ID", "IDR", t, e); }
    };

    // Ini kunci agar gpAPP.js mau jalan!
    window.cfgAG = window._AR || window.cfgAG || {};
})(window, document);
