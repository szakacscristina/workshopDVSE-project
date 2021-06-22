import * as React from 'react'
import { Text, Icon, Table } from "../_shared"
import { Tire } from '../../data/models'
import { StoreType } from '../../business/model'
import { connect } from 'react-redux'


type Props = StoreProps & {

}

type StoreProps = {
    // basketItems: Tire[]
    basketItems: Array<Tire>

}



class Basket extends React.Component<Props> {
    renderBrand(tire:Tire){
        return (<Text>{tire.brand}</Text>)
    }

    renderSeason(tire:Tire){
        return (<Text>{tire.season}</Text>)
    }

    renderSize(tire:Tire){
        return (<Text>{tire.size}</Text>)
    }
    render() {
        return (
            <div className="basket" >
               { this.props.basketItems.length!=0 &&  // daca sunt elemente in basket se afiseaza tabelul 
                <Table
                    className="basket-table"
                    headers={["Brand", "Season", "Size"]}
                    items={this.props.basketItems}
                    columns={[this.renderBrand, this.renderSeason, this.renderSize]}
                />
               } {
                   this.props.basketItems.length==0 &&
                   <Text>NU AI SELECTAT NICIUN ITEM</Text>
               }
            </div>

        )
    }
}

function mapStateToProps(store: StoreType): StoreProps {
    return {
        basketItems: store.basket.items
    }
}


export default connect(mapStateToProps)(Basket)