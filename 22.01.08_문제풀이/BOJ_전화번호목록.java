import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.*;
public class Main14 {

	public static void main(String[] args) throws Exception{
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		
		int T = Integer.parseInt(br.readLine());
		
		for(int i = 0; i < T; i++) {
			int n = Integer.parseInt(br.readLine());
			String[] number = new String[n];
			
			for(int j = 0; j < n; j++) {
				number[j] = br.readLine();
			}
			Arrays.sort(number);
			boolean flag = true;
			for(int j = 0; j < n-1; j++) {
				if(number[j+1].startsWith(number[j])) {
					flag = false;
					break;
				}
			}
			if(!flag) System.out.println("NO");
			else System.out.println("YES");
		}
	}

}
