import { Vehicle, Tire } from "../data/models"

//modelul principal dupa care se vor stoca datele in store 
export type StoreType = {
    vehicles: {
        loading?: boolean
        items: Vehicle[]
    },
    tires: {
        loading?: boolean
        items: Tire[]
    }
    basket: {
        items: Tire[]
    }
    selectedVehicle?: Vehicle
}


//lista cu actiunile care pot ajunge in reducer 
export type ComponentActionType =
    | { type: "VEHICLES_LOADING" }
    | { type: "VEHICLES_LOADED", payload: Vehicle[] }
    | { type: "SELECT_VEHICLE", payload?: Vehicle }
    | { type: "TIRES_LOADED", payload: Tire[] }
    | { type: "ADD_TIRE_TO_BASKET", payload: Tire }

