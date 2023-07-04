import { Suspense } from 'react'
// import PrivateRoutes from 'routes/PrivateRoutes';
import Header from 'features/Header';
import { AppStyles, Footer } from 'App.styled';

import PublicRoutes from 'routes/PublicRoutes';
// import PrivateRoutes from 'routes/PrivateRoutes';

const App = () => {
  return <>
  <AppStyles />
  <Header />
    <Suspense fallback={'Loading...'}>
      <PublicRoutes/>
      {/* <PrivateRoutes/> */}
    </Suspense>

    <Footer>
      <div>MarketPlace 2023</div>
    </Footer>
  </>
}

export default App;
