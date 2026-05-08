/* * CyrustLabs Main JS - Clean & Global Version
 * Fixes "is not a function" error for gpAPP.js and other plugins
 */

(function(window, document) {
    "use strict";

    // Fungsi dasar untuk memastikan elemen yang diklik/dipilih valid
    const cAel = (t) => {
        return typeof t === "string" ? document.querySelector(t) : (t instanceof Node ? t : null);
    };

    // Kumpulan Utilitas Utama (Tanpa Lisensi/Tracker)
    const utils = {
        geId: (id) => document.getElementById(id),
        gCls: (cls) => document.getElementsByClassName(cls),
        qSel: (sel) => document.querySelector(sel),
        qSell: (sel) => document.querySelectorAll(sel),
        
        // Manipulasi Class (Ini yang dicari oleh gpAPP.js)
        aCls: (t, ...e) => { const el = cAel(t); if (el && e.length > 0) el.classList.add(...e); return el; },
        rCls: (t, ...e) => { const el = cAel(t); if (el && e.length > 0) el.classList.remove(...e); return el; },
        cCls: (t, e) => { const el = cAel(t); return el ? el.classList.contains(e) : false; },
        
        // Manipulasi Atribut
        sAttr: (t, e, r) => { const el = cAel(t); if (el && e) el.setAttribute(e, r); return el; },
        gAttr: (t, e) => { const el = cAel(t); return el && e ? el.getAttribute(e) : null; },
        rAttr: (t, ...e) => { const el = cAel(t); if (el && e.length > 0) e.forEach(attr => el.removeAttribute(attr)); return el; },
        
        // Manipulasi Data (Dataset)
        sAtd: (t, e, n) => { const el = cAel(t); if (el && e) el.dataset[e] = n; return el; },
        gAtd: (t, e) => { const el = cAel(t); return el && e ? el.dataset[e] : null; },
        rAtd: (t, ...e) => { const el = cAel(t); if (el && e.length > 0) e.forEach(attr => delete el.dataset[attr]); return el; },
        
        // Pemuat File Eksternal (CSS/JS)
        aCss: (css, id) => { 
            if (!css) return null; 
            const style = document.createElement("style"); 
            if (id) style.id = id; 
            style.textContent = css; 
            document.head.appendChild(style); 
        },
        ldJs: (t) => { 
            if (!t || !t.url) return null; 
            const script = document.createElement("script"); 
            script.src = t.url; 
            script.async = t.async !== false; 
            if (t.id) script.id = t.id; 
            if (t.sc) script.onload = t.sc; 
            if (t.er) script.onerror = t.er; 
            document.body.appendChild(script); 
        },
        
        // Format JSON
        jOs: (t) => JSON.stringify(t),
        jOp: (t) => JSON.parse(t),
        
        // Pengganti Fitur Notifikasi APMODY agar tidak error
        toastNotif: (msg) => { console.log("Cyrust Notif:", msg); },
        fixedNotif: (msg) => { console.log("Cyrust Notif:", msg); }
    };

    // --- EKSPOS KE GLOBAL WINDOW ---
    // Ini langkah wajib agar gpAPP.js bisa membaca semua fungsi di atas
    for (const key in utils) {
        window[key] = utils[key];
    }
    
    // Cadangan jika ada skrip yang memanggil objek xAR secara langsung
    window.xAR = utils;
    
    // Format Mata Uang (Dibutuhkan untuk beberapa widget)
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
