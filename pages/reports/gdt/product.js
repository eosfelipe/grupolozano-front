import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import { call } from '../../../utils'

const ProductGDT = () => {
  const router = useRouter()
  const [contract, setContract] = useState({})
  const [prices, setPrices] = useState({})

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
  }, [])

  if (contract && prices) {
    return <div>Loading...</div>
  }
  return <div>hello world</div>
}

export default ProductGDT
