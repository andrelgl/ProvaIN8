import indexImage from '../../assets/images/index-image.jpg'
import indexImageMobile from '../../assets/images/index-image-mobile.jpg'
import rodapeDesktop from '../../assets/images/rodape-desktop.jpg'
import rodapeMobile from '../../assets/images/rodape-mobile.jpg'

import logoIno8 from '../../assets/logo/logo-in8-dev.svg'

import hamburguerWhite from '../../assets/icons/hamburguer-aberto.svg'
import hamburguerBlue from '../../assets/icons/hamburguer-fechado.svg'

const Variables = {

    //cores padrões
    colors: {
        tableLine: '#29abe2',
        tableContent: '#808080',
        tableNumber: '#012d51',
        tableColunmTitle: '#012d51',

        buttonRegisterText: '#29abe2',
        buttonRegisterBackground: '#012d51',

        registerBackground: '#29abe2',
        registerListTitle: '#29abe2'
    },

    //imagens padrões
    images: {
        indexImage: indexImage,
        indexImageMobile: indexImageMobile,
        rodapeDesktop: rodapeDesktop,
        rodapeMobile: rodapeMobile,
    },
    //icones usados
    icons: {
        toggleOpenedIcon: hamburguerWhite,
        toggleClosedIcon: hamburguerBlue,
    },

    //logos padrões
    logos: {
        in8: logoIno8
    }
}

export default Variables
