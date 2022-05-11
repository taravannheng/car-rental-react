import { useEffect, useState } from 'react'
import { getFirestore, doc, getDoc } from 'firebase/firestore'
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
    <ProductCard />
  )
}

export default Home