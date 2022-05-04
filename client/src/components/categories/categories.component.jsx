import { useEffect } from "react";
import Button from 'react-bootstrap/Button';
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../../redux/action/categories";
import './categories.css';

function Categories() {

    const dispatch = useDispatch();
    const categories = useSelector(state => state.categories);

    useEffect(() => {
        dispatch(getCategories());
    }, [dispatch]);

    return (
        categories.isLoading ?
            <div>Loading</div> :
            categories.error ?
                <div>{categories.error.message}</div> :
                categories.data.map((category, index) => {
                    return (
                        // Order is pending {category.order}
                        <div className={`d-flex ${!(index % 2) ? 'flex-row' : 'flex-row-reverse'} mb-2 shadow`} key={`${category.id}${index}`}>
                            <img className="w-25" src={category.imageUrl} alt={category.name} />
                            <div className="d-flex flex-column align-items-center align-self-center mx-auto">
                                <div>{category.name}</div>
                                <div>{category.description}</div>
                                <Button className="w-fit-content">Explore {category.key}</Button>
                            </div>
                        </div>
                    )
                })
    );
}

export default Categories;
