<template>
  <div class="min-h-screen bg-white py-12 px-8 md:px-20">
    
    <div class="mb-12 text-center">
      <h1 class="text-5xl font-black text-[#1A1A1A] mb-4">Premium Coffee Collection</h1>
      <p class="text-xl text-gray-600 max-w-2xl mx-auto">
        Discover our exclusive selection of ethically sourced, hand-roasted beans from around the globe.
      </p>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      <div v-for="product in products" :key="product.id" class="bg-white border rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all group">
        
        <div class="relative overflow-hidden h-64">
          <img :src="product.image" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
        </div>

        <div class="p-6">
          <h3 class="font-bold text-xl text-gray-900 mb-2">{{ product.name }}</h3>
          <p class="text-gray-500 text-sm mb-4 line-clamp-2">{{ product.desc }}</p>
          
          <div class="flex justify-between items-center pt-4 border-t">
            <span class="text-[#A15D39] font-bold text-2xl">{{ product.price }} $</span>
            
            <Button 
              icon="pi pi-shopping-cart" 
              label="Add"
              class="p-button-rounded p-button-outlined hover:bg-[#A15D39] hover:text-white transition-colors"
              @click="handleAddToCart(product)"
            />
          </div>
        </div>

      </div>
    </div>

  </div>
</template>

<script setup>
import { ref } from 'vue';
import { store } from '../store.js'; 

import imgBean from '../assets/category-beans.jpg';


const products = ref([
  { id: 101, name: 'Ethiopian Yirgacheffe', price: 28.00, desc: 'Floral notes with a hint of lemon.', image: imgBean },
  { id: 102, name: 'Colombia Supremo', price: 24.50, desc: 'Rich, mild flavor with nutty undertones.', image: imgBean },
  { id: 103, name: 'Guatemala Antigua', price: 26.00, desc: 'Spicy and smoky with a chocolate finish.', image: imgBean },
  { id: 104, name: 'Sumatra Mandheling', price: 29.00, desc: 'Full body, earthy flavor and low acidity.', image: imgBean },
  { id: 105, name: 'Kenya AA', price: 32.00, desc: 'Bold, fruity flavors with wine-like acidity.', image: imgBean },
  { id: 106, name: 'Costa Rica Tarrazu', price: 25.00, desc: 'Clean, crisp taste with berry notes.', image: imgBean },
]);


const handleAddToCart = (product) => {
  if (!store.user) {
    alert("Please log in to add to cart!");
  } else {
    store.addToCart(product);
  }
};
</script>