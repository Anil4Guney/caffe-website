<template>
  <div class="min-h-screen bg-white font-sans text-gray-900">
    
    <section class="grid grid-cols-1 lg:grid-cols-12 min-h-[90vh] bg-white border-b">
      <div class="lg:col-span-7 flex flex-col justify-center px-8 md:px-20 py-12">
        <h1 class="text-6xl font-black text-[#1A1A1A] leading-tight mb-6">
          Reject the Ordinary. <br/>Discover Real Coffee.
        </h1>
        <p class="text-xl text-gray-700 max-w-lg mb-12 border-l-4 border-[#A15D39] pl-6">
          Transform your morning ritual into an art form with hand-picked, carefully roasted beans from all around the world.
        </p>
        <Button 
          label="Explore Full Collection" 
          class="w-fit px-10 py-4 bg-[#A15D39] border-none rounded-xl text-white shadow-lg hover:brightness-110 transition-all"
        />
      </div>
      <div class="lg:col-span-5 relative h-[500px] lg:h-auto">
        <img 
          src="../assets/hero-home.jpg" 
          alt="Barista" 
          class="w-full h-full object-cover"
        />
      </div>
    </section>

    <section class="py-20 px-8 md:px-20 bg-[#F4F4F4]">
      <div class="mb-12">
        <h2 class="text-4xl font-bold text-[#1A1A1A] inline-block border-b-4 border-[#A15D39] pb-2">
          Featured Products
        </h2>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div v-for="product in products" :key="product.id" class="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all group">
          
          <div class="relative overflow-hidden h-60">
            <img :src="product.image" :alt="product.name" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
          </div>
          
          <div class="p-4">
            <h3 class="font-bold text-gray-800 text-sm mb-2 h-10 overflow-hidden">{{ product.name }}</h3>
            <div class="flex justify-between items-center mt-4">
              <span class="text-[#A15D39] font-bold text-lg">{{ product.price }} $</span>
              
              <Button 
                icon="pi pi-shopping-cart" 
                class="p-button-rounded p-button-text hover:bg-[#A15D39] hover:text-white transition-colors" 
                @click="handleAddToCart(product)"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { store } from '../store.js'; 
import imgBean from '../assets/category-beans.jpg';
import imgEquip from '../assets/category-equip.jpg';
import imgHero from '../assets/hero-home.jpg';


const products = ref([
  { id: 1, name: 'Ethiopian Coffee Journey - 1000g', price: 120.99, image: imgBean },
  { id: 2, name: 'Ceramic Coffee Mug - Special', price: 59.90, image: imgHero },
  { id: 3, name: 'Minimalist Gooseneck Kettle', price: 349.00, image: imgEquip },
  { id: 4, name: 'Artisan Chemex Brewer', price: 199.90, image: imgBean }
]);


const handleAddToCart = (product) => {
  if (!store.user) {
    alert("Please log in to add to cart!");
    return;
  }

  store.addToCart(product);

};
</script>

<style scoped>
:deep(.p-card-body) {
  padding: 1.5rem;
}
</style>