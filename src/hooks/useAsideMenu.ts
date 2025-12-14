'use client';

import { useContext } from 'react';
import AsidemenuContext from '@/contexts/asidemenuContext';

export const useAsidemenu = () => {
  const context = useContext(AsidemenuContext);
  if (!context)
    throw new Error(
      'useAsidemenu deve ser usado dentro de <AsidemenuProvider>'
    );
  return context;
};
