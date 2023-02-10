let papersStatus = []
const papersContainer = document.getElementById

let newData =  {
    id: 4,
    title: "Paper 04",
    Author01: false,
    Author02: false,
    Free: true
}

async function getData() {
    const papersPromise = await fetch("")
    papersStatus = await papersPromise.json();
    console.log(papersStatus)
    papersStatus.map(paper => {
        document.createElement("div")
    })
    let aa1 = document.getElementById("btn-AA")
    aa1.addEventListener("click", () => {
        console.log("clicked :3")
        fetch("data.json", {
            method: 'Post',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newData),
            })
            .then(response => response.json())
            .then(data => {
            console.log('Success:', data);
            })
            .catch((error) => {
            console.error('Error:', error);
            });
    })
}

getData()








let amw1 = document.getElementById("btn-AMW")
let amw2 = document.getElementById("btn-AMW2")
let amw3 = document.getElementById("btn-AMW3")
/*let aa1 = document.getElementById("btn-AA")*/
let aa2 = document.getElementById("btn-AA3")
let ns1 = document.getElementById("btn-NS")
let ns2 = document.getElementById("btn-NS2")
let pz1 = document.getElementById("btn-PZ")
let pz2 = document.getElementById("btn-PZ2")

let free1 = document.getElementById("btn-F")
let free2 = document.getElementById("btn-F2")
let free3 = document.getElementById("btn-F3")

amw1.addEventListener("click", function(){activate(amw1, free1)})
amw2.addEventListener("click", function(){activate(amw2, free2)})
amw3.addEventListener("click", function(){activate(amw3, free3)})

aa2.addEventListener("click", function(){activate(aa2, free3)})
ns1.addEventListener("click", function(){activate(ns1, free1)})
ns2.addEventListener("click", function(){activate(ns2, free2)})
pz1.addEventListener("click", function(){activate(pz1, free1)})
pz2.addEventListener("click", function(){activate(pz2, free2)})

function activate(btn, def) {
    btn.classList.toggle("selected")
    if (def.classList.contains("selected")) {
        def.classList.remove("selected")
    } else {
        def.classList.add("selected")
    }     
}

