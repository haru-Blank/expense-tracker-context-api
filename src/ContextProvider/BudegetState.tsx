import React, { createContext, ReactNode } from 'react';

interface IBudgetItem {
  id: string;
  text: string;
  type: string;
  amount: string;
  date: string;
}

type BudgetTrackerContextState = {
  items: IBudgetItem[];
  addItem: (item: IBudgetItem) => void;
};

const contextDefaultValues: BudgetTrackerContextState[] = [
  {
    items: [],
    addItem: () => {},
  },
];

export const BudgetTrackerContext =
  createContext<BudgetTrackerContextState[]>(contextDefaultValues);

export const BudgetTrackerProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  <BudgetTrackerContext.Provider
    value={{
      items,
      addItem,
    }}
  >
    {children}
  </BudgetTrackerContext.Provider>;
};
