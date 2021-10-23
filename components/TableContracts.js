import { Box, Flex, Table, TableCaption, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react'
import { Fragment } from 'react'
import { searchByKey } from '../utils'

// data is array
const TableContracts = ({ data }) => {
  const { ProductRegionDetails } = searchByKey(data, 'ProductRegionDetails')
  const { details } = searchByKey(data, 'ProductSubRegionProductDetails')

  console.log(Array.isArray(details))

  return (
    <Flex>
      <Box>
        <Table variant={'simple'} size={'sm'}>
          <TableCaption color={'dark'}>Source: Global Dairy Trade</TableCaption>
          <Thead>
            <Tr>
              <Th>&nbsp;</Th>
            </Tr>
            <Tr>
              <Th>&nbsp;</Th>
            </Tr>
          </Thead>
          <Tbody>
            {Array.isArray(ProductRegionDetails) ? (
              ProductRegionDetails.map((i, idx) => (
                <Fragment key={idx}>
                  <Tr>
                    <Td fontWeight={'bold'} borderBottom={'none'}>
                      {i.ProductRegionName}
                    </Td>
                  </Tr>
                  <Tr>
                    <Td fontWeight={'bold'} borderBottom={'none'}>
                      {i.ProductSubRegions.ProductSubRegionDetails.ProductSubRegionName}
                    </Td>
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
                  <Td fontWeight={'bold'} borderBottom={'none'}>
                    {ProductRegionDetails.ProductRegionName}
                  </Td>
                </Tr>
                <Tr>
                  <Td fontWeight={'bold'} borderBottom={'none'}>
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
      </Box>
      <Box>
        <Table variant={'simple'} size={'sm'}>
          <Thead>
            <Tr>
              {data.map(i => (
                <Th key={i.ContractPeriodGUID}>{i.ContractPeriodName}</Th>
              ))}
            </Tr>
            <Tr>
              {data.map(i => (
                <Th key={i.ContractPeriodGUID}>{i.ContractMonth}</Th>
              ))}
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td borderBottom={'none'}>&nbsp;</Td>
            </Tr>
            <Tr>
              <Td borderBottom={'none'}>&nbsp;</Td>
            </Tr>
            <Tr>
              {Array.isArray(details)
                ? data.map(p => (
                    <Td key={p.ContractPeriodGUID}>
                      {p.ProductRegions.ProductRegionDetails.ProductSubRegions.ProductSubRegionDetails
                        .ProductSubRegionProducts.ProductSubRegionProductDetails[0].ProductAveragePrice.length === 0
                        ? 'n.a.'
                        : p.ProductRegions.ProductRegionDetails.ProductSubRegions.ProductSubRegionDetails
                            .ProductSubRegionProducts.ProductSubRegionProductDetails[0].ProductAveragePrice}
                    </Td>
                  ))
                : data.map(p => (
                    <Td key={p.ContractPeriodGUID}>
                      {p.ProductRegions.ProductRegionDetails.ProductSubRegions.ProductSubRegionDetails
                        .ProductSubRegionProducts.ProductSubRegionProductDetails.ProductAveragePrice.length === 0
                        ? 'n.a.'
                        : p.ProductRegions.ProductRegionDetails.ProductSubRegions.ProductSubRegionDetails
                            .ProductSubRegionProducts.ProductSubRegionProductDetails.ProductAveragePrice}
                    </Td>
                  ))}
            </Tr>
            <Tr>
              {Array.isArray(details) &&
                data.map(p => (
                  <Td key={p.ContractPeriodGUID}>
                    {p.ProductRegions.ProductRegionDetails.ProductSubRegions.ProductSubRegionDetails
                      .ProductSubRegionProducts.ProductSubRegionProductDetails[1].ProductAveragePrice.length === 0
                      ? 'n.a.'
                      : p.ProductRegions.ProductRegionDetails.ProductSubRegions.ProductSubRegionDetails
                          .ProductSubRegionProducts.ProductSubRegionProductDetails[1].ProductAveragePrice}
                  </Td>
                ))}
            </Tr>
            <Tr>
              {data.map(p => (
                <Td key={p.ContractPeriodGUID}>
                  {p.ProductRegions.ProductRegionDetails.ProductSubRegions.ProductSubRegionDetails
                    .ProductSubRegionAveragePrice.length === 0
                    ? 'n.a.'
                    : p.ProductRegions.ProductRegionDetails.ProductSubRegions.ProductSubRegionDetails
                        .ProductSubRegionAveragePrice}
                </Td>
              ))}
            </Tr>
            <Tr>
              {data.map(p => (
                <Td key={p.ContractPeriodGUID}>
                  {p.ProductRegions.ProductRegionDetails.ProductRegionAveragePrice.length === 0
                    ? 'n.a.'
                    : p.ProductRegions.ProductRegionDetails.ProductRegionAveragePrice}
                </Td>
              ))}
            </Tr>
            <Tr>
              {data.map(p => (
                <Td key={p.ContractPeriodGUID}>
                  {p.ContractPeriodAveragePublishedPrice.length === 0 ? 'n.a.' : p.ContractPeriodAveragePublishedPrice}
                </Td>
              ))}
            </Tr>
          </Tbody>
        </Table>
      </Box>
    </Flex>
  )
}

export default TableContracts
