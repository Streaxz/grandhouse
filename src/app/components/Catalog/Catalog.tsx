"use client";
import "../../App.css"
import {ArrowIconLeft} from "../../icons/ArrowIconLeft";
import React, {useEffect, useRef, useState} from "react";
import {ArrowIconRight} from "../../icons/ArrowIconRight";
import {Swiper, SwiperSlide} from "swiper/react";
import {AutumnProject} from "@/app/components/Catalog/AutumnProject";
import ReactModal from "react-modal";
import {Button} from "@/app/components/Button/Button";

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        width: "60vw",
        height: "36vw",
        borderRadius: "2vw",
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        overflow: 'hidden',
        border: "none",
        padding: "2vw"

    },
    overlay: {zIndex: 1000}
};

export const Catalog = () => {
    const swiperRef = useRef(null);
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [numOfPhotos, setNumOfPhotos] = useState(6);
    const [swiperSlides, setSwiperSlides] = useState(2);
    const [spaceBetween, setSpaceBetween] = useState(36);
    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    const handleSubmit = (event: any) => {
        event.preventDefault();
        // Здесь вы можете добавить логику для отправки данных формы
    };

    const goNext = () => {
        //@ts-ignore
        if (swiperRef.current && swiperRef.current.swiper) {
            //@ts-ignore
            swiperRef.current.swiper.slideNext();
        }
    };

    const goPrev = () => {
        //@ts-ignore
        if (swiperRef.current && swiperRef.current.swiper) {
            //@ts-ignore
            swiperRef.current.swiper.slidePrev();
        }
    };

    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
            if (width <= 768 && width > 500) {
                setNumOfPhotos(6);
                setSwiperSlides(2);
                setSpaceBetween(28);
            } else if (width <= 500) {
                setNumOfPhotos(4);
                setSwiperSlides(1);
                setSpaceBetween(10)
            } else {
                console.log(width)
                setSwiperSlides(2);
                setNumOfPhotos(7);
                setSpaceBetween(36);
            }
        };

        window.addEventListener("resize", handleResize);
        handleResize(); // Вызываем один раз при монтировании, чтобы установить начальное количество фото
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const roundPhotos = Array.from({length: numOfPhotos}, (_, index) => (
        <div
            key={index}
            className="roundPhoto"
            style={{backgroundImage: `url(/autumn.png)`}}
        ></div>
    ));

    return (
        <>
            <div className='catalogContainer'>
                <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", gap: "36px"}}>
                    <img src={`/logo_catalog.svg`}
                         className={"logoCatalog"}></img>
                    <p>Вводка о каталоге компании</p>
                </div>
            </div>
            <div style={{maxWidth:" 1440px", width: "115%", display: "flex", flexDirection: "column", justifyContent: "center"}}>
                <div style={{display: "flex", justifyContent: "center"}}>
                    <button onClick={goPrev} className={'leftArrow'}>
                        <ArrowIconLeft/>
                    </button>
                        <Swiper
                            ref={swiperRef}
                            spaceBetween={spaceBetween}
                            slidesPerView={swiperSlides}
                            pagination={false}
                            className={'swiperStyle'}
                        >
                            <SwiperSlide>
                                <AutumnProject/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <AutumnProject/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <AutumnProject/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <AutumnProject/>
                            </SwiperSlide>
                            {/* Add more slides here */}
                        </Swiper>
                    <button onClick={goNext} className={'rightArrow'}>
                        <ArrowIconRight/>
                    </button>
                </div>

            </div>

            <div
                style={{
                    display: "flex",
                    justifyContent: "space-evenly",
                    width: "100%"
                }}
            >
                {roundPhotos}
            </div>
            <Button
                onClick={openModal}
                buttonText={"Все проекты (240)"}
            />
            <ReactModal
                isOpen={isOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Обратная связь"
            >
                <div className={'modalCloseButton'}>
                    <button onClick={closeModal}>
                        <img src={'/closeIcon.svg'}/>
                    </button>
                </div>
                <div className={'flex flex-col justify-center text-center'}>
                    <div className={'modalLogo'}/>
                    <p className='modalLogoText '>
                        👋 Мы на связи!
                    </p>
                    <form className={'modalInputs'} onSubmit={handleSubmit}>
                        <div className={'inputGroup'}>
                            <label htmlFor="nameInput">Ваше имя:</label>
                            <input
                                id="nameInput"
                                type="text"
                                placeholder="Иванов Иван"
                            />
                        </div>
                        <div className={'inputGroup'}>
                            <label htmlFor="phoneInput">Телефон:</label>
                            <input
                                id="phoneInput"
                                type="tel"
                                placeholder="+7(999)999-99-99"
                            />
                        </div>
                        <div className={'inputGroup justify-between'}>
                            <div className={'inputGroup'}>
                                <label htmlFor="submitButton">Перезвоним:</label>
                                <button
                                    id={'submitButton'}
                                    className={'submitButton'} type="submit">
                                    <p className={'submitButtonText'}>
                                        Заказать звонок
                                    </p>
                                </button>
                            </div>
                            <div className={'modalSocial'}>
                                <p style={{color: "rgba(39, 43, 64, 1)", paddingRight: "2vw"}}>Чаты: </p>
                                <button>
                                    <img src={"/emojiWhatsApp.png"} style={{width: "4vw", paddingRight: "1vw"}}></img>
                                </button>
                                <button>
                                    <img src={"/emojiVk.png"} style={{width: "4vw", paddingRight: "1vw"}}></img>
                                </button>
                                <button>
                                    <img src={'/emojiTelegram.png'} style={{width: "4vw", paddingRight: "1vw"}}></img>
                                </button>
                            </div>
                        </div>

                    </form>
                    <p className={'modalDescription'}>
                        Нажимая кнопку «Заказать звонок», вы подтверждаете свое согласие на обработку персональных
                        данных
                    </p>
                    <div className={'modalFooter'}>
                        <span style={{fontSize: "2vw", color: "rgba(39, 43, 64, 1)"}}>8 800 500-35-05</span>
                        <span style={{fontSize: "2vw", color: "rgba(39, 43, 64, 1)", paddingLeft: "3vw"}}>dom@spk-gh.ru</span>
                        <p style={{fontSize: "0.8vw", color: "rgba(39, 43, 64, 1)", paddingTop: "1vw"}}>Будем рады увидиться с вами вживую! Наши офисы в Москве, Нижнем Новгороде и Кирове работают с понедельника по пятницу с 9 утра до 19 вечера. Адреса</p>
                    </div>
                    <div className={'modalEllipse'}/>
                </div>
            </ReactModal>
        </>
    )
}