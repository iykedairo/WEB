function $( cssquery ) { var t = document.querySelectorAll(cssquery); return (t.length === 0) ? false : (t.length === 1) ? t[0] : t; }