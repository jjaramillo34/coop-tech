export const trades = [
  "Automotive Services",
  "Construction and Building Skills",
  "Culinary",
  "Electrical",
  "Health Services",
  "Information Technology",
  "Unisex Styling",
  "Work-Based Learning",
  "OSHA",
] as const;

export type Trade = (typeof trades)[number];

export function getAllTrades(): string[] {
  return [...trades];
}

export function isValidTrade(trade: string): trade is Trade {
  return trades.includes(trade as Trade);
}
