import * as React from "react"
import { Sizes, Skin } from "../../../data/models"
// import "./index.scss"


type Props = {
    className?: string
    size?: Sizes
    skin?: Skin
    strong?: boolean
}

class Text extends React.Component<Props> {
    render() {
        const { children, className, size, skin, strong } = this.props

        let cName = "text"
        if (skin)
            cName += " text__skin--" + skin

        if (size)
            cName += " text__size--" + size

        if (className)
            cName += " " + className

        if (strong)
            cName += " text--strong"

        return (
            <div className={cName}>
                {children}
            </div>
        )
    }
}

export default Text