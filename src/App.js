import './App.css';

function App() {
  return (
    <div>
       <h1 className="mt-10 mb-2 text-center capitalize text-4xl">Card Component</h1>
       <hr className="w-1/5 mx-auto"/>
       {/* my card component */}
       <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-3 justify-items-center mt-10">
       {/* my 1st card component */}
       <div class="py-10">
       <div className="rounded overflow-hidden shadow-lg max-w-sm">
        <img src="https://media.istockphoto.com/photos/text-cyberspace-futuristic-background-future-digital-technology-picture-id1374164344?b=1&k=20&m=1374164344&s=612x612&w=0&h=QwQglDvQ7AnBwxLVtgK2o-AhvEGRrMu4y2HHHfahanM=" alt="mountain" className="w-full" />
        <div className="px-6 py-10">
        <div className="font-bold text-xl mb-2 ">
          NFT Package
        </div>
        <p className="text-gray-400">Starter package started for for the Cutting edge startups like you</p>
        </div>
        <div className="grid grid-flow-col gap-5 pb-2 px-6">
        <span className="bg-white-200 rounded px-3 py-1 font-bold mb-2">Starting from</span>
        {/* <span className="bg-gray-200 rounded px-3 py-1 font-base mb-2">Starting from</span> */}
        <span className="bg-white-200 rounded px-3 py-1 font-bold mb-2">₹2000/month</span>

        </div>

       </div>
       </div>

       {/* my 2nd card component */}
       <div class="py-10">
       <div className="rounded overflow-hidden shadow-lg max-w-sm">
        <img src="https://images.pexels.com/photos/844127/pexels-photo-844127.jpeg?auto=compress&cs=tinysrgb&w=300" alt="mountain" className="w-full" />
        <div className="px-6 py-10">
        <div className="font-bold text-xl mb-2">
          NFT Package
        </div>
        <p className="text-gray-400">Starter package started for for the Cutting edge startups like you</p>
        </div>
        <div className="grid grid-flow-col gap-5 pb-2 px-6">
        <span className="bg-white-200 rounded px-3 py-1 font-bold mb-2">Starting from</span>
        {/* <span className="bg-gray-200 rounded px-3 py-1 font-base mb-2">Starting from</span> */}
        <span className="bg-white-200 rounded px-3 py-1 font-bold mb-2">₹2000/month</span>

        </div>
       </div>

       </div>
       {/* my 3rd card component */}
       <div class="py-10">
       <div className="rounded overflow-hidden shadow-lg max-w-sm">
        <img src="https://media.istockphoto.com/photos/text-cyberspace-futuristic-background-future-digital-technology-picture-id1374164344?b=1&k=20&m=1374164344&s=612x612&w=0&h=QwQglDvQ7AnBwxLVtgK2o-AhvEGRrMu4y2HHHfahanM=" alt="mountain" className="w-full" />
        <div className="px-6 py-10">
        <div className="font-bold text-xl mb-2">
          NFT Package
        </div>
        <p className="text-gray-400">Starter package started for for the Cutting edge startups like you</p>
        </div>
        <div className="grid grid-flow-col gap-5 pb-2 px-6">
        <span className="bg-white-200 rounded px-3 py-1 font-bold mb-2">Starting from</span>
        {/* <span className="bg-gray-200 rounded px-3 py-1 font-base mb-2">Starting from</span> */}
        <span className="bg-white-200 rounded px-3 py-1 font-bold mb-2">₹2000/month</span>

        </div>
       </div>

       </div>
       <div class="py-10">
       {/* my 4th card component */}

       <div className="rounded overflow-hidden shadow-lg max-w-sm">
        <img src="https://media.istockphoto.com/photos/non-fungible-token-picture-id1309739869?b=1&k=20&m=1309739869&s=612x612&w=0&h=OFv4UePlkyNYBz58o1o0NC-UOHxZeCI_x5CHickoCEw=" alt="mountain" className="w-full" />
        <div className="px-6 py-10">
        <div className="font-bold text-xl mb-2">
          NFT Package
        </div>
        <p className="text-gray-400">Starter package started for for the Cutting edge startups like you</p>
        </div>
        <div className="grid grid-flow-col gap-5 pb-2 px-6">
        <span className="bg-white-200 rounded px-3 py-1 font-bold mb-2">Starting from</span>
        {/* <span className="bg-gray-200 rounded px-3 py-1 font-base mb-2">Starting from</span> */}
        <span className="bg-white-200 rounded px-3 py-1 font-bold mb-2">₹2000/month</span>

        </div>
       </div>
       </div>
        
       </div>
       
    </div>
  );
}

export default App;
