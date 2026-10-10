import style from './Attibute.module.css'
type TAttrProps = {
    lable: string;
}
const Attributes = (props:TAttrProps) => {
    return <span className={style.value}>{props.lable}</span>
}
const Attribute = () => {
    return <div className={style.attrs}>
        <span className='lable'>Mau</span>
        /*<span className={`${style.value} ${style.active}`}></span>
        <span className={style.value}></span>
        <span className={style.value}></span>*/
        <Attributes lable='Den'/>
    </div>
}

export default Attribute;