import { Given, When } from "@cucumber/cucumber";
import { pageFixture } from "./hooks/browserContextFixture";

When('I type a first name', async () => {
    await pageFixture.page.getByPlaceholder('First Name').fill("Leo");
    await pageFixture.page.pause();
});