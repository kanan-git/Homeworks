let users = [
    {
        id: 1,
        name: 'John',
        surname: 'Doe',
        country: 'U.S.A'
    },
    {
        id: 2,
        name: 'Carl',
        surname: 'Johnson',
        country: "Uruguay"
    },
    {
        id: 3,
        name: 'Leo',
        surname: 'Gray',
        country: 'Spain'
    },
    {
        id: 4,
        name: 'Carlos',
        surname: 'Simon',
        country: "Britain"
    },
    {
        id: 5,
        name: 'Edgar',
        surname: 'Winson',
        country: 'Canada'
    }
]

unnamed = () => {
    const body = document.body
    const table = document.createElement("table")
    const headers = document.createElement("th")

    table.classList.add("table-design")
    headers.classList.add("table-design")

    body.appendChild(table)
    table.appendChild(rowsOfTheTable)

    const rowsOfTheTable = document.createElement("tr")
    rowsOfTheTable.classList.add("table-design")
    rowsOfTheTable.appendChild(headers)

    users.forEach(
        (element, index) => {
            console.log(element.id, element.country, element.name, element.surname, index)
            const bodies = document.createElement("tb")
            bodies.classList.add("table-design")
            bodies.classList.add("panels")
            rowsOfTheTable.appendChild(bodies)
            
            var text = element.id
            bodies.textContent = text
        }
    )
}

unnamed(table, headers, bodies)