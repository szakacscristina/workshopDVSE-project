import * as React from "react"
import { Tire } from "../../../data/models"
import { Table, Text, Button } from "../../_shared"




type Props = {
    loading?: boolean
    tires: Tire[]
    onAddtoBasket(item: Tire): void
}

class TiresTable extends React.Component<Props> {


    renderBrand(tire: Tire) {
        return <Text>{tire.brand}</Text>
    }

    renderPrice(tire: Tire) {
        return <Text strong skin="primary">{tire.price}</Text>
    }

    renderSize(tire: Tire) {
        return <Text>{tire.size}</Text>
    }


    renderSeason(tire: Tire) {
        return <Text>{tire.season}</Text>
    }

    renderActions(tire: Tire) {
        return (
            <Button
                icon="add"
                onClick={() => this.props.onAddtoBasket(tire)}
            >Add</Button>
        )
    }




    render() {
        const { tires, loading } = this.props

        return (
            <Table
                className="tires-table"
                headers={["Size", "Brand", "Season", "Price", "Actions"]}
                loading={loading}
                items={tires}
                columns={[this.renderSize, this.renderBrand, this.renderSeason, this.renderPrice, this.renderActions.bind(this)]}
            />
        )
    }
}

export default TiresTable