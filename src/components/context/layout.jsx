import { createContext, useState } from 'react';

const LayoutContext = createContext();

function LayoutProvider({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => setIsSidebarOpen(prevOpen => !prevOpen);

  return <LayoutContext.Provider value={{ isSidebarOpen, toggleSidebar }}>{children}</LayoutContext.Provider>;
}

export { LayoutContext, LayoutProvider };
