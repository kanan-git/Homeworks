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
        itemview: [
            "Product", "Category", "Buy", "Add to Favorite", "Add to Cart"
        ],
        mycart: [
            "My Cart", "Total Price"
        ],
        myfav: "My Favorites",
        products: {
            filter: [
                "Filter", // 0
                "by Categories", // 1
                "by Price", // 2
                "by Rating", // 3
                "Electronics", // 4
                "Men's clothing", // 5
                "Women's clothing", // 6
                "Jewelery", // 7
                "or more", // 8
                "Refresh" // 9
            ],
            sort: [
                "Most sold", 
                "Price low to high", 
                "Price high to low", 
                "Rating low to high", 
                "Rating high to low"
            ],
            button: "Load More"
        },
        purchase: [
            "Your purchase has been successfully completed", 
            "Product Name", 
            "Category", 
            "Description", 
            "Price", 
            "Back to", 
            "Homepage", 
            "Cart", 
            "Favorites"
        ],
        settings: {
            buttons: [
                "Account", 
                "Payment", 
                "Shipping", 
                "Order", 
                "Notification", 
                "Security"
            ],
            titles: [
                "Account Settings", 
                "Payment Settings", 
                "Shipping Settings", 
                "Order Settings", 
                "Notification Settings", 
                "Security Settings"
            ],
            headers: [
                "Profile Information", 
                "Change Password", 
                "Communication Preferences", 
                "Privacy Settings", 
                "Payment Methods", 
                "Billing Information", 
                "Auto-Payment Setup", 
                "Shipping Addresses", 
                "Preferred Shipping Method", 
                "Tracking Notifications", 
                "Order History", 
                "Order Notifications", 
                "Returns and Refunds", 
                "General Notifications", 
                "Price Drop Notifications", 
                "Stock Availability Notifications", 
                "Two-Factor Authentication", 
                "Connected Devices", 
                "Account Activity"
            ],
            text_contents: [
                "Allows users to update their personal information such as name, email address, and contact details.", 
                "Enables users to change their account password.", 
                "Allows users to manage their email subscriptions and notification settings.", 
                "Provides options for users to control their privacy preferences, such as opting out of targeted advertising.", 
                "Allows users to add, edit, or remove payment methods, such as credit cards or PayPal accounts.", 
                "Provides a form for users to enter or update their billing address and other relevant details.", 
                "Enables users to set up automatic recurring payments for subscription-based services if applicable.", 
                "Allows users to add, edit, or remove shipping addresses for different delivery locations.", 
                "Enables users to select their preferred shipping method, such as standard or express delivery.", 
                "Provides options for users to choose whether they want to receive shipping status updates via email or text messages.", 
                "Displays a comprehensive list of past orders, including order details, tracking information, and invoices.", 
                "Allows users to manage their preferences for receiving order confirmation emails and updates.", 
                "Provides information and guidelines for initiating returns and refunds, along with tracking the progress of ongoing return requests.", 
                "Enables users to control their preferences for receiving general notifications, such as promotions or new product alerts.", 
                "Allows users to opt-in for notifications when the prices of specific items drop.", 
                "Provides options for users to subscribe to notifications when out-of-stock items become available again.", 
                "Allows users to enable or disable two-factor authentication for added account security.", 
                "Displays a list of devices currently logged into the user's account and provides the option to log out from any unrecognized devices.", 
                "Provides a log of recent account activity, including login attempts and password changes."
            ]
        },
        signinorup: {
            selections: ["Login", "Register"], 
            loginform: ["Welcome to ShopNet", "Email:", "Password:", "Sign in"], 
            registerform: ["Join us", "Name:", "Lastname:", "Email:", "Gender:", "Month", "Day", "Year", 
            "I have read and agree to the", "Terms & Conditions", "Sign up", "Male", "Female", "Choose"], 
            buttons: ["Go to Home", "Go to About", "Go to Contact"], 
            month: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"], 
            placeholders: ["Enter your email here", "Enter your password here", "Your name here", "Your lastname here", "Enter your email address", "Assign a new password"]
        },
        filteraside: {}, // not started ▲
        breadcrumb: "You are here now", // if you change language in breadcrumb.jsx or in rounting, remove this label
        popup_failedmessage: "Your email or password is incorrect",
        popup_successfullysigned: "You have successfully signed in",
        popup_termsandconditions: {
            title: "Terms & Conditions", 
            headers: [
                "Registration", "Use of Services", "Payment and Shipping", "Returns and Refunds", "Disclaimer of Warranties", "Limitation of Liability", "Changes to Terms"
            ], 
            contents: [
                "Welcome to ShopNet, your one-stop online shop for all your favorite products! These terms and conditions ('Terms') govern your use of our website and services. By accessing or using our website or services, you agree to be bound by these Terms.", 
                "To use some of our services, you may need to register an account with us. When you register an account, you agree to provide accurate and complete information, and to keep your account information up to date.", 
                "You agree to use our website and services only for lawful purposes and in accordance with these Terms. You agree not to use our website or services in any way that could damage, disable, overburden, or impair our website or services, or interfere with any other party's use and enjoyment of our website or services.", 
                "All prices are in Azerbaijani Manat (AZN) and are subject to change without notice. We accept payment by credit card or other payment methods that we may make available from time to time. Shipping costs will be calculated based on the shipping destination, shipping method, and the weight and dimensions of the products you order.", 
                "We want you to be completely satisfied with your purchase from ShopNet. If for any reason you are not satisfied, please contact our customer service team within 14 days of receiving your order to initiate a return. We will issue a refund for the purchase price of the product(s) returned, less any applicable shipping fees.", 
                "Our website and services are provided on an 'as is' and 'as available' basis, without any warranties of any kind, either express or implied, including without limitation the implied warranties of merchantability, fitness for a particular purpose, and non-infringement.", 
                "In no event shall ShopNet, its affiliates, or their respective officers, directors, employees, or agents be liable for any indirect, incidental, special, consequential or punitive damages, arising out of or in connection with your use of our website or services.", 
                "We reserve the right to modify or update these Terms at any time, without prior notice. Your continued use of our website or services after any such modifications or updates constitutes your acceptance of the revised Terms.", 
                "If you have any questions or concerns about these Terms, please contact us at support@shopnet.com."
            ]
        },
        popup_privacypolicies: {
            title: "Privacy Policy", 
            headers: [
                "Information Collection and Use", "Types of Data Collected", "Use of Data", "Transfer of Data", "Disclosure of Data"
            ], 
            contents: [
                "ShopNet ('us', 'we', or 'our') operates the https://www.shopnet.com website (hereinafter referred to as the 'Service').", 
                "This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our Service and the choices you have associated with that data.", 
                "We use your data to provide and improve the Service. By using the Service, you agree to the collection and use of information in accordance with this policy.", 
                "We collect several different types of information for various purposes to provide and improve our Service to you.", 
                "Personal Data", 
                "We may ask you to provide us with certain personally identifiable information that can be used to contact or identify you ('Personal Data'). Personally identifiable information may include, but is not limited to:", 
                "- Email address", 
                "- First name and last name", 
                "- Phone number", 
                "- Address, State, Province, ZIP/Postal code, City", 
                "- Cookies and Usage Data", 
                "Usage Data", 
                "We may also collect information about how the Service is accessed and used ('Usage Data'). This Usage Data may include information such as your computer's Internet Protocol address (e.g. IP address), browser type, browser version, the pages of our Service that you visit, the time and date of your visit, the time spent on those pages, unique device identifiers and other diagnostic data.", 
                "Tracking & Cookies Data", 
                "We use cookies and similar tracking technologies to track the activity on our Service and we hold certain information.", 
                "Cookies are files with a small amount of data which may include an anonymous unique identifier. Cookies are sent to your browser from a website and stored on your device. Other tracking technologies are also used such as beacons, tags and scripts to collect and track information and to improve and analyze our Service.", 
                "You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our Service.", 
                "Examples of Cookies we use:", 
                "- Session Cookies. We use Session Cookies to operate our Service.", 
                "- Preference Cookies. We use Preference Cookies to remember your preferences and various settings.", 
                "- Security Cookies. We use Security Cookies for security purposes.", 
                "ShopNet uses the collected data for various purposes:", 
                "- To provide and maintain our Service", 
                "- To notify you about changes to our Service", 
                "- To allow you to participate in interactive features of our Service when you choose to do so", 
                "- To provide customer support", 
                "- To gather analysis or valuable information so that we can improve our Service", 
                "- To monitor the usage of our Service", 
                "- To detect, prevent and address technical issues", 
                "Your information, including Personal Data, may be transferred to — and maintained on — computers located outside of your state, province, country or other governmental jurisdiction where the data protection laws may differ than those from your jurisdiction.", 
                "If you are located outside Azerbaijan and choose to provide information to us, please note that we transfer the data, including Personal Data, to Azerbaijan and process it there.", 
                "Your consent to this Privacy Policy followed by your submission of such information represents your agreement to that transfer.", 
                "ShopNet will take all the steps reasonably necessary to ensure that your data is treated securely and in accordance with this Privacy Policy and no transfer of your Personal Data will take place to an organization or a country unless there are adequate controls in place including the security of your data and other personal information.", 
                "Legal Requirements", 
                "ShopNet may disclose your Personal Data in the good faith belief that such action is necessary to:", 
                "- To comply with"
            ]
        }
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
        itemview: [
            "Məhsul", "Kateqoriya", "Sifariş et", "Favorilərə əlavə et", "Səbətə əlavə et"
        ],
        mycart: [
            "Səbətim", "Yekun məbləğ"
        ],
        myfav: "Favorilərim",
        products: {
            filter: [
                "Filtr", 
                "Kateqoriyalar üzrə", 
                "Qiymətə görə", 
                "Reytinqi ilə", 
                "Elektronika", 
                "Kişi geyimləri", 
                "Qadın geyimləri", 
                "Zərgərlik", 
                "və ya daha çox", 
                "Yenilə"
            ],
            sort: [
                "Ən çox satılan", 
                "Qiymət aşağıdan yuxarıya", 
                "Qiymət yüksəkdən aşağıya", 
                "Aşağıdan yuxarıya reytinq", 
                "Yüksəkdən aşağıya reytinq"
            ],
            button: "Daha Çox"
        },
        purchase: [
            "Sifarişiniz uğurla tamamlandı", 
            "Məhsulun adı", 
            "Kateqoriya", 
            "Ətraflı", 
            "Qiyməti", 
            "Geriyə", 
            "Əsas səhifə", 
            "Səbət", 
            "Favorilər"
        ],
        settings: {
            buttons: [
                "Hesab", 
                "Ödəniş", 
                "Göndərmə", 
                "Sifariş verin", 
                "Bildiriş", 
                "Təhlükəsizlik"
            ],
            titles: [
                "Hesab Parametrləri", 
                "Ödəniş Parametrləri", 
                "Göndərmə Parametrləri", 
                "Sifariş Parametrləri", 
                "Bildiriş Parametrləri", 
                "Təhlükəsizlik Parametrləri"
            ],
            headers: [
                "Profil Məlumatı", 
                "Parolun dəyişdirilməsi", 
                "Ünsiyyət üstünlükləri", 
                "Məxfilik Parametrləri", 
                "Ödəmə metodları", 
                "Ödəmə məlumatı", 
                "Avtomatik Ödəniş Quraşdırması", 
                "Çatdırılma Ünvanları", 
                "Üstünlük Verilən Göndərmə Metodu", 
                "İzləmə Bildirişləri", 
                "Sifariş Tarixi", 
                "Sifariş bildirişləri", 
                "Qaytarmalar və Geri Ödənişlər", 
                "Ümumi Bildirişlər", 
                "Qiymət Düşüşü Bildirişləri", 
                "Ehtiyatların mövcudluğu haqqında bildirişlər", 
                "İki faktorlu autentifikasiya", 
                "Qoşulmuş Cihazlar", 
                "Hesab Fəaliyyəti"
            ],
            text_contents: [
                "İstifadəçilərə ad, e-poçt ünvanı və əlaqə məlumatları kimi şəxsi məlumatlarını yeniləməyə imkan verir.", 
                "İstifadəçilərə hesab parollarını dəyişməyə imkan verir.", 
                "İstifadəçilərə e-poçt abunəliklərini və bildiriş parametrlərini idarə etməyə imkan verir.", 
                "İstifadəçilərə hədəflənmiş reklamdan imtina kimi məxfilik seçimlərinə nəzarət etmək üçün seçimlər təqdim edir.", 
                "İstifadəçilərə kredit kartları və ya PayPal hesabları kimi ödəniş üsullarını əlavə etmək, redaktə etmək və ya silmək imkanı verir.", 
                "İstifadəçilər üçün faktura ünvanlarını və digər müvafiq təfərrüatları daxil etmək və ya yeniləmək üçün forma təqdim edir.", 
                "Mümkünsə, istifadəçilərə abunə əsaslı xidmətlər üçün avtomatik təkrarlanan ödənişlər qurmağa imkan verir.", 
                "İstifadəçilərə müxtəlif çatdırılma yerləri üçün göndərmə ünvanlarını əlavə etmək, redaktə etmək və ya silmək imkanı verir.", 
                "İstifadəçilərə standart və ya sürətli çatdırılma kimi üstünlük verilən göndərmə üsulunu seçmək imkanı verir.", 
                "İstifadəçilərə e-poçt və ya mətn mesajları vasitəsilə göndərmə statusu yeniləmələrini almaq istəmədiklərini seçmək üçün seçimlər təqdim edir.", 
                "Sifariş təfərrüatları, izləmə məlumatları və fakturalar daxil olmaqla keçmiş sifarişlərin hərtərəfli siyahısını göstərir.", 
                "İstifadəçilərə sifariş təsdiqi e-poçtları və yeniləmələri almaq üçün öz seçimlərini idarə etməyə imkan verir.", 
                "Davam edən geri qaytarma sorğularının gedişatını izləməklə yanaşı, geri qaytarma və geri ödəmələrə başlamaq üçün məlumat və təlimatlar təqdim edir.", 
                "İstifadəçilərə promosyonlar və ya yeni məhsul xəbərdarlığı kimi ümumi bildirişlər almaq üçün seçimlərinə nəzarət etməyə imkan verir.", 
                "İstifadəçilərə xüsusi əşyaların qiymətləri düşdüyü zaman bildirişlərə qoşulmağa imkan verir.", 
                "Ehtiyatda olmayan məhsullar yenidən əlçatan olduqda istifadəçilər üçün bildirişlərə abunə olmaq üçün seçimlər təqdim edir.", 
                "İstifadəçilərə əlavə hesab təhlükəsizliyi üçün iki faktorlu autentifikasiyanı aktivləşdirməyə və ya söndürməyə imkan verir.", 
                "Hazırda istifadəçinin hesabına daxil olan cihazların siyahısını göstərir və hər hansı tanınmayan cihazlardan çıxmaq seçimini təmin edir.", 
                "Giriş cəhdləri və parol dəyişiklikləri daxil olmaqla, son hesab fəaliyyətinin jurnalını təmin edir."
            ]
        },
        signinorup: {
            selections: ["Daxil ol", "Qeydiyyatdan keçin"], 
            loginform: ["ShopNet-ə xoş gəlmisiniz", "E-poçt:", "Parol:", "Daxil ol"], 
            registerform: ["Bizə qoşul", "Ad:", "Soyad:", "E-poçt:", "Cinsiyyət:", "Ay", "Gün", "İl", 
            "Oxudum və razıyam - ", "Qaydalar və Şərtlər", "Qeydiyyat", "Kişi", "Qadın", "Seçin"], 
            buttons: ["Əsas səhifəyə keçin", "Haqqımızda səhifəsinə keçin", "Əlaqə bölməsinə keçin"], 
            month: ["Yanvar", "Fevral", "Mart", "Aprel", "May", "İyun", "İyul", "Avqust", "Sentyabr", "Oktyabr", "Noyabr", "Dekabr"], 
            placeholders: ["E-poçtunuzu daxil edin", "Parolu daxil edin", "Adınızı burada qeyd edin", "Soyadınızı burada qeyd edin", "E-poçt ünvanınızı daxil edin", "Yeni parol təyin edin"]
        },
        filteraside: {},
        breadcrumb: "Indi buradasınız", // if you change language in breadcrumb.jsx or in rounting, remove this label
        popup_failedmessage: "E-poçtunuz və ya parolunuz yanlışdır",
        popup_successfullysigned: "Siz uğurla daxil oldunuz",
        popup_termsandconditions: {
            title: "Şərtlər və Qaydalar", 
            headers: [
                "Qeydiyyat", "Xidmətlərdən İstifadə", "Ödəniş və Göndərmə", "Qaydalar və Pulların Geri qaytarılması", "Zəmanətlərdən İmtina", "Məsuliyyətin Məhdudiyyəti", "Şərtlərə Dəyişikliklər"
            ], 
            contents: [
                "Bütün sevimli məhsullarınız üçün bir pəncərə onlayn mağazanız olan ShopNet-ə xoş gəlmisiniz! Bu şərtlər ('Şərtlər') vebsaytımızdan və xidmətlərimizdən istifadənizi tənzimləyir. Veb saytımıza və ya xidmətlərimizə daxil olmaqla və ya istifadə etməklə, siz aşağıdakı şərtlərlə razılaşırsınız: bu Şərtlər.", 
                "Bəzi xidmətlərimizdən istifadə etmək üçün siz bizimlə hesab qeydiyyatdan keçirməli ola bilərsiniz. Hesabı qeydiyyatdan keçirdiyiniz zaman dəqiq və tam məlumat verməyə və hesab məlumatlarınızı yeni saxlamağa razılaşırsınız.", 
                "Siz bizim vebsaytımızdan və xidmətlərimizdən yalnız qanuni məqsədlər üçün və bu Şərtlərə uyğun olaraq istifadə etməyə razılaşırsınız. Siz bizim vebsaytımızdan və ya xidmətlərimizdən bizim vebsaytımıza və ya xidmətlərimizə zərər verə biləcək, sıradan çıxara, həddən artıq yüklənə və ya zərər verə biləcək şəkildə istifadə etməməyə razılaşırsınız. hər hansı digər tərəfin vebsaytımızdan və ya xidmətlərimizdən istifadə etməsi və istifadə etməsi.", 
                "Bütün qiymətlər Azərbaycan Manatı (AZN) ilədir və xəbərdarlıq edilmədən dəyişdirilə bilər. Biz kredit kartı və ya vaxtaşırı təqdim edə biləcəyimiz digər ödəniş üsulları ilə ödənişi qəbul edirik. Çatdırılma xərcləri çatdırılma təyinatına, çatdırılma yerinə hesablanacaq. metodu və sifariş etdiyiniz məhsulların çəkisi və ölçüləri.",, 
                "Biz ShopNet-dən satın aldığınızdan tam razı qalmanızı istəyirik. Əgər hər hansı səbəbdən razı qalmasanız, geri qaytarmağa başlamaq üçün sifarişinizi aldıqdan sonra 14 gün ərzində müştəri xidməti komandamızla əlaqə saxlayın. Biz alış qiymətini geri qaytaracağıq. Müvafiq göndərmə haqqı çıxılmaqla geri qaytarılan məhsul(lar)ın məbləği.",, 
                "Veb-saytımız və xidmətlərimiz 'olduğu kimi' və 'mövcud olduğu kimi' əsasında, açıq və ya nəzərdə tutulan hər hansı bir zəmanət olmadan, o cümlədən məhdudiyyətsiz olaraq satıla bilmə, müəyyən bir məqsəd üçün uyğunluq və qeyri-məqbul zəmanətlər olmadan təqdim olunur. pozuntu.", 
                "Heç bir halda ShopNet, onun filialları və ya onların müvafiq vəzifəli şəxsləri, direktorları, işçiləri və ya agentləri veb-saytımızdan və ya xidmətlərimizdən istifadəniz nəticəsində və ya onunla əlaqədar yaranan hər hansı dolayı, təsadüfi, xüsusi, ardıcıl və ya cəza xarakterli ziyana görə məsuliyyət daşımır. .",, 
                "Biz bu Şərtləri istənilən vaxt, əvvəlcədən xəbərdarlıq etmədən dəyişdirmək və ya yeniləmək hüququmuzu özümüzdə saxlayırıq. Hər hansı bu cür dəyişiklik və ya yeniləmələrdən sonra vebsaytımızdan və ya xidmətlərimizdən davamlı istifadəniz yenidən işlənmiş Şərtləri qəbul etdiyiniz deməkdir.", 
                "Bu Şərtlərlə bağlı hər hansı sualınız və ya narahatlığınız varsa, support@shopnet.com ünvanında bizimlə əlaqə saxlayın."
            ]
        },
        popup_privacypolicies: {
            title: "Gizlilik Siyasəti", 
            headers: [
                "Məlumatın toplanması və istifadəsi", "Toplanan məlumatların növləri", "Məlumatların İstifadəsi", "Məlumatların ötürülməsi", "Məlumatların Açıqlanması"
            ], 
            contents: [
                "ShopNet (“biz”, “biz” və ya “bizim”) https://www.shopnet.com veb-saytını (bundan sonra “Xidmət” adlandırılacaq) idarə edir.", 
                "Bu səhifə Sizi Xidmətimizdən istifadə etdiyiniz zaman şəxsi məlumatların toplanması, istifadəsi və açıqlanması ilə bağlı siyasətlərimiz və bu məlumatlarla əlaqələndirdiyiniz seçimlər barədə məlumatlandırır.", 
                "Məlumatlarınızdan Xidməti təmin etmək və təkmilləşdirmək üçün istifadə edirik. Xidmətdən istifadə etməklə siz bu siyasətə uyğun olaraq məlumatların toplanması və istifadəsinə razılaşırsınız.", 
                "Xidmətimizi sizə təqdim etmək və təkmilləşdirmək üçün müxtəlif məqsədlər üçün bir neçə müxtəlif növ məlumat toplayırıq.", 
                "Şəxsi məlumat", 
                "Sizdən sizinlə əlaqə saxlamaq və ya müəyyən etmək üçün istifadə edilə bilən müəyyən şəxsiyyəti müəyyən edən məlumatları bizə təqdim etməyinizi xahiş edə bilərik (“Şəxsi Məlumatlar”). Şəxsiyyəti müəyyən edən məlumat aşağıdakıları əhatə edə bilər, lakin bunlarla məhdudlaşmır:", 
                "- E-poçt ünvanı", 
                "- Ad və soyad", 
                "- Telefon nömrəsi", 
                "- Ünvan, Ştat, Vilayət, Poçt/Poçt kodu, Şəhər", 
                "- Kukilər və İstifadə Məlumatları", 
                "İstifadə Məlumatları", 
                "Biz həmçinin Xidmətə necə daxil olduğu və istifadə edildiyi barədə məlumat toplaya bilərik (“İstifadə Məlumatı”). Bu İstifadə Məlumatına kompüterinizin İnternet Protokol ünvanı (məsələn, IP ünvanı), brauzer növü, brauzer versiyası, ziyarət etdiyiniz Xidmətimizin səhifələri, səfərinizin vaxtı və tarixi, həmin səhifələrdə sərf olunan vaxt, unikal məlumatlar kimi məlumatlar daxil ola bilər. cihaz identifikatorları və digər diaqnostik məlumatlar.", 
                "İzləmə və Kukilər Məlumatı", 
                "Xidmətimizdəki fəaliyyəti izləmək üçün kukilərdən və oxşar izləmə texnologiyalarından istifadə edirik və müəyyən məlumatları saxlayırıq.", 
                "Kukilər anonim unikal identifikatoru ehtiva edə bilən az miqdarda məlumatı olan fayllardır. Kukilər vebsaytdan brauzerinizə göndərilir və cihazınızda saxlanılır. Məlumat toplamaq və izləmək və Xidmətimizi təkmilləşdirmək və təhlil etmək üçün mayaklar, teqlər və skriptlər kimi digər izləmə texnologiyalarından da istifadə olunur.", 
                "Siz brauzerinizə bütün kukilərdən imtina etməyi və ya kukinin nə vaxt göndərildiyini bildirməyi göstəriş verə bilərsiniz. Bununla belə, kukiləri qəbul etmirsinizsə, Xidmətimizin bəzi hissələrindən istifadə edə bilməyəcəksiniz.", 
                "İstifadə etdiyimiz kukilərə nümunələr:", 
                "- Sessiya kukiləri. Xidmətimizi idarə etmək üçün Session Kukilərindən istifadə edirik.", 
                "- Kukilərə üstünlük verin. Tercihlərinizi və müxtəlif parametrlərinizi yadda saxlamaq üçün üstünlük kukilərindən istifadə edirik.", 
                "- Təhlükəsizlik kukiləri. Biz təhlükəsizlik məqsədləri üçün Təhlükəsizlik kukilərindən istifadə edirik.", 
                "ShopNet toplanmış məlumatları müxtəlif məqsədlər üçün istifadə edir:", 
                "- Xidmətimizi təmin etmək və saxlamaq", 
                "- Xidmətimizdəki dəyişikliklər barədə sizi xəbərdar etmək", 
                "- Siz bunu seçdiyiniz zaman Xidmətimizin interaktiv xüsusiyyətlərində iştirak etməyə icazə vermək", 
                "- Müştəri dəstəyini təmin etmək", 
                "- Xidmətimizi təkmilləşdirmək üçün təhlil və ya dəyərli məlumat toplamaq", 
                "- Xidmətimizdən istifadəyə nəzarət etmək", 
                "- Texniki problemləri aşkar etmək, qarşısını almaq və həll etmək", 
                "Məlumatlarınız, o cümlədən Şəxsi Məlumatlarınız, məlumatların mühafizəsi qanunlarının yurisdiksiyanızdan fərqli ola biləcəyi əyalət, əyalət, ölkə və ya digər hökumət yurisdiksiyasından kənarda yerləşən kompüterlərə ötürülə və ya kompüterlərdə saxlanıla bilər.", 
                "Əgər siz Azərbaycandan kənarda yerləşirsinizsə və bizə məlumat təqdim etməyi seçirsinizsə, lütfən nəzərə alın ki, biz məlumatları, o cümlədən Şəxsi Məlumatları Azərbaycana köçürür və orada emal edirik.", 
                "Sizin bu Məxfilik Siyasətinə razılığınız və ardınca belə məlumatı təqdim etməyiniz həmin köçürmə ilə razılaşdığınızı əks etdirir.", 
                "ShopNet, məlumatlarınızın təhlükəsiz şəkildə və bu Məxfilik Siyasətinə uyğun olaraq rəftar edilməsini təmin etmək üçün lazım olan bütün addımları atacaq və şəxsi məlumatlarınızın təhlükəsizliyi də daxil olmaqla, adekvat nəzarət mövcud olmadığı halda, heç bir təşkilata və ya ölkəyə ötürülməyəcəkdir. məlumatlarınız və digər şəxsi məlumatlarınız.", 
                "Hüquqi Tələblər", 
                "ShopNet şəxsi məlumatlarınızı aşağıdakılar üçün bu cür hərəkətlərin zəruri olduğuna inanaraq açıqlaya bilər:", 
                "- Uyğun olmaq"
            ]
        }
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
        itemview: [
            "Ürün", "Kategori", "Satın al", "Favorilere ekle", "Sepete ekle"
        ],
        mycart: [
            "Sepet", "Toplam fiyatı"
        ],
        myfav: "Favorilerim",
        products: {
            filter: [
                "Filtre", 
                "Kategorilere göre", 
                "Fiyata göre", 
                "Değerlendirmeye göre", 
                "Elektronik", 
                "Erkek giyim", 
                "Bayan giyimi", 
                "Mücevher", 
                "yada daha fazla", 
                "Yenile"
            ],
            sort: [
                "En çok satılan", 
                "Fiyat düşükten yükseğe", 
                "Fiyat pahalıdan ucuza", 
                "Düşükten yükseğe derecelendirme", 
                "Yüksekten düşüğe derecelendirme"
            ],
            button: "Daha Fazla"
        },
        purchase: [
            "Satın alma işleminiz başarıyla tamamlandı", 
            "Ürün adı", 
            "Kategori", 
            "Detaylar", 
            "Fiyatı", 
            "Geri dön", 
            "Anasayfa", 
            "Sepet", 
            "Favoriler"
        ],
        settings: {
            buttons: [
                "Hesap", 
                "Ödeme", 
                "Nakliye", 
                "Satın alma", 
                "Bildiri", 
                "Güvenlik"
            ],
            titles: [
                "Hesap Ayarları", 
                "Ödeme Ayarları", 
                "Nakliye Ayarları", 
                "Satın alma Ayarları", 
                "Bildiri Ayarları", 
                "Güvenlik Ayarları"
            ],
            headers: [
                "Profil bilgisi", 
                "Şifre değiştir", 
                "İletişim Tercihleri", 
                "Gizlilik ayarları", 
                "Ödeme metodları", 
                "Fatura bilgileri", 
                "Otomatik Ödeme Kurulumu", 
                "Teslimat Adresleri", 
                "Tercih Edilen Nakliye Yöntemi", 
                "İzleme Bildirimleri", 
                "Sipariş Geçmişi", 
                "Sipariş Bildirimleri", 
                "İade ve Geri Ödemeler", 
                "Genel Bildirimler", 
                "Fiyat Düşüş Bildirimleri", 
                "Stok Durumu Bildirimleri", 
                "İki Faktörlü Kimlik Doğrulama", 
                "Bağlı cihazlar", 
                "Hesap haraketliliği"
            ],
            text_contents: [
                "Kullanıcıların ad, e-posta adresi ve iletişim bilgileri gibi kişisel bilgilerini güncellemesine izin verir.", 
                "Kullanıcıların hesap şifrelerini değiştirmelerini sağlar.", 
                "Kullanıcıların e-posta aboneliklerini ve bildirim ayarlarını yönetmelerine izin verir.", 
                "Kullanıcılara, hedefli reklamları devre dışı bırakmak gibi gizlilik tercihlerini kontrol etmeleri için seçenekler sunar.", 
                "Kullanıcıların, kredi kartları veya PayPal hesapları gibi ödeme yöntemlerini eklemesine, düzenlemesine veya kaldırmasına izin verir.", 
                "Kullanıcıların fatura adreslerini ve diğer ilgili ayrıntıları girmesi veya güncellemesi için bir form sağlar.", 
                "Kullanıcıların, mümkünse abonelik tabanlı hizmetler için otomatik yinelenen ödemeler ayarlamasına olanak tanır.", 
                "Kullanıcıların farklı teslimat yerleri için gönderi adresleri eklemesine, düzenlemesine veya kaldırmasına izin verir.", 
                "Kullanıcıların standart veya ekspres teslimat gibi tercih ettikleri nakliye yöntemini seçmelerine olanak tanır.", 
                "Kullanıcılara, gönderi durumu güncellemelerini e-posta veya kısa mesaj yoluyla almak isteyip istemediklerini seçmeleri için seçenekler sunar.", 
                "Sipariş ayrıntıları, izleme bilgileri ve faturalar dahil olmak üzere geçmiş siparişlerin kapsamlı bir listesini görüntüler.", 
                "Kullanıcıların, sipariş onayı e-postaları ve güncellemeleri alma tercihlerini yönetmelerine olanak tanır.", 
                "Devam eden iade taleplerinin ilerleyişini izlemenin yanı sıra iadeleri ve geri ödemeleri başlatmak için bilgi ve yönergeler sağlar.", 
                "Kullanıcıların, promosyonlar veya yeni ürün uyarıları gibi genel bildirimleri alma tercihlerini kontrol etmelerini sağlar.", 
                "Kullanıcıların, belirli öğelerin fiyatları düştüğünde bildirim almayı etkinleştirmesine olanak tanır.", 
                "Kullanıcılara, stokta olmayan ürünler tekrar kullanılabilir olduğunda bildirimlere abone olma seçenekleri sunar.", 
                "Ek hesap güvenliği için kullanıcıların iki faktörlü kimlik doğrulamayı etkinleştirmesine veya devre dışı bırakmasına izin verir.", 
                "Kullanıcının hesabında oturum açmış olan cihazların bir listesini görüntüler ve tanınmayan cihazlardan çıkış yapma seçeneği sunar.", 
                "Giriş denemeleri ve şifre değişiklikleri de dahil olmak üzere son hesap etkinliğinin günlüğünü sağlar."
            ]
        },
        signinorup: {
            selections: ["Giriş yap", "Kayıt ol"], 
            loginform: ["ShopNet'e hoş geldiniz", "E-posta:", "Şifre:", "Giriş yap"], 
            registerform: ["Bize katılın", "İsim:", "Soy isim:", "E-posta:", "Cinsiyet:", "Ay", "Gün", "Yıl", 
            "Okudum ve onaylıyorum - ", "Şartlar ve Koşullar", "Üye ol", "Erkek", "Kadın", "Seç"], 
            buttons: ["Ana sayfaya git", "Hakkımızda sayfasına git", "İletişim sayfasına git"], 
            month: ["Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran", "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"], 
            placeholders: ["E-posta adresinizi girin", "Şifrenizi buraya girin", "İsminizi buraya girin", "Soy isminizi buraya girin", "E-posta adresinizi girin", "Yeni bir şifre atayın"]
        },
        filteraside: {},
        breadcrumb: "Şimdi buradasın", // if you change language in breadcrumb.jsx or in rounting, remove this label
        popup_failedmessage: "E-posta veya şifreniz yanlış",
        popup_successfullysigned: "Başarıyla oturum açtınız",
        popup_termsandconditions: {
            title: "Şartlar ve Koşullar", 
            headers: [
                "Kayıt", "Hizmetlerin Kullanımı", "Ödeme ve Gönderim", "İadeler ve Geri Ödemeler", "Garanti Reddi", "Sorumluluğun Sınırlandırılması", "Şartlarda Değişiklikler"
            ], 
            contents: [
                "En sevdiğiniz tüm ürünler için tek adresiniz olan çevrimiçi mağazanız ShopNet'e hoş geldiniz! Bu hüküm ve koşullar ('Şartlar'), web sitemizi ve hizmetlerimizi kullanımınızı yönetir. Web sitemize veya hizmetlerimize erişerek veya bunları kullanarak, bu Koşullar.",
                "Hizmetlerimizden bazılarını kullanmak için bizde bir hesap açmanız gerekebilir. Bir hesap açtığınızda, doğru ve eksiksiz bilgi vermeyi ve hesap bilgilerinizi güncel tutmayı kabul etmiş olursunuz.",
                "Web sitemizi ve hizmetlerimizi yalnızca yasal amaçlarla ve bu Koşullara uygun olarak kullanmayı kabul ediyorsunuz. Web sitemizi veya hizmetlerimizi, web sitemize veya hizmetlerimize zarar verebilecek, devre dışı bırakabilecek, aşırı yük getirebilecek veya bozabilecek ya da müdahale edebilecek herhangi bir şekilde kullanmayacağınızı kabul ediyorsunuz. başka herhangi bir tarafın web sitemizi veya hizmetlerimizi kullanması ve bunlardan zevk alması.",
                "Tüm fiyatlar Azerbaycan Manatı (AZN) cinsindendir ve önceden bildirilmeksizin değiştirilebilir. Kredi kartı veya zaman zaman sunabileceğimiz diğer ödeme yöntemleriyle ödeme kabul ediyoruz. Nakliye masrafları, nakliye hedefi, nakliye yöntemi ve sipariş ettiğiniz ürünlerin ağırlık ve boyutları.",
                "ShopNet'ten yaptığınız satın alma işleminden tamamen memnun kalmanızı istiyoruz. Herhangi bir nedenle memnun kalmazsanız, lütfen siparişinizi aldıktan sonraki 14 gün içinde iade işlemini başlatmak için müşteri hizmetleri ekibimizle iletişime geçin. Satın alma fiyatı için geri ödeme yapacağız. iade edilen ürün(ler)den ilgili nakliye ücretleri düşüldükten sonra.",
                "Web sitemiz ve hizmetlerimiz, 'olduğu gibi' ve 'mevcut olduğu gibi' esasına göre, satılabilirlik, belirli bir amaca uygunluk ve satılamayacağına ilişkin zımni garantiler dahil ancak bunlarla sınırlı olmamak üzere, açık veya zımni hiçbir garanti olmaksızın sağlanmaktadır. ihlal.",
                "ShopNet, bağlı kuruluşları veya ilgili memurları, direktörleri, çalışanları veya acenteleri, web sitemizi veya hizmetlerimizi kullanımınızdan kaynaklanan veya bunlarla bağlantılı olarak ortaya çıkan herhangi bir dolaylı, tesadüfi, özel, sonuçta ortaya çıkan veya cezai zarardan hiçbir şekilde sorumlu tutulamaz. .",
                "Bu Koşulları herhangi bir zamanda önceden haber vermeksizin değiştirme veya güncelleme hakkını saklı tutuyoruz. Bu tür herhangi bir değişiklik veya güncellemeden sonra web sitemizi veya hizmetlerimizi kullanmaya devam etmeniz, revize edilmiş Koşulları kabul ettiğiniz anlamına gelir.",
                "Bu Şartlar hakkında herhangi bir sorunuz veya endişeniz varsa, lütfen support@shopnet.com adresinden bizimle iletişime geçin."
            ]
        },
        popup_privacypolicies: {
            title: "Gizlilik Politikası", 
            headers: [
                "Bilgi Toplama ve Kullanma", "Toplanan Veri Türleri", "Verilerin Kullanımı", "Veri Aktarımı", "Verilerin Açıklanması"
            ], 
            contents: [
                "ShopNet ('biz', 'biz' veya 'bizim') https://www.shopnet.com web sitesini (bundan böyle 'Hizmet' olarak anılacaktır) işletmektedir.", 
                "Bu sayfa, Hizmetimizi kullandığınızda kişisel verilerin toplanması, kullanılması ve ifşa edilmesine ilişkin politikalarımız ve bu verilerle ilişkilendirdiğiniz seçenekler hakkında sizi bilgilendirir.", 
                "Verilerinizi Hizmeti sağlamak ve iyileştirmek için kullanırız. Hizmeti kullanarak, bilgilerin bu politikaya uygun olarak toplanmasını ve kullanılmasını kabul etmiş olursunuz.", 
                "Size Hizmetimizi sağlamak ve geliştirmek için çeşitli amaçlarla birkaç farklı türde bilgi topluyoruz.", 
                "Kişisel veri", 
                "Sizden, sizinle iletişim kurmak veya kimliğinizi belirlemek için kullanılabilecek belirli kişisel olarak tanımlanabilir bilgileri ('Kişisel Veriler') sağlamanızı isteyebiliriz. Kişisel olarak tanımlanabilir bilgiler şunları içerebilir, ancak bunlarla sınırlı değildir:", 
                "- E-posta adresi", 
                "- Ad ve soyad", 
                "- Telefon numarası", 
                "- Adres, Eyalet, İl, ZIP/Posta kodu, Şehir", 
                "- Çerezler ve Kullanım Verileri", 
                "Kullanım verisi", 
                "Hizmete nasıl erişildiği ve kullanıldığı hakkında da bilgi toplayabiliriz ('Kullanım Verileri'). Bu Kullanım Verileri, bilgisayarınızın İnternet Protokol adresi (örn. IP adresi), tarayıcı türü, tarayıcı sürümü, Hizmetimizin ziyaret ettiğiniz sayfaları, ziyaretinizin saati ve tarihi, bu sayfalarda geçirilen süre, benzersiz cihaz tanımlayıcıları ve diğer teşhis verileri.", 
                "İzleme ve Çerez Verileri", 
                "Hizmetimizdeki etkinliği izlemek için tanımlama bilgileri ve benzer izleme teknolojileri kullanıyoruz ve belirli bilgileri saklıyoruz.", 
                "Tanımlama bilgileri, anonim benzersiz bir tanımlayıcı içerebilen az miktarda veri içeren dosyalardır. Çerezler bir web sitesinden tarayıcınıza gönderilir ve cihazınızda saklanır. Bilgi toplamak ve izlemek ve Hizmetimizi iyileştirmek ve analiz etmek için işaretçiler, etiketler ve komut dosyaları gibi diğer izleme teknolojileri de kullanılır.", 
                "Tarayıcınıza tüm tanımlama bilgilerini reddetmesi veya bir tanımlama bilgisi gönderildiğinde bunu belirtmesi talimatını verebilirsiniz. Ancak tanımlama bilgilerini kabul etmezseniz Hizmetimizin bazı bölümlerini kullanamayabilirsiniz.", 
                "Kullandığımız Çerez örnekleri:", 
                "- Oturum Çerezleri. Hizmetimizi çalıştırmak için Oturum Çerezlerini kullanıyoruz.", 
                "- Tercih Çerezleri. Tercihlerinizi ve çeşitli ayarlarınızı hatırlamak için Tercih Tanımlama Bilgileri kullanıyoruz.", 
                "- Güvenlik Çerezleri. Güvenlik amacıyla Güvenlik Çerezleri kullanıyoruz.", 
                "ShopNet, toplanan verileri çeşitli amaçlar için kullanır:", 
                "- Hizmetimizi sağlamak ve sürdürmek", 
                "- Size servisimizdeki değişiklikler hakkında bilgi vermek", 
                "- İstediğiniz zaman Hizmetimizin etkileşimli özelliklerine katılmanıza izin vermek için", 
                "- Müşteri desteği sağlamak", 
                "- Hizmetimizi iyileştirebilmemiz için analiz veya değerli bilgiler toplamak için", 
                "- Hizmetimizin kullanımını izlemek için", 
                "- Teknik sorunları tespit etmek, önlemek ve ele almak", 
                "Kişisel Veriler de dahil olmak üzere bilgileriniz, eyaletinizin, ilinizin, ülkenizin veya veri koruma yasalarının sizin yargı alanınızdan farklı olabileceği diğer hükümet yetki alanlarının dışında bulunan bilgisayarlara aktarılabilir ve bu bilgisayarlarda saklanabilir.", 
                "Azerbaycan dışında bulunuyorsanız ve bize bilgi vermeyi seçerseniz, Kişisel Veriler dahil olmak üzere verileri Azerbaycan'a aktardığımızı ve orada işlediğimizi lütfen unutmayın.", 
                "Bu Gizlilik Politikasına onay vermeniz ve ardından bu tür bilgileri göndermeniz, bu aktarıma ilişkin anlaşmanızı temsil eder.", 
                "ShopNet, verilerinizin güvenli bir şekilde ve bu Gizlilik Politikasına uygun olarak işlenmesini sağlamak için makul olarak gerekli tüm adımları atacaktır ve Kişisel Verilerinizin güvenliği de dahil olmak üzere yeterli kontroller olmadıkça hiçbir kuruluşa veya ülkeye aktarılmayacaktır. verileriniz ve diğer kişisel bilgileriniz.", 
                "Yasal yükümlülükler", 
                "ShopNet, Kişisel Verilerinizi, böyle bir eylemin aşağıdakiler için gerekli olduğuna iyi niyetle inanarak ifşa edebilir:", 
                "- Uymak"
            ]
        }
    }
}