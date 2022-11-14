import {useState, useEffect} from 'react'
import {CurrencySelector} from './CurrencySelector'
import {ICurrency} from '../models'
import {apikey} from '../api'


function Converter() {
  const [currencies, setCurrencies] = useState<ICurrency[]>([
    { id: 0, currency: 'eur', amount: ''},
    { id: 1, currency: 'uah', amount: ''},
  ])
  const [activeAmount, setActiveAmount] = useState<number | ''>('')
  const [activeCurrencyId, setActiveCurrencyId] = useState<number>(NaN)
  const [activeCurrencies, setActiveCurrencies] = useState<string[]>([currencies[0].currency, currencies[1].currency])

  function changeCurrency(id: number, value: string) {
    setCurrencies(
      currencies.map(item => {
        if (item.id === id) {
          item.currency = value
        }
        return item
      })
    )
    setActiveCurrencyId(id)
    setActiveCurrencies([currencies[0].currency, currencies[1].currency])
  }

  function changeAmount(id: number, value: number) {
    setCurrencies(
      currencies.map(item => {
        if (item.id === id) {
          item.amount = +value
        }
        return item
      })
    )
    setActiveCurrencyId(id)
    setActiveAmount(+currencies[id].amount)
  }

  const submitHandler = (event: any) => {
    event.preventDefault()
  }

  async function fetchData(currencies:ICurrency[], id:number) {
    let amount = 0

    if (id === 0 ) {
      const response = await fetch(`https://v6.exchangerate-api.com/v6/${apikey}/pair/${currencies[0].currency}/${currencies[1].currency}/${currencies[id].amount}`)
        .then((response) => response.json())
        .catch(error => console.log('error', error))
      
      amount = response.conversion_result.toFixed(2)
    }
    if (id === 1) {
      const response = await fetch(`https://v6.exchangerate-api.com/v6/${apikey}/pair/${currencies[1].currency}/${currencies[0].currency}/${currencies[id].amount}`)
        .then((response) => response.json())
        .catch(error => console.log('error', error))
      
      amount = response.conversion_result.toFixed(2)
    }
    setCurrencies(
      currencies.map(item => {
        if (item.id !== id) {
          item.amount = +amount
        }
        return item
      })
    )
  }

  useEffect(() => {
    try {
      console.log(currencies)
      if (currencies[0].amount < 0 || currencies[1].amount < 0) {
        return
      }
      if (currencies[0].amount || currencies[1].amount) {
        fetchData(currencies, activeCurrencyId)
      }
    } catch (error) {
      console.log(error);
    }
  }, [activeCurrencyId, activeCurrencies, activeAmount])
  
  return (
    <div className="bg-gray-100 border py-8 px-6 mx-6 rounded flex flex-wrap min-w-fit">
      <form 
        onSubmit={submitHandler}
        className="flex w-full flex-wrap justify-center gap-6"
      >
        {
          currencies.map(currency => {
            return (
              <CurrencySelector 
                currency={currency} 
                key={currency.id}
                onChangeCurrency={changeCurrency}
                onChangeAmount={changeAmount}
              />
            )
          })
        }
      </form>
    </div>
  )
}

export {Converter}