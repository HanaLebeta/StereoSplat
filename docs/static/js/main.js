document.addEventListener('DOMContentLoaded', function () {
  var copyBtn = document.getElementById('copy-bibtex');
  var bibtexText = document.getElementById('bibtex-text');

  if (copyBtn && bibtexText) {
    copyBtn.addEventListener('click', function () {
      var text = bibtexText.textContent;
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(function () {
          showCopied(copyBtn);
        }).catch(function () {
          fallbackCopy(text, copyBtn);
        });
      } else {
        fallbackCopy(text, copyBtn);
      }
    });
  }

  function showCopied(btn) {
    var original = btn.innerHTML;
    btn.innerHTML = '<i class="fa-solid fa-check"></i> Copied';
    setTimeout(function () {
      btn.innerHTML = original;
    }, 2000);
  }

  function fallbackCopy(text, btn) {
    var textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.style.position = 'fixed';
    textarea.style.opacity = '0';
    document.body.appendChild(textarea);
    textarea.select();
    try {
      document.execCommand('copy');
      showCopied(btn);
    } catch (e) {
    }
    document.body.removeChild(textarea);
  }
});
