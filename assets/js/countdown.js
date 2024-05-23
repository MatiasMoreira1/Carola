// Establece la fecha del cumpleaños
var countDownDate = new Date("May 23, 2024 00:52:00").getTime();

// Actualiza la cuenta regresiva cada segundo
var x = setInterval(function() {
    // Obtén la fecha y hora actual
    var now = new Date().getTime();
    
    // Calcula la diferencia entre la fecha del cumpleaños y la fecha actual
    var distance = countDownDate - now;
    
    // Calcula días, horas, minutos y segundos
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    // Muestra el resultado en el elemento con id="countdown"
    document.getElementById("countdown").innerHTML = days + "d " + hours + "h "
    + minutes + "m " + seconds + "s ";
    
    // Si la cuenta regresiva ha terminado, redirige a cumple.html
    if (distance < 0) {
        clearInterval(x);
        window.location.href = "/cum.html";
    }
}, 1000);
