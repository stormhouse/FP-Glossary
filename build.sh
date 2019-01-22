ng build --prod

cp manifest.json dist/manifest.json
cp src/assets/tab-icon.png dist/tab-icon.png

if [ ! -d build ]; then
  mkdir build
fi

cd dist
zip -r ../build/fp-glossary.zip .