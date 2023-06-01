import React from "react";

export default function TransactionForm() {
    return (
        <form className="w-full flex flex-col justify-center justify-items-start max-w-lg dark:text-white">
            <div className="flex justify-center text-6xl mb-6">
                <h1>New transaction</h1>
            </div>
            <div className="flex -mx-3 mb-6 justify-center">
                <div className="px-3">
                    <label className="block uppercase tracking-wide text-xs font-bold mb-2"
                           htmlFor="grid-password">
                        Prompt
                    </label>
                    <input
                        className="appearance-none  text-black  block w-full bg-gray-200 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none  focus:border-emerald-500"
                        id="grid-password" type="text" placeholder="Dinner 80$ split 50/50"/>
                        <p className="text-gray-600 text-xs italic">Make it as long and as crazy as you'd like</p>
                </div>
            </div>
            <div className="flex justify-center justify-items-start mb-6 border-b-2 border-white p-4">
                <button className="bg-emerald-500 hover:bg-emerald-700 text-white font-bold py-2 px-4 rounded">🪄AI guess🪄</button>
            </div>
            <div className="flex -mx-3 mb-6 justify-center">
                <div className="px-3">
                    <label className="block uppercase tracking-wide text-xs font-bold mb-2"
                           htmlFor="grid-password">
                        Amount
                    </label>
                    <input
                        className="appearance-none  text-black  block w-full bg-gray-200 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none  focus:border-emerald-500"
                        id="grid-password" type="number" placeholder="5"/>
                </div>
            </div>
            <div className="flex -mx-3 mb-6 justify-center">
                <div className="px-3">
                    <label className="block uppercase tracking-wide text-xs font-bold mb-2"
                           htmlFor="grid-password">
                        Category
                    </label>
                    <select className="appearance-none  text-black  block w-full bg-gray-200 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none  focus:border-emerald-500">
                        <option value="groceries">Groceries</option>
                        <option value="fun-money">Fun Money</option>
                        <option value="holiday">Holiday</option>
                    </select>
                </div>
            </div>
            <div className="flex -mx-3 mb-6 justify-center">
                <div>
                <label for="default-range" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Default range</label>
                    <input id="default-range" type="range" value="50" className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"/>
                </div>
            </div>



            
        </form>
    );
}