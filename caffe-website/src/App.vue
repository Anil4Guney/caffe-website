<template>
  <div class="min-h-screen flex flex-col">
    <header class="flex items-center justify-between px-8 md:px-16 h-[90px] bg-[#FAFAF9] sticky top-0 z-50 border-b">
      <div class="text-2xl font-bold text-black">
        <router-link to="/" class="no-underline text-black">BrewMaster</router-link>
      </div>

      <nav class="hidden lg:flex items-center gap-10">
        <router-link to="/" class="nav-link">Home</router-link>
        <router-link to="/coffees" class="nav-link">Collection</router-link>
        <router-link to="/equipment" class="nav-link">Equipment</router-link>
        <router-link to="/about" class="nav-link">About Us</router-link>
        <router-link to="/contact" class="nav-link">Contact</router-link>
      </nav>

      <div class="flex items-center gap-6">
        <div @click="handleUserIconClick" class="cursor-pointer relative group flex flex-col items-center">
           <i class="pi pi-user text-xl" :class="store.user ? 'text-green-600' : 'text-gray-800'"></i>
           <span v-if="store.user" class="text-[10px] text-green-700 font-bold">{{ store.user.name }}</span>
        </div>

        <div @click="visibleCart = true" class="cursor-pointer relative">
           <i class="pi pi-shopping-cart text-xl text-gray-800 hover:text-[#A15D39]"></i>
           <span v-if="store.cartCount > 0" class="absolute -top-2 -right-2 bg-[#A15D39] text-white text-[10px] w-5 h-5 flex items-center justify-center rounded-full font-bold">
             {{ store.cartCount }}
           </span>
        </div>
      </div>
    </header>

    <main class="flex-grow flex flex-col">
      <router-view />
    </main>

    <footer class="bg-[#1A1A1A] text-white py-12 px-8 md:px-20 mt-auto">
        <p class="text-center text-gray-500">BrewMaster Coffee Co.</p>
    </footer>

    <Dialog v-model:visible="visibleAuth" modal :header="isRegister ? 'Sign up' : 'Login'" :style="{ width: '25rem' }">
      <div class="flex flex-col gap-4">
        
        <div v-if="isRegister">
            <label class="text-sm font-bold">Name Surname</label>
            <InputText v-model="form.name" class="w-full" placeholder="Example: Ahmet Yılmaz" />
        </div>
        
        <div>
            <label class="text-sm font-bold">Email</label>
            <InputText v-model="form.email" class="w-full" placeholder="email@gmail.com" />
        </div>
        
        <div>
            <label class="text-sm font-bold">Password</label>
            <InputText v-model="form.password" type="password" class="w-full" placeholder="******" />
        </div>
        
        <div v-if="errorMessage" class="text-red-500 text-sm text-center font-bold">
            {{ errorMessage }}
        </div>

        <Button :label="isRegister ? 'Sign up' : 'Login'" class="w-full bg-[#A15D39] border-none" @click="submitAuth" />
        
        <p class="text-center text-sm cursor-pointer text-gray-500 hover:text-[#A15D39]" @click="toggleMode">
            {{ isRegister ? 'Do you already have an account? Login' : "Don't have an account? Sign up" }}
        </p>
      </div>
    </Dialog>

    <Sidebar v-model:visible="visibleCart" position="right" class="w-full md:w-[25rem]">
      <h2 class="text-2xl font-bold mb-6">My shopping cart</h2>
      
      <div v-if="store.cart.length === 0" class="text-center text-gray-500 mt-10">
        <i class="pi pi-shopping-cart text-4xl mb-2 opacity-30"></i>
        <p>Your shopping cart is currently empty.</p>
      </div>

      <div v-else>
        <div v-for="item in store.cart" :key="item.id" class="flex gap-4 mb-4 border-b pb-4">
           <img :src="item.image" class="w-16 h-16 object-cover rounded-md bg-gray-100" />
           <div class="flex-grow">
             <h4 class="font-bold text-sm">{{ item.name }}</h4>
             <div class="flex justify-between items-center mt-1">
                 <p class="text-xs text-gray-500">{{ item.quantity }} adet</p>
                 <span class="text-[#A15D39] font-bold">{{ item.price }} $</span>
             </div>
           </div>
           <Button icon="pi pi-trash" class="p-button-text p-button-danger p-button-sm" @click="store.removeFromCart(item.id)" />
        </div>

        <div class="mt-4 pt-4 border-t">
            <div class="flex justify-between items-center text-xl font-bold mb-4">
                <span>Total:</span>
                <span class="text-[#A15D39]">{{ store.cartTotal }} $</span>
            </div>
            <Button label="Proceed to Payment" class="w-full bg-[#1A1A1A] border-none" />
        </div>
      </div>
    </Sidebar>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue';
import { store } from './store.js';

const visibleAuth = ref(false);
const visibleCart = ref(false);
const isRegister = ref(false); 
const errorMessage = ref('');

const form = reactive({ name: '', email: '', password: '' });


const toggleMode = () => {
    isRegister.value = !isRegister.value;
    errorMessage.value = ''; 
    form.name = '';
    form.email = '';
    form.password = '';
};


const handleUserIconClick = () => {
    if (store.user) {
        if (confirm(`${store.user.name}, Do you want to log out?`)) {
            store.logout();
            window.location.reload(); 
        }
    } else {
        visibleAuth.value = true;
    }
};


const submitAuth = () => {
    errorMessage.value = '';

    if (!form.email || !form.password) {
        errorMessage.value = "Please fill in all fields.";
        return;
    }

    if (isRegister.value) {
        if (!form.name) { errorMessage.value = "The name field is required."; return; }
        
        const res = store.register(form.name, form.email, form.password);
        if (res.success) {
            alert(res.message);
            isRegister.value = false; 
        } else {
            errorMessage.value = res.message;
        }

    } else {
        const res = store.login(form.email, form.password);
        if (res.success) {
            visibleAuth.value = false; 
        } else {
            errorMessage.value = res.message;
        }
    }
};
</script>

<style>
.nav-link { text-decoration: none; color: #1f2937; transition: color 0.2s; }
.nav-link:hover { color: #A15D39; }
</style>