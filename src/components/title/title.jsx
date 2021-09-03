export default function Title(props) {
    return (
        <div className='w-100 text-center' style={{ marginBottom: `${props.mb ? props.mb : '2rem'}` }}>
            <p className='text-secondary mb-0'>{props.subtitle}</p>
            <h2>{props.title}</h2>
        </div>
    )
}