
const MAPBOX_WEBSERVICES_URL = "https://api.mapbox.com";
export const ACCESS_TOKEN_MAPBOX =
  "pk.eyJ1Ijoib2h1c2FyIiwiYSI6ImNrbXJ1bDRyMzBia2IycHJzbmdpbjVobWYifQ.7EthsV5t9R6ve15oUewRjQ";

export const getCityCountryFromLonLat = async (lon: number, lat: number) => {
    const url = `${MAPBOX_WEBSERVICES_URL}/geocoding/v5/mapbox.places/${lon},${lat}.json?access_token=${ACCESS_TOKEN_MAPBOX}`;
    const response = (await (await fetch(url)).json()) as any;

    let city = "",
      country = "";

    if (response.features && response.features.length) {
      (response.features as Array<any>).forEach((feature: any) => {
        if (
          !city &&
          (feature["place_type"].indexOf("place") !== -1 ||
            feature["place_type"].indexOf("region") !== -1)
        ) {
          city = feature.text;
        }
      });

      (response.features as Array<any>).reverse().forEach((feature: any) => {
        if (!country && feature["place_type"].indexOf("country") !== -1) {
          country = feature.text;
        }
      });
    }
    return [city, country];
  };