import {Link,Route} from 'react-router-dom';
import classes from './Products.module.css';
function Products() {
    return (
        <section className={classes.section}>
            <h1>Products Page</h1>
            <ul>
                <li>
                    <Link to='/products/p1'>Book</Link>
                </li>
                <li>
                    <Link to='/products/p2'>Furniture</Link>
                </li>
                <li>
                    <Link to='/products/p3'>Electronic</Link>
                </li>
            </ul>
            
        </section>
    )
}

export default Products
