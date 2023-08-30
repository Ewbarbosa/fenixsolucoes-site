'use client';

import React from 'react';
import { Next13ProgressBar } from 'next13-progressbar';

// deve seguir este padrão para o uso da barra de progresso
const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      {children}

      {/* configurações da barra
            tamanho, cor, spinner  
        */}
      <Next13ProgressBar
        height="5px"
        color="#FD7014"
        options={{ showSpinner: false }}
        showOnShallow
      />

    </>
  );
};

export default Providers;