import { Vehicle } from "../../models"
import axios from "axios"

export function getAllVehicles() {
    return new Promise<Vehicle[]>((resolve, reject) => {

        const host = "https://localhost:44302/"
        const method = "api/VehiclesAndTyresMain/GetVehicleModelsWithManufacturers"

        axios.get(host + method).then(
            response => {
                if (response.data) {
                    resolve(mapResponseToVehicle(response.data))
                }

                else
                    reject()
            }
        )


    })
}

function mapResponseToVehicle(data: any): Vehicle[] {
    return data.slice(0, 500) .map((x:any)=> ({
        id: x.id,
        name: x.name,
        manufacturerName: x.manufacturer.name,
        manufacturerLogo: x.manufacturer.logo
    }))
}
