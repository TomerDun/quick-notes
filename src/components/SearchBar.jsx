import './SearchBar.css'

export default function SearchBar({ filterQuery, setFilterQuery, filterCategory, setFilterCategory }) {
    return (
        <div className="filter-container">
            <div className="filter-row">
                <input type="text" id='filter-query' placeholder="Filter by..." value={filterQuery} onChange={e => setFilterQuery(e.target.value)} />

                <div className="category-filter-container">                    
                    <div className="filter-category-row">
                        <label htmlFor="category">Filter Category:</label>
                        <select value={filterCategory} onChange={e => setFilterCategory(e.target.value)} name="category" id="category">
                            <option value={null}>None</option>
                            <option value="general">General</option>
                            <option value="learning">Learning</option>
                            <option value="work">Work</option>
                            <option value="goals">Goals</option>
                        </select>
                    </div>
                </div>
            </div>

            <div className="filter-labels">
                {filterQuery && <div onClick={() => setFilterQuery('')} className='filter-label'>Contains '{filterQuery}'</div>}
                {filterCategory && <div onClick={() => setFilterCategory(null)} className='filter-label'>Category: '{filterCategory}'</div>}
            </div>
        </div>



    )
}