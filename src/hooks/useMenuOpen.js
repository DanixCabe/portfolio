
import { useEffect, useState } from 'react';

export const useMenuOpen = () => {
    
    const [changeMobMenu, setChangeMobMenu] = useState(false)


    const toggleMenu = () => {
        setChangeMobMenu(!changeMobMenu)
    }

    const toggleActive = ({target}) =>{
        const menuOptions = document.querySelectorAll('.menu-option')
        menuOptions.forEach(element => {
            element.classList.remove('active');
            (element.getAttribute('data-id') === target.getAttribute('data-id')) && element.classList.toggle('active');
        });

    }


    useEffect( () =>{
        
    }, [] ) 

    return{
        changeMobMenu,
        toggleMenu,
        toggleActive,
    }
}

