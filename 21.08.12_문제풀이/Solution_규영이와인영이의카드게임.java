import java.util.*;
import java.io.*;

public class Solution_규영이와인영이의카드게임 {
	static boolean[] visit;
	static int[] select = new int[9];
	static int[] a;
	static int[] b;
	static int awin;
	static int bwin;
	//static int count1;
	public static void perm(int count) {
		if(count == 9) {
			//count1++;
			//System.out.println(Arrays.toString(select)+" "+count1);
			int at = 0;
			int bt = 0;
			for(int i = 0; i < 9; i++) {
				int ascore = a[i];
				int bscore = b[select[i]];
				
				if(ascore > bscore) {
					at = at + ascore + bscore;
				}
				else if( bscore > ascore) {
					bt = bt + ascore + bscore;
				}
			}
			if(at > bt) {
				awin++;
			}
			else if(bt > at) {
				bwin++;
			}
			//select = new int[9];
			return;
		}
		for(int i = 0; i < 9; i++) {
			if(visit[i]) continue;
			visit[i] = true;
			select[count] = i;
			perm(count+1);
			visit[i] = false;
		}
	}
	public static void main(String[] args) throws Exception{
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		int T = Integer.parseInt(br.readLine());
		
		for(int i = 0; i < T; i++) {
			int[] card = new int[19];
			a = new int[9];
			b = new int[9];
			visit = new boolean[9];
			int aidx = 0;
			int bidx = 0;
			StringTokenizer st = new StringTokenizer(br.readLine());
			for(int j = 1; j < 10; j++) {
				int num = Integer.parseInt(st.nextToken());
				if(card[num] == 0) {
					card[num] = 1;
				}
			}
			for(int j = 1; j < 19; j++) {
				if(card[j] == 1) {
					a[aidx] = j;
					aidx++;
				}
				else {
					b[bidx] = j;
					bidx++;
				}
			}
			awin = 0;
			bwin = 0;
			perm(0);
			System.out.println("#"+(i+1)+" "+awin+" "+bwin);
		}
	}

}
