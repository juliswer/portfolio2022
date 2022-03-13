import { useRef, useState } from "react"

const Faqs = (props) => {
    const answerElRef = useRef()
    const [state, setState] = useState(false)
    const [answerH, setAnswerH] = useState('0px')
    const { faqsList, idx } = props

    const handleOpenAnswer = () => {
        const answerElH = answerElRef.current.childNodes[0].offsetHeight
        setState(!state)
        setAnswerH(`${answerElH + 20}px`)
    }

    return (
        <div 
            className="space-y-3 mt-5 overflow-hidden border-b"
            key={idx}
            onClick={handleOpenAnswer}
        >
            <h4 className="cursor-pointer pb-5 flex items-center justify-between text-lg text-gray-200 font-medium">
                {faqsList.q}
                {
                    state ? (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 12H4" />
                        </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                        </svg>
                    )
                }
            </h4>
            <div
                ref={answerElRef} className="duration-300"
                style={state ? {height: answerH } : {height: '0px'}}
            >
                <div>
                    <p className="text-gray-200">
                        {faqsList.a}
                    </p>
                </div>
            </div>
        </div>
    )
}

const FaqsDetail = () => {

    const faqsList = [
        {
            q: "Am I trustworthy?",
            a: "Of course. When you give me the information of your App, it's 110% safe and secure. I will never sell your data to anyone."
        },
        {
            q: "What is the price?",
            a: "It depends of the project, but we can have a conference and talk about it if you want."
        },
        {
            q: "How can I reach you?",
            a: "Well, It is really simple. You have my email at the top and bottom of the page. If you send me an Email I will answer you as soon as possible."
        },
        {
            q: "Have you ever work with a team?",
            a: "The most of the time I worked, it was as a team of 3 people or more people. But I also work alone if I need it."
        }
    ]
  
    return (
        <section className="leading-relaxed max-w-screen-xl mt-12 mx-auto px-4 lg:px-8" style={{paddingBottom: '150px'}} id="faqs">
            <div className="space-y-3 text-center">
                <h1 className="text-3xl text-white font-bold">
                    Frequently Asked Questions
                </h1>
                <p className="text-gray-400 max-w-lg mx-auto text-lg">
                    Answered all frequently asked questions, Still confused? feel free to contact me.
                </p>
            </div>
            <div className="mt-14 max-w-2xl mx-auto">
                {
                    faqsList.map((item, idx) => (
                        <Faqs
                            key={idx}
                            idx={idx}
                            faqsList={item}
                        />
                    ))
                }
            </div>
        </section>
    )
};

export default FaqsDetail;