import discord_logo from '../assets/Discord-Logo-White.svg';

export default function LoginButton() {
  function login() {
    alert("Login")
  }

  return (
    <>
      <button className="login-button" onClick={login}>
        <span>Se connecter avec</span>
        <img src={discord_logo} alt="" className='discord-logo'/>
      </button>
    </>
  )
}
