class Solution {
    static int answer = 0;
    public void perm(int k,int[][] d, boolean[] visit, int count, int[][] temp){
        if(count == d.length){
            int cnt = 0;
            for(int i = 0; i < temp.length; i++){
                int[] cmd = temp[i];
                
                if(k >= cmd[0]){
                    k -= cmd[1];
                    cnt++;
                }
                else break;
            }
            answer = Math.max(answer, cnt);
           // System.out.println(answer);
            return;
        }
        
        for(int i = 0; i < d.length; i++){
            if(visit[i]) continue;
            temp[count] = d[i];
            visit[i] = true;
            perm(k, d, visit, count+1, temp);
            visit[i] = false;
        }
        
    }
    public int solution(int k, int[][] dungeons) {
        boolean[] visit = new boolean[dungeons.length];
        int[][] temp = new int[dungeons.length][2];
        perm(k,dungeons, visit, 0, temp);
        return answer;
    }
}