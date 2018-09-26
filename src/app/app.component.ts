import { Component, OnInit } from "@angular/core";
import { AuthService } from "./auth.service";
import { User } from "./model/model.user";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  title = "uniro";

  user: User = new User();
  errorMessage: string;
  constructor(private auth: AuthService) {}

  ngOnInit() {}

  loginUser(event) {
    event.preventDefault();
    const target = event.target;
    console.log(this.user);

    console.log(this.user);

    this.auth.getUserDetails(this.user).subscribe(
      data => {
        console.log(data);
        //this.router.navigate(["/home"]);
      },
      err => {
        this.errorMessage = "error:username or password is incorrect";
      }
    );
  }
}
