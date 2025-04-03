function ListItem ({children, href}){
    return <li><a href={href} className="hover:text-white hover:bg-medium-blue text-xs font-bold font-inter text-medium-blue px-4 py-3 rounded-xl text-center transition-all ease-in-out delay-100 sm:text-lg">{children}</a></li>
}

export default ListItem;