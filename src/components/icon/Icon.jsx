function Icon ({ iconName, size, link }) {
    return (
        <a href={link} target="_blank">
        <img src={`/icons/${iconName}.svg`} width={size} alt="Icone Github" />
        </a>
    )
}

Icon.defaultProps = {
    size: '30px'
}

export default Icon