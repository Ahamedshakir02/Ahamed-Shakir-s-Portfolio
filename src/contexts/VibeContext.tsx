import { createContext, useContext, useState, useEffect } from 'react';

type VibeContextType = {
  isVibeMode: boolean;
  toggleVibeMode: () => void;
};

const VibeContext = createContext<VibeContextType | undefined>(undefined);

export function VibeProvider({ children }: { children: React.ReactNode }) {
  const [isVibeMode, setIsVibeMode] = useState(false);

  const toggleVibeMode = () => setIsVibeMode(!isVibeMode);

  useEffect(() => {
    if (isVibeMode) {
      document.body.classList.add('vibe-mode');
    } else {
      document.body.classList.remove('vibe-mode');
    }
  }, [isVibeMode]);

  return (
    <VibeContext.Provider value={{ isVibeMode, toggleVibeMode }}>
      {children}
    </VibeContext.Provider>
  );
}

export function useVibe() {
  const context = useContext(VibeContext);
  if (!context) throw new Error('useVibe must be used within VibeProvider');
  return context;
}
