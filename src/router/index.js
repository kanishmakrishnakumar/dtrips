import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue';
import AboutUs from '../views/aboutus/AboutUs.vue';
import PrivacyPolicy from '../views/supportPage/PrivacyPolicy.vue';
import RefundPolicy from '../views/supportPage/RefundPolicy.vue';
import TermsConditions from '../views/supportPage/TermsConditions.vue';
import SocialLogin from '../views/SocialLogin.vue';
import IconsPage from '../components/icons/IconsPage.vue';
import LoginCard from '../components/loginRegister/LoginCard.vue';
import RegisterCard from '../components/loginRegister/RegisterCard.vue';
// import ProfilePage from '../components/ProfilePage.vue';
import UserProfile from '../components/userdetails/UserProfile.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: 'home',
  },
  {
    path: '/google',
    name: 'google',
    component: SocialLogin
  },
  {
    path: '/profile',
    name: 'profile',
    component: UserProfile
  },
  {
    path: '/icons',
    name: 'icons',
    component: IconsPage
  },
  {
    path: '/home',
    name: 'home',
    component: HomeView
  },
  {
    path: '/aboutus',
    name: 'aboutus',
    component: AboutUs
  },
  {
    path: '/logincard',
    name: 'logincard',
    component: LoginCard
  },
  {
    path: '/register',
    name: 'register',
    component: RegisterCard
  },
  {
    path: '/privacy',
    name: 'privacy',
    component: PrivacyPolicy
  },
  {
    path: '/refund',
    name: 'refund',
    component: RefundPolicy
  },
  {
    path: '/terms',
    name: 'terms',
    component: TermsConditions
  }
]

const router = new VueRouter({
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})

export default router
