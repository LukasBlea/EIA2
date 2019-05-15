namespace L06_SendData {

    window.addEventListener("load", init);

    let address: string = "http://localhost:8100/";

    function init(_event: Event): void {
        document.getElementById("test").addEventListener("click", buttonEvent);
    }

    function buttonEvent(_event: Event): void {
        let inputs: HTMLCollectionOf<HTMLInputElement> = document.getElementsByTagName("input");
        let urlgenerieren: string = "?";
        for (let i: number = 0; i < inputs.length; i++) {
            if (inputs[i].value != "0" && inputs[i].value != "" && inputs[i].checked == true) {
                urlgenerieren = urlgenerieren + inputs[i].name + "=" + inputs[i].value + "&";
            }
        }
        sendRequestWithCustomData(urlgenerieren);
    }

    function sendRequestWithCustomData(_url: string): void {
        let xhr: XMLHttpRequest = new XMLHttpRequest();
        xhr.open("GET", address + _url, true);
        xhr.addEventListener("readystatechange", handleStateChange);
        xhr.send();
    }

    function handleStateChange(_event: ProgressEvent): void {
        let xhr: XMLHttpRequest = <XMLHttpRequest>_event.target;
        if (xhr.readyState == XMLHttpRequest.DONE) {
            document.getElementById("overview").innerHTML = xhr.response;
        }
    }
} 