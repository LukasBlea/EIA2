var DBClient;
(function (DBClient) {
    window.addEventListener("load", init);
    let serverAddress = "https://lukasblea-server.herokuapp.com/";
    function init(_event) {
        console.log("Init");
        let insertButton = document.getElementById("insert");
        let findButton = document.getElementById("find");
        let refreshButton = document.getElementById("refresh");
        insertButton.addEventListener("click", insert);
        findButton.addEventListener("click", filter);
        refreshButton.addEventListener("click", refresh);
    }
    function insert(_event) {
        let inputs = document.getElementsByTagName("input");
        let query = "command=insert";
        query += "&name=" + inputs[0].value;
        query += "&firstname=" + inputs[1].value;
        query += "&matrikel=" + inputs[2].value;
        console.log(query);
        sendRequest(query, handleInsertResponse);
    }
    function filter(_event) {
        let input = document.getElementById("daten");
        let query = "command=filter";
        query += "&suche" + input.value;
        console.log("Test Matrikelnummer search funktion");
        sendRequest(query, handleFindResponse);
    }
    function refresh(_event) {
        let query = "command=refresh";
        sendRequest(query, handleFindResponse);
    }
    function sendRequest(_query, _callback) {
        let xhr = new XMLHttpRequest();
        xhr.open("GET", serverAddress + "?" + _query, true);
        xhr.addEventListener("readystatechange", _callback);
        xhr.send();
    }
    function handleInsertResponse(_event) {
        let xhr = _event.target;
        if (xhr.readyState == XMLHttpRequest.DONE) {
            alert(xhr.response);
        }
    }
    function handleFindResponse(_event) {
        let xhr = _event.target;
        if (xhr.readyState == XMLHttpRequest.DONE) {
            let output = document.getElementsByTagName("textarea")[0];
            output.value = xhr.response;
        }
    }
})(DBClient || (DBClient = {}));
//# sourceMappingURL=DBClient.js.map