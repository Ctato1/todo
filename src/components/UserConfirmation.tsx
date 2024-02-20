interface UserConfirmationProps{
    deleteAllTodo: ()=>void;
    appear:()=>void;
  }
export default function UserConfirmation({deleteAllTodo,appear} : UserConfirmationProps) {
    return (
      <>
      <div className="fixed top-0 left-0 w-svw h-svh bg-zinc-950 opacity-50" onClick={appear}></div>
        <div className="absolute z-10 top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 bg-white  p-5 rounded  md:w-40 lg:w-80">
          <h4 className="font-medium  text-lg">Are you sure?</h4>
          <div className="mt-4 flex gap-2 justify-around">
            <button className="text-lg bg-red-500 p-2 rounded w-16 text-white"
            onClick={()=>{
              deleteAllTodo();
              appear();
            }}
            >Yes</button>
            <button className="text-lg bg-gray-500 p-2 rounded w-16 text-white"
            onClick={appear}
            >No</button>
          </div>
        </div>
      </>
    );
  }