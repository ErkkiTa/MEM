fetch('http://andmebaas.stat.ee/sdmx-json/data/PA633/DBL113+DBL114+DBL245+DBL246+DBL248+DBL251+DBL252+DBL258+DBL272+DBL273+DBL285+DBL297+DBL386+DBL401+DBL410.1+2+3.1+2+3/all?startTime=2010&endTime=2014&dimensionAtObservation=allDimensions')
.then(response => {
    return response.json()
}).then(data => {
    console.log(data)
    const options = document.getElementById("options")

    data.structure.dimensions.observation[0].values.forEach(test_value => {
        console.log(test_value)
        let testDiv = document.createElement("div")
        testDiv.innerHTML = '<div>' + test_value.name + '</div>'
        testDiv.classList.add("test")
        option1.append(testDiv)
    
    });

    data.structure.dimensions.observation[1].values.forEach(test_value => {
        console.log(test_value)
        let testDiv = document.createElement("div")
        testDiv.innerHTML = '<div>' + test_value.name + '</div>'
        testDiv.classList.add("test")
        option1.append(testDiv)
    
    });

    data.structure.dimensions.observation[2].values.forEach(test_value => {
        console.log(test_value)
        let testDiv = document.createElement("div")
        testDiv.innerHTML = '<div>' + test_value.name + '</div>'
        testDiv.classList.add("test")
        option1.append(testDiv)
    
    });



})

