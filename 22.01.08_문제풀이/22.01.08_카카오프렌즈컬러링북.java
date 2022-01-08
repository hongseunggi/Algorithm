import java.util.*;
class Solution {
    static int[] dx = {1,-1,0,0};
    static int[] dy = {0,0,1,-1};
    public static int[] solution(int m, int n, int[][] picture) {
        int[][] cpic = new int[m][n];
        for (int i = 0; i < m; i++) {
            for (int j = 0; j < n; j++) {
                cpic[i][j] = picture[i][j];
            }
        }
        Queue<int []> q = new LinkedList<>();
        int[] result = new int[2];
        int max = 1;
        int count = 0;
        for (int i = 0; i < m; i++) {
            for (int j = 0; j < n; j++) {
                if (cpic[i][j] != 0) {
                    count++;
                    int t = cpic[i][j];
                    cpic[i][j] = 0;
                    int area = 1;
                    q.offer(new int[] {i,j});
                    while(!q.isEmpty()){
                        int[] point = q.poll();
                        
                        for(int d = 0; d < 4; d++){
                            int nx = point[0] + dx[d];
                            int ny = point[1] + dy[d];
                            
                            if(nx >= 0 && nx < m && ny >= 0 && ny < n && cpic[nx][ny] == t){
                                area++;
                                cpic[nx][ny] = 0;
                                q.offer(new int[] {nx,ny});
                            }
                        }
                    }
                    if(max < area){
                    //    System.out.println(region+" "+area);
                        max = area;
                    }
                }
            }
        }

        result[0] = count;
        result[1] = max;
        return result;
    }

}