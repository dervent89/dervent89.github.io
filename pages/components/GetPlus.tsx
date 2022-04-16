type Props = {
  count: number
}

const getPlus = ({count = 120} : Props) => {
    let pluses = [];
    for (let plus = 0; plus < count; plus++){
      pluses.push(<svg key={plus} xmlns="http://www.w3.org/2000/svg" width="7.14" height="7.14" viewBox="0 0 7.14 7.14"><path d="M4.13-8.75V-5.6H1.022v.84H4.13v3.15h.91V-4.76H8.162V-5.6H5.04V-8.75Z" transform="translate(-1.022 8.75)" fill="#595959"/></svg>);
    }
    return pluses
}

export default getPlus