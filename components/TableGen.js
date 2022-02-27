import { Table, TableCaption, Thead, Tbody, Th, Tr, Td } from '@chakra-ui/react'
import useProductDetail from '../hooks/useProductDetail'
import { separateMiles } from '../utils'

const TableGen = ({ data }) => {
  const contractName = []
  const contractMonth = []
  const contractPrice = []
  const productRegions = []
  const productSubRegions = []

  data.forEach(contract => {
    contractName.push(Object.values(contract)[0])
    contractMonth.push(Object.values(contract)[2])
    contractPrice.push('$' + Object.values(contract)[5])
    productRegions.push(Object.values(contract)[6])
  })
  contractPrice.unshift('Average Price (USD / MT, FAS)')

  const productRegionName = new Set()
  const regionNameValues = []
  // is array add two new vars
  const productRegionName2 = new Set()
  const regionNameValues2 = []
  const productSubRegions2 = []

  productRegions.forEach(item => {
    if (!Array.isArray(Object.values(item)[0])) {
      productRegionName.add(Object.values(item)[0].ProductRegionName)
      regionNameValues.push('$' + Object.values(item)[0].ProductRegionAveragePrice)
      productSubRegions.push(Object.values(item)[0].ProductSubRegions.ProductSubRegionDetails)
    } else {
      productRegionName.add(Object.values(item)[0][0].ProductRegionName)
      regionNameValues.push('$' + Object.values(item)[0][0].ProductRegionAveragePrice)
      productSubRegions.push(Object.values(item)[0][0].ProductSubRegions.ProductSubRegionDetails)

      productRegionName2.add(Object.values(item)[0][1].ProductRegionName)
      regionNameValues2.push('$' + Object.values(item)[0][1].ProductRegionAveragePrice)
      productSubRegions2.push(Object.values(item)[0][1].ProductSubRegions.ProductSubRegionDetails)
    }
  })
  for (const item of productRegionName) {
    regionNameValues.unshift(`${item} Average Price (USD/MT, FAS)`)
  }
  const { detailsProducts, subRegionNameValues } = useProductDetail(productSubRegions)

  let productS
  if (productRegionName2.size === 1) {
    for (const item of productRegionName2) {
      regionNameValues2.unshift(`${item} Average Price (USD/MT, FAS)`)
    }
    productS = useProductDetail(productSubRegions2)
  }

  if (!productS) {
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

          {
            <Tr>
              {detailsProducts.map(
                (element, i) => !Array.isArray(element) && <Td key={i}>{separateMiles(element)}</Td>
              )}
            </Tr>
          }

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
  } else {
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

          {
            <Tr>
              {detailsProducts.map(
                (element, i) => !Array.isArray(element) && <Td key={i}>{separateMiles(element)}</Td>
              )}
            </Tr>
          }

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

          {productS.detailsProducts &&
            productS.detailsProducts.map(
              (element, i) =>
                Array.isArray(element) && (
                  <Tr key={i}>
                    {element.map((item, idx) => (
                      <Td key={idx}>{separateMiles(item)}</Td>
                    ))}
                  </Tr>
                )
            )}

          {
            <Tr>
              {productS.detailsProducts &&
                productS.detailsProducts.map(
                  (element, i) => !Array.isArray(element) && <Td key={i}>{separateMiles(element)}</Td>
                )}
            </Tr>
          }
          <Tr>
            {productS.subRegionNameValues.map((element, i) => (
              <Td key={i} fontWeight={'bold'}>
                {separateMiles(element)}
              </Td>
            ))}
          </Tr>

          <Tr>
            {regionNameValues2 &&
              regionNameValues2.map((element, i) => (
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
}

export default TableGen
