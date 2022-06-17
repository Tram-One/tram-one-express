<p align="center">
  <img src="logo.svg" width="512" />
</p>

## Summary

This logo was created for the Tram-One Project, it was designed by [Daniel Jurman](https://danieljurman.com/).
This version is built off of a single SVG. It uses svgexport to build png variants.

Additionally, you may import this as a javascript module. This will give you access to the png files, svg files, or svg element in your project.

## Usage

You can use any of the assets in your projects by directly refrencing the assets from npm.

### SVG

You can get the svg by pulling directly from the root

```
https://unpkg.com/@tram-one/tram-logo@4
```

You can install this as a JS module, and then point to the root for the an svg path (this requires a bundler that supports asset imports, the following example is using parcel).

```
npm i @tram-one/tram-logo
```

```js
import logo from "@tram-one/tram-logo";

const logoElement = document.createElement("img");
logoElement.src = logo;
```

If you want to have an inlined svg element, you can point to the `dist/element.js` to get the svg element in its entirety (this will allow you to select parts of the svg with css, and apply [variants](#using-variants)). This also avoids the need for a bundler that handles svg imports.

```js
import logo from "@tram-one/tram-logo/dist/element";

document.appendChild(logo);
```

### PNG

You can get an image from pulling from a specific png found in `dist`:

```
https://unpkg.com/@tram-one/tram-logo@4/dist/color_1024x1024.png
```

Like the svg, you can also import the rendered images directly from the module as well.

```js
import logo from "@tram-one/tram-logo/dist/color_512x512.png";

const logoElement = document.createElement("img");
logoElement.src = logo;
```

### Using Variants

This package also includes some variants of the logo, both a non-color black version, and a neon version. These can be used by importing the css associated with these variants, or directly referencing the rendered pngs.

This requires loading the svg as an inline element.

```js
import logo from "@tram-one/tram-logo/dist/element";
import "@tram-one/tram-logo/variants/neon.css";

document.appendChild(logo);
```

## Build Instructions

To build the logo images, and all variants, you'll need to serve the css assets, and then in a separate tab, run the build command. Once the build command has finished, you can kill the webserver.

```
npm ci
npm run serve
npm run build
```
