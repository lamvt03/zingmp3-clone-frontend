function Button({ active, text, onclick }) {
    return (
        <button
            onClick={onclick}
            className={`py-1 px-6 ${active ? 'bg-main-500 text-white font-semibold border-transparent' : 'bg-transparent border-gray-400 text-gray-600'} border text-xs rounded-xl bg-main-500`}
        >
            {text}
        </button>
    );
}

export default Button;