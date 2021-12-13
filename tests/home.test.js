import { Selector, ClientFunction } from "testcafe";

fixture`tests the complete user flow`.page`http://msadvisor2.surge.sh/`;

test("test user flow", async (t) => {
  const getLocation = ClientFunction(() => document.location.href);

  const title = "Welcome to the MS Advisor";
  const buttonName = "Create New Plan";
  const option = "Traditional";
  const restrictedPageHeading = "Instruction Place Holder"
  const planHeaderText = "Create Your Academic Plan"
  const defaultSemValue = "SP-2022"

  const root = Selector("#root")
  const text = Selector(".home").find("h1").innerText;
  const button = Selector(".home").find("button");
  const dropdown = root.find("form").find("select");
  const dropdownOption = dropdown.find("option");
  const nextButton = Selector(".options-footer").find("button").withText("Next");
  const header = root.find("p").innerText;
  const csCheckbox = Selector("#cs-checkbox-0")
  const mathCheckbox = Selector("#math-checkbox-0")
  const plCheckbox = Selector("#custom-checkbox-0")
  const seCheckbox = Selector("#custom-checkbox-2")
  const submitButton = Selector(".waivers-header").find("button").withText("Submit")
  const planHeader = Selector(".plan-header").find("h1").innerText
  const defaultSem = Selector(".Arjai").find("h3").innerText
  const draggable = Selector('div').withAttribute('data-rbd-draggable-id', 'CS 4200');
  const droppable = Selector('div').withAttribute('data-rbd-droppable-id','SP-2022')


  await t
    // Use the assertion to check if the actual header text is equal to the expected one
    .expect(text).eql(title)
    .expect(button.innerText).eql(buttonName)
    .click(button)
    .expect(getLocation()).eql("http://msadvisor2.surge.sh/options")
    .click(dropdown)
    .click(dropdownOption.withText(option))
    .click(nextButton)
    .expect(getLocation()).eql("http://msadvisor2.surge.sh/restricted")
    .expect(header).eql(restrictedPageHeading)
    .click(csCheckbox)
    .click(mathCheckbox)
    .click(nextButton)
    .expect(getLocation()).eql("http://msadvisor2.surge.sh/waivers")
    .click(plCheckbox)
    .click(seCheckbox)
    .click(submitButton)
    .expect(getLocation()).eql("http://msadvisor2.surge.sh/planner")
    .expect(planHeader).eql(planHeaderText)
    .expect(defaultSem).eql(defaultSemValue)
    .dragToElement(draggable, droppable)
});
