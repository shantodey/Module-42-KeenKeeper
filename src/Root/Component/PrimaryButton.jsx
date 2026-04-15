
const PrimaryButton = ({children,cn}) => {
    return (
        <button className={cn}>
            {children}
        </button>
    );
};

export default PrimaryButton;