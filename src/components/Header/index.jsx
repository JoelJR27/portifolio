import HeaderButton from "./HeaderButton"
function Header (){
    return(
        <header className="px-3 py-6 shadow-blue-shadow sticky top-0 bg-white sm:p-5">
            <nav>
                <ul className="flex justify-around gap-2 lg:justify-center">
                    <HeaderButton href={"#joel"}>Joel Júnior</HeaderButton>
                    <HeaderButton href={"#projects"}>Projetos</HeaderButton>
                    <HeaderButton href={"#contacts"}>Contatos</HeaderButton>
                </ul>
            </nav>
        </header>
    )
}

export default Header;