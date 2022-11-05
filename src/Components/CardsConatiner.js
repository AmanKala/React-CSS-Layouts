import "../Styles/ModernCard.css";
import ModernCard from "./ModernCards";

const CardsContainer = () =>{
    return(
        <>
            <div className="container">
                <ModernCard title="Card 1"/>
                <ModernCard title="Card 2"/>
                <ModernCard title="Card 3"/>
                <ModernCard title="Card 4"/>
            </div>
        </>
    )
}

export default CardsContainer;
