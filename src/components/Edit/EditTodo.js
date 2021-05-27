import React, { useEffect } from 'react';

const EditTodo = () => {
  return (
    <section className='flex flex-col min-h-screen items-center justify-center  ml-3 mr-3 flex-row py-20'>
      <form>
        <span className='text-sm text-gray-500 font-semibold uppercase'>
          Hey Buddy your editing
        </span>
        <h3 className='mb-8 text-2xl text-green-600 text-red-500 font-bold font-heading'>
          Todo
        </h3>

        <input
          className='w-full py-3 pl-3 mb-4 bg-white border rounded-lg'
          type='text'
          placeholder='Title'
        />
        <textarea
          className='w-full py-3 pl-3 mb-4 bg-white border rounded-lg'
          type='password'
          placeholder='Description'></textarea>

        <button
          type='submit'
          className='w-full inline-block px-6 py-3 mb-4 text-sm text-white font-bold leading-loose bg-green-500 hover:bg-gray-600 rounded transition duration-200'>
          Update
        </button>
      </form>
      <button
        type='submit'
        className='w-1/3 inline-block px-6 py-3 mb-4 text-sm text-white font-bold leading-loose bg-red-500 hover:bg-gray-600 rounded transition duration-200'>
        Delete
      </button>
    </section>
  );
};

export default EditTodo;
