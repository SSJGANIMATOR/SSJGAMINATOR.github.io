// بيانات نموذجية للشهادات (ستستبدلها ببياناتك الحقيقية)
const certificatesData = {
    "ALIYA-2024-001": {
        studentName: "محمد أحمد",
        courseName: "كورس الأردوينو الشامل",
        instructor: "د. أحمد العلي",
        trainingHours: "40 ساعة",
        issueDate: "2024-01-15",
        certificateImage: "certificates/arduino-certificate.pdf"
    },
    "ALIYA-2024-002": {
        studentName: "فاطمة محمد",
        courseName: "كورس قيادة المسيرات",
        instructor: "م. سعيد الكمالي",
        trainingHours: "30 ساعة",
        issueDate: "2024-01-20",
        certificateImage: "certificates/drones-certificate.pdf"
    }
    // يمكنك إضافة المزيد من الشهادات هنا
};

// دالة التحقق من الشهادة
function verifyCertificate() {
    const serialNumber = document.getElementById('serialNumber').value.trim();
    const resultDiv = document.getElementById('certificateResult');
    
    if (certificatesData[serialNumber]) {
        const cert = certificatesData[serialNumber];
        resultDiv.innerHTML = `
            <h3>✅ تم التحقق من الشهادة بنجاح</h3>
            <div class="certificate-info">
                <p><strong>اسم الطالب:</strong> ${cert.studentName}</p>
                <p><strong>اسم الكورس:</strong> ${cert.courseName}</p>
                <p><strong>اسم المدرب:</strong> ${cert.instructor}</p>
                <p><strong>عدد الساعات:</strong> ${cert.trainingHours}</p>
                <p><strong>تاريخ الإصدار:</strong> ${cert.issueDate}</p>
                <p><strong>الرقم التسلسلي:</strong> ${serialNumber}</p>
            </div>
            <a href="${cert.certificateImage}" class="cta-button" download>تحميل الشهادة PDF</a>
        `;
        resultDiv.style.display = 'block';
    } else {
        resultDiv.innerHTML = `
            <h3>❌ الشهادة غير صالحة</h3>
            <p>الرقم التسلسلي غير صحيح أو الشهادة غير موجودة</p>
        `;
        resultDiv.style.display = 'block';
    }
}

// دالة إرسال نموذج التسجيل
function submitRegistrationForm(event, courseName) {
    event.preventDefault();
    
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        age: document.getElementById('age').value,
        course: courseName,
        notes: document.getElementById('notes').value
    };
    
    // هنا يمكنك إضافة كود لإرسال البيانات إلى بريدك الإلكتروني
    // أو حفظها في قاعدة بيانات
    
    alert(`شكراً لك ${formData.name}! تم استلام طلب التسجيل في ${courseName}. سنتواصل معك قريباً.`);
    
    // إعادة تعيين النموذج
    event.target.reset();
}

// إضافة تأثير التمرير السلس
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});