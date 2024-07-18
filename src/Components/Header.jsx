import logo from '../assets/investment-calculator-logo.png'
export default function Header(){
    return(
        <div id='header'>
            <img src={logo} alt='invesment-logo' />
            <h1>Invesment Calculater</h1>
        </div>
    )
}