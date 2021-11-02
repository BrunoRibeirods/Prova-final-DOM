export function translateFakeApi(string) {
    let word_found = string
    words.find(word =>{
        if(word.en == string){
            word_found = word.pt
        }
    })

    return word_found
}

const words = [
    { en: "PARTY_HALL", pt: 'Salão de festas' },
    { en: "FURNISHED", pt: 'MOBILIADO' },
    { en: "FIREPLACE", pt: 'LAREIRA' },
    { en: "POOL", pt: 'PISCINA' },
    { en: "BARBECUE_GRILL", pt: 'Churrasqueira' },
    { en: "AIR_CONDITIONING", pt: 'AR CONDICIONADO' },
    { en: "ELEVATOR", pt: 'Elevador' },
    { en: "BICYCLES_PLACE", pt: 'LOCAL PARA BICICLETAS' },
    { en: "GATED_COMMUNITY", pt: 'CONDOMÍNIO FECHADO' },
    { en: "PLAYGROUND", pt: 'PARQUE INFANTIL' },
    { en: "SPORTS_COURT", pt: 'QUADRA DE ESPORTES' },
    { en: "PETS_ALLOWED", pt: 'Aceita animais' },
    { en: "AMERICAN_KITCHEN", pt: 'COZINHA AMERICANA' },
    { en: "TENNIS_COURT", pt: 'QUADRA DE TÊNIS' },
    { en: "LAUNDRY", pt: 'Lavanderia' },
    { en: "GYM", pt: 'Academia' },
    { en: "ELECTRONIC_GATE", pt: 'Portão Eletrônico' },
    { en: "Garden", pt: 'Jardim' },
]