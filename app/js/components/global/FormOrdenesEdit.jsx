import React from 'react';
import {Link} from 'react-router';
import request from 'superagent';
import DatePicker from 'react-datepicker';
import moment from 'moment';

import 'react-datepicker/dist/react-datepicker.css';

export default class FormOrdenesEdit extends React.Component {
    
    constructor(props){
        super(props);
        this.state={
            date: moment(),
            area: "farmacia",
        };
        this.handleChange = this.handleChange.bind(this);
    }
  
    generarOrden(e){
        e.preventDefault();
        
    }

    handleChange(date){
        this.setState({date:date});
    }
    


    render() {
    var pacientes = [{uuid:'1721989364',name:'Veronica Moreira'},{uuid:'1304014382',name:'Juan Perez'}];
    var listaPaciente = pacientes.map(pacientes =>
        <option value="pacientes.uuid">{pacientes.name}</option>
    );
                                      
    var medicos = [{uuid:'1721989315',name:'Gonzalo Torres'},{uuid:'1721989356',name:'Maria Morevna'}];
    var listaMedicos = medicos.map(medicos =>
        <option value="medicos.uuid">{medicos.name}</option>
    );
        
    return (
      <div>
      	<h2>Estado: Nuevo</h2>
      	<form onSubmit={this.generarOrden.bind(this)} id="formOrden">
        	<fieldset>
        		<legend>Datos Generales:</legend>
	        	<label htmlFor="paciente">Paciente:</label>
                <select readOnly='1' name="paciente" id="paciente" defaultValue='1304014382'>{listaPaciente}</select>
                <br/>
                <label> Fecha: <DatePicker readOnly='1' selected={this.state.date} onChange={this.handleChange}/></label>
	        	<label htmlFor="medico"> M&eacute;dico: </label>
                <select readOnly='1' name="medico" id="medico" defaultValue='1721989315'>{listaMedicos}</select>
	        </fieldset>
	        <fieldset>
        		<legend>Detalles Orden:</legend>
	        	<label htmlFor="area"> Area de Servicio: </label>
                <select name="area" id="area">
                    <option value="farmacia">Farmacia</option>
                    <option value="icu">ICU</option>
                    <option value="cirugia">Cirug&iacute;a</option>
                    <option value="laboratorio">Laboratorio</option>
                    <option value="imagenes">Centro de Im&aacute;genes</option>
                    <option value="interconsulta">Interconsulta</option>
                    <option value="dietetica">Diet&eacute;tica</option>
                </select>
	        </fieldset>
            
            <Link to="/ordenes"><button className="btn" type="submit">Guardar</button></Link>
            <Link to="/ordenes"><button className="btn">Descartar</button></Link>
        </form>
      </div>
    )
  }
}