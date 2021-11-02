export async function getLocalDetail(city){
    let resultResidence =  await getApi(city)
    return resultResidence
}

async function getApi(city){

        const URL = `https://private-9e061d-piweb.apiary-mock.com/venda?state=rj&city=${ApitreatStringToSearch(city)}`
        let fetchApi = fetch(URL).then(data =>{
            if(data.status == 500){
                return getApiSP(city)
            }else{
                return data.json()
            }
        })


        return fetchApi
}

function getApiSP(city){
    const URL = `https://private-9e061d-piweb.apiary-mock.com/venda?state=sp&city=${ApitreatStringToSearch(city)}`
    let fetchApi = fetch(URL).then(data =>{
        if(data.status == 500){
            return data
        }else{
            return data.json()
        } 
    })

    return fetchApi
}


function ApitreatStringToSearch(string){
    let changeSpaces = string.split(' ').join('-').toLowerCase().normalize("NFD")
    let result = changeSpaces.replace(/[^a-zA-Z-]+/g, '')
    return result
}

