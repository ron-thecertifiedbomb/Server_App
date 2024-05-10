const generateRandomId = (length: number) => {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}

export const categories = [
  {
    id: generateRandomId(8),
    label: 'Home Appliances',
    count: 32,
    subCategories: [
      { id: generateRandomId(8), label: 'Kitchen Appliances', count: 15 },
      { id: generateRandomId(8), label: 'Cleaning Appliances', count: 17 },
    ]
  },
  {
    id: generateRandomId(8),
    label: 'Groceries',
    count: 32,
    subCategories: [
      { id: generateRandomId(8), label: 'Canned Goods', count: 8 },
      { id: generateRandomId(8), label: 'Fresh Produce', count: 12 },
      { id: generateRandomId(8), label: 'Snacks', count: 12 },
    ]
  },
  {
    id: generateRandomId(8),
    label: 'Health and Beauty',
    count: 32,
    subCategories: [
      { id: generateRandomId(8), label: 'Skincare', count: 10 },
      { id: generateRandomId(8), label: 'Haircare', count: 12 },
      { id: generateRandomId(8), label: 'Vitamins', count: 10 },
    ]
  },
  {
    id: generateRandomId(8),
    label: 'Electronics',
    count: 32,
    subCategories: [
      { id: generateRandomId(8), label: 'Smartphones', count: 15 },
      { id: generateRandomId(8), label: 'Laptops', count: 10 },
      { id: generateRandomId(8), label: 'Accessories', count: 7 },
    ]
  },
  {
    id: generateRandomId(8),
    label: 'Clothing',
    count: 32,
    subCategories: [
      { id: generateRandomId(8), label: 'Men\'s Apparel', count: 15 },
      { id: generateRandomId(8), label: 'Women\'s Apparel', count: 12 },
      { id: generateRandomId(8), label: 'Children\'s Clothing', count: 5 },
    ]
  },
  {
    id: generateRandomId(8),
    label: 'Furniture',
    count: 32,
    subCategories: [
      { id: generateRandomId(8), label: 'Living Room', count: 10 },
      { id: generateRandomId(8), label: 'Bedroom', count: 12 },
      { id: generateRandomId(8), label: 'Office Furniture', count: 10 },
    ]
  },
  {
    id: generateRandomId(8),
    label: 'Toys',
    count: 32,
    subCategories: [
      { id: generateRandomId(8), label: 'Action Figures', count: 8 },
      { id: generateRandomId(8), label: 'Board Games', count: 10 },
      { id: generateRandomId(8), label: 'Outdoor Toys', count: 14 },
    ]
  },
  {
    id: generateRandomId(8),
    label: 'Sports',
    count: 32,
    subCategories: [
      { id: generateRandomId(8), label: 'Fitness Equipment', count: 15 },
      { id: generateRandomId(8), label: 'Team Sports', count: 10 },
      { id: generateRandomId(8), label: 'Outdoor Recreation', count: 7 },
    ]
  },
  {
    id: generateRandomId(8),
    label: 'Books',
    count: 32,
    subCategories: [
      { id: generateRandomId(8), label: 'Fiction', count: 12 },
      { id: generateRandomId(8), label: 'Non-Fiction', count: 15 },
      { id: generateRandomId(8), label: 'Children\'s Books', count: 5 },
    ]
  },
];


export const priceRanges = [
  {
    id: 1,
    label: 'Under ₱3,000',
    value: 3000
  },
  {
    id: 2,
    label: '₱3,000 - ₱6,000',
    value: 6000
  },
  {
    id: 3,
    label: '₱6,001 - ₱9,000',
    value: 9000
  },
];