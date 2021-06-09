import * as React from "react"
import { sizes, skin } from "../../../data/models"

type Props = {
    className?: string
    disabled?:boolean
    isActive?:boolean
    icon?:string
    size?: sizes
    skin?: skin
    onClick?(): void
}

class Button extends React.Component<Props>{
    renter() {
        const {children, className, disabled, isActive, icon, size, skin, onClick} = this.props
        return (
            <button className="" onClick = {onClick}>
            {children},
            </button>
        )
    }

}