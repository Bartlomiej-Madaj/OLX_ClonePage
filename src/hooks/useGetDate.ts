import { useEffect, useState } from "react";


export const useGetDate = (enteredDate:number) => {

 const [checkedDate, setCheckedDate] = useState<string>('')

 useEffect(()=>{

  if(enteredDate){

    const relaesedAdvertisementTime = enteredDate/(1000*60*60);

    let checkPoint = Date.now()/(1000*60*60);

    let period = checkPoint-relaesedAdvertisementTime;

    if(period < 24 ){
      setCheckedDate(` Dzisiaj o ${new Date(enteredDate).toLocaleString('pl', {
        timeStyle: 'short'
      })}`)
    } else if(period < 48 && period > 24){
      setCheckedDate(` Wczoraj o ${new Date(enteredDate).toLocaleString('pl', {
        timeStyle: 'short'
      })}`)
    } else if (period > 48) {
      setCheckedDate(`${new Date(enteredDate).toLocaleString('pl', {
        dateStyle: 'long'
      })}`)
    }
  }
}, [])

return checkedDate

} 

