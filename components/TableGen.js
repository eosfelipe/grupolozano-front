const TableGen = ({ data }) => {
  const contractName = []
  const contractMonth = []
  const contractPrice = []
  const productRegions = []

  data.forEach(contract => {
    contractName.push(Object.values(contract)[0])
    contractMonth.push(Object.values(contract)[2])
    contractPrice.push(Object.values(contract)[5])
    productRegions.push(Object.values(contract)[6])
  })

  productRegions.forEach(details => {
    console.log(Object.values(details))
    // console.log(Object.values(details)[0].ProductRegionName)
    // console.log(Object.values(details)[0].ProductRegionAveragePrice)
  })

  return <div></div>
}

export default TableGen
