import { useState } from "react"

function MyForm() {
  const [text, setText] = useState('');

// input field에 입력한 것을 submit하면 날려보낼 수 있도록 하는 함수를 작성
  // const handleChange = (event) => {
  //   setText(event.target.value);
  //   console.log(text); // 콘솔에 찍히도록해서 값을 확인하기 위한 log. 의미는 없음
  // }

  const handleSubmit = (event) => {
      alert(`'${text}라고 입력하셨습니다.'`)
    event.preventDefault();
  }
  return(
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={event => setText(event.target.value)} value={text}/>
        <br />
        <br />
        <input type="submit" value='클릭하세요'/>
      </form>
    </>
  )
}

export default MyForm