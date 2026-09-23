export  const getData = async() => {

    const res = await fetch ('https://api.abcz.workers.dev/api/fitlog')

    if (!res.ok){
        throw new Error ("fetching Problem")
    }

    const data = await res.json()

    return data






}