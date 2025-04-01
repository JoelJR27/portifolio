import HeaderButton from "./HeaderButton"
function Header (){
    return(
        <header className="p-6 shadow-blue-shadow">
            <nav>
                <ul className="flex justify-around gap-2">
                    <HeaderButton>Joel Júnior</HeaderButton>
                    <HeaderButton>Projetos</HeaderButton>
                    <HeaderButton>Contatos</HeaderButton>
                </ul>
            </nav>
        </header>
    )
}

export default Header;