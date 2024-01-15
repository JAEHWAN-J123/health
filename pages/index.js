import { useRouter } from 'next/router'
import Link from 'next/link';
import { Wrapper,Header,Main,Health01} from '../styles/health'
import Header_top from '@/src/unit/Header_top'
import Header_bottom from '../src/unit/Header_bottom';
import Health_section from '../src/unit/Health_section'
import Footer from '@/src/unit/Footer'
import Weight_History from "./Weight_History"
export default function Health(){
  
  const router=useRouter();

  return(
    <Wrapper>
      <Header>
      <Header_top></Header_top>
      <Header_bottom/>
      {router.pathname.startsWith('/Weight_History') && (
          <Weight_History />
        )}
      </Header>
      <Main></Main>
      <Health01>
        <div className='Title_Wrap'>
        <h2>Weight Training</h2>
        <p>지식이 없어 헬스를 시작하기 어려운 분들을 위한 지식 사이트</p>
        <span className='line'></span>
        </div>
        <Health_section img="main_img1" img2="main_img2" text01="사람 마다 다르지만, 근육의 부피를 늘려 몸을 멋지게 만들겠다는 근비대가 있으며 최근에는 웨이트 트레이닝에 의한 근력의 증강이 각종 스포츠의 경기 성적에까지 영향을 주는것이 판명되어 스포츠맨의 체력 증강의 목적을 위해 하기도 한다고 한다. 외에 신체 장애자의 재활운동의 측면에서도 트레이닝의 원리가 활용되고 있다." text02="웨이트 트레이닝은 무거운 무게를 다루고 평소에 하지 않은 동작이 많습니다. 때문에 정확한 자세와 방법이 매우 중요합니다. 그래서 보통 Pt를 방으라 하지만 비싼 가격으로 인해 쉽게 다가가기 어렵워 타겟부위에 따른 운동 자세와 방법을 모아둔 사이트 입니다.">
        </Health_section>
      </Health01>
      <Footer img="logo"/>
    </Wrapper>
  )
}