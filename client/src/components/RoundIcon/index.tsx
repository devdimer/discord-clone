import "./styles.scss";
export interface IProps {
    isHome?: boolean;
    notifications?: number;
    messages?: boolean;
    small?: boolean;
    disableHover?: boolean;
    active?: boolean;
    imageURL?: string;
    status?: string;
    medium?: boolean;
    label?: any;
    system?: boolean;
    onClick?: () => any
}

export default function RoundIcon(props: IProps) {
    return (
        <>
            <div onClick={props.onClick} data-notifications={props.status === "dnd" ? "-" : props.notifications && props.notifications > 99 ? 99 : props.notifications || 0} className={`round-icon ${props.isHome ? "round-icon--home" : ""} ${props.notifications ? "round-icon--notification" : ""} ${props.messages ? "round-icon--unread-messages" : ""} ${props.small ? "round-icon--small" : ""} ${props.disableHover ? "round-icon--disable-hover" : ""} ${props.active ? "round-icon--active" : ""} ${props.status === "online" ? "round-icon--online" : props.status === "offline" ? "round-icon--offline" : props.status === "idle" ? "round-icon--idle" : props.status === "dnd" ? "round-icon--dnd" : ""} ${props.medium ? "round-icon--medium" : ""} ${props.system ? "round-icon--system" : ""}`}>
                {props.imageURL && <img alt="icon_image" className="round-icon__image" src={props.imageURL} width={props.small ? 32 : props.medium ? 40 : 48} height={props.small ? 32 : props.medium ? 40 : 48} />}
                {!props.imageURL && props.label && <span className="round-icon__label">{props.label}</span>}
            </div>
        </>
    )
}