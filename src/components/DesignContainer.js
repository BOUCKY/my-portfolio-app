import React, { useState, useEffect} from "react"
import '../styling/Design.css'
import Design from "./Design"
import designData from '../design_data'

const DesignContainer = () => {
    useEffect(() => {
        document.title="Alexis Boucouvalas | Design"
    }, [])

    const [search, setSearch] = useState('')
    const filteredDesignData = designData.filter((designSearchObject) => {
        return designSearchObject.title.toLocaleLowerCase().includes(search.toLocaleLowerCase())
    })

    const sortedDesignData = filteredDesignData.sort((a, b) => {
        return new Date(b.date) - new Date(a.date)
    })

    return(
        <div className="Designs">
            <div className="designHeader">
                <div className="design-title">GRAPHIC DESIGN</div>
            </div>
            <div className="search-container">
                <input 
                    className="search-container"
                    type="text"
                    placeholder="SEARCH FOR DESIGNS . . ."
                    value={search}
                    onChange={event => setSearch(event.target.value)}
                />
            </div>
            <div className="designCard">
                {sortedDesignData.map( designObject => {
                    return(
                        <Design
                        key={ designObject.id }
                        image={ designObject.image }
                        title={ designObject.title }
                        description={ designObject.description }
                        date={ designObject.date }
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default DesignContainer