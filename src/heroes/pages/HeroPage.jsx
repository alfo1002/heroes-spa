import { Navigate, useParams } from "react-router-dom"
import { getHeroesById } from "../helpers/getHeroesById"

export const HeroPage = () => {

    const { id } = useParams()

    const hero = getHeroesById(id)

    if (!hero) {
        return <Navigate to={"/marvel"} />
    }

    return (
        <>
            <h1>{hero.superhero}</h1>
        </>
    )
}
