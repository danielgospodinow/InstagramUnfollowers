package main

import (
	"fmt"
	"net/http"
	"os/exec"
	"strings"
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

func handleGetFollowers(w http.ResponseWriter, r *http.Request) {
	params := r.URL.Query()
	w.Write([]byte(getUnfollowers(params["username"][0], params["password"][0])))

	fmt.Println("Request completed!")
}

func main() {
	http.HandleFunc("/", handleGetFollowers)

	if err := http.ListenAndServe(":5000", nil); err != nil {
		panic(err)
	}
}
