import java.net.URI;
import java.net.http.*;

class Httpdemo {
    public static void main(String args[]) throws Exception {
        HttpClient client = HttpClient.newHttpClient();
        HttpRequest request = HttpRequest.newBuilder()
                .uri(URI.create("https://api.github.com/users/anugraha26"))
                .build();
        HttpResponse<String> response =
                client.send(request,
                HttpResponse.BodyHandlers.ofString());
        System.out.println("Status Code: " + response.statusCode());
        String data = response.body();
        System.out.println(data.substring(0, 200));
    }
}