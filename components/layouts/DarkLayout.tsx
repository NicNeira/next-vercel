import React, { PropsWithChildren } from "react";

// Codigo para indicar que tipo de dato es el props
type Props = {};
export const DarkLayout: React.FC<PropsWithChildren<Props>> = ({ children }) => {
  return (
    <div
      style={{
        backgroundColor: "rgba(255,255,255,0.3)",
        borderRadius: "5px",
        padding: "10px",
      }}
    >
      <h3>Dark Layout</h3>
      <div>
        {/* children que recibimos como parametros, en este caso {page} desde about */}
        {children}
      </div>
    </div>
  );
};
