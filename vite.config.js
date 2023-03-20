import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  // Me habilita este plugin para darle soporte con Vite a React.js
  plugins: [react()],
  // Me permite modificar el puerto del servidor de desarrollo.
  server: {
    port: 3030,
    
  },
  // Me permite modificar el puerto del servidor pre-productivo que me ofrece Vite, luego de correr el build.
  preview: {
    port: 4270,
  },
  // Me permite personalizar la generación de los procesos vinculados para producción referente al build.
  build: {
    // Acelerar el proceso de compilación de los archivos cuando generas el build: .js,.jsx,.css,etc...
    incremental: true,
    //habilitar el modo watch y que el build se actualice automáticamente cada vez que se detecte un cambio
    watch: true, //AGREGADO
    // Habilitar un trabajo en conjunto con Babel, para el manejo correcto del versionado de tu JS moderno a la versión que necesite el navegador.
    babel: {
      presets: ["@babel/preset-env", "@babel/preset-react"],
    },    
    // Habilitar una caché para optimizar el compilado de los recursos que caen en dist.
    cache: true,
    // Habilitar la opción de compresión optimizada para minimizar el tamaño de los archivos generados.
    minify: true,
    // Habilitar el modo de entorno para el cual estamos generando el build
    mode: "production",
    // Habilitar la configuración del build mediante chunks parcelados
    chunks: true,
    // Habilitar la configuración para minimizar el tamaño de las librerías del proyecto que pasarán a producción
    moduleBundling: true,
    // pre-carga de módulos de rutas
    prerenderPaths: ["/"],
    // pre-carga general del código antes de visitarse
    modulePreload: true,
    // Podemos específicar otro directorio de salida
    outDir: "dist",
    // Habilitar el inspector de recomendaciones
    devCode: true,
    // Habilitar el inspector de recomendaciones y errores
    debug: true,
  },
});
