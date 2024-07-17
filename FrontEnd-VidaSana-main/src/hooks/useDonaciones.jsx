import { useContext  } from 'react'
import DonacionesContext from '../context/DonacionesContext'

const useDonaciones = () => {
  return useContext(DonacionesContext)
}

export default useDonaciones
