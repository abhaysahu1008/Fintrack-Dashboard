// ============================================================
//  Finance Dashboard — Mock Data
//  Usage: import { transactions, users, insights, monthlyStats } from './mockData'
// ============================================================

// ─── Users / Roles ──────────────────────────────────────────
export const users = [
  {
    id: "u1",
    name: "Alice Johnson",
    role: "admin",
    avatar: "AJ",
    email: "alice@finapp.io",
  },
  {
    id: "u2",
    name: "Bob Smith",
    role: "viewer",
    avatar: "BS",
    email: "bob@finapp.io",
  },
];

export const currentUser = users[0]; // swap to users[1] to demo viewer role

// ─── Categories ─────────────────────────────────────────────
export const categories = [
  "Housing",
  "Food & Dining",
  "Transport",
  "Entertainment",
  "Shopping",
  "Health",
  "Utilities",
  "Travel",
  "Education",
  "Income",
];

// ─── Transactions ────────────────────────────────────────────
// 40 entries spanning Jan–Apr 2025
export const transactions = [
  // January
  {
    id: "t001",
    date: "2025-01-03",
    description: "Monthly Salary",
    category: "Income",
    amount: 5200,
    type: "income",
  },
  {
    id: "t002",
    date: "2025-01-05",
    description: "Rent Payment",
    category: "Housing",
    amount: -1400,
    type: "expense",
  },
  {
    id: "t003",
    date: "2025-01-07",
    description: "Grocery Store",
    category: "Food & Dining",
    amount: -132,
    type: "expense",
  },
  {
    id: "t004",
    date: "2025-01-09",
    description: "Netflix",
    category: "Entertainment",
    amount: -15,
    type: "expense",
  },
  {
    id: "t005",
    date: "2025-01-12",
    description: "Uber Ride",
    category: "Transport",
    amount: -22,
    type: "expense",
  },
  {
    id: "t006",
    date: "2025-01-14",
    description: "Freelance Project",
    category: "Income",
    amount: 800,
    type: "income",
  },
  {
    id: "t007",
    date: "2025-01-18",
    description: "Electricity Bill",
    category: "Utilities",
    amount: -88,
    type: "expense",
  },
  {
    id: "t008",
    date: "2025-01-22",
    description: "Amazon Purchase",
    category: "Shopping",
    amount: -67,
    type: "expense",
  },
  {
    id: "t009",
    date: "2025-01-25",
    description: "Doctor Visit",
    category: "Health",
    amount: -120,
    type: "expense",
  },
  {
    id: "t010",
    date: "2025-01-28",
    description: "Restaurant Dinner",
    category: "Food & Dining",
    amount: -58,
    type: "expense",
  },

  // February
  {
    id: "t011",
    date: "2025-02-03",
    description: "Monthly Salary",
    category: "Income",
    amount: 5200,
    type: "income",
  },
  {
    id: "t012",
    date: "2025-02-05",
    description: "Rent Payment",
    category: "Housing",
    amount: -1400,
    type: "expense",
  },
  {
    id: "t013",
    date: "2025-02-08",
    description: "Grocery Store",
    category: "Food & Dining",
    amount: -145,
    type: "expense",
  },
  {
    id: "t014",
    date: "2025-02-10",
    description: "Gym Membership",
    category: "Health",
    amount: -40,
    type: "expense",
  },
  {
    id: "t015",
    date: "2025-02-13",
    description: "Online Course",
    category: "Education",
    amount: -199,
    type: "expense",
  },
  {
    id: "t016",
    date: "2025-02-15",
    description: "Spotify",
    category: "Entertainment",
    amount: -10,
    type: "expense",
  },
  {
    id: "t017",
    date: "2025-02-19",
    description: "Metro Card Top-up",
    category: "Transport",
    amount: -50,
    type: "expense",
  },
  {
    id: "t018",
    date: "2025-02-21",
    description: "Clothing Store",
    category: "Shopping",
    amount: -210,
    type: "expense",
  },
  {
    id: "t019",
    date: "2025-02-24",
    description: "Internet Bill",
    category: "Utilities",
    amount: -55,
    type: "expense",
  },
  {
    id: "t020",
    date: "2025-02-27",
    description: "Side Project Payment",
    category: "Income",
    amount: 450,
    type: "income",
  },

  // March
  {
    id: "t021",
    date: "2025-03-03",
    description: "Monthly Salary",
    category: "Income",
    amount: 5200,
    type: "income",
  },
  {
    id: "t022",
    date: "2025-03-05",
    description: "Rent Payment",
    category: "Housing",
    amount: -1400,
    type: "expense",
  },
  {
    id: "t023",
    date: "2025-03-08",
    description: "Grocery Store",
    category: "Food & Dining",
    amount: -118,
    type: "expense",
  },
  {
    id: "t024",
    date: "2025-03-10",
    description: "Flight Ticket",
    category: "Travel",
    amount: -340,
    type: "expense",
  },
  {
    id: "t025",
    date: "2025-03-13",
    description: "Hotel Booking",
    category: "Travel",
    amount: -280,
    type: "expense",
  },
  {
    id: "t026",
    date: "2025-03-15",
    description: "Coffee Shop",
    category: "Food & Dining",
    amount: -18,
    type: "expense",
  },
  {
    id: "t027",
    date: "2025-03-18",
    description: "Pharmacy",
    category: "Health",
    amount: -34,
    type: "expense",
  },
  {
    id: "t028",
    date: "2025-03-21",
    description: "Electricity Bill",
    category: "Utilities",
    amount: -92,
    type: "expense",
  },
  {
    id: "t029",
    date: "2025-03-25",
    description: "Book Purchase",
    category: "Education",
    amount: -45,
    type: "expense",
  },
  {
    id: "t030",
    date: "2025-03-28",
    description: "Freelance Project",
    category: "Income",
    amount: 1200,
    type: "income",
  },

  // April
  {
    id: "t031",
    date: "2025-04-02",
    description: "Monthly Salary",
    category: "Income",
    amount: 5200,
    type: "income",
  },
  {
    id: "t032",
    date: "2025-04-04",
    description: "Rent Payment",
    category: "Housing",
    amount: -1400,
    type: "expense",
  },
  {
    id: "t033",
    date: "2025-04-06",
    description: "Grocery Store",
    category: "Food & Dining",
    amount: -155,
    type: "expense",
  },
  {
    id: "t034",
    date: "2025-04-08",
    description: "Concert Tickets",
    category: "Entertainment",
    amount: -90,
    type: "expense",
  },
  {
    id: "t035",
    date: "2025-04-10",
    description: "Uber Ride",
    category: "Transport",
    amount: -28,
    type: "expense",
  },
  {
    id: "t036",
    date: "2025-04-12",
    description: "Gym Membership",
    category: "Health",
    amount: -40,
    type: "expense",
  },
  {
    id: "t037",
    date: "2025-04-14",
    description: "Internet Bill",
    category: "Utilities",
    amount: -55,
    type: "expense",
  },
  {
    id: "t038",
    date: "2025-04-17",
    description: "Laptop Accessory",
    category: "Shopping",
    amount: -145,
    type: "expense",
  },
  {
    id: "t039",
    date: "2025-04-20",
    description: "Restaurant Dinner",
    category: "Food & Dining",
    amount: -72,
    type: "expense",
  },
  {
    id: "t040",
    date: "2025-04-23",
    description: "Dividend Income",
    category: "Income",
    amount: 320,
    type: "income",
  },
];

// ─── Monthly Stats (for balance trend chart) ─────────────────
export const monthlyStats = [
  { month: "Jan", income: 6000, expenses: 1902, balance: 4098, savings: 2300 },
  { month: "Feb", income: 5650, expenses: 2109, balance: 3541, savings: 2100 },
  { month: "Mar", income: 6400, expenses: 2327, balance: 4073, savings: 2500 },
  { month: "Apr", income: 5520, expenses: 1985, balance: 3535, savings: 2200 },
];

// ─── Spending by Category (for pie / donut chart) ────────────
export const spendingByCategory = [
  { category: "Housing", amount: 5600, color: "#534AB7" },
  { category: "Food & Dining", amount: 698, color: "#1D9E75" },
  { category: "Travel", amount: 620, color: "#D85A30" },
  { category: "Shopping", amount: 422, color: "#D4537E" },
  { category: "Education", amount: 244, color: "#378ADD" },
  { category: "Utilities", amount: 290, color: "#EF9F27" },
  { category: "Health", amount: 234, color: "#639922" },
  { category: "Transport", amount: 100, color: "#888780" },
  { category: "Entertainment", amount: 115, color: "#E24B4A" },
];

// ─── Summary Cards ───────────────────────────────────────────
export const summary = {
  totalBalance: 12450.75,
  totalIncome: 23570.0, // sum of all income transactions
  totalExpenses: 8323.0, // sum of all expense transactions (absolute)
  savingsRate: 0.31, // 31%
  lastUpdated: "2025-04-23",
};

// ─── Insights ────────────────────────────────────────────────
export const insights = [
  {
    id: "ins1",
    type: "warning",
    title: "Highest spending category",
    value: "Housing",
    detail:
      "Housing accounts for 67% of your total expenses. Industry benchmark is 30%.",
  },
  {
    id: "ins2",
    type: "success",
    title: "Best savings month",
    value: "March",
    detail:
      "You saved ₹2,500 in March — your highest savings amount across all tracked months.",
  },
  {
    id: "ins3",
    type: "info",
    title: "Income trend",
    value: "+6.8% vs last month",
    detail:
      "April income is up compared to March. Freelance income is a key contributor.",
  },
  {
    id: "ins4",
    type: "warning",
    title: "Food & Dining spend",
    value: "₹698 over 4 months",
    detail:
      "Dining out costs are trending upward each month. Consider meal planning to save.",
  },
  {
    id: "ins5",
    type: "info",
    title: "Subscriptions detected",
    value: "3 active",
    detail:
      "Netflix (₹15), Spotify (₹10), Gym (₹40/mo). Total: ₹65/month in recurring costs.",
  },
];

// ─── Helper utilities ────────────────────────────────────────

// /** Returns transactions filtered by month string e.g. "2025-03" */
// export function getTransactionsByMonth(yearMonth) {
//   return transactions.filter((t) => t.date.startsWith(yearMonth));
// }

// /** Returns net balance for a given month */
// export function getMonthlyNet(yearMonth) {
//   return getTransactionsByMonth(yearMonth).reduce(
//     (sum, t) => sum + t.amount,
//     0,
//   );
// }

// /** Groups transactions by category and returns total spent (expenses only) */
// export function getSpendingByCategory(txList = transactions) {
//   return txList
//     .filter((t) => t.type === "expense")
//     .reduce((acc, t) => {
//       acc[t.category] = (acc[t.category] || 0) + Math.abs(t.amount);
//       return acc;
//     }, {});
// }
