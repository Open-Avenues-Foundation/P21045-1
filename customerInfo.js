const customers = [{
  firstName: '',
  lastName: '',
  age: [],
  email: '',
  city: '',
  zipCode: '',
  phoneNumber: '',
  company: ''

}]

const purchases = [{
  pastBuys: [{
    itemType: [''],
    itemName: [''],
    itemQuantity: [],
    itemPrice: [],
  }],
}, {
  saleIncentives: [{
    incentivizedItem: '',
    incentiveType: ['Coupon', 'Percent off', '2 ofr 1 Deal', 'Sale']

  }],
}]


module.exports = {
  customers,
  purchases
}
