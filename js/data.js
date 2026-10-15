/* =====================================================================
   SİTE İÇERİĞİ — BU DOSYA SİTENİN TEK İÇERİK KAYNAĞIDIR
   =====================================================================
   Andor Mimarlık (İstanbul) için Lento başlangıç şablonu üzerine kuruldu.
   Bilgilerin kaynağı ve firmayla teyit edilecekler: ARASTIRMA.md
   Görsellerin hangi Instagram gönderisinden geldiği: images/KAYNAK.txt

   NASIL KULLANILIR
   1) Metinler: tırnak içindeki yazıları değiştirin. Tırnakları (" ")
      ve satır sonlarındaki virgülleri silmeyin.
   2) Fotoğraflar: "images" klasörüne koyup "images/dosya-adi.jpg" yazın.
      Kırpma noktası gerekirse { src: "images/x.jpg", pos: "50% 30%" }
      (yatay% dikey%), galeride tam genişlik için wide: true ekleyin.
   3) Proje eklemek: "projects" listesindeki bir bloğu { ... }, kopyalayıp
      yapıştırın. "slug" küçük harf, boşluksuz, Türkçe karaktersiz ve her
      projede farklı olmalı.
   4) Bir bölümü kaldırmak için listesini boş bırakın (ör. steps: []).
   5) Yayına alırken "örnek tasarım" şeridini index.html'den kaldırın.
   ===================================================================== */

(function () {

  window.SITE = {

    // Sayfanın en altında görünen küçük not. (Örnek tasarım notu şeritte.)
    demoNote: "",

    /* ---------- MARKA ---------- */
    brand: {
      mark: "&",                    // logodaki bakır renkli işaret
      name: "ANDOR",
      suffix: "Mimarlık",
      city: "İstanbul",
      description: "Andor Mimarlık; İstanbul'da mimari ve iç mimari tasarım, proje, uygulama (fitout) ve peyzaj hizmeti veren mimarlık ofisi."
    },

    nav: [
      { label: "Projeler",  href: "#projeler" },
      { label: "Ofis",      href: "#ofis" },
      { label: "Hizmetler", href: "#hizmetler" },
      { label: "İletişim",  href: "#iletisim" }
    ],

    /* ---------- AÇILIŞ ---------- */
    hero: {
      slides: [
        { image: "images/halic-salon-01.jpg",        caption: "Salon ve Balkon Kahve Köşesi — Haliç, İstanbul",       project: "halic-salon-balkon" },
        { image: "images/basaksehir-01.jpg",         caption: "Salon, TV Ünitesi ve Yemek Bölümü — Başakşehir, İstanbul", project: "basaksehir-salon" },
        { image: "images/ad-ofis-01.jpg",            caption: "AD Ofis — Kağıthane, İstanbul",                        project: "ad-ofis", pos: "50% 62%" }
      ],
      kicker: "İstanbul · Mimarlık ve iç mimarlık",
      intro: "Konut, ofis, mağaza ve restoran projelerini tasarımdan anahtar teslim uygulamaya kadar üstleniyoruz.",
      note: "Sizi dinliyoruz; vizyonunuzu öğrendikten sonra isteklerinize en uygun çözümle size geri dönüyoruz. Tasarım, proje, uygulama ve peyzaj tek elden.",
      linkLabel: "Ofisi tanıyın",
      linkHref: "#ofis"
    },

    /* ---------- PROJELER ----------
       Adlar firmanın Instagram gönderi açıklamalarından, konumlar gönderilerin
       konum etiketlerinden. Yıl: 2026 ve 2021 gönderileri iş bitince paylaşılmış;
       2023'te toplu yüklenen eski işlerde yıl bilinmediği için yazılmadı.
    */
    projects: [
      {
        slug: "halic-salon-balkon",
        title: "Salon ve Balkon Kahve Köşesi",
        category: "Konut",
        location: "Haliç, İstanbul",
        year: 2026,
        status: "Tasarım ve uygulama",
        cover: "images/halic-salon-01.jpg",
        text: [
          "Mutfağa açılan salonda tek bir duvar boyunca uzanan ceviz tonlu dolaplar, ışıklı cam vitrinler ve dikey çıtalı bir ara bölme.",
          "Balkonda kahve köşesi: taş görünümlü tezgâh, altında ışık bandı olan ahşap üst dolaplar ve klimanın dış ünitesini gizleyen delikli metal kapaklı bir dolap."
        ],
        gallery: [
          { src: "images/halic-salon-02.jpg", wide: true },
          "images/halic-balkon-01.jpg",
          "images/halic-balkon-02.jpg",
          "images/halic-balkon-03.jpg",
          "images/halic-balkon-04.jpg"
        ]
      },
      {
        slug: "ad-ofis",
        title: "AD Ofis",
        category: "Ofis",
        location: "Kağıthane, İstanbul",
        year: 2021,
        status: "Uygulama",
        cover: { src: "images/ad-ofis-01.jpg", pos: "50% 60%" },
        text: [
          "Tekfen Kağıthane Ofispark'taki bir ofisin uygulaması: açık çalışma alanları, cam bölmeli toplantı ve yönetici odaları, karşılama ve bekleme alanı.",
          "Tavan açık bırakılıp tesisat görünür kılındı; ahşap görünümlü zemin, beyaz masalar ve kırmızı-mavi-sarı renk vurgularıyla aydınlık bir çalışma ortamı kuruldu."
        ],
        gallery: [
          "images/ad-ofis-02.jpg",
          "images/ad-ofis-03.jpg",
          "images/ad-ofis-04.jpg",
          "images/ad-ofis-05.jpg",
          { src: "images/ad-ofis-06.jpg", wide: true, pos: "50% 55%" }
        ]
      },
      {
        slug: "basaksehir-salon",
        title: "Salon, TV Ünitesi ve Yemek Bölümü",
        category: "Konut",
        location: "Başakşehir, İstanbul",
        year: 2026,
        status: "Tasarım ve uygulama",
        cover: "images/basaksehir-01.jpg",
        text: [
          "TV duvarı damarlı taş görünümlü kaplamayla, iki yanı gizli ışıklı ahşap raflarla kuruldu. Yemek bölümünde aynalı panel ile taş kaplı kolon arasına asılı raflar, ahşap kafes desenli bir duvar paneli ve konsol yer alıyor.",
          "Köşelerde yuvarlatılmış nişler, aydınlatmalı vitrinler ve taş tezgâhlı bir kahve köşesi; ahşap yüzeylerin hepsi aynı sıcak tonda."
        ],
        gallery: [
          { src: "images/basaksehir-02.jpg", wide: true },
          "images/basaksehir-03.jpg",
          "images/basaksehir-04.jpg",
          "images/basaksehir-05.jpg",
          "images/basaksehir-06.jpg",
          "images/basaksehir-07.jpg",
          "images/basaksehir-08.jpg"
        ]
      },
      {
        slug: "maxlive-store-cephe",
        title: "Maxlive Store Cephe Giydirme",
        category: "Ticari · Cephe",
        location: "",
        year: "",
        status: "Cephe uygulaması",
        cover: { src: "images/maxlive-01.jpg", pos: "50% 48%" },
        text: [
          "Bir mağaza binasının cephe yenilemesi: taş görünümlü kaplama, cephenin ortasında yukarı doğru uzanan ahşap çıtalı şerit ve vitrin katı.",
          "Kenarlardaki lineer aydınlatma, binayı gece de sokaktan seçilir kılıyor."
        ],
        gallery: [
          "images/maxlive-03.jpg",
          "images/maxlive-04.jpg"
        ]
      },
      {
        slug: "bahcelievler-daire",
        title: "Giriş Holü, Mutfak ve Yatak Odaları",
        category: "Konut",
        location: "Bahçelievler, İstanbul",
        year: 2026,
        status: "Tasarım ve uygulama",
        cover: { src: "images/bahcelievler-mutfak-01.jpg", pos: "50% 55%" },
        text: [
          "Girişte ahşap çıtalı panel ile füme ayna arasına asılı bir dresuar ve boydan vestiyer dolapları. Mutfakta koyu taş görünümlü tezgâh arası, ahşap dokulu dolaplar ve füme camlı üst vitrinler.",
          "Yatak odasında oval aynalı makyaj masası ve dikey çıtalı duvar paneli; çocuk odasında arkadan aydınlatılan dünya haritası, ışıklı raflar ve çalışma masası."
        ],
        gallery: [
          "images/bahcelievler-hol-01.jpg",
          "images/bahcelievler-hol-02.jpg",
          "images/bahcelievler-mutfak-02.jpg",
          "images/bahcelievler-yatak-01.jpg",
          "images/bahcelievler-yatak-02.jpg",
          "images/bahcelievler-yatak-03.jpg",
          "images/bahcelievler-cocuk-01.jpg",
          "images/bahcelievler-cocuk-02.jpg"
        ]
      },
      {
        slug: "otel-bar",
        title: "Otel Barı",
        category: "Ticari · Bar",
        location: "",
        year: "",
        status: "Uygulama",
        cover: { src: "images/otel-bar-01.jpg", pos: "50% 62%" },
        text: [
          "Bir otelin bar alanının uygulaması: yeşil seramik kaplı bar tezgâhı, siyah-beyaz geometrik desenli zemin ve ahşap kaplı kolonlar.",
          "Girişte beyaz mozaik kaplı, yuvarlak hatlı bir karşılama bankosu; tezgâh boyunca gizli ışık."
        ],
        gallery: [
          "images/otel-bar-02.jpg",
          "images/otel-bar-03.jpg",
          "images/otel-bar-04.jpg",
          "images/otel-bar-05.jpg"
        ]
      },
      {
        slug: "bahcelievler-salon",
        title: "Salon ve Yemek Alanı",
        category: "Konut",
        location: "Bahçelievler, İstanbul",
        year: 2026,
        status: "Tasarım ve uygulama",
        cover: { src: "images/bahcelievler-salon-02.jpg", pos: "50% 62%" },
        text: [
          "TV duvarında iri damarlı taş görünümlü kaplama ve altında ışıklı, çıtalı bir konsol. Tavanda gizli aydınlatmalı bir asma tavan ve ray spotlar.",
          "Yemek alanında heykelsi ayaklı masa, iki yanında ışıklı koyu ahşap raflar ve dikey çıtalı duvar kaplamaları."
        ],
        gallery: [
          "images/bahcelievler-salon-01.jpg",
          "images/bahcelievler-salon-03.jpg",
          "images/bahcelievler-salon-04.jpg",
          "images/bahcelievler-salon-05.jpg"
        ]
      },
      {
        slug: "etiler-genc-odasi",
        title: "Genç Odası",
        category: "Konut",
        location: "Etiler, İstanbul",
        year: 2026,
        status: "Tasarım ve uygulama",
        cover: { src: "images/etiler-genc-01.jpg", pos: "50% 72%" },
        text: [
          "Yatağın arkasında baştan sona ahşap çıtalı duvar paneli ve altından ışık alan tavan dolapları; dolap kapakları füme cam.",
          "Karşı duvarda TV ünitesi ve ahşap çıtalar arasında ışıklı raflar. Duvarlarda dokulu kaplama, renkler bej ve ceviz tonlarında."
        ],
        gallery: [
          "images/etiler-genc-05.jpg",
          "images/etiler-genc-02.jpg",
          "images/etiler-genc-03.jpg",
          "images/etiler-genc-04.jpg"
        ]
      }
    ],

    /* ---------- OFİS (HAKKIMIZDA) ----------
       Metin, firmanın eski sitesindeki (andormimarlik.com, 2018) "Hakkımızda"
       ve "Hizmetlerimiz" sayfalarından kısaltıldı.
    */
    office: {
      headline: "Çalışma şeklimiz yalın ve etkili: sizi dinler, vizyonunuzu öğrenir, en uygun çözümle geri döneriz.",
      image: "images/basaksehir-08.jpg",
      imageAlt: "Andor Mimarlık uygulamasından ahşap panel ve duvar lambası detayı",
      text: [
        "Andor Mimarlık; marka kavramını ve bunu tasarımlarına yansıtmayı iyi bilen, yaratıcı bireylerden oluşan bir ekip. Mimari, iç mimari ve stand konularında projenin her aşamasında müşterilerinin taleplerine cevap veriyoruz.",
        "Son yıllarda iç mimaride konut, ofis, mağaza ve restoran ağırlıklı çalışıyoruz. Amacımız, kâğıt üzerinde sunduğumuz tasarımların uygulamada da aynı kalitede hayata geçmesi."
      ],
      stats: [],
      people: []
    },

    /* ---------- HİZMETLER ----------
       Eski sitedeki sekiz hizmet başlığı dörde toplandı.
    */
    services: [
      { title: "Mimari Tasarım ve Proje",         text: "Mimari tasarım, proje ve uygulama. Mekanik, elektrik, inşaat mühendisliği ve peyzaj gibi disiplinler arasında proje ve uygulama koordinasyonu." },
      { title: "İç Mimari Tasarım ve Uygulama",   text: "Konut, ofis, mağaza ve restoran için iç mimari tasarım, proje ve uygulama (fitout): dolap, panel, aydınlatma ve kaplama detaylarına kadar." },
      { title: "Anahtar Teslim ve Proje Yönetimi", text: "Anahtar teslim projeler, proje yönetimi ve yönetim danışmanlığı, uygulama kontrolörlüğü ve uygulama yönetimi." },
      { title: "Stand, Dekor ve Danışmanlık",     text: "Ürün standı, aktivite ve dekor tasarımı ile uygulaması; mimari ve iç mimari danışmanlık." }
    ],

    /* ---------- NASIL ÇALIŞIYORUZ ---------- */
    steps: [
      { title: "Dinleriz",  text: "İhtiyacınızı, beklentinizi ve vizyonunuzu öğreniriz." },
      { title: "Tasarım",   text: "İsteklerinize en uygun çözümü tasarım ve görsellerle sunarız." },
      { title: "Proje",     text: "Uygulama projesini hazırlar; mekanik, elektrik ve inşaat işlerini koordine ederiz." },
      { title: "Uygulama",  text: "Uygulamayı yönetir, işi anahtar teslim tamamlarız." }
    ],

    /* ---------- İLETİŞİM ---------- */
    contact: {
      headline: "Projenizi konuşalım.",
      note: "Eviniz, ofisiniz ya da mağazanız için aklınızdakini anlatın; WhatsApp'tan yazabilir ya da arayabilirsiniz.",
      phone: "+90 212 438 16 94",
      whatsapp: "+90 537 241 63 08",
      whatsappMessage: "Merhaba, web sitenizden ulaşıyorum. Bir proje için bilgi almak istiyorum.",
      email: "info@andormimarlik.com",
      address: "Oruçreis Mah. Giyimkent Sitesi 18. Sok. No: 14, Esenler / İstanbul",
      mapUrl: "",
      hours: "",
      social: [
        { label: "Instagram", href: "https://www.instagram.com/andormimarlik/" }
      ]
    },

    /* ---------- BÖLÜM BAŞLIKLARI ---------- */
    labels: {
      menu: "Menü",
      projects: "Projeler",
      projectsNote: "seçilmiş iş",
      office: "Ofis",
      people: "Ekip",
      services: "Hizmetler",
      steps: "Nasıl çalışıyoruz",
      contact: "İletişim",
      whatsapp: "WhatsApp'tan yazın",
      call: "Arayın",
      directions: "Yol tarifi",
      address: "Adres",
      phone: "Telefon",
      email: "E-posta",
      hours: "Çalışma saatleri",
      social: "Sosyal medya",
      top: "Yukarı",
      close: "Kapat",
      prev: "Önceki",
      next: "Sonraki",
      allProjects: "Tüm projeler",
      projectCta: "Benzer bir iş için yazın",
      factLocation: "Yer",
      factYear: "Yıl",
      factArea: "Alan",
      factType: "Tür",
      factStatus: "Kapsam",
      noImage: "Görsel eklenecek"
    }
  };
})();
