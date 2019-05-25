namespace DBClient {
    window.addEventListener("load", init);
    let serverAddress: string = "https://lukasblea-server.herokuapp.com/";

    function init(_event: Event): void {
        console.log("Init");
        let insertButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("insert");
        let findButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("find");
        let refreshButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("refresh");
        insertButton.addEventListener("click", insert);
        findButton.addEventListener("click", filter);
        refreshButton.addEventListener("click", refresh);
        
    }

    function insert(_event: Event): void {
        let inputs: HTMLCollectionOf<HTMLInputElement> = document.getElementsByTagName("input");
        let query: string = "command=insert";
        query += "&name=" + inputs[0].value;
        query += "&firstname=" + inputs[1].value;
        query += "&matrikel=" + inputs[2].value;
        console.log(query);
        sendRequest(query, handleInsertResponse);
    }

    function filter(_event: Event): void {
        let input: HTMLInputElement = <HTMLInputElement>document.getElementById("daten");
        let query: string = "command=filter";
        query += "&search" + input.value;
        console.log("Test Matrikelnummer search funktion");
        sendRequest(query, handleFindResponse);
    }

    function refresh(_event: Event): void {
        let query: string = "command=refresh";
        sendRequest(query, handleFindResponse);
    }

    function sendRequest(_query: string, _callback: EventListener): void {
        let xhr: XMLHttpRequest = new XMLHttpRequest();
        xhr.open("GET", serverAddress + "?" + _query, true);
        xhr.addEventListener("readystatechange", _callback);
        xhr.send();
    }

    function handleInsertResponse(_event: ProgressEvent): void {
        let xhr: XMLHttpRequest = (<XMLHttpRequest>_event.target);
        if (xhr.readyState == XMLHttpRequest.DONE) {
            alert(xhr.response);
        }
    }

    function handleFindResponse(_event: ProgressEvent): void { //Schickt die Sachen aus dem Inputfeld an den Server
        let xhr: XMLHttpRequest = (<XMLHttpRequest>_event.target);
        if (xhr.readyState == XMLHttpRequest.DONE) {
            let output: HTMLTextAreaElement = document.getElementsByTagName("textarea")[0];
            output.value = xhr.response;
        }
    }
}