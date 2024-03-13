import "../../App.css"
export const Navigation = () => {
    return (
       <div className='navigationContainer'>
           <button className='navigationButton' style={{ position: "relative" }}>
               <img src={`/PhilosophyHead.png`} className={'philosophyPhoto'}/>
               <span className={'h3Shortcut navigationText'} style={{ position: "relative", zIndex: 8 }}>Философия</span>
           </button>
           <button className='navigationButton'>
               <span className={'h3Shortcut navigationText'} style={{fontWeight: 300}}>Проекты</span>
           </button>
           <button className='navigationButton'>
               <span className={'h3Shortcut navigationText'} style={{fontWeight: 300}}>Компания</span>
           </button>
           <button className='navigationButton'>
               <span className={'h3Shortcut navigationText'} style={{fontWeight: 300}}>Работы</span>
           </button>
       </div>
    );
}