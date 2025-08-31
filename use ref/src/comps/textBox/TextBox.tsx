export default function TextBox({ textBox, value }: any) {
    return (
        <>
            <input type="text" ref={textBox} />
            <span>{value}</span>
        </>
    )
}
