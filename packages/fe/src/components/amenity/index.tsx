import React from "react";

import { MarinaDetailQuery } from "__generated__/MarinaDetailQuery.graphql";

import LocalGasStationIcon from "@material-ui/icons/LocalGasStation";
import FlightIcon from "@material-ui/icons/Flight";
import BatteryChargingFullIcon from "@material-ui/icons/BatteryChargingFull";

import styles from "./amenity.module.scss";

type AmenityType = NonNullable<
  NonNullable<
    NonNullable<MarinaDetailQuery["response"]["marina"]>["amenities"]
  >[0]
>;

interface Props {
  isInline: boolean;
  amenity: AmenityType;
}

const CODE_TO_ICON_COMPONENT = {
  electricity: BatteryChargingFullIcon,
  fuel: LocalGasStationIcon,
  helicopter_pad: FlightIcon,
};

const Amenity: React.FC<Props> = ({ amenity, isInline }) => {
  const IconComponent = (CODE_TO_ICON_COMPONENT as any)[amenity.code];

  return isInline ? (
    <span className={styles.inline}>
      {amenity.code}
      &nbsp;
      {React.createElement(IconComponent, { fontSize: "small" })}
    </span>
  ) : (
    <div className={styles.badge}>
      {React.createElement(IconComponent, { fontSize: "small" })}
    </div>
  );
};

export default Amenity;
