import '../styles/empty.css';

function EmptySection() {
    return(
        <>
        <div className='empty-sec'>
            <div className='imgEmpty'>
                <img src={`${import.meta.env.BASE_URL}empty-pic.png`}/>
            </div>
            <div className='paraEmpty'>
                <h3>Oops! Nothing here...</h3>
                <p>Looks like this box has been waiting for a long time.</p>
            </div>
        </div>
        </>
    )
}

export default EmptySection;