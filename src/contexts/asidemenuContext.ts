import { createContext, Dispatch, SetStateAction } from "react";
const AsidemenuContext = createContext({ isOpen: false, setIsOpen: (() => { }) as Dispatch<SetStateAction<boolean>> });

export default AsidemenuContext;