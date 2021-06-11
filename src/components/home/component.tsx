import * as React from 'react'
import { Text, Icon } from "../_shared"
import { getAllVehicles } from '../../data/repositories/getAllVehicles'
import { Repositories } from '../../data/repositories'
import { Vehicle, Tire } from '../../data/models'
import VehicleTable from './vehicleTable/component'
import { StoreType } from '../../business/model'
import { connect } from 'react-redux'
import { Dispatch, bindActionCreators } from 'redux'
import { IActions, Actions } from '../../business/actions'
import TiresTable from './tiresTable/component'


type Props = StoreProps & DispatchProps & {
    /*
    aceste tipuri ar putea foarte usor sa fie insirate in acest props in loc sa definim mai multe tipuri -> storeProps si dispatchProps
    dar daca le definim separat si le vom atribui functiei mapStateToProps respectiv mapDispatch to props atunci functia connect va injecta aceste props-uri si 
    va instinta compolatorul ca aceste propsuri sa nu mai fie cerute de la componenta parinte 
    

    aici vor fi declarate doar tipurile care vin de la componenta parinte direct.
    
    
    */

}

type StoreProps = {
    //tipuri pe care componenta le citeste din store 
    vehiclesItems: Vehicle[]
    selectedVehicle?: Vehicle
    tires: Tire[]
    tiresLoading: boolean
}

type DispatchProps = {
    actions: IActions
    /* aici folosim tipul definit deja in business/actions -> la fel de bine ne putem defini proprile actiuni care vor fi dispatch-uite catre reducer.
     vehiclesLoading: () => void
     vehiclesLoaded: (items: Vehicle[]) => void
     exemplu in caz ca vom vrea doar doua functii de exemplu din toate actiunile
     */

}

class Home extends React.Component<Props> {

    componentDidMount() {
        //Se va apela odata ce componenta va fi afisata pe ecran 
        this.props.actions.vehiclesLoading()
        Repositories.getAllVehicles().then(
            vehicles => this.props.actions.vehiclesLoaded(vehicles)
        )
    }

    handleVehicleSelect(vehicle: Vehicle) {
        const { actions } = this.props
        actions.selectVehicle(vehicle)
        Repositories.getTiresById(vehicle.id).then(tires => {
            actions.tiresLoaded(tires)
        })
    }

    /*
    exact aceasi functie ca cea de mai sus doar ca folosindu-se async- awiat in locul sintaxei clasice de rezolvarea a unui Promise, adica folosind "then"
    async handleVehicleSelect(vehicle: Vehicle) {
        const { actions } = this.props
        actions.selectVehicle(vehicle)
        const tires = await Repositories.getTiresById(vehicle.id)
        actions.tiresLoaded(tires)
    }
    */

    handleAddTireToBasket(tire: Tire) {
        this.props.actions.addTireToBasket(tire)
    }

    /*
    exact aceasi functie ca cea de deasupra doar ca declarata cu ajutorul arrow-function 
    

    handleAddTireToBasket = (tire: Tire) => {
        this.props.actions.addTireToBasket(tire)
    }
    PS:Daca functile sunt declarate cu ajutorul acestei sintaxe atunci "this"-ul se va bindui automat si nu va trebui sa il binduim mereu manual

    */
    render() {
        return (
            <div className="home">
                <VehicleTable
                    onSelectVehicle={this.handleVehicleSelect.bind(this)}
                    vehicles={this.props.vehiclesItems}
                    selectedVehicle={this.props.selectedVehicle}
                />

                {this.props.selectedVehicle &&
                    <TiresTable
                        tires={this.props.tires}
                        loading={this.props.tiresLoading}
                        onAddtoBasket={this.handleAddTireToBasket.bind(this)}
                    />}
            </div>

        )
    }
}


function mapStateToProps(store: StoreType): StoreProps {
    // cu ajutorul acestei functii se mapeaza datele din redux-store si la fiecare acutalizarea a acestora aceasta functie se va reapela
    // daca un field din aceastea va diferit atunci componenta se va reactualiza
    return {
        vehiclesItems: store.vehicles.items,
        selectedVehicle: store.selectedVehicle,
        tires: store.tires.items,
        tiresLoading: store.tires.loading
    }
}

function mapDispatchToProps(dispatch: Dispatch): DispatchProps {
    return {
        actions: {
            vehiclesLoading: () => dispatch(Actions.vehiclesLoading()),

            /*
            Aceste sintaxe fac exact acelasi lucru -> dar cu ajutorul acestei functii bindActionCreators putem scapa de cateva linii de cod
             vehiclesLoaded: (vehicle: Vehicle[]) => diapatch(Actions.vehiclesLoaded(vehicle))
            */
            vehiclesLoaded: bindActionCreators(Actions.vehiclesLoaded, dispatch),
            selectVehicle: bindActionCreators(Actions.selectVehicle, dispatch),
            tiresLoaded: bindActionCreators(Actions.tiresLoaded, dispatch),
            addTireToBasket: bindActionCreators(Actions.addTireToBasket, dispatch)

        }
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(Home)