import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

const JobListing = () => {
    const {isSearched,searchFilter} = useContext(AppContext)
  return (
    <div>

        {/* SideBar */}
        <div>
             {/*Search filter from Hero Components*/}
             {
                isSearched && (searchFilter.title !=="" || searchFilter.location !=="") && (
                    <>
                        <h3>Current Search</h3>
                        <div>
                            {searchFilter.title && (
                                <span>
                                    {searchFilter.title}
                                </span>
                            )}
                            {searchFilter.title && (
                                <span>
                                    {searchFilter.location}
                                </span>
                            )}
                        </div>
                    </>
                )
             }
        </div>
    </div>
  )
}

export default JobListing