import { Table, TableCaption, Thead, Tbody, Th, Tr, Td } from '@chakra-ui/react'
import { separateMiles } from '../utils'

const TableGen = ({ data }) => {
  const contractName = []
  const contractMonth = []
  const contractPrice = []
  const productRegions = []
  const productSubRegions = []
  const subRegionsDetails = []

  data.forEach(contract => {
    contractName.push(Object.values(contract)[0])
    contractMonth.push(Object.values(contract)[2])
    contractPrice.push('$' + Object.values(contract)[5])
    productRegions.push(Object.values(contract)[6])
  })
  contractPrice.unshift('Average Price (USD / MT, FAS)')

  const productRegionName = new Set()
  const regionNameValues = []
  productRegions.forEach(item => {
    if (!Array.isArray(Object.values(item)[0])) {
      productRegionName.add(Object.values(item)[0].ProductRegionName)
      regionNameValues.push('$' + Object.values(item)[0].ProductRegionAveragePrice)
      productSubRegions.push(Object.values(item)[0].ProductSubRegions.ProductSubRegionDetails)
    } else {
      console.log('is array')
      Object.values(item)[0].forEach(item => {
        console.log(item)
      })
    }
  })
  for (const item of productRegionName) regionNameValues.unshift(`${item} Average Price (USD/MT, FAS)`)

  const productSubRegionName = new Set()
  const subRegionNameValues = []
  productSubRegions.forEach(item => {
    productSubRegionName.add(item.ProductSubRegionName)
    subRegionNameValues.push('$' + item.ProductSubRegionAveragePrice)
    subRegionsDetails.push(item.ProductSubRegionProducts.ProductSubRegionProductDetails) // valid is array
  })
  for (const item of productSubRegionName) subRegionNameValues.unshift(`${item} Average Price`)

  const detailsProducts = []
  // tomar el primer elemento para saber cuantos subproductos existen en el producto
  if (Array.isArray(subRegionsDetails[0])) {
    subRegionsDetails[0].forEach(item => {
      detailsProducts.push([item.ProductDisplayName])
    })
  } else {
    detailsProducts.push(subRegionsDetails[0].ProductDisplayName)
  }

  subRegionsDetails.forEach(item => {
    if (Array.isArray(item)) {
      item.forEach((subitem, index) => {
        if (subitem.ProductDisplayName === detailsProducts[index][0]) {
          detailsProducts[index].push('$' + subitem.ProductAveragePrice)
        }
      })
    } else {
      detailsProducts.push('$' + item.ProductAveragePrice)
    }
  })

  return (
    <Table variant={'simple'} size={'sm'}>
      <TableCaption color={'dark'}>
        Refer to the Explanatory Notes below for details of which sellers and products are included in each regional
        average price.
      </TableCaption>
      <Thead>
        <Tr>
          <Th></Th>
          {contractName.map((element, i) => (
            <Th key={i}>{element}</Th>
          ))}
        </Tr>
        <Tr>
          <Th></Th>
          {contractMonth.map((element, i) => (
            <Th key={i}>{element}</Th>
          ))}
        </Tr>
      </Thead>
      <Tbody>
        {detailsProducts.map(
          (element, i) =>
            Array.isArray(element) && (
              <Tr key={i}>
                {element.map((item, idx) => (
                  <Td key={idx}>{separateMiles(item)}</Td>
                ))}
              </Tr>
            )
        )}

        {<Tr>{detailsProducts.map((element, i) => !Array.isArray(element) && <Td key={i}>{element}</Td>)}</Tr>}

        <Tr>
          {subRegionNameValues.map((element, i) => (
            <Td key={i} fontWeight={'bold'}>
              {separateMiles(element)}
            </Td>
          ))}
        </Tr>
        <Tr>
          {regionNameValues.map((element, i) => (
            <Td key={i} fontWeight={'bold'}>
              {separateMiles(element)}
            </Td>
          ))}
        </Tr>
        <Tr>
          {contractPrice.map((element, i) => (
            <Td key={i} fontWeight={'bold'}>
              {separateMiles(element)}
            </Td>
          ))}
        </Tr>
      </Tbody>
    </Table>
  )
}

export default TableGen
