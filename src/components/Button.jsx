export default function Button({text , onSelect , curr}){
  return (
    <>
      <button className={curr ? 'active' : undefined} onClick={onSelect}>{text}</button>
    </>
  )
}