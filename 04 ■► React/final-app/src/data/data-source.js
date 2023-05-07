export const dataSource = {
    // ▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬ // ENGLISH
    english: {
        header: {
            topside: ["homepage", "products", "about us", "contact"],
            mainside: {
                navbar: ["Search for any products you want ...", "Login"], // if a user logged in, get data from 'userData' not from 'dataSource' (login)
                userdropdown: ["Sign in", "Register", "Favorites", "My Cart", "Log Out"],
                productsddown: {
                    header1: ["Categories", "Groceries", "Assembly Elements", "Cutting", "Chemical Products", "Job Protection", "Tools", "Oils Other", "Conveyor System", "FMCG Products", "Auto Care Tools", "Reserve Parts"], 
                    header2: ["Brands", "BERNER", "CTP", "FERM", "HOGERT", "MATRİX", "BOLL", "RHODİUS", "MOJE AUTO", "REMA TİP TOP", "MAXMO", "STATUS"], 
                    header3: ["Discount products"]
                }
            }
        },
        footer: {
            about: [
                "About Us", 
                "Welcome to ShopNet, your one-stop online shop for all your favorite products! Established in April 2023, we are a rapidly growing e-commerce platform based in 28 May, Baku, Azerbaijan, offering a wide range of high-quality products at affordable prices.",
                "28 May, Baku, Azerbaijan", 
                "(+994) 50 123 45 67", 
                "sales@shopnet.az"
            ],
            profile: [
                "Profile", 
                "Sign in", 
                "Favorites", 
                "My Cart", 
                "My Orders"
            ],
            links: [
                "Links", 
                "Products", 
                "Contact", 
                "About Us", 
                "Terms & Conditions"
            ],
            followus: [
                "Follow Us", 
                "Facebook", 
                "YouTube", 
                "Instagram"
            ],
            bottomside: ["© Copyright 2023 CODERS.EDU.AZ | All Rights Reserved.", "Terms & Conditions", "Privacy Policy"]
        },
        homepage: {
            headers: ["Categories", "Brands", "Discounts"],
            category_cards: [
                "Groceries", 
                "Assembly Elements", 
                "Cutting", 
                "Chemical Products", 
                "Job Protection", 
                "Tools", 
                "Oils Other", 
                "Conveyor System", 
                "FMCG Products", 
                "Auto Care Tools", 
                "Reserve Parts"
            ],
            brand_cards: [
                "BERNER", 
                "CTP", 
                "FERM", 
                "HOGERT", 
                "MATRİX", 
                "BOLL", 
                "RHODİUS", 
                "MOJE AUTO", 
                "REMA TİP TOP", 
                "MAXMO", 
                "STATUS"
            ],
            discount_cards: []
        },
        about: {
            text: [
                "Your one-stop online shop for all your favorite products! Established in April 2023, we are a rapidly growing e-commerce platform based in 28 May, Baku, Azerbaijan, offering a wide range of high-quality products at affordable prices.", 
                "At ShopNet, we understand the convenience and simplicity of online shopping, and we are committed to providing our customers with a seamless and enjoyable shopping experience. Our website is easy to navigate, and our product listings are detailed and informative, providing you with all the information you need to make an informed purchase decision.",
                "Our product range includes everything from fashion and beauty products to electronics, home appliances, and more, all sourced from trusted manufacturers and suppliers. We also offer fast and reliable shipping to anywhere in Azerbaijan, ensuring that you receive your order quickly and hassle-free.", 
                "At ShopNet, we believe that customer satisfaction is our top priority, and we are dedicated to providing you with excellent customer service and support. If you have any questions or concerns, our friendly and knowledgeable customer service team is available to assist you.", 
                "Thank you for choosing ShopNet as your preferred online shopping destination. We look forward to serving you and making your shopping experience a great one!"
            ], 
            headers: [
                "Welcome to ShopNet", 
                "Gallery", 
                "Who we are ?", 
                "See more"
            ]
        },
        contact: {
            text: [
                "If you have any questions, comments, or concerns about our products or services, please do not hesitate to contact us at:", 
                "Address: 28 May, Baku, Azerbaijan", 
                "Phone: (+994) 50 123 45 67", 
                "Email: sales@shopnet.az", 
                "Our dedicated customer service team is available to assist you Monday through Friday, 9:00 AM to 5:00 PM. We strive to respond to all inquiries within 24 hours."
            ], 
            headers: [
                "Contact Information", 
                "Find on Map"
            ]
        },
        itemview: {},
        mycart: {},
        myfav: {},
        products: {},
        purchase: {},
        settings: {},
        signinorup: {},
        filteraside: {},
        breadcrumb: "You are here now", // if you change language in breadcrumb.jsx or in rounting, remove this label
        popup_failedmessage: {},
        popup_successfullysigned: {},
        popup_termsandconditions: {},
        popup_privacypolicies: {}
    },
    // ▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬ // AZERBAIJANI
    azerbaijani: {
        header: {
            topside: ["ana səhifə", "məhsullar", "haqqımızda", "əlaqə"],
            mainside: {
                navbar: ["İstədiyiniz məhsulları axtarın ...", "Daxil ol"], 
                userdropdown: ["Daxil ol", "Qeydiyyat", "Favorilər", "Səbət", "Çıxış et"],
                productsddown: {
                    header1: ["Kateqoriyalar", "Xırdavat", "Montaj Elementləri", "Kəsmə Deşmə", "Kimyəvi Məhsullar", "İş Təhlükəsizlik", "Alətlər", "Yağlar Digər", "Konveyer Sistemi", "FMCG Mallar", "Avto Qulluq Vasitələri", "Ehtiyyat Hissəsi"], 
                    header2: ["Brendlər", "BERNER", "CTP", "FERM", "HOGERT", "MATRİX", "BOLL", "RHODİUS", "MOJE AUTO", "REMA TİP TOP", "MAXMO", "STATUS"], 
                    header3: ["Endirimli məhsullar"]
                }
            }
        },
        footer: {
            about: [
                "Haqqımızda", 
                "ShopNet-ə xoş gəlmisiniz! Bütün sevimli məhsullarınız üçün bir neçə tık uzaklıqda olan onlayn mağaza! Aprel 2023-cü ildə təsis olunan biz, 28 May, Bakı, Azərbaycan ərazisində yerləşən sürətli inkişaf edən e-ticarət platformasıyıq və mərasimli qiymətlərlə çox geniş bir məhsul çeşidini təklif edirik.",
                "28 May, Bakı, Azərbaycan", 
                "(+994) 50 123 45 67", 
                "sales@shopnet.az"
            ],
            profile: [
                "Profil", 
                "Daxil ol", 
                "Favorilər", 
                "Səbət", 
                "Sifarişlərim"
            ],
            links: [
                "Faydalı linklər", 
                "Məhsullar", 
                "Əlaqə", 
                "Haqqımızda", 
                "Qaydalar və Şərtlər"
            ],
            followus: [
                "Bizi izlə", 
                "Facebook", 
                "YouTube", 
                "Instagram"
            ],
            bottomside: ["© Müəllif hüququ 2023 CODERS.EDU.AZ | Bütün Hüquqları Qorunur.", "Qaydalar və Şərtlər", "Gizlilik Siyasəti"]
        },
        homepage: {
            headers: ["Kateqoriyalar", "Brendlər", "Endirimli məhsullar"],
            category_cards: [
                "Xırdavat", 
                "Montaj Elementləri", 
                "Kəsmə Deşmə", 
                "Kimyəvi Məhsullar", 
                "İş Təhlükəsizlik", 
                "Alətlər", 
                "Yağlar Digər", 
                "Konveyer Sistemi", 
                "FMCG Mallar", 
                "Avto Qulluq Vasitələri", 
                "Ehtiyyat Hissəsi"
            ],
            brand_cards: [
                "BERNER", 
                "CTP", 
                "FERM", 
                "HOGERT", 
                "MATRİX", 
                "BOLL", 
                "RHODİUS", 
                "MOJE AUTO", 
                "REMA TİP TOP", 
                "MAXMO", 
                "STATUS"
            ],
            discount_cards: []
        },
        about: {
            text: [
                "Bütün sevdiyiniz məhsullar üçün bir pəncərə onlayn mağazanız! 2023-cü ilin aprel ayında yaradılan biz, 28 May, Bakı, Azərbaycan əsasında yerləşən və sərfəli qiymətlərlə geniş çeşiddə yüksək keyfiyyətli məhsullar təklif edən, sürətlə inkişaf edən e-ticarət platformasıyıq.", 
                "ShopNet-də biz onlayn alış-verişin rahatlığını və sadəliyini başa düşürük və müştərilərimizə qüsursuz və zövqlü alış-veriş təcrübəsi təqdim etməyə sadiqik. Veb saytımızda naviqasiya etmək asandır və məhsul siyahılarımız təfərrüatlı və məlumatlıdır və məlumatlı satınalma qərarı vermək üçün sizə lazım olan bütün məlumatları təqdim edir.",
                "Bizim məhsul çeşidimizə dəb və gözəllik məhsullarından tutmuş elektronika, məişət texnikası və s. kimi hər şey daxildir, bunların hamısı etibarlı istehsalçılardan və təchizatçılardan alınır. Biz həmçinin Azərbaycanın istənilən yerinə sürətli və etibarlı çatdırılma təklif edirik ki, sifarişinizi tez və əngəlsiz qəbul edəsiniz.", 
                "ShopNet-də biz müştəri məmnuniyyətinin əsas prioritetimiz olduğuna inanırıq və biz sizə mükəmməl müştəri xidməti və dəstəyi təqdim etməyə çalışırıq. Hər hansı bir sualınız və ya narahatlığınız varsa, mehriban və məlumatlı müştəri xidməti komandamız sizə kömək etmək üçün hazırdır.", 
                "Seçdiyiniz onlayn alış-veriş məkanı kimi ShopNet-i seçdiyiniz üçün təşəkkür edirik. Sizə xidmət göstərməyi və alış-veriş təcrübənizi möhtəşəm hala gətirməyi səbirsizliklə gözləyirik!"
            ], 
            headers: [
                "ShopNet-ə xoş gəlmisiniz", 
                "Qalereya", 
                "Biz kimik ?", 
                "Daha çox gör"
            ]
        },
        contact: {
            text: [
                "Məhsullarımız və ya xidmətlərimizlə bağlı hər hansı sualınız, şərhiniz və ya narahatlığınız varsa, bizimlə əlaqə saxlamaqdan çəkinməyin:", 
                "Ünvan: 28 May, Bakı, Azərbaycan", 
                "Telefon: (+994) 50 123 45 67", 
                "Email: sales@shopnet.az", 
                "Xüsusi müştəri xidmətləri komandamız bazar ertəsindən cümə gününə qədər, səhər saat 9:00-dan axşam 17:00-dək sizə kömək etmək üçün hazırdır. Biz bütün sorğulara 24 saat ərzində cavab verməyə çalışırıq."
            ], 
            headers: [
                "Əlaqə məlumatı", 
                "Xəritədə tapın"
            ]
        },
        itemview: {},
        mycart: {},
        myfav: {},
        products: {},
        purchase: {},
        settings: {},
        signinorup: {},
        filteraside: {},
        breadcrumb: "Indi buradasınız", // if you change language in breadcrumb.jsx or in rounting, remove this label
        popup_failedmessage: {},
        popup_successfullysigned: {},
        popup_termsandconditions: {},
        popup_privacypolicies: {}
    },
    // ▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬ // TURKİSH
    turkish: {
        header: {
            topside: ["ana sayfa", "ürünler", "hakkımızda", "iletişim"],
            mainside: {
                navbar: ["İstediğiniz ürünleri arayın ...", "Giriş"],
                userdropdown: ["Giriş", "Kayıt ol", "Favoriler", "Sepetim", "Çıkış yap"],
                productsddown: {
                    header1: ["Kategoriler", "Bakkaliye", "Montaj Ekipmanlari", "Kesme", "Kimyasal Ürünler", "İş Güvenlik", "Aletler", "Yağlar Diger", "Konveyör Sistemi", "FMCG Ürünler", "Oto Bakım Araçları", "Yedek Parçalar"], 
                    header2: ["Markalar", "BERNER", "CTP", "FERM", "HOGERT", "MATRİX", "BOLL", "RHODİUS", "MOJE AUTO", "REMA TİP TOP", "MAXMO", "STATUS"], 
                    header3: ["Indirimli ürünler"]
                }
            }
        },
        footer: {
            about: [
                "Hakkımızda", 
                "ShopNet'e hoş geldiniz, tüm favori ürünleriniz için tek duraklı online alışveriş merkeziniz! Nisan 2023'te kurulan, 28 Mayıs, Bakü, Azerbaycan'da bulunan ve uygun fiyatlı yüksek kaliteli ürünlerin geniş bir yelpazesini sunan hızla büyüyen bir e-ticaret platformuyuz.",
                "28 May, Bakü, Azerbaycan", 
                "(+994) 50 123 45 67", 
                "sales@shopnet.az"
            ],
            profile: [
                "Profil", 
                "Giriş", 
                "Favoriler", 
                "Sepetim", 
                "Siparişlerim"
            ],
            links: [
                "Bağlantılar", 
                "Ürünler", 
                "İletişim", 
                "Hakkımızda", 
                "Kullanım şartları ve Koşullar"
            ],
            followus: [
                "Takip et", 
                "Facebook", 
                "YouTube", 
                "Instagram"
            ],
            bottomside: ["© Copyright 2023 CODERS.EDU.AZ | Tüm Haklar Saklıdır.", "Şartlar ve Koşullar", "Gizlilik Politikası"]
        },
        homepage: {
            headers: ["Kategoriler", "Markalar", "Indirimli ürünler"],
            category_cards: [
                "Bakkaliye", 
                "Montaj Ekipmanlari", 
                "Kesme", 
                "Kimyasal Ürünler", 
                "İş Güvenlik", 
                "Aletler", 
                "Yağlar Diger", 
                "Konveyör Sistemi", 
                "FMCG Ürünler", 
                "Oto Bakım Araçları", 
                "Yedek Parçalar"
            ],
            brand_cards: [
                "BERNER", 
                "CTP", 
                "FERM", 
                "HOGERT", 
                "MATRİX", 
                "BOLL", 
                "RHODİUS", 
                "MOJE AUTO", 
                "REMA TİP TOP", 
                "MAXMO", 
                "STATUS"
            ],
            discount_cards: []
        },
        about: {
            text: [
                "Tüm favori ürünleriniz için tek adresiniz! Nisan 2023'te kurulan, 28 Mayıs Bakü, Azerbaycan merkezli, geniş bir yelpazede yüksek kaliteli ürünleri uygun fiyatlarla sunan, hızla büyüyen bir e-ticaret platformuyuz.", 
                "ShopNet'te çevrimiçi alışverişin kolaylığını ve basitliğini anlıyoruz ve kendimizi müşterilerimize sorunsuz ve keyifli bir alışveriş deneyimi sunmaya adadık. Web sitemizde gezinmek kolaydır ve ürün listelerimiz ayrıntılı ve bilgilendirici olup, bilinçli bir satın alma kararı vermeniz için ihtiyacınız olan tüm bilgileri sağlar.",
                "Ürün yelpazemiz, tamamı güvenilir üreticilerden ve tedarikçilerden temin edilen moda ve güzellik ürünlerinden elektronik cihazlara, ev aletlerine ve daha fazlasına kadar her şeyi içerir. Ayrıca siparişinizi hızlı ve sorunsuz bir şekilde almanızı sağlamak için Azerbaycan'ın her yerine hızlı ve güvenilir nakliye hizmeti sunuyoruz.", 
                "ShopNet'te müşteri memnuniyetinin en büyük önceliğimiz olduğuna inanıyoruz ve kendimizi size mükemmel müşteri hizmeti ve desteği sunmaya adadık. Herhangi bir sorunuz veya endişeniz varsa, güler yüzlü ve bilgili müşteri hizmetleri ekibimiz size yardımcı olmaya hazırdır.", 
                "Tercih ettiğiniz çevrimiçi alışveriş yeri olarak ShopNet'i seçtiğiniz için teşekkür ederiz. Size hizmet etmeyi ve alışveriş deneyiminizi harika bir hale getirmeyi dört gözle bekliyoruz!"
            ], 
            headers: [
                "ShopNet'e hoş geldiniz", 
                "Galeri", 
                "Biz kimiz ?", 
                "Daha fazla gör"
            ]
        },
        contact: {
            text: [
                "Ürünlerimiz veya hizmetlerimiz hakkında herhangi bir sorunuz, yorumunuz veya endişeniz varsa, lütfen bizimle şu adresten iletişime geçmekten çekinmeyin:", 
                "Adres: 28 Mayıs, Bakü, Azerbaycan", 
                "Telefon: (+994) 50 123 45 67", 
                "E-posta: sales@shopnet.az", 
                "Özel müşteri hizmetleri ekibimiz, Pazartesi'den Cuma'ya 09:00 - 17:00 saatleri arasında size yardımcı olmaya hazırdır. Tüm sorulara 24 saat içinde yanıt vermeye çalışıyoruz."
            ], 
            headers: [
                "İletişim bilgileri", 
                "Haritada Bul"
            ]
        },
        itemview: {},
        mycart: {},
        myfav: {},
        products: {},
        purchase: {},
        settings: {},
        signinorup: {},
        filteraside: {},
        breadcrumb: "Şimdi buradasın", // if you change language in breadcrumb.jsx or in rounting, remove this label
        popup_failedmessage: {},
        popup_successfullysigned: {},
        popup_termsandconditions: {},
        popup_privacypolicies: {}
    }
}