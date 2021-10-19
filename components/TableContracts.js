import { Table, TableCaption, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/table'
import { Fragment } from 'react'
import { searchByKey } from '../utils'

// data is array
const TableContracts = ({ data }) => {
  const { ProductRegionDetails } = searchByKey(data, 'ProductRegionDetails')
  console.log(ProductRegionDetails)

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
        {Array.isArray(ProductRegionDetails) ? (
          ProductRegionDetails.map((i, idx) => (
            <Fragment key={idx}>
              <Tr>
                <Td fontWeight={'bold'}>{i.ProductRegionName}</Td>
              </Tr>
              <Tr>
                <Td fontWeight={'bold'}>{i.ProductSubRegions.ProductSubRegionDetails.ProductSubRegionName}</Td>
              </Tr>
              {Array.isArray(
                i.ProductSubRegions.ProductSubRegionDetails.ProductSubRegionProducts.ProductSubRegionProductDetails
              ) ? (
                <Fragment>
                  {i.ProductSubRegions.ProductSubRegionDetails.ProductSubRegionProducts.ProductSubRegionProductDetails.map(
                    (j, idx) => (
                      <Tr key={idx}>
                        <Td>{j.ProductDisplayName}</Td>
                      </Tr>
                    )
                  )}
                  <Tr>
                    <Td fontWeight={'bold'}>
                      {i.ProductSubRegions.ProductSubRegionDetails.ProductSubRegionName} Average Price
                    </Td>
                  </Tr>
                  <Tr>
                    <Td fontWeight={'bold'}>{i.ProductRegionName}Average Price (USD/MT, FAS)</Td>
                  </Tr>
                </Fragment>
              ) : (
                <Fragment>
                  <Tr>
                    <Td>
                      {
                        i.ProductSubRegions.ProductSubRegionDetails.ProductSubRegionProducts
                          .ProductSubRegionProductDetails.ProductDisplayName
                      }
                    </Td>
                  </Tr>
                  <Tr>
                    <Td fontWeight={'bold'}>
                      {i.ProductSubRegions.ProductSubRegionDetails.ProductSubRegionName} Average Price
                    </Td>
                  </Tr>
                  <Tr>
                    <Td fontWeight={'bold'}>{i.ProductRegionName} Average Price (USD/MT, FAS)</Td>
                  </Tr>
                </Fragment>
              )}
            </Fragment>
          ))
        ) : (
          <>
            <Tr>
              <Td fontWeight={'bold'}>{ProductRegionDetails.ProductRegionName}</Td>
            </Tr>
            <Tr>
              <Td fontWeight={'bold'}>
                {ProductRegionDetails.ProductSubRegions.ProductSubRegionDetails.ProductSubRegionName}
              </Td>
            </Tr>
            {Array.isArray(
              ProductRegionDetails.ProductSubRegions.ProductSubRegionDetails.ProductSubRegionProducts
                .ProductSubRegionProductDetails
            ) ? (
              ProductRegionDetails.ProductSubRegions.ProductSubRegionDetails.ProductSubRegionProducts.ProductSubRegionProductDetails.map(
                (i, idx) => (
                  <Tr key={idx}>
                    <Td>{i.ProductDisplayName}</Td>
                  </Tr>
                )
              )
            ) : (
              <Tr>
                <Td>
                  {
                    ProductRegionDetails.ProductSubRegions.ProductSubRegionDetails.ProductSubRegionProducts
                      .ProductSubRegionProductDetails.ProductDisplayName
                  }
                </Td>
              </Tr>
            )}
            <Tr>
              <Td fontWeight={'bold'}>
                {ProductRegionDetails.ProductSubRegions.ProductSubRegionDetails.ProductSubRegionName} Average Price
              </Td>
            </Tr>
            <Tr>
              <Td fontWeight={'bold'}>{ProductRegionDetails.ProductRegionName} Average Price (USD/MT, FAS)</Td>
            </Tr>
          </>
        )}
        <Tr>
          <Td fontWeight={'bold'} fontSize={'md'}>
            Average Price (USD / MT, FAS)
          </Td>
        </Tr>
      </Tbody>
    </Table>
  )
}

export default TableContracts
