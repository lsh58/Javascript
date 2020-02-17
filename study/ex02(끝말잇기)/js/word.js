function word() {
    //첫번째 단어를 가져온다
    //두번재 단어를 가져와서 저장한다
    //빈값인지 아닌지 체크한다
    //첫번째 단어와 비교한다
    //첫번째 단어의 끝과 두번째 단어의 처음이 같은지 비교
    //같다면 첫번째 단어로 출력
    //다르다면 다시 입력하라는 경고창 출력

    var firstText = document.getElementsByName("js_firstText")[0].value;
    var answer = document.getElementsByName("js_answer")[0].value;

    var lastWord = firstText.charAt(firstText.length - 1);
    var firstWord = answer.charAt(0);

    if (answer == "") {
        alert("당신은 바보입니까?");
    } else {
        if (lastWord == firstWord) {
            document.getElementsByName("js_firstText")[0].value = answer;
            document.getElementsByName("js_answer")[0].value = null;
            alert("찢었다");
            document.getElementsByName("past")[0].value += firstText + " ";
        } else {
            alert("당신은 바보입니까?");
        }
    }
}
