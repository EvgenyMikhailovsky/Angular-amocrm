import { Component } from "@angular/core";
import { validateByLength } from "src/utils/validator";

@Component({
  selector: "app-form",
  templateUrl: "./form.component.html",
  styleUrls: ["./form.component.scss"]
})
export class FormComponent {
  error = "";

  validationData = {
    login: [
      {
        validate: (value: string) => validateByLength(value, 4, "higherOrEqual"),
        errorMsg: "Login size must be higher or equal 4"
      },
      {
        validate: (value: string) => validateByLength(value, 32, "lowerOrEqual"),
        errorMsg: "Login size must be lower or equal 32"
      },
      {
        validate: (value: string) => value.length > 0,
        errorMsg: "The field is required"
      },
    ],
    password: [
      {
        validate: (value: string) => validateByLength(value, 6, "higherOrEqual"),
        errorMsg: "Password size must be higher or equal 6"
      },
      {
        validate: (value: string) => validateByLength(value, 52, "lowerOrEqual"),
        errorMsg: "Password size must be lower or equal 52"
      },
      {
        validate: (value: string) => value.length > 0,
        errorMsg: "The field is required"
      },
    ]
  }

  handleFormSubmit = (e: Event) => {
    const form = e.target as HTMLFormElement;
  }
}
