import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import { FavoritesContextProvider } from './store/favorites-context';

const AllMeetupsPage = lazy(() => import('./pages/AllMeetups'));
const NewMeetupPage = lazy(() => import('./pages/NewMeetup'));
const FavoritesPage = lazy(() => import('./pages/Favorites'));
const NotFoundPage = lazy(() => import('./pages/NotFound'));
const Layout = lazy(() => import('./components/layout/Layout'));

// // when the module uses named exports,
// // you can create an intermediate module that reexports it as the default
// export { AllMeetupsPage as default } from "./pages/AllMeetups.js";

function App() {
  return (
    <div className='App'>
      <FavoritesContextProvider>
        <Router>
          <Suspense fallback={<div>Loading...</div>}>
            <Layout>
              <Routes>
                <Route exact path='/' element={<AllMeetupsPage />} />
                <Route path='/newmeetup' element={<NewMeetupPage />} />
                <Route path='/favorites' element={<FavoritesPage />} />
                <Route path='*' element={<NotFoundPage />} />
                {/* <Route path='/' element={<Layout />}>
                <Route index element={<AllMeetupsPage />} />
                <Route path='newmeetup' element={<NewMeetupPage />} />
                <Route path='favorites' element={<FavoritesPage />} />
                <Route path='*' element={<NotFoundPage />} />
              </Route> */}
              </Routes>
            </Layout>
          </Suspense>
        </Router>
      </FavoritesContextProvider>
    </div>
  );
}

export default App;
