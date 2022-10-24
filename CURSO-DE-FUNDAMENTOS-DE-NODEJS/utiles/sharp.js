const sharp = require('sharp');

sharp('images.png')
    .resize(100)
    .grayscale()
    .toFile('image2.png')