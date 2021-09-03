import { Image } from 'react-bootstrap'


export default function ExecCard(props) {
    return (
        <div className='exec-card'>
            <Image src={props.img} fluid />
            <div className='mt-3'>
                <h5 className='text-muted'>{props.name}</h5>
                <p className='text-muted'>{props.role}</p>
                <p>{props.content}</p>
            </div>
        </div>
    );
}