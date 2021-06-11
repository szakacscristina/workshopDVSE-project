import { Vehicle, Tire } from "../../models"
import axios from "axios"

export function getTiresById(id: number) {
    return new Promise<Tire[]>((resolve, reject) => {

        const host = "https://tyrestore-api.dvsero.tk/"
        const method = "api/VehiclesAndTyresMain/GetTyreByVehicleModelId/" + id

        axios.get(host + method).then(
            response => {
                if (response.data) {
                    resolve(mapResponseToTires(response.data))
                }

                else
                    reject()
            }
        )


    })
}

function mapResponseToTires(data: any): Tire[] {
    return data.map(x => ({
        brand: x.brand,
        season: x.season,
        id: x.id,
        size: x.tyre.name,

        price: x.price,
    }))
}
