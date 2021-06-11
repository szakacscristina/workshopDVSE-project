import { getAllVehicles } from "./getAllVehicles"
import { getTiresById } from "./getTiresById"


//Grupam aceste doua functii in obiectul Repositories ca sa fie mai usor de lucrat cu ele 
//O sa folosim doar Repositores.getAllVeh... unde avem nevoie 
export const Repositories = {
    getAllVehicles,
    getTiresById
}
