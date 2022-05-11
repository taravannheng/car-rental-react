import { useEffect, useState } from 'react'
import { getFirestore, doc, getDoc } from 'firebase/firestore'
import Header from '../../patterns/Header/Header'
import ProductCard from '../../components/Cards/ProductCard'

function Home() {
  // firestore rename: 
  // collection: images -> products
  // document: cars -> cars
  // field: imgUrls -> carDetails 

  const [cars, setCars] = useState(null)

  const db = getFirestore()

  const docRef = doc(db, 'images', 'cars')

  useEffect(() => {
    getDoc(docRef).then((doc) => {
      const { imgUrls } = doc.data()

      setCars(imgUrls)
    })

    // eslint-disable-next-line
  }, [])

  return (
    <>
      <Header />
      <main>
        <div className="product-container">
          {cars != null ? cars.map(car => <ProductCard productDetails={car} key={car.id}/>) : <p>There is no product at the moment</p>}
        </div>
      </main>
    </>
  )
}

export default Home