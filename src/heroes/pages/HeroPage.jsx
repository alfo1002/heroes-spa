import { Navigate, useParams } from "react-router-dom"
import { getHeroesById } from "../helpers/getHeroesById"
import { useMemo } from "react"

export const HeroPage = () => {

    const { id } = useParams()

    const hero = useMemo(() => getHeroesById(id), [id])

    if (!hero) {
        return <Navigate to={"/marvel"} />
    }

    return (
        <>
            <h1>{hero.superhero}</h1>
        </>
    )
}
