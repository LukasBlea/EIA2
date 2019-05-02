import * as Http from "http"; //creating a HTTP object in the code, interpreter looks for each possible import in the http module and append it to the http object in the code

namespace L05_Server { 					//obvious
	console.log("Starting server"); 	//obvious
	let port: number = Number(process.env.PORT); //sets a port as a number (previously a string, converted to a number). If port from user matches the port variables number, they can "communicate" (I think thats how ports work?).
	if (!port) //if there is any other variable declared at this point besides "port", the if-case shall be executed.
		port = 8100; //the initial value will be overriten and assigned as "8100".

	let server: Http.Server = Http.createServer(); //variable "server" is declared here and is assigned the "Http.Server" characteristik by the import function in row 1. It is told to create a Http server
	server.addListener("request", handleRequest); //the server variable is listened to and shall execute function "handleRequest" If there are any incoming requests to the server.
	server.addListener("listening", handleListen); //the server variable is listened to and shall execute function "handleListen" If the assigned listenening variable is interacted with.
	server.listen(port); //"listening" is assigned to the variable "port".

	function handleListen(): void { 	//obvious
		console.log("Listening"); 		//obvious
	} 									//obvious

	function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): void { //variable "_request" is assigned the charakteristik "Http.IncomingMessage" and "_response" was assigned to "Http.ServerResponse".
		console.log("I hear voices!"); 	//obvious

		_response.setHeader("content-type", "text/html; charset=utf-8"); //If the server is activated and getting a request, the header gets following strings assigned: "content-type", "text/html; charset=utf-8".
		_response.setHeader("Access-Control-Allow-Origin", "*"); //same here, but adds: "Access-Control-Allow-Origin", "*".

		_response.write(_request.url); //the server is assigned to write the incoming URL to the body.

		_response.end(); //the server is told to stop doing anything until further action is taking place (Listeners).
	}
}