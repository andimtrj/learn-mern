import { create } from "zustand";

export const useProductStore = create((set) => ({
  products: [], //state products awal yang masih kosong
  setProducts: (products) => set({ products }), //fungsinya mengupdate state products
  
  createProduct: async (newProduct) => {
    if (!newProduct.name || !newProduct.image || !newProduct.price) {
      return { success: false, message: "Please fill in all fields!" };
    }
    const res = await fetch("/api/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json" 
      },
      body:JSON.stringify(newProduct)
    })
    const data = await res.json();
    set((state) => ({products: [...state.products, data.data]}));

    return { success: true, message: "Product created successfully!" };
  },

  fetchProducts: async () => {
    const res = await fetch("/api/products");
    const data = await res.json();
    set({products: data.data})
  }

}));
