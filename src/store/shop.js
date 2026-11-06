import { useSyncExternalStore } from 'react';
import imageAliases from '../data/imageAliases.json';
const key = 'newera-shop-v1';
const listeners = new Set();
function read() {
  try {
    const data = JSON.parse(localStorage.getItem(key));
    const valid = p => p && typeof p.id === 'string' && typeof p.name === 'string' && typeof p.image === 'string' && Number.isFinite(p.price) && p.price >= 0;
    const normalize = product => ({ ...product, image: imageAliases[product.image] || product.image });
    return { cart: Array.isArray(data?.cart) ? data.cart.filter(p => valid(p) && Number.isInteger(p.quantity) && p.quantity > 0 && p.quantity <= 99).map(normalize) : [], likes: Array.isArray(data?.likes) ? data.likes.filter(valid).map(normalize) : [] };
  } catch { return { cart: [], likes: [] }; }
}
let state = read();
function publish(next) {
  state = next;
  try { localStorage.setItem(key, JSON.stringify(state)); } catch { /* Keep in-memory selections if storage is unavailable. */ }
  listeners.forEach(listener => listener());
}
window.addEventListener('storage', event => { if (event.key === key || event.key === null) { state = read(); listeners.forEach(listener => listener()); } });
export function addToCart(product) {
  const existing = state.cart.find(item => item.id === product.id);
  publish({ ...state, cart: existing ? state.cart.map(item => item.id === product.id ? { ...item, quantity: Math.min(99, item.quantity + 1) } : item) : [...state.cart, { ...product, quantity: 1 }] });
}
export function setQuantity(id, quantity) {
  if (!Number.isInteger(quantity) || quantity < 1 || quantity > 99) return;
  publish({ ...state, cart: state.cart.map(item => item.id === id ? { ...item, quantity } : item) });
}
export function removeFromCart(id) { publish({ ...state, cart: state.cart.filter(item => item.id !== id) }); }
export function toggleLike(product) { publish({ ...state, likes: state.likes.some(item => item.id === product.id) ? state.likes.filter(item => item.id !== product.id) : [...state.likes, product] }); }
const subscribe = listener => { listeners.add(listener); return () => listeners.delete(listener); };
export function useShop() { return useSyncExternalStore(subscribe, () => state); }
