(function(window, document) {
    "use strict";

    // Validasi Elemen
    const cAel = (t) => typeof t === "string" ? document.querySelector(t) : (t instanceof Node ? t : null);

    // --- DEKLARASI GLOBAL UNTUK FITUR TEMA ---
    window.geId = (id) => document.getElementById(id);
    window.gCls = (cls) => document.getElementsByClassName(cls);
    window.qSel = (sel) => document.querySelector(sel);
    window.qSell = (sel) => document.querySelectorAll(sel);
    
    // Fungsi Manipulasi Class (Ini yang error "is not a function" tadi)
    window.aCls = (t, ...e) => { const el = cAel(t); if (el && e.length > 0) el.classList.add(...e); return el; };
    window.rCls = (t, ...e) => { const el = cAel(t); if (el && e.length > 0) el.classList.remove(...e); return el; };
    window.cCls = (t, e) => { const el = cAel(t); return el ? el.classList.contains(e) : false; };
    
    // Fungsi Atribut
    window.sAttr = (t, e, r) => { const el = cAel(t); if (el && e) el.setAttribute(e, r); return el; };
    window.gAttr = (t, e) => { const el = cAel(t); return el && e ? el.getAttribute(e) : null; };
    window.rAttr = (t, ...e) => { const el = cAel(t); if (el && e.length > 0) e.forEach(attr => el.removeAttribute(attr)); return el; };
    
    // Fungsi Dataset
    window.sAtd = (t, e, n) => { const el = cAel(t); if (el && e) el.dataset[e] = n; return el; };
    window.gAtd = (t, e) => { const el = cAel(t); return el && e ? el.dataset[e] : null; };
    window.rAtd = (t, ...e) => { const el = cAel(t); if (el && e.length > 0) e.forEach(attr => delete el.dataset[attr]); return el; };
    
    // Injeksi CSS / JS
    window.aCss = (css, id) => { 
        if (!css) return null; 
        const style = document.createElement("style"); 
        if (id) style.id = id; 
        style.textContent = css; 
        document.head.appendChild(style); 
    };
    window.ldJs = (t) => { 
        if (!t || !t.url) return null; 
        const script = document.createElement("script"); 
        script.src = t.url; 
        script.async = t.async !== false; 
        if (t.id) script.id = t.id; 
        if (t.sc) script.onload = t.sc; 
        if (t.er) script.onerror = t.er; 
        document.body.appendChild(script); 
    };
    
    window.jOs = (t) => JSON.stringify(t);
    window.jOp = (t) => JSON.parse(t);
    
    // Notifikasi
    window.toastNotif = (msg) => { console.log("Cyrust Notif:", msg); };
    window.fixedNotif = (msg) => { console.log("Cyrust Notif:", msg); };

    // Format Harga
    window.xCur = {
        _f: (t, e, o, i) => {
            if (!isNaN(Number(o))) {
                return Number(o).toLocaleString(t, { style: "currency", currency: e, minimumFractionDigits: i != null ? i : 0 });
            }
            return "";
        },
        USD: function(t, e) { return this._f("en-US", "USD", t, e); },
        IDR: function(t, e) { return this._f("id-ID", "IDR", t, e); }
    };

})(window, document);
