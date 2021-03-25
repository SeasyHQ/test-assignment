# test-assignment

## setup

- fork this repo and work there
- `yarn`
- `yarn bootstrap`
- `cd` into specific package (TODO: add script to run packages from lerna root)

to run each package, see their respective README and package.json

## use cases for frontend

- feel free to use any component library (we use mui)
- aligned to screenshots design (desktop) as closely as possible (see `design`)
    - list of all marina with cards
    - marina detail page
- if some data are missing from be, just fake them (fe or be, doesn't matter)

nice to have:

- responsive (mobile version)
- map (mapboxgl preferred)
- simple ssr reactdom with `rendertostream` with `koa` (or `next.js` if you want to set it up)

## use cases for backend

- query marinas, cities, countries, amenities, photos and their relevant properties
- query all marinas in a city
- query all marinas in a country
- add marina mutation with validation (e.g. yup)

nice to have:

- account schema (requires mutation for account table)
- authentication + authorization for add marina mutation
- pagination
