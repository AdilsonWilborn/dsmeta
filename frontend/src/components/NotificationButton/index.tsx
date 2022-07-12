/* no REACT cada componente vai ser armanezado em um tsx, ts de type script e x indica que é um arquivo do REACT  */
import icon from '../../assets/img/notification-icon.svg'
import './styles.css'
function NotificationButton() {
    return (
        <>
            <div className="dsmeta-red-btn"> {/* no REACT não pode por a palavra class (pq é do JS) tem que ser className*/}
                <img src={icon} alt="notificar" />
            </div>
        </>
    )
}

export default NotificationButton
