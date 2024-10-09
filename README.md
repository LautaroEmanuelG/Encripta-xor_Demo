# 🔐 Encripta-xor Demo

Este proyecto es una demostración de la librería `Encripta-Xor`, que permite encriptar y desencriptar mensajes utilizando el algoritmo XOR. La idea principal de la librería es que pueda ser utilizada en proyectos para encriptar los mensajes de una manera fácil y simple.

## 📚 Librerías Utilizadas

- **Encripta-Xor**: Esta es la librería principal que se utiliza para encriptar y desencriptar los mensajes.
- **TypeScript**: Utilizamos TypeScript para escribir código más seguro y con tipado estático.
- **Webpack**: Webpack se utiliza para manejar los paquetes y compilar el código TypeScript a JavaScript.

## ⚙️ Instalación

Para instalar las dependencias del proyecto, ejecuta:

```sh
npm install
```

## 🛠️ Compilación

Para compilar el proyecto, ejecuta:

```sh
npx webpack
```

## 🚀 Funcionamiento

El proyecto consiste en una interfaz de chat simple con tres secciones: Emisor, Interceptador y Receptor. Los mensajes enviados desde el Emisor son encriptados utilizando una palabra clave y luego mostrados en el Interceptador. El Receptor desencripta los mensajes y los muestra en su sección.

![Uso Encripta-Xor](./DemoEncripta-Xor.gif)

## 🌐 Uso de Live Server

Para ejecutar la aplicación correctamente, no basta con abrir `index.html` directamente en el navegador. Esto se debe a que algunas funcionalidades, como la carga de módulos y la manipulación del DOM, requieren que la aplicación se sirva desde un servidor web.

Para ello, recomendamos utilizar la extensión **Live Server** de Visual Studio Code. Sigue estos pasos:

1. Instala la extensión **Live Server** desde el marketplace de Visual Studio Code.
2. Abre el proyecto en Visual Studio Code.
3. Haz clic derecho en `index.html` y selecciona "Open with Live Server".

Esto iniciará un servidor local y abrirá la aplicación en tu navegador, permitiendo que todas las funcionalidades trabajen correctamente.

## 🗂️ Estructura del Proyecto

- index.html: Contiene la estructura HTML de la interfaz de usuario.
- main.css: Contiene los estilos CSS para la interfaz de usuario.
- src/algoritmo.ts: Contiene la lógica principal para interceptar, encriptar, desencriptar y mostrar los mensajes.
- webpack.config.js: Configuración de Webpack para compilar el código TypeScript.

## 💡 Ejemplo de Uso

- El usuario escribe un mensaje en el campo de texto del Emisor y presiona el botón "Enviar".
- El mensaje es encriptado utilizando la palabra clave definida en el código.
- El mensaje encriptado se muestra en la sección del Interceptador.
- El mensaje encriptado es desencriptado y mostrado en la sección del Receptor.

## 🛑 Dificultades Encontradas

Durante el desarrollo del proyecto, encontramos algunas dificultades:

- Configuración de Webpack: Configurar Webpack para manejar TypeScript y generar un módulo compatible con ES6.
- Manipulación del DOM: Asegurarnos de que los elementos del DOM se manipulen correctamente y que los mensajes se muestren en las secciones correctas.
- Estilos CSS: Aplicar estilos CSS de manera que la interfaz sea clara y fácil de usar, tanto en modo claro como en modo oscuro.

## 🏁 Conclusión

Este proyecto demuestra cómo utilizar la librería Encripta-Xor para encriptar y desencriptar, utilizando encriptación simétrica, mensajes en una aplicación de chat simple. La librería es flexible y puede ser utilizada en múltiples proyectos para encriptar los mensajes, proporcionando una capa adicional de seguridad.
