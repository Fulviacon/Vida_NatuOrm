import { createContext } from 'react'

const DonacionesContext = createContext()

const DonacionesProvider = ({ children }) => {
  return (
    <DonacionesContext.Provider
      value={{
      }}
    >
      {children} 
    </DonacionesContext.Provider>
  )
}

export { DonacionesProvider }

export default { DonacionesContext }
