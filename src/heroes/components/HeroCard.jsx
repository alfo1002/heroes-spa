import { Link } from "react-router-dom";

export const HeroCard = ({
    id,
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters }) => {

    const heroImageUrl = `./assets/heroes/${id}.jpg`;

    return (
        <div className="col">
            <div className="card h-100">
                <div className="row no-gutters">
                    <div className="col-md-4 animate__animated animate__bounce">
                        <img src={heroImageUrl} className="card-img" alt={superhero} />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{superhero}</h5>
                            <p className="card-text">{alter_ego}</p>
                            {
                                (alter_ego !== characters)
                                && <p className="card-text">{characters}</p>
                            }
                            <p className="card-text">
                                <small className="text-muted">{first_appearance}</small>
                            </p>
                            <Link to={`../hero/${id}`}> Más... </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
