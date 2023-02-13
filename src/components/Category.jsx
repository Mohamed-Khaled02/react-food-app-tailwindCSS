import React from 'react'
import { categories } from '../data/data'

function Category() {

  return (
    <div className='px-4 py-12'>
        <h1 className='text-orange-600 font-bold text-4xl text-center'>Top Rated Menu Items</h1>

        <div className='grid grid-cols-2 md:grid-cols-4 gap-6 py-6'>
        {categories.map((cat) => {
            return (
                <div key={cat.id} className="bg-gray-100 rounded-lg p-4 flex justify-between items-center'">
                    <p className='font-bold sm:text-xl'> {cat.name}</p>
                    <img src={cat.image} alt={cat.name} className="w-20"/>
                </div>
            )
        })}
        </div>
    </div>
  )
}

export default Category