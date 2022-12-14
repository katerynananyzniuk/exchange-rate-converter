import {Converter} from '../components/Converter'

const Home = () => {
  return (
    <div className="min-h-full mx-auto max-w-7xl py-12 px-4">
      <div className="sm:px-4 md:px-10">
        <Converter />
      </div>
    </div>
  )
}

export {Home}