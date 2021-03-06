import { Row, Column, Button, Title3 } from '../../styles/styled'
import LittleCard from './LittleCard'
import { AvailableProps } from '../../Interface/Interface'

const test = [
  <LittleCard key={1} />,
  <LittleCard key={2} />,
  <LittleCard key={3} />,
  <LittleCard key={4} />,
]

const Available = ({ title }: AvailableProps): JSX.Element => {
  return (
    <>
      <Row position={'center'}>
        <Column xs={12} sm={12} md={12} lg={12} xl={12} xxl={0}>
          <Title3>{title}</Title3>
        </Column>
      </Row>
      {test.map((component, index) => {
        return (
          <Row key={index}>
            <Column xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
              {component}
            </Column>
          </Row>
        )
      })}
      <Row>
        <Column xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
          <Button>test</Button>
        </Column>
      </Row>
    </>
  )
}

export default Available
