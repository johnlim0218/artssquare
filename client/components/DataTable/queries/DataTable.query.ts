import gql from 'graphql-tag';

export const GET_SHIPPING_DATA = gql`
  query($where: ShippingWhereInput) {
    getShippingData(where: $where) {
      productName
      recipient
      address
      date
    }
  }
`

