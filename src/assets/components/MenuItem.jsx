import {Star} from 'lucide-react'
function MenuItem(){
    return(
        <div className="Item-container flex justify-between items-center gap-4">
            <div className="flex-1">
                <img className="rounded-2xl" src="/images/MainImage.png" alt="" />
            </div>
            <div className="flex-2">
                <p>Bánh Tráng Mắm Ruốc</p>
                <div className='Ponit flex'>
                    <Star className='text-yellow-300'></Star>
                    <p>5.0</p>
                </div>
                <button className='bg-orange-400 rounded-2xl px-2 font-bold text-white'>Add To Cart</button>
            </div>
            <div className="flex-1 text-center">10.000</div>
        </div>
    )
}
export default MenuItem