import React from 'react'
import Filterbar from './Filterbar'
import Jobcart from './Jobcart'

function Jobs() {
    const Jobarray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    return (
        <div className='mt-18'>
            <div className='max-w-7xl mx-auto mt-5'>
                <div className='flex gap-5'>
                    <div className='w-[22%]'>
                        <Filterbar />
                    </div>
                    {
                        Jobarray.length <= 0 ? <span>Job not Found</span> : (
                            <div className='flex-1 h-[100vh] overflow-y-auto hide-scrollbar pb-5'>
                                <div className='grid grid-cols-3 gap-6'>
                                    {
                                        Jobarray.map((item, index) => (
                                            <div key={index}>
                                                <Jobcart />
                                            </div>
                                        ))
                                    }

                                </div>

                            </div>
                        )
                    }

                </div>

            </div>
        </div>
    )
}

export default Jobs