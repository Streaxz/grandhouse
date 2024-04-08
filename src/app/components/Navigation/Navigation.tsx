import "../../App.css"
import Image from "next/image";
export const Navigation = () => {
    return (
       <div className='navigationContainer navigationBorderWhite'>
           <button className='navigationButton' style={{ position: "relative" }}>
               <img
                 src={`/PhilosophyHead.png`}
                 className={'philosophyPhoto'}
                 alt={'philosophyPhoto'}
               />
               <span className={'h3Shortcut'} style={{ position: "relative", zIndex: 8 }}>Философия</span>
           </button>
           <button className='navigationButton'>
               <span className={'h3Shortcut'} style={{fontWeight: 300}}>Проекты</span>
           </button>
           <button className='navigationButton'>
               <span className={'h3Shortcut'} style={{fontWeight: 300}}>Компания</span>
           </button>
           <button className='navigationButton'>
               <span className={'h3Shortcut'} style={{fontWeight: 300}}>Работа и отзывы</span>
           </button>
       </div>
    );
}