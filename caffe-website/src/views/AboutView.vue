<template>
  <div class="h-full bg-white font-sans text-gray-900 w-full">
    
    <div class="grid grid-cols-1 lg:grid-cols-2 h-full">
      
      <div class="flex flex-col justify-center px-8 md:px-16 py-8 lg:py-0">
        
        <h1 class="text-4xl md:text-5xl font-extrabold leading-tight text-[#1A1A1A] mb-4">
          Reject the Ordinary. <br/>Discover Real Coffee.
        </h1>
        
        <p class="text-base md:text-lg font-normal leading-relaxed text-[#1A1A1A] max-w-[460px] mb-8 pl-0 lg:pl-10">
          Transform your morning ritual into an art form with hand-picked, <br class="hidden md:block"/> carefully roasted beans from all around the world.
        </p>
        
        <div class="pl-0 lg:pl-10">
          <Button 
            label="Explore Full Collection" 
            class="w-fit px-8 py-3 bg-[#A15D39] border-none rounded-xl text-white font-medium hover:brightness-110 transition-all shadow-lg"
          />
        </div>
      </div>

      <div class="relative h-[300px] lg:h-full overflow-hidden">
        <img 
          src="../assets/hero-coffee.jpg" 
          alt="Artisan Coffee Preparation" 
          class="w-full h-full object-cover"
        />
      </div>

    </div>
  </div>
</template>

<script setup>
// Script gerekmiyor
</script>