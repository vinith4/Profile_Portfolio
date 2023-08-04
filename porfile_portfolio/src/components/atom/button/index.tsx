


export default function PrimaryBtn(props: any) {
  return (
    <button onClick={props.onClick} className='btn border border-b-2 bg-blue-500 px-3 py-1 text-white rounded-lg mr-8 hover:bg-white hover:border-blue-500  hover:text-blue-500 '>
      <span className="text-sm"> {props.title}</span>
    </button>

  )
}
