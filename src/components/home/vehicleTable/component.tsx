import * as React from "react"
import { Vehicle } from "../../../data/models"
import { Table, Text, Button } from "../../_shared"




type Props = {
    loading?: boolean
    vehicles: Vehicle[]
    selectedVehicle?: Vehicle
    onSelectVehicle: (vehicle: Vehicle) => void
}

class VehicleTable extends React.Component<Props> {

    renderManufacturer(vehicle: Vehicle) {
        return <Text>
            {vehicle.manufacturerName}
        </Text>
    }

    renderLogo(vehicle: Vehicle) {
        return <img src={vehicle.manufacturerLogo} style={{ width: '3em', height: '2em' }} />
    }


    renderName(vehicle: Vehicle) {
        return <Text>{vehicle.name}</Text>
    }

    renderActions(vehicle: Vehicle) {
        const { selectedVehicle } = this.props
        const isActive = selectedVehicle?.id == vehicle.id
        return (<Button
            icon="arrow-right"
            skin={isActive ? "highlight" : undefined}
            onClick={() => this.props.onSelectVehicle(vehicle)} >Select</Button>
        )
    }

    render() {
        const { vehicles, loading } = this.props

        return (
            <Table
                className="vehicles-table"
                headers={["Logo", "Manufacturer", "Model", "Actions"]}
                loading={loading}
                items={vehicles}
                columns={[this.renderLogo, this.renderManufacturer, this.renderName, this.renderActions.bind(this)]}

            />
        )
    }
}

export default VehicleTable