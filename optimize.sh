#!/bin/bash
# Dependancies
# - img-optimize - https://virtubox.github.io/img-optimize/
# - imagemagick
# - jpegoptim
# - optipng

FOLDER="img/Hanz_Franzacken2022/streetart/"

# max width
# WIDTH=1260
WIDTH=2500

# max height
# HEIGHT=900
HEIGHT=1406

#resize png or jpg to either height or width, keeps proportions using imagemagick
#find ${FOLDER} -iname '*.jpg' -o -iname '*.png' -exec convert \{} -verbose -resize ${WIDTH}x$HEIGHT\> \{} \;
../img-optimize/optimize.sh --all --path ${FOLDER}
