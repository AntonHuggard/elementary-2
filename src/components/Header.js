


export default function Header() {

    function handleShowMenu() {
        const side_menu = document.getElementById('side-menu');
        side_menu.classList.remove('hide-menu');
    }

    return (
        <header>
            <h1><div className='opt-title'>Searchable</div> periodic table</h1>
            <span 
                id='settings-btn' 
                onClick={handleShowMenu} 
                className='unselectable'
                >settings</span>
        </header>
    )
}