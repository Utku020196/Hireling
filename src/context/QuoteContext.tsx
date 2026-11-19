import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from 'react';

interface MaterialRequest {
  value: string;
  /** Increments on every pick so picking the same material twice still re-triggers. */
  id: number;
}

interface QuoteContextValue {
  materialRequest: MaterialRequest | null;
  /** Called by the material picker: prefill the form, scroll to it and focus it. */
  requestMaterial: (value: string) => void;
}

const QuoteContext = createContext<QuoteContextValue | null>(null);

export function QuoteProvider({ children }: { children: ReactNode }) {
  const [materialRequest, setRequest] = useState<MaterialRequest | null>(null);
  const requestMaterial = useCallback((value: string) => {
    setRequest((prev) => ({ value, id: (prev?.id ?? 0) + 1 }));
  }, []);
  const value = useMemo(() => ({ materialRequest, requestMaterial }), [materialRequest, requestMaterial]);
  return <QuoteContext.Provider value={value}>{children}</QuoteContext.Provider>;
}

// eslint-disable-next-line react-refresh/only-export-components
export function useQuote() {
  const ctx = useContext(QuoteContext);
  if (!ctx) throw new Error('useQuote must be used inside <QuoteProvider>');
  return ctx;
}
