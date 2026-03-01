import MenuItem from '../assets/components/MenuItem.jsx'
import CartItem from '../assets/components/CartItem.jsx'
function MenuPages(){
    return(
        <>
        <div className="min-h-screen relative flex flex-col">
        {/*anh nen */}
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{backgroundImage :"url('/images/MainImage.png')"}}
        ></div>
        {/*menu page */}
        <div className="menu-container relative z-10 flex flex-col h-screen">
            <CartItem></CartItem>
            <div className="basis-[35%] flex justify-center">
                <input type="text"
                placeholder="Tìm Kiếm..."
                className='w-[80%] h-11 rounded-full bg-black/50 text-white pl-2'
                />
            </div>
            {/*food list */}
            <div className="Menu-container basis-[50%] bg-white rounded-t-4xl px-4 py-4 flex flex-col overflow-hidden">
            <div className='food-list left-0 right-0 '>
                <h1 className='font-title text-2xl'>Menu</h1>
                <div className='List flex justify-between items-center py-2 px-2 font-bold bg-black/10 text-white rounded-2xl'>
                    <p>Ăn vặt</p>
                    <p>Lai rai</p>
                    <p>Nước ngọt</p>
                </div>
            </div>
            <div className='food-items w-full overflow-y-auto'>
            <MenuItem></MenuItem>
                <MenuItem></MenuItem>
                <MenuItem></MenuItem>
                <MenuItem></MenuItem>
            </div>
            </div>
        </div>
        </div>
        </>
    )
}
export default MenuPages