$(document).ready(function() {
    //Scroll Up/Down - Sticky Navigation Menu:
    $(window).scroll(function() {
        if(this.scrollY > 20) {
            $('.nav').addClass("sticky");
        } else {
            $('.nav').removeClass("sticky");
        }
    });
    
    //Menu Properties > for Responsive:
    $('.nav .menu li a').click(function() {
        $('html').css("scrollBehavior", "smooth");
    });
    $('.menu-btn').click(function() {
        $('.nav .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });
});

//Responsive Card Slider Properties:
var swiper = new Swiper(".slide-content", {
    slidesPerView: 3,
    spaceBetween: 25,
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints:{
        0: {
            slidesPerView: 1,
        },
        520: {
            slidesPerView: 2,
        },
        950: {
            slidesPerView: 3,
        },
    },
});

//Language Changer, between GR(Greece) <-> EN(English):
//Flag variable
var lang_flag = document.getElementById('languageChanger');
//Menu variables
var menu_choice1 = document.getElementById('menu_choice1');
var menu_choice2 = document.getElementById('menu_choice2');
var menu_choice3 = document.getElementById('menu_choice3');
var menu_choice4 = document.getElementById('menu_choice4');
//Home variables
var text_1 = document.getElementById('text-1');
var text_3 = document.getElementById('text-3');
//About variables
var about_title = document.getElementById('about-title');
var about_title1_1 = document.getElementById('about-title1-1');
var about_title1_2 = document.getElementById('about-title1-2');
var about_title1_3 = document.getElementById('about-title1-3')
var about_title2_1 = document.getElementById('about-title2-1');
var about_title2_2 = document.getElementById('about-title2-2');
var about_title2_3 = document.getElementById('about-title2-3');
var about_p1 = document.getElementById('about-p1');
var about_p2_1 = document.getElementById('about-p2-1');
var about_p2_2 = document.getElementById('about-p2-2');
//My Diary variable
var diary_title = document.getElementById('diary-title');
var contents_gr = document.getElementById('contents-gr');
var contents_en = document.getElementById('contents-en');
//Contact variables
var contact_title = document.getElementById('contact-title');
var contact_message = document.getElementById('contact-message');
var label_name = document.getElementById('label-name');
var label_email = document.getElementById('label-email');
var label_subject = document.getElementById('label-subject');
var label_message = document.getElementById('label-message');
var final_submit = document.getElementById('final-submit');
//Toggle variable
let toggle = true;

lang_flag.addEventListener('click', function() {
    toggle = !toggle;
    if(toggle) { //Greek Language!
        //Flag ------
        lang_flag.src = 'Images/ENFlag.png';
        //Menu ------
        menu_choice1.innerHTML = "Αρχική";
        menu_choice2.innerHTML = "Σχετικά";
        menu_choice3.innerHTML = "Ημερολόγιο";
        menu_choice4.innerHTML = "Επικοινωνία";
        //Home ------
        text_1.innerHTML = "Καλώς ήρθατε στον";
        text_3.innerHTML = "Επίσημο Ιστότοπο!"
        //About ------
        about_title.innerHTML = "☛ Σχετικά ☚";
        about_title1_1.innerHTML = "Σχετικά Με Εμένα";
        about_title2_1.innerHTML = "Τι είναι Petrun Stories";
        about_title1_2.innerHTML = "Λίγα Λόγια";
        about_title1_3.innerHTML = "Φωτογραφίες";
        about_title2_2.innerHTML = "Σφαιρική Εικόνα";
        about_title2_3.innerHTML = "Στόχος/Σκοπός";
        about_p1.innerHTML = "Ο Πέτρος Λώλης είναι ο ιδρυτής και ιδιοκτήτης του Petrun Stories. Είναι απόφοιτος του Τμήματος Επιστήμης Φυσικής Αγωγής και Αθλητισμού (Τ.Ε.Φ.Α.Α.) του Πανεπιστημίου Θεσσαλίας. Ασχολείται με τον κλασικό αθλητισμό σε αγωνιστικό επίπεδο τα τελευταία 8 χρόνια, έχοντας συμμετοχές και διακρίσεις σε πανελλήνιο επίπεδο σε αγωνίσματα μεσαίων και μεγάλων αποστάσεων (3000 μέτρα με Φυσικά Εμπόδια, 5000 μέτρα). Ασκεί το επάγγελμα του προπονητή στίβου και του καθηγητή Φυσικής Αγωγής σε σωματείο στίβου στα Ιωάννινα. Από τον Σεπτέμβριο του 2023 θέλησε να δημιουργήσει το πρώτο ελληνικό κανάλι εκλαϊκευμένης επιστήμης σχετικά με τον Αθλητισμό και την Φυσική Αγωγή.";
        about_p2_1.innerHTML = "Το Petrun Stories αποτελεί το 1ο κανάλι στο Youtube στην Ελλάδα που ασχολείται με θέματα της επιστήμης του Αθλητισμού και της Φυσικής Αγωγής. Η επικοινωνία της επιστήμης στην Ελλάδα μέσω καναλιών στο Youtube έχει γνωρίσει άνθηση τα τελευταία χρόνια. Η αθλητική επιστήμη και η φυσική αγωγή όμως δεν εκπροσωπούνται επαρκώς τόσο στο διαδίκτυο αλλά και στο κατά πόσο διεισδύουν εντός της κοινωνίας έννοιες σημαντικές, δημιουργώντας πολλές φορές παραπληροφόρηση πάνω σε θέματα άσκησης και δημιουργώντας ¨μύθους¨ εντός της αθλητικής επιστήμης.";
        about_p2_2.innerHTML = "Το Petrun Stories ήρθε να καλύψει αυτό το κενό. Ήρθε για να πληροφορήσει το κοινό που ενδιαφέρεται να μάθει για έννοιες σχετικά με τον Αθλητισμό και τη Φυσική Αγωγή πάντα συνοδευόμενες από επιστημονική τεκμηρίωση.";
        //My Diary ------
        diary_title.innerHTML = "☛ Ημερολόγιο ☚";
        contents_en.style.display = "none";
        contents_gr.style.display = "block";
        //Contact ------
        contact_title.innerHTML = "☛ Επικοινωνία ☚";
        contact_message.innerHTML = 'Επικοινωνήστε μαζί μου μέσω των <span style="color: #F12A27;">Social Media</span> ή στείλτε μου ένα μήνυμα χρησιμοποιώντας την παρακάτω <span style="color: #F12A27;">Φόρμα</span>!';
        label_name.innerHTML = '<i class="fas fa-user"></i> Όνομα';
        label_email.innerHTML = '<i class="fas fa-envelope"></i> Email';
        label_subject.innerHTML = '<i class="fas fa-question-circle"></i> Θέμα';
        label_message.innerHTML = '<i class="fas fa-comments"></i> Γράψτε ένα Μήνυμα';
        final_submit.innerHTML = 'ΥΠΟΒΟΛΗ <i class="fas fa-paper-plane"></i>';
    }
    else { //English Language!
        //Flag ------
        lang_flag.src = 'Images/GRFlag.png';
        //Menu ------
        menu_choice1.innerHTML = "Home";
        menu_choice2.innerHTML = "About";
        menu_choice3.innerHTML = "My Diary";
        menu_choice4.innerHTML = "Contact";
        //Home ------
        text_1.innerHTML = "Welcome to";
        text_3.innerHTML = "Official Website!"
        //About ------
        about_title.innerHTML = "☛ About ☚";
        about_title1_1.innerHTML = "About Me";
        about_title2_1.innerHTML = "Petrun Stories";
        about_title1_2.innerHTML = "Few Things";
        about_title1_3.innerHTML = "Pictures";
        about_title2_2.innerHTML = "Overview";
        about_title2_3.innerHTML = "Aim/Goal";
        about_p1.innerHTML = "Petros Lolis is the founder and owner of Petrun Stories. He got a BSc of the Department of Physical Education and Sports Science (T.E.F.A.A.) of the University of Thessaly. He has been involved in Track and Field at a competitive level for the last 8 years, having participated and excelled at the national level in medium and long-distance events (3000 meters steeplechasing, 5000 meters). He practices the profession of athletics coach and teacher of Physical Education in a track and field club in Ioannina. From September 2023 he wanted to create the first Greek channel of popularized science about Sports and Physical Education.";
        about_p2_1.innerHTML = "Petrun Stories is the 1st Youtube channel in Greece that deals with the science of Sports and Physical Education. The communication of science in Greece through Youtube channels has been booming in recent years. However, sports science and physical education are not adequately represented both on the internet and in the extent to which important concepts penetrate society, often creating misinformation on exercise issues and ¨myths¨ within sports science.";
        about_p2_2.innerHTML = "Petrun Stories came to fill this gap. It came to inform the public interested in learning about concepts related to Sports and Physical Education always accompanied by scientific evidence.";
        //My Diary ------
        diary_title.innerHTML = "☛ My Diary ☚";
        contents_gr.style.display = "none";
        contents_en.style.display = "block";
        //Contact ------
        contact_title.innerHTML = "☛ Contact ☚";
        contact_message.innerHTML = 'Contact me through my <span style="color: #F12A27;">Social Media</span> or send me a message using the <span style="color: #F12A27;">Form</span> below!';
        label_name.innerHTML = '<i class="fas fa-user"></i> Your Name';
        label_email.innerHTML = '<i class="fas fa-envelope"></i> Your Email';
        label_subject.innerHTML = '<i class="fas fa-question-circle"></i> Your Subject';
        label_message.innerHTML = '<i class="fas fa-comments"></i> Your Message';
        final_submit.innerHTML = 'SUBMIT <i class="fas fa-paper-plane"></i>';
    }
})