const Operation = ({ value, onClick }) => {
    return (
        <div className={value === 'C' ? 'operation clear' : 'operation'} onClick={onClick}>
            {value}
        </div>
    );
};

export default Operation;
