import { reactive } from 'vue';


const load = (key) => {
    try {
        const data = localStorage.getItem(key);
        return data ? JSON.parse(data) : null;
    } catch (e) {
        return null;
    }
};

export const store = reactive({

    users: load('db_users') || [],
    user: load('db_current_user') || null,
    cart: load('db_cart') || [],


    register(name, email, password) {
        if (this.users.find(u => u.email === email)) {
            return { success: false, message: 'Bu e-posta zaten kayıtlı.' };
        }
        const newUser = { id: Date.now(), name, email, password };
        this.users.push(newUser);
        this.saveData();
        return { success: true, message: 'Kayıt başarılı! Şimdi giriş yapabilirsiniz.' };
    },


    login(email, password) {
        const found = this.users.find(u => u.email === email && u.password === password);
        if (found) {
            this.user = found;
            this.saveData();
            return { success: true, message: `Hoşgeldin ${found.name}` };
        }
        return { success: false, message: 'Hatalı e-posta veya şifre.' };
    },


    logout() {
        this.user = null;
        this.saveData();
    },

    addToCart(product) {
        const existing = this.cart.find(item => item.id === product.id);
        if (existing) {
            existing.quantity++;
        } else {
            this.cart.push({
                id: product.id,
                name: product.name,
                price: parseFloat(product.price),
                image: product.image,
                quantity: 1
            });
        }
        this.saveData();
    },


    removeFromCart(productId) {
        this.cart = this.cart.filter(item => item.id !== productId);
        this.saveData();
    },

    saveData() {
        localStorage.setItem('db_users', JSON.stringify(this.users));
        localStorage.setItem('db_current_user', JSON.stringify(this.user));
        localStorage.setItem('db_cart', JSON.stringify(this.cart));
    },


    get cartTotal() {
        return this.cart.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2);
    },
    get cartCount() {
        return this.cart.reduce((total, item) => total + item.quantity, 0);
    }
});