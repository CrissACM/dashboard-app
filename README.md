## Características Principales

- Visualización de perfiles de usuario.
- Dashboard con métricas de rendimiento cognitivo general y por áreas.
- Gráficos para visualizar tendencias y actividad (Puntuación global, actividad semanal, rendimiento por área, historial).
- Navegación entre una lista de usuarios y sus perfiles/datos detallados.
- Interfaz de usuario moderna y oscura implementada con NativeWind.
- Enrutamiento gestionado por Expo Router.
- Utiliza datos mock para simular la información de los usuarios.

## Tecnologías Utilizadas

- React Native
- Expo SDK
- TypeScript
- Expo Router (v2 o v3)
- NativeWind (Tailwind CSS para React Native)
- react-native-chart-kit (para gráficos)
- react-native-svg (dependencia de chart-kit)

## Prerrequisitos

Antes de empezar, asegúrate de tener instalado lo siguiente en tu sistema:

1.  **Node.js:** Se recomienda la versión LTS. Puedes descargarlo desde [nodejs.org](https://nodejs.org/).
2.  **npm** o **Yarn:** Vienen incluidos con Node.js (npm) o puedes instalar Yarn globalmente ([yarnpkg.com](https://yarnpkg.com/getting-started/install)).
3.  **Expo CLI:** Instálalo globalmente ejecutando:
    ```bash
    npm install -g expo-cli
    # o
    yarn global add expo-cli
    ```
4.  **Expo Go App (para Dispositivos Móviles):**
    - Instala la aplicación "Expo Go" desde la App Store (iOS) o Google Play Store (Android) en tu dispositivo físico si quieres probar la app directamente en él.
5.  **Git:** Para clonar el repositorio ([git-scm.com](https://git-scm.com/)).
6.  **(Opcional) Simulador iOS:** Necesitas macOS y [Xcode](https://developer.apple.com/xcode/) instalado.
7.  **(Opcional) Emulador Android:** Necesitas [Android Studio](https://developer.android.com/studio) instalado y un emulador configurado.

## Instalación

1.  **Clona el repositorio:**

    ```bash
    git clone <URL_DEL_REPOSITORIO_GIT>
    cd <NOMBRE_DE_LA_CARPETA_DEL_PROYECTO>
    ```

    _Reemplaza `<URL_DEL_REPOSITORIO_GIT>` y `<NOMBRE_DE_LA_CARPETA_DEL_PROYECTO>`._

2.  **Instala las dependencias:**
    ```bash
    npm install
    # o si usas Yarn
    yarn install
    ```

## Ejecución de la Aplicación

1.  **Inicia el servidor de desarrollo de Expo:**

    ```bash
    npx expo start
    # o
    npm start
    # o
    yarn start
    ```

    Esto iniciará el Metro Bundler y te mostrará un código QR en la terminal, además de abrir las herramientas de desarrollo de Expo en tu navegador.

2.  **Ejecutar en un Dispositivo Móvil (iOS o Android usando Expo Go):**

    - Asegúrate de que tu dispositivo móvil esté conectado a la **misma red Wi-Fi** que tu computadora.
    - Abre la aplicación **Expo Go** en tu dispositivo.
    - Escanea el **código QR** que aparece en la terminal o en las Expo Dev Tools.
    - Expo Go compilará y cargará la aplicación en tu dispositivo.

3.  **Ejecutar en un Simulador iOS (macOS con Xcode):**

    - Con el servidor de Expo corriendo (paso 1), presiona la tecla `i` en la terminal donde iniciaste Expo.
    - Esto intentará abrir la aplicación en un simulador iOS disponible. (Asegúrate de haber iniciado Xcode y el simulador al menos una vez antes).
    - _Nota: Podrías necesitar configurar las herramientas de línea de comandos de Xcode._

4.  **Ejecutar en un Emulador Android (Windows/macOS/Linux con Android Studio):**

    - Asegúrate de tener un emulador Android creado y ejecutándose desde Android Studio.
    - Con el servidor de Expo corriendo (paso 1), presiona la tecla `a` en la terminal.
    - Esto intentará instalar la aplicación Expo Go (si no está) y abrir tu app dentro de ella en el emulador activo.
    - _Nota: Puede requerir configuración de variables de entorno de Android (ANDROID_HOME) y asegurar que ADB reconozca tu emulador._
