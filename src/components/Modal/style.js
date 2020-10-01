import styled from 'styled-components';

const StyledModalComp = styled.div`
  h2 {
    color: #6D7781;
    font-size: 3.2em;
    text-align: center;
    letter-spacing: 7px;
    margin-bottom: 35px;
    font-family: 'PT Sans Narrow', sans-serif;
  }

  a {
    color: #435160;
    text-decoration: none;
  }

  .modalForm {
    width: 350px;
  }

  input[type=text], input[type=password] {
    width: 350px;
    padding: 20px 0px;
    background: transparent;
    border: 0;
    border-bottom: 1px solid #435160;
    outline: none;
    color: #6D7781;
    font-size: 16px;
  }
  input[type=checkbox] {
    display: none;
  }

  label {
    display: block;
    position: absolute;
    margin-right: 10px;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: transparent;
    content: "";
    transition: all 0.3s ease-in-out;
    cursor: pointer;
    border: 3px solid #435160;
  }

  #agree:checked ~ label[for=agree] {
    background: #435160;
  }

  input[type=submit] {
    background: #1FCE6D;
    border: 0;
    width: 350px;
    height: 40px;
    border-radius: 3px;
    color: #fff;
    font-size: 12px;
    cursor: pointer;
    transition: background 0.3s ease-in-out;
  }
  input[type=submit]:hover {
    background: #16aa56;
  }
  input[type=submit]:disabled {
    background: #6D7781;
    color: #fff;
    cursor: not-allowed;
  }

  .forgot {
    margin-top: 30px;
    display: block;
    font-size: 11px;
    text-align: center;
    font-weight: bold;
  }
  .forgot:hover {
    margin-top: 30px;
    display: block;
    font-size: 11px;
    text-align: center;
    font-weight: bold;
    color: #6D7781;
  }

  .agree {
    padding: 30px 0px;
    font-size: 12px;
    text-indent: 25px;
    line-height: 15px;
  }

  .modalError {
    text-align: center;
    background: indianred;
    color: white;
    border-bottom: none;
    width: 350px;
    min-height: 40px;
    line-height: 40px;
    transition: visibility 0.3s, opacity 0.3s linear;
    visibility: visible;
    opacity: 1;
  }

  .errorMessage {
    width: 300px;
  }

  .hidden {
    visibility: hidden;
    opacity: 0;
  }

  ::-webkit-input-placeholder {
    color: #435160;
    font-size: 12px;
}
`;

export default StyledModalComp;
