export const bitcoinService = {
  getRate,
}

async function getRate() {
  const apiUrl = 'https://blockchain.info/tobtc?currency=USD&value=1'

  try {
    const response = await fetch(apiUrl)

    if (!response.ok) {
      throw new Error('Network response was not ok')
    }

    const data = await response.json()
    return data
  } catch (error) {
    console.error('There was a problem fetching data:', error)
    throw error
  }
}

;(async () => {
  try {
    const bitcoinRate = await bitcoinService.getRate()
    console.log('Bitcoin rate:', bitcoinRate)
  } catch (error) {
    console.error('Error getting Bitcoin rate:', error)
  }
})()
