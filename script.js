(() => {
  const qs = (s, el = document) => el.querySelector(s);
  const qsa = (s, el = document) => Array.from(el.querySelectorAll(s));

  const copyToClipboard = async (text) => {
    try { await navigator.clipboard.writeText(text); showToast('Copied URL'); }
    catch { showToast('Copy failed'); }
  };

  const showToast = (msg) => {
    let t = qs('#toast');
    if (!t) {
      t = document.createElement('div');
      t.id = 'toast';
      t.style.position = 'fixed';
      t.style.bottom = '16px';
      t.style.left = '50%';
      t.style.transform = 'translateX(-50%)';
      t.style.background = '#16243a';
      t.style.color = '#e6eaf2';
      t.style.border = '1px solid #2a3550';
      t.style.padding = '8px 12px';
      t.style.borderRadius = '8px';
      t.style.boxShadow = '0 8px 30px rgba(0,0,0,.35)';
      document.body.appendChild(t);
    }
    t.textContent = msg;
    t.style.opacity = '1';
    clearTimeout(t._t);
    t._t = setTimeout(() => (t.style.opacity = '0'), 1500);
  };

  const init = () => {
    qsa('.scenarios .open').forEach((btn) => {
      btn.addEventListener('click', () => {
        const url = btn.getAttribute('data-url');
        window.open(url, '_blank', 'noopener,noreferrer');
      });
    });
    qsa('.scenarios .copy').forEach((btn) => {
      btn.addEventListener('click', () => copyToClipboard(btn.getAttribute('data-url')));
    });
  };

  document.addEventListener('DOMContentLoaded', init);
})();


