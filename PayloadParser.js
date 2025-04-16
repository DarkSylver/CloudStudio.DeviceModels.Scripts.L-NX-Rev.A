function parseUplink(device, payload)
{
    // Obtener payload como JSON
    
    var data = payload.asJsonObject();
    env.log(data);

/*
    //const jsonPayload = payload.asParsedObject();
    //const jsonPayload = payload.asString();
    //const jsonPayload = payload.asBytes();

    // No se puede deserializar el payload como json, salir.
    if (!data) { return; }
    
    if(data.statusLE != null){
        

        if(statusLE != null && data.statusLE.value !=null)
            if(data.statusLE.value == 0 || data.statusLE.value == 1)
                statusLE.updateGenericSensorStatus(data.statusLE.value);
    }
    
    if(data.statusUPS != null){
        

        if(statusUPS != null && data.statusUPS.value !=null)
            if(data.statusUPS.value == 0 || data.statusUPS.value == 1)
                statusUPS.updateGenericSensorStatus(data.statusUPS.value);
    }
    
    if(data.statusSem != null){
        

        if(statusSem != null && data.statusSem.value !=null)
            if(data.statusSem.value == 0 || data.statusSem.value == 1)
                statusSem.updateGenericSensorStatus(data.statusSem.value);
    }
        
    if(data.statusSis != null){
        

        if(statusSis != null && data.statusSis.value !=null)
            if(data.statusSis.value == 0 || data.statusSis.value == 1)
                statusSis.updateGenericSensorStatus(data.statusSis.value);
    }*/     
}

function buildDownlink(device, endpoint, command, payload) 
{ 
	// This function allows you to convert a command from the platform 
	// into a payload to be sent to the device.
	// Learn more at https://wiki.cloud.studio/page/200

	// The parameters in this function are:
	// - device: object representing the device to which the command will
	//   be sent. 
	// - endpoint: endpoint object representing the endpoint to which the 
	//   command will be sent. May be null if the command is to be sent to 
	//   the device, and not to an individual endpoint within the device.
	// - command: object containing the command that needs to be sent. More
	//   information at https://wiki.cloud.studio/page/1195.

	// This example is written assuming a device that contains a single endpoint, 
	// of type appliance, that can be turned on, off, and toggled. 
	// It is assumed that a single byte must be sent in the payload, 
	// which indicates the type of operation.

/*
	 payload.port = 25; 	 	 // This device receives commands on LoRaWAN port 25 
	 payload.buildResult = downlinkBuildResult.ok; 

	 switch (command.type) { 
	 	 case commandType.onOff: 
	 	 	 switch (command.onOff.type) { 
	 	 	 	 case onOffCommandType.turnOn: 
	 	 	 	 	 payload.setAsBytes([30]); 	 	 // Command ID 30 is "turn on" 
	 	 	 	 	 break; 
	 	 	 	 case onOffCommandType.turnOff: 
	 	 	 	 	 payload.setAsBytes([31]); 	 	 // Command ID 31 is "turn off" 
	 	 	 	 	 break; 
	 	 	 	 case onOffCommandType.toggle: 
	 	 	 	 	 payload.setAsBytes([32]); 	 	 // Command ID 32 is "toggle" 
	 	 	 	 	 break; 
	 	 	 	 default: 
	 	 	 	 	 payload.buildResult = downlinkBuildResult.unsupported; 
	 	 	 	 	 break; 
	 	 	 } 
	 	 	 break; 
	 	 default: 
	 	 	 payload.buildResult = downlinkBuildResult.unsupported; 
	 	 	 break; 
	 }
*/

}