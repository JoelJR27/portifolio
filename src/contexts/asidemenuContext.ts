import { createContext } from "react";
const AsidemenuContext = createContext({ isOpen: false, setIsOpen: (value: boolean) => { } });

export default AsidemenuContext;