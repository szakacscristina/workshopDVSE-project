import * as React from 'react'
import { Text, Icon } from "../_shared"
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
    render() {
        return (
            <div >
                <Text>Basket</Text>
                {this.props.basketItems.map(
                    basketItem => <div>{basketItem.brand} , {basketItem.season} , {basketItem.size}</div>
                )}
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