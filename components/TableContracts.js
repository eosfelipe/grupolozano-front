import { useState } from 'react'
import { Table, TableCaption, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/table'

// data is array
const TableContracts = ({ data }) => {
  const [col1, setCol1] = useState([])
  const [first] = data
  const unique = []
  first.ProductRegions.ProductRegionDetails.forEach(i => {
    unique.push(i.ProductRegionName)
    unique.push(i.ProductSubRegions.ProductSubRegionDetails.ProductSubRegionName)
    i.ProductSubRegions.ProductSubRegionDetails.ProductSubRegionProducts.ProductSubRegionProductDetails.forEach(j =>
      unique.push(j.ProductDisplayName)
    )
  })
  console.log(first)

  return (
    <Table variant={'simple'} size={'sm'}>
      <TableCaption color={'dark'}>Source: Global Dairy Trade</TableCaption>
      <Thead>
        <Tr>
          <Th></Th>
          {data.map(i => (
            <Th key={i.ContractPeriodGUID}>
              {i.ContractPeriodName} {i.ContractMonth}
            </Th>
          ))}
        </Tr>
      </Thead>
      <Tbody>
        {unique.map((label, index) => (
          <Tr key={index}>
            <Td>{label}</Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  )
}

export default TableContracts
