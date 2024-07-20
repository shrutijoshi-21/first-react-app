const HeroSection = () => {
    return (
        <div className="container flex items-center">
            <div className="flex-1">
                <img className="max-h-[832px] h-full w-full object-cover rounded-br-3xl" src="https://picsum.photos/200/300" alt="hero-banner" />
            </div>
            <div className="flex-1 text-center">
                <p className="text-2xl text-gray-900 font-medium ">Transform Your ❤ Health With</p>
                <h1 className="text-4xl text-gray-900 font-bold">Personalized Nutrition Coaching</h1>
                <p>Welcome to Nutritionist, your partner in achieving optimal health through personalized nutrition coaching. Our certified nutritionists are here to guide you on your weight loss journey, providing customized plans and ongoing support. Start your transformation today and experience the power of personalized nutrition coaching.</p>
                <div className="flex flex-shrink-0">
                <button className="flex">Get Starter Today</button>
                <button className="flex">Book a Demo</button>
                </div>

            </div>
        </div>
    )
}
export default HeroSection