function mangaSearch() {
    const inputElement = document.getElementById("inputBox");
    var inputBox = inputElement.value.trim();
    const aot = "https://mangareader.to/read/attack-on-titan-37/en/chapter-";
    const tgr = "https://mangareader.to/read/tokyo-ghoulre-362/en/chapter-";
    const jjk = "https://mangareader.to/read/jujutsu-kaisen-168/en/chapter-";
    const csm = "https://mangareader.to/read/chainsaw-man-96/en/chapter-";
    
    splitInput = inputBox.split(" ");

    if (splitInput[0] == "tgr") {
        window.location.href = tgr + splitInput[1];
    }

    else if (splitInput[0] == "jjk") {
        window.location.href = jjk + splitInput[1];
    }

    else if (splitInput[0] == "csm") {
        window.location.href = csm + splitInput[1];
    }

    else if (splitInput[0] == "aot") {
        window.location.href = aot + splitInput[1];
    }

    else {
        inputElement.focus();
        inputElement.select();
    }
}