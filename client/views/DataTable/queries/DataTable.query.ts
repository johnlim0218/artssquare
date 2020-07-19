import gql from 'graphql-tag';

export const GET_SHIPPING_DATA = gql`
  query($where: ShippingWhereInput) {
    getShippingData(where: $where) {
      orderNumber
      productName
      recipient
      phone
      cellPhone
      zipcode
      addressStreet
      address
      addressDetail
      options
      inputs
    }
  }
`

