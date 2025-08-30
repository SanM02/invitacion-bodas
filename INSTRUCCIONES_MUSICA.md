# Instrucciones para agregar la música "Bebecita" de Anuel AA

## Opción 1: Archivo local (Recomendado)
1. Descarga la canción "Bebecita" de Anuel AA en formato MP3
2. Guarda el archivo como `bebecita.mp3` en la carpeta `Bodas`
3. En el archivo `index.html`, línea 25, cambia:
   ```html
   <source src="bebecita.mp3" type="audio/mpeg">
   ```

## Opción 2: URL en línea
Si tienes un enlace directo al archivo de audio, reemplázalo en:
- `index.html` línea 25
- `script.js` línea 22

## Opción 3: YouTube (requiere configuración adicional)
Para usar YouTube necesitarías implementar la API de YouTube, lo cual es más complejo.

## Configuración actual
- La música se reproduce automáticamente al entrar a la invitación
- Hay un botón flotante para pausar/reproducir la música
- La música está en bucle (se repite)
- Se mantiene la música al cambiar de pestaña del navegador

## Nota importante sobre derechos de autor
Asegúrate de tener los derechos o permisos necesarios para usar la canción en tu invitación web.

## Formatos de audio compatibles
- MP3 (recomendado)
- WAV
- OGG
- M4A

## Ubicación del archivo
Coloca el archivo de audio en: `c:\Users\San\Desktop\Bodas\bebecita.mp3`
