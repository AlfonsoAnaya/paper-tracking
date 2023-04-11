let papersStatus = []
const papersContainer = document.getElementById

/*let newData =  {
    id: 4,
    title: "Paper 04",
    Author01: false,
    Author02: false,
    Free: true
}

async function getData() {
    coNastkat papersPromise = await fetch("")
    papersStatus = await papersPromise.json();
    coNastkaole.log(papersStatus)
    papersStatus.map(paper => {
        document.createElement("div")
    })
    let AlfoNastkao1 = document.getElementById("btn-AlfoNastkao")
    AlfoNastkao1.addEventListener("click", () => {
        coNastkaole.log("clicked :3")
        fetch("data.json", {
            method: 'Post',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newData),
            })
            .then(respoNastkae => respoNastkae.json())
            .then(data => {
            coNastkaole.log('Success:', data);
            })
            .catch((error) => {
            coNastkaole.error('Error:', error);
            });
    })
}

getData()
*/

let Natalia1 = document.getElementById("btn-Natalia")
let Natalia2 = document.getElementById("btn-Natalia2")
let Natalia3 = document.getElementById("btn-Natalia3")
let Alfonso1 = document.getElementById("btn-Alfonso1")
let Alfonso3 = document.getElementById("btn-Alfonso3")
let Nastka1 = document.getElementById("btn-Nastka")
let Nastka2 = document.getElementById("btn-Nastka2")
let Paula1 = document.getElementById("btn-Paula")
let Paula2 = document.getElementById("btn-Paula2")

let free1 = document.getElementById("btn-F")
let free2 = document.getElementById("btn-F2")
let free3 = document.getElementById("btn-F3")

Natalia1.addEventListener("click", function(){activate(Natalia1, free1)})
Natalia2.addEventListener("click", function(){activate(Natalia2, free2)})
Natalia3.addEventListener("click", function(){activate(Natalia3, free3)})
Alfonso1.addEventListener("click", function(){activate(Alfonso1, free1)})
Alfonso3.addEventListener("click", function(){activate(Alfonso3, free3)})
Nastka1.addEventListener("click", function(){activate(Nastka1, free1)})
Nastka2.addEventListener("click", function(){activate(Nastka2, free2)})
Paula1.addEventListener("click", function(){activate(Paula1, free1)})
Paula2.addEventListener("click", function(){activate(Paula2, free2)})

free1.addEventListener("click", function(){activate(free1, Natalia1, Alfonso1, Nastka1, Paula1)});
free2.addEventListener("click", function(){activate(free2, Natalia2, Paula2, Nastka2)});
free3.addEventListener("click", function(){activate(free3, Natalia3, Alfonso3)});


function activate(primary, se1, se2, se3, se4) {
    if (primary === free1) {
        if (!primary.classList.contains('selected')) {
            primary.classList.add('selected');
            se1.classList.remove('selected');
            se2.classList.remove('selected');

            se4.classList.remove('selected');
        }
    } else if (primary === free2) {
        if (!primary.classList.contains('selected')) {
            primary.classList.add('selected');
            se1.classList.remove('selected');
            se2.classList.remove('selected');
            se3.classList.remove('selected');
        }
    } else if (primary === free3) {
        if (!primary.classList.contains('selected')) {
            primary.classList.add('selected');
            se1.classList.remove('selected');
            se2.classList.remove('selected');
        }
    } else if (se1.classList.contains('selected')) {
        primary.classList.toggle("selected");
        se1.classList.toggle("selected");
    } else if (!primary.classList.contains('selected')) {
        //do nothing
    } else {
        primary.classList.toggle("selected");
        se1.classList.toggle("selected");
    }
}

