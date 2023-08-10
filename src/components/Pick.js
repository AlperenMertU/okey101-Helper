import React, { useRef, useState } from 'react'
import "../scss/pick.css";

function Pick() {
    const myDiv = useRef(null)
    const [selectedCards, setSelectedCards] = useState([]); // Tıklanan kartları saklamak için state
    const [sequentialSets, setSequentialSets] = useState([]); // Uygun sıralı dizileri saklamak için state

    // Tıklanan kartları işle
    const handleCardClick = (card) => {
        setSelectedCards(prevSelected => [...prevSelected, card]);
        // Burada uygun sıralı dizileri kontrol edebilirsiniz ve setSequentialSets ile güncelleyebilirsiniz.
    }


    return (
        <div id='container'>
            <div id="pickArea">
                <div id="gameItems">
                    <div id="stamp-1" className="stamp blue">1</div>
                    <div id="stamp-2" className="stamp blue">2</div>
                    <div id="stamp-3" className="stamp blue">3</div>
                    <div id="stamp-4" className="stamp blue">4</div>
                    <div id="stamp-5" className="stamp blue">5</div>
                    <div id="stamp-6" className="stamp blue">6</div>
                    <div id="stamp-7" className="stamp blue">7</div>
                    <div id="stamp-8" className="stamp red">1</div>
                    <div id="stamp-9" className="stamp red">2</div>
                    <div id="stamp-10" className="stamp red">3</div>
                    <div id="stamp-11" className="stamp red">4</div>
                    <div id="stamp-12" className="stamp red">5</div>
                    <div id="stamp-13" className="stamp red">6</div>
                    <div id="stamp-14" className="stamp red">7</div>
                    <div id="stamp-15" className="stamp yellow">1</div>
                    <div id="stamp-16" className="stamp yellow">2</div>
                    <div id="stamp-17" className="stamp yellow">3</div>
                    <div id="stamp-18" className="stamp yellow">4</div>
                    <div id="stamp-19" className="stamp yellow">5</div>
                    <div id="stamp-20" className="stamp yellow">6</div>
                    <div id="stamp-21" className="stamp yellow">7</div>
                    <div id="stamp-22" className="stamp black">1</div>
                    <div id="stamp-23" className="stamp black">2</div>
                    <div id="stamp-24" className="stamp black">3</div>
                    <div id="stamp-25" className="stamp black">4</div>
                    <div id="stamp-26" className="stamp black">5</div>
                    <div id="stamp-27" className="stamp black">6</div>
                    <div id="stamp-28" className="stamp black">7</div>
                </div>
            </div>
        </div>
    )
}

export default Pick
