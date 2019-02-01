// @ts-check
class planet {
    constructor(navn, baneradius, periode,
      diameter, banefart, masse) {
      this.navn = navn;
      this.baneradius = baneradius;
      this.periode = periode;
      this.diameter = diameter;
      this.banefart = banefart;
     this.masse = masse;
    }
  }
  

const planetListe = [
    new planet("Merkur", 57.91, 0.24, 4879, 47.8, 0.33),
    new planet("Venus", 108.2, 0.615, 12104, 35.0 , 4.87),
    new planet("Tellus", 149.6, 1.00, 12742, 29.8 , 5.97),
    new planet("Mars", 227.9, 1.88, 6779, 24.1 , 0.642),
    new planet("Jupiter", 778.5, 11.86, 139822, 13.0 , 1898),
    new planet("Saturn", 434, 29.44, 116464, 9.67 , 568),
    new planet("Uranus", 2871, 84.0, 50724,  6.84 , 86.8),
    new planet("Neptun", 4495, 164.8, 49244, 5.48 , 102 ),
    new planet("Pluto", 5906, 247, 2370, 4.75 ,0.0146),
    new planet("Ceres", 413, 4.599, 546, 17.9,  0.000094),
];

function setup() {
    let btnTegn = document.getElementById("tegn");
    let selL1 = document.getElementById("planet1");
    let selL2 = document.getElementById("planet2");
    let selL3 = document.getElementById("planet3");
    let selL4 = document.getElementById("planet4");
    let selL5 = document.getElementById("planet5");
    let selL6 = document.getElementById("planet6");
    let selL7 = document.getElementById("planet7");
    let selL8 = document.getElementById("planet8");
    let selL9 = document.getElementById("planet9");
    let selL10 = document.getElementById("planet10");
    let divMain = document.getElementById("main");
    let divGrafikk = document.getElementById("grafikk");
    let divOversikt = document.getElementById("oversikt");
    let btnLagre = document.getElementById("lagre");
    let inpNavn = document.getElementById("navn");
    let inpdiameter = document.getElementById("diameter");
    // ... flere linjer
    btnLagre.addEventListener("click", lagreData);
    btnTegn.addEventListener("click", visGrafisk);
    visListe();

    function lagreData() {
        let navn = inpNavn.value;
        let diameter = inpdiameter.value;
        //  .. flere linjer
        let planet = new planet(navn, diameter);
        planetListe.push(planet);
        visListe();
    }

    function visGrafisk() {
        let l1 = selL1.value;
        let l2 = selL2.value;
        let l3 = selL3.value;
        let l4 = selL4.value;
        let l5 = selL5.value;
        let l6 = selL6.value;
        let l7 = selL7.value;
        let l8 = selL8.value;
        let l9 = selL9.value;
        let l10 = selL10.value;
        if (l1 === l2 && l3 === l4 && l2 === l3) {
            alert("Velg minst to planeter");
            return;
        }
        let liste = new Set([l1, l2, l3, l4, l5, l6, l7, l8, l9, l10]);
        divGrafikk.innerHTML = "";

        let max = 0;
        liste.forEach(e => {
            let planet = merkur(e);
            if (planet.diameter > max) max = planet.diameter;
        })
        let sortertListe = Array.from(liste).map(e => merkur(e)).sort((a,b) => b.diameter - a.diameter);
        console.log(sortertListe);
        sortertListe.forEach(e => {
            lagRunning(e,max);
        })

    }

    /**
     * Lager en running som tilsvarer bef. i et valgt land
     * @param {planet} planet   Navn på et land som skal finnes i landListe
     * @param {number} max  maksimum bef for valgte land
     */
    function lagRunning(planet,max) {
        let radius = Math.sqrt(200*200*(+planet.diameter/max));
        let sirkel = document.createElement("div");
        sirkel.className = "sirkel";
        sirkel.innerHTML = `navn: ${planet.navn}<br>masse: ${planet.masse}<br>baneradius: ${planet.baneradius}`;
        divGrafikk.appendChild(sirkel);
        sirkel.style.width = sirkel.style.height = radius + "px";

    }

     /**
      * Gitt navnet på et land - finner data om landet
      * @param {string} navn navn på land du søker
      * @returns {Land} gir tilbake en instans av klassen Land
      */
    function merkur(navn) {
        for (let i = 0; i < planetListe.length; i++) {
            let planet = planetListe[i];
            if (navn === planet.navn) {
                return planet;
            }
        }
    }

    function visListe() {
        let s = "";
        for (let l of planetListe) {
            s += `<option>${l.navn}</option>`;
        }
        selL1.innerHTML = selL2.innerHTML = selL3.innerHTML = selL4.innerHTML = selL5.innerHTML = 
        selL6.innerHTML = selL7.innerHTML = selL8.innerHTML = selL9.innerHTML = selL10.innerHTML = s;
    }
}
