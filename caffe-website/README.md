Project Report 

 -Project Summary

I developed this project using Vue.js 3 and Vite infrastructure. My goal was to create an interactive Single Page Application (SPA) where users can explore coffee varieties, browse equipment, and shop using a cart system.

-Technologies Used

Vue.js 3 (Composition API): Used to build the core framework and provide reactive structure.

Vite: Chosen for its fast development process and optimized build performance.

Tailwind CSS: Used to create a responsive and modern design.

PrimeVue & PrimeIcons: Enriched the user experience with ready-to-use UI components (Dialog, Sidebar, Card) and icons.

Vue Router: Enabled fast and seamless page transitions (Home, Collection, Contact, etc.) without reloading.

-Features Developed

User Management (Auth):

Visitors can register and log in.

User data is stored in localStorage to keep the session active even after page refreshes.

Shopping Cart System:

Users can add items to the cart, remove them, and view the total price.

Note: I implemented a rule requiring users to log in before adding items to the cart. The system alerts the user if they are not logged in.

Data Persistence (State Management):

I established centralized data management via src/store.js. Cart and user information are preserved in the browser's storage.

