import { yupResolver } from '@hookform/resolvers/yup'
import React from 'react'
import { useForm } from 'react-hook-form'
import { Link, useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import { toast } from 'react-toastify'
import * as Yup from 'yup'

import Loginimage from '../../assets/login-image.svg'
import Logo from '../../assets/logo.svg'
import Button from '../../Components/Button'
import { useUser } from '../../hooks/UserContext'
import api from '../../services/api'
import {
  Container,
  LoginImage,
  ContainerItens,
  Label,
  Input,
  SingInLink,
  ErrorMessage
} from './styles'

function Login() {
  const history = useHistory()
  const { putUseDate, userDate } = useUser()
  console.log(userDate)

  const schema = Yup.object().shape({
    email: Yup.string()
      .email('Digite um e-mail válido')
      .required('O e-mail é obrigatório'),
    password: Yup.string()
      .required('A senha é obrigatória')
      .min(6, 'A senha deve conter pelo menos 6 dígitos')
  })

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  })

  const onSubmit = async clientData => {
    try {
      const { data } = await toast.promise(
        api.post('sessions', {
          email: clientData.email,
          password: clientData.password
        }),
        {
          pending: 'verificando os seus dados',
          success: 'Seja bem-vindo(a)'
        }
      )

      putUseDate(data)

      setTimeout(() => {
        history.push('/')
      }, 1000)
    } catch (error) {
      if (error.response && error.response.status === 400) {
        toast.error('Verifique seu e-mail e senha')
      } else {
        toast.error('Falha no servidor! Tente novamente')
      }
    }
  }

  return (
    <Container>
      <LoginImage src={Loginimage} alt="login-image" />
      <ContainerItens>
        <img src={Logo} alt="logo-code-burger" />
        <h1>Login</h1>

        <form noValidate onSubmit={handleSubmit(onSubmit)}>
          <Label>Email</Label>
          <Input
            type="email"
            {...register('email')}
            error={errors.email?.message}
          />
          <ErrorMessage>{errors.email?.message}</ErrorMessage>

          <Label>Senha</Label>
          <Input
            type="password"
            {...register('password')}
            error={errors.password?.message}
          />
          <ErrorMessage>{errors.password?.message}</ErrorMessage>

          <Button type="submit" style={{ marginTop: 35, marginBottom: 18 }}>
            Entrar
          </Button>
        </form>

        <SingInLink>
          Não possui contar?{' '}
          <Link style={{ color: 'white' }} to="/cadastro">
            Cadastrar
          </Link>
        </SingInLink>
      </ContainerItens>
    </Container>
  )
}

export default Login
