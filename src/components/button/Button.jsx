import s from './button.module.css'

const Button = (props) => {
    return (
        <button onClick={props.handleLoadMore} className = {s.btn}>Load More</button>
    )
}

export default Button
