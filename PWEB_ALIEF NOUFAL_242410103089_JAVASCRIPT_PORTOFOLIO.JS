function changeImage() {
    const newImageUrl = prompt("Masukkan URL foto baru:");
    if (newImageUrl) {
        document.getElementById("profile-img").src = newImageUrl;
        alert("Foto profil berhasil diubah!");
    }
}

function editAboutText() {
    const currentText = document.getElementById("about-text").innerText;
    const newText = prompt("Edit deskripsi tentang Anda:", currentText);
    if (newText !== null) {
        document.getElementById("about-text").innerText = newText;
    }
}

function editContact(type) {
    let currentValue, promptMessage, elementId;

    switch (type) {
        case 'email':
            elementId = 'contact-email';
            promptMessage = 'Masukkan email baru:';
            break;
        case 'phone':
            elementId = 'contact-phone';
            promptMessage = 'Masukkan nomor telepon baru:';
            break;
        case 'linkedin':
            elementId = 'contact-linkedin';
            promptMessage = 'Masukkan LinkedIn baru:';
            break;
        default:
            return;
    }

    currentValue = document.getElementById(elementId).innerText;
    const newValue = prompt(promptMessage, currentValue);
    
    if (newValue !== null) {
        document.getElementById(elementId).innerText = newValue;
    }
}

document.getElementById('messageForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const submitBtn = this.querySelector('.submit-btn');
    const btnText = submitBtn.querySelector('.btn-text');
    const btnLoading = submitBtn.querySelector('.btn-loading');
    
    const fullname = document.getElementById('fullname').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    
    if (!fullname || !email || !message) {
        alert('Harap lengkapi semua field!');
        return;
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Format email tidak valid!');
        return;
    }
    
    btnText.style.display = 'none';
    btnLoading.style.display = 'inline';
    
    setTimeout(() => {
        this.reset();
        btnText.style.display = 'inline';
        btnLoading.style.display = 'none';
        
        alert('Pesan berhasil dikirim ke Alief!');
    }, 2000);
});

window.addEventListener('load', function() {
    console.log('Halaman portfolio Alief telah dimuat');
    
    document.querySelector('.home-content h2').style.opacity = '0';
    document.querySelector('.home-content h2').style.transition = 'opacity 1s';
    
    setTimeout(() => {
        document.querySelector('.home-content h2').style.opacity = '1';
    }, 500);
});

document.addEventListener('DOMContentLoaded', function() {
    const footer = document.createElement('footer');
    footer.innerHTML = '<p>&copy; ' + new Date().getFullYear() + ' Alief Naufal F.R. - All Rights Reserved</p>';
    footer.style.textAlign = 'center';
    footer.style.padding = '20px';
    footer.style.backgroundColor = '#f8f9fa';
    document.body.appendChild(footer);
});

const portfolioSkills = {
    languages: ['HTML', 'CSS', 'JavaScript'],
    frameworks: [],
    tools: ['VS Code', 'Git']
};

portfolioSkills.languages.push('PHP');
portfolioSkills.frameworks.push('Laravel');

console.log('Skills Portfolio:', portfolioSkills);

console.log('Tipe data portfolioSkills:', typeof portfolioSkills);
console.log('Tipe data portfolioSkills.languages:', typeof portfolioSkills.languages);