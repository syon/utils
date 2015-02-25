Copy and Replace
================

コピー元となるテキストファイルを１つ用意し、それに文字列リストを渡して内容を置換したファイルを生成します。

### 使い方

0. `results`フォルダを消す
0. `__copysrc.txt`にコピー元となるテキストを記述。  
   テキスト内の`<REPLACE>`が置換対象となる。
0. `__input.txt`に置換文字列を記述。改行区切り。
0. `$ ruby copy_and_replace.rb`
0. `results`フォルダに結果が出力される
0. 必要に応じて`results/*`のマージが可能
0. `$ ruby merge_results.rb`
0. `merged.txt`が出力される

