export function VideoCard(props: any) {
  return (
    <div className="p-2">
      <img className="rounded-xl w-100" src={props.image}></img>
      <div className="grid grid-cols-12">
        <div className="col-span-1 rounded-full">
          <img className="rounded-full w-15 h-15 p-1" src={props.tumbimg}></img>
        </div>
        <div className="col-span-11 pl-2">
          <div>{props.title}</div>
          <div className="text-gray-400 text-base">{props.name}</div>
          <div className="text-gray-400 text-base">
            {props.views} | {props.ago}
          </div>
        </div>
      </div>
    </div>
  );
}
