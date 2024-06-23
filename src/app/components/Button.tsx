type Props = {
    onClick: () => void;
};

const Button: React.FC<Props> = ({ onClick }) => {
    return (
        <button
            className="border border-cyan-400 text-cyan-400 px-12 py-1 hover:text-cyan-300 hover:bg-cyan-700 rounded-md"
            onClick={onClick}
        >
            Enter
        </button>
    );
};

export default Button;