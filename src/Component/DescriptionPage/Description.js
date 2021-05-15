import Header from "../Header/Header";
import './Description.css';

const Description = () => {
    return (
        <>
            <Header />
            <div className='wrapper-1'>
                <div className='box1'>
                    <p> Команда "Техновизоры" была создана в рамках проектной<br/>
                        деятельности ИКТИБ, ЮФУ. Наша экспертная система позволит<br/>
                        определиться с выбором направления для вашего обучения в<br/>
                        магистратуре. В разработке проекта приняли участие:
                    </p>
                </div>

                <div className='box2'>
                    <p> Гарнов Кирилл Максимович<br/>
                        Зверев Алексей Евгеньевич<br/>
                        Костылев Александр Валерьевич<br/>
                        Палашкин Дмитрий Александрович<br/>
                        Савосин Дмитрий Андреевич<br/>
                        Свечникар Даниил Андреевич<br/>
                        Чеканов Ярослав Константинович

                    </p>
                </div>

                <div className='box3'>
                    <img
                        src='https://cdn.dribbble.com/users/1233499/screenshots/3900568/education.gif'
                        alt='img'/>
                </div>
            </div>
        </>
    );
}


export default Description;
