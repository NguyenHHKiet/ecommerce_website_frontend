import { redirect } from "react-router-dom";

export function action() {
    localStorage.removeItem("currentUser");
    localStorage.removeItem("expiration");
    return redirect("/");
}
