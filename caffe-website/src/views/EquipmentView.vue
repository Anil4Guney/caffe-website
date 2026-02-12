<template>
  <div class="min-h-screen bg-white py-12 px-8 md:px-20">
    
    <div class="mb-12 text-center">
      <h1 class="text-5xl font-black text-[#1A1A1A] mb-4">Pro Brewing Equipment</h1>
      <p class="text-xl text-gray-600 max-w-2xl mx-auto">
        Elevate your brewing game with professional-grade tools and accessories.
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


import imgEquip from '../assets/category-equip.jpg';

const products = ref([
  { id: 201, name: 'V60 Dripper Ceramic', price: 25.00, desc: 'Classic ceramic dripper for pour-over coffee.', image: imgEquip },
  { id: 202, name: 'Gooseneck Kettle Electric', price: 140.00, desc: 'Precision pouring with temperature control.', image: imgEquip },
  { id: 203, name: 'Coffee Scale with Timer', price: 45.00, desc: 'High precision scale for perfect brewing ratios.', image: imgEquip },
  { id: 204, name: 'Burr Grinder Pro', price: 220.00, desc: 'Uniform grind size for optimal extraction.', image: imgEquip },
  { id: 205, name: 'French Press Steel', price: 55.00, desc: 'Double-walled stainless steel press.', image: imgEquip },
  { id: 206, name: 'Chemex Classic 6-Cup', price: 48.00, desc: 'Elegant glass coffeemaker.', image: imgEquip },
]);

const handleAddToCart = (product) => {
  if (!store.user) {
    alert("Please log in to add to cart!");
  } else {
    store.addToCart(product);
  }
};
</script>