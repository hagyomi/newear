import Header from './components/Header/Header';
import Home from './page/Home';
import Footer from './components/Footer/Footer';
import './App.css';
import { useEffect } from 'react';
import { usePageNavigation } from './usePageNavigation';
import Category from './page/Category';
import { categoryBySlug } from './page/categories';
import Login from './page/Login';
import Signup from './page/Signup';
import Search from './page/Search';
import Cart from './page/Cart';
import Likes from './page/Likes';
import Product from './page/Product';
import ScrollTop from './components/ScrollTop';
import fw26Catalog from './data/fw26.json';
export default function App() {
    const route = usePageNavigation();
    const routePath = route.split('?')[0];
    const product = fw26Catalog.products.find(item => route === `#/product/${item.id}`);
    const category = routePath.startsWith('#/category/') ? categoryBySlug[routePath.slice('#/category/'.length)] : undefined;
    const isLoginPage = route === '#/login';
    const isSignupPage = route === '#/signup';
    const isSearchPage = route === '#/search';
    const isCartPage = route === '#/cart';
    const isLikesPage = route === '#/likes';
    const isHome = !product && !category && !isSearchPage && !isCartPage && !isSignupPage && !isLoginPage && !isLikesPage;
    useEffect(() => {
        document.title = isLikesPage ? '좋아요 | NEW ERA' : product ? `${product.name} | NEW ERA` : isSearchPage ? '검색 | NEW ERA' : isCartPage ? '장바구니 | NEW ERA' : isSignupPage ? '회원가입 | NEW ERA' : isLoginPage ? '로그인 | NEW ERA' : category ? `${category.label} | NEW ERA` : 'NEW ERA';
    }, [product, category, isLoginPage, isSignupPage, isSearchPage, isCartPage, isLikesPage]);
    return (
        <div className="app">
            <a className="skip-link" href="#main-content">
                본문 바로가기
            </a>
            <Header activeCategory={category?.slug} />
            <div className={`home-cache${isHome ? '' : ' home-cache--inactive'}`} aria-hidden={!isHome} inert={!isHome}><Home active={isHome} /></div>
            {isLikesPage ? <Likes /> : product ? <Product product={product} /> : isSearchPage ? <Search /> : isCartPage ? <Cart /> : isSignupPage ? <Signup /> : isLoginPage ? <Login /> : category ? <Category key={route} category={category} /> : null}
            <Footer />
            <ScrollTop route={route} />
        </div>
    );
}
