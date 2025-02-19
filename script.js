document.addEventListener('DOMContentLoaded', () => {
    const animasyonKutusu = document.querySelector('.animasyon-kutusu');
    
    // Hover efekti
    animasyonKutusu.addEventListener('mouseover', () => {
        animasyonKutusu.style.transform = 'scale(1.1) rotate(5deg)';
    });

    animasyonKutusu.addEventListener('mouseout', () => {
        animasyonKutusu.style.transform = 'scale(1) rotate(0deg)';
    });

    // Tıklama animasyonu
    animasyonKutusu.addEventListener('click', () => {
        animasyonKutusu.style.transform = 'scale(0.9)';
        setTimeout(() => {
            animasyonKutusu.style.transform = 'scale(1)';
        }, 150);
    });

    // Sürekli renk değişimi animasyonu
    let hue = 0;
    setInterval(() => {
        hue = (hue + 1) % 360;
        animasyonKutusu.style.borderColor = `hsl(${hue}, 70%, 50%)`;
    }, 50);
}); 