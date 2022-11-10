function Converter() {
  const submitHandler = (event: any) => {
    event.preventDefault()
  }

  return (
    <div className="bg-gray-100 border py-8 px-6 mx-6 rounded flex flex-wrap min-w-fit">
      <form 
        onSubmit={submitHandler}
        className="flex gap-6"
      >

        <div className="flex gap-2">
          <input 
            className="block bg-white w-full border rounded-md py-2 pl-9 pr-3 focus:outline-none focus:border-violet-600 focus:violet-600" 
            placeholder="Value one" 
            type="text" 
          />
          <select
            id="currencyOne"
            className="py-2 pl-3 pr-9 border rounded-md focus:outline-none focus:border-violet-600"
          >
            <option>USD</option>
            <option>EUR</option>
            <option>UAH</option>
          </select>
        </div>

        <div className="flex gap-2">
          <input 
            className="block bg-white w-full border rounded-md py-2 pl-9 pr-3 focus:outline-none focus:border-violet-600 focus:violet-600" 
            placeholder="Value two" 
            type="text" 
          />
          <select
            id="currencyTwo"
            className="py-2 pl-3 pr-9 border rounded-md focus:outline-none focus:border-violet-600"
          >
            <option>USD</option>
            <option>EUR</option>
            <option>UAH</option>
          </select>
        </div>
      </form>
    </div>
  )
}

export {Converter}