import "../../App.css"
export const Navigation = () => {
    return (
       <div className='navigationContainer'>
           <button className='navigationButton' style={{ position: "relative" }}>
               <img src={`/PhilosophyHead.png`} className={'philosophyPhoto'}/>
               <span className={'h3Shortcut navigationText'} style={{ position: "relative", zIndex: 8 }}>Философия</span>
           </button>
           <button className='navigationButton'>
               <span className={'h3Shortcut navigationText'}>Проекты</span>
           </button>
           <button className='navigationButton'>
               <span className={'h3Shortcut navigationText'}>Каталог</span>
           </button>
           <button className='navigationButton'>
               <span className={'h3Shortcut navigationText'}>Загаловок</span>
           </button>
       </div>
    );
}