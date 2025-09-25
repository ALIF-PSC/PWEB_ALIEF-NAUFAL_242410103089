# PWEB_ALIEF-NAUFAL_242410103089
Tugas PWEB telah selesai

CODE HTML :
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>WEB ALIEF</title>
  <link rel="stylesheet" href="PRAKTIKUM_CSS_TUGAS.css">
  <link rel="stylesheet" href="Tugas_PWEB_ALIEF NOUFAL_242410103089.JS">
</head>
<body>
    <header>
        <nav>
            <div class="Porto">
                <h1>ALIEF NAUFAL F.R.</h1>
            </div>
            <ul class="nav-menu">
                <li><a href="#home">HOME</a></li>
                <li><a href="#about">ABOUT ME</a></li>
                <li><a href="#education">EDUCATION</a></li>
                <li><a href="#portfolio">PORTOFOLIO</a></li>
            </ul>
        </nav>
    </header>
</body>
</html>

<section id="home">
    <div class="home-content">
        <h2>WELCOME TO MY WEBSITE ALIEF</h2>
        <p>Ini adalah halaman utama portfolio saya. Silakan jelajahi untuk mengetahui lebih lanjut tentang saya.</p>
        <a href="#about" class="cta-button">JELAJAHI</a>
    </div>
</section>

<section id="about">
    <div class="about-container">
        <div class="about-profile">
            <div class="profile-image">
                <img src="assets/images/profile.jpg" alt="Alief Profile" id="profile-img">
                <div class="image-overlay">
                    <button onclick="changeImage()" class="edit-btn">Ganti Foto</button>
                </div>
            </div>
            <div class="profile-info">
                <h2>Tentang Saya</h2>
                <p id="about-text">Saya adalah seorang mahasiswa yang berada di Universitas Jember Fakultas Ilmu Komputer Program Studi Informatiak.</p>
                <button onclick="editAboutText()" class="edit-btn">Edit Deskripsi</button>
            </div>
        </div>

        <div class="contact-info">
            <h3>Kontak Saya</h3>
            <div class="contact-list">
                <div class="contact-item">
                    <span>Email: </span>
                    <span id="contact-email">fal.lif.3806@gmail.com</span>
                    <button onclick="editContact('email')">Edit</button>
                </div>
                <div class="contact-item">
                    <span>Telepon: </span>
                    <span id="contact-phone">+62 8589 5948 784</span>
                    <button onclick="editContact('phone')">Edit</button>
                </div>
                <div class="contact-item">
                    <span>LinkedIn: </span>
                    <span id="contact-linkedin">secret</span>
                    <button onclick="editContact('linkedin')">Edit</button>
                </div>
            </div>
        </div>

    <div class="contact-form-section">
        <h3>Kirim Pesan ke Alief</h3>
        <form id="messageForm" class="contact-form">
        <div class="form-group">
            <label for="fullname">Nama Lengkap</label>
            <input type="text" id="fullname" name="fullname" required>
        </div>
        <div class="form-group">
            <label for="email">Email</label>
            <input type="email" id="email" name="email" required>
        </div>
        <div class="form-group">
            <label for="message">Pesan Anda</label>
            <textarea id="message" name="message" rows="5" required placeholder="Ketik pesan Anda untuk Alief di sini..."></textarea>
        </div>
        <button type="submit" class="submit-btn">
            <span class="btn-text">Kirim Pesan Ini Ke ALIEF</span>
            <span class="btn-loading" style="display: none;">Mengirim...</span>
        </button>
        </form>
    </div>
</section>

<section id="education">
    <div class="education-container">
        <div class="education-header">
            <h1>Pendidikan</h1>
            <div class="separator"></div>
        </div>

        <div class="education-content">
            <div class="education-timeline">
                <div class="timeline-item">
                    <div class="timeline-year">2021 - Sekarang</div>
                    <div class="timeline-content">
                        <div class="education-details">
                            <h3>Universitas Jember</h3>
                            <p class="degree">Informatika</p>
                            <p class="description">Fakultas Ilmu Komputer </p>
                            <ul class="achievements">
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="timeline-item">
                    <div class="timeline-year">2018 - 2021</div>
                    <div class="timeline-content">
                        <div class="education-details">
                            <h3>MAN Bondowoso</h3>
                            <p class="degree">Jurusan IPS</p>
                            <p class="description">Sudah Lulus</p>
                            <ul class="achievements">
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="timeline-item">
                    <div class="timeline-year">2015 - 2018</div>
                    <div class="timeline-content">
                        <div class="education-details">
                            <h3>MTS AT-Taqwa Bondowoso</h3>
                            <p class="degree">Madrasah Tsanawiyah AT-Taqwa Bondowoso</p>
                            <p class="description">Sudah Lulus</p>
                            <ul class="achievements">
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</Section>



<section id="portfolio">
    <div class="portfolio-container">
        <div class="portfolio-header">
            <h1>Portfolio Saya</h1>
            <div class="separator"></div>
            <p class="portfolio-subtitle">masih proses</p>
        </div>
        
        <div class="portfolio-grid">
            <div class="portfolio-item">
                <div class="portfolio-content">
                    <h3>Website Portfolio Pribadi</h3>
                    <p>Website portfolio responsive dengan animasi modern menggunakan HTML, CSS, dan JavaScript </p>
                    <div class="portfolio-tech">
                        <span>HTML</span>
                        <span>CSS</span>
                        <span>JavaScript</span>
                    </div>
                </div>
            </div>

            <div class="portfolio-item">
                <div class="portfolio-content">
                    <h3>masih Proses</h3>
                    <p>OTW</p>
                </div>
            </div>
        </div>
    </div>
</section>

CODE CSS:
* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

body {
    background-color: rgb(255, 255, 255);
}

nav {
    background-color: #2d033b;
    display: flex;
    justify-content: space-between; 
    align-items: center;
    padding: 1rem;
    width: 100%;
}

.Porto h1 {
    color: #ffffff;
    margin: 0;
}

.nav-menu {
    display: flex;
    align-items: center;
    gap: 2rem;
    list-style: none;
    margin: 0;
    padding: 0;
}

.nav-menu li a {
    text-decoration: none;
    font-family: 'Times New Roman', Times, serif;
    color: white;
    padding: 0.5rem 1rem;
    font-weight: bold;
}

.nav-menu li a:hover {
    background-color: rgba(8, 4, 4, 0.2);
    border-radius: 4px;
}




#home {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(135deg, #12141b 0%, #402e52 100%);
    padding: 2rem;
    overflow: hidden;
}

.home-content {
    text-align: center;
    color: white;
    opacity: 0;
    transform: translateY(100px);
    animation: slideUp 1s ease-out 0.5s forwards;
}

.home-content h2 {
    font-size: 3rem;
    margin-bottom: 1rem;
    font-family: 'Arial', sans-serif;
    color: white;
    
    overflow: hidden;
    white-space: nowrap;
    margin: 0 auto;
    animation: 
        typing 5s steps(30, end) 2s infinite,
        blink-cursor 0.75s step-end infinite;
}

.home-content p {
    font-size: 1.2rem;
    margin-bottom: 2rem;
    line-height: 1.6;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
}

.cta-button {
    display: inline-block;
    padding: 12px 30px;
    background-color: #00d4ff;
    color: white;
    text-decoration: none;
    border-radius: 5px;
    font-weight: bold;
    transition: all 1s ease;
    opacity: 0;
    transform: translateY(50px);
    animation: buttonSlideUp 1s ease-out 1s forwards;
}

.cta-button:hover {
    background-color: #040804;
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}

@keyframes typing {
    from { width: 0 }
    to { width: 100% }
}

@keyframes slideUp {
    0% {
        opacity: 0;
        transform: translateY(100px);
    }
    100% {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes buttonSlideUp {
    0% {
        opacity: 0;
        transform: translateY(50px);
    }
    100% {
        opacity: 1;
        transform: translateY(0);
    }
}

@media (max-width: 768px) {
    .home-content h2 {
        font-size: 2rem;
    }
    
    .home-content p {
        font-size: 1rem;
    }
    
    .cta-button {
        padding: 10px 25px;
    }
}





#about {
    background: linear-gradient(135deg, #000000 0%, #4a1c6b 100%);
    color: white;
    padding: 4rem 2rem;
    min-height: 100vh;
}

.about-container {
    max-width: 1200px;
    margin: 0 auto;
}

.about-profile {
    display: grid;
    grid-template-columns: 300px 1fr;
    gap: 3rem;
    align-items: start;
    margin-bottom: 4rem;
}

.profile-image {
    position: relative;
    text-align: center;
}

.profile-image img {
    width: 250px;
    height: 250px;
    border-radius: 50%;
    object-fit: cover;
    border: 5px solid #ff6b6b;
    box-shadow: 0 10px 30px rgba(255, 107, 107, 0.3);
}

.image-overlay {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 250px;
    height: 250px;
    border-radius: 50%;
    background: rgba(0, 0, 0, 0.7);
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: opacity 0.3s ease;
}

.profile-image:hover .image-overlay {
    opacity: 1;
}

.edit-btn {
    background: linear-gradient(90deg, #ff6b6b, #ffa726);
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    font-weight: bold;
    transition: transform 0.3s ease;
}

.edit-btn:hover {
    transform: translateY(-2px);
}

.profile-info h2 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
    color: #ffa726;
}

.profile-info p {
    font-size: 1.1rem;
    line-height: 1.8;
    margin-bottom: 1.5rem;
    color: #e0e0e0;
}

.projects-gallery {
    background: rgba(255, 255, 255, 0.05);
    padding: 2rem;
    border-radius: 15px;
    backdrop-filter: blur(10px);
    margin-bottom: 3rem;
}

.projects-gallery h3 {
    font-size: 2rem;
    margin-bottom: 1.5rem;
    color: #ffa726;
    text-align: center;
}

.gallery-controls {
    margin-bottom: 2rem;
    text-align: center;
}

.btn-add {
    background: linear-gradient(90deg, #4CAF50, #45a049);
    color: white;
    border: none;
    padding: 12px 24px;
    border-radius: 5px;
    cursor: pointer;
    font-weight: bold;
    font-size: 1rem;
    transition: transform 0.3s ease;
}

.btn-add:hover {
    transform: translateY(-2px);
}

.gallery-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
}

.project-item {
    position: relative;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
}

.project-item img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    transition: transform 0.3s ease;
}

.project-item:hover img {
    transform: scale(1.05);
}

.project-actions {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.8);
    padding: 1rem;
    display: flex;
    gap: 1rem;
    justify-content: center;
}

.project-actions button {
    background: linear-gradient(90deg, #ff6b6b, #ffa726);
    color: white;
    border: none;
    padding: 8px 16px;
    border-radius: 5px;
    cursor: pointer;
    font-size: 0.9rem;
}

.contact-info {
    background: rgba(255, 255, 255, 0.05);
    padding: 2rem;
    border-radius: 15px;
    backdrop-filter: blur(10px);
    margin-bottom: 3rem;
}

.contact-info h3 {
    font-size: 2rem;
    margin-bottom: 1.5rem;
    color: #fcf8fd;
    text-align: center;
}

.contact-list {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.contact-item {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 1rem;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 8px;
}

.contact-item span:first-child {
    font-weight: bold;
    color: #f3f0f0;
    min-width: 100px;
}

.contact-item button {
    margin-left: auto;
    background: linear-gradient(90deg, #2196F3, #1976D2);
    color: white;
    border: none;
    padding: 6px 12px;
    border-radius: 5px;
    cursor: pointer;
    font-size: 0.9rem;
}

.contact-form-section {
    background: rgba(255, 255, 255, 0.05);
    padding: 2rem;
    border-radius: 15px;
    backdrop-filter: blur(10px);
    margin-bottom: 3rem;
}

.contact-form-section h3 {
    font-size: 2rem;
    margin-bottom: 2rem;
    color: #5b69a8;
    text-align: center;
}

.contact-form {
    max-width: 600px;
    margin: 0 auto;
}

.form-group {
    margin-bottom: 1.5rem;
}

.form-group label {
    display: block;
    margin-bottom: 0.5rem;
    font-weight: bold;
    color: #f4f1f5;
}

.form-group input,
.form-group textarea {
    width: 100%;
    padding: 12px;
    border: 2px solid rgba(255, 255, 255, 0.1);
    border-radius: 8px;
    background: rgba(255, 255, 255, 0.1);
    color: white;
    font-size: 1rem;
    transition: all 0.3s ease;
}

.form-group input:focus,
.form-group textarea:focus {
    outline: none;
    border-color: #d41d1d;
    background: rgba(255, 255, 255, 0.15);
}

.form-group input::placeholder,
.form-group textarea::placeholder {
    color: rgba(255, 255, 255, 0.6);
}

.submit-btn {
    width: 100%;
    background: linear-gradient(90deg, #25D366, #128C7E);
    color: white;
    border: none;
    padding: 15px;
    border-radius: 8px;
    font-size: 1.1rem;
    font-weight: bold;
    cursor: pointer;
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
}

.submit-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 20px rgba(37, 211, 102, 0.3);
}

.submit-btn:active {
    transform: translateY(0);
}

.submit-btn.loading {
    background: linear-gradient(90deg, #1ea952, #0d774c);
    cursor: not-allowed;
}

.submit-btn.loading .btn-text {
    display: none;
}

.submit-btn.loading .btn-loading {
    display: inline-block;
}

.form-group input:invalid:not(:focus):not(:placeholder-shown),
.form-group textarea:invalid:not(:focus):not(:placeholder-shown) {
    border-color: #310420;
}

.form-group input:valid:not(:focus):not(:placeholder-shown),
.form-group textarea:valid:not(:focus):not(:placeholder-shown) {
    border-color: #25D366;
}

.form-success {
    background: linear-gradient(90deg, #4CAF50, #45a049);
    color: white;
    padding: 1rem;
    border-radius: 8px;
    text-align: center;
    margin-top: 1rem;
    display: none;
}


@media (max-width: 768px) {
    .contact-form {
        padding: 0 1rem;
    }
    
    .form-group input,
    .form-group textarea {
        padding: 10px;
    }
    
    .submit-btn {
        padding: 12px;
        font-size: 1rem;
    }
}

@media (max-width: 768px) {
    .about-profile {
        grid-template-columns: 1fr;
        text-align: center;
    }
    
    .profile-image img {
        width: 200px;
        height: 200px;
    }
    
    .image-overlay {
        width: 200px;
        height: 200px;
    }
    
    .gallery-container {
        grid-template-columns: 1fr;
    }
    
    .contact-item {
        flex-direction: column;
        align-items: flex-start;
        gap: 0.5rem;
    }
    
    .contact-item button {
        margin-left: 0;
        align-self: flex-end;
    }
    
    .skill-item {
        flex-direction: column;
        align-items: flex-start;
        gap: 0.5rem;
    }
    
    .skill-bar {
        width: 100%;
    }
}

.about-container > * {
    opacity: 0;
    transform: translateY(30px);
    animation: fadeInUp 0.8s ease forwards;
}

.about-container > *:nth-child(1) { animation-delay: 0.2s; }
.about-container > *:nth-child(2) { animation-delay: 0.4s; }
.about-container > *:nth-child(3) { animation-delay: 0.6s; }
.about-container > *:nth-child(4) { animation-delay: 0.8s; }

@keyframes fadeInUp {
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

button {
    transition: all 0.3s ease;
}

button:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
}




#education {
    background: linear-gradient(135deg, #000000, #4b0082); 
    color: #ffffff; 
    padding: 60px 20px;
    font-family: 'Poppins', sans-serif;
}

.education-container {
    max-width: 900px;
    margin: 0 auto;
}

.education-header h1 {
    text-align: center;
    font-size: 2.5rem;
    margin-bottom: 10px;
    animation: slideIn 1s ease forwards;
    opacity: 0;
}

.separator {
    width: 80px;
    height: 3px;
    background: #ffffff;
    margin: 0 auto 40px auto;
    border-radius: 5px;
    animation: fadeIn 1.5s ease forwards;
    opacity: 0;
}

.education-timeline {
    display: flex;
    flex-direction: column;
    gap: 30px;
}

.timeline-item {
    background: rgba(255, 255, 255, 0.05);
    border-left: 3px solid #a855f7;
    padding: 20px;
    border-radius: 12px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.3);
    animation: slideFromLeft 1s ease forwards;
    opacity: 0;
}

.timeline-item:nth-child(even) {
    animation: slideFromRight 1s ease forwards;
}

.timeline-year {
    font-size: 1rem;
    font-weight: bold;
    color: #a78bfa;
    margin-bottom: 10px;
}

.timeline-content {
    display: flex;
    align-items: center;
    gap: 20px;
}

.institution-logo img {
    width: 60px;
    height: 60px;
    object-fit: contain;
    border-radius: 50%;
    background: #fff;
    padding: 5px;
}

.education-details h3 {
    font-size: 1.3rem;
    margin: 0;
    color: #ffffff;
    animation: fadeInUp 1.2s ease forwards;
    opacity: 0;
}

.education-details p {
    margin: 5px 0;
    color: #d1d5db;
    font-size: 0.95rem;
    animation: fadeInUp 1.5s ease forwards;
    opacity: 0;
}


@keyframes slideIn {
    from { transform: translateY(-30px); opacity: 0; }
    to { transform: translateY(0); opacity: 1; }
}

@keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
}

@keyframes slideFromLeft {
    from { transform: translateX(-100px); opacity: 0; }
    to { transform: translateX(0); opacity: 1; }
}

@keyframes slideFromRight {
    from { transform: translateX(100px); opacity: 0; }
    to { transform: translateX(0); opacity: 1; }
}

@keyframes fadeInUp {
    from { transform: translateY(20px); opacity: 0; }
    to { transform: translateY(0); opacity: 1; }
}




#portfolio {
    background: linear-gradient(135deg, #000000 0%, #4a1c6b 100%);
    color: white;
    padding: 4rem 2rem;
    min-height: 100vh;
}

.portfolio-container {
    max-width: 1200px;
    margin: 0 auto;
}

.portfolio-header {
    text-align: center;
    margin-bottom: 4rem;
    opacity: 0;
    transform: translateY(-50px);
    animation: slideDown 1s ease forwards;
}

.portfolio-header h1 {
    font-size: 3rem;
    margin-bottom: 1rem;
    background: linear-gradient(45deg, #faf8f8, #f7f6f5);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

.portfolio-header .separator {
    width: 100px;
    height: 3px;
    background: linear-gradient(90deg, #ff6b6b, #ffa726);
    margin: 0 auto 1rem;
    border-radius: 2px;
}

.portfolio-subtitle {
    font-size: 1.2rem;
    color: #e0e0e0;
    opacity: 0.8;
    font-style: italic;
}

.portfolio-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 2rem;
}

.portfolio-item {
    background: rgba(255, 255, 255, 0.05);
    border-radius: 15px;
    padding: 2rem;
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    transition: all 0.3s ease;
    opacity: 0;
    transform: translateY(50px);
    animation: slideUp 1s ease forwards;
}

.portfolio-item:nth-child(1) { animation-delay: 0.3s; }
.portfolio-item:nth-child(2) { animation-delay: 0.6s; }

.portfolio-item:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
    border-color: rgba(255, 107, 107, 0.3);
    background: rgba(255, 255, 255, 0.08);
}

.portfolio-content h3 {
    font-size: 1.8rem;
    margin-bottom: 1rem;
    color: #f8f6f2;
}

.portfolio-content p {
    color: #e0e0e0;
    line-height: 1.6;
    margin-bottom: 1.5rem;
    opacity: 0.9;
}

.portfolio-tech {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
}

.portfolio-tech span {
    background: linear-gradient(90deg, #712588, #5c0477);
    color: white;
    padding: 0.4rem 1rem;
    border-radius: 20px;
    font-size: 0.9rem;
    font-weight: bold;
}

@keyframes slideDown {
    0% {
        opacity: 0;
        transform: translateY(-50px);
    }
    100% {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes slideUp {
    0% {
        opacity: 0;
        transform: translateY(50px);
    }
    100% {
        opacity: 1;
        transform: translateY(0);
    }
}

@media (max-width: 768px) {
    #portfolio {
        padding: 3rem 1rem;
    }
    
    .portfolio-header h1 {
        font-size: 2.5rem;
    }
    
    .portfolio-grid {
        grid-template-columns: 1fr;
        gap: 1.5rem;
    }
    
    .portfolio-item {
        padding: 1.5rem;
    }
    
    .portfolio-content h3 {
        font-size: 1.5rem;
    }
}

@media (max-width: 480px) {
    .portfolio-header h1 {
        font-size: 2rem;
    }
    
    .portfolio-subtitle {
        font-size: 1rem;
    }
    
    .portfolio-item {
        padding: 1rem;
    }
    
    .portfolio-content h3 {
        font-size: 1.3rem;
    }
    
    .portfolio-tech {
        gap: 0.3rem;
    }
    
    .portfolio-tech span {
        padding: 0.3rem 0.8rem;
        font-size: 0.8rem;
    }
}


.portfolio-item:empty::before {
    content: "Coming Soon...";
    color: #ffa726;
    font-style: italic;
    opacity: 0.7;
}

.portfolio-item {
    position: relative;
    overflow: hidden;
}

.portfolio-item::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
    transition: left 0.5s ease;
}

.portfolio-item:hover::before {
    left: 100%;
}

CODE JAVASCRIPT:
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
