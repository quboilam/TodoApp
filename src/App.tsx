import { FC } from 'react'
import reactlogo from './assets/images/react.svg'
import './assets/styles/app.css'
import './assets/styles/app.scss'

const App: FC = () => {
  return (
    <div>
      <img src={reactlogo} alt='React Logo' width={100} height={100} />
      <h2>{process.env.MESSAGE}</h2>
    </div>
  )
}

export default App
