package main

import (
	"fmt"
	"net/http"
	"os/exec"
	"strings"
	"time"

	"github.com/rs/cors"
)

func getUnfollowers(username, password string) string {
	cmd := exec.Command("./getUnfollowers.py", username, password)
	out, err := cmd.Output()

	if err != nil {
		println(err.Error())
		return string(err.Error())
	}

	outputs := strings.Split(string(out), "\n")
	return outputs[len(outputs)-1]
}

func main() {
	mux := http.NewServeMux()
	mux.HandleFunc("/", func(response http.ResponseWriter, request *http.Request) {
		response.Header().Set("Content-Type", "application/json")
		request.ParseForm()
		response.Write([]byte(getUnfollowers(request.Form.Get("username"), request.Form.Get("password"))))

		fmt.Println("Request completed! Time: " + time.Now().String() + "\n")
	})

	port := ":5000"
	handler := cors.Default().Handler(mux)
	fmt.Printf("Server listening at port %s\n", port)
	http.ListenAndServe(port, handler)
}
