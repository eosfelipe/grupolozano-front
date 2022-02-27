const useProductDetail = data => {
  if (!Array.isArray(data)) return `Error ${data} is not array`

  const productSubRegionName = new Set()
  const subRegionNameValues = []
  const detailsProducts = []
  const subRegionsDetails = []

  data.forEach(item => {
    productSubRegionName.add(item.ProductSubRegionName)
    subRegionNameValues.push('$' + item.ProductSubRegionAveragePrice)
    subRegionsDetails.push(item.ProductSubRegionProducts.ProductSubRegionProductDetails) // valid is array
  })
  for (const item of productSubRegionName) subRegionNameValues.unshift(`${item} Average Price`)

  // tomar el primer elemento para saber cuantos subproductos existen en el producto
  if (Array.isArray(subRegionsDetails[0])) {
    subRegionsDetails[0].forEach(item => {
      detailsProducts.push([item.ProductDisplayName])
    })
  } else {
    detailsProducts.push(subRegionsDetails[0]?.ProductDisplayName)
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

  return { detailsProducts, subRegionNameValues }
}

export default useProductDetail
