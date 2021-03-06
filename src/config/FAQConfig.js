const toggleAnswer = (e) => {
    const constDisplay = e.target.nextSibling.style.display;
    if(constDisplay === "none" || constDisplay === ""){
        e.target.nextSibling.style.display = "inline-block";
    }
    else if(constDisplay === "inline-block"){
        e.target.nextSibling.style.display = "none";
    }
}
export const FAQList = 
[{
    question: <h2 onClick={(e)=>toggleAnswer(e)}>- 아이가 학습지를 하기 싫어해요. 학습지와 뭐가 다른가요?</h2>,
        answer: 
        <p>룰루랄라 노는영어는 전문강사가 체계적인 커리큘럼과 교수법으로 지도하는 방문수업입니다.<br/>
        개인은 가정으로 기관은 기관에 방문하여 수업을 진행합니다.<br/>
        (기관의 경우 월 교재 형태의 별도 프로그램으로 진행됩니다.)<br/>
        Ex) 유치원/어린이집의 기관은 특별활동 수업으로 진행</p>
},
{
    question: <h2 onClick={(e)=>toggleAnswer(e)}>- 찾아가는 영어수업이 효과적일까요?</h2>,
        answer:
        <p>아이들 개개인마다 모두가 다 다릅니다. 대부분의 아이들은 학교 또는 학원에서 진행되는 수업에 대해서 진도를 제대로<br/>
            따라가지 못하거나, 앞서나가는 경우 도중에 질문을 하는 등의 본인에게 맞춰진 학습을 받기가 상당히 어렵습니다.<br/>
            때문에 아이의 성별, 성격, 성향과 수준을 잘 파악하여 온전히 학습하는 아이 1명에게만 포커스를 잡고 진행되는 수업이<br/>
            영어학습에 대한 흐름이 이어가기에 가장 효과적이고 학습습관을 형성하기에 아주 좋습니다.</p>
},
{
    question: <h2 onClick={(e)=>toggleAnswer(e)}>- 놀면서 어떻게 영어수업이 가능한가요?</h2>,
        answer:
        <p>룰루랄라 노는영어는 균형적 언어 접근법으로 언어의 4개 영역(말하기, 듣기, 읽기, 쓰기)을 균형적으로 지도합니다.<br/>
           단, 학습자의 연령과 수준을 고려하여 개별 맞춤 형태로 진행되기 때문에 놀이 중심으로 시작하여 연령과<br/>
           수준이 올라갈수록 아카데믹한 수업이 진행됩니다.</p>
},
{
    question: <h2 onClick={(e)=>toggleAnswer(e)}>- 레벨테스트는 어떻게 진행되나요?</h2> ,
        answer:
        <p>유아 단계부터 사진이나 그림, 문자를 제시하여 단어나 문장 표현에 대한 의미를 알고 있는지, 소리와 문자에 대한<br/>
        연관관계, 파닉스, 사이트워드, 가벼운 의사소통 가능여부, 자신의 생각을 표현할 수 있는지, 단어의 습득량, 문법 등<br/>
        포괄적으로 영어 전반적인 능력을 확인하며 레벨테스트를 통해 구체적이고 정확한 학습계획을 세웁니다.<br/>
        질문하는 형태나 정형화된 환경에서 이뤄지는 테스트가 아니라 수업의 형태로 아이들의 반응이나 피드백을 통해<br/>
        간접적인 정보를 얻는 형태의 레벨테스트를 진행하기 때문에 레벨테스트 자체도 즐거운 경험으로 남게 됩니다. </p>
},
{
    question:  <h2 onClick={(e)=>toggleAnswer(e)}>- 어떻게 수업이 진행되나요?</h2>,
        answer:
        <p>최초 레벨테스트를 시작으로 확인된 아이의 성향과 수준에 맞추어 교재를 선정하고 놀이 중심의 수업(스토리텔링, 노래<br/>
            와 챈트&amp;율동, 평면/입체 자료, 교구, 게임 등)과 파닉스와 사이트워드를 포함한 고학년을 위한 아카데믹한 수업(듣기,<br/>
            말하기, 쓰기, 읽기)과 문법 등 모든 영역에서 고르게 균형 있는 학습이 진행됩니다.</p>
}, {
    question:  <h2 onClick={(e)=>toggleAnswer(e)}>- 화상영어와 방문영어 혼합형태의 수업은 어떻게 진행되나요?</h2>,
        answer:
        <p>주 2회를 기준으로 방문 1회,  화상수업 1회로 수업이 진행되며 화상수업과 방문수업의 내용이 연계되어 적은 비용으로<br/>
            최대한의 효과를 내도록 수업이 구성되어 있습니다.</p>
},
{
    question: <h2 onClick={(e)=>toggleAnswer(e)}>- 1 :1 수업만 가능한가요?</h2> ,
        answer:<p>1:1 수업, 그룹수업 전부 가능합니다. 그룹은 학습자가 만들어야 하며, 2~3인 정도의 규모로 진행됩니다.</p>
},
{
    question: <h2 onClick={(e)=>toggleAnswer(e)}>- 수업은 몇 분 동안 하나요?</h2> ,
        answer:
        <p>화상수업은 20분, 방문수업은 40분을 기본으로 하되, 상황에 맞추어 탄력적으로 조정이 가능합니다.<br/>
            (기관의 경우 30분, 60분 단위의 학습이 진행됩니다.)</p>
},
{
    question:  <h2 onClick={(e)=>toggleAnswer(e)}>- 몇 세부터 수업이 가능한가요?</h2>,
        answer:<p>4세(24개월)부터 수업이 가능합니다.</p>
},
{
    question:  <h2 onClick={(e)=>toggleAnswer(e)}>- 내 아이를 믿고 맡길 수 있는 선생님인가요?</h2>,
        answer:
        <p>유아 및 어린이를 대상으로 하는 수업이기 때문에 실력도 중요하지만 선생님이 아이들을 대하는 태도나 성품, 인성,<br/>
            언행 등 중요한 요소가 매우 많습니다. 영/유아와 어린이 교육에 적합한 선생님인지를 최초 선발 과정에서 매우<br/>
            까다롭게 따져보고 수업을 시작하기 전에 모든 선생님들의 성범죄 경력조회 및 아동학대관련 범죄 조회를 기본적으로<br/>
            실시합니다. 올바른 성품과 언행을 갖고 있는 선생님의 선한 영향력을 통해 영어실력 뿐만 아니라 올바른 아이로 자라날 수 있도록 지도합니다.</p>
}, {
    question:  <h2 onClick={(e)=>toggleAnswer(e)}>- 컴퓨터가 필요한가요?</h2>,
        answer:
        <p>화상수업의 경우 노트북, PC 또는 태블릿/휴대폰(줌 플랫폼을 통한 화상연결이 가능한 기종)이 필수적으로 요구됩니다.<br/>
            방문수업의 경우 모든 교재와 교구를 선생님이 직접 가져가기 때문에 수업을 진행할 공간만 있으면 됩니다.</p>
},
{
    question: <h2 onClick={(e)=>toggleAnswer(e)}>- 수강신청과 상담은 어떻게 진행되나요?</h2> ,
        answer:
        <p>상담신청을 해주시면 해당 연락처로 센터에서 전화를 드립니다. 상담 후 선생님이 배정되어 레벨테스트를 하고 아이의<br/>
            수준과 성향에 맞는 교재를 선정 후 수업을 시작하게 됩니다</p>
},
{
    question:  <h2 onClick={(e)=>toggleAnswer(e)}>- 수업을 빠지게 되는 경우 취소 또는 연기가 가능한가요?</h2>,
        answer:
        <p>선생님 또는 센터에 사전에(최소 2~5일전) 미리 연락을 하여 협의 후에 보강 또는 대체수업을 진행하시면 되고,<br/>
            당일 취소는 불가능합니다. 당일 취소의 경우 횟수가 차감되니 이점 유의해주시기 바랍니다</p>
},
{
    question:  <h2 onClick={(e)=>toggleAnswer(e)}>- 수업료 계산의 기준은 어떻게 되나요?</h2>,
        answer:<p>수업료는 한 달(4주)을 기준으로 책정되며 매월 1일에 결제됩니다.</p>
},
{
    question:  <h2 onClick={(e)=>toggleAnswer(e)}>- 결제는 어떻게 하죠?</h2>,
        answer:
        <p>카드, 계좌이체 전부 가능합니다. 룰루랄라 노는영어는 영/유아, 어린이를 대상으로 하는 방문 교육업으로 교육비 연말<br/>
            정산 소득공제 대상 업체가 아닙니다. 카드로 결제 할 경우 카드 소득공제로 적용되고, 현금으로 이체하실 경우 현금영<br/>
            수증 소득공제로 적용됩니다.</p>
}]