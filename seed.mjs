// seed.mjs
import fetch from 'node-fetch';

const STRAPI_URL = 'http://localhost:1337/api';
// IMPORTANT: Replace with your actual API token if it changes
const STRAPI_TOKEN = '6dfc9c6121bc027655409030cf8ed70d00ecc3430c519f9ba4b67e3b35528f7c764b9c858fdbaf0e48e8f5b29d82dd743c2c3cbdc6c9fd155fa61dc0a8edbd736882192af0a1ed37ff5c2291084ab2db8aa782d283d2d7cc886f8c63301b590977f68d73b22dac4d3b9fc478ce669c04273bc9730ef334b688a98ba681055127';

// --- Placeholder Product Data ---
// Category IDs based on your screenshot:
// City Commuter: 1, Folding: 3, Off-Road: 6, Fat Tire: 8, Cargo: 10, Mountain: 12, Speed & Power: 14, Kids Ride: 16
// Assuming 'Model Y Adventure Ebike' maps to 'Off-Road' (ID: 6)
// Assuming 'Model S Cruiser Ebike' maps to 'City Commuter' for now (ID: 1)

const products = [
  // --- Commuter (Category ID: 1) ---
  {
    name: 'Model X Commuter Ebike',
    slug: 'model-x-commuter-ebike',
    category: 1,
    shortDescription: 'Turn daily drives into daily rides with this do-it-all commuter.',
    price: 1899.00,
    originalPrice: 1999.00,
    rating: 4.6,
    ratingCount: 88,
    compare: true,
    keySpecs: [ // Removed __component key
      { label: 'Speed', value: 'Class 2', icon: 'speedometer' },
      { label: 'Range', value: 'Up To 70 Miles', icon: 'battery-full' },
      { label: 'Payload Capacity', value: '300 lbs', icon: 'weight' },
      { label: 'Motor Power', value: '500W (864W Peak)', icon: 'bolt' },
      { label: 'GPS', value: '4G / GPS', icon: 'map-pin' },
      { label: 'Security', value: 'Theft Deterrence', icon: 'lock' },
    ],
    features: [ // Removed __component key
       { title: 'Advanced Technology', description: 'Revolutionary Generic Brand Control Unit (ACU) keeps you fully protected...', image: null },
       { title: 'Remote Lock and Geofencing', description: 'Smart locking functionality lets you immobilize your bike...', image: null },
       { title: 'Keyless Battery Start', description: 'Customize your passcode and secure your battery...', image: null },
       { title: 'Electronic Rear Wheel Lock', description: 'Activate a locking mechanism to add a layer of security...', image: null },
    ],
    techSpecs: [ // Removed __component key
      { label: 'Motor', value: '500W Brushless Rear Hub Motor' },
      { label: 'Battery', value: 'Removable Lithium-ion 48V, 14Ah' },
      { label: 'Charger', value: '48V 3 Amp Fast Charger' },
      { label: 'Display', value: 'Full Color LCD with App Connectivity' },
    ],
  },
  {
    name: 'Another Commuter Bike',
    slug: 'another-commuter-bike',
    category: 1,
    shortDescription: 'Reliable and efficient for daily use.',
    price: 1799.00,
    rating: 4.5,
    ratingCount: 70,
    compare: true,
    keySpecs: [ // Removed __component key
      { label: 'Speed', value: 'Class 2' },
      { label: 'Range', value: 'Up To 60 Miles' }
    ],
    features: [],
    techSpecs: [ // Removed __component key
      { label: 'Motor', value: '500W Hub Motor' },
      { label: 'Battery', value: '48V 13Ah' }
    ],
  },
  {
    name: 'City Slicker Ebike',
    slug: 'city-slicker-ebike',
    category: 1,
    shortDescription: 'Navigate the urban jungle with ease.',
    price: 1699.00,
    rating: 4.3,
    ratingCount: 55,
    compare: false,
    keySpecs: [ // Removed __component key
      { label: 'Speed', value: 'Class 1' },
      { label: 'Range', value: 'Up To 50 Miles' }
    ],
    features: [],
    techSpecs: [ // Removed __component key
      { label: 'Motor', value: '350W Hub Motor' },
      { label: 'Battery', value: '36V 10Ah' }
    ],
  },
  // --- Off-Road / Adventure (Category ID: 6) ---
  {
    name: 'Model Y Adventure Ebike',
    slug: 'model-y-adventure-ebike',
    category: 6,
    shortDescription: 'Explore further with this rugged adventure ebike.',
    price: 2199.00,
    rating: 4.8,
    ratingCount: 105,
    compare: true,
    keySpecs: [ // Removed __component key
      { label: 'Speed', value: 'Class 3', icon: 'speedometer' },
      { label: 'Range', value: 'Up To 60 Miles', icon: 'battery-full' },
      { label: 'Payload Capacity', value: '330 lbs', icon: 'weight' },
      { label: 'Motor Power', value: '750W (1000W Peak)', icon: 'bolt' },
    ],
    features: [ // Removed __component key
       { title: 'Powerful Motor', description: 'Conquer hills with the upgraded 750W motor.', image: null },
       { title: 'All-Terrain Tires', description: 'Fat tires provide stability on various surfaces.', image: null },
    ],
    techSpecs: [ // Removed __component key
      { label: 'Motor', value: '750W Brushless Rear Hub Motor' },
      { label: 'Battery', value: 'Removable Lithium-ion 48V, 15Ah' },
    ],
  },
   {
    name: 'Trail Blazer Ebike',
    slug: 'trail-blazer-ebike',
    category: 6,
    shortDescription: 'Hit the trails with confidence.',
    price: 2399.00,
    rating: 4.7,
    ratingCount: 90,
    compare: true,
    keySpecs: [ // Removed __component key
      { label: 'Speed', value: 'Class 3' },
      { label: 'Range', value: 'Up To 55 Miles' }
    ],
    features: [],
    techSpecs: [ // Removed __component key
      { label: 'Motor', value: '750W Mid-Drive Motor' },
      { label: 'Suspension', value: 'Front Fork' }
    ],
  },
  // --- Folding (Category ID: 3) ---
  {
    name: 'Model Z Folding Ebike',
    slug: 'model-z-folding-ebike',
    category: 3,
    shortDescription: 'Compact and convenient for urban commuting.',
    price: 1599.00,
    rating: 4.4,
    ratingCount: 62,
    compare: true,
    keySpecs: [ // Removed __component key
      { label: 'Speed', value: 'Class 1', icon: 'speedometer' },
      { label: 'Range', value: 'Up To 40 Miles', icon: 'battery-full' },
      { label: 'Weight', value: '50 lbs', icon: 'weight' },
    ],
    features: [ // Removed __component key
       { title: 'Easy Folding', description: 'Folds quickly for storage or transport.', image: null },
    ],
    techSpecs: [ // Removed __component key
      { label: 'Motor', value: '350W Brushless Rear Hub Motor' },
      { label: 'Battery', value: 'Integrated Lithium-ion 36V, 10Ah' },
    ],
  },
  {
    name: 'Compact Fold Ebike',
    slug: 'compact-fold-ebike',
    category: 3,
    shortDescription: 'Your portable travel companion.',
    price: 1499.00,
    rating: 4.2,
    ratingCount: 45,
    compare: false,
    keySpecs: [ // Removed __component key
      { label: 'Speed', value: 'Class 1' },
      { label: 'Weight', value: '48 lbs' }
    ],
    features: [],
    techSpecs: [ // Removed __component key
      { label: 'Motor', value: '250W Hub Motor' },
      { label: 'Battery', value: '36V 8Ah' }
    ],
  },
  // --- Cruiser (Using City Commuter ID: 1 for now) ---
  {
    name: 'Model S Cruiser Ebike',
    slug: 'model-s-cruiser-ebike',
    category: 1, // Using City Commuter for now
    shortDescription: 'Cruise in style and comfort.',
    price: 1999.00,
    rating: 4.7,
    ratingCount: 95,
    compare: true,
    keySpecs: [ // Removed __component key
      { label: 'Speed', value: 'Class 2', icon: 'speedometer' },
      { label: 'Range', value: 'Up To 50 Miles', icon: 'battery-full' },
      { label: 'Comfort Seat', value: 'Extra Wide', icon: 'bolt' },
    ],
    features: [ // Removed __component key
       { title: 'Upright Riding Position', description: 'Enjoy a relaxed and comfortable ride.', image: null },
    ],
    techSpecs: [ // Removed __component key
      { label: 'Motor', value: '500W Brushless Rear Hub Motor' },
      { label: 'Battery', value: 'Removable Lithium-ion 48V, 12Ah' },
      { label: 'Frame', value: '6061 Aluminum Alloy' },
      { label: 'Brakes', value: 'Hydraulic Disc Brakes' },
      { label: 'Tires', value: '26" x 2.2"' },
    ],
  },
  {
    name: 'Beach Cruiser Classic',
    slug: 'beach-cruiser-classic',
    category: 1, // Using City Commuter for now
    shortDescription: 'Classic style meets modern power.',
    price: 1899.00,
    rating: 4.6,
    ratingCount: 80,
    compare: false,
    keySpecs: [ // Removed __component key
      { label: 'Speed', value: 'Class 2' },
      { label: 'Range', value: 'Up To 45 Miles' }
    ],
    features: [],
    techSpecs: [ // Removed __component key
      { label: 'Motor', value: '500W Hub Motor' },
      { label: 'Battery', value: '48V 11Ah' }
    ],
  },
  // --- Add more products for other categories as needed ---
  {
    name: 'Mountain Max Ebike',
    slug: 'mountain-max-ebike',
    category: 12, // Mountain
    shortDescription: 'Conquer any peak.',
    price: 2999.00,
    rating: 4.9,
    ratingCount: 120,
    compare: true,
    keySpecs: [ // Removed __component key
      { label: 'Speed', value: 'Class 1/3' },
      { label: 'Suspension', value: 'Full' }
    ],
    features: [],
    techSpecs: [ // Removed __component key
      { label: 'Motor', value: '750W Mid-Drive' },
      { label: 'Battery', value: '48V 17Ah' }
    ],
  },
   {
    name: 'Cargo Hauler Pro',
    slug: 'cargo-hauler-pro',
    category: 10, // Cargo
    shortDescription: 'Carry everything you need.',
    price: 2599.00,
    rating: 4.7,
    ratingCount: 65,
    compare: true,
    keySpecs: [ // Removed __component key
      { label: 'Payload', value: '400 lbs' },
      { label: 'Range', value: 'Up To 60 Miles' }
    ],
    features: [],
    techSpecs: [ // Removed __component key
      { label: 'Motor', value: '750W Hub Motor' },
      { label: 'Battery', value: '48V 15Ah' }
    ],
  },
   {
    name: 'Speed Demon X',
    slug: 'speed-demon-x',
    category: 14, // Speed & Power
    shortDescription: 'Unleash the speed.',
    price: 3499.00,
    rating: 4.8,
    ratingCount: 40,
    compare: true,
    keySpecs: [ // Removed __component key
      { label: 'Speed', value: 'Class 3 (Unlocked)' },
      { label: 'Motor', value: '1000W Peak' }
    ],
    features: [],
    techSpecs: [ // Removed __component key
      { label: 'Motor', value: '750W (1000W Peak)' },
      { label: 'Battery', value: '52V 17Ah' }
    ],
  },
];

// --- Seeding Function ---
async function seedStrapi() {
  console.log('Starting to seed Strapi...');

  for (const product of products) {
    try {
      console.log(`Creating product: ${product.name}`);
      const response = await fetch(`${STRAPI_URL}/products`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${STRAPI_TOKEN}`,
        },
        body: JSON.stringify({ data: product }), // Strapi expects data wrapped in a 'data' object
      });

      if (!response.ok) {
        const errorBody = await response.text();
        console.error(`Error creating product ${product.name}: ${response.status} ${response.statusText}`);
        console.error(`Error details: ${errorBody}`);
      } else {
        const result = await response.json();
        console.log(`Successfully created product ${product.name} with ID: ${result.data.id}`);
      }
    } catch (error) {
      console.error(`Failed to create product ${product.name}:`, error);
    }
    // Add a small delay between requests to avoid overwhelming the API
    await new Promise(resolve => setTimeout(resolve, 200));
  }

  console.log('Seeding finished.');
}

seedStrapi();
