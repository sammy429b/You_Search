import React from 'react'
const App = () => {
  return (
    <>
      <div class="flex justify-between text-sm text-gray-700">
    <div class="flex items-center">
        <a class="block p-3">About</a>
        <a class="block p-3">Store</a>
    </div>
    <div class="flex items-center">
        <a class="block p-3">Gmail</a>
        <a class="block p-3">Images</a>
        <img class="rounded-full block py-3 px-4" src="https://lh3.googleusercontent.com/-qKDxtPVf3MA/AAAAAAAAAAI/AAAAAAAAAAA/ACHi3rdxXjFhEvxN4q1JUHeo4xlUIanULA.CMID/s64-c/photo.jpg" />
    </div>
</div>

<div class="flex justify-center pt-20">
    <div>
        <img class="w-2/3 ml-auto mr-auto mb-6" src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" />
        <div class="flex border border-gray-200 rounded-full p-4 shadow text-xl">
            <div>🕵️‍</div>
            <input type="text" class="w-full outline-none px-3" />
            <div>🎤</div>
        </div>
        <div class="mt-8 text-center">
            <button class="mr-3 bg-gray-200 border border-gray-300 py-3 px-4 rounded hover:bg-gray-400 hover:border-gray-500">Google Search</button>
            <button class="bg-gray-200 border border-gray-300 py-3 px-4 rounded hover:bg-gray-400 hover:border-gray-500">I'm Feeling Lucky</button>
        </div>
    </div>
</div>

<div class="fixed bottom-0 bg-gray-200 border-t w-full flex justify-between text-gray-600 text-xs">
    <div class="flex">
        <a class="block p-3">Advertising</a>
        <a class="block p-3">Business</a>
        <a class="block p-3">How Search Works</a>
    </div>
    <div class="flex">
        <a class="block p-3">Privacy</a>
        <a class="block p-3">Terms</a>
        <a class="block p-3">Settings</a>
    </div>
</div>
    </>
  )
}

export default App