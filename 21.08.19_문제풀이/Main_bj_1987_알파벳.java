import java.util.*;
import java.io.*;
public class Main_bj_1987_알파벳_서울_12반_홍승기 {
	static int[] dx = {-1,1,0,0};
	static int[] dy = {0,0,-1,1};
	static boolean[][] visit;
	static int c = 0;
	static String r = "";
	public static void dfs(char[][] m,int x, int y,int count) {
		visit[x][y] = true;
		if(c < count) c = count;
		//r += m[x][y];
		for(int i = 0; i < 4; i++) {
			int newx = x+dx[i];
			int newy = y+dy[i];
			String d = "";
			if(newx >= 0 && newx < m.length && newy >= 0 && newy < m[0].length && !visit[newx][newy]) {
				d+=m[newx][newy];
				if(!r.contains(d)) {
					count++;
					visit[newx][newy] = true;
					r += m[newx][newy];
					//System.out.println(r);
					dfs(m,newx,newy,count);
					count--;
					r = r.replace(d, "");
					//System.out.println(r);
				}
			}
		}
	}
	public static void main(String[] args) throws Exception{
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		StringTokenizer st = new StringTokenizer(br.readLine());
		int R = Integer.parseInt(st.nextToken());
		int C = Integer.parseInt(st.nextToken());
		
		//int[] target = {0,0};
		char[][] map = new char[R][C];
		visit = new boolean[R][C];
		for(int i = 0; i < R; i++) {
			char[] c = br.readLine().toCharArray();
			for(int j = 0; j < C; j++) {
				map[i][j] = c[j];
			}
		}

		r+=map[0][0];
		dfs(map,0,0,1);
		System.out.println(c);
	}

}
