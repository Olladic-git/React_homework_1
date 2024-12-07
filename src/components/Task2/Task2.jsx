function Form() {
    return (
        <>
            <form action="">
                <label htmlFor="name">Enter your name </label>
                <input id="name" type="text" onChange={(e) => console.log(e.target.value)}/>
            </form>
        </>
    )
}

export default Form;