import Encriptxor from 'encripta-xor';

const key = 'Encriptador';
const encriptador = new Encriptxor();

// Función para agregar un mensaje al chat
function addMessage(chatId: string, message: string, isSent: boolean) {
  const chatBox = document.getElementById(chatId) as HTMLDivElement | null;
  if (chatBox) {
    const messageElement = document.createElement('div');
    messageElement.textContent = message;
    messageElement.classList.add('message', isSent ? 'sent' : 'received');
    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight;
  } else {
    console.error(`Chat box with id ${chatId} not found.`);
  }
}

// Función para interceptar, colorear y enviar mensajes
export function interceptarYEnviar(
  origenInputId: string,
  destinoMensajeId: string,
  origenMensajeId: string
) {
  const origenInput = document.getElementById(
    origenInputId
  ) as HTMLInputElement | null;
  const destinoMensaje = document.getElementById(
    destinoMensajeId
  ) as HTMLDivElement | null;
  const origenMensaje = document.getElementById(
    origenMensajeId
  ) as HTMLDivElement | null;
  const interceptador = document.getElementById(
    'interceptador'
  ) as HTMLDivElement | null;

  if (origenInput && destinoMensaje && origenMensaje && interceptador) {
    const mensaje = origenInput.value;
    if (mensaje) {
      // Mostrar en la pantalla del emisor
      addMessage(origenMensajeId, 'Enviado: ' + mensaje, true);

      // Encriptar el mensaje
      const mensajeEncriptado = encriptador.encriptar(mensaje, key);

      // Mostrar en el interceptador
      addMessage('interceptador', 'Interceptado: ' + mensajeEncriptado, false);

      // Desencriptar y mostrar en el receptor
      addMessage(
        destinoMensajeId,
        'Recibido: ' + encriptador.desencriptar(mensajeEncriptado, key),
        false
      );

      // Limpiar el input después de enviar
      origenInput.value = '';
    }
  } else {
    console.error('Uno o más elementos no se encontraron en el DOM.');
  }
}

// Mover el script de index.html a aquí
document.addEventListener('DOMContentLoaded', function () {
  const enviar1 = document.getElementById('enviar1');
  const enviar2 = document.getElementById('enviar2');
  const input1 = document.getElementById('input1') as HTMLInputElement | null;
  const input2 = document.getElementById('input2') as HTMLInputElement | null;
  const toggleDarkMode = document.getElementById('toggle-dark-mode');

  enviar1?.addEventListener('click', function () {
    interceptarYEnviar('input1', 'mensaje2', 'mensaje1');
  });

  enviar2?.addEventListener('click', function () {
    interceptarYEnviar('input2', 'mensaje1', 'mensaje2');
  });

  input1?.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
      interceptarYEnviar('input1', 'mensaje2', 'mensaje1');
    }
  });

  input2?.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
      interceptarYEnviar('input2', 'mensaje1', 'mensaje2');
    }
  });

  toggleDarkMode?.addEventListener('click', function () {
    document.body.classList.toggle('dark-mode');
  });
});
