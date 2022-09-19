import React from 'react';
import { useState, useRef, useEffect } from 'react';
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';
import Footer from './Footer';
import { Shimmer } from './ShimmerPlaceholder';

const RepositoriesList: React.FC = () => {
    const [term, setTerm] = useState('');
    const { searchRepositories } = useActions();
    const inputRef = useRef<HTMLInputElement | null>(null)
    const { data, error, loading } = useTypedSelector((state) => state.repositories)
    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus()
        }
    }, [])
    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        searchRepositories(term);
    }
    return (
        <div>
            <section className="text-gray-400 body-font bg-gray-900 min-h-screen grid content-between">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-white">Grab your most desired package!</h1>
                        <p className="lg:w-1/2 w-full leading-relaxed text-opacity-80">Easily find out whatever npm pack you need and toggle over many packages</p>
                        <form onSubmit={onSubmit} className="lg:w-1/2 md:w-full w-full mt-5">
                            <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300">Search</label>
                            <div className="relative">
                                <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                                    <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                                </div>
                                <input type="search" ref={inputRef} value={term} onChange={e => setTerm(e.target.value)} id="default-search" className="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border  focus:ring-red-500 focus:border-red-500 " placeholder="Search npm packages..." required />
                                <button type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-red-400 hover:bg-red-500 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-md text-sm px-4 py-2">Search</button>
                            </div>
                        </form>
                        {error && <h3>{error}</h3>}
                        {loading && <Shimmer />}
                    </div>
                    <div className="flex flex-wrap -m-4">
                        {!error && !loading && data.map((item: any) =>
                            <div className="xl:w-1/3 md:w-1/2 w-full p-4  shadow-inner ">

                                <div className="border border-gray-700 min-h-full grid content-between max-h-72 border-opacity-75 p-6 rounded-lg">
                                    <div className="w-20 h-8 inline-flex items-center justify-center rounded-md bg-gray-800 text-red-400 mb-4">
                                        <h2 className='font-bold'> V-{item.package.version} </h2>
                                    </div>
                                    <h2 className="text-lg text-white font-medium title-font mb-2">{item.package.name}</h2>
                                    <p className="leading-relaxed text-base truncate">{item.package.description}</p>
                                    <div className='flex justify-between flex-wrap'>
                                        <a href={item.package.links.repository} target="_blank" rel='noreferrer'>
                                            <div className="lg:w-24 md:w-24 w-20 h-8 inline-flex items-center justify-center mt-3 rounded-md bg-gray-800 text-red-400 ">
                                                <h4 >Github</h4>
                                            </div>
                                        </a>
                                        <a href={item.package.links.homepage} target="_blank" rel='noreferrer'>
                                            <div className="lg:w-24 md:w-24 w-20 h-8 inline-flex items-center justify-center mt-3 rounded-md bg-gray-800 text-red-400 ">
                                                <h4 >Home</h4>
                                            </div>
                                        </a>
                                        <a href={item.package.links.npm} target="_blank" rel='noreferrer'>
                                            <div className="lg:w-24 md:w-24 w-20 h-8 inline-flex items-center justify-center mt-3 rounded-md bg-gray-800 text-red-400 ">
                                                <h4 >NPM</h4>
                                            </div>
                                        </a>
                                    </div>
                                </div>

                            </div>
                        )}
                    </div>
                    

                </div>
            <Footer />
            </section>
        </div>
    )
}
export default RepositoriesList;