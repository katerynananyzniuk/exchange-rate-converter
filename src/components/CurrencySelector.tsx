import {ICurrency} from '../models'
import {useRef, useState} from 'react'
import {basicCurrencies} from './ExchangeRate'

const exchangeCurrencies = ['uah', ...basicCurrencies]

interface CurrencyProps {
  currency: ICurrency,
  onChangeCurrency: Function,
  onChangeAmount: Function
}

function CurrencySelector({currency, onChangeCurrency, onChangeAmount}: CurrencyProps) {
  const [selectedValue, setSelectedValue] = useState<string>(currency.currency)
  const [inputValue, setInputValue] = useState<number | ''>(currency.amount)
  const inputRef = useRef(null)

  function selectChangeHandler(event: any) {    
    setSelectedValue(() => event.target.value)
  }

  function inputHandler(event: any) {
    setInputValue(() => event.target.value)
  }
    
  return (
    <div className="flex flex-wpap gap-2">
      <input
        min="1"
        ref = {inputRef}
        value={currency.amount}
        className="block bg-white w-full min-w-fit border rounded-md py-2 pl-9 pr-3 focus:outline-none focus:border-violet-600 focus:violet-600" 
        placeholder={`Please enter amount...`}
        type="number"
        onChange={(event) => {
          inputHandler(event)
          onChangeAmount(currency.id, event.target.value)
        }}
      />
      
      <select
        value={selectedValue}
        onChange={(event) => {
          selectChangeHandler(event)
          onChangeCurrency(currency.id, event.target.value)
        }}
        className="uppercase py-2 pl-3 pr-9 min-w-fit border rounded-md focus:outline-none focus:border-violet-600"
      >
        { exchangeCurrencies.map((option, index) => {
          return (
            <option
              className="uppercase"
              key={index}
              value={option}
            >
              {option}
            </option>
          )
        }) }
      </select>
    </div>
  )
}

export {CurrencySelector}