/* * This Source Code Form is subject to the terms of the Mozilla Public License,
 * v. 2.0. If a copy of the MPL was not distributed with this file, You can
 * obtain one at http://mozilla.org/MPL/2.0/. OpenMRS is also distributed under
 * the terms of the Healthcare Disclaimer located at http://openmrs.org/license.
 *
 * Copyright (C) OpenMRS Inc. OpenMRS is a registered trademark and the OpenMRS
 * graphic logo is a trademark of OpenMRS Inc.
 */
import React from 'react'
import {Route} from 'react-router'
import App from './components/App'
import Home from './components/global/Home';
import serviceList from './components/servicios/serviceList';
import HomeMedico from './components/ordenes/HomeMedico';
import ingresoOrdenes from './components/ordenes/ingresoOrdenes';
import editarOrdenes from './components/ordenes/editarOrdenes';


export default (store) => {
  // combine store and onEnter if you need to fire an action when going to a route. Example:
  //   onEnter={ (nextState) => {store.dispatch(loadPatientAction(nextState.params.patientUuid)} }

  return (
    <Route>
      <Route path="/" component={Home}/>
      <Route path="/notfound" component={App}/>
      <Route path="/ordenes/nueva-orden" component={ingresoOrdenes}/>
	    <Route path="/ordenes" component={HomeMedico}/>
      <Route path="/ordenes/edit" component={editarOrdenes}/>
      <Route path="/servicios" component={serviceList}/>
    </Route>
  );
}
