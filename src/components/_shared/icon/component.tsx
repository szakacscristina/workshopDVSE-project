import * as React from "react"
import { Sizes, Skin } from "../../../data/models"
import Text from "../text/component"


type Props = {
    className?: string
    name: string
    size?: Sizes
    badge?: number
    // onClick?(): void
    onClick?: () => void
}

class Icon extends React.Component<Props> {
    render() {
        const { className, size, name, onClick, badge } = this.props

        let customClassName = "icon"

        if (size)
            customClassName += " icon__size--" + size


        if (className)
            customClassName += " " + className

        if (onClick)
            customClassName += " icon--clickable"

        return (
            <span className={customClassName} onClick={onClick}>
                <img src={"/images/icons/" + name + ".svg"} />

                {badge != undefined &&
                    <div className="badge">
                        <Text size="s">{badge}</Text>
                    </div>}

                {/* 
                In acest caz daca am fi conditionat randarea badgeului ca in alte componente adica .... {bagde && <div>....</div>} 
                    atunci existau probleme daca valoarea badge-ului era 0 
                    Javascript-ul ar interpreta valoarea 0 ca fiind falsa si atunci nu mai afisa divul 

                    .....in js 
                    if(0!=undefined) => true 
                    if(0) -> false 

                */}
            </span>
        )
    }
}

export default Icon