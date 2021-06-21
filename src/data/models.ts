export type Sizes = "s" | "m" | "l"
export type Skin = "primary" | "highlight" | "success" | "danger"

export type Vehicle = {
    id: number
    name: string
    manufacturerName: string
    manufacturerLogo: string
}

export type Tire = {
    id: number
    brand: string
    season: string
    price: number
    stock: number
    size: string
}
