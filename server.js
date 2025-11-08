const http = require("http")          // Importing http module

const server = http.createServer((req, res) => {               // Creating request and response server

    if (req.url === '/home'){            // Routing to Home Page
        res.writeHead(200, {'Content-Type': 'text/html'})      //Writting the content type for including HTML contents 
        res.write(`                                            
            <!DOCTYPE html>
            <html>
            <head>
                <title>Home</title>
                <script src="https://cdn.tailwindcss.com"></script>
            </head>
            <body>
            <header class="absolute top-0 left-0 w-full flex justify-between items-center px-10 py-6 bg-blue-100 backdrop-blur-sm shadow-sm mb-24">
            <h1 class="text-2xl font-bold text-blue-700
            hover:text-blue-500 transition-all duration-300">Laundry Success</h1>

            <nav class="space-x-8 text-lg text-xl">

              <a href="/home" class="text-blue-600
              hover:border-b border-blue-400 px-4 py-2 rounded-lg
              hover:transition-all driation-100 ease-in-out">Home</a>

              <a href="/about" class="text-blue-600
              hover:border-b border-blue-400 px-4 py-2 rounded-lg
              hover:transition-all driation-100 ease-in-out">About</a>

              <a href="/contact" class="text-blue-600 
              hover:border-b border-blue-400 px-4 py-2 rounded-lg
              hovertransition-all driation-100 ease-in-out">Contact</a>

            </nav>
            <a href="/contact"
            class="text-2xl font-bold text-blue-400 border border-blue-400 px-4 py-2 rounded-lg 
            hover:bg-blue-500 hover:text-white transition-all duration-300 ease-in-out
            cursor-pointer">Get in Touch</a>
            </header>
            
            <section
            class="bg-cover bg-center bg-no-repeat h-[700px] flex flex-col items-center justify-center text-center relative mt-32"
            style="background-image: url('https://img.freepik.com/free-vector/self-service-laundry-equipment-accessories-cartoon-background-composition-with-washer-folded-clean-bedding-hanging-shirts-vector-illustration_1284-67589.jpg?semt=ais_hybrid&w=1600&q=100');"
            >
              <div class="relative z-10">
                <h2 class="text-5xl font-bold drop-shadow-lg mb-4">
                Revitalize Your Clothes with Expert Laundry Services!
                </h2>

                <p class="text-2xl mb-6 drop-shadow-lg text-bold
                cursor-pointer">
                Fresh Clothes, Fresh Confidence <br>Every Time!
                </p>

                <a href="/about" class="border border-white px-6 py-3 rounded hover:bg-white 
                hover:text-blue-700 transition text-white">Learn More</a>
              </div>
            </section>
            </body>
            `)
        res.end()  // ends the Routing for the condition
    }
    else if (req.url === '/about'){             // Routing to the About page
        res.writeHead(200, {'Content-Type': 'text/html'})
        res.write( `
            <!DOCTYPE html>
            <html>
            <head>
                <title>About</title>
                <script src="https://cdn.tailwindcss.com"></script>
            </head>
            <body>
              <header class="absolute top-0 left-0 w-full flex items-center px-10 py-6 bg-blue-100 backdrop-blur-sm shadow-sm mb-24">
              <h1 class="text-2xl font-bold text-blue-700 ml-[150px]
              hover:text-blue-500 transition-all duration-300">Laundry Success</h1>

                <nav class="space-x-8 text-lg text-xl ml-[1000px]">

                  <a href="/home" class="text-blue-600
                  hover:border-b border-blue-400 px-4 py-2 rounded-lg
                  hover:transition-all duriation-100 ease-in-out">Home</a>

                  <a href="/about" class="text-blue-600
                  hover:border-b border-blue-400 px-4 py-2 rounded-lg
                  hover:transition-all duriation-100 ease-in-out">About</a>

                  <a href="/contact" class="text-blue-600 
                  hover:border-b border-blue-400 px-4 py-2 rounded-lg
                  hover:transition-all duriation-100 ease-in-out">Contact</a>

                </nav>
              </header>
              
              <section class="bg-cover bg-center bg-no-repeat sm:h-[900px] md:h-[800px] lg:h-[600px] bg-blue-200 mt-32 ">
              <div class="flex justify-between items-center">

                <div class="relative z-10 flex flex-col ">
                  <h2 class="text-3xl font-bold drop-shadow-lg mb-4 text-left ml-[300px] mt-[200px]"> 

                  <span class = " block text-4xl text-blue-500 ">Revitalize Your Clothes</span>with Expert Laundry Services!</h2>

                  <p class="text-2xl mb-6 drop-shadow-lg text-bold ml-[300px]">We make your laundry experience effortless and efficient.
                  <br> From pickup to delivery, we ensure spotless results with a personal <br> touch - saving you time, energy, and hassle. 
                  <br> Enjoy fresh, clean clothes without lifting a finger!</p>
                  <button href="/contact"
                  class="text-2xl font-bold text-blue-400 border border-blue-400 w-[200px] px-4 py-2 rounded-lg ml-[300px]
                  hover:bg-blue-500 hover:text-white transition-all duration-300 ease-in-out
                  cursor-pointer">Get in Touch</button>
                </div>
                <div class="md:w-1/2 flex justify-center mt-8 md:mt-0">
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWJAF9pQT4AwKcUQNAtLDeuMbXq_t-UA9s2Q&s" 
                      alt="Laundry Illustration" 
                      class="rounded-lg shadow-lg w-[65%] h-auto mt-[100px]">
                </div>
              </div>
              </section>
            </body>
            `)
            res.end()
    }
    else if (req.url === '/contact'){           // Routing to the Contact page
        res.writeHead(200, {'Content-Type': 'text/html'})
        res.write(`
           <!DOCTYPE html>
            <html>
            <head>
                <title>Contact</title>
                <script src="https://cdn.tailwindcss.com"></script>
            </head>
            <body>
              <header class="w-full bg-blue-100 shadow-sm flex flex-col md:flex-row md:items-center md:justify-between px-6 md:px-12 py-4 space-y-3 md:space-y-0">
              <h1 class="text-2xl font-bold text-blue-700 hover:text-blue-500 transition-all duration-300 text-center md:text-left">
                Laundry Success
              </h1>

              <nav class="flex justify-center md:justify-end flex-wrap gap-4 md:gap-8 text-lg font-semibold">
                <a href="/home" class="text-blue-600 
                hover:border-b-2 border-blue-400 px-2 md:px-4 py-2 rounded-lg transition-all">Home</a>
                
                <a href="/about" class="text-blue-600 
                hover:border-b-2 border-blue-400 px-2 md:px-4 py-2 rounded-lg transition-all">About</a>

                <a href="/contact" class="text-blue-600 
                hover:border-b-2 border-blue-400 px-2 md:px-4 py-2 rounded-lg transition-all">Contact</a>
              </nav>
            </header>


              <section class="pt-24 md:pt-32 px-4 md:px-12 pb-16 bg-blue-500 min-h-screen flex flex-col items-center">

              <div class="bg-blue-300 w-full max-w-5xl mx-auto border-4 border-blue-500 rounded-2xl px-6 md:px-12 py-10 shadow-md">
                <h2 class="text-3xl font-bold text-blue-900 mb-10 text-center">
                  Get In Touch With Us Now!
                </h2>

                <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
                  <div class="bg-blue-50 rounded-2xl p-6 md:p-10 text-center text-blue-900 font-semibold shadow-md hover:shadow-xl transition">
                    <h3 class="text-2xl font-bold mb-3">Call Us On</h3>
                    <p class="text-lg">+91 98423 43344</p>
                  </div>

                  <div class="bg-blue-50 rounded-2xl p-6 md:p-10 text-center text-blue-900 font-semibold shadow-md hover:shadow-xl transition">
                    <h3 class="text-2xl font-bold mb-3">Email</h3>
                    <p class="text-lg">laundrysuccess@gmail.com</p>
                  </div>

                  <div class="bg-blue-50 rounded-2xl p-6 md:p-10 text-center text-blue-900 font-semibold shadow-md hover:shadow-xl transition">
                    <h3 class="text-2xl font-bold mb-3">Location</h3>
                    <p class="text-lg">
                      518, Rhythm Plaza,<br>
                      Amar Javan Circle,<br>
                      Nikol, Ahmedabad, Gujarat - 382350
                    </p>
                  </div>

                  <div class="bg-blue-50 rounded-2xl p-6 md:p-10 text-center text-blue-900 font-semibold shadow-md hover:shadow-xl transition">
                    <h3 class="text-2xl font-bold mb-3">Working Hours</h3>
                    <p class="text-lg">Monday to Saturday</p>
                    <p class="text-lg">09:00 AM - 06:00 PM</p>
                  </div>
                </div>
              </div>
            </section>
            </body>
            </html> 
            `)
            res.end()
    }
    else{                                      // 404 ERROR : not existed
        res.writeHead(404, {'Content-Type': 'text/html'})
        res.write(`
           <!DOCTYPE html>
            <html>
            <head>
                <title>Contact</title>
                <script src="https://cdn.tailwindcss.com"></script>
            </head>
            <body class="justify-center text-bold text-2xl text-center text-red-500 items center">
              <h2>404 Error: Page Not Found</h2>
            </body>
            </html>
          `)
    }
})

PORT = 3000 //PORT number

server.listen(PORT, () =>{
    console.log(`Server runnig at http://localhost:${PORT}/home`)       // Printing localhost with PORT
})  