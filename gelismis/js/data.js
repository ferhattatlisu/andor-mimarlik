/* =====================================================================
   SİTE İÇERİĞİ — BU DOSYA SİTENİN TEK İÇERİK KAYNAĞIDIR
   =====================================================================
   Andor Mimarlık (Esenler / İstanbul) — gelişmiş paket (Mono şablonu).
   Başlangıç paketi (Lento) bir üst klasörde; ikisi aynı bilgilerle kuruldu.

   KAYNAKLAR — ayrıntı: ../ARASTIRMA.md
   - Görsellerin tümü firmanın kendi Instagram hesabından (@andormimarlik);
     dosya adı -> gönderi kodu tablosu images/KAYNAK.txt içinde.
   - Metinler: firmanın eski sitesi (andormimarlik.com, Wayback 2018),
     Instagram biyografisi ve gönderi açıklamaları; proje anlatımları yalnızca
     fotoğrafta görülenlerden. Alan, müşteri adı, ekip, kuruluş yılı uydurulmadı.
   - İnsan (işçi, müşteri, ayna yansıması) ve üçüncü kişi adı görünen kareler konmadı.

   NASIL KULLANILIR
   1) Metinler: tırnak içindeki yazıları değiştirin. Tırnakları (" ")
      ve satır sonlarındaki virgülleri silmeyin.
   2) Fotoğraflar: fotoğrafı "images" klasörüne koyun ve g("dosya-adi")
      yazın (uzantısız; dosya .jpg olmalı).
   3) Proje eklemek: "projects" listesindeki bir bloğu { ... } kopyalayıp
      yapıştırın. "slug" adresi belirler (proje.html?id=slug): küçük harf,
      boşluksuz, Türkçe karaktersiz ve her projede farklı olmalı.
   4) Galeri düzeni: genis("ad") tam genişlik, yatay("ad") yarım genişlik
      yatay, dikey("ad") yarım genişlik dikey; iki yarım genişlik yan yana.
   5) Altı çizili kelime: [köşeli parantez] içine alınan kelimeler.
   6) Bir bölümü kaldırmak: listesini boş bırakın (ör. news: [],).
   ===================================================================== */

(function () {
  // images klasöründeki bir .jpg dosyasının yolunu üretir.
  function g(ad) { return "images/" + ad + ".jpg"; }
  function dikey(ad) { return { src: g(ad), wide: false }; }
  function yatay(ad) { return { src: g(ad), land: true }; }
  function genis(ad) { return { src: g(ad), wide: true }; }

  window.SITE = {

    /* ---------- MARKA ---------- */
    brand: {
      mark: "&",           // logodaki bakır renkli işaret
      name: "ANDOR",       // logonun kalın kısmı
      suffix: "Mimarlık",  // logonun ince kısmı (kaydırınca gizlenir)
      description: "Andor Mimarlık; İstanbul'da konut, ofis, mağaza ve restoran için mimari ve iç mimari tasarım, proje, uygulama (fitout) ve peyzaj hizmeti veren mimarlık ofisi."
    },

    /* ---------- ÜST MENÜ ---------- */
    nav: [
      { label: "Projeler", href: "projeler.html" },
      { label: "Ofis",     href: "studyo.html" },
      { label: "İletişim", href: "studyo.html#iletisim" }
    ],

    /* ---------- AÇILIŞ (HERO) ---------- */
    // Sırayla dönen başlıklar. Her başlık iki satırdır; satırları kısa tutun (en çok ~14 harf).
    // Instagram biyografisindeki "Design - Project - Fitout - Landscape" sırasından.
    headlines: [
      ["TASARIMDAN",  "UYGULAMAYA"],
      ["MİMARİ VE",   "İÇ MİMARİ"],
      ["HER DETAYI",  "ÇİZERİZ"],
      ["ANAHTAR",     "TESLİM"]
    ],
    heroVideo: "",
    heroVideoCaption: "",
    heroSlides: [
      { image: g("halic-salon-01"), caption: "Salon ve Balkon Kahve Köşesi — Haliç, İstanbul" },
      { image: g("basaksehir-01"),  caption: "Salon, TV Ünitesi ve Yemek Bölümü — Başakşehir, İstanbul" },
      { image: g("ad-ofis-01"),     caption: "AD Ofis — Kağıthane, İstanbul" },
      { image: g("basaksehir-02"),  caption: "Yemek bölümü — Başakşehir, İstanbul" },
      { image: g("sosyal-01"),      caption: "Çatı Katı Sosyal Alanı" }
    ],

    /* ---------- MANİFESTO ---------- */
    // [Köşeli parantez] içindeki kelimelerin altı çizilir. Eski sitedeki "Hakkımızda" metninden.
    manifesto: "Sizi [dinliyoruz]. Vizyonunuzu öğrendikten sonra isteklerinize en uygun [yaratıcı çözümle] geri dönüyor; kâğıt üzerindeki tasarımın uygulamada da aynı [kalitede] hayata geçmesi için çalışıyoruz.",
    manifestoNote: "Andor Mimarlık; mimari, iç mimari ve stand konularında projenin her aşamasında müşterilerinin taleplerine cevap veren bir İstanbul ofisi. Son yıllarda konut, ofis, mağaza ve restoran ağırlıklı çalışıyoruz.",

    /* ---------- BÖLÜNMÜŞ SABİT BÖLÜM (fotoğraflar akar, metin sabit kalır) ---------- */
    split: [
      {
        label: "Tasarım",
        title: "Her odayı detayıyla çizeriz.",
        text: "Ahşap çıtalı paneller, gizli ışık bantları, taş kaplamalı TV duvarları ve mekâna göre çizilmiş dolaplar. Bir salonu da, bir çocuk odasını da aynı özenle, detayına kadar tasarlarız.",
        linkLabel: "Projeleri inceleyin",
        linkHref: "projeler.html",
        images: [
          g("basaksehir-08"),
          g("basaksehir-03"),
          g("etiler-genc-01")
        ]
      },
      {
        label: "Uygulama",
        title: "Boş bir kattan kullanıma hazır mekâna.",
        text: "Tasarımı uygulamaya biz taşırız: mekanik, elektrik, inşaat ve peyzaj gibi farklı disiplinleri koordine eder, işi anahtar teslim tamamlarız. Boş bir çatı katı da, bir mağaza cephesi de aynı titizlikle ele alınır.",
        linkLabel: "Çatı katı dönüşümü",
        linkHref: "proje.html?id=cati-kati-sosyal-alan",
        images: [
          g("sosyal-07"),
          g("sosyal-01"),
          g("maxlive-04")
        ]
      }
    ],

    /* ---------- PROJELER ----------
       featured: true  -> ana sayfadaki "Öne Çıkan Projeler" listesinde görünür
       showcase: true  -> ana sayfadaki büyük kartlı vitrinde görünür
       Adlar gönderi açıklamalarından, konumlar gönderilerin konum etiketlerinden.
       Yıl: 2026 ve 2021 gönderileri iş bitince paylaşılmış; 2023'te toplu yüklenen
       eski işlerde yıl bilinmediği için boş. area / client hiçbir projede bilinmiyor.
    */
    projects: [
      {
        slug: "halic-salon-balkon",
        title: "Salon ve Balkon Kahve Köşesi",
        tagline: "Ceviz tonlu dolaplar, ışıklı cam vitrinler ve balkonda klima ünitesini gizleyen bir kahve köşesi.",
        location: "Haliç, İstanbul",
        year: 2026,
        area: "",
        category: "Konut",
        status: "Tasarım ve uygulama",
        client: "",
        featured: true,
        showcase: true,
        cover: g("halic-salon-01"),
        text: [
          "Mutfağa açılan salonda tek bir duvar boyunca uzanan ceviz tonlu dolaplar, ışıklı cam vitrinler ve dikey çıtalı bir ara bölme.",
          "Balkonda kahve köşesi: taş görünümlü tezgâh, altında ışık bandı olan ahşap üst dolaplar ve klimanın dış ünitesini gizleyen delikli metal kapaklı bir dolap."
        ],
        gallery: [
          genis("halic-salon-02"),
          dikey("halic-balkon-01"),
          dikey("halic-balkon-02"),
          dikey("halic-balkon-03"),
          dikey("halic-balkon-04")
        ]
      },
      {
        slug: "basaksehir-salon",
        title: "Salon, TV Ünitesi ve Yemek Bölümü",
        tagline: "Taş kaplamalı TV duvarı, ışıklı ahşap raflar ve aynalı bir yemek bölümü.",
        location: "Başakşehir, İstanbul",
        year: 2026,
        area: "",
        category: "Konut",
        status: "Tasarım ve uygulama",
        client: "",
        featured: true,
        showcase: true,
        cover: g("basaksehir-01"),
        text: [
          "TV duvarı damarlı taş görünümlü kaplamayla, iki yanı gizli ışıklı ahşap raflarla kuruldu. Yemek bölümünde aynalı panel ile taş kaplı kolon arasına asılı raflar, ahşap kafes desenli bir duvar paneli ve konsol yer alıyor.",
          "Köşelerde yuvarlatılmış nişler, aydınlatmalı vitrinler ve taş tezgâhlı bir kahve köşesi; ahşap yüzeylerin hepsi aynı sıcak tonda."
        ],
        gallery: [
          genis("basaksehir-02"),
          genis("basaksehir-09"),
          dikey("basaksehir-03"),
          dikey("basaksehir-10"),
          dikey("basaksehir-04"),
          dikey("basaksehir-05"),
          dikey("basaksehir-06"),
          dikey("basaksehir-07")
        ]
      },
      {
        slug: "ad-ofis",
        title: "AD Ofis",
        tagline: "Açık çalışma alanları, cam bölmeli odalar ve renkli dinlenme köşeleriyle bir ofis.",
        location: "Kağıthane, İstanbul",
        year: 2021,
        area: "",
        category: "Ofis",
        status: "Uygulama",
        client: "",
        featured: true,
        showcase: true,
        cover: g("ad-ofis-01"),
        text: [
          "Tekfen Kağıthane Ofispark'taki bir ofisin uygulaması: açık çalışma alanları, cam bölmeli toplantı ve yönetici odaları, karşılama ve bekleme alanı.",
          "Tavan açık bırakılıp tesisat görünür kılındı. Ahşap görünümlü zemin ve beyaz masaların yanında kırmızı duvar, renkli akustik paneller ve sarı bar tabureleriyle canlı dinlenme ve mutfak köşeleri kuruldu."
        ],
        gallery: [
          yatay("ad-ofis-02"),
          yatay("ad-ofis-03"),
          genis("ad-ofis-05"),
          yatay("ad-ofis-04"),
          yatay("ad-ofis-06"),
          dikey("ad-ofis-07"),
          dikey("ad-ofis-08")
        ]
      },
      {
        slug: "maxlive-store-cephe",
        title: "Maxlive Store Cephe Giydirme",
        tagline: "Taş görünümlü kaplama, ahşap çıtalı dikey şerit ve gece cepheyi çizen ışık.",
        location: "",
        year: "",
        area: "",
        category: "Ticari",
        status: "Cephe uygulaması",
        client: "",
        featured: true,
        showcase: true,
        cover: g("maxlive-01"),
        text: [
          "Bir mağaza binasının cephe yenilemesi: taş görünümlü kaplama, cephenin ortasında yukarı doğru uzanan ahşap çıtalı şerit ve vitrin katı.",
          "Kenarlardaki lineer aydınlatma binayı gece de sokaktan seçilir kılıyor. Galerideki ilk kare uygulama sırasında, iskele kurulu hâliyle çekildi."
        ],
        gallery: [
          dikey("maxlive-02"),
          dikey("maxlive-04"),
          dikey("maxlive-03"),
          dikey("maxlive-01")
        ]
      },
      {
        slug: "bahcelievler-daire",
        title: "Giriş Holü, Mutfak ve Yatak Odaları",
        tagline: "Dresuarlı giriş, koyu taş tezgâhlı mutfak, oval aynalı yatak odası ve ışıklı dünya haritalı çocuk odası.",
        location: "Bahçelievler, İstanbul",
        year: 2026,
        area: "",
        category: "Konut",
        status: "Tasarım ve uygulama",
        client: "",
        featured: true,
        showcase: false,
        cover: g("bahcelievler-mutfak-01"),
        text: [
          "Girişte ahşap çıtalı panel ile füme ayna arasına asılı bir dresuar ve boydan vestiyer dolapları. Mutfakta koyu taş görünümlü tezgâh arası, ahşap dokulu dolaplar ve füme camlı üst vitrinler.",
          "Yatak odasında oval aynalı makyaj masası ve dikey çıtalı duvar paneli; çocuk odasında arkadan aydınlatılan dünya haritası, ışıklı raflar ve çalışma masası."
        ],
        gallery: [
          dikey("bahcelievler-hol-01"),
          dikey("bahcelievler-hol-02"),
          dikey("bahcelievler-mutfak-02"),
          dikey("bahcelievler-yatak-01"),
          dikey("bahcelievler-yatak-02"),
          dikey("bahcelievler-yatak-03"),
          dikey("bahcelievler-cocuk-01"),
          dikey("bahcelievler-cocuk-02")
        ]
      },
      {
        slug: "otel-bar",
        title: "Otel Barı",
        tagline: "Yeşil seramikli bar tezgâhı, geometrik desenli zemin ve mozaik kaplı karşılama bankosu.",
        location: "",
        year: "",
        area: "",
        category: "Ticari",
        status: "Uygulama",
        client: "",
        featured: true,
        showcase: false,
        cover: g("otel-bar-01"),
        text: [
          "Bir otelin bar alanının uygulaması: yeşil seramik kaplı bar tezgâhı, siyah-beyaz geometrik desenli zemin ve ahşap kaplı kolonlar.",
          "Girişte beyaz mozaik kaplı, yuvarlak hatlı bir karşılama bankosu; tezgâh boyunca gizli ışık."
        ],
        gallery: [
          dikey("otel-bar-02"),
          dikey("otel-bar-03"),
          dikey("otel-bar-04"),
          dikey("otel-bar-05"),
          dikey("otel-bar-06"),
          dikey("otel-bar-01")
        ]
      },
      {
        slug: "cati-kati-sosyal-alan",
        title: "Çatı Katı Sosyal Alanı",
        tagline: "Boş bir çatı katı; tuğla duvarlar, yeşil seramikli mutfak ve uzun ahşap masayla bir sosyal alana dönüştü.",
        location: "",
        year: "",
        area: "",
        category: "Ofis",
        status: "Uygulama",
        client: "",
        featured: true,
        showcase: false,
        cover: g("sosyal-01"),
        text: [
          "Instagram'da \"Before & after\" notuyla paylaştığımız bir dönüşüm. Sıvası yeni bitmiş boş bir çatı katı; eskitme tuğla kaplı duvarlar, yeşil seramik kaplı bir mutfak tezgâhı, ahşap tablalı bar masaları ve terasa bakan uzun bir yemek masasıyla ortak kullanım alanına çevrildi.",
          "Dinlenme bölümünde deri koltuklar ve kanepe, ahşap çıtalı duvar ve geniş camlar. Galerinin son iki karesi uygulama öncesini gösteriyor."
        ],
        gallery: [
          dikey("sosyal-02"),
          dikey("sosyal-06"),
          yatay("sosyal-03"),
          yatay("sosyal-01"),
          genis("sosyal-04"),
          genis("sosyal-05"),
          yatay("sosyal-07"),
          yatay("sosyal-08")
        ]
      },
      {
        slug: "bahcelievler-salon",
        title: "Salon ve Yemek Alanı",
        tagline: "Taş kaplı TV duvarı, heykelsi ayaklı yemek masası ve ışıklı koyu ahşap raflar.",
        location: "Bahçelievler, İstanbul",
        year: 2026,
        area: "",
        category: "Konut",
        status: "Tasarım ve uygulama",
        client: "",
        featured: true,
        showcase: false,
        cover: g("bahcelievler-salon-02"),
        text: [
          "TV duvarında iri damarlı taş görünümlü kaplama ve altında ışıklı, çıtalı bir konsol. Tavanda gizli aydınlatmalı bir asma tavan ve ray spotlar.",
          "Yemek alanında heykelsi ayaklı masa, iki yanında ışıklı koyu ahşap raflar ve dikey çıtalı duvar kaplamaları."
        ],
        gallery: [
          dikey("bahcelievler-salon-01"),
          dikey("bahcelievler-salon-03"),
          dikey("bahcelievler-salon-04"),
          dikey("bahcelievler-salon-05"),
          dikey("bahcelievler-salon-06"),
          dikey("bahcelievler-salon-02")
        ]
      },
      {
        slug: "etiler-genc-odasi",
        title: "Genç Odası",
        tagline: "Ahşap çıtalı duvar paneli, altından ışık alan tavan dolapları ve füme cam kapaklı dolap.",
        location: "Etiler, İstanbul",
        year: 2026,
        area: "",
        category: "Konut",
        status: "Tasarım ve uygulama",
        client: "",
        featured: false,
        showcase: false,
        cover: g("etiler-genc-01"),
        text: [
          "Yatağın arkasında baştan sona ahşap çıtalı duvar paneli ve altından ışık alan tavan dolapları; dolap kapakları füme cam.",
          "Karşı duvarda TV ünitesi ve ahşap çıtalar arasında ışıklı raflar. Duvarlarda dokulu kaplama, renkler bej ve ceviz tonlarında."
        ],
        gallery: [
          dikey("etiler-genc-05"),
          dikey("etiler-genc-02"),
          dikey("etiler-genc-03"),
          dikey("etiler-genc-04")
        ]
      },
      {
        slug: "basaksehir-giris-cati-kati",
        title: "Giriş Holü ve Çatı Katı Genç Odaları",
        tagline: "Taş kaplama ve altın tonlu ışıklı aynayla bir giriş; eğik tavanın altına yerleşen dolaplar ve çalışma masaları.",
        location: "Başakşehir, İstanbul",
        year: 2026,
        area: "",
        category: "Konut",
        status: "Tasarım ve uygulama",
        client: "",
        featured: false,
        showcase: false,
        cover: g("basaksehir-giris-01"),
        text: [
          "Girişte damarlı taş kaplamalı iki duvar parçası arasında altın tonlu çerçeveli, arkadan aydınlatılan bir ayna ve taş tablalı konsol; yanında küre aplikler ve çıtalı ahşap panel. Hol, çıtalı camlı çift kanatlı kapılarla içeri açılıyor.",
          "Çatı katında eğik tavanın altına yerleşen boydan dolaplar, ahşap tablalı çalışma masaları ve açık raflar; iki genç odası da açık gri ve ahşap tonlarında."
        ],
        gallery: [
          dikey("basaksehir-giris-02"),
          dikey("basaksehir-giris-03"),
          genis("basaksehir-cati-01"),
          genis("basaksehir-cati-02"),
          genis("basaksehir-cati-03"),
          genis("basaksehir-cati-04")
        ]
      },
      {
        slug: "bebek-bakim-odasi",
        title: "Bebek Bakım Odası",
        tagline: "Orman desenli duvar kâğıdı, ahşap alt değiştirme masası ve deri berjer.",
        location: "İstanbul",
        year: 2026,
        area: "",
        category: "Konut",
        status: "Tasarım ve uygulama",
        client: "",
        featured: false,
        showcase: false,
        cover: g("bebek-01"),
        text: [
          "Bir duvarı baştan sona tilki, geyik ve tavşan desenli duvar kâğıdıyla kaplanan sakin bir bakım odası. Ceviz ve açık gri kapaklı boy dolabı, metal ayaklı ahşap alt değiştirme masası ve deri berjer.",
          "Zeminde açık renk mermer görünümlü seramik; mobilyaların renkleri duvar kâğıdındaki toprak tonlarıyla uyumlu."
        ],
        gallery: [
          dikey("bebek-02"),
          dikey("bebek-03"),
          dikey("bebek-04"),
          dikey("bebek-05"),
          dikey("bebek-06"),
          dikey("bebek-01")
        ]
      },
      {
        slug: "dis-poliklinigi",
        title: "Diş Polikliniği",
        tagline: "Renkli koltuklu bekleme alanı, buzlu cam kapılı tedavi odaları ve beyaz dolaplı tezgâhlar.",
        location: "",
        year: "",
        area: "",
        category: "Ticari",
        status: "Uygulama",
        client: "",
        featured: false,
        showcase: false,
        cover: g("klinik-01"),
        text: [
          "Bir diş polikliniğinin iç mekân uygulaması: renkli koltuklu bekleme alanı, koyu kapılı aydınlık bir koridor, buzlu cam kapılı tedavi odaları ve beyaz dolaplı tezgâhlar."
        ],
        gallery: [
          yatay("klinik-02"),
          yatay("klinik-03"),
          yatay("klinik-04"),
          yatay("klinik-01")
        ]
      },
      {
        slug: "toplanti-odasi",
        title: "Toplantı Odası",
        tagline: "Cam bölmeli, asılı akustik panelli ve lineer aydınlatmalı bir toplantı odası.",
        location: "",
        year: "",
        area: "",
        category: "Ofis",
        status: "Uygulama",
        client: "",
        featured: false,
        showcase: false,
        cover: g("toplanti-01"),
        text: [
          "Siyah profilli cam bölmelerle açık ofisten ayrılan bir toplantı odası. Masanın üzerinde asılı akustik panel ve lineer aydınlatma; ahşap görünümlü zemin ve turkuaz sandalyeler."
        ],
        gallery: [
          dikey("toplanti-02"),
          dikey("toplanti-03")
        ]
      },
      {
        slug: "banyo-uygulamalari",
        title: "Banyo Uygulamaları",
        tagline: "Asma ahşap dolaplar, ışıklı aynalar ve taş görünümlü kaplamalarla farklı projelerden banyolar.",
        location: "",
        year: "",
        area: "",
        category: "Detay",
        status: "Uygulama",
        client: "",
        featured: false,
        showcase: false,
        cover: g("banyo-01"),
        text: [
          "Farklı projelerden banyo ve lavabolar: duvara asılı ahşap lavabo dolapları, arkadan aydınlatılan aynalar, çanak lavabolar, duvara gömme bataryalar ve camlı duş bölmeleri.",
          "Kaplamalarda bej ve gri taş görünümlü seramikler; bir lavaboda koyu çıtalı panel ve yaprak desenli duvar kâğıdı."
        ],
        gallery: [
          dikey("banyo-02"),
          dikey("banyo-03"),
          dikey("banyo-04"),
          dikey("banyo-05"),
          dikey("banyo-06"),
          dikey("banyo-07")
        ]
      },
      {
        slug: "merdiven-korkuluk",
        title: "Merdiven ve Korkuluk Detayları",
        tagline: "Siyah metal çubuklardan korkuluk, ince metal küpeşte ve açık renk taş basamaklar.",
        location: "",
        year: "",
        area: "",
        category: "Detay",
        status: "Uygulama",
        client: "",
        featured: false,
        showcase: false,
        cover: g("merdiven-01"),
        text: [
          "\"Korkuluk & küpeşte\" notuyla paylaştığımız merdiven detayları: kat boyunca yükselen siyah metal çubuk korkuluklar, duvara sabitlenen ince metal küpeşte ve açık renk taş kaplı basamaklar."
        ],
        gallery: [
          dikey("merdiven-02"),
          dikey("merdiven-03"),
          dikey("merdiven-04"),
          dikey("merdiven-05")
        ]
      }
    ],

    /* ---------- HİZMETLER ----------
       Eski sitedeki (2018) "Hizmetlerimiz" başlıklarından.
    */
    services: [
      { title: "Mimari Tasarım ve Proje", short: "Tasarımdan uygulama projesine.", text: "Mimari tasarım, proje ve uygulama hizmetleri. Projenin her aşamasında taleplerinize cevap verecek bilgi birikimi ve deneyimle çalışırız." },
      { title: "İç Mimari Tasarım ve Uygulama", short: "Konut, ofis, mağaza, restoran.", text: "İç mimari tasarım, proje ve uygulama (fitout): yerleşim, malzeme ve aydınlatmadan dolap, panel ve kaplama detaylarına kadar." },
      { title: "Anahtar Teslim Projeler", short: "Tek elden, teslime kadar.", text: "Tasarımı, projeyi ve uygulamayı tek elden yürütür; mekânı kullanıma hazır hâlde teslim ederiz." },
      { title: "Proje Yönetimi ve Kontrolörlük", short: "Takvim, kalite, koordinasyon.", text: "Proje yönetimi ve yönetim danışmanlığı, uygulama kontrolörlüğü ve uygulama yönetimi; mekanik, elektrik, inşaat mühendisliği ve peyzaj arasında proje-uygulama koordinasyonu." },
      { title: "Stand, Aktivite ve Dekor", short: "Ürün standı ve etkinlik dekoru.", text: "Ürün standı, aktivite ve dekor tasarımı ile uygulaması." },
      { title: "Danışmanlık ve Peyzaj", short: "Mimari, iç mimari, peyzaj.", text: "Mimari ve iç mimari danışmanlık hizmetleri; bahçe ve çevre düzenlemesi (peyzaj) projeleri." }
    ],

    /* ---------- GÜNCEL ---------- */
    // Haber yok; boş bırakıldığı için bölüm görünmez.
    news: [],

    /* ---------- OFİS SAYFASI ---------- */
    studio: {
      headline: "Marka kavramını tasarımlarına yansıtmayı iyi bilen, yaratıcı bireylerden oluşan bir ekip.",
      image: g("basaksehir-08"),
      text: [
        "Andor Mimarlık; mimari, iç mimari ve stand konularında, projenin her aşamasında müşterilerinin taleplerine cevap verecek bilgi birikimine ve deneyime sahip bir İstanbul ofisi.",
        "Çalışma şeklimiz yalın ve etkilidir: sizi dinler, vizyonunuzu öğrenir, isteklerinize ve hedef kitlenize en uygun yaratıcı çözümlerle geri döneriz. Amacımız, kâğıt üzerinde sunduğumuz tasarımın uygulama aşamasında da aynı kalitede hayata geçmesi.",
        "Son yıllarda iç mimaride konut, ofis, mağaza ve restoran ağırlıklı çalışıyoruz. Bitirdiğimiz işleri düzenli olarak Instagram hesabımızda paylaşıyoruz."
      ],
      stats: [
        { value: "2018", label: "Instagram'da ilk proje paylaşımı" },
        { value: "4",    label: "Disiplin: tasarım, proje, uygulama, peyzaj" },
        { value: "15",   label: "Bu sitedeki proje" }
      ]
    },

    /* ---------- EKİP ---------- */
    // Ekip ve yetkili adı hiçbir kaynakta yok; firmadan alınınca eklenir.
    team: [],

    /* ---------- OFİSLER ---------- */
    offices: [
      { city: "İstanbul", code: "IST", timeZone: "Europe/Istanbul", address: "Oruçreis Mah. Giyimkent Sitesi 18. Sok. No: 14, Esenler", phone: "+90 212 438 16 94" }
    ],

    /* ---------- BÖLÜM BAŞLIKLARI ---------- */
    labels: {
      featured: "Öne Çıkan Projeler",
      showcaseLabel: "Seçilmiş işler",
      showcaseTitle: "Projeler",
      allProjects: "Tüm projeleri gör",
      services: "Hizmetler",
      servicesTitle: "Tasarımdan anahtar teslime.",
      news: "Güncel",
      newsTitle: "",
      offices: "Ofisimiz",
      team: "Ekip",
      teamTitle: "",
      studio: "Ofis",
      contact: "İletişim",
      view: "İNCELE",
      next: "SONRAKİ",
      nextProject: "Sonraki proje",
      more: "İncele"
    },

    /* ---------- İLETİŞİM ---------- */
    contact: {
      headline: "Projenizi konuşalım.",
      email: "info@andormimarlik.com",
      phone: "+90 212 438 16 94",
      whatsapp: "+90 537 241 63 08",
      social: [
        { label: "Instagram", href: "https://www.instagram.com/andormimarlik/" },
        { label: "WhatsApp",  href: "https://wa.me/905372416308" }
      ]
    }
  };
})();
