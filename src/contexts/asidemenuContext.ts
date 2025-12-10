import { createContext } from "react";
const AsidemenuContext = createContext({ isOpen: false, setIsOpen: () => {} });

export default AsidemenuContext;