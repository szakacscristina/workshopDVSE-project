
import { ComponentActionType } from "./model"
import { Vehicle, Tire } from "../data/models"

function vehiclesLoading(): ComponentActionType {
    return { type: "VEHICLES_LOADING" }
}

function vehiclesLoaded(items: Vehicle[]): ComponentActionType {
    return { type: "VEHICLES_LOADED", payload: items }
}

function selectVehicle(vehicle: Vehicle): ComponentActionType {
    return { type: "SELECT_VEHICLE", payload: vehicle }
}

function tiresLoaded(tires: Tire[]): ComponentActionType {
    return { type: "TIRES_LOADED", payload: tires }
}

function addTireToBasket(tire: Tire): ComponentActionType {
    return { type: "ADD_TIRE_TO_BASKET", payload: tire }
}


export const Actions = {
    vehiclesLoading,
    vehiclesLoaded,
    selectVehicle,
    tiresLoaded,
    addTireToBasket
}

export type IActions = typeof Actions
// in ts cu typeof vom extrage tipul pe care in are un anumit obiect, in cazul de fata a obiectului Actions
/*
este similar cu definirea typului
expor type IActions = {
    vehiclesLoading: () => void
    vehiclesLoaded: (items: Vehicle[]) => void
    selectVehicle: (vehicle: Vehicle) => void
    tiresLoaded: (tires: Tire[]) => void
    addTireToBasket: (tire: Tire) => void
}

*/
