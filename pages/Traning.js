import Footer from "@/src/unit/Footer";
import Header_bottom from "@/src/unit/Header_bottom";
import Header_top from "@/src/unit/Header_top";
import Exercises from "@/src/unit/Exercises";
import { Header,Ex_wrap,Ex_box, Wrapper,Title_N,Ex_list} from "@/styles/health";
import { useState } from "react";


export default function Training(props){

  const [selectedBodyPart, setSelectedBodyPart] = useState('back')
  const handleBodyPartClick = (bodyPart) => {
    setSelectedBodyPart(bodyPart);
  };

  return(
    <Wrapper>
      <Header>
        <Header_top></Header_top>
        <Header_bottom></Header_bottom>
      </Header>
      <Title_N className="Tit_before">
        <h2 className="Traning_h2">부위별 운동방법</h2>
        <span>부위별 운동 하는 방법을 알려드립니다.</span>
      </Title_N>

      {/* 운동 부위 */}
      <Ex_list img="back">
        <ul className="list">
          <li onClick={()=> handleBodyPartClick('chest')}>
            <a>가슴</a>
            <span>가슴</span>  
         </li>
         <li onClick={()=>handleBodyPartClick('shoulder')}>
            <a>어꺠</a>
            <span>어깨</span>  
         </li>
         <li onClick={()=>handleBodyPartClick('back')}>
            <a>등</a>
            <span>등</span>  
         </li>
         <li onClick={()=>handleBodyPartClick('leg')}>
            <a>하체</a>
            <span>하체</span>  
         </li>
        </ul>
      </Ex_list>

      {/* 부위별 운동 리스트 */}
      <Ex_wrap id="list_wrap">
        {selectedBodyPart ==='back' && (
          <>
       <Ex_box id="list" className="back_list">
        <Exercises tit="턱걸이" subtit="Pull-up" info="철봉을 손으로 잡고 당겨 턱을 철봉 위까지 끌어 올리는 운동" img="back"></Exercises>
         <Exercises tit="랫풀다운" subtit="Lat pulldown" info=" 허턱걸이와 유사한 기능을 가진 수직 당기기 머신 운동" img="back"></Exercises>
        <Exercises tit="바벨로우" subtit="Barbell row" info=" 허리는 곧게 펴고 무릎은 약간 구부린 상태에서 역기를 수직으로 들어올리고 내리는 운동" img="back"></Exercises>
        <Exercises tit="로우 케이블 시티드" subtit="Row cable seated" info="벤트 오버 로를 케이블 기구를 이용하여 앉은 자세로 하는 운동 방법" img="back"></Exercises>
      </Ex_box>
      <Ex_box id="list" className="back_list">
        <Exercises tit="티바로우" subtit="T-bar row" info="T자 모양의 바벨을 잡고 당기는 운동" img="back"></Exercises>
        <Exercises tit="데드 리프트" subtit="Dead lift" info="바벨이 앞쪽을 향하게 양손으로 잡고 허리를 편 상태에서 앉았다 일어난다" img="back"></Exercises>
        <Exercises tit="암풀다운" subtit="Armpulldown" info="단관절 고립 운동으로써 광배근 하나만 타깃하는 운동" img="back"></Exercises>
        <Exercises tit="하이로우" subtit="Hight row" info="궤적이 위에서 대각선 아래로 당겨지면서 광배근 타깃 하기에 좋은 머신운동" img="back"></Exercises>
      </Ex_box>
     </>
      )}
      {selectedBodyPart === 'shoulder' &&(
        <>
        <Ex_box id="list" className="shoulder_list">
        <Exercises tit="밀러터리 프레스" subtit="Military press" info="어깨근육 주로 사용하고 삼두, 승모, 윗가슴, 전거근 등을 함께 사용하는 운동" img="shoulder"></Exercises>
        <Exercises tit="사이드 레터럴 레이즈" subtit="Side lateral raise" info="측면에 있는 어깨를 올리는 운동" img="shoulder"></Exercises>
        <Exercises tit="프론트 레이즈" subtit="Front raise" info="덤벨을 앞쪽으로 들어 올리는 운동" img="shoulder"></Exercises>
        <Exercises tit="벤트 오버 레터럴 레이즈" subtit="Bent over lateral raise" info="허리를 구부려 팔꿈치를 구부린 상태로 고정한 후 견관절만 이용하는 어깨 운동" img="shoulder"></Exercises>
        </Ex_box>
        <Ex_box id="list" className="shoulder_list">
        <Exercises tit="페이스 풀" subtit="Face full" info="등 위쪽과 어깨 근육을 타깃으로 하는 운동" img="shoulder"></Exercises>
        <Exercises tit="케이블 프론트 레이즈" subtit="Cable front raise" info="케이블을 이용하여 삼각근 그룹의 앞쪽 머리가 운동 저항의 주요 초점이 되는 상체 고립 운동" img="shoulder"></Exercises>
        <Exercises tit="비한인드 넥 프레스" subtit="Behind neck press" info="벤치에 앉아 봉을 어깨 너비보다 잡고 머리 위로 팔을 들어 올려 목 뒤려 내렸다 올리기를 반복한느 운동" img="shoulder"></Exercises>
        <Exercises tit="숄더프레스" subtit="Shoulder press" info="덤벨이나 바벨을 어깨너비보다 약간 넓게, 손바닥이 앞을 향하도록 잡고 서서 어깨높이까지 들어 올리는 운동" img="shoulder"></Exercises>
        </Ex_box>
      </>
      )}
      {selectedBodyPart === 'chest' &&(
        <>
      <Ex_box id="list" className="chest_list">
        <Exercises tit="벤치프레스" subtit="Bench press" info="폭이 좁은 벤치에 누워 역기를 두 팔로 떠받치고 가슴 위아래로 올리고 내리는 운동" img="chest"></Exercises>
        <Exercises tit="인클라인 벤치 프레스" subtit="Incline bench press" info="경사진 벤치 위에 누워 바벨을 가슴 위아래로 올리고 내리는 운동" img="chest"></Exercises>
        <Exercises tit="딥스" subtit="Dips" info="평행봉이나 딥스머신 위에서 팔을 굽혔다 폈다 하는 아래가슴 운동" img="chest"></Exercises>
        <Exercises tit="체스트 프레스" subtit="Chest press" info="대흉근을 발달 시켜주는 운동" img="chest"></Exercises>
      </Ex_box>
      <Ex_box id="list" className="chest_list">
        <Exercises tit="덤벨플라이" subtit="Dumbbell fly" info="덤벨을 사용하여 벤치에 누워 가슴 위아래로 올리고 내리는 운동" img="chest"></Exercises>
        <Exercises tit="푸쉬업" subtit="Push up" info="엎드려뻗친 자세에서 짚은 팔을 굽혔다 폈다 하는 운동" img="chest"></Exercises>
        <Exercises tit="인클라인 덤벨 프레스" subtit="Incline dumbbell press" info="경사진 벤치 위에 누워 덤벨을 가슴 위아래로 올리고 내리는 운동" img="chest"></Exercises>
        <Exercises tit="펙덱플라이" subtit="Pec deck fly" info="대흉근 전체를 사용하여 가슴라인을 잡아주는 기구운동" img="chest"></Exercises>
    </Ex_box>
      </>
      )}
      {selectedBodyPart === 'leg' &&(
        <>
      <Ex_box id="list" className="leg_list">
        <Exercises tit="바벨 스쿼트" subtit="Squat" info="양발을 좌우로 벌리고 서서 발바닥을 바닥에 밀착한 채 등을 펴고 무릎을 굽혔다 피는 운동" img="leg"></Exercises>
        <Exercises tit="힙 어덕션" subtit="Hip abduction" info="엉덩이 근육의 둔근을 이용해서 다리를 벌려주는 운동, 중둔근과 소둔근 운동" img="leg"></Exercises>
        <Exercises tit="스플릿 스쿼트" subtit="Split squat" info="스쿼트 중에서 다리 한쪽을 벤치 위에 올려 진행하는 운동" img="leg"></Exercises>
        <Exercises tit="레그 익스텐션" subtit="Leg extension" info="대퇴 사두, 앞벅지를 강화하는 운동" img="leg"></Exercises>
      </Ex_box>
      <Ex_box id="list" className="leg_list">
        <Exercises tit="레그컬" subtit="Leg curl" info="햄스트링을 집중적으로 단련하기 좋은 운동" img="leg"></Exercises>
        <Exercises tit="런지" subtit="Lunge" info="다리와 엉덩이 근육을 발달시키는 운동의 하나.다리를 앞뒤로 벌린 상태에서 앉았다 일어나기를 반복한다." img="leg"></Exercises>
        <Exercises tit="힙 쓰러스트" subtit="Hip thrust" info="무산소 운동 종류중 하나로 주로 엉덩이 근육을 강화해주는 운동" img="leg"></Exercises>
        <Exercises tit="레그 프레스" subtit="Leg press" info="Leg Press 머신을 이용하여 사선 방향으로 고중량의 무게를 밀어내는 하체 운동의 한 종류" img="leg"></Exercises>
      </Ex_box>
      </>
      )}
      </Ex_wrap>
      {/* 부위별 운동 리스트 */}

      <Footer/>
    </Wrapper>
  )
}