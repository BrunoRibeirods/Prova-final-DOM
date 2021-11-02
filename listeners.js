import { createResidencesCardsComponent, createCardErrorFoundComponent } from './components.js'
import { getLocalDetail } from './requisitions.js'


export function inputSearchClickListener(){
    let inputDOM = document.querySelector('#input-search-residence')
    inputDOM.addEventListener('change', (evt)=>{
        console.log(evt.target.value)
        createCardWithApi(evt.target.value )
    })
}

async function createCardWithApi(city){
    let result = await getLocalDetail(city)
    if(result.status == 500){
        createCardErrorFoundComponent(result.status)
    }else{
        createResidencesCardsComponent(result.search.result.listings,result.search.totalCount)
    }
    
}