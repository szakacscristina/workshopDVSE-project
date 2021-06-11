import * as React from 'react'
import { Text, Icon } from "../_shared"
import { withRouter, RouteComponentProps } from 'react-router'
import { StoreType } from '../../business/model'
import { connect } from 'react-redux'


type Props = RouteComponentProps & StoreProps & {

}

type StoreProps = {
    basketCount: number
}


class Header extends React.Component<Props> {
    render() {
        const { history } = this.props
        return (
            <div className='header'>
                <div id="logo" onClick={() => history.push("/")} />
                <Text strong size="l"> Tires store - powered by Topmotive</Text>
                <Icon onClick={() => history.push("/basket")} badge={this.props.basketCount} name="basket" size="l"></Icon>
            </div>
        )
    }
}


function mapStateToProps(store: StoreType): StoreProps {
    return {
        basketCount: store.basket.items.length
    }
}


export default connect(mapStateToProps)(withRouter(Header))