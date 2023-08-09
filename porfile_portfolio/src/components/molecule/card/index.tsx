import PrimaryBtn from "../../atom/button";

export default function PrimaryCard(props:any) {
    return (
        <div className="w-full h-full border border-blue-300">
            <div className="flex flex-col p-2 gap-3">
                 <div>
                        <img src={props.image} className="rounded-lg h-60 w-full"/>
                 </div>
                 <div>
                      <h1>{props.title}</h1>
                 </div>
                 <div>
                    <PrimaryBtn
                    onClick={props.onClick}
                    title="View Project"
                    />
                 </div>
            </div>
        </div>
    );
}