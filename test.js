function R_Click(c_janken_r) {
  let janken = ["グー", "チョキ", "パー"];
  let janken_r = Math.floor(Math.random() * 3);
  let c_janken = ["グー", "チョキ", "パー"];

  let Result_end;
  if (janken_r === c_janken_r) {
    Result_end = "あいこです";
  } else if (c_janken_r === 0 && janken_r === 1) {
    Result_end = "あなたの勝ちです。";
  } else if (c_janken_r === 1 && janken_r === 2) {
    Result_end = "あなたの勝ちです";
  } else if (c_janken_r === 2 && janken_r === 0) {
    Result_end = "あなたの勝ちです";
  } else {
    Result_end = "あなたの負けです";
  }

  document.getElementById("janken2").src = "jan" + c_janken_r + ".png";
  document.getElementById("janken").src = "jan" + janken_r + ".png";
  document.getElementById("jan1").innerHTML = c_janken[c_janken_r] + "を選択しました。運命の結果は・・・？";
  document.getElementById("jan2").innerHTML = "相手は" + janken[janken_r] + "。" + Result_end;
}
