
const MenuItem = ({item}) => {
    const {name, image, price , recipe } = item
    return (
        <div className="flex gap-8">
            <img className="h-20 w-20 rounded-full rounded-tl-none" src={image} alt="" />
            <div>
                <p className="uppercase">{name} ----------</p>
                <p>{recipe}</p>
            </div>
            <p>{price}</p>
        </div>
    );
};

export default MenuItem;