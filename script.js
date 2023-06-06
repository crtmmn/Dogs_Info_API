let table_exists
table_exists = false

function WriteInfo(json) {
    div = document.getElementById("div")
    div.innerHTML = ""
    div.innerHTML += "Cześć jestem: " + json[0].name + "<br>"
    div.innerHTML += "Moja waga waha się pomiędzy: " + (json[0].min_weight_male*0.45) + " a " + (json[0].max_weight_male*0.45) + "<br>"
    div.innerHTML += "Żyje średnio od: " + json[0].min_life_expectancy + " do " + json[0].max_life_expectancy + "<br>"
    let img = json[0].image_link
    div.innerHTML += "<h3>" + "A to ja!" + "</h3>" + "<br>"
    div.innerHTML += "<img src=" + '"' + img + '"' + "</img>"
}

function MakeTable(json) {
    div2 = document.getElementById("div2")
    div2.innerHTML = ""
    table_exists = true
    let table = document.createElement("table")
    table.id = "table_id"
    let tr = document.createElement("tr")
    let th = document.createElement("th")

    th.innerHTML = "img"
    tr.appendChild(th)

    th = document.createElement("th")
    th.innerHTML = "name"
    tr.appendChild(th)

    th = document.createElement("th")
    th.innerHTML = "max.weight"
    tr.appendChild(th)

    table.appendChild(tr)
    div2.appendChild(table)

    for(i = 0; i < json.length; i++) {
        let tr = document.createElement("tr")
        let td = document.createElement("td")
        let img = json[i].image_link
        td.innerHTML = "<img src=" + '"' + img + '"' + "</img>"
        tr.appendChild(td)

        td = document.createElement("td")
        td.innerHTML = json[i].name
        tr.appendChild(td)

        td = document.createElement("td")
        td.innerHTML = json[i].max_weight_male
        tr.appendChild(td)

        table.appendChild(tr)
    }
}

function AddToTable(json) {
    table = document.getElementById("table_id")
    for(i = 0; i < json.length; i++) {
        let tr = document.createElement("tr")
        let td = document.createElement("td")
        let img = json[i].image_link
        td.innerHTML = "<img src=" + '"' + img + '"' + "</img>"
        tr.appendChild(td)

        td = document.createElement("td")
        td.innerHTML = json[i].name
        tr.appendChild(td)

        td = document.createElement("td")
        td.innerHTML = json[i].max_weight_male
        tr.appendChild(td)

        table.appendChild(tr)
    }
}

async function request(){
    dogName = document.getElementById("input_name").value
    console.log(dogName)
    const res = await fetch(  
                            'https://api.api-ninjas.com/v1/dogs?name=' + dogName
                            ,
                            {headers: {'X-Api-Key': 'KF6BWif0AaNVT7NcTRw4NR2AvqCuoBLTj4qaEiKr'}}
                        )
    

    let json = await res.json()
    console.log(json)
    WriteInfo(json)
    console.log(table_exists)
    if(table_exists == false) {
        MakeTable(json)
    }
    else {
        AddToTable(json)
    }
    
}