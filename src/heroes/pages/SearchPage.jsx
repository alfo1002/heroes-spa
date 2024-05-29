import { useLocation, useNavigate } from "react-router-dom"
import { useForm } from "../../hooks/useForm"
import queryString from "query-string"
import { getHeroByName } from "../helpers/getHeroByName"
import { HeroCard } from "../components/HeroCard"

export const SearchPage = () => {

    const navigate = useNavigate()
    const location = useLocation()
    const { q = '' } = queryString.parse(location.search)
    const heroes = getHeroByName(q)

    const { searchText, onInputChange } = useForm({
        searchText: q
    })

    const onSearchSubmit = (e) => {
        e.preventDefault()
        if (searchText.trim().length <= 1) return
        navigate(`?q=${searchText}`)
    }

    return (
        <>
            <h1>Search Page</h1>
            <hr />
            <div className="row">
                <div className="col-5">
                    <h4>Search Form</h4>
                    <hr />
                    <form onSubmit={onSearchSubmit}>
                        <input type="text" placeholder="Find your hero" className="form-control"
                            name="searchText" autoComplete="off" value={searchText} onChange={onInputChange} />
                        <button type="submit" className="btn m-1 btn-block btn-outline-primary">Search</button>
                    </form>

                </div>
                <div className="col-7">
                    <h4>Results</h4>
                    <hr />

                    <div className="card">
                        <div className="card-body">
                            <p className="alert alert-primary">Card content</p>
                        </div>
                    </div>

                    <div className="card">
                        <div className="card-body">
                            <p className="alert alert-danger">No Card content <b>{q}</b></p>
                        </div>
                    </div>

                    {
                        heroes.map(hero => (
                            <HeroCard key={hero.id} {...hero} />
                        ))
                    }

                </div>
            </div>

        </>

    )
}
