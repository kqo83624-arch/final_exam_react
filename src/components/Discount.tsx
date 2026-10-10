const Discount = ({level}: {level: string})=> {
    if(level === 'VIP')
        return <h1>giam gia 10%</h1>
    if(level === "Gold")
        return <h1>giam gia 7%</h1> 
    return <h1>khong giam gia</h1>
}

export default Discount;