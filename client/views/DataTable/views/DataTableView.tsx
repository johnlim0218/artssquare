import * as React from 'react';
import { IProps } from '../interface/DataTable.interface';
import Table from '../../../components/Table';

const DataTableView: React.FC<IProps> = ({
  data,
  loading,
}) => {

  return(
    <div>
      {!loading &&
        <Table
          headData={[
            <div>주문번호</div>,
            <div>상품명</div>,
            <div>받는사람</div>,
            <>
              <div>전화</div>
              <div>휴대전화</div>
            </>,
            <div>주소</div>,
            <div>옵션</div>,
            <div>세부사항</div>
          ]}

          bodyData={
            data.map((dataValue: any) => ([
              <div>{dataValue.orderNumber}</div>,
              <div>{dataValue.productName}</div>,
              <div>{dataValue.recipient}</div>,
              <>
                <div>{dataValue.phone}</div>
                <div>{dataValue.cellPhone}</div>
              </>,
              <>
                <div>{dataValue.zipcode}</div>
                <div>{dataValue.addressStreet}</div>
                <div>{dataValue.address}</div>
                <div>{dataValue.addressDetail}</div>
              </>,
              <>
                {dataValue.options.map((optionValue: string) => (
                    <>
                      <div key={optionValue}>
                        {optionValue}
                      </div>
                    </>
                  ))}
              </>,
              <>
                {dataValue.inputs.map((inputValue:string) => (
                  <>
                    <div key={inputValue}>
                      {inputValue}
                    </div>
                  </>
                ))}
              </>
            ]))
          }
        />
      }
    </div>
  )
}

export default DataTableView;