import { useEffect, useState } from 'react'
import { getFirestore, doc, getDoc } from 'firebase/firestore'
import Header from '../../patterns/Header/Header'

function Home() {
  const [imgUrls, setImgUrls] = useState(null)

  const db = getFirestore()

  const docRef = doc(db, 'images', 'cars')

  useEffect(() => {
    getDoc(docRef).then((doc) => {
      const { imgUrls } = doc.data()

      setImgUrls(imgUrls)
    })

    // eslint-disable-next-line
  }, [])

  return (
    <Header />
  )
}

export default Home