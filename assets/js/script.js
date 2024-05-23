const carta = document.getElementById('carta');
const mensaje = document.getElementById('mensaje');
let clickCount = 0;

carta.addEventListener('click', () => {
    clickCount++;
    
    if (clickCount < 10) {
        const scale = 1 - (clickCount * 0.1);
        carta.style.transform = `scale(${scale})`;
        
        const newTop = Math.random() * (window.innerHeight - carta.offsetHeight);
        const newLeft = Math.random() * (window.innerWidth - carta.offsetWidth);
        
        carta.style.top = `${newTop}px`;
        carta.style.left = `${newLeft}px`;
    } else {
        carta.classList.add('oculto');
        mensaje.classList.remove('oculto');
        
        // Coloca el mensaje en el centro de la pantalla
        const centerTop = (window.innerHeight - mensaje.offsetHeight) / 2;
        const centerLeft = (window.innerWidth - mensaje.offsetWidth) / 2;
        
        // mensaje.style.top = `${centerTop}px`;
        // mensaje.style.left = `${centerLeft}px`;
    }
});
