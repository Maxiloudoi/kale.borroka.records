import { useEffect, useState } from 'react'
import { AlbumProps } from '../../Interface/Interface'
import {
  Card,
  CardBody,
  CardButton,
  CardIcon,
  CardImg,
  CardPrice,
  CardSubtitle,
  CardTitle,
  CardTop,
  Ribbon,
  Overlay,
} from '../../styles/card'

const CardArticle = ({ Album, Price, Format }: AlbumProps): JSX.Element => {
  const { name, folder, kbrProd, Artist } = Album
  const [img, setImg] = useState('/img/vinyl.svg')
  const price = Price.price / 100 + '€'

  useEffect(() => {
    const { name } = Format
    if (name === 'CD') {
      setImg('/img/cd.svg')
    }
    if (name === 'TAPE') {
      setImg('/img/tape.svg')
    }
  }, [Format])

  return (
    <div style={{ justifyItems: 'center' }}>
      <Card>
        {kbrProd && (
          <Overlay>
            <Ribbon>KBR#01</Ribbon>
          </Overlay>
        )}
        <CardTop>
          <CardImg src={folder} alt={name} />
        </CardTop>
        <CardBody>
          <CardTitle>{Artist.name}</CardTitle>
          <CardSubtitle fontSize={18}>{name}</CardSubtitle>
          <CardIcon src={img} left={45} />
          <CardPrice>{price}</CardPrice>
          <CardButton bg={'white'}>Details</CardButton>
          <CardButton left={185} color={'white'} border={'none'}>
            Panier
          </CardButton>
        </CardBody>
      </Card>
    </div>
  )
}

export default CardArticle
