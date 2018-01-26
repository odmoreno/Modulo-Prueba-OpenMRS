import React from 'react';
import Header from '../global/Header';
import {Link} from 'react-router';
import ReactTable from 'react-table';
import 'react-table/react-table.css';



export default class serviceList extends React.Component{  
    
    constructor(){
        super();
        this.state = {
            data : [{
                id: 'P001',
                nombre: 'Servicio 1',
                precio: '1.00',
                cantidad: '2',
                medida: 'cc'
            },
            {
                id: 'P002',
                nombre: 'Servicio 2',
                precio: '10.00',
                cantidad: '3',
                medida: 'cc'
            }]
        };
    }
    
    render(){
        const { data } = this.state.data;
        return(
            <div>
                <h1>Servicios V-3.3 UPDATE </h1>
                <div>
                    <ReactTable
                    data={[{
                        id: 'P001',
                        nombre: 'Servicio 1',
                        precio: '1.00',
                        cantidad: '2',
                        medida: 'cc'
                    },
                    {
                        id: 'P002',
                        nombre: 'Servicio 2',
                        precio: '10.00',
                        cantidad: '3',
                        medida: 'cc'
                    }]} 
                    columns={[
                          {
                            Header: 'Codigo',
                            accesor: 'id'
                        },{
                            Header: 'Nombre',
                            accesor: 'nombre'
                        },{
                            Header: 'Precio',
                            accesor: 'precio'
                        },{
                            Header: 'Cantidad',
                            accesor: 'cantidad',
                        },{
                            Header: 'Medida',
                            accesor: 'medida'
                        }]} 
                      sortable='true'
                    />
                </div>
            </div>
        );       
    }
}