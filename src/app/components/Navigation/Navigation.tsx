import "../../App.css"
export const Navigation = () => {
    return (
       <div className='navigationContainer'>
           <button className='navigationButton' style={{ position: "relative" }}>
               <img src={`/PhilosophyHead.png`} className={'philosophyPhoto'}/>
               <span style={{ position: "relative", zIndex: 8, padding: "0 2vw" }}>Философия</span>
           </button>
           <button className='navigationButton'>
               <span style={{padding: "0 2vw 0 2vw"}}>Проекты</span>
           </button>
           <button className='navigationButton'>
               <span style={{padding: "0 2vw 0 2vw"}}>Каталог</span>
           </button>
           <button className='navigationButton'>
               <span style={{padding: "0 2vw 0 2vw"}}>Загаловок</span>
           </button>
       </div>
    );
}