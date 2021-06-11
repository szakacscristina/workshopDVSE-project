import * as React from "react"
import { Loader, Text } from "../index"

type Props<T> = {
    className?: string
    headers: string[] // array de stringuri 
    columns: Array<(a: T) => React.ReactElement>
    // array de functii care au ca parametru un element de tipul T, adica in cazul nostru Vehicle sau Tire. 
    // Aceste functii vir returna un ReactElement adica ceva de tipul JSX
    items: T[] //Array de itemuri dinamice 
    loading?: boolean
}

class Table<T> extends React.Component<Props<T>> {
    //Tabelul este definit ca fiind generic -> adica acesta va functiona indiferent de Tipul care este folosit


    render() {
        const { headers, className, items, columns, loading } = this.props

        if (loading) { //Randare conditionata de anumita proprietate  
            return (
                <div className={"table " + className ?? ""}>
                    <Loader /> 
                </div>
            )
        }

        return (
            <div className={"table " + className ?? ""}>
                <div className="table__header">
                    {headers.map((header, idx) => <Text key={idx} size="l" strong skin="primary">{header}</Text>)} 
                    {/* pentru fiecare header se va genera un fiser Text  */}
                </div>
                <div className="table__content">
                    {/* pentru fiecare item se ca randata un element div- table item , iar apoi pentru fiecare tire item se va apela fiecare functie care este trimisa 
                    si la care se paseaza itemul actual */}
                    {items.map((item, idx) =>
                        <div key={idx} className="table__item">
                            {columns.map((columnCallback, idx) =>
                                <div key={idx} className="table__cell">
                                    {columnCallback(item)}
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </div>
        )
    }
}

export default Table