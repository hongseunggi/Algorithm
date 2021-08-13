import java.util.*;
import java.io.*;

public class Main_15686_치킨배달 {
	static int T; // 배열 크기
	static int M; // 남겨야 하는 치킨집 수
	static boolean[] check; // 치킨집 선택 여부
	static int[] distance; // 거리를 담을 배열
	static int Min = Integer.MAX_VALUE;
	static ArrayList<int[]> map; // 치킨집 위치를 담는 list
	static ArrayList<int[]> house; // 집 위치를 담는 list
	
	public static void subset(int idx) {
		if(idx == map.size()) { // idx 가 모든 치킨집 수 만큼 검사 했을 경우
			int count = 0;
			int sum = 0;
			for(int i = 0; i < check.length; i++) {
				if(check[i]) count++; 
			}
			if(count != M) return; // true의 개수가 남겨야 하는 치킨집 개수와 같아야 함, 다르다면 return
			Arrays.fill(distance, Integer.MAX_VALUE); // distance 배열을 integer의 최대 값으로 초기화 해줌
			//System.out.println(Arrays.toString(check));
			for(int i = 0; i < map.size(); i++) {
				if(check[i]) { // 선택된 치킨집 일 경우에만 아래 과정 실행
					int[] cPoint = map.get(i); // 해당 치킨집 좌표를 꺼낸다
					
					for(int j = 0; j < house.size(); j++) { // 모든 집에 대한 선택된 치킨집과의 거리를 계산 한다
						distance[j] = Math.min(distance[j],Math.abs(house.get(j)[0]-cPoint[0])+Math.abs(house.get(j)[1]-cPoint[1])); 
						//저장된 distance 요소와 비교하여 작은 값으로 세팅한다
					}
				}
			}
			for(int j = 0; j < distance.length; j++) {
				sum += distance[j];
			}
			if(Min >= sum) {
				Min = sum;
			}
			return;
		}
		check[idx] = true;
		subset(idx+1);
		check[idx] = false;
		subset(idx+1);
	}
	public static void main(String[] args) throws Exception {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		StringTokenizer st = new StringTokenizer(br.readLine());
		
		T = Integer.parseInt(st.nextToken());
		M = Integer.parseInt(st.nextToken());
		house = new ArrayList<>();
		map = new ArrayList<>();
		
		for(int i = 0; i < T; i++) {
			st = new StringTokenizer(br.readLine());
			int num;
			for(int j = 0; j < T; j++) {
				num = Integer.parseInt(st.nextToken());
				if(num == 1) {
					house.add(new int[] {i, j});
				}
				else if(num == 2) {
					map.add(new int[] {i,j});
				}
			}
		}
		
		distance = new int[house.size()];
		check = new boolean[map.size()];
		subset(0);
		System.out.println(Min);
	}
}
