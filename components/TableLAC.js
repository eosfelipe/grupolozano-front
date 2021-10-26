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
  console.log(rowHeader)
  console.log(rowBody)
  return <div>LAC</div>
}

export default TableLAC
