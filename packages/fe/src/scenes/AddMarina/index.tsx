import React, { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";
import {
  TextField,
  Button,
  FormGroup,
  FormControlLabel,
  Checkbox,
  CircularProgress,
  FormLabel,
  Snackbar,
} from "@material-ui/core";
import {Alert} from "@material-ui/lab";

import { useMutation, useQuery } from "relay-hooks";
import graphql from "babel-plugin-relay/macro";
import { Add, CheckCircleOutlineOutlined } from "@material-ui/icons";
import "mapbox-gl/dist/mapbox-gl.css";
import { AddMarinaAmenitiesQuery } from "__generated__/AddMarinaAmenitiesQuery.graphql";

import styles from "./add-marina.module.scss";
import { AddMarinaMutation } from "__generated__/AddMarinaMutation.graphql";
import { useHistory, useLocation } from "react-router";
import { Routes } from "routes";

const MARINA_KREMIK_LON_LAT: [number, number] = [15.9379, 43.5696];
const MAPBOX_WEBSERVICES_URL = "https://api.mapbox.com";
const ACCESS_TOKEN_MAPBOX =
  "pk.eyJ1Ijoib2h1c2FyIiwiYSI6ImNrbXJ1bDRyMzBia2IycHJzbmdpbjVobWYifQ.7EthsV5t9R6ve15oUewRjQ";

const getCityCountryFromLonLat = async (lon: number, lat: number) => {
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

interface FormState {
  name: string;
  photoUrl: string;
  amenities: Set<string>;
  city: string;
  country: string;
}

interface FormSubmitState {
  submitted: boolean;
  sucess: boolean;
  error: null | string;
}

export default function AddMarina() {
  const mapElementRef = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map>();
  const locationMarker = useRef<mapboxgl.Marker>();

  const history = useHistory();

  const [submitState, setSubmitState] = useState<FormSubmitState>({
    submitted: false,
    sucess: false,
    error: null,
  });
  const [formState, setFormState] = useState<FormState>({
    amenities: new Set(),
    name: "",
    photoUrl: "",
    city: "",
    country: "",
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleAmenityChange = (code: string) => {
    const amenities = new Set(formState.amenities);

    if (amenities.has(code)) {
      amenities.delete(code);
    } else {
      amenities.add(code);
    }

    setFormState({
      ...formState,
      amenities,
    });
  };

  const { data } = useQuery<AddMarinaAmenitiesQuery>(
    graphql`
      query AddMarinaAmenitiesQuery {
        amenities {
          id
          code
        }
      }
    `,
    {},
    {
      fetchPolicy: "store-and-network",
      onComplete: () => {},
    }
  );

  const [commit, { loading }] = useMutation<AddMarinaMutation>(graphql`
    mutation AddMarinaMutation($input: AddMarinaInput!) {
      addMarina(input: $input) {
        marina {
          id
        }
      }
    }
  `);

  useEffect(() => {
    if (!map.current) {
      mapboxgl.accessToken = ACCESS_TOKEN_MAPBOX;
      map.current = new mapboxgl.Map({
        style: "mapbox://styles/mapbox/streets-v11", // style URL
        container: mapElementRef.current?.id || "mapElementId", // container ID
        center: MARINA_KREMIK_LON_LAT, // starting position [lng, lat]
        zoom: 12, // starting zoom
      });

      locationMarker.current = new mapboxgl.Marker({
        draggable: true,
      })
        .setLngLat(MARINA_KREMIK_LON_LAT)
        .addTo(map.current);

      locationMarker.current.on("dragend", async (e) => {
        if (locationMarker.current) {
          const lngLat = locationMarker.current.getLngLat();

          const [city, country] = await getCityCountryFromLonLat(
            lngLat.lng,
            lngLat.lat
          );

          setFormState((prev) => ({
            ...prev,
            city,
            country,
          }));
        }
      });
    }

    return () => map.current && map.current.remove();
  }, []);

  const submit = () => {
    const lngLat = locationMarker.current!.getLngLat();

    const savePromise = commit({
      variables: {
        input: {
          ...formState,
          amenities: Array.from(formState.amenities),
          lon: lngLat.lng,
          lat: lngLat.lat,
        },
      },
    });

    savePromise.then((result) => {
      if (result && result.addMarina?.marina?.id) {
        setSubmitState({
          submitted: true,
          sucess: true,
          error: null,
        });

        setTimeout(() => {
          history.push(
            Routes.getTo(Routes.MARINA_DETAIL, {
              id: result!.addMarina!.marina!.id,
            })
          );
        }, 1500);
      } else {
        setSubmitState({
          submitted: true,
          sucess: false,
          error: "There was an error creating marina.",
        });
      }
    });
  };

  const handleClose = () => {
    setSubmitState({
      submitted: false,
      sucess: false,
      error: null,
    });
  };

  return (
    <>
      <h1>Add Marina</h1>
      <form noValidate autoComplete="off">
        <TextField
          name="name"
          value={formState.name}
          onChange={handleInputChange}
          fullWidth={true}
          variant="outlined"
          label="Name"
          style={{ marginTop: 15 }}
        />
        <TextField
          name="photoUrl"
          value={formState.photoUrl}
          onChange={handleInputChange}
          fullWidth={true}
          variant="outlined"
          label="Photo URL"
          style={{ marginTop: 15 }}
        />

        <FormLabel component="legend" className={styles.inputMargin}>
          Amenities
        </FormLabel>
        <FormGroup row={true}>
          {data?.amenities?.map((amenity) => (
            <FormControlLabel
              key={amenity.code}
              control={
                <Checkbox
                  checked={formState.amenities.has(amenity.code)}
                  onChange={() => handleAmenityChange(amenity.code)}
                  name={amenity.code}
                  color="primary"
                />
              }
              label={amenity.code}
            />
          ))}
        </FormGroup>
        <FormGroup row={true}>
          <TextField
            name="city"
            value={formState.city}
            onChange={handleInputChange}
            variant="outlined"
            label="City"
            style={{ marginRight: 15, marginTop: 15 }}
          />
          <TextField
            name="country"
            value={formState.country}
            onChange={handleInputChange}
            variant="outlined"
            label="Country"
            style={{ marginTop: 15 }}
          />
        </FormGroup>
        <div className={styles.map} id="mapElementId" ref={mapElementRef}></div>
        <Button
          style={{ marginTop: 15 }}
          variant="contained"
          startIcon={
            loading ? (
              <CircularProgress size={15} />
            ) : submitState.sucess ? (
              <CheckCircleOutlineOutlined />
            ) : (
              <Add />
            )
          }
          fullWidth={true}
          disabled={false}
          onClick={async () => {
            submit();
          }}
        >
          Save Marina
        </Button>
      </form>
      <Snackbar
        open={submitState.submitted}
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <Alert
          elevation={6}
          variant="filled"
          severity={submitState.sucess ? "success" : "error"}
          onClose={handleClose}
        >
          {submitState.sucess
            ? "Marina successfully created, you will be redirected."
            : submitState.error}
        </Alert>
      </Snackbar>
    </>
  );
}
