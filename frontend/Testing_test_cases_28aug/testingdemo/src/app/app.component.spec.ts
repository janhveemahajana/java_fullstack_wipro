import { AppComponent } from "./app.component";


describe(("App Palindrome Test"), () => {
  let component: AppComponent;

  beforeEach(() => {
    component = new AppComponent();
  });

  it("TestCase1", () => {
    let value = component.isPalindrome("madam");
    expect(value).toBe(true);
  });

  it("TestCase2", () => {
    let value = component.isPalindrome("hello");
    expect(value).toBe(false);
  });

});
