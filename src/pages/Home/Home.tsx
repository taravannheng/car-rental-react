import { useEffect, useState } from 'react'
import { getFirestore, doc, getDoc } from 'firebase/firestore'
import Header from '../../patterns/Header/Header'
import ProductCard from '../../components/Cards/ProductCard'

const Home = () => {
  // firestore rename: 
  // collection: images -> products
  // document: cars -> cars
  // field: imgUrls -> carDetails 

  const [cars, setCars] = useState([])

  const db = getFirestore()

  const docRef = doc(db, 'images', 'cars')

  useEffect(() => {
    getDoc(docRef).then((doc) => {
      const { imgUrls } = doc.data()

      setCars(() => (imgUrls))
    })

    // eslint-disable-next-line
  }, [])

  return (
    <>
      <Header />
      <main className='home'>
        <div className="product-container">
          {cars != null ? cars.map(car => <ProductCard productDetails={car} key={car.id}/>) : <p>Loading...</p>}
        </div>
      </main>
    </>
  )
}

export default Home