export const userService = {
  getUser,
}

function getUser() {
  let user

  return (user = {
    name: 'Puki Ben David',
    balance: 100,
    transactions: [],
  })
}
