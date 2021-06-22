document.getElementById('button_principal').addEventListener('click', () => {
    function removernotificacion() {
        document.getElementById('notificationspace').innerHTML = ``
    }
    var nombre = document.getElementById('nombre').value;
    var correo = document.getElementById('correo').value;
    var coment = document.getElementById('comentario').value;

    var regex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    if (document.getElementById('nombre').value == '' || document.getElementById('correo').value == '') {
        document.getElementById('notificationspace').innerHTML = `<koly-notification type="Ups" content="Verifica.."></koly-notification>`;
        setTimeout(removernotificacion, 1500);
    } else {
        if (!regex.test(correo)) {
            document.getElementById('notificationspace').innerHTML = `<koly-notification type="Ups" content="Correo invalido.."></koly-notification>`;
            setTimeout(removernotificacion, 1500);
        } else {
            var time = String(new Date());
            var myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");

            var raw = JSON.stringify({
                "Nombre": nombre,
                "Correo": correo,
                "Comentario": coment,
                "Fecha & Hora": time
            });

            var requestOptions = {
                method: 'POST',
                headers: myHeaders,
                body: raw,
                redirect: 'follow'
            };

            fetch("https://sheet.best/api/sheets/f2584648-5a51-4da4-83d7-bd3390c05e8b", requestOptions)
                .then(response => response.text())
                .then(result => {
                    console.log(result);
                    document.getElementById('nombre').value = '';
                    document.getElementById('correo').value = '';
                    document.getElementById('comentario').value = '';
                    document.getElementById('notificationspace').innerHTML = `<koly-notification type="Listo" content="Enviado !!"></koly-notification>`;
                    setTimeout(removernotificacion, 1500);
                })
                .catch(error => console.log('error', error));
        }
    }
});
document.getElementById('bc').addEventListener('click', () => {
    document.getElementById('me').style.display = "none";
    document.getElementById('c1').style.display = "none";
    document.getElementById('c2').style.display = "none";
});
document.getElementById('cv').addEventListener('click', () => {
    document.getElementById('me').style.display = "block";
    document.getElementById('c1').style.display = "block";
    document.getElementById('c2').style.display = "none";
});
document.getElementById('ct').addEventListener('click', () => {
    document.getElementById('me').style.display = "block";
    document.getElementById('c1').style.display = "none";
    document.getElementById('c2').style.display = "block";
});

document.getElementById('cac').addEventListener('click', () => {
    window.open('https://www.facebook.com/cacselvalta', '_blank');
});

document.getElementById('Ardiles').addEventListener('click', () => {
    window.open('https://www.facebook.com/Caf%C3%A9-Ardiles-Cooperativa-Agraria-Cafetalera-Selva-Alta-2384378395122524', '_blank');
});