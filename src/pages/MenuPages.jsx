
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
            <div className="basis-[15%]">hah</div>
            <div className="basis-[35%]">
                <input type="text"
                placeholder="nhap mon an"
                />
            </div>
            <div className="basis-[50%] bg-white rounded-t-4xl">
            hello
            </div>
        </div>
        </div>
        </>
    )
}
export default MenuPages