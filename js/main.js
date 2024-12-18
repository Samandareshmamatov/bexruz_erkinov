var swiper = new Swiper(".mySwiper", {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    loop: true,
    autoplay: {
        delay: 2000, // 2 seconds delay
        disableOnInteraction: false, // Continue autoplay after interaction
    },
    speed: 500 // Transition speed
});

let contactBtn = document.getElementById('contact__btn')

contactBtn.addEventListener('click', () => {
    alert(`Men bilan bog'lanish uchun: \n +998 99 118 05 23`)
})

let moreInfoBtn = document.getElementById('moreInfo__btn')

const translations = {
    uz: {
        nav_home: "Bosh sahifa",
        nav_about: "Men haqimda",
        nav_services: "Xizmatlar",
        nav_contact: "Bog'lanish",
        nav_schedule: "Dars jadvali",
        nav_resources: "Foydali resurslar",
        nav_statistics: "Statistika",
        quick_links: "Tezkor havolalar",
        greeting: "Assalomu alaykum! Men Erkinov Bexruz - matematika o'qituvchisiman.",
        intro_text: "Maktabda matematika fanidan dars beraman va o'quvchilarimni muvaffaqiyatga erishish uchun tayyorlashga intilaman.",
        motto: "\"Har bir o'quvchi o'z imkoniyatlarini topishi mumkin!\"",
        contact_btn: "Men bilan bog'lanish",
        about_title: "Men haqimda",
        about_subtitle: "Mening ta'lim va tajribam haqida",
        about_text: "Assalomu alaykum! Men Erkinov Bexruz, 2 yillik tajribaga ega matematik o'qituvchiman. O'z ishiga sadoqatli va matematika fani orqali o'quvchilarimning bilimlarini yanada oshirishga harakat qilaman. Men uchun o'qituvchilik — bu nafaqat dars berish, balki o'quvchilarga ulkan bilim manbasiga aylanishi uchun yordam berishdir. Matematika, mening fikrimcha, faqat hisob-kitoblar bilan chegaralanmaydi, balki muammolarni hal qilish, mantiqiy fikrlashni rivojlantirish va ijodiy yondashuvni talab qiladi. Bu fanni o'rgatish jarayonida men har doim o'quvchilarning shaxsiy ehtiyojlarini va qiziqishlarini inobatga olishga harakat qilaman.",
        services_title: "Mening xizmatlarim",
        services_subtitle: "O'quvchilar uchun taqdim etiladigan xizmatlar",
        service1_title: "Individual darslar",
        service1_desc: "Har bir o'quvchining shaxsiy ehtiyojlariga moslashtirilgan individual darslar",
        service2_title: "Guruh darslari",
        service2_desc: "Kichik guruhlarda samarali o'qitish",
        service3_title: "Online darslar",
        service3_desc: "Masofaviy ta'lim orqali qulay vaqtda o'qish imkoniyati",
        service4_title: "Olimpiada tayyorgarligi",
        service4_desc: "Olimpiadalarga maxsus tayyorgarlik ko'rish",
        footer_about_title: "Men haqimda",
        footer_about_text: "Matematika o'qituvchisi sifatida men o'quvchilarning bilimlarini oshirishga va ularning kelajakdagi muvaffaqiyatlariga hissa qo'shishga intilyapman.",
        footer_contact_title: "Bog'lanish",
        footer_contact_text: "Savollaringiz bormi? Men bilan bog'laning:",
        footer_links_title: "Foydali havolalar",
        footer_links_home: "Bosh sahifa",
        footer_links_about: "Men haqimda",
        footer_links_services: "Xizmatlar",
        footer_links_contact: "Bog'lanish",
        newsletter_title: "Yangiliklardan xabardor bo'ling",
        newsletter_text: "Yangi darslar va maxsus takliflar haqida birinchilardan bo'lib xabardor bo'ling",
        newsletter_placeholder: "Email manzilingizni kiriting",
        newsletter_btn: "Obuna bo'lish",
        copyright_text: "Barcha huquqlar himoyalangan",
        stats_title: "Yutuqlar va statistika",
        stats_students: "O'quvchilar",
        stats_experience: "Yillik tajriba",
        stats_olympiad: "Olimpiada g'oliblari",
        stats_success: "Muvaffaqiyat darajasi",
        resources_title: "Foydali resurslar",
        resources_videos: "Video darslar",
        resources_videos_desc: "Har xil mavzularda video darslar to'plami",
        resources_tests: "Test materiallari",
        resources_tests_desc: "DTM va Olimpiada testlari to'plami",
        resources_materials: "Qo'shimcha materiallar",
        resources_materials_desc: "Darslik va qo'llanmalar to'plami",
        learn_more: "Batafsil",
        schedule_title: "Dars jadvali",
        schedule_time: "Vaqt",
        schedule_monday: "Dushanba",
        schedule_tuesday: "Seshanba",
        schedule_wednesday: "Chorshanba",
        schedule_thursday: "Payshanba",
        schedule_friday: "Juma",
        schedule_saturday: "Shanba",
        contact_info: "Bog'lanish ma'lumotlari",
        email_label: "Email: ",
        phone_label: "Telefon: ",
        working_hours: "Ish vaqti: ",
        working_days: "Ish kunlari: ",
        work_time: "9:00 - 18:00",
        work_days: "Dushanba - Shanba"
    },
    en: {
        nav_home: "Home",
        nav_about: "About",
        nav_services: "Services",
        nav_contact: "Contact",
        nav_schedule: "Schedule",
        nav_resources: "Resources",
        nav_statistics: "Statistics",
        quick_links: "Quick Links",
        greeting: "Hello! I am Erkinov Bekhruz - a mathematics teacher.",
        intro_text: "I teach mathematics at school and strive to prepare my students for success.",
        motto: "\"Every student can find their potential!\"",
        contact_btn: "Contact me",
        about_title: "About me",
        about_subtitle: "About my education and experience",
        about_text: "Hello! I am Erkinov Bekhruz, a mathematics teacher with 2 years of experience. I am dedicated to my work and strive to enhance my students' knowledge through mathematics. For me, teaching is not just about giving lessons, but helping students become a great source of knowledge. Mathematics, in my opinion, is not limited to calculations but requires problem-solving, development of logical thinking, and creative approaches. In teaching this subject, I always try to take into account the personal needs and interests of students.",
        services_title: "My services",
        services_subtitle: "Services provided for students",
        service1_title: "Individual lessons",
        service1_desc: "Individual lessons tailored to each student's personal needs",
        service2_title: "Group lessons",
        service2_desc: "Effective teaching in small groups",
        service3_title: "Online lessons",
        service3_desc: "Opportunity to study at a convenient time through distance learning",
        service4_title: "Olympiad preparation",
        service4_desc: "Special preparation for Olympiads",
        footer_about_title: "About me",
        footer_about_text: "As a mathematics teacher, I am committed to enhancing students' knowledge and contributing to their future success.",
        footer_contact_title: "Contact",
        footer_contact_text: "Have questions? Contact me:",
        footer_links_title: "Useful links",
        footer_links_home: "Home",
        footer_links_about: "About",
        footer_links_services: "Services",
        footer_links_contact: "Contact",
        newsletter_title: "Stay updated",
        newsletter_text: "Be the first to know about new lessons and special offers",
        newsletter_placeholder: "Enter your email",
        newsletter_btn: "Subscribe",
        copyright_text: "All rights reserved",
        stats_title: "Achievements and Statistics",
        stats_students: "Students",
        stats_experience: "Years of Experience",
        stats_olympiad: "Olympiad Winners",
        stats_success: "Success Rate",
        resources_title: "Useful Resources",
        resources_videos: "Video Lessons",
        resources_videos_desc: "Collection of video lessons on various topics",
        resources_tests: "Test Materials",
        resources_tests_desc: "Collection of State Exam and Olympiad tests",
        resources_materials: "Additional Materials",
        resources_materials_desc: "Collection of textbooks and manuals",
        learn_more: "Learn More",
        schedule_title: "Class Schedule",
        schedule_time: "Time",
        schedule_monday: "Monday",
        schedule_tuesday: "Tuesday",
        schedule_wednesday: "Wednesday",
        schedule_thursday: "Thursday",
        schedule_friday: "Friday",
        schedule_saturday: "Saturday",
        contact_info: "Contact Information",
        email_label: "Email: ",
        phone_label: "Phone: ",
        working_hours: "Working Hours: ",
        working_days: "Working Days: ",
        work_time: "9:00 AM - 6:00 PM",
        work_days: "Monday - Saturday"
    },
    ru: {
        nav_home: "Главная",
        nav_about: "Обо мне",
        nav_services: "Услуги",
        nav_contact: "Контакты",
        nav_schedule: "Расписание",
        nav_resources: "Ресурсы",
        nav_statistics: "Статистика",
        quick_links: "Быстрые ссылки",
        greeting: "Здравствуйте! Я Эркинов Бехруз - учитель математики.",
        intro_text: "Я преподаю математику в школе и стремлюсь подготовить своих учеников к успеху.",
        motto: "\"Каждый ученик может найти свой потенциал!\"",
        contact_btn: "Связаться со мной",
        about_title: "Обо мне",
        about_subtitle: "О моем образовании и опыте",
        about_text: "Здравствуйте! Я Эркинов Бехруз, учитель математики с 2-летним опытом работы. Я предан своему делу и стремлюсь повышать знания своих учеников через математику. Для меня преподавание - это не просто проведение уроков, а помощь ученикам стать большим источником знаний. Математика, по моему мнению, не ограничивается вычислениями, а требует решения задач, развития логического мышления и творческого подхода. В преподавании этого предмета я всегда стараюсь учитывать личные потребности и интересы учеников.",
        services_title: "Мои услуги",
        services_subtitle: "Услуги, предоставляемые для учеников",
        service1_title: "Индивидуальные занятия",
        service1_desc: "Индивидуальные занятия, адаптированные под личные потребности каждого ученика",
        service2_title: "Групповые занятия",
        service2_desc: "Эффективное обучение в малых группах",
        service3_title: "Онлайн занятия",
        service3_desc: "Возможность учиться в удобное время через дистанционное обучение",
        service4_title: "Подготовка к олимпиадам",
        service4_desc: "Специальная подготовка к олимпиадам",
        footer_about_title: "Обо мне",
        footer_about_text: "Как учитель математики, я стремлюсь повышать знания учеников и вносить вклад в их будущий успех.",
        footer_contact_title: "Контакты",
        footer_contact_text: "Есть вопросы? Свяжитесь со мной:",
        footer_links_title: "Полезные ссылки",
        footer_links_home: "Главная",
        footer_links_about: "Обо мне",
        footer_links_services: "Услуги",
        footer_links_contact: "Контакты",
        newsletter_title: "Будьте в курсе",
        newsletter_text: "Узнавайте первыми о новых уроках и специальных предложениях",
        newsletter_placeholder: "Введите ваш email",
        newsletter_btn: "Подписаться",
        copyright_text: "Все права защищены",
        stats_title: "Достижения и статистика",
        stats_students: "Учеников",
        stats_experience: "Лет опыта",
        stats_olympiad: "Победителей олимпиад",
        stats_success: "Успеваемость",
        resources_title: "Полезные ресурсы",
        resources_videos: "Видео уроки",
        resources_videos_desc: "Коллекция видео уроков по разным темам",
        resources_tests: "Тестовые материалы",
        resources_tests_desc: "Коллекция тестов ГИА и олимпиад",
        resources_materials: "Дополнительные материалы",
        resources_materials_desc: "Коллекция учебников и пособий",
        learn_more: "Подробнее",
        schedule_title: "Расписание занятий",
        schedule_time: "Время",
        schedule_monday: "Понедельник",
        schedule_tuesday: "Вторник",
        schedule_wednesday: "Среда",
        schedule_thursday: "Четверг",
        schedule_friday: "Пятница",
        schedule_saturday: "Суббота",
        contact_info: "Контактная информация",
        email_label: "Эл. почта: ",
        phone_label: "Телефон: ",
        working_hours: "Рабочие часы: ",
        working_days: "Рабочие дни: ",
        work_time: "9:00 - 18:00",
        work_days: "Понедельник - Суббота"
    }
};

function updateContent(language) {
    document.querySelectorAll('[data-lang-key]').forEach(element => {
        const key = element.getAttribute('data-lang-key');
        if (translations[language][key]) {
            element.textContent = translations[language][key];
        }
    });
}

// Theme toggle functionality
const themeToggle = document.getElementById('themeToggle');
const themeIcon = document.getElementById('themeIcon');

function updateThemeIcon(theme) {
    themeIcon.className = theme === 'dark' ? 'bx bx-moon text-2xl' : 'bx bx-sun text-2xl';
}

themeToggle.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
});

// Add box-shadow to header on scroll
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Add event listener to language selector
document.getElementById('languageSelector').addEventListener('change', (e) => {
    updateContent(e.target.value);
});

// Add event listener to menu toggle
document.getElementById('menuToggle').addEventListener('click', () => {
    const mobileMenu = document.getElementById('mobileMenu');
    mobileMenu.classList.toggle('hidden');
});
