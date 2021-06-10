import * as React from 'react'
import { Text, Icon } from "../_shared"


type Props = {

}


class Header extends React.Component<Props> {
    render() {
        return (
            <div className='header'>
                <div id="logo" />
                <Text strong size="l"> Tires store - powered by Topmotive</Text>
                <Icon name="basket" size="l"></Icon>
            </div>
        )
    }
}

export default Header



