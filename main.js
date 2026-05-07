/* 
 * CyrustLabs Main JS - Clean Version
 * Berisi utilitas UI tanpa skrip pelacak/lisensi.
 */

(function(window, document) {
    "use strict";

    // --- [ 1. Objek Utilitas Utama: xAR ] ---
    // Menggantikan fungsi window.xAR agar fitur UI tetap jalan
    const utils = {
        // Selektor Dasar
        geId: (t) => document.getElementById(t),
        gCls: (t) => document.getElementsByClassName(t),
        qSel: (t) => document.querySelector(t),
        qSell: (t) => document.querySelectorAll(t),

        // Manipulasi Class
        aCls: (t, ...e) => {
            const el = typeof t === "string" ? document.querySelector(t) : t;
            if (el) el.classList.add(...e);
        },
        rCls: (t, ...e) => {
            const el = typeof t === "string" ? document.querySelector(t) : t;
            if (el) el.classList.remove(...e);
        },
        cCls: (t, e) => {
            const el = typeof t === "string" ? document.querySelector(t) : t;
            return el ? el.classList.contains(e) : false;
        },

        // Manipulasi Atribut
        sAttr: (t, e, r) => {
            const el = typeof t === "string" ? document.querySelector(t) : t;
            if (el) el.setAttribute(e, r);
        },
        gAttr: (t, e) => {
            const el = typeof t === "string" ? document.querySelector(t) : t;
            return el ? el.getAttribute(e) : null;
        },

        // Pemuat Aset (CSS & JS secara dinamis)
        aCss: (css, id) => {
            const style = document.createElement("style");
            if (id) style.id = id;
            style.textContent = css;
            document.head.appendChild(style);
        },
        ldJs: (t) => {
            if (!t || !t.url) return;
            const script = document.createElement("script");
            script.src = t.url;
            script.async = t.async !== false;
            if (t.id) script.id = t.id;
            if (t.sc) script.onload = t.sc;
            if (t.er) script.onerror = t.er;
            document.body.appendChild(script);
        },

        // Utilitas Tambahan
        jOs: (t) => JSON.stringify(t),
        jOp: (t) => JSON.parse(t),
        
        // Formatter Mata Uang (Sesuai fungsi xCur yang kita bedah)
        xCur: {
            IDR: (val) => new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(val),
            USD: (val) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 0 }).format(val)
        }
    };

    // Ekspos ke global window
    window.xAR = utils;
    
    // --- [ 2. Fungsi Inisialisasi UI ] ---
    // Tambahkan logika interaksi tema di sini (misal: Dark Mode)
    const initCyrustUI = () => {
        console.log("CyrustLabs UI Initialized.");
        
        // Contoh: Menangani klik menu mobile
        const menuBtn = utils.geId('menu-toggler');
        if (menuBtn) {
            menuBtn.addEventListener('click', () => {
                utils.rCls('#sidebar', 'hidden');
            });
        }
    };

    // Jalankan saat DOM Ready
    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", initCyrustUI);
    } else {
        initCyrustUI();
    }

})(window, document);

/* 
 * --- [ CATATAN PENTING ] ---
 * 1. Saya telah membuang blok "IIFE" yang berisi perhitungan matematika obfuscation.
 * 2. Saya telah menghapus fungsi sendMessage ke Bot Telegram.
 * 3. Saya menghapus mekanisme "document.body.remove()" agar blog tidak blank.
 * 4. Pastikan memanggil file ini di template Blogger kamu tanpa variabel 'mn_js'.
 */
