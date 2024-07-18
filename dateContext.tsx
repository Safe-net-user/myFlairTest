import React, { createContext, useContext, useState, ReactNode } from 'react';

interface DateContextType {
  selectedWeekDays: string[];
  selectedSaturdays: string[];
  addDate: (date: string, isSaturday: boolean) => void;
  removeDate: (date: string, isSaturday: boolean) => void;
}

const DateContext = createContext<DateContextType | undefined>(undefined);

export const useDateContext = () => {
  const context = useContext(DateContext);
  if (!context) {
    throw new Error('useDateContext must be used within a DateProvider');
  }
  return context;
};

interface DateProviderProps {
  children: ReactNode;
}

export const DateProvider: React.FC<DateProviderProps> = ({ children }) => {
  const [selectedWeekDays, setSelectedWeekDays] = useState<string[]>([]);
  const [selectedSaturdays, setSelectedSaturdays] = useState<string[]>([]);

  const addDate = (date: string, isSaturday: boolean) => {
    if (isSaturday) {
      setSelectedSaturdays((prev) => [...prev, date]);
    } else {
      setSelectedWeekDays((prev) => [...prev, date]);
    }
  };

  const removeDate = (date: string, isSaturday: boolean) => {
    if (isSaturday) {
      setSelectedSaturdays((prev) => prev.filter((d) => d !== date));
    } else {
      setSelectedWeekDays((prev) => prev.filter((d) => d !== date));
    }
  };

  return (
    <DateContext.Provider value={{ selectedWeekDays, selectedSaturdays, addDate, removeDate }}>
      {children}
    </DateContext.Provider>
  );
};
