import {translateFakeApi} from './translateFakeApi.js'

export function createCardErrorFoundComponent(status){
    const residencesDOM = document.querySelector('.residences-cards-description')

    if(residencesDOM.children.length >= 1){
        residencesDOM.innerHTML = ''
    }

    const errorDOM = document.createElement('section')
    errorDOM.classList.add('nothing-found-search')

    let textSorryH1DOM = document.createElement('h1')
    textSorryH1DOM.innerText = 'OOOOPS!'
    errorDOM.append(textSorryH1DOM)

    let textSomethingWrongH1DOM = document.createElement('h1')
    textSomethingWrongH1DOM.innerText = 'ALGO DEU ERRADO NA SUA BUSCA.'
    errorDOM.append(textSomethingWrongH1DOM)

    let textStatusSpanDOM = document.createElement('span')
    textStatusSpanDOM.innerText = `status ${status}`
    errorDOM.append(textStatusSpanDOM)

    let textPleaseH1DOM = document.createElement('h1')
    textPleaseH1DOM.innerText = 'POR FAVOR, TENTE NOVAMENTE.'
    errorDOM.append(textPleaseH1DOM)

    residencesDOM.append(errorDOM)
}

export function createResidencesCardsComponent(listOfResidences, totalCountResult){
    const residencesDOM = document.querySelector('.residences-cards-description')

    if(residencesDOM.children.length >= 1){
        residencesDOM.innerHTML = ''
    }

    const residencesDetailsDOM = document.createElement('section')
    residencesDetailsDOM.classList.add('residences-details')

    

    const listOfResidencesDOM = document.createElement('section')
    listOfResidencesDOM.classList.add('list-of-residences')
    
    listOfResidences.forEach(({listing, medias, link}) =>{
        let cardOfResidenceDOM = document.createElement('div')
        cardOfResidenceDOM.classList.add('card-residence-description')
        createResidenceImg(medias[0], cardOfResidenceDOM)

        let cardDetailsOfResidenceDOM = document.createElement('div')
        cardDetailsOfResidenceDOM.classList.add('details-of-residence')
        createResidenceAddress(listing, cardDetailsOfResidenceDOM)
        createResidenceTitle(link, cardDetailsOfResidenceDOM)
        createResidenceContentItens(listing, cardDetailsOfResidenceDOM)
        createResidenceAmenitiesItens(listing, cardDetailsOfResidenceDOM)
        createResidenceValueInformation(listing, cardDetailsOfResidenceDOM)


        cardOfResidenceDOM.append(cardDetailsOfResidenceDOM)
        listOfResidencesDOM.append(cardOfResidenceDOM)
    })

    createHeaderDetailsResidence(listOfResidences[0].listing, totalCountResult, residencesDetailsDOM)
    residencesDetailsDOM.append(listOfResidencesDOM)
    residencesDOM.append(residencesDetailsDOM)
}

function createHeaderDetailsResidence({address}, totalCountResult, toAppend){
    const totalOfResidencesDOM = document.createElement('h2')
    totalOfResidencesDOM.classList.add('total-of-residences')
    totalOfResidencesDOM.innerText = `${totalCountResult} Imóveis à venda em ${address.city} - ${address.stateAcronym}`

    const cardCityHeaderDOM = document.createElement('span')
    cardCityHeaderDOM.classList.add('city-search')
    cardCityHeaderDOM.innerText = `${address.city} - ${address.stateAcronym}`

    toAppend.append(totalOfResidencesDOM)
    toAppend.append(cardCityHeaderDOM)
}

function createResidenceImg({url}, toAppend){
    let imgDOM = document.createElement('img')
    imgDOM.setAttribute('src', url)
    toAppend.append(imgDOM)
}

function createResidenceAddress({address}, toAppend){
    let addressDescription = `${address.street}, ${address.streetNumber} - ${address.neighborhood}, ${address.city} - ${address.stateAcronym}`
    let addressDOM = document.createElement('span')
    addressDOM.innerText = addressDescription
    addressDOM.classList.add('residence-address')
    toAppend.append(addressDOM)
}

function createResidenceTitle({name}, toAppend){
    let titleDOM = document.createElement('span')
    titleDOM.innerText = name
    titleDOM.classList.add('residence-title')
    toAppend.append(titleDOM)
}

function createResidenceContentItens({usableAreas, suites, bathrooms, bedrooms, parkingSpaces}, toAppend){
    let ulContentDOM = document.createElement('ul')

    let liContentAreaDOM = document.createElement('li')
    liContentAreaDOM.innerText = `${usableAreas}m²`

    let liContentSuitesDOM = document.createElement('li')
    liContentSuitesDOM.innerText = `${suites} Suites`

    let liContentBanheirosDOM = document.createElement('li')
    liContentBanheirosDOM.innerText = `${bathrooms} Banheiros`

    let liContentQuartosDOM = document.createElement('li')
    liContentQuartosDOM.innerText = `${bedrooms} Quartos`

    let liContentVagasDOM = document.createElement('li')
    liContentVagasDOM.innerText = `${parkingSpaces} Vagas`

    ulContentDOM.classList.add('residence-content')
    ulContentDOM.append(liContentAreaDOM)
    ulContentDOM.append(liContentSuitesDOM)
    ulContentDOM.append(liContentBanheirosDOM)
    ulContentDOM.append(liContentQuartosDOM)
    ulContentDOM.append(liContentVagasDOM)

    toAppend.append(ulContentDOM)
}

function createResidenceAmenitiesItens({amenities}, toAppend){
    let ulAmenitiesDOM = document.createElement('ul')
    amenities.forEach(amenitie =>{
        let liAmenitieDOM = document.createElement('li')
        liAmenitieDOM.innerText = translate(amenitie)
        ulAmenitiesDOM.append(liAmenitieDOM)
    })
    ulAmenitiesDOM.classList.add('amenities-list')
    toAppend.append(ulAmenitiesDOM)
}

function createResidenceValueInformation({pricingInfos}, toAppend){
    let pricingDOM = document.createElement('section')
    pricingDOM.classList.add('bottom-residence-details')

    let valuePrice = document.createElement('p')
    valuePrice.innerText = `R$ ${toReal(pricingInfos[0].price)}`
    pricingDOM.append(valuePrice)

    let valueCondoFeePrice = document.createElement('p')
    valueCondoFeePrice.innerText = `Condominio: ${validateCondoFee(pricingInfos[0].monthlyCondoFee)}`
    pricingDOM.append(valueCondoFeePrice)

    toAppend.append(pricingDOM)
}

function validateCondoFee(value){
    if(value){
        return 'R$ ' + value
    }

    return 'Informação indisponivel'
}

function translate(string){
    let translatedString = translateFakeApi(string)
    let result = translatedString.split(' ')
    .map(w => w[0].toUpperCase() + w.substr(1).toLowerCase())
    .join(' ')
    return result
}

function toReal(string){
    let result = string
    return result
}

