
const events = [
  {
    id: 1,
    title: 'Birria-Landia',
    date: 'Open Daily',
    location: 'Downtown Food Alley',
    description: 'Rich birria tacos with homemade consommé.',
    link: 'https://example.org/birria-landia',
    image: 'https://source.unsplash.com/600x400/?birria,tacos,food-truck',
    menu: [
      { name: 'Birria Taco Plate', details: 'Three tacos with consommé, cilantro, onion, and lime.' },
      { name: 'Quesabirria', details: 'Cheesy folded taco served with rich dipping broth.' },
      { name: 'Consommé Cup', details: 'Savory broth with fresh herbs and chili oil.' }
    ]
  },
  {
    id: 2,
    title: 'Mysttik Masala',
    date: 'Fri–Sun',
    location: 'Market Street Lot',
    description: 'Bold Indian street food — biryani, rolls, and chutneys.',
    link: 'https://example.org/mysttik-masala',
    image: 'https://source.unsplash.com/600x400/?indian,food-truck,curry',
    menu: [
      { name: 'Butter Chicken Roll', details: 'Grilled wrap with creamy butter chicken and naan.' },
      { name: 'Vegetable Biryani Bowl', details: 'Spiced rice with seasonal vegetables and raita.' },
      { name: 'Masala Chai', details: 'Sweet Indian tea brewed with aromatic spices.' }
    ]
  },
  {
    id: 3,
    title: 'The Halal Guys',
    date: 'Weekends',
    location: 'Civic Plaza',
    description: 'Chicken and gyro platters with signature white sauce.',
    link: 'https://example.org/halal-guys',
    image: 'https://source.unsplash.com/600x400/?halal,gyro,food-truck',
    menu: [
      { name: 'Chicken Platter', details: 'Rice, lettuce, tomato, and signature white sauce.' },
      { name: 'Gyro Sandwich', details: 'Warm pita stuffed with gyro meat and hot sauce.' },
      { name: 'Falafel Wrap', details: 'Chickpea falafel with tahini and fresh greens.' }
    ]
  },
  {
    id: 4,
    title: 'Tasty Tacos',
    date: 'Wed & Sat',
    location: 'Riverside Park Entrance',
    description: 'Classic tacos with fresh salsas and house-made tortillas.',
    link: 'https://example.org/tasty-tacos',
    image: 'https://source.unsplash.com/600x400/?tacos,food',
    menu: [
      { name: 'Carne Asada Taco', details: 'Grilled steak with onions, cilantro, and salsa verde.' },
      { name: 'Fish Taco', details: 'Crispy fish, cabbage slaw, and creamy chipotle sauce.' },
      { name: 'Street Corn', details: 'Elote with cotija cheese, lime, and chili powder.' }
    ]
  },
  {
    id: 5,
    title: 'Seoul Bites',
    date: 'Thu–Sun',
    location: 'Corner of 5th & Pine',
    description: 'Korean BBQ fusion — bulgogi tacos and kimchi fries.',
    link: 'https://example.org/seoul-bites',
    image: 'https://source.unsplash.com/600x400/?korean,bbq,food-truck',
    menu: [
      { name: 'Bulgogi Taco', details: 'Korean marinated beef in a warm tortilla with kimchi.' },
      { name: 'Kimchi Fries', details: 'Crispy fries topped with kimchi, cheese, and scallions.' },
      { name: 'Korean BBQ Bowl', details: 'Rice bowl with seasoned beef, pickles, and greens.' }
    ]
  },
  {
    id: 6,
    title: "Rolling Pizza Co.",
    date: 'Daily',
    location: 'Market Plaza',
    description: 'Wood-fired personal pizzas made to order.',
    link: 'https://example.org/rolling-pizza',
    image: 'https://source.unsplash.com/600x400/?pizza,food-truck',
    menu: [
      { name: 'Margherita', details: 'Fresh mozzarella, basil, and tomato sauce on crisp crust.' },
      { name: 'Sausage & Peppers', details: 'Italian sausage, peppers, onions, and mozzarella.' },
      { name: 'White Pizza', details: 'Ricotta, garlic, spinach, and parmesan.' }
    ]
  },
  {
    id: 7,
    title: "Mama's Dumplings",
    date: 'Sat',
    location: 'Library Park',
    description: 'Handmade dumplings and soup bowls.',
    link: 'https://example.org/mamas-dumplings',
    image: 'https://source.unsplash.com/600x400/?dumplings,street-food',
    menu: [
      { name: 'Pork Dumplings', details: 'Steamed dumplings with ginger-soy dipping sauce.' },
      { name: 'Vegetable Potstickers', details: 'Crispy-bottom dumplings filled with greens and mushrooms.' },
      { name: 'Miso Soup', details: 'Warm broth with tofu, seaweed, and scallion.' }
    ]
  },
  {
    id: 8,
    title: 'Vegan Van',
    date: 'Sun',
    location: 'Community Center Lot',
    description: 'Plant-based bowls, sandwiches, and desserts.',
    link: 'https://example.org/vegan-van',
    image: 'https://source.unsplash.com/600x400/?vegan,street-food',
    menu: [
      { name: 'Falafel Wrap', details: 'Crispy falafel with hummus, pickles, and greens.' },
      { name: 'BBQ Jackfruit Bowl', details: 'Smoky jackfruit with rice, slaw, and avocado.' },
      { name: 'Chia Pudding', details: 'Coconut chia pudding topped with fresh berries.' }
    ]
  },
  {
    id: 9,
    title: 'BBQ Brothers',
    date: 'Fri',
    location: 'Warehouse Row',
    description: 'Smoked brisket, ribs, and house BBQ sauce.',
    link: 'https://example.org/bbq-brothers',
    image: 'https://source.unsplash.com/600x400/?bbq,smoked,food',
    menu: [
      { name: 'Brisket Sandwich', details: 'Smoked brisket with coleslaw and pickles on a bun.' },
      { name: 'Rack of Ribs', details: 'Tender ribs glazed with house-made BBQ sauce.' },
      { name: 'Mac & Cheese', details: 'Creamy macaroni with melted cheddar and breadcrumbs.' }
    ]
  },
  {
    id: 10,
    title: 'Crepe Corner',
    date: 'Sat & Sun',
    location: 'Ferry Terminal',
    description: 'Sweet and savory crepes — perfect for dessert.',
    link: 'https://example.org/crepe-corner',
    image: 'https://source.unsplash.com/600x400/?crepes,dessert',
    menu: [
      { name: 'Nutella Banana Crepe', details: 'Warm crepe filled with Nutella and sliced bananas.' },
      { name: 'Ham & Cheese Crepe', details: 'Savory crepe with ham, Gruyère, and béchamel sauce.' },
      { name: 'Berry Compote', details: 'Seasonal berries with vanilla syrup and whipped cream.' }
    ]
  }
]

export default events
