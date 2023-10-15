import React, { useContext, createContext, useState } from 'react';

const SaldoContext = createContext();

export default function SaldoProvider({ children }) {
  const [saldo, setSaldo] = useState(10);

  return (
    <SaldoContext.Provider
      value={{
        saldo,
        setSaldo
      }}>
      {children}
    </SaldoContext.Provider>
  );
}

export function useSaldo() {
  const context = useContext(SaldoContext);
  const { saldo, setSaldo } = context;
  return { saldo, setSaldo };
}
