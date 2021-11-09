# Budget Tracker

## Problem

- need to track income and expense
- save data for later use

## Planning

- Track income and expense.
  ```typescript
  interface DataIncExp {
    id: String;
    type: String;
    amount: Number;
    description: String;
  }
  ```
- Save data to database.( LocalStorage for now, will make nodeJS backend later)
- Save date as well.
