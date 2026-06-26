export default function Controls({prevWork, nextWork, onChangeMode}) {
  return (
    <div className="controls">
      <button 
        disabled={!prevWork}
        onClick={()=>{
        if(prevWork) onChangeMode(prevWork.id);
      }}>이전</button>
      <button
        disabled={!nextWork} 
        onClick={()=>{
        if(nextWork) onChangeMode(nextWork.id);
      }}>다음</button>
    </div>
  )
}