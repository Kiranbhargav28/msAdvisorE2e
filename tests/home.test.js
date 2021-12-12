import { Selector, ClientFunction  } from "testcafe";

fixture`/home`.page`http://msadvisor2.surge.sh/`;

test("testing-header", async (t) => {
    const getLocation = ClientFunction(() => document.location.href);

  const title = "Welcome to the MS Advisor";
  const buttonName = "Create New Plan"
  const text = Selector(".home").find("h1").innerText;
  const button = Selector(".home").find("button")

  await t
    // Use the assertion to check if the actual header text is equal to the expected one
    .expect(text).eql(title)
    .expect(button.innerText).eql(buttonName)
    .click(button)
    .expect(getLocation()).eql('http://msadvisor2.surge.sh/options')
});
