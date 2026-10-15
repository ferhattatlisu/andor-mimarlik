/* Demo şeridi: sayfanın altında "örnek tasarım" notu gösterir.
   Siteyi yayına alırken bu dosyayı ve index.html'deki <script> satırını silin. */
(function () {
  var serit = document.createElement("div");
  serit.id = "demo-serit";
  serit.setAttribute("role", "note");
  var uzun = "Örnek tasarım · tekTıkla tarafından Andor Mimarlık için hazırlandı · Fotoğraflar firmanın kendi Instagram paylaşımlarından";
  var kisa = "Örnek tasarım · tekTıkla · Andor Mimarlık için";
  function metin() { serit.textContent = window.innerWidth < 700 ? kisa : uzun; }
  metin();
  serit.style.cssText = "position:fixed;left:0;right:0;bottom:0;z-index:99999;background:#111;color:#fff;" +
    "font:500 12px/1.35 'Inter Tight',system-ui,sans-serif;letter-spacing:.02em;text-align:center;" +
    "padding:8px 14px calc(8px + env(safe-area-inset-bottom,0px))";
  // Şerit alt bilgiyi örtmesin diye sayfanın sonuna aynı yükseklikte boşluk
  var bosluk = document.createElement("div");
  bosluk.setAttribute("aria-hidden", "true");
  function olc() {
    metin();
    bosluk.style.height = serit.offsetHeight + "px";
    // Açılış fotoğrafının alt yazısı ve noktaları şeridin altında kalmasın
    var bar = document.querySelector(".hero-bar");
    if (bar) bar.style.bottom = serit.offsetHeight + "px";
  }
  document.body.appendChild(bosluk);
  document.body.appendChild(serit);
  olc();
  window.addEventListener("resize", olc);
})();
