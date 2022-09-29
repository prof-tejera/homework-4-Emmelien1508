const Number = ({ value, onClick }) => {
    return (
        <div className={value === '' ? 'number disabled' : 'number'} onClick={onClick}>{value}</div>
    );
};

export default Number;
