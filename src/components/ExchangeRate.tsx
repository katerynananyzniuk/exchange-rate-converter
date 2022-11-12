import {useEffect, useState} from 'react'
import {ICurrency} from '../models'
import {apikey} from '../api'

export const basicCurrencies = ['usd', 'eur', 'gbp', 'rub']

function createInitialCurrencies(arr:string[]) {
  const currencies:ICurrency[] = []
  arr.map((currency, index) => {
    return currencies.push({id: index, currency: currency, amount: ''})
  })
  
  return currencies
}

export const ExchangeRate = () => {
  const [currencies, setCurrencies] = useState<ICurrency[]>(() => createInitialCurrencies(basicCurrencies))

  async function fetchAmount(currencies:string[]){
    let fetchedCurrencies = []

    for (let i = 0; i < currencies.length; i++) {
      const response = await fetch(`https://v6.exchangerate-api.com/v6/${apikey}/pair/${currencies[i]}/UAH/1`)
      .then((response) => response.json())
      .catch(error => console.log('error', error))

      const amount = response.conversion_result.toFixed(2)

      fetchedCurrencies.push({ id: i, currency: currencies[i], amount: amount})
    }
        
    setCurrencies(fetchedCurrencies)
  }

  useEffect(() => {
    try {
      fetchAmount(basicCurrencies)
    } catch (error) {
      console.log('error', error)
    }
  },[])

  return (
    <div className="px-4 flex flex-wrap space-x-4">

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