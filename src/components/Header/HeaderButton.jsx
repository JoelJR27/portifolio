function ListItem ({children, href}){
    return <li><a href={href} className="hover:text-white text-xs font-bold font-inter text-medium-blue">{children}</a></li>
}

export default ListItem;