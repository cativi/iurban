export interface HomeData {
    heroSection: HeroSection;
    recommendedRoutesList: RecommendedRoutesList[];
    homePoints: HomePoint[];
}

export interface HeroSection {
    heroMultimedia: HeroMultimedia[];
    headerName: Claim;
    claim: Claim;
}

export interface Claim {
    es: string;
    en: string;
    va: string;
}

export interface HeroMultimedia {
    duration: number;
    src: string;
    type: string;
}

export interface HomePoint {
    id: number | string;
    type: string;
    category?: Category;
    items?: Item[];
    events?: Event[];
}

export interface Category {
    id: number;
    nameSlug: Claim;
    name: Claim;
}

export interface Event {
    id: number;
    type: Type;
    name: Claim;
    image: string;
    "24h": number;
    always_open: number;
    client_id: number;
    durationc: Durationc | null;
    end: Date;
    coordinates: string;
    nameSlug: Claim;
    num_clicks: number;
    opening_times: OpeningTime[];
    start: Date;
    subCatString: Claim;
}

export enum Durationc {
    The1H = "1h.",
    The1H15M = "1h. 15m",
    The1H30M = "1h. 30m",
    The2H = "2h.",
    The2H30M = "2h. 30m",
    The30M = "30m.",
    The3H = "3h.",
    The45M = "45m.",
}

export interface OpeningTime {
    day: string;
    time: string[];
}

export enum Type {
    Event = "event",
    PDF = "pdf",
    Point = "point",
}

export interface Item {
    id: number;
    type: Type;
    name: Claim;
    image: null | string;
    url: Claim | null;
    duration: number | null;
    durationc: Durationc | null;
    num_clicks: number;
    coordinates: null | string;
    nameSlug: Claim;
    subcategories: string[];
    accesibilities: any[];
    price: Price | null;
    priceFilter: null | string;
    popularity: number;
    start: Date | null;
    end: Date | null;
    categories: string[];
}

export enum Price {
    Empty = "€€",
    Gratis = "Gratis",
    Price = "€",
}

export interface RecommendedRoutesList {
    id: number;
    name: Claim;
    image: string;
    route_days: number;
}
