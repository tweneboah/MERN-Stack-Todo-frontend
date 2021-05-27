import React, { useEffect } from 'react';
import { PencilAltIcon } from '@heroicons/react/solid';
import { Link } from 'react-router-dom';

const TodoList = () => {
  return (
    <>
      <section className='py-8'>
        <div className='container px-4 mx-auto'>
          <div className='pt-4 bg-white shadow rounded'>
            <div className='flex px-6 pb-4 border-b'>
              <h3 className='text-xl font-bold'>List Of Todos</h3>
            </div>
            <div className='p-4'>
              <table className='table-auto w-full'>
                <thead>
                  <tr className='text-base bg-gray-600 text-gray-400 text-left'>
                    <th className='pb-3 font-medium'>Title</th>
                    <th className='pb-3 font-medium'>Description</th>
                    <th className='pb-3 font-medium'>Created At</th>
                    <th className='pb-3 font-medium'>Updated At</th>
                    <th className='pb-3 font-medium'>Status</th>
                    <th className='pb-3 font-medium'>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className='text-base hover:bg-gray-300 cursor-pointer bg-gray-50'>
                    <td className='py-5 px-6 font-medium'>Title</td>
                    <td className='font-medium'>Description</td>
                    <td className='font-medium'>Created At</td>
                    <td className='font-medium'>Updated At</td>
                    <td>
                      <span className='inline-block py-1 px-2 text-white bg-red-500 rounded-full'>
                        not Completed
                      </span>
                    </td>
                    <Link>
                      <td className='font-medium'>
                        <PencilAltIcon className='h-5 w-5 text-blue-500' />
                      </td>
                    </Link>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TodoList;
