import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { User } from "./model/model.user";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  constructor(private http: HttpClient) {}

  getUserDetails(user: User) {
    return this.http.post("/user/test", user);
  }
}
