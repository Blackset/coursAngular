export class AppareilService {


    appareils=[
        {
          name:'Machine à laver',
          status:'éteint'
        },
        {
          name: 'Frigo',
          status: 'allumé'
        },
        {
          name: 'Ordinateur',
          status: 'éteint'
        }
        
        ]


        switchOnall(){
            for(let appareil of this.appareils){
                appareil.status = 'allumé'
            }
        }

        switchOffall(){
            for(let appareil of this.appareils){
                appareil.status = 'éteint'
            }
        }

switchOnOne (index:number) 
{
this.appareils[index].status='allumé'
  
}

switchOffOne (index:number) 
{
this.appareils[index].status='éteint'
   
}

}