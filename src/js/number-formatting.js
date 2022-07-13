export const numberFormats = {
  USD: Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0
  }),
  
  standard: Intl.NumberFormat("en-US", {
    minimumFractionDigits: 0
  })
}