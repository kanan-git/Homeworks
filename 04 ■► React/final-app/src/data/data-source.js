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
        homepage: {},
        about: {},
        contact: {},
        itemview: {},
        mycart: {},
        myfav: {},
        products: {},
        purchase: {},
        settings: {},
        signinorup: {},
        filteraside: {},
        // breadcrumb: {}, // if you change language in breadcrumb.jsx or in rounting, remove this label
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
        homepage: {},
        about: {},
        contact: {},
        itemview: {},
        mycart: {},
        myfav: {},
        products: {},
        purchase: {},
        settings: {},
        signinorup: {},
        filteraside: {},
        // breadcrumb: {}, // if you change language in breadcrumb.jsx or in rounting, remove this label
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
        homepage: {},
        about: {},
        contact: {},
        itemview: {},
        mycart: {},
        myfav: {},
        products: {},
        purchase: {},
        settings: {},
        signinorup: {},
        filteraside: {},
        // breadcrumb: {}, // if you change language in breadcrumb.jsx or in rounting, remove this label
        popup_failedmessage: {},
        popup_successfullysigned: {},
        popup_termsandconditions: {},
        popup_privacypolicies: {}
    }
}