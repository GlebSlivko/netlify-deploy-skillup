import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';


const App = () => {
    return (
        <BrowserROuter>
            <Route path={`/:id`} component={Card} />
        </BrowserROuter>
    )
}

const Loading = () => {
    return <div>...Loading</div>
}


const Card = () => {
    const { id } = useParams()
    
    const [card, setCard] = useState(null)
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    
    useEffect(() => {
        if (id) {
            fetchCard().then((response) => )
        }
    }, [id]);
    
    if (isLoading) {
        return <Loading />
    }
    
    if (errorMessage) {
        return <div>{errorMessage}</div>
    }
    
    if (!card) {
        <div>A Card is undefined</div>
    }
    
    
    return (
        <div>
            <div>Name: {card.name}</div>
            <div>Name: {card.description}</div>
            <div>Name: {card.age}</div>
        </div>
    )
}