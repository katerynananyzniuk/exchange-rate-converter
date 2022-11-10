import {useEffect, useState} from 'react'
import {requestOptions} from '../api'

interface ICurrency {
  currency: string
  amount?: number
}

const basicCurrencies = ['usd', 'eur', 'gbp', 'rub']

function createInitialCurrencies(arr:string[]) {
  const currencies:ICurrency[] = []
// eslint-disable-next-line
  arr.map(currency => {
    currencies.push({currency: currency, amount: undefined})
  })
  
  return currencies
}

export const ExchangeRate = () => {
  const [currencies, setCurrencies] = useState<ICurrency[]>(() => createInitialCurrencies(basicCurrencies))

  async function fetchAmount(currencies:string[]){
    let fetchedCurrencies = []

    for (let i = 0; i < currencies.length; i++) {
      const response = await fetch(`https://api.apilayer.com/exchangerates_data/convert?to=uah&from=${currencies[i]}&amount=1`, requestOptions)
      .then((response) => response.json())
      
      const amount = response.result.toFixed(2)

      fetchedCurrencies.push({ currency: currencies[i], amount: amount})
    }
        
    setCurrencies(fetchedCurrencies)
  }

  useEffect(() => {
    fetchAmount(basicCurrencies)
  },[])

  return (
    <div className="px-4 flex space-x-4">

      {
        basicCurrencies.map((currency, index) => {
          return (
            <div className="flex space-x-1" key={currency}>
              <button className="text-violet-400 uppercase">{currencies[index].currency}</button>
              <div>{currencies[index].amount}</div>
            </div>
          )
        })
      }

    </div>
  )
}