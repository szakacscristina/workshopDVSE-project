import { StoreType, ComponentActionType } from "./model"

//datele cu care va se va initializa storul
const DEFAULT_STATE: StoreType = {
    basket: {
        items: []
    },
    tires: {
        items: []
    },
    vehicles: {
        items: []
    }
}


//reducerul este functia responsabila cu schimbarea valorilor din state. Aici este singurul loc in care acestea ar trebui modificate.
export function reducer(state = DEFAULT_STATE, action: ComponentActionType): StoreType {
    //in functie de tipul actiunii cu care va fi apelat se vor efectua diferite operatiuni de schimbare a datelor 
    switch (action.type) {
        case "VEHICLES_LOADING": {
            return {
                ...state,
                vehicles: {
                    ...state.vehicles,
                    loading: true
                }
                /*
                este folosita sintaxa cu spread operator -> 
                exemplu: 
                var point = {x:1, y:2 } 
                {...point, x : 4 } rezulta { x: 4 , y :2 }
                {...point, z: 5} rezulta {x:1, y:2, z: 5 }
                */
            }
        }
        case "VEHICLES_LOADED": {
            return {
                ...state,
                vehicles: {
                    ...state.vehicles,
                    loading: false,
                    items: action.payload
                }
            }
        }
        case "SELECT_VEHICLE": {
            return {
                ...state,
                // daca paylodul este egal cu elementul selectat atunci atunci se va sterge valoarea selectata 
                selectedVehicle: state.selectedVehicle?.id != action.payload?.id ? action.payload : undefined,
                tires: {
                    items: [],
                    loading: true
                }
            }
        }
        case "TIRES_LOADED": {
            return {
                ...state,
                tires: {
                    ...state.tires,
                    loading: false,
                    items: action.payload
                }
            }
        }
        case "ADD_TIRE_TO_BASKET": {
            const tire=action.payload // am pus aici pt a lucra mai usor mai jos
            return {
                ...state,
                tires:{
                    ...state.tires,
                    items:state.tires.items.map(x=>{
                        if(x.id!= tire.id){
                        return x;
                    } else 
                    {
                        return {
                            ...x,
                            stock:x.stock-1
                        }
                    }})

                },
                basket: {
                    items: [...state.basket.items, action.payload]
                    //  daca a este un array-> sintaxa [...a,n] este similara cu a.push(n)  doar ca se va returna un array nou la final , in schimb ce 
                    // a. push va modifca valoarile din a si astfel se va muta stateul (adica pot aparea cazuri in care componentele sa nu se rerandeze )
                }
            }
        }
    }
    return state
}
