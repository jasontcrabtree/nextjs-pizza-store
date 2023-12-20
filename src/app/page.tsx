// async function getAllPizza() {
//   'use server'

//   try {
//     const response = await fetch('http://localhost:5246/', {})
//     const data = await response.json();

//     return data;
//   } catch (error) {
//     throw new Error("Error")
//   }
// }

const Home = async () => {
  // const pizza = await getAllPizza();

  const pizza = {
    message: "Coming soon"
  }

  if (pizza) {
    console.log('pizza', pizza);
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <p>{pizza.message}</p>
    </main>
  )
}

export default Home