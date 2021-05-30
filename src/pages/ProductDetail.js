import { useParams } from 'react-router-dom';
function ProductDetail() {
    const params = useParams();
    console.log(params)
    return (
        <div>
            <p>Product Detail</p>
        </div>
    )
}

export default ProductDetail
