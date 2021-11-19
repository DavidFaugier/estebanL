/// <reference types="Cypress"/>
//Suite de primeros CP
describe('Detonación de eventos Clientes orbis', function()
{

    beforeEach(() => { 
        
        //Cargar parametros de parametros.json 
        cy.fixture('parametros').then(function(param){
            this.param = param
            //Ingresar a página
            cy.login
            (this.param.ambiente.url_amb, this.param.credenciales.credenciales_orbis.user, this.param.credenciales.credenciales_orbis.password)
         })
         //Cargar Inputs de inputs.json
        cy.fixture('inputs').then(function(inputs){
            this.inputs = inputs
        })
    })
    //CP asignacion de viajes desde tendering
    it('detonación  tendering', function(){
        cy.eventoTendering
        (this.param.modulos.tendering.asignacion,this.param.Detalles_de_asignacion.numero_viaje.viaje1,this.param.Detalles_de_asignacion.linea_conductor.linea1,this.param.Detalles_de_asignacion.placas.placa1,this.param.Detalles_de_asignacion.conductor.conductor1)
    }) 
    //Fin CP
})
