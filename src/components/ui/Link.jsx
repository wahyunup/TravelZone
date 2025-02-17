const Link = ({name, to}) => {
  return <a className="hover:font-bold" href={to}>{name}</a>;
};

export default Link;
