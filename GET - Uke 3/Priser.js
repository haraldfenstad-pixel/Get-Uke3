function visPris(vare) {
    const pris = finnPris(vare);

    if (pris !== undefined) {
        alert(`${vare.trim()}: ${pris} kr`);
    } else {
        alert(`Fant ingen pris for ${vare.trim()}.`);
    }
}

function finnPris(vare) {
    switch (vare.trim().toLowerCase()) {
        case "genser":
            return 299;
        case "t-skjorte":
            return 199;
        case "bukse":
            return 499;
    }
}

document.getElementById("price-calculator").addEventListener("submit", function (event) {
    event.preventDefault();

    const varer = ["genser", "t-skjorte", "bukse"];
    let total = 0;

    for (const vare of varer) {
        const antall = document.getElementById(`${vare}-quantity`).valueAsNumber;
        if (!Number.isSafeInteger(antall) || antall < 0) {
            document.getElementById("total-price").textContent = "Oppgi et gyldig antall for hver vare.";
            return;
        }
        total += antall * finnPris(vare);
    }

    if (!Number.isSafeInteger(total)) {
        document.getElementById("total-price").textContent = "Totalprisen er for stor til å beregnes.";
        return;
    }

    document.getElementById("total-price").textContent = `Totalpris: ${total} kr`;
});
