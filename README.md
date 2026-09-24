# Green Thumb Auto

A fictional GTA collectible minigame. Explore various areas, take pictures of plants, edit images with the react image editor and store in your herbarium.

# Screens

The application has 4 main screens:

## 1. The Map screen

The map is the home screen, which displays a [map](./public/map.png).
On the map you can pick a location to explore. You can pick from 2 areas:

- 🏜️ desert
- 🏖️ beach

The areas are represented as HTML maps which have `<area>` tags. Click on a an area
navigates to the area screen.

## 2. The Area Screen

The area screen displays an "in-game" screenshot, which displays few plants. The screenshots are in the `public/areas/` folder.
User can hover the plants - the plants have SVG areas similarly as the main map displays the areas. A tooltip "[ TAKE PHOTO ]"
will display.

The areas are navigated by url `/area/[slug]`. There is a finite number of areas, the links are generated statically with the function `generateStaticParams`.

This screen is navigated to, when the SVG areas in the root map are clicked.

## 3. The Camera screen

## 4. The Herbarium
