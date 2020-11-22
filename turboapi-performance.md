Was looking into 1mb.club
I proudly was about to submit Turboapi.dev
Until I saw
1.3MB

Crazy

Ok here is what I'm doing:

* Changed to 0.1% of browsers
* Moved font loading to the end of the page
* Reduce the number of font weights being loaded
* Removed tawk.to - fairly pointless anyway
* Moved some dependencies to the devDependencies section
* Removed some dependencies
* Converted images to correct sizes and webp but then jpg because safari doesn't work with webp
    * Still down from 323KB to 15KB
* Async font loading for Google fonts - end of page didn't work

Down to 302KB
