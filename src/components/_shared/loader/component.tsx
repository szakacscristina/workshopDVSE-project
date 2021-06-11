import * as React from "react"


type Props = {
    className?: string
}


class Loader extends React.Component<Props> {
    render() {
        return (
            <div className={"loader " + this.props.className ?? ""} />
        )
    }
}
/*
    x = a ?? b este  tradus ca 
    x=a
    if(a!=undefined && a!= null)
    x= b
*/

export default Loader