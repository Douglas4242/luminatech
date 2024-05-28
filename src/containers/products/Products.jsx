import React from 'react'
import './products.css'
import { Product } from '../../components'
import solarPannel from '../../assets/solarPannel.jpg'
import energyStorage from '../../assets/energyStorage.jpeg'
import LED from '../../assets/LED.jpg'
import waterSave from '../../assets/waterSave.jpg'

const Products = () => {
    return (
        <div className='lt__products section__margin section__padding' id='products'>
            <div className='lt__products-heading'>
                <h1>Nossas principais categorias de produtos</h1>
                <p>Empoderando um futuro brilhante, juntos</p>
            </div>
            <div className='lt__products-product'>
                <Product title="Painéis Solares"
                    text="Painéis solares eficientes e duráveis, fabricados com tecnologia avançada, para uso residencial e empresarial."
                    image={solarPannel} />
                <Product title="Sistemas de Armazenamento de Energia"
                    text="Sistemas de baterias de alta capacidade para armazenar energia solar, garantindo energia contínua e sustentável."
                    image={energyStorage} />
                <Product title="Iluminação LED Eficiente"
                    text="Luminárias LED eficientes para substituir lâmpadas convencionais, oferecendo economia de energia e longa vida útil."
                    image={LED} />
                <Product title="Dispositivos de Economia de Água"
                    text="Dispositivos para reduzir o consumo de água, como chuveiros de baixo fluxo e torneiras com sensores, promovendo sustentabilidade."
                    image={waterSave} />

            </div>
        </div>
    )
}

export default Products