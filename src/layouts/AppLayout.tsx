import React, { ReactNode } from "react";

const AppLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return <div className="w-full min-h-screen">{children}</div>;
};

export default AppLayout;
