// JavaScript Document
$(document).ready(function (e){
	//watchID se refier a actual
	
	var watchID=null;
	document.addEventListener("deviceready",Dispositvo_Listo,false);
	
	//Cuando esta listo el dispositivo
	function Dispositivo_Listo(){
		Comienza();
	}
	
	//Empieza la observacion de la aceleracion
	function Comieza(){
		
	//Actualiza la eceleracion cda 2 segundos
	//
	var opciones={frequency:200};
	
	WatchID=navigator.accelerometer.watchAcceleration(Correcto, Error, opciones);
	navigator.geolocation.getCurrentPosition(Localiza ,ErrorLocalizacion);
	}
	//Detiene la observacion de la aceleracion
	
	function Detente(){
		if(watchId){
			navigator .accelerometer.clearWatch (watchID);
			watchID=null;
		}
	}
	//Correcto:Toma una capa de la aceleracion
	function Corecto(acceleration){
		var element=document.getElementById('acelerometro');
		
		element.innerHTML='Aceleracion en X:'+acceleration..x+'<br/>'+
		'Aceleracion en Y:'+acceleration.y+'<br/>'+
		'Intervalo:'+acceleration.timestamp+'<br/>';
	}
	
	//Error:falla al obtener la celeracion
	function Error(){
		alert('Error!');
	}
	//Exito al localizar
	function Localiza(posicion){
		var element=document.getElementById('geolocalizacion');
		element.innerHTML='Latitud: '+posicion.coords.latitude+'<br/>'+
		'Longitud: '+posicion.coords.longitude+'<br/>'+
		'precision: '+posicion.coords.accuary +'<br/>'+
		'Intervalo: '+posicion.timestamp +'<br/>';
	}
	//Error en la geolocalizacion
	function ErrorLocalizcion(error){
		alert('codigo: '+error.code +'\n'+
		'mensaje: '+error.message+'\n');
	}
});//document ready
		
		
	