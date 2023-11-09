import PropTypes from 'prop-types'
import React, { createContext, useContext, useState, useEffect } from 'react'

// cria o contexto
const UserContext = createContext({})

// deixa as informações disponíveis em toda a aplicação
export const UserProvider = ({ children }) => {
  const [userDate, setUserDate] = useState({})

  // grava os dados no local Storage
  const putUseDate = async userInfo => {
    setUserDate(userInfo)

    await localStorage.setItem('codeburger:userData', JSON.stringify(userInfo))
  }

  // recupera os dados do local Storage e deixar disponível
  useEffect(() => {
    const loadUserData = async () => {
      const clientInfo = await localStorage.getItem('codeburger:userData')

      if (clientInfo) {
        setUserDate(JSON.parse(clientInfo))
      }
    }
    loadUserData()
  }, [])

  // retorna o que eu quero deixar disponível em toda a aplicação
  return (
    <UserContext.Provider value={{ putUseDate, userDate }}>
      {children}
    </UserContext.Provider>
  )
}

// é responsavél por levar os dados para serem usados em nossa palicação
export const useUser = () => {
  const context = useContext(UserContext)

  if (!context) {
    throw new Error('useUser must be used with UserContex')
  }
  return context
}

UserProvider.propTypes = {
  children: PropTypes.node
}
