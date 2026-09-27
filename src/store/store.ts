import { configureStore } from '@reduxjs/toolkit'
import productsReducer from '../slice/productsSlice'
import cartReducer from '../slice/cartSlice'
import orderReducer from '../slice/orderSlice'
import profileReducer from '../slice/profileSlice'

const store = configureStore({
  reducer: {
    products: productsReducer,
    cart: cartReducer,
    order: orderReducer,
    profile: profileReducer,
  },
});




//RootState: خروجیِ کلِ وضعیت‌های موجود در استور را به عنوان یک تایپ ذخیره می‌کند.
// با استفاده از این در useSelector، تایپ‌اسکریپت می‌فهمد در استور چه داده‌هایی داریم.
export type RootState = ReturnType<typeof store.getState>;

// AppDispatch: نوعِ دقیقِ تابع dispatch را از استور استخراج می‌کند.
// استفاده از این باعث می‌شود هنگام فراخوانیِ اکشن‌های پیچیده (مثل Async Thunks)، 
// تایپ‌اسکریپت به ما خطا ندهد و همه چیز را صحیح بشناسد.
export type AppDispatch = typeof store.dispatch;

export default store;