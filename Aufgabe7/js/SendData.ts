namespace L06_SendData {
    window.addEventListener("load", asynchronerButton);
    let address: string = "http://localhost:8100";

    function asynchronerButton(_event: Event): void {
        let asynchronButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("button");
        asynchronButton.addEventListener("click", asynchronerAblauf);
    }

    function asynchronerAblauf(_event: Event): void {
        let input: HTMLCollectionOf<HTMLInputElement> = document.getElementsByTagName("input");
        let vorwahl: string = "?";
        for (let i: number = 0; i < input.length; i++) {
            if (input[i].value != "" && input[i].value != "0") {
                vorwahl = vorwahl + input[i].name + " = " + input[i].value + "&";
            }
            switch (input[i].value) {
                case ("Selbstabholung") :
                if (input[i].checked == true) {
                    vorwahl = vorwahl + input[i].name + " = " + input[i].value + "&";
                }
                break;
                case ("DHL") :
                if (input[i].checked == true) {
                    vorwahl = vorwahl + input[i].name + " = " + input[i].value + "&";
                }
                break; 
            }
        }
        sendRequestWithCustomData(vorwahl);
    }

    function sendRequestWithCustomData(_vorwahl: string): void {
        let xhr: XMLHttpRequest = new XMLHttpRequest();
        xhr.open("GET", address + _vorwahl, true);
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