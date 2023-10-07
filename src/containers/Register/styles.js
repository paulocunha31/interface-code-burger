import styled from 'styled-components'

import Background from '../../assets/Background.svg'

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background: url('${Background}');
  display: flex;
  justify-content: center;
  align-items: center;
`

export const RegisterImage = styled.img`
  height: 83%;
  border-radius: 10px 0 0 10px;
`

export const ContainerItens = styled.div`
  background: #373737;
  border-radius: 0 10px 10px 0;
  height: 83%;
  padding: 25px 75px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  h1 {
    color: #fff;
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    text-align: center;
    margin-top: 5px;
  }
  form {
    display: flex;
    flex-direction: column;
  }
`

export const Label = styled.p`
  color: #fff;
  width: 197.39px;
  height: 19.707px;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-top: ${props => (props.error ? '8px' : '16px')};
  margin-bottom: ${props => (props.error ? '0' : '5px')};
`

export const Input = styled.input`
  border-radius: 5px;
  background: #fff;
  box-shadow: 3px 3px 10px 0px rgba(74, 144, 226, 0.19);
  width: 391.416px;
  height: 38.319px;
  border: ${props => (props.error ? '2px solid #cc1717' : 'none')};
  padding-left: 10px;
`

export const SingInLink = styled.p`
  color: #fff;
  font-size: 14px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;

  a {
    cursor: pointer;
    text-decoration: underline;
  }
`
export const ErrorMessage = styled.p`
  color: #cc1717;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-top: 3px;
`
