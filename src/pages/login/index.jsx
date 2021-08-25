import './login.css';

export default function Login() {
  return (
    <div className='login'>
      <div className='loginWrapper'>
        <div className='loginLeft'>
          <h3 className='loginLogo'>Rede Social</h3>
          <span className='loginDesc'>Conecte com amigos e com o mundo ao seu redor na Rede Social</span>
        </div>

        <div className='loginRight'>
          <div className='loginBox'>
            <input placeholder='Email' className='loginInput' />
            <input placeholder='Password' className='loginInput' />
            <button className='loginButton'>Log In</button>
            <span className='loginForgot'>Esqueceu sua senha?</span>
            <button className='loginRegisterButton'>
              Criar nova conta
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}