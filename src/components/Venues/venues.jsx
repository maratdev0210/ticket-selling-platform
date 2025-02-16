import BasicVenue from "./BasicVenue/BasicVenue";
import StadiumVenue from "./StadiumVenue/StadiumVenue";
import TShapedVenue from "./TShapedVenue/TShapedVenue";

import { BasicVenueProps } from "./BasicVenue/BasicVenueProps";
import { StadiumVenueProps } from "./StadiumVenue/StadiumVenueProps";
import { TShapedVenueProps } from "./TShapedVenue/TShapedVenueProps";

export const VENUES = [
  <BasicVenue key="venue_1" venueProps={BasicVenueProps} />,
  <StadiumVenue key="venue_2" venueProps={StadiumVenueProps} />,
  <TShapedVenue key="venue_3" venueProps={TShapedVenueProps} />,
];
