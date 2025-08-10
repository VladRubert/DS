#!/bin/bash

# Script para construir y preparar el proyecto para GitHub Pages

echo "🚀 Construyendo el proyecto para GitHub Pages..."
npm run build

echo "📦 Creando archivo .nojekyll para GitHub Pages..."
touch dist/.nojekyll

echo "✅ Proyecto listo para ser subido a GitHub Pages!"
echo ""
echo "Para publicar tu portafolio:"
echo "1. Crea un repositorio llamado tuusuario.github.io en GitHub"
echo "2. Sube todo el contenido de la carpeta 'dist' a ese repositorio"
echo "3. En la configuración del repositorio, activa GitHub Pages"
echo ""
echo "Tu portafolio estará disponible en https://tuusuario.github.io"