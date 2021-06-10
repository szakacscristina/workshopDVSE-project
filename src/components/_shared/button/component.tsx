import * as React from "react"
import { Sizes, Skin } from "../../../data/models"


type Props = {
    className?: string
    disabled?: boolean
    isActive?: boolean
    icon?: string
    size?: Sizes
    skin?: Skin
    onClick?(): void
}

class Button extends React.Component<Props> {
    render() {
        const { children, className, skin, size, disabled, isActive, onClick, icon } = this.props

        let customClassName = "button"

        if (skin)
            customClassName += " button__skin--" + skin
            // x+= 1 -> x= x + 1 

        if (size)
            customClassName += " button__size--" + size

        if (disabled)
            customClassName += " button--disabled"

        if (isActive)
            customClassName += " button--active"

        if (className)
            customClassName += " " + className

        return (
            <button className={customClassName} onClick={onClick}>
                {children}
            </button>
        )
    }
}

export default Button