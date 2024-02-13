import "../../App.css"
export const Navigation = () => {
    return (
       <div className='navigationContainer'>
           <button className='navigationButton' style={{ position: "relative" }}>
               <img src={`/PhilosophyHead.png`} className={'philosophyPhoto'}/>
               <span style={{ position: "relative", zIndex: 8, padding: "0 24px" }}>Философия</span>
           </button>
           <button className='navigationButton'>
               <span style={{padding: "0 24px 0 24px"}}>Проекты</span>
           </button>
           <button className='navigationButton'>
               <span style={{padding: "0 24px 0 24px"}}>Каталог</span>
           </button>
           <button className='navigationButton'>
               <span style={{padding: "0 24px 0 24px"}}>Работы и отзывы</span>
           </button>
       </div>
    );
}