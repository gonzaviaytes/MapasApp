// Generated by https://quicktype.io

export interface DirectionsResponse {
    routes:    Route[];
    waypoints: Waypoint[];
    code:      string;
    uuid:      string;
}

export interface Route {
    weight_name: string;
    weight:      number;
    duration:    number;
    distance:    number;
    legs:        Leg[];
    geometry:    Geometry;
}

export interface Geometry {
    coordinates: Array<number[]>;
    type:        GeometryType;
}

export enum GeometryType {
    LineString = "LineString",
}

export interface Leg {
    via_waypoints:  any[];
    admins:         Admin[];
    weight:         number;
    duration:       number;
    steps:          Step[];
    distance:       number;
    summary:        string;
    notifications?: Notification[];
}

export interface Admin {
    iso_3166_1_alpha3: string;
    iso_3166_1:        string;
}

export interface Notification {
    details:              Details;
    subtype:              string;
    type:                 string;
    geometry_index_end:   number;
    geometry_index_start: number;
}

export interface Details {
    actual_value: string;
    message:      string;
}

export interface Step {
    intersections: Intersection[];
    maneuver:      Maneuver;
    name:          string;
    duration:      number;
    distance:      number;
    driving_side:  DrivingSide;
    weight:        number;
    mode:          Mode;
    ref?:          string;
    geometry:      Geometry;
    destinations?: string;
    exits?:        string;
}

export enum DrivingSide {
    Left = "left",
    Right = "right",
    SharpLeft = "sharp left",
    SlightLeft = "slight left",
    SlightRight = "slight right",
    Straight = "straight",
}

export interface Intersection {
    entry:              boolean[];
    bearings:           number[];
    duration?:          number;
    mapbox_streets_v8?: MapboxStreetsV8;
    is_urban?:          boolean;
    admin_index:        number;
    out?:               number;
    weight?:            number;
    geometry_index:     number;
    location:           number[];
    in?:                number;
    turn_weight?:       number;
    turn_duration?:     number;
    classes?:           ClassElement[];
    lanes?:             Lane[];
    yield_sign?:        boolean;
    railway_crossing?:  boolean;
    toll_collection?:   TollCollection;
    traffic_signal?:    boolean;
}

export enum ClassElement {
    Motorway = "motorway",
    Restricted = "restricted",
    Toll = "toll",
    Tunnel = "tunnel",
}

export interface Lane {
    indications:       DrivingSide[];
    valid_indication?: DrivingSide;
    valid:             boolean;
    active:            boolean;
}

export interface MapboxStreetsV8 {
    class: MapboxStreetsV8Class;
}

export enum MapboxStreetsV8Class {
    Motorway = "motorway",
    MotorwayLink = "motorway_link",
    Primary = "primary",
    PrimaryLink = "primary_link",
    Secondary = "secondary",
    SecondaryLink = "secondary_link",
    Service = "service",
    Street = "street",
    Tertiary = "tertiary",
    Trunk = "trunk",
    TrunkLink = "trunk_link",
}

export interface TollCollection {
    type:  string;
    name?: string;
}

export interface Maneuver {
    type:           ManeuverType;
    instruction:    string;
    bearing_after:  number;
    bearing_before: number;
    location:       number[];
    modifier?:      DrivingSide;
}

export enum ManeuverType {
    Arrive = "arrive",
    Depart = "depart",
    Fork = "fork",
    OffRamp = "off ramp",
    OnRamp = "on ramp",
    Turn = "turn",
}

export enum Mode {
    Driving = "driving",
}

export interface Waypoint {
    distance: number;
    name:     string;
    location: number[];
}
