const question = [
    ["問題 1", "2030年万博の開催地に決まった都市は？", "選択肢1 : ローマ", "選択肢2 : 釜山", "選択肢3 : リヤド", 3],
    ["問題 2", "国軍と準軍事組織（RSF）の対立が激化している国は？", "選択肢1 : イスラエル", "選択肢2 : スーダン", "選択肢3 : インド", 2],
    ["問題 3", "11月2日に包括的核実験禁止条約（CTBT)の批准を撤回した国は？", "選択肢1 : アメリカ", "選択肢2 : 中国", "選択肢3 : ロシア", 3],
    ["問題 4", "BRICSには新たに何か国が加わることになったか？", "選択肢1 : 4ヵ国", "選択肢2 : 5ヵ国", "選択肢3 : 6ヵ国", 3],
    ["問題 5", "インボイス制度の正式名称は？", "選択肢1 : 適格請求書等保存方式", "選択肢2 : 公正証書保管方式", "選択肢3 : 適格受領書等保管方法", 1]
];

let countDownTimer = 20;// 制限時間
let successFlag = false;// 最後まで解答したか
let successCount = 0;// 正答数
let questionCount = 0;// 問題数


// 最初は問題を解くボタンだけ表示
document.getElementById("ansArea").style.visibility = "hidden";

const countTimer = () => {
    if (successFlag == false) {
        document.getElementById("countDown").innerHTML = `残り${countDownTimer}秒です`
        if (!countDownTimer == 0) {
            setTimeout(() => {
                countDownTimer = countDownTimer - 1;
                countTimer();
            }, 1000);
        } else {
            setTimeout(() => {
                alert("時間切れ");
                // カウントをリセットする
                countDownTimer = 20;
                questionCount = 0;
                successCount = 0;

                // 問題を非表示にし、ボタンを表示する
                document.getElementById("ansStartButton").style.visibility = "visible";
                document.getElementById("ansArea").style.visibility = "hidden";
                // ボタンの表示を変える
                document.getElementById("ansStartButton").innerHTML = "もう一度挑戦する";
            })
        }
    }
}


const viewQuestion = () => {
    // 問題文表示
    document.getElementById("question").innerHTML = question[questionCount][0];
    // 選択肢表示
    document.getElementById("ans1").innerHTML = question[questionCount][1];
    document.getElementById("ans2").innerHTML = question[questionCount][2];
    document.getElementById("ans3").innerHTML = question[questionCount][3];
    document.getElementById("ans4").innerHTML = question[questionCount][4];
}


const ansButton = (e) => {
    if (e == question[questionCount][5]) {
        alert("正解");
        successCount = successCount + 1;
        // successCount++;
    } else {
        alert("不正解");
    }
    // 問題数のカウントを増やす
    questionCount = questionCount + 1;
    // questionCount++;

    if (questionCount == question.length) {
        document.getElementById("answer").innerHTML = `${successCount}問正解です`;
        document.getElementById("countDown").style.visibility = "hidden";
        successFlag = true;
    } else {
        viewQuestion();
    }
}

// 
// const ansButton = (e) => {
//     if (e == question[questionCount][5]){
//         document.write("<h1>〇</h1>");
//         successCount = successCount + 1;
//     } else {
//         document.write("<h1>✖</h1>");
//     }
//         // 問題数のカウントを増やす
//         questionCount = questionCount + 1;
//         // questionCount++;
    
//         if (questionCount == question.length) {
//             document.getElementById("answer").innerHTML = `${successCount}問正解です`;
//             document.getElementById("countDown").style.visibility = "hidden";
//             successFlag = true;
//         } else {
//             viewQuestion();
//         }
    
// }
// 






const ansStart = () => {
    // 問題を解くボタンを消す
    document.getElementById("ansStartButton").style.visibility = "hidden";
    // 問題文と選択肢を表示
    document.getElementById("ansArea").style.visibility = "visible";
    countTimer();
    viewQuestion();

}

