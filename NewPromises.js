const API_URL = "https://api.github.com/users/khushboo0511"

async function handlePromises() {
    const data = await fetch(API_URL)
    const jsonValue = await data.json()
    console.log(jsonValue)
}

handlePromises()

