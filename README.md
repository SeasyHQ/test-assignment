# test-assignment

## setup

- `yarn`
- `yarn bootstrap`
- `cd` into specific package (TODO: add script to run packages from lerna root)

to run each package, see their respective README and package.json

## use cases for frontend

- feel free to use any component library (but if modifications are needed, styled-components is preferred)
- aligned to screenshots design (desktop) as closely as possible
    - list of all marina with cards
    - marina detail page

nice to have:

- responsive (mobile version)
- map (mapboxgl preferred)

## use cases for backend

- query marinas, cities, countries, amenities, photos and their relevant properties
- query all marinas in a city
- query all marinas in a country
- add marina mutation with validation (e.g. yup)

nice to have:

- account schema (requires mutation for account table)
- authentication + authorization for add marina mutation
- pagination