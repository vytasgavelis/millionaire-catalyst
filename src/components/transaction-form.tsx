import React, { useEffect, useRef, useState } from "react";
import TransactionCategory from "~/types/transaction-category";

export default function TransactionForm() {
    const [isSplitChecked, setIsSplitChecked] = useState(false);
    const [sliderValue, setSliderValue] = useState(50);
    const [transactionCategories, setTransactionCategories] = useState<TransactionCategory[]>([]);

  
    const handleCheckboxChange = () => {
        setIsSplitChecked(!isSplitChecked);
    };

    const handleSliderChange = (event: any) => {
        setSliderValue(event.target.value);
    };

    useEffect(() => {
        // Fetch data from API
        fetch('http://localhost:3000/api/transaction-categories')
          .then(response => response.json())
          .then((data: any) => {
            setTransactionCategories(data.categories);
          })
          .catch(error => {
            console.log('Error fetching categories:', error);
          });
      }, []);
    

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
                        {transactionCategories.map(category => (
                            <option key={category.id} value={category.id}>
                                {category.name}
                            </option>
                        ))}
                    </select>
                </div>
            </div>
            <div className="flex -mx-3 mb-6 justify-center">
                <div className="flex items-center mr-4">
                    <input id="red-checkbox" type="checkbox" 
                        checked={isSplitChecked}
                        onChange={handleCheckboxChange}
                        className="w-4 h-4 text-red-600 bg-gray-100 border-gray-300 rounded focus:ring-emerald-500 dark:focus:ring-emerald-500 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                    <label for="red-checkbox" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Split?</label>
                </div>
            </div>
            {/* <div className="flex -mx-3 mb-6 justify-center">
                <input
                    type="range"
                    min="0"
                    max="100"
                    value={sliderValue}
                    onChange={handleSliderChange}
                    disabled={!isSplitChecked}
                    className="w-full bg-green-200 appearance-none h-3 rounded-lg overflow-hidden"
                    style={{
                        background: `linear-gradient(to right, #10B981 0%, #10B981 ${sliderValue}%, #D1D5DB ${sliderValue}%, #D1D5DB 100%)`,
                      }}
                /> */}
                
{/* <label for="default-range" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Default range</label>
<input id="default-range" type="range" value="50" className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"/> */}

            {/* </div> */}



            
        </form>
    );
}