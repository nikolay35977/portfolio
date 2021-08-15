import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

const fillCircle = ({radius, x, y, ctx, endOfCircle}) => {
    ctx.beginPath();
    ctx.arc(x, y, radius, -Math.PI / 2, endOfCircle - Math.PI / 2, false);
    /*ctx.fillStyle = '#FF5252';
    ctx.fill();*/
    ctx.stroke();
}

const CanvasPercentage = (props) => {
    const canvasRef = React.useRef(null),
        [i, setI] = React.useState(0),
        [ctx, setCtx] = React.useState(null),
        width = 175,
        height = 175,
        x = width / 2,
        y = height / 2,
        radius = 70,
        scale = window.devicePixelRatio;

    React.useEffect(() => {
        if (i < props.percent && props.onPage) {
            setTimeout(() => {
                setI(i + 1);
            }, 15);
        }
    }, [i, props.onPage])

    React.useEffect(() => {
        setCtx(canvasRef.current.getContext('2d'));
    }, [canvasRef])

    React.useEffect(() => {
        if (ctx) {
            ctx.scale(scale, scale);
            ctx.strokeStyle = '#FF5252';
            ctx.lineWidth = 10;
        }
    }, [ctx])

    React.useEffect(() => {
        if (ctx) {
            const render = () => {
                let degrees = i / 100 * 360.0,
                    radians = degrees * (Math.PI / 180);
                ctx.clearRect(0, 0, ctx.width, ctx.height);
                fillCircle({ctx, x, y, radius, endOfCircle: radians});
            }
            render();
        }
    }, [i])

    return (
        <canvas className={'canvas'} width={175 * scale} height={175 * scale} ref={canvasRef}/>
    )
}

const SkillCard = (props) => {
    let percent = props.percent;
    return (
        <div className={'skill_card'}>
            <div className={'percent__inner'}>
                <span className={'percent'}>{percent}</span>
                <div className={'circle'}>
                    <CanvasPercentage percent={percent} onPage={props.onPage}/>
                </div>
            </div>
            <div className={'text'}>
                {props.text}
            </div>
        </div>
    )
}

const SkillPage = (props) => {
    const [onPage, setOnPage] = React.useState(false);
    let cardData = [{percent: 55, text: 'PROGRAMMING'},
        {percent: 95, text: 'DESIGN'},
        {percent: 23, text: 'MARKETING'},
        {percent: 70, text: 'UI / UX'}]
    cardData = cardData.map(el => <SkillCard {...el} onPage={onPage}/>)
    React.useEffect(() => {
        setOnPage(props.onPage);
    }, [props.onPage])
    console.log(props.onPage);
    return (
        <section id='skills'>
            <div className={'container'}>
                <ScrollAnimation animateIn='fadeIn'>
                    <div className={'skill_header'}>
                        <div className='title'>
                            my skills
                        </div>
                        <div className='subtitle'>
                            No one lights a lamp in order to hide it behind the door: the purpose of light is to create
                            more light, to open people’s eyes, to reveal the marvels around.
                        </div>
                    </div>
                </ScrollAnimation>
                <div className={'skill_cards'}>
                    {cardData}
                </div>
            </div>
        </section>
    )
}

export default SkillPage;