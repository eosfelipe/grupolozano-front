import { searchByKey } from '../utils'
const TableLAC = ({ data }) => {
  // Need extract names of columns
  const rowHeader = []
  const rowBody = []
  const { ProductRegionDetails } = searchByKey(data, 'ProductRegionDetails')
  ProductRegionDetails.forEach(element => {
    rowBody.push(element.ProductRegionName)
    rowBody.push(element.ProductSubRegions.ProductSubRegionDetails.ProductSubRegionName)
    element.ProductSubRegions.ProductSubRegionDetails.ProductSubRegionProducts.ProductSubRegionProductDetails.forEach(
      item => rowBody.push(item.ProductDisplayName)
    )
    rowBody.push(element.ProductSubRegions.ProductSubRegionDetails.ProductSubRegionName + ' Average Price')
    rowBody.push(element.ProductRegionName + ' Average Price (USD/MT, FAS)')
  })
  rowBody.push('Average Price (USD / MT, FAS)')
  data.forEach(contract => {
    rowHeader.push(contract.ContractPeriodName + ' ' + contract.ContractMonth)
  })
  const colOne = rowBody.map(item => [item])
  const colTwo = rowHeader.map(item => [item])
  // colOne[i].push('test')
  data.forEach(contract => {
    if (Array.isArray(contract.ProductRegions.ProductRegionDetails)) {
      contract.ProductRegions.ProductRegionDetails.forEach(region => {
        if (
          Array.isArray(
            region.ProductSubRegions.ProductSubRegionDetails.ProductSubRegionProducts.ProductSubRegionProductDetails
          )
        ) {
          region.ProductSubRegions.ProductSubRegionDetails.ProductSubRegionProducts.ProductSubRegionProductDetails.forEach(
            subregion => {
              console.log(subregion.ProductAveragePrice)
            }
          )
        }
      })
    }
  })

  console.log(colOne)
  console.log(colTwo)
  return <div>LAC</div>
}

export default TableLAC
