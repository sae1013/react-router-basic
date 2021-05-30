import {Route,Switch} from 'react-router-dom';
import MainHeaders from './components/MainHeaders';
import Welcome from './pages/Welcome';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
function App() {
  return (
    <div>
      <MainHeaders></MainHeaders>
      
      <main>
        <Switch>
          <Route path="/welcome">
            <Welcome/>
          </Route>

          <Route path="/products" exact>
            <Products/>
          </Route>

          <Route path ="/products/:productId">
            <ProductDetail/>
          </Route>
        </Switch>
      </main>

    </div>
  );
}

export default App;
