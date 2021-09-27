import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import DarkOverlay from '../../../components/DarkOverlay'
import Navbar from '../../../components/Navbar'
import { call } from '../../../utils'

const ProductGDT = () => {
  const router = useRouter()
  const [contract, setContract] = useState({})
  const [prices, setPrices] = useState({})
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (router.query.eventId === undefined) {
      return router.push('/reports/gdt')
    }
  }, [])

  useEffect(async () => {
    const urlContract = `https://s3.amazonaws.com/www-production.globaldairytrade.info/results/${router.query.eventId}/product_group_${router.query.pgc}.json`
    const urlPrices = `https://s3.amazonaws.com/www-production.globaldairytrade.info/results/${router.query.eventId}/product_group_winning_prices_5_years_${router.query.pgc}.json`
    setContract(await call(urlContract))
    setPrices(await call(urlPrices))
    setTimeout(() => setLoading(false), 5000)
  }, [])

  if (loading) {
    return <DarkOverlay loading={loading} />
  }
  return (
    <>
      <Navbar color={1} />
    </>
  )
}

export default ProductGDT
